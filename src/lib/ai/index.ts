import { GeminiProvider } from "@/lib/ai/gemini-provider";
import { MockProvider } from "@/lib/ai/mock-provider";
import type { AiProvider, AiProviderId } from "@/lib/ai/provider";

/**
 * Sélection du fournisseur d'IA.
 *
 * `AI_PROVIDER=gemini` + `GEMINI_API_KEY` → Gemini.
 * Sinon (valeur absente, inconnue ou clé manquante) → démonstration locale.
 */
export function resolveProvider(
  id: string | undefined = process.env.AI_PROVIDER,
  env: NodeJS.ProcessEnv = process.env,
): AiProvider {
  const normalized = (id ?? "mock").toLowerCase() as AiProviderId | string;
  if (normalized === "gemini") {
    const apiKey = env.GEMINI_API_KEY ?? "";
    if (apiKey) return new GeminiProvider(apiKey, env);
    avertirCleAbsente();
  }
  return new MockProvider();
}

/** Avertit une seule fois par démarrage : Gemini demandé mais clé absente. */
let averti = false;
function avertirCleAbsente() {
  if (averti) return;
  averti = true;
  console.warn(
    "[jang] AI_PROVIDER=gemini mais GEMINI_API_KEY est absente de l'environnement : " +
      "l'assistant répond en démonstration. Ajoutez la clé dans `.env.local` puis redémarrez.",
  );
}

/** Gemini est demandé mais non activé (clé manquante) ? Sert au diagnostic. */
export function geminiSansCle(env: NodeJS.ProcessEnv = process.env): boolean {
  return (
    (env.AI_PROVIDER ?? "").toLowerCase() === "gemini" && !env.GEMINI_API_KEY
  );
}

export function providerName(provider: AiProvider): string {
  return provider.id;
}
