#!/usr/bin/env node
/**
 * Génération du programme officiel sous forme de chapitres Jàng.
 *
 * Usage : node scripts/generate-programme.mjs [--dry-run]
 *
 * Entrée : data/programme.json (produit par scripts/fetch-programme.mjs,
 *          référentiels scolaires samacours.com — sections par série,
 *          parties, leçons).
 *
 * Sortie : src/content/<niveau>/<matiere>/<slug>/chapitre.md
 *          Un fichier par leçon du programme, marqué `enPreparation: true` :
 *          le chapitre est visible (objectifs, ordre, série) mais annonce que
 *          le cours arrive. Les chapitres existants ne sont jamais écrasés.
 *
 * Règles
 *  - fusion des leçons de même titre au sein d'une matière (les séries qui
 *    partagent une leçon se retrouvent sur un même chapitre) ;
 *  - séries déduites du titre de la section (« Terminale S1 et S3 », « Seconde
 *    S », « Série L2 »…) ; une série non couverte rejoint la section de sa
 *    série-sœur (S3→S1, S4/S5→S2), à défaut la section la plus fournie ;
 *  - la 3ème n'a pas de série : aucun champ `series` n'est écrit ;
 *  - idempotent : on n'écrit que les chapitres manquants.
 *
 * À garder synchronisé avec `MATIERES_DU_NIVEAU` de src/lib/types.ts.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = path.join(process.cwd(), "src", "content");
const SOURCE = path.join(process.cwd(), "data", "programme.json");
const DRY_RUN = process.argv.includes("--dry-run");
/** Réécrit les chapitres marqués `enPreparation` (jamais les contenus rédigés). */
const FORCE = process.argv.includes("--force");

const NIVEAUX = ["3eme", "seconde", "premiere", "terminale"];
const SERIES = ["L", "S1", "S2", "S3", "S4", "S5"];

