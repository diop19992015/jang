import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Jeton de session de l'espace auteur.
 *
 * Format : `base64url(email|expiration).signature`
 * La signature HMAC-SHA256 empêche toute falsification. Ce module est
 * volontairement pur (aucun import `next/headers`) pour pouvoir être
 * utilisé dans `src/proxy.ts` (runtime Node.js).
 */

export const ADMIN_COOKIE = "jang_admin";
/** Durée de vie d'une session : 8 heures. */
export const ADMIN_MAX_AGE = 60 * 60 * 8;

const FALLBACK_SECRET = "jang-demo-secret-a-remplacer-en-production-2026";

function secret(): string {
  return process.env.ADMIN_SECRET?.trim() || FALLBACK_SECRET;
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

function sameSignature(a: string, b: string): boolean {
  const left = Buffer.from(a, "utf8");
  const right = Buffer.from(b, "utf8");
  if (left.length !== right.length) return false;
  try {
    return timingSafeEqual(left, right);
  } catch {
    return false;
  }
}

export function createAdminToken(email: string, now = Date.now()): string {
  const expires = now + ADMIN_MAX_AGE * 1000;
  const payload = `${email}|${expires}`;
  const encoded = Buffer.from(payload, "utf8").toString("base64url");
  return `${encoded}.${sign(payload)}`;
}

export interface AdminSession {
  email: string;
  expires: number;
}

/** Vérifie un jeton brut ; renvoie la session ou `null`. */
export function verifyAdminToken(token: string | undefined | null): AdminSession | null {
  if (!token) return null;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return null;

  const encoded = token.slice(0, dot);
  const signature = token.slice(dot + 1);

  let payload: string;
  try {
    payload = Buffer.from(encoded, "base64url").toString("utf8");
  } catch {
    return null;
  }

  if (!sameSignature(sign(payload), signature)) return null;

  const separator = payload.lastIndexOf("|");
  if (separator <= 0) return null;

  const email = payload.slice(0, separator);
  const expires = Number(payload.slice(separator + 1));
  if (!email || !Number.isFinite(expires)) return null;
  if (expires < Date.now()) return null;

  return { email, expires };
}

export function adminCredentials(): { email: string; password: string } {
  return {
    email: (process.env.ADMIN_EMAIL?.trim() || "auteur@jang.sn").toLowerCase(),
    password: process.env.ADMIN_PASSWORD?.trim() || "jang-demo-2026",
  };
}

/** Comparaison à temps constant du mot de passe. */
export function verifyCredentials(email: string, password: string): boolean {
  const expected = adminCredentials();
  if (email.trim().toLowerCase() !== expected.email) return false;
  return sameSignature(password, expected.password);
}
