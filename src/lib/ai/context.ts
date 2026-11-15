import { AI_MODE_LABELS, type AiMode, type MatiereId, type NiveauId, type SerieId } from "@/lib/types";

/** Longueur maximale de l'extrait de cours envoyé au modèle. */
export const MAX_EXCERPT_CHARS = 4000;

const NIVEAU_LABEL: Record<NiveauId, string> = {
  "3eme": "3ème (préparation du BFEM)",
  seconde: "2nde",
  premiere: "1ère",
  terminale: "Terminale (préparation du BAC)",
};

const MATIERE_LABEL: Record<MatiereId, string> = {
  maths: "Mathématiques",
  pc: "Physique-Chimie (sciences physiques)",
  svt: "Sciences de la vie et de la Terre (SVT)",
  francais: "Français (langue et littérature)",
  histoire: "Histoire",
  geographie: "Géographie",
  anglais: "Anglais",
  philosophie: "Philosophie",
  economie: "Économie (et comptabilité)",
};

export interface CourseContext {
  niveau: NiveauId;
  serie: SerieId | null;
  matiere: MatiereId | null;
  chapitreTitre: string | null;
  mode: AiMode;
  excerpt: string;
  hintOnly?: boolean;
}

/** Nettoie le Markdown pour n'envoyer que le texte utile du cours. */
export function extractCourseExcerpt(markdown: string, max = MAX_EXCERPT_CHARS): string {
  const cleaned = markdown
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/^:::.*$/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^\s*\|?[-:| ]+\|?\s*$/gm, "")
    .replace(/^\s{0,3}#{1,6}\s*/gm, "")
    .replace(/[*_`>]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (cleaned.length <= max) return cleaned;

  // Coupe sur un blanc pour ne pas tronquer une formule au milieu.
  const slice = cleaned.slice(0, max);
  const lastBreak = Math.max(slice.lastIndexOf("\n\n"), slice.lastIndexOf(". "));
  return (lastBreak > max * 0.6 ? slice.slice(0, lastBreak) : slice).trim();
}

/** Bloc de contexte ajouté au message de l'élève, à chaque requête. */
export function buildContextBlock(context: CourseContext): string {
  const serie = context.serie ? `série ${context.serie}` : "sans série";
  const matiere = context.matiere ? MATIERE_LABEL[context.matiere] : "toutes les matières";
  const chapitre = context.chapitreTitre
    ? `« ${context.chapitreTitre} »`
    : "aucun chapitre sélectionné";

  const lines = [
    "Contexte du message (ne le répète pas tel quel) :",
    `- Niveau : ${NIVEAU_LABEL[context.niveau]}, ${serie}`,
    `- Matière : ${matiere}`,
    `- Chapitre : ${chapitre}`,
    `- Mode : ${AI_MODE_LABELS[context.mode]}`,
  ];

  if (context.excerpt) {
    lines.push("", "Extrait du cours du chapitre :", context.excerpt);
  } else {
    lines.push("", "Aucun extrait de cours n'est disponible pour ce chapitre.");
  }

  if (context.hintOnly) {
    lines.push(
      "",
      "L'élève demande UNIQUEMENT un indice : ne donne ni la solution complète ni le résultat final.",
    );
  }

  return lines.join("\n");
}
