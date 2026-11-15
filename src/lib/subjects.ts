import { fr } from "@/lib/i18n/fr";
import { MATIERES_DU_NIVEAU, type MatiereId, type NiveauId, type SerieId } from "@/lib/types";

export interface MatiereMeta {
  id: MatiereId;
  label: string;
  short: string;
  description: string;
  accentClass: string;
  gradient: string;
  symbol: string;
}

export const MATIERES_META: Record<MatiereId, MatiereMeta> = {
  maths: {
    id: "maths",
    label: fr.matieres.maths,
    short: fr.matieres.mathsCourt,
    description: fr.matieres.mathsDesc,
    accentClass: "accent-maths",
    gradient: "from-indigo-500/25 via-indigo-400/10 to-transparent",
    symbol: "∫",
  },
  pc: {
    id: "pc",
    label: fr.matieres.pc,
    short: fr.matieres.pcCourt,
    description: fr.matieres.pcDesc,
    accentClass: "accent-pc",
    gradient: "from-amber-500/25 via-amber-400/10 to-transparent",
    symbol: "Δ",
  },
  svt: {
    id: "svt",
    label: fr.matieres.svt,
    short: fr.matieres.svtCourt,
    description: fr.matieres.svtDesc,
    accentClass: "accent-svt",
    gradient: "from-emerald-500/25 via-emerald-400/10 to-transparent",
    symbol: "ADN",
  },
  francais: {
    id: "francais",
    label: fr.matieres.francais,
    short: fr.matieres.francaisCourt,
    description: fr.matieres.francaisDesc,
    accentClass: "accent-francais",
    gradient: "from-rose-500/25 via-rose-400/10 to-transparent",
    symbol: "Aa",
  },
  histoire: {
    id: "histoire",
    label: fr.matieres.histoire,
    short: fr.matieres.histoireCourt,
    description: fr.matieres.histoireDesc,
    accentClass: "accent-histoire",
    gradient: "from-orange-500/25 via-orange-400/10 to-transparent",
    symbol: "Hist",
  },
  geographie: {
    id: "geographie",
    label: fr.matieres.geographie,
    short: fr.matieres.geographieCourt,
    description: fr.matieres.geographieDesc,
    accentClass: "accent-geographie",
    gradient: "from-teal-500/25 via-teal-400/10 to-transparent",
    symbol: "Géo",
  },
  anglais: {
    id: "anglais",
    label: fr.matieres.anglais,
    short: fr.matieres.anglaisCourt,
    description: fr.matieres.anglaisDesc,
    accentClass: "accent-anglais",
    gradient: "from-cyan-500/25 via-cyan-400/10 to-transparent",
    symbol: "EN",
  },
  philosophie: {
    id: "philosophie",
    label: fr.matieres.philosophie,
    short: fr.matieres.philosophieCourt,
    description: fr.matieres.philosophieDesc,
    accentClass: "accent-philosophie",
    gradient: "from-violet-500/25 via-violet-400/10 to-transparent",
    symbol: "Φ",
  },
  economie: {
    id: "economie",
    label: fr.matieres.economie,
    short: fr.matieres.economieCourt,
    description: fr.matieres.economieDesc,
    accentClass: "accent-economie",
    gradient: "from-fuchsia-500/25 via-fuchsia-400/10 to-transparent",
    symbol: "Éco",
  },
};

export function matiereAccent(matiere: MatiereId): string {
  return MATIERES_META[matiere]?.accentClass ?? "accent-maths";
}

export function matiereLabel(matiere: MatiereId): string {
  return MATIERES_META[matiere]?.label ?? matiere;
}

/** Ordre d'affichage de toutes les matières du cursus. */
export const ORDRE_MATIERES: MatiereId[] = [
  "maths",
  "pc",
  "svt",
  "francais",
  "histoire",
  "geographie",
  "anglais",
  "philosophie",
  "economie",
];

/** Matières effectivement enseignées à un niveau, dans l'ordre du programme. */
export function matieresDuNiveau(niveau: NiveauId): MatiereId[] {
  return MATIERES_DU_NIVEAU[niveau] ?? [];
}

export function niveauLabel(niveau: NiveauId): string {
  return fr.niveaux[niveau];
}

export function parcoursLabel(niveau: NiveauId, serie: SerieId | null): string {
  return `${fr.niveaux[niveau]}${serie ? ` · ${fr.series[serie]}` : ""}`;
}
