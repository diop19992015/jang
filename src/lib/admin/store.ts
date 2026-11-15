import fs from "node:fs";
import path from "node:path";

import { MATIERES, NIVEAUX } from "@/lib/types";

/**
 * Accès en écriture au dépôt de contenus (système de fichiers).
 *
 * Toutes les entrées sont validées : on ne peut écrire que dans
 * `src/content/<niveau>/<matiere>/<slug>/` et uniquement dans les
 * fichiers pédagogiques connus. Aucune traversée de répertoire possible.
 */

export const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export const FICHIERS = [
  { name: "chapitre.md", label: "Métadonnées", kind: "meta" },
  { name: "resume.md", label: "Résumé", kind: "markdown" },
  { name: "cours.md", label: "Cours complet", kind: "markdown" },
  { name: "formules.md", label: "Formules", kind: "markdown" },
  { name: "quiz.md", label: "Quiz", kind: "markdown" },
] as const;

const ROOT_FILES = new Set<string>(FICHIERS.map((file) => file.name));

const SEGMENT = /^[a-z0-9][a-z0-9-]{0,80}$/;

export class ContentError extends Error {}

export function assertSegment(value: string, label: string): string {
  const clean = value.trim().toLowerCase();
  if (!SEGMENT.test(clean)) {
    throw new ContentError(
      `${label} invalide : utilise des minuscules, chiffres et tirets (ex. « derivation »).`,
    );
  }
  return clean;
}

function assertNiveau(niveau: string): string {
  if (!(NIVEAUX as readonly string[]).includes(niveau)) {
    throw new ContentError(`Niveau inconnu : ${niveau}.`);
  }
  return niveau;
}

function assertMatiere(matiere: string): string {
  if (!(MATIERES as readonly string[]).includes(matiere)) {
    throw new ContentError(`Matière inconnue : ${matiere}.`);
  }
  return matiere;
}

export interface ChapitrePath {
  niveau: string;
  matiere: string;
  slug: string;
}

export function chapitreDir(input: ChapitrePath): string {
  const niveau = assertNiveau(input.niveau);
  const matiere = assertMatiere(input.matiere);
  const slug = assertSegment(input.slug, "Identifiant");
  return path.join(CONTENT_ROOT, niveau, matiere, slug);
}

/** Chemin sûr d'un fichier (racine du chapitre ou `exercices/`). */
export function contentFilePath(input: ChapitrePath, file: string): string {
  const dir = chapitreDir(input);
  const normalized = file.replace(/\\/g, "/").trim();

  if (ROOT_FILES.has(normalized)) {
    return path.join(dir, normalized);
  }

  const match = normalized.match(/^exercices\/([a-z0-9][a-z0-9-]*)\.md$/);
  if (match) {
    return path.join(dir, "exercices", `${match[1]}.md`);
  }

  throw new ContentError(`Fichier non autorisé : ${file}.`);
}

export function readContentFile(input: ChapitrePath, file: string): string | null {
  try {
    return fs.readFileSync(contentFilePath(input, file), "utf8");
  } catch {
    return null;
  }
}

export function writeContentFile(
  input: ChapitrePath,
  file: string,
  content: string,
): void {
  const target = contentFilePath(input, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content.replace(/\r\n/g, "\n"), "utf8");
}

export function deleteContentFile(input: ChapitrePath, file: string): void {
  try {
    fs.unlinkSync(contentFilePath(input, file));
  } catch {
    /* fichier déjà absent */
  }
}

export function listChapitreFiles(input: ChapitrePath): string[] {
  const dir = chapitreDir(input);
  const files: string[] = [];
  for (const file of FICHIERS) {
    if (fs.existsSync(path.join(dir, file.name))) files.push(file.name);
  }
  const exDir = path.join(dir, "exercices");
  try {
    for (const name of fs.readdirSync(exDir).sort()) {
      if (name.endsWith(".md")) files.push(`exercices/${name}`);
    }
  } catch {
    /* pas d'exercices */
  }
  return files;
}

export function chapitreExists(input: ChapitrePath): boolean {
  return fs.existsSync(path.join(chapitreDir(input), "chapitre.md"));
}

export function createChapitre(input: ChapitrePath, frontmatter: string): void {
  if (chapitreExists(input)) {
    throw new ContentError("Un chapitre existe déjà à cet emplacement.");
  }
  const dir = chapitreDir(input);
  fs.mkdirSync(path.join(dir, "exercices"), { recursive: true });
  fs.writeFileSync(path.join(dir, "chapitre.md"), frontmatter, "utf8");
}

