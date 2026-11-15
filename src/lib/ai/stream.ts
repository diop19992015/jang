import { AiError, toAiError } from "@/lib/ai/errors";
import type { AiProvider, AiProviderRequest } from "@/lib/ai/provider";

/**
 * Ouverture d'un flux fournisseur avec deux nouvelles tentatives.
 *
 * Les limites Google sont partagées par projet : une surcharge (429/503) est
 * fréquente. On réessaie uniquement avant le premier mot envoyé à l'élève,
 * avec une attente croissante, puis on laisse remonter l'erreur.
 */

export interface StreamStart {
  iterator: AsyncIterator<string>;
  first: string | null;
}

export interface OpenStreamOptions {
  retries?: number;
  /** Attente en millisecondes avant la tentative `attempt` (0-based). */
  wait?: (attempt: number) => number;
}

export async function openStream(
  provider: AiProvider,
  request: AiProviderRequest,
  options: OpenStreamOptions = {},
): Promise<StreamStart> {
  const retries = options.retries ?? 2;
  const wait = options.wait ?? ((attempt) => 600 * 2 ** attempt);
  let lastError: AiError | null = null;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const iterator = provider.stream(request)[Symbol.asyncIterator]();
      const first = await iterator.next();
      return { iterator, first: first.done ? null : (first.value as string) };
    } catch (caught) {
      lastError = toAiError(caught);
      if (lastError.code !== "overload" || attempt === retries) throw lastError;
      const delay = wait(attempt);
      if (delay > 0) await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError ?? new AiError("provider", "L'assistant n'a pas pu répondre.");
}
