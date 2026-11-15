import fs from "node:fs";
import path from "node:path";

import { anonymize } from "@/lib/ai/session";
import type { AiMode } from "@/lib/types";

/**
 * Retour de l'élève sur une réponse (pouce haut / bas).
 *
 * On n'enregistre que le vote et le mode — jamais le texte de la question, la
 * réponse ou une donnée personnelle. Écriture JSONL best-effort : sur un
 * hébergement au système de fichiers en lecture seule, l'échec est ignoré.
 */

export interface FeedbackEntry {
  sessionId: string;
  vote: "up" | "down";
  mode: AiMode;
  createdAt: string;
}

const FEEDBACK_DIR = process.env.AI_FEEDBACK_DIR ?? path.join(process.cwd(), ".data");
const FEEDBACK_FILE = path.join(FEEDBACK_DIR, "ai-feedback.jsonl");

export function recordFeedback(entry: Omit<FeedbackEntry, "sessionId"> & { sessionId: string }): boolean {
  const line = JSON.stringify({
    eleve: anonymize(entry.sessionId),
    vote: entry.vote,
    mode: entry.mode,
    date: entry.createdAt,
  });
  try {
    fs.mkdirSync(FEEDBACK_DIR, { recursive: true });
    fs.appendFileSync(FEEDBACK_FILE, `${line}\n`, "utf8");
    return true;
  } catch {
    return false;
  }
}