export function deleteChapitre(input: ChapitrePath): void {
  const dir = chapitreDir(input);
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

/** Modèles proposés quand l'auteur crée un fichier encore absent. */
const GABARITS: Record<string, string> = {
  "resume.md": "## L'essentiel du chapitre\n\n",
  "cours.md": "## Introduction\n\n",
  "formules.md": "## Formules essentielles\n\n",
  "quiz.md": [
    "## Question",
    "",
    "Énoncé de la question.",
    "",
    "- [ ] Proposition A",
    "- [x] Proposition B",
    "- [ ] Proposition C",
    "",
    "> Explication de la bonne réponse.",
    "",
  ].join("\n"),
};

function gabaritExercice(nom: string): string {
  const titre = nom
    .replace(/^\d+-/, "")
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, (lettre) => lettre.toUpperCase());
  return buildFrontmatter({ titre: titre || "Nouvel exercice", demo: true }) +
    "## Énoncé\n\n\n\n## Solution\n\n\n";
}

/** Crée un fichier pédagogique vide (ou à partir d'un modèle). */
export function createContentFile(input: ChapitrePath, file: string): string {
  const target = contentFilePath(input, file);
  if (fs.existsSync(target)) {
    throw new ContentError("Ce fichier existe déjà.");
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const contenu = file.startsWith("exercices/")
    ? gabaritExercice(path.basename(file, ".md"))
    : GABARITS[file] ?? "";
  fs.writeFileSync(target, contenu, "utf8");
  return contenu;
}

/** Sérialise des métadonnées en frontmatter YAML minimaliste. */
export function buildFrontmatter(meta: {
  titre: string;
  accroche?: string;
  series?: string[];
  ordre?: number;
  duree?: number;
  coefficient?: number;
  demo?: boolean;
  enPreparation?: boolean;
  statut?: "brouillon" | "publie";
  objectifs?: string[];
  prerequis?: string[];
}): string {
  const lines = ["---"];
  lines.push(`titre: ${yamlValue(meta.titre)}`);
  if (meta.accroche?.trim()) lines.push(`accroche: ${yamlValue(meta.accroche)}`);
  if (meta.series?.length) lines.push(`series: ${meta.series.join(", ")}`);
  if (meta.ordre !== undefined) lines.push(`ordre: ${meta.ordre}`);
  if (meta.duree !== undefined) lines.push(`duree: ${meta.duree}`);
  if (meta.coefficient !== undefined) lines.push(`coefficient: ${meta.coefficient}`);
  lines.push(`demo: ${meta.demo === true && !meta.enPreparation ? "true" : "false"}`);
  if (meta.enPreparation) lines.push("enPreparation: true");
  lines.push(`statut: ${meta.statut === "brouillon" ? "brouillon" : "publie"}`);
  if (meta.objectifs?.length) {
    lines.push("objectifs:");
    for (const objectif of meta.objectifs) lines.push(`  - ${yamlValue(objectif)}`);
  }
  if (meta.prerequis?.length) {
    lines.push("prerequis:");
    for (const prerequis of meta.prerequis) lines.push(`  - ${yamlValue(prerequis)}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function yamlValue(value: string): string {
  const clean = value.replace(/\r?\n/g, " ").trim();
  // Les deux-points, dièses et guillemets imposent une mise entre guillemets.
  if (/[:#"']/.test(clean)) return `"${clean.replace(/"/g, '\\"')}"`;
  return clean;
}

export interface ImportFile {
  name: string;
  content: string;
}

export interface ImportOutcome {
  imported: number;
  errors: string[];
}

/**
 * Import en lot : chaque fichier doit contenir un frontmatter avec
 * `niveau`, `matiere`, `chapitre` et `type`.
 */
export function importMarkdownFiles(files: ImportFile[]): ImportOutcome {
  const outcome: ImportOutcome = { imported: 0, errors: [] };

  for (const file of files) {
    try {
      const { data } = parseMiniFrontmatter(file.content);
      const niveau = String(data.niveau ?? "").trim();
      const matiere = String(data.matiere ?? "").trim();
      const chapitre = String(data.chapitre ?? "").trim();
      const type = String(data.type ?? "").trim().toLowerCase();

      if (!niveau || !matiere || !chapitre) {
        outcome.errors.push(`${file.name} : « niveau », « matiere » et « chapitre » sont requis.`);
        continue;
      }
      if (!type) {
        outcome.errors.push(`${file.name} : « type » est requis (resume, cours, formules, quiz, exercice).`);
        continue;
      }

      const target: ChapitrePath = { niveau, matiere, slug: chapitre };

      if (!chapitreExists(target)) {
        if (type !== "chapitre") {
          outcome.errors.push(
            `${file.name} : le chapitre « ${niveau}/${matiere}/${chapitre} » n'existe pas. Importe d'abord son chapitre.md.`,
          );
          continue;
        }
      }

      if (type === "chapitre") {
        if (chapitreExists(target)) {
          writeContentFile(target, "chapitre.md", file.content);
        } else {
          createChapitre(target, file.content);
        }
      } else if (type === "exercice") {
        const raw = String(data.fichier ?? file.name)
          .replace(/\.md$/i, "")
          .toLowerCase()
          .replace(/[^a-z0-9-]+/g, "-")
          .replace(/^-+|-+$/g, "");
        const safe = raw || "exercice";
        writeContentFile(target, `exercices/${safe}`, file.content);
      } else {
        const map: Record<string, string> = {
          resume: "resume.md",
          cours: "cours.md",
          formules: "formules.md",
          quiz: "quiz.md",
        };
        const file2 = map[type];
        if (!file2) {
          outcome.errors.push(`${file.name} : type « ${type} » inconnu.`);
          continue;
        }
        writeContentFile(target, file2, file.content);
      }

      outcome.imported += 1;
    } catch (error) {
      outcome.errors.push(
        `${file.name} : ${error instanceof Error ? error.message : "erreur inconnue"}`,
      );
    }
  }

  return outcome;
}

/** Parseur de frontmatter minimaliste (scalaires et listes). */
export function parseMiniFrontmatter(raw: string): {
  data: Record<string, unknown>;
  body: string;
} {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: text };

  const block = text.slice(3, end).replace(/^\n/, "");
  const body = text.slice(end + 4).replace(/^\n/, "");
  const data: Record<string, unknown> = {};
  let current: string | null = null;

  for (const line of block.split("\n")) {
    const item = line.match(/^\s*-\s+(.*)$/);
    if (item && current) {
      if (!Array.isArray(data[current])) data[current] = [];
      (data[current] as unknown[]).push(unquote(item[1]));
      continue;
    }
    const match = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    current = key;
    data[key] = value === "" ? [] : unquote(value);
  }

  return { data, body };
}

