import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

import {
  MATIERES,
  NIVEAUX,
  SERIES,
  chapterKey,
  type ChapterMeta,
  type Chapitre,
  type ContentIndex,
  type Difficulte,
  type Exercice,
  type ExerciceType,
  type MatiereId,
  type NiveauId,
  type QuizQuestion,
  type SerieId,
} from "@/lib/types";
import {
  asBoolean,
  asNumber,
  asString,
  asStringArray,
  parseFrontmatter,
} from "@/lib/content/frontmatter";
import { splitSections } from "@/lib/markdown/sections";

/**
 * Repository de contenus basé sur le système de fichiers.
 *
 * Les fichiers Markdown de `src/content` jouent le rôle de base de données
 * (seed). Voir `supabase/schema.sql` et le README pour brancher Supabase :
 * l'interface publique de ce module reste identique.
 */

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");
const CONTENT_CACHE = process.env.NODE_ENV === "production";

function readIfExists(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function listMarkdown(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function listDirectories(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function normalizeSeries(value: unknown, niveau: NiveauId): SerieId[] {
  if (niveau === "3eme") return [];
  const raw = Array.isArray(value) ? value : typeof value === "string" ? value.split(/[,;]/) : [];
  const series = raw
    .map((item) => String(item).trim())
    .filter((item): item is SerieId => (SERIES as readonly string[]).includes(item));
  return Array.from(new Set(series));
}

function normalizeDifficulte(value: unknown): Difficulte {
  const level = Math.min(3, Math.max(1, Math.round(asNumber(value, 2))));
  return level as Difficulte;
}

function normalizeType(value: unknown): ExerciceType {
  const raw = asString(value, "entrainement").toLowerCase();
  if (raw === "bac" || raw === "bfem") return raw;
  return "entrainement";
}

function parseExercise(
  filePath: string,
  chapitre: Pick<ChapterMeta, "id" | "niveau" | "series" | "matiere" | "slug">,
): Exercice | null {
  const raw = readIfExists(filePath);
  if (!raw) return null;
  const { data, body } = parseFrontmatter(raw);
  if (!body.trim()) return null;

  const { sections } = splitSections(body);
  const find = (needle: string) =>
    sections.find((section) => section.title.toLowerCase().includes(needle));

  const enonce = find("énoncé")?.markdown ?? find("enonce")?.markdown ?? body.trim();
  const solution =
    find("solution")?.markdown ??
    find("corrigé")?.markdown ??
    find("corrige")?.markdown ??
    "";

  const fallbackName = path.basename(filePath, ".md").replace(/^\d+-/, "").replace(/-/g, " ");

  return {
    id: `${chapitre.id}-${path.basename(filePath, ".md")}`,
    chapitreId: chapitre.id,
    niveau: chapitre.niveau,
    series: chapitre.series,
    matiere: chapitre.matiere,
    chapitreSlug: chapitre.slug,
    titre: asString(data.titre, fallbackName),
    enonce,
    solution,
    indices: asStringArray(data.indices),
    difficulte: normalizeDifficulte(data.difficulte),
    type: normalizeType(data.type),
    annee: data.annee ? Math.round(asNumber(data.annee)) : undefined,
    demo: asBoolean(data.demo, false),
  };
}

function parseQuiz(raw: string | null): QuizQuestion[] {
  if (!raw) return [];
  const { body } = parseFrontmatter(raw);
  const blocks = body
    .split(/^##\s+Question\s*$/gim)
    .map((block) => block.trim())
    .filter(Boolean);

  const questions: QuizQuestion[] = [];

  for (const block of blocks) {
    const lines = block.split("\n");
    const options: string[] = [];
    let bonneReponse = -1;
    const explication: string[] = [];
    const enonce: string[] = [];

    for (const line of lines) {
      const optionMatch = line.match(/^\s*-\s*\[( |x|X)\]\s+(.+)$/);
      if (optionMatch) {
        if (optionMatch[1].toLowerCase() === "x") bonneReponse = options.length;
        options.push(optionMatch[2].trim());
        continue;
      }
      if (/^\s*>\s?/.test(line)) {
        explication.push(line.replace(/^\s*>\s?/, ""));
        continue;
      }
      enonce.push(line);
    }

    if (options.length >= 2 && bonneReponse >= 0) {
      questions.push({
        id: `q${questions.length + 1}`,
        enonce: enonce.join("\n").trim(),
        options,
        bonneReponse,
        explication: explication.join("\n").trim(),
      });
    }
  }

  return questions;
}

function parseChapitreDirectory(
  niveau: NiveauId,
  matiere: MatiereId,
  slug: string,
): Chapitre | null {
  const dir = path.join(CONTENT_ROOT, niveau, matiere, slug);
  const mainPath = path.join(dir, "chapitre.md");
  const raw = readIfExists(mainPath);
  if (!raw) return null;

  const { data } = parseFrontmatter(raw);
  const titre = asString(data.titre, slug);
  const id = chapterKey({ niveau, matiere, slug });

  const resume = readIfExists(path.join(dir, "resume.md"));
  const cours = readIfExists(path.join(dir, "cours.md"));
  const formules = readIfExists(path.join(dir, "formules.md"));
  const quizRaw = readIfExists(path.join(dir, "quiz.md"));

  const exercicesDir = path.join(dir, "exercices");
  const exercices = listMarkdown(exercicesDir)
    .map((file) =>
      parseExercise(path.join(exercicesDir, file), {
        id,
        niveau,
        series: normalizeSeries(data.series ?? data.serie, niveau),
        matiere,
        slug,
      }),
    )
    .filter((item): item is Exercice => Boolean(item));

  return {
    id,
    niveau,
    series: normalizeSeries(data.series ?? data.serie, niveau),
    matiere,
    slug,
    titre,
    accroche: asString(data.accroche, ""),
    ordre: asNumber(data.ordre, 99),
    duree: asNumber(data.duree, 30),
    objectifs: asStringArray(data.objectifs),
    prerequis: asStringArray(data.prerequis),
    demo: asBoolean(data.demo, false),
    coefficient: asNumber(data.coefficient, 1),
    exerciceCount: exercices.length,
    hasResume: Boolean(resume?.trim()),
    hasCours: Boolean(cours?.trim()),
    hasFormules: Boolean(formules?.trim()),
    hasQuiz: Boolean(quizRaw?.trim()),
    enPreparation: asBoolean(data.enPreparation, false),
    statut: data.statut === "brouillon" ? "brouillon" : "publie",
    resume: resume ? parseFrontmatter(resume).body : "",
    cours: cours ? parseFrontmatter(cours).body : "",
    formules: formules ? parseFrontmatter(formules).body : "",
    exercices,
    quiz: parseQuiz(quizRaw),
  };
}

function scan(): Chapitre[] {
  const chapitres: Chapitre[] = [];

  for (const niveau of listDirectories(CONTENT_ROOT) as NiveauId[]) {
    if (!(NIVEAUX as readonly string[]).includes(niveau)) continue;
    const niveauDir = path.join(CONTENT_ROOT, niveau);
    for (const matiere of listDirectories(niveauDir) as MatiereId[]) {
      if (!(MATIERES as readonly string[]).includes(matiere)) continue;
      const matiereDir = path.join(niveauDir, matiere);
      for (const slug of listDirectories(matiereDir)) {
        const chapitre = parseChapitreDirectory(niveau, matiere, slug);
        if (chapitre) chapitres.push(chapitre);
      }
    }
  }

  return chapitres.sort((a, b) => {
    const niveauDiff = NIVEAUX.indexOf(a.niveau) - NIVEAUX.indexOf(b.niveau);
    if (niveauDiff !== 0) return niveauDiff;
    const matiereDiff = MATIERES.indexOf(a.matiere) - MATIERES.indexOf(b.matiere);
    if (matiereDiff !== 0) return matiereDiff;
    if (a.ordre !== b.ordre) return a.ordre - b.ordre;
    return a.titre.localeCompare(b.titre, "fr");
  });
}

let memoryCache: Chapitre[] | null = null;

function allChapitres(): Chapitre[] {
  if (CONTENT_CACHE && memoryCache) return memoryCache;
  const chapitres = scan();
  memoryCache = chapitres;
  return chapitres;
}

export const getChapitres = cache((): Chapitre[] =>
  allChapitres().filter((chapitre) => chapitre.statut !== "brouillon"),
);

/** Tous les chapitres, brouillons compris : réservé à l'espace auteur. */
export const getTousChapitres = cache((): Chapitre[] => allChapitres());

export function toMeta(chapitre: Chapitre): ChapterMeta {
  return {
    id: chapitre.id,
    niveau: chapitre.niveau,
    series: chapitre.series,
    matiere: chapitre.matiere,
    slug: chapitre.slug,
    titre: chapitre.titre,
    accroche: chapitre.accroche,
    ordre: chapitre.ordre,
    duree: chapitre.duree,
    objectifs: chapitre.objectifs,
    prerequis: chapitre.prerequis,
    demo: chapitre.demo,
    coefficient: chapitre.coefficient,
    exerciceCount: chapitre.exerciceCount,
    hasResume: chapitre.hasResume,
    hasCours: chapitre.hasCours,
    hasFormules: chapitre.hasFormules,
    hasQuiz: chapitre.hasQuiz,
    enPreparation: chapitre.enPreparation,
    statut: chapitre.statut,
  };
}

export function getChapitre(
  niveau: string,
  matiere: string,
  slug: string,
): Chapitre | null {
  return (
    getChapitres().find(
      (chapitre) =>
        chapitre.niveau === niveau &&
        chapitre.matiere === matiere &&
        chapitre.slug === slug,
    ) ?? null
  );
}

export function getChapitreById(id: string): Chapitre | null {
  return getChapitres().find((chapitre) => chapitre.id === id) ?? null;
}

/** Variante auteur : un brouillon reste ouvrable dans l'éditeur. */
export function getChapitreAdmin(
  niveau: string,
  matiere: string,
  slug: string,
): Chapitre | null {
  return (
    getTousChapitres().find(
      (chapitre) =>
        chapitre.niveau === niveau &&
        chapitre.matiere === matiere &&
        chapitre.slug === slug,
    ) ?? null
  );
}

export function getChapitresPour(
  niveau: NiveauId,
  matiere?: MatiereId | null,
  serie?: SerieId | null,
): Chapitre[] {
  return getChapitres().filter((chapitre) => {
    if (chapitre.niveau !== niveau) return false;
    if (matiere && chapitre.matiere !== matiere) return false;
    if (serie && chapitre.series.length > 0 && !chapitre.series.includes(serie)) {
      return false;
    }
    return true;
  });
}

export function getContentIndex(): ContentIndex {
  const chapitres = getChapitres();
  return {
    chapitres: chapitres.map(toMeta),
    exercices: chapitres.flatMap((chapitre) => chapitre.exercices),
  };
}

export function getExercicesPour(options: {
  niveau?: NiveauId;
  serie?: SerieId | null;
  matiere?: MatiereId | null;
  chapitreId?: string | null;
}): Exercice[] {
  const { niveau, serie, matiere, chapitreId } = options;
  return getChapitres()
    .filter((chapitre) => (niveau ? chapitre.niveau === niveau : true))
    .flatMap((chapitre) => chapitre.exercices)
    .filter((exercice) => {
      if (chapitreId && exercice.chapitreId !== chapitreId) return false;
      if (matiere && exercice.matiere !== matiere) return false;
      if (serie && exercice.series.length > 0 && !exercice.series.includes(serie)) {
        return false;
      }
      return true;
    });
}

/** Compteurs pour l'administration. */
export function getContentStats() {
  const chapitres = getChapitres();
  return {
    chapitres: chapitres.length,
    exercices: chapitres.reduce((total, item) => total + item.exercices.length, 0),
    quiz: chapitres.reduce((total, item) => total + item.quiz.length, 0),
    parMatiere: MATIERES.map((matiere) => ({
      matiere,
      chapitres: chapitres.filter((item) => item.matiere === matiere).length,
      exercices: chapitres
        .filter((item) => item.matiere === matiere)
        .reduce((total, item) => total + item.exercices.length, 0),
    })),
    parNiveau: NIVEAUX.map((niveau) => ({
      niveau,
      chapitres: chapitres.filter((item) => item.niveau === niveau).length,
    })),
  };
}
