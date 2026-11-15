import { GoogleGenAI } from "@google/genai";

import { toAiError } from "@/lib/ai/errors";
import type { AiProvider, AiProviderRequest } from "@/lib/ai/provider";

/**
 * Fournisseur Gemini (SDK officiel `@google/genai`, API Interactions).
 *
 * C'est le seul fichier qui cite Gemini : modèles, filtres de sécurité et
 * paramètres de génération restent ici. La clé vient de `GEMINI_API_KEY`
 * (variable serveur) et n'est jamais exposée au navigateur.
 */

const DEFAULT_MODEL = "gemini-3.5-flash";
const DEFAULT_MODEL_LITE = "gemini-3.5-flash-lite";

const SAFETY_SETTINGS = [
  "harassment",
  "hate_speech",
  "sexually_explicit",
  "dangerous_content",
  "jailbreak",
].map((type) => ({ type, threshold: "block_medium_and_above" as const }));

type InputContent =
  | { type: "text"; text: string }
  | { type: "image"; mime_type: string; data: string };

type InputStep =
  | { type: "user_input"; content: InputContent[] }
  | { type: "model_output"; content: InputContent[] };

export class GeminiProvider implements AiProvider {
  readonly id = "gemini" as const;
  private readonly client: GoogleGenAI;

  constructor(
    apiKey: string,
    private readonly env: NodeJS.ProcessEnv = process.env,
  ) {
    if (!apiKey) throw new Error("Clé Gemini absente");
    this.client = new GoogleGenAI({ apiKey });
  }

  private model(quality: AiProviderRequest["quality"]): string {
    return quality === "lite"
      ? (this.env.GEMINI_MODEL_LITE ?? DEFAULT_MODEL_LITE)
      : (this.env.GEMINI_MODEL ?? DEFAULT_MODEL);
  }

  private buildInput(request: AiProviderRequest): InputStep[] {
    const lastUserIndex = request.messages.reduce(
      (last, message, index) => (message.role === "user" ? index : last),
      -1,
    );

    return request.messages.map((message, index) => {
      const content: InputContent[] = [{ type: "text", text: message.content }];
      if (message.role === "assistant") {
        return { type: "model_output", content };
      }
      if (index === lastUserIndex) {
        for (const image of request.images) {
          content.push({ type: "image", mime_type: image.mimeType, data: image.data });
        }
      }
      return { type: "user_input", content };
    });
  }

  async *stream(request: AiProviderRequest): AsyncIterable<string> {
    try {
      const events = await this.client.interactions.create(
        {
          model: this.model(request.quality),
          input: this.buildInput(request),
          system_instruction: request.systemInstruction,
          stream: true,
          // Mode sans état : l'historique vient de Jàng, rien n'est conservé
          // côté Google au-delà de la requête.
          store: false,
          generation_config: {
            thinking_level: request.thinkingLevel,
            max_output_tokens: request.maxOutputTokens ?? 1400,
          },
          safety_settings: SAFETY_SETTINGS,
        },
        { fetch_options: { signal: request.signal } },
      );

      for await (const event of events) {
        if (request.signal.aborted) return;

        if (event.event_type === "error") {
          throw toAiError({
            status: 400,
            error: { code: event.error?.code, message: event.error?.message },
          });
        }

        if (event.event_type === "step.delta" && event.delta.type === "text") {
          if (event.delta.text) yield event.delta.text;
          continue;
        }

        // Les compteurs de jetons arrivent en fin d'interaction, pas sur
        // `step.stop` (vérifié en appel réel, nov. 2026).
        if (event.event_type === "interaction.completed") {
          const usage = event.interaction?.usage;
          if (usage) {
            request.onUsage?.({
              inputTokens: usage.total_input_tokens,
              outputTokens: usage.total_output_tokens,
            });
          }
        }
      }
    } catch (caught) {
      throw toAiError(caught);
    }
  }
}
