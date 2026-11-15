import { createEleveSession, readEleveSession, sessionCookie } from "@/lib/ai/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Ouvre (ou renouvelle) la session anonyme de l'élève.
 *
 * Aucun e-mail, aucun identifiant personnel : un UUID aléatoire signé, requis
 * par `/api/ai/chat`. Le cookie est httpOnly et SameSite=Lax.
 */
export async function GET(request: Request) {
  const existing = readEleveSession(request);

  if (existing) {
    return Response.json(
      { ok: true, expiresAt: new Date(existing.expiresAt).toISOString() },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const { session, token } = createEleveSession();
  return Response.json(
    { ok: true, expiresAt: new Date(session.expiresAt).toISOString() },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": sessionCookie(token),
      },
    },
  );
}
