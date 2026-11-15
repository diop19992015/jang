/**
 * Interface fournisseur d'IA.
 *
 * La route ne connaît que ce contrat : génération en flux à partir d'une
 * instruction système, de messages, d'images et de paramètres. Ajouter un
 * fournisseur (OpenAI, Mistral, modèle local) revient à écrire une nouvelle
 * implémentation et à la déclarer dans `src/lib/ai/index.ts`.
 */

export type AiProviderId = "gemini" | "mock";

export type AiQuality = "lite" | "full";

export type AiThinkingLevel = "low" | "medium" | "high";

export interface AiTurn {
  role: "user" | "assistant";
  content: string;
}

export interface AiImage {
  mimeType: "image/jpeg" | "image/png" | "image/webp";
  /** Base64 brut, sans préfixe `data:`. */
  data: string;
}

export interface AiUsage {
  inputTokens?: number;
  outputTokens?: number;
}

export interface AiProviderRequest {
  /** Questions courtes → `lite` ; corrections et explications → `full`. */
  quality: AiQuality;
  systemInstruction: string;
  messages: AiTurn[];
  /** Images jointes au dernier message de l'élève uniquement. */
  images: AiImage[];
  thinkingLevel: AiThinkingLevel;
  signal: AbortSignal;
  maxOutputTokens?: number;
  onUsage?: (usage: AiUsage) => void;
}

export interface AiProvider {
  readonly id: AiProviderId;
  stream(request: AiProviderRequest): AsyncIterable<string>;
}