function unquote(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"');
  }
  return trimmed;
}

/* -------------------------------------------------------------------------- */
/* Images des chapitres                                                       */
/* -------------------------------------------------------------------------- */

export const IMAGE_ROOT = path.join(process.cwd(), "public", "images");

/** 5 Mo : au-delà, le navigateur doit compresser avant l'import. */
export const MAX_IMAGE_UPLOAD = 5 * 1024 * 1024;

const IMAGE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

/** Dossier public d'un chapitre, validé comme le reste des chemins. */
export function chapitreImageDir(input: ChapitrePath): string {
  return path.join(
    IMAGE_ROOT,
    assertNiveau(input.niveau),
    assertMatiere(input.matiere),
    assertSegment(input.slug, "Identifiant"),
  );
}

/** Nom de fichier sûr, sans accents ni espaces, avec un suffixe unique. */
function imageFileName(baseName: string, extension: string): string {
  const base = baseName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${base || "image"}-${Date.now().toString(36)}.${extension}`;
}

/**
 * Enregistre une image d'illustration dans `public/images/…` et renvoie son
 * URL publique. Sur un hébergement au système de fichiers en lecture seule
 * (Vercel), l'appel échoue proprement et l'auteur peut utiliser une image
 * hébergée ailleurs.
 */
export function saveChapitreImage(
  input: ChapitrePath,
  file: { data: Buffer; mime: string; baseName: string },
): string {
  const extension = IMAGE_EXTENSIONS[file.mime.toLowerCase()];
  if (!extension) {
    throw new ContentError("Format d'image non pris en charge : JPEG, PNG ou WebP uniquement.");
  }
  if (file.data.length === 0) throw new ContentError("Image vide.");
  if (file.data.length > MAX_IMAGE_UPLOAD) {
    throw new ContentError("Image trop lourde : 5 Mo maximum.");
  }

  const dir = chapitreImageDir(input);
  fs.mkdirSync(dir, { recursive: true });
  const name = imageFileName(file.baseName, extension);
  fs.writeFileSync(path.join(dir, name), file.data);

  const niveau = assertNiveau(input.niveau);
  const matiere = assertMatiere(input.matiere);
  const slug = assertSegment(input.slug, "Identifiant");
  return `/images/${niveau}/${matiere}/${slug}/${name}`;
}
