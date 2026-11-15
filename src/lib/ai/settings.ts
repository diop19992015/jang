import type { AiMode } from "@/lib/types";
import type { AiQuality, AiThinkingLevel } from "@/lib/ai/provider";

/**
 * Choix du modèle et du niveau de réflexion.
 *
 * - Question courte → modèle économique, réflexion basse.
 * - Explication de chapitre → réflexion moyenne.
 * - Correction d'exercice (texte ou photo) → modèle complet, réflexion haute.
 */
export interface ProfileInput {
  mode: AiMode;
  messageLength: number;
  hasImages: boolean;
  hintOnly?: boolean;
}

export interface AiProfile {
  quality: AiQuality;
  thinkingLevel: AiThinkingLevel;
  maxOutputTokens: number;
}

export function selectProfile(input: ProfileInput): AiProfile {
  if (input.mode === "correction" || input.hasImages) {
    return {
      quality: "full",
      thinkingLevel: input.hintOnly ? "medium" : "high",
      maxOutputTokens: 2000,
    };
  }

  if (input.mode === "expliquer") {
    return { quality: "full", thinkingLevel: "medium", maxOutputTokens: 1800 };
  }

  if (input.mode === "interroger") {
    return { quality: "lite", thinkingLevel: "low", maxOutputTokens: 900 };
  }

  if (input.messageLength > 320) {
    return { quality: "full", thinkingLevel: "medium", maxOutputTokens: 1600 };
  }

  return { quality: "lite", thinkingLevel: "low", maxOutputTokens: 1000 };
}
