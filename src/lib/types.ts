/**
 * Modèle de données de Jàng.
 *
 * Hiérarchie : Niveau → Série → Matière → Chapitre.
 * La 3ème n'a pas de série ; les séries S1/S2 n'existent qu'au lycée.
 * Ajouter un niveau, une série ou une matière = ajouter une entrée dans
 * les constantes ci-dessous, sans toucher aux pages.
 */

export const NIVEAUX = ["3eme", "seconde", "premiere", "terminale"] as const;
export type NiveauId = (typeof NIVEAUX)[number];

/**
 * Séries du cursus sénégalais.
 *
 * `L` regroupe les séries littéraires (L1a, L1b, L'1, L2, LA) ; les séries
 * scientifiques et techniques sont conservées une par une car les programmes
 * de mathématiques, de physique-chimie et de SVT diffèrent entre elles.
 */
export const SERIES = ["L", "S1", "S2", "S3", "S4", "S5"] as const;
export type SerieId = (typeof SERIES)[number];

/**
 * Matières du cursus officiel sénégalais, de la 3ème à la Terminale.
 * Histoire et Géographie ont des référentiels distincts, donc deux identifiants.
 */
export const MATIERES = [
  "maths",
  "pc",
  "svt",
  "francais",
  "histoire",
  "geographie",
  "anglais",
  "philosophie",
  "economie",
] as const;
export type MatiereId = (typeof MATIERES)[number];

export const DIFFICULTES = [1, 2, 3] as const;
export type Difficulte = (typeof DIFFICULTES)[number];

/** Types d'exercices : entraînement, épreuve type BAC, épreuve type BFEM. */
export const EXERCICE_TYPES = ["entrainement", "bac", "bfem"] as const;
export type ExerciceType = (typeof EXERCICE_TYPES)[number];

export const STATUTS = ["a-faire", "en-cours", "maitrise"] as const;
export type StatutChapitre = (typeof STATUTS)[number];

export const NIVEAU_LABELS: Record<NiveauId, string> = {
  "3eme": "3ème",
  seconde: "2nde",
  premiere: "1ère",
  terminale: "Terminale",
};

export const SERIE_LABELS: Record<SerieId, string> = {
  L: "L",
  S1: "S1",
  S2: "S2",
  S3: "S3",
  S4: "S4",
  S5: "S5",
};

export const MATIERE_LABELS: Record<MatiereId, string> = {
  maths: "Mathématiques",
  pc: "Physique-Chimie",
  svt: "SVT",
  francais: "Français",
  histoire: "Histoire",
  geographie: "Géographie",
  anglais: "Anglais",
  philosophie: "Philosophie",
  economie: "Économie",
};

/**
 * Matières effectivement enseignées à chaque niveau du cursus sénégalais.
 * Une matière absente de cette liste n'a pas de programme officiel à ce niveau.
 */
export const MATIERES_DU_NIVEAU: Record<NiveauId, MatiereId[]> = {
  "3eme": ["francais", "maths", "histoire", "geographie", "anglais", "pc", "svt"],
  seconde: [
    "francais",
    "maths",
    "histoire",
    "geographie",
    "economie",
    "anglais",
    "pc",
    "svt",
  ],
  premiere: [
    "francais",
    "maths",
    "histoire",
    "geographie",
    "economie",
    "anglais",
    "philosophie",
    "pc",
    "svt",
  ],
  terminale: [
    "francais",
    "maths",
    "histoire",
    "geographie",
    "anglais",
    "philosophie",
    "pc",
    "svt",
  ],
};

/** Examen préparé selon le niveau. */
export function examenDuNiveau(niveau: NiveauId): "BAC" | "BFEM" | null {
  if (niveau === "terminale") return "BAC";
  if (niveau === "3eme") return "BFEM";
  return null;
}

export function niveauADesSeries(niveau: NiveauId): boolean {
  return niveau === "terminale" || niveau === "seconde" || niveau === "premiere";
}

