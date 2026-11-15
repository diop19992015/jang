import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";

/**
 * Session élève anonyme.
 *
 * L'application n'a pas encore de comptes Supabase : plutôt que d'envoyer un
 * e-mail ou un identifiant personnel au fournisseur d'IA, la route exige une
 * session signée, propre à l'appareil. Le jeton ne contient qu'un identifiant
 * aléatoire et une date d'expiration, signés en HMAC-SHA256.
 *
 * Branchement Supabase : remplacer `readEleveSession` par la lecture de la
 * session serveur (cookie httpOnly Supabase) ; le reste de la route ne change
 * pas.
 */

export const ELEVE_COOKIE = "jang_eleve";
export const SESSION_SECRET_ENV = "AI_SESSION_SECRET";
export const SESSION_DAYS = 180;

const DEV_SECRET = "jang-session-dev-a-changer-en-production";

function secret(): string {
  return (
    process.env[SESSION_SECRET_ENV] ??
    process.env.ADMIN_SECRET ??
    DEV_SECRET
  );
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export interface EleveSession {
  /** Identifiant anonyme de l'appareil (jamais un e-mail). */
  id: string;
  expiresAt: number;
}

export function createEleveSession(now = Date.now()): { session: EleveSession; token: string } {
  const session: EleveSession = {
    id: randomUUID(),
    expiresAt: now + SESSION_DAYS * 24 * 60 * 60 * 1000,
  };
  const payload = `${session.id}|${session.expiresAt}`;
  return { session, token: `${Buffer.from(payload).toString("base64url")}.${sign(payload)}` };
}

export function verifyEleveToken(
  token: string | undefined | null,
  now = Date.now(),
): EleveSession | null {
  if (!token) return null;
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  let payload: string;
  try {
    payload = Buffer.from(encoded, "base64url").toString("utf8");
  } catch {
    return null;
  }

  const expected = Buffer.from(sign(payload));
  const received = Buffer.from(signature);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return null;

  const [id, rawExpiry] = payload.split("|");
  const expiresAt = Number(rawExpiry);
  if (!id || !Number.isFinite(expiresAt) || expiresAt <= now) return null;

  return { id, expiresAt };
}

function readCookie(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return null;
}

export function readEleveSession(request: Request): EleveSession | null {
  return verifyEleveToken(readCookie(request.headers.get("cookie"), ELEVE_COOKIE));
}

export function sessionCookie(token: string, maxAgeSeconds = SESSION_DAYS * 24 * 60 * 60): string {
  const parts = [
    `${ELEVE_COOKIE}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAgeSeconds}`,
  ];
  if (process.env.NODE_ENV === "production") parts.push("Secure");
  return parts.join("; ");
}

/** Empreinte non réversible utilisée dans les journaux. */
export function anonymize(id: string): string {
  return createHmac("sha256", secret()).update(id).digest("hex").slice(0, 12);
}

export function isUsingDevSecret(): boolean {
  return !process.env[SESSION_SECRET_ENV] && !process.env.ADMIN_SECRET;
}
