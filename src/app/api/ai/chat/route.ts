import { geminiSansCle, resolveProvider } from "@/lib/ai";
import { buildContextBlock, extractCourseExcerpt } from "@/lib/ai/context";
import { AiError, toAiError } from "@/lib/ai/errors";
import { dailyLimit, MemoryLimiter } from "@/lib/ai/limiter";
import type { AiProvider, AiProviderRequest, AiUsage } from "@/lib/ai/provider";
import {
  MAX_IMAGE_BYTES,
  MAX_MESSAGE_LENGTH,
  chatRequestSchema,
  parseDataUrl,
  type ParsedImage,
} from "@/lib/ai/schema";
import { anonymize, readEleveSession } from "@/lib/ai/session";
import { selectProfile } from "@/lib/ai/settings";
import { openStream, type StreamStart } from "@/lib/ai/stream";
import { SYSTEM_PROMPT } from "@/lib/ai/system-prompt";
import { getChapitreById } from "@/lib/content/loader";
import type { NiveauId, SerieId } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/** Limites partagées par l'instance (Redis/Supabase en multi-instances). */
const limiter = new MemoryLimiter(dailyLimit());

function jsonError(error: AiError, extra: Record<string, unknown> = {}) {
  return Response.json(
    { code: error.code, error: error.message, ...extra },
    { status: error.status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const startedAt = Date.now();

  // 1. Session obligatoire — aucune donnée personnelle, un identifiant anonyme.
  const session = readEleveSession(request);
  if (!session) {
    return jsonError(
      new AiError("session", "Session expirée. Recharge la page pour continuer.", { status: 401 }),
    );
  }

  // 2. Validation stricte du corps.
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError(new AiError("validation", "Requête invalide.", { status: 400 }));
  }

  const parsed = chatRequestSchema.safeParse(payload);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return jsonError(
      new AiError("validation", issue?.message ?? "Requête invalide.", { status: 400 }),
    );
  }
  const body = parsed.data;

  if (!body.message && body.images.length === 0) {
    return jsonError(
      new AiError("validation", "Écris une question ou joins une photo.", { status: 400 }),
    );
  }
  if (body.message.length > MAX_MESSAGE_LENGTH) {
    return jsonError(
      new AiError("validation", `Message trop long (${MAX_MESSAGE_LENGTH} caractères maximum).`, {
        status: 400,
      }),
    );
  }

  const images: ParsedImage[] = [];
  for (const image of body.images) {
    const decoded = parseDataUrl(image);
    if (!decoded) {
      return jsonError(
        new AiError("validation", "Format d'image non pris en charge.", { status: 400 }),
      );
    }
    if (decoded.data.length * 0.75 > MAX_IMAGE_BYTES) {
      return jsonError(new AiError("validation", "Photo trop lourde.", { status: 400 }));
    }
    images.push(decoded);
  }

  // 3. Quota quotidien et une requête à la fois par élève.
  const decision = limiter.begin(session.id);
  if (!decision.ok) {
    if (decision.reason === "concurrency") {
      return jsonError(
        new AiError("concurrency", "Une réponse est déjà en cours. Attends qu'elle se termine.", {
          status: 429,
        }),
        { remaining: decision.remaining },
      );
    }
    return jsonError(
      new AiError(
        "quota",
        "Limite quotidienne atteinte. Reviens demain, ou continue avec tes fiches de révision.",
        { status: 429 },
      ),
      { remaining: 0 },
    );
  }

  try {
    // 4. Contexte scolaire reconstruit côté serveur.
    const chapitre = body.chapitreId ? getChapitreById(body.chapitreId) : null;
    const excerpt = chapitre ? extractCourseExcerpt(chapitre.resume || chapitre.cours) : "";

    const niveau = (chapitre?.niveau ?? body.contexte?.niveau ?? "terminale") as NiveauId;
    const serie = (chapitre?.series[0] ?? body.contexte?.serie ?? null) as SerieId | null;
    const matiere = chapitre?.matiere ?? body.contexte?.matiere ?? null;

    const contextBlock = buildContextBlock({
      niveau,
      serie,
      matiere,
      chapitreTitre: chapitre?.titre ?? null,
      mode: body.mode,
      excerpt,
      hintOnly: body.hintOnly,
    });

    const userContent = `${contextBlock}\n\n---\n\n${
      body.message || "Corrige l'exercice en photo."
    }`;

    // 5. Historique : les 10 derniers échanges (20 messages) + le message courant.
    const history = body.history
      .filter((message) => message.content.trim().length > 0)
      .slice(-20)
      .map((message) => ({ role: message.role, content: message.content }));

    const messages = [...history, { role: "user" as const, content: userContent }];

    const profile = selectProfile({
      mode: body.mode,
      messageLength: body.message.length,
      hasImages: images.length > 0,
      hintOnly: body.hintOnly,
    });

    const provider = resolveProvider();
    const controller = new AbortController();
    const abort = () => controller.abort();
    request.signal.addEventListener("abort", abort, { once: true });

    // Garde-fou : au-delà de ce délai, on abandonne l'appel pour ne jamais
    // retenir le verrou (sinon chaque tentative lente de l'API cumule et
    // l'élève reçoit 429 « une réponse est déjà en cours »).
    const GARDE_MS = 45_000;
    const garde = setTimeout(abort, GARDE_MS);

    let usage: AiUsage = {};

    const providerRequest: AiProviderRequest = {
      quality: profile.quality,
      systemInstruction: SYSTEM_PROMPT,
      messages,
      images,
      thinkingLevel: profile.thinkingLevel,
      signal: controller.signal,
      maxOutputTokens: profile.maxOutputTokens,
      onUsage: (next) => {
        usage = next;
      },
    };

    let streamStart: StreamStart;
    try {
      streamStart = await openStream(provider, providerRequest);
    } catch (caught) {
      // Le verrou doit être libéré ICI aussi : sans ça, un échec d'ouverture
      // laissait la requête « en cours » à vie et tout le reste renvoyait 429.
      request.signal.removeEventListener("abort", abort);
      clearTimeout(garde);
      limiter.end(session.id);
      const error = toAiError(caught);
      logEvent(session.id, {
        mode: body.mode,
        provider,
        quality: profile.quality,
        status: error.status,
        code: error.code,
        providerStatus: error.providerStatus,
        ms: Date.now() - startedAt,
      });
      return jsonError(error, { remaining: decision.remaining });
    }

    const encoder = new TextEncoder();
    const { iterator, first } = streamStart;

    const stream = new ReadableStream<Uint8Array>({
      async start(streamController) {
        try {
          if (first) streamController.enqueue(encoder.encode(first));
          while (true) {
            const next = await iterator.next();
            if (next.done) break;
            streamController.enqueue(encoder.encode(next.value as string));
          }
          streamController.close();
          logEvent(session.id, {
            mode: body.mode,
            provider,
            quality: profile.quality,
            status: 200,
            ms: Date.now() - startedAt,
            inputTokens: usage.inputTokens,
            outputTokens: usage.outputTokens,
          });
        } catch (caught) {
          const error = toAiError(caught);
          streamController.enqueue(
            encoder.encode(
              error.code === "safety"
                ? "\n\n> ⚠️ Cette réponse a été bloquée par le filtre de sécurité. Reformule ta question sur le cours."
                : "\n\n> ⚠️ La réponse s'est interrompue. Réessaie dans un instant.",
            ),
          );
          streamController.close();
          logEvent(session.id, {
            mode: body.mode,
            provider,
            quality: profile.quality,
            status: error.status,
            code: error.code,
            providerStatus: error.providerStatus,
            ms: Date.now() - startedAt,
            inputTokens: usage.inputTokens,
            outputTokens: usage.outputTokens,
          });
        } finally {
          clearTimeout(garde);
          request.signal.removeEventListener("abort", abort);
          limiter.end(session.id);
        }
      },
      cancel() {
        clearTimeout(garde);
        controller.abort();
        limiter.end(session.id);
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, no-transform",
        "x-ai-provider": provider.id,
        "x-ai-remaining": String(decision.remaining),
        "x-ai-quality": profile.quality,
      },
    });
  } catch (caught) {
    limiter.end(session.id);
    const error = toAiError(caught);
    logEvent(session.id, {
      mode: body.mode,
      provider: null,
      quality: null,
      status: error.status,
      code: error.code,
      ms: Date.now() - startedAt,
    });
    return jsonError(error, { remaining: decision.remaining });
  }
}

