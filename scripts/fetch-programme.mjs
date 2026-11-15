#!/usr/bin/env node
/**
 * Récupération du programme officiel scolaire sénégalais (3ème → Terminale).
 *
 * Usage : node scripts/fetch-programme.mjs
 *
 * Deux sources complémentaires, toutes deux publiques :
 *  - samacours.com/programmes  : référentiel par classe et par matière,
 *    avec l'ordre des lecons, leur durée et leurs points clés ;
 *  - mathstd.com/programme/senegal : programmes de mathématiques
 *    différenciés par série (Seconde L/S, Première et Terminale L,
 *    S1-S3, S2-S4-S5).
 *
 * Sortie : data/programme.json — consommé par scripts/generate-programme.mjs.
 * Le script est idempotent et n'écrit rien d'autre.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const OUT = path.join(process.cwd(), "data", "programme.json");

/** Matière → clé d'URL samacours (« sciences » = physique-chimie). */
const SAMA_MATIERES = {
  francais: "francais",
  mathematiques: "maths",
  histoire: "histoire",
  geographie: "geographie",
  anglais: "anglais",
  sciences: "pc",
  svt: "svt",
  economie: "economie",
  philosophie: "philosophie",
};

const SAMA_CLASSES = {
  "3eme": ["francais", "mathematiques", "histoire", "geographie", "anglais", "sciences", "svt"],
  seconde: [
    "francais",
    "mathematiques",
    "histoire",
    "geographie",
    "economie",
    "anglais",
    "sciences",
    "svt",
  ],
  premiere: [
    "francais",
    "mathematiques",
    "histoire",
    "geographie",
    "economie",
    "anglais",
    "philosophie",
    "sciences",
    "svt",
  ],
  terminale: [
    "francais",
    "mathematiques",
    "histoire",
    "geographie",
    "anglais",
    "philosophie",
    "sciences",
    "svt",
  ],
};

const MATHSTD_CLASSES = [
  "seconde-l",
  "seconde-s",
  "premiere-l",
  "premiere-s1-s3",
  "premiere-s2-s4-s5",
  "terminale-l",
  "terminale-s1-s3",
  "terminale-s2-s4-s5",
];

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-z]+);/gi, "");
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

async function getText(url, attempts = 3) {
  let lastError;
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "Mozilla/5.0 (compatible; JangProgramme/1.0)" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 600 * (i + 1)));
    }
  }
  throw new Error(`${url} — ${lastError?.message ?? "échec"}`);
}

/**
 * Référentiel samacours, en structure :
 * sections de séries (« Terminale S2 · 122 h ») → parties (« Partie 1 … »)
 * → leçons (<li class="prog-lesson">).
 *
 * Les pages de collège n'ont qu'une seule section, souvent sans titre.
 */
function parseSamaSections(html) {
  const sections = [];
  let current = null;
  let part = null;

  const ensureSection = () => {
    if (!current) {
      current = { titre: "", parties: [] };
      sections.push(current);
    }
    return current;
  };
  const ensurePart = () => {
    ensureSection();
    if (!part) {
      part = { titre: "", lecons: [] };
      current.parties.push(part);
    }
    return part;
  };

  const pattern =
    /<h2 class="prog-serie-title">([\s\S]*?)<\/h2>|<h3 class="prog-part-title">([\s\S]*?)<\/h3>|<li class="prog-lesson">/g;

  let match;
  while ((match = pattern.exec(html)) !== null) {
    if (match[1] !== undefined) {
      current = { titre: stripTags(match[1]), parties: [] };
      part = null;
      sections.push(current);
      continue;
    }
    if (match[2] !== undefined) {
      part = { titre: stripTags(match[2]), lecons: [] };
      ensureSection().parties.push(part);
      continue;
    }

    const block = html.slice(pattern.lastIndex, pattern.lastIndex + 1400);
    const title = block.match(
      /<h4 class="prog-lesson-title">\s*<a[^>]*>([\s\S]*?)<\/a>/,
    );
    if (!title) continue;
    const duree = block.match(/<span class="prog-duree">([^<]*)<\/span>/);
    const points = block.match(/<p class="prog-points">([\s\S]*?)<\/p>/);
    ensurePart().lecons.push({
      titre: stripTags(title[1]),
      duree: duree ? stripTags(duree[1]) : "",
      points: points ? stripTags(points[1]) : "",
    });
  }

  return sections;
}

