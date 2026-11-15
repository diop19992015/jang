/**
 * Erreurs normalisées de l'assistant.
 *
 * Aucun fournisseur ne fuit ses types d'erreur vers la route ou l'interface :
 * tout est traduit ici en un code stable et un message français.
 */

export type AiErrorCode =
  | "session"
  | "validation"
  | "quota"
  | "concurrency"
  | "safety"
  | "overload"
  | "provider"
  | "timeout";

export class AiError extends Error {
  readonly code: AiErrorCode;
  readonly status: number;
  /** Statut HTTP renvoyé par le fournisseur, s'il existe. */
  readonly providerStatus?: number;
  /** Code d'erreur brut du fournisseur (safety, jailbreak…), pour les journaux. */
  readonly providerCode?: string;

  constructor(
    code: AiErrorCode,
    message: string,
    options: { status?: number; providerStatus?: number; providerCode?: string } = {},
  ) {
    super(message);
    this.name = "AiError";
    this.code = code;
    this.status = options.status ?? 400;
    this.providerStatus = options.providerStatus;
    this.providerCode = options.providerCode;
  }
}

const SAFETY_CODES = new Set([
  "safety",
  "jailbreak",
  "prohibited_content",
  "blocklist",
  "recitation",
  "image_safety",
]);

/** Erreur de filtre de sécurité (à distinguer d'une panne). */
export function isSafetyCode(code: string | undefined): boolean {
  if (!code) return false;
  const normalized = code.toLowerCase().replace(/[\s-]/g, "_");
  return (
    SAFETY_CODES.has(normalized) ||
    normalized.includes("safety") ||
    normalized.includes("prohibited") ||
    normalized.includes("blocklist")
  );
}

/** Panne temporaire du fournisseur : quota partagé, surcharge, indisponibilité. */
export function isRetryableStatus(status: number | undefined): boolean {
  return status === 429 || status === 500 || status === 502 || status === 503 || status === 504;
}

export function isRetryableMessage(message: string): boolean {
  return /RESOURCE_EXHAUSTED|UNAVAILABLE|INTERNAL|DEADLINE_EXCEEDED|quota|overloaded|surcharg/i.test(
    message,
  );
}

/**
 * Traduit une erreur quelconque en `AiError`.
 *
 * Les codes `safety`, `jailbreak`, `prohibited_content` et `blocklist` sont
 * ceux renvoyés par l'API quand un filtre bloque la requête (HTTP 400).
 */
export function toAiError(caught: unknown): AiError {
  if (caught instanceof AiError) return caught;

  const source = caught as {
    status?: number;
    code?: string | number;
    message?: string;
    error?: { code?: string; message?: string };
  };
  const providerCode =
    typeof source?.error?.code === "string"
      ? source.error.code
      : typeof source?.code === "string"
        ? source.code
        : undefined;
  const message = source?.error?.message ?? source?.message ?? "";
  const status = typeof source?.status === "number" ? source.status : undefined;

  if (isSafetyCode(providerCode) || isSafetyCode(message) || /safety/i.test(message)) {
    return new AiError(
      "safety",
      "Cette demande a été bloquée par le filtre de sécurité. Reformule ta question sur le cours.",
      { status: 400, providerStatus: status, providerCode },
    );
  }

  if (isRetryableStatus(status) || isRetryableMessage(message)) {
    return new AiError(
      "overload",
      "L'assistant est très sollicité, réessaie dans quelques minutes.",
      { status: 503, providerStatus: status, providerCode },
    );
  }

  if (status === 401 || status === 403) {
    return new AiError(
      "provider",
      "L'assistant n'est pas correctement configuré sur ce serveur.",
      { status: 502, providerStatus: status, providerCode },
    );
  }

  return new AiError(
    "provider",
    "L'assistant n'a pas pu répondre. Réessaie dans un instant.",
    { status: 502, providerStatus: status, providerCode },
  );
}
