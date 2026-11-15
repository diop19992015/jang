import { recordFeedback } from "@/lib/ai/feedback";
import { feedbackSchema } from "@/lib/ai/schema";
import { readEleveSession } from "@/lib/ai/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Pouce haut / bas sur une réponse.
 * Seuls le vote et le mode sont conservés (voir `src/lib/ai/feedback.ts`).
 */
export async function POST(request: Request) {
  const session = readEleveSession(request);
  if (!session) {
    return Response.json({ error: "Session expirée." }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = feedbackSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json({ error: "Vote invalide." }, { status: 400 });
  }

  const saved = recordFeedback({
    sessionId: session.id,
    vote: parsed.data.vote,
    mode: parsed.data.mode,
    createdAt: new Date().toISOString(),
  });

  return Response.json({ ok: true, saved }, { headers: { "Cache-Control": "no-store" } });
}