/** Nombre total de leçons d'un référentiel structuré. */
function countLessons(sections) {
  return sections.reduce(
    (total, section) =>
      total + section.parties.reduce((sum, part) => sum + part.lecons.length, 0),
    0,
  );
}

/** Leçons mathstd : <ol class="mtdcg-lessons"><li><a>…<span>titre</span>… */
function parseMathstdLessons(html) {
  const lessons = [];
  const list = html.match(/<ol class="mtdcg-lessons">([\s\S]*?)<\/ol>/);
  if (!list) return lessons;
  const items = list[1].split("<li>").slice(1);
  for (const item of items) {
    const num = item.match(/mtdcg-lesson-num">(\d+)</);
    const spans = [...item.matchAll(/<span(?:[^>]*)>([\s\S]*?)<\/span>/g)];
    const label = spans.map((match) => stripTags(match[1])).filter(Boolean);
    const title = label[label.length - 1];
    if (!title) continue;
    lessons.push({ ordre: num ? Number(num[1]) : lessons.length + 1, titre: title });
  }
  return lessons;
}

async function mapLimit(items, limit, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const classes = Object.entries(SAMA_CLASSES).flatMap(([niveau, matieres]) =>
    matieres.map((sama) => ({
      niveau,
      matiere: SAMA_MATIERES[sama],
      url: `https://samacours.com/programmes/${niveau}/${sama}`,
    })),
  );

  console.log(`Récupération de ${classes.length} référentiels par matière…`);
  const sama = await mapLimit(classes, 4, async (entry) => {
    try {
      const html = await getText(entry.url, 4);
      const sections = parseSamaSections(html);
      const lessons = countLessons(sections);
      if (lessons === 0) throw new Error("aucune leçon trouvée");
      console.log(`  ✓ ${entry.niveau}/${entry.matiere} — ${lessons} lecons`);
      return { niveau: entry.niveau, matiere: entry.matiere, url: entry.url, sections };
    } catch (error) {
      console.log(`  ✗ ${entry.niveau}/${entry.matiere} — ${error.message}`);
      return null;
    }
  });

  const classesSama = sama.filter(Boolean);

  console.log(`\nRécupération de ${MATHSTD_CLASSES.length} programmes de mathématiques par série…`);
  const maths = await mapLimit(MATHSTD_CLASSES, 4, async (slug) => {
    const url = `https://mathstd.com/programme/senegal/${slug}/`;
    try {
      const html = await getText(url, 4);
      const lessons = parseMathstdLessons(html);
      if (lessons.length === 0) throw new Error("aucune leçon trouvée");
      console.log(`  ✓ ${slug} — ${lessons.length} lecons`);
      return { classe: slug, url, lecons: lessons };
    } catch (error) {
      console.log(`  ✗ ${slug} — ${error.message}`);
      return null;
    }
  });

  const mathsSerie = maths.filter(Boolean);

  const payload = {
    source: {
      samacours: "https://samacours.com/programmes (référentiels scolaires, Sénégal)",
      mathstd: "https://mathstd.com/programme/senegal/ (maths par série)",
      recupereLe: new Date().toISOString().slice(0, 10),
    },
    classes: classesSama,
    mathsParSerie: mathsSerie,
  };

  const total = classesSama.reduce((sum, item) => sum + countLessons(item.sections), 0);
  const totalMaths = mathsSerie.reduce((sum, item) => sum + item.lecons.length, 0);
  const attendus = classes.length;
  if (classesSama.length < attendus) {
    console.error(`\n${attendus - classesSama.length} référentiel(s) manquant(s) : relance le script.`);
    process.exit(1);
  }
  if (total === 0 || totalMaths === 0) {
    console.error("\nAucune leçon récupérée : sortie non écrite.");
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`\n✓ ${total} lecons (matières) + ${totalMaths} lecons (maths par série)`);
  console.log(`  → ${path.relative(process.cwd(), OUT)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