/** Identifiant stable et lisible d'un chapitre. */
export function chapterKey(input: {
  niveau: NiveauId;
  matiere: MatiereId;
  slug: string;
}): string {
  return `${input.niveau}-${input.matiere}-${input.slug}`;
}

export interface ChapterMeta {
  id: string;
  niveau: NiveauId;
  series: SerieId[];
  matiere: MatiereId;
  slug: string;
  titre: string;
  accroche: string;
  ordre: number;
  duree: number;
  objectifs: string[];
  prerequis: string[];
  demo: boolean;
  coefficient: number;
  exerciceCount: number;
  hasResume: boolean;
  hasCours: boolean;
  hasFormules: boolean;
  hasQuiz: boolean;
  /**
   * Chapitre du programme officiel dont les cours ne sont pas encore rédigés :
   * le chapitre reste consultable (objectifs, ordre dans le programme), mais
   * l'interface annonce que le contenu arrive.
   */
  enPreparation: boolean;
  /** Un brouillon reste visible dans l'espace auteur, pas côté élève. */
  statut: "brouillon" | "publie";
}

export interface Exercice {
  id: string;
  chapitreId: string;
  niveau: NiveauId;
  series: SerieId[];
  matiere: MatiereId;
  chapitreSlug: string;
  titre: string;
  enonce: string;
  solution: string;
  indices: string[];
  difficulte: Difficulte;
  type: ExerciceType;
  annee?: number;
  demo: boolean;
}

export interface QuizQuestion {
  id: string;
  enonce: string;
  options: string[];
  bonneReponse: number;
  explication: string;
}

export interface Chapitre extends ChapterMeta {
  resume: string;
  cours: string;
  formules: string;
  exercices: Exercice[];
  quiz: QuizQuestion[];
}

/** Index léger envoyé au client (recherche, palette, exercices). */
export interface ContentIndex {
  chapitres: ChapterMeta[];
  exercices: Exercice[];
}

export interface Profile {
  prenom: string;
  niveau: NiveauId;
  serie: SerieId | null;
  dateExamen: string | null;
  examen: "BAC" | "BFEM" | null;
  objectif: string | null;
  createdAt: string;
}

export interface Note {
  id: string;
  titre: string;
  contenu: string;
  etiquettes: string[];
  chapitreId: string | null;
  couleur: NoteCouleur;
  epinglee: boolean;
  createdAt: string;
  updatedAt: string;
}

export const NOTE_COULEURS = ["neutre", "indigo", "ambre", "emeraude"] as const;
export type NoteCouleur = (typeof NOTE_COULEURS)[number];

export type AiMode = "question" | "correction" | "expliquer" | "interroger";

export const AI_MODE_LABELS: Record<AiMode, string> = {
  question: "Poser une question",
  correction: "Corriger mon exercice",
  expliquer: "Expliquer le chapitre",
  interroger: "M'interroger",
};

export interface AiMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  imageUrl?: string;
  createdAt: string;
  mode?: AiMode;
  demo?: boolean;
}

export interface AiConversation {
  id: string;
  chapitreId: string | null;
  titre: string;
  messages: AiMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface StudyContext {
  niveau: NiveauId;
  serie: SerieId | null;
  matiere: MatiereId | null;
  chapitreId: string | null;
  chapitreTitre: string | null;
}

export interface ProgressState {
  /** Statut par identifiant de chapitre. */
  statuts: Record<string, StatutChapitre>;
  /** Dernière visite ISO par chapitre. */
  visites: Record<string, string>;
  /** Scores de quiz par chapitre (0-100). */
  quiz: Record<string, { score: number; total: number; at: string }>;
  /** Jours d'étude au format YYYY-MM-DD. */
  jours: string[];
  /** Chapitres terminés (révision faite). */
  revisions: string[];
}

export interface Settings {
  theme: "sombre" | "clair" | "systeme";
  modeLeger: "auto" | "actif" | "inactif";
  tailleTexte: "petit" | "normal" | "grand";
  animations: "auto" | "reduites";
}
