import { z } from "zod";

import { AI_MODE_LABELS, MATIERES, NIVEAUX, SERIES, type AiMode } from "@/lib/types";

/**
 * Contrat d'entrée de `POST /api/ai/chat`.
 *
 * Le corps ne contient que : mode, message, images éventuelles, identifiants
 * du chapitre et de la conversation, et l'historique des 10 derniers échanges.
 * Le contexte scolaire (niveau, série, matière, extrait de cours) est
 * reconstruit côté serveur à partir de `chapitreId`.
 */

export const MAX_MESSAGE_LENGTH = 2000;
export const MAX_IMAGES = 3;
export const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
export const MAX_HISTORY_MESSAGES = 20;

const MODES = Object.keys(AI_MODE_LABELS) as [AiMode, ...AiMode[]];

/** `data:image/jpeg;base64,…` — formats acceptés par l'assistant. */
const DATA_URL = /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=\s]+$/;

const imageSchema = z
  .string()
  .max(MAX_IMAGE_BYTES, "Photo trop lourde.")
  .refine((value) => DATA_URL.test(value), "Format d'image non pris en charge.");

const historyMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().max(6000),
});

export const chatRequestSchema = z.object({
  mode: z.enum(MODES).default("question"),
  message: z
    .string()
    .trim()
    .max(MAX_MESSAGE_LENGTH, `Message trop long (${MAX_MESSAGE_LENGTH} caractères maximum).`)
    .default(""),
  images: z.array(imageSchema).max(MAX_IMAGES, "Trois photos maximum par message.").default([]),
  chapitreId: z.string().trim().max(160).nullish(),
  conversationId: z.string().trim().max(160).nullish(),
  hintOnly: z.boolean().default(false),
  history: z.array(historyMessageSchema).max(MAX_HISTORY_MESSAGES).default([]),
  contexte: z
    .object({
      niveau: z.enum(NIVEAUX),
      serie: z.enum(SERIES).nullish(),
      matiere: z.enum(MATIERES).nullish(),
    })
    .nullish(),
});

export type ChatRequestInput = z.infer<typeof chatRequestSchema>;

export interface ParsedImage {
  mimeType: "image/jpeg" | "image/png" | "image/webp";
  data: string;
}

/** Sépare l'en-tête `data:` du base64, sans conserver le préfixe. */
export function parseDataUrl(value: string): ParsedImage | null {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([\s\S]+)$/.exec(value);
  if (!match) return null;
  return {
    mimeType: match[1] as ParsedImage["mimeType"],
    data: match[2].replace(/\s+/g, ""),
  };
}

export function isValidDataUrl(value: string): boolean {
  return DATA_URL.test(value);
}

export const feedbackSchema = z.object({
  vote: z.enum(["up", "down"]),
  mode: z.enum(MODES),
});