export function GET(request: Request) {
  const session = readEleveSession(request);
  const limit = dailyLimit();

  return Response.json(
    {
      provider: resolveProvider().id,
      limite: limit,
      remaining: session ? limiter.remaining(session.id) : limit,
      messageMax: MAX_MESSAGE_LENGTH,
      // Diagnostic : Gemini demandé mais non activé (clé absente).
      note: geminiSansCle()
        ? "AI_PROVIDER=gemini mais GEMINI_API_KEY absente : réponses de démonstration."
        : null,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

interface LogFields {
  mode: string;
  provider: AiProvider | null;
  quality: string | null;
  status: number;
  code?: string;
  providerStatus?: number;
  ms: number;
  inputTokens?: number;
  outputTokens?: number;
}

/**
 * Journal minimal : identifiant anonymisé, mode, durée, jetons, code d'erreur.
 * Jamais le texte des messages, jamais les images.
 */
function logEvent(sessionId: string, fields: LogFields) {
  const entry = {
    scope: "ai",
    eleve: anonymize(sessionId),
    mode: fields.mode,
    provider: fields.provider?.id ?? null,
    quality: fields.quality,
    status: fields.status,
    code: fields.code ?? null,
    providerStatus: fields.providerStatus ?? null,
    ms: fields.ms,
    inputTokens: fields.inputTokens ?? null,
    outputTokens: fields.outputTokens ?? null,
  };
  if (fields.status >= 500 || fields.code) {
    console.warn(JSON.stringify(entry));
  } else {
    console.info(JSON.stringify(entry));
  }
}
