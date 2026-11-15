#!/usr/bin/env node
/**
 * Vérification des contenus Markdown de Jàng.
 *
 * Usage : node scripts/check-content.mjs
 *
 * Contrôle pour chaque chapitre :
 *  - présence de chapitre.md et frontmatter minimal (titre) ;
 *  - fichiers pédagogiques (resume, cours, formules, quiz) ;
 *  - quiz : au moins 2 options, une seule bonne réponse, explication ;
 *  - exercices : sections « Énoncé » et « Solution » ;
 *  - frontmatter exercice : titre, difficulté entre 1 et 3, type valide ;
 *  - signalement des caractères de remplacement (mojibake) qui trahissent
 *    un fichier UTF-8 corrompu.
 *
 * Sortie : liste des erreurs et avertissements, code retour 1 si erreur.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = path.join(process.cwd(), "src", "content");
const NIVEAUX = ["3eme", "seconde", "premiere", "terminale"];
const MATIERES = [
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
const SERIES = ["L", "S1", "S2", "S3", "S4", "S5"];
const TYPES = ["entrainement", "bac", "bfem"];
const REQUIRED = ["chapitre.md", "resume.md", "cours.md", "formules.md", "quiz.md"];

const errors = [];
const warnings = [];
let chapitres = 0;
let preparations = 0;
let exercices = 0;
let questions = 0;

function fail(file, message) {
  errors.push(`${rel(file)} — ${message}`);
}

function warn(file, message) {
  warnings.push(`${rel(file)} — ${message}`);
}

function rel(file) {
  return path.relative(process.cwd(), file).replace(/\\/g, "/");
}

function read(file) {
  return fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

/** Parseur minimal identique à src/lib/content/frontmatter.ts. */
function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, "");
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: text };
  const block = text.slice(3, end).replace(/^\n/, "");
  const body = text.slice(end + 4).replace(/^\n/, "");
  const data = {};
  let current = null;

  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && current) {
      if (!Array.isArray(data[current])) data[current] = [];
      data[current].push(unquote(listItem[1]));
      continue;
    }
    const match = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    current = key;
    if (value === "") {
      data[key] = [];
      continue;
    }
    data[key] = parseScalar(value);
  }
  return { data, body };
}

function unquote(value) {
  const v = value.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1);
  }
  return v;
}