/** Matières enseignées à chaque niveau (miroir de src/lib/types.ts). */
const MATIERES_DU_NIVEAU = {
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

/** Série dont la programmation est identique à celle d'une autre. */
const SERIE_SOEUR = { L: "L", S1: "S1", S2: "S2", S3: "S1", S4: "S2", S5: "S2" };

// --- Utilitaires ------------------------------------------------------------

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^[a-z]{1,2}\d{1,2}\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function clean(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Échappe une valeur scalaire YAML si le minimum l'exige. */
function scalar(value) {
  const text = clean(value);
  if (text === "") return '""';
  if (/^["'[\]{}#&*!|>%@`]/.test(text) || /[:#]\s/.test(text) || text.includes("\n")) {
    return `"${text.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return text;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function heuresEnMinutes(texte) {
  const match = /(\d+(?:[.,]\d+)?)\s*h\b/i.exec(clean(texte));
  if (!match) return 45;
  return clamp(Math.round(Number(match[1].replace(",", ".")) * 10), 20, 90);
}

function partiesDe(texte) {
  return clean(texte)
    .replace(/^partie\s+\d+\s*/i, "")
    .replace(/^p\d+\.\s*/i, "")
    .trim();
}

// --- Séries -----------------------------------------------------------------

/**
 * Séries couvertes par une section du référentiel.
 * Retourne `null` quand la section ne nomme aucune série : elle couvre alors
 * toutes les séries du niveau (cas des matières communes au lycée).
 */
function seriesDeSection(titre, niveau) {
  if (niveau === "3eme") return [];
  const texte = clean(titre)
    .toLowerCase()
    // « l'année », « l'eau » : l'élision ne doit pas être confondue avec la
    // série littéraire « L ».
    .replace(/\bl['’]/g, " ");
  if (!texte) return null;

  const series = new Set();
  if (/\bl\b|\bl1\b|\bl2\b|\bla\b/.test(texte)) series.add("L");
  for (const match of texte.matchAll(/\bs(\d)\b/g)) series.add(`S${match[1]}`);
  if (series.size) return [...series];

  // « Seconde S », « Série S » : une seule programmation scientifique.
  if (/\bs\b/.test(texte)) return SERIES.filter((serie) => serie !== "L");
  return null;
}

/**
 * Attribue à chaque section les séries qu'elle couvre, puis complète les
 * séries non couvertes (série-sœur, sinon section la plus fournie).
 */
function attribuerSeries(sections, niveau) {
  if (niveau === "3eme") {
    for (const section of sections) section.series = [];
    return;
  }

  for (const section of sections) {
    const directes = seriesDeSection(section.titre, niveau);
    section.series = directes === null ? [...SERIES] : directes;
  }

  const couvertes = new Set(sections.flatMap((section) => section.series));
  const manquantes = SERIES.filter((serie) => !couvertes.has(serie));
  if (!manquantes.length) return;

  const plusFournee = [...sections].sort(
    (a, b) => countLecons(b) - countLecons(a),
  )[0];

  for (const serie of manquantes) {
    const soeur = SERIE_SOEUR[serie];
    const cible =
      sections.find((section) => section.series.includes(soeur)) ?? plusFournee;
    if (cible && !cible.series.includes(serie)) cible.series.push(serie);
  }
}

function countLecons(section) {
  return section.parties.reduce((total, partie) => total + partie.lecons.length, 0);
}

// --- Chapitres --------------------------------------------------------------

function construireChapitres(classe) {
  const chapitres = new Map();
  let position = 0;

  for (const section of classe.sections) {
    for (const partie of section.parties) {
      for (const lecon of partie.lecons) {
        position += 1;
        const titre = clean(lecon.titre);
        if (!titre) continue;
        const slug = slugify(titre);
        if (!slug) continue;

        const existant = chapitres.get(slug);
        const points = clean(lecon.points)
          .split(/\s+·\s+/)
          .map((item) => clean(item))
          .filter(Boolean);

        if (existant) {
          if (existant.titre !== titre) {
            console.log(
              `    ⚠ titres différents mais slug identique : « ${existant.titre} » / « ${titre} »`,
            );
          }
          for (const serie of section.series) {
            if (!existant.series.includes(serie)) existant.series.push(serie);
          }
          if (points.length > existant.objectifs.length) {
            existant.objectifs = points.slice(0, 6);
            existant.accroche = clean(lecon.points) || existant.accroche;
          }
          if (!existant.partie) existant.partie = partiesDe(partie.titre);
          continue;
        }

        chapitres.set(slug, {
          slug,
          titre,
          accroche: clean(lecon.points) || `Programme officiel — ${partiesDe(partie.titre)}.`,
          partie: partiesDe(partie.titre),
          objectifs: points.slice(0, 6),
          series: [...section.series],
          duree: heuresEnMinutes(lecon.duree),
          ordre: position,
        });
      }
    }
  }

  // Réordonne après fusion : l'ordre suit la première apparition.
  return [...chapitres.values()].sort((a, b) => a.ordre - b.ordre);
}

function ecrireChapitre(niveau, matiere, chapitre, url) {
  const dir = path.join(ROOT, niveau, matiere, chapitre.slug);
  const fichier = path.join(dir, "chapitre.md");

  const lignes = ["---"];
  lignes.push(`titre: ${scalar(chapitre.titre)}`);
  lignes.push(`accroche: ${scalar(chapitre.accroche)}`);
  if (niveau !== "3eme" && chapitre.series.length) {
    lignes.push(`series: ${chapitre.series.join(", ")}`);
  }
  lignes.push(`ordre: ${chapitre.ordre}`);
  lignes.push(`duree: ${chapitre.duree}`);
  lignes.push("enPreparation: true");
  lignes.push("demo: false");
  lignes.push("statut: publie");
  if (chapitre.objectifs.length) {
    lignes.push("objectifs:");
    for (const objectif of chapitre.objectifs) lignes.push(`  - ${scalar(objectif)}`);
  }
  if (chapitre.partie) lignes.push(`partie: ${scalar(chapitre.partie)}`);
  lignes.push(`source: ${scalar(url)}`);
  lignes.push("---", "");

  if (!DRY_RUN) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fichier, `${lignes.join("\n")}`, "utf8");
  }
  return fichier;
}

// --- Programme principal ----------------------------------------------------

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Introuvable : ${path.relative(process.cwd(), SOURCE)}`);
    console.error("Lance d'abord `node scripts/fetch-programme.mjs`.");
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
  let crees = 0;
  let ignorees = 0;
  let inconnues = 0;

  for (const classe of data.classes) {
    const { niveau, matiere, url } = classe;
    if (!NIVEAUX.includes(niveau)) {
      console.log(`  ✗ niveau inconnu : ${niveau}`);
      inconnues += 1;
      continue;
    }
    if (!MATIERES_DU_NIVEAU[niveau].includes(matiere)) {
      console.log(`  ✗ matière inattendue : ${niveau}/${matiere}`);
      inconnues += 1;
      continue;
    }

    attribuerSeries(classe.sections, niveau);

    const chapitres = construireChapitres(classe);
    const matiereDir = path.join(ROOT, niveau, matiere);
    const existants = new Set(
      fs.existsSync(matiereDir)
        ? fs.readdirSync(matiereDir).filter((name) => {
            const dir = path.join(matiereDir, name);
            return fs.statSync(dir).isDirectory() && fs.existsSync(path.join(dir, "chapitre.md"));
          })
        : [],
    );

    let ecrits = 0;
    for (const chapitre of chapitres) {
      if (existants.has(chapitre.slug)) {
        const dir = path.join(matiereDir, chapitre.slug);
        const remplaable =
          FORCE &&
          fs.readFileSync(path.join(dir, "chapitre.md"), "utf8").includes("enPreparation: true");
        if (!remplaable) {
          ignorees += 1;
          continue;
        }
      }
      ecrireChapitre(niveau, matiere, chapitre, url);
      ecrits += 1;
      crees += 1;
    }

    const series = classe.sections
      .map((section) => (section.series.length ? section.series.join("/") : "—"))
      .join(" · ");
    console.log(
      `  ✓ ${niveau}/${matiere} — ${chapitres.length} chapitres (${ecrits} créés, ${
        chapitres.length - ecrits
      } existants) [${series}]`,
    );
  }

  console.log(
    `\n${DRY_RUN ? "[simulation] " : ""}${crees} chapitre(s) ${
      FORCE ? "réécrit(s)" : "créé(s)"
    }, ${ignorees} déjà présents${inconnues ? `, ${inconnues} entrée(s) ignorée(s)` : ""}.`,
  );
  if (!DRY_RUN) console.log("Vérifie avec `npm run content:check`.");
}

main();