function parseScalar(value) {
  const v = unquote(value);
  if (v === "true") return true;
  if (v === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if (v.startsWith("[") && v.endsWith("]")) {
    return v
      .slice(1, -1)
      .split(",")
      .map((item) => unquote(item))
      .filter(Boolean);
  }
  return v;
}

function splitSections(body) {
  const sections = [];
  const lines = body.split("\n");
  let title = null;
  let buffer = [];
  const flush = () => {
    if (title !== null) {
      sections.push({ title, markdown: buffer.join("\n").trim() });
    }
    buffer = [];
  };
  for (const line of lines) {
    const heading = line.match(/^##\s+(.*)$/);
    if (heading) {
      flush();
      title = heading[1].trim();
      continue;
    }
    if (title !== null) buffer.push(line);
  }
  flush();
  return sections;
}

function checkMojibake(file, raw) {
  if (raw.includes("\uFFFD")) {
    fail(file, "caractère de remplacement U+FFFD détecté (accents perdus)");
  }
}

function checkQuiz(file, raw) {
  const { body } = parseFrontmatter(raw);
  const blocks = body
    .split(/^##\s+Question\s*$/gim)
    .map((block) => block.trim())
    .filter(Boolean);

  if (blocks.length < 3) {
    warn(file, `seulement ${blocks.length} question(s) (3 attendues pour la démo)`);
  }

  blocks.forEach((block, index) => {
    questions += 1;
    const lines = block.split("\n");
    let options = 0;
    let correct = 0;
    let explication = false;

    for (const line of lines) {
      const option = line.match(/^\s*-\s*\[( |x|X)\]\s+(.+)$/);
      if (option) {
        options += 1;
        if (option[1].toLowerCase() === "x") correct += 1;
        continue;
      }
      if (/^\s*>\s?/.test(line) && line.replace(/^\s*>\s?/, "").trim()) {
        explication = true;
      }
    }

    if (options < 2) {
      fail(file, `question ${index + 1} : ${options} option(s), 2 minimum`);
    }
    if (correct !== 1) {
      fail(file, `question ${index + 1} : ${correct} bonne(s) réponse(s), 1 attendue`);
    }
    if (!explication) {
      warn(file, `question ${index + 1} : pas d'explication (ligne « > »)`);
    }
  });
}

function checkExercise(file, raw) {
  exercices += 1;
  const { data, body } = parseFrontmatter(raw);

  if (!data.titre) fail(file, "frontmatter : « titre » manquant");
  if (data.difficulte === undefined) {
    warn(file, "frontmatter : « difficulte » manquant (2 par défaut)");
  } else if (![1, 2, 3].includes(Number(data.difficulte))) {
    fail(file, `frontmatter : difficulte = ${data.difficulte} (1, 2 ou 3 attendu)`);
  }
  if (data.type !== undefined && !TYPES.includes(String(data.type))) {
    fail(file, `frontmatter : type = ${data.type} (${TYPES.join(", ")} attendu)`);
  }

  const sections = splitSections(body);
  const normalized = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const hasEnonce = sections.some((section) =>
    normalized(section.title).includes("enonce"),
  );
  const hasSolution = sections.some((section) =>
    normalized(section.title).includes("solution") ||
    normalized(section.title).includes("corrige"),
  );

  if (!hasEnonce) fail(file, "section « ## Énoncé » manquante");
  if (!hasSolution) fail(file, "section « ## Solution » (ou Corrigé) manquante");

  const solution = sections.find(
    (section) =>
      normalized(section.title).includes("solution") ||
      normalized(section.title).includes("corrige"),
  );
  if (solution && solution.markdown.length < 80) {
    warn(file, "corrigé très court");
  }
}

function checkChapitre(dir) {
  chapitres += 1;
  const main = path.join(dir, "chapitre.md");
  const raw = read(main);
  checkMojibake(main, raw);

  const { data } = parseFrontmatter(raw);
  if (!data.titre) fail(main, "frontmatter : « titre » manquant");
  if (!data.accroche) warn(main, "frontmatter : « accroche » manquante");

  // Un chapitre du programme pas encore rédigé n'a que ses métadonnées.
  const enPreparation = data.enPreparation === true;
  if (enPreparation) preparations += 1;
  if (data.demo === true && enPreparation) {
    fail(main, "frontmatter : « demo » et « enPreparation » sont incompatibles");
  }

  const niveau = path.basename(path.dirname(path.dirname(dir)));
  if (niveau !== "3eme") {
    const series = Array.isArray(data.series)
      ? data.series
      : typeof data.series === "string"
        ? data.series.split(",").map((s) => s.trim())
        : [];
    if (!series.length) {
      warn(main, `frontmatter : « series » manquant (${SERIES.join(", ")})`);
    } else {
      for (const serie of series) {
        if (!SERIES.includes(serie)) {
          fail(main, `frontmatter : série inconnue « ${serie} » (${SERIES.join(", ")})`);
        }
      }
    }
  } else if (Array.isArray(data.series) && data.series.length) {
    warn(main, "frontmatter : la 3ème n'a pas de série");
  }

  if (data.ordre !== undefined && !Number.isFinite(Number(data.ordre))) {
    fail(main, `frontmatter : « ordre » invalide (${data.ordre})`);
  }

  // Les chapitres « en préparation » n'ont pas encore de contenu : on ne
  // valide que ce qui existe. Les chapitres publiés doivent être complets.
  const fichiers = enPreparation ? ["chapitre.md"] : REQUIRED;

  for (const name of fichiers) {
    const file = path.join(dir, name);
    if (!fs.existsSync(file)) {
      fail(file, "fichier obligatoire manquant");
      continue;
    }
    const content = read(file);
    checkMojibake(file, content);
    if (/\$\$[^\n$]+\$\$/.test(content)) {
      warn(
        file,
        "formule « $$…$$ » sur une seule ligne : elle s'affiche en ligne. Place les délimiteurs sur des lignes séparées.",
      );
    }
    // chapitre.md ne contient que le frontmatter : c'est le loader qui
    // exploite ces métadonnées, le corps n'est pas rendu.
    if (name !== "chapitre.md" && !parseFrontmatter(content).body.trim()) {
      fail(file, "contenu vide");
    }
    if (name === "quiz.md") checkQuiz(file, content);
  }

  // Un chapitre en préparation dont les cours ont commencé doit être complet.
  if (enPreparation) {
    const enCours = REQUIRED.filter((name) => fs.existsSync(path.join(dir, name)));
    if (enCours.length > 1) {
      warn(
        main,
        `contenu commencé (${enCours.length - 1} fichier(s)) : pense à rédiger tous les fichiers puis à retirer « enPreparation: true ».`,
      );
    }
    return;
  }

  const exDir = path.join(dir, "exercices");
  if (!fs.existsSync(exDir)) {
    fail(exDir, "dossier « exercices » manquant");
    return;
  }
  const files = fs
    .readdirSync(exDir)
    .filter((name) => name.endsWith(".md"))
    .sort();

  if (files.length < 2) {
    warn(exDir, `${files.length} exercice(s) seulement (2 attendus pour la démo)`);
  }

  for (const name of files) {
    const file = path.join(exDir, name);
    const content = read(file);
    checkMojibake(file, content);
    checkExercise(file, content);
  }
}

// --- Parcours ---------------------------------------------------------------

if (!fs.existsSync(ROOT)) {
  console.error("Dossier src/content introuvable.");
  process.exit(1);
}

for (const niveau of fs.readdirSync(ROOT).sort()) {
  const niveauDir = path.join(ROOT, niveau);
  if (!fs.statSync(niveauDir).isDirectory()) continue;
  if (!NIVEAUX.includes(niveau)) {
    warn(niveauDir, `niveau inconnu (ignoré) : ${niveau}`);
    continue;
  }
  for (const matiere of fs.readdirSync(niveauDir).sort()) {
    const matiereDir = path.join(niveauDir, matiere);
    if (!fs.statSync(matiereDir).isDirectory()) continue;
    if (!MATIERES.includes(matiere)) {
      warn(matiereDir, `matière inconnue (ignorée) : ${matiere}`);
      continue;
    }
    for (const slug of fs.readdirSync(matiereDir).sort()) {
      const dir = path.join(matiereDir, slug);
      if (fs.statSync(dir).isDirectory()) checkChapitre(dir);
    }
  }
}

// --- Rapport ----------------------------------------------------------------

console.log(`\nJàng — vérification des contenus`);
console.log(`  chapitres : ${chapitres}`);
console.log(`  en préparation : ${preparations}`);
console.log(`  exercices : ${exercices}`);
console.log(`  questions : ${questions}`);

if (warnings.length) {
  console.log(`\nAvertissements (${warnings.length}) :`);
  for (const line of warnings) console.log(`  ⚠ ${line}`);
}

if (errors.length) {
  console.log(`\nErreurs (${errors.length}) :`);
  for (const line of errors) console.log(`  ✗ ${line}`);
  console.log("");
  process.exit(1);
}

console.log(`\n✓ Tous les contenus sont valides.\n`);
