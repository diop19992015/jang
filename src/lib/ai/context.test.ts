import assert from "node:assert/strict";
import test from "node:test";

import {
  MAX_EXCERPT_CHARS,
  buildContextBlock,
  extractCourseExcerpt,
} from "@/lib/ai/context";

test("l'extrait ne dépasse jamais 4 000 caractères", () => {
  const markdown = "Un paragraphe de cours. ".repeat(500);
  const excerpt = extractCourseExcerpt(markdown);
  assert.ok(excerpt.length <= MAX_EXCERPT_CHARS);
  assert.ok(excerpt.length > 0);
});

test("l'extrait retire le frontmatter, les titres et les liens Markdown", () => {
  const markdown = [
    "---",
    "titre: Dérivation",
    "---",
    "## Définition",
    "La dérivée de $x^2$ est $2x$.",
    "Voir [le cours](https://exemple.sn) et ![schéma](image.png).",
  ].join("\n");

  const excerpt = extractCourseExcerpt(markdown);
  assert.ok(!excerpt.includes("titre:"));
  assert.ok(!excerpt.includes("##"));
  assert.ok(!excerpt.includes("https://"));
  assert.ok(!excerpt.includes("image.png"));
  assert.ok(excerpt.includes("La dérivée de $x^2$ est $2x$."));
});

test("un cours court est conservé intégralement", () => {
  assert.equal(extractCourseExcerpt("Limite finie en un point."), "Limite finie en un point.");
});

test("le bloc de contexte contient le niveau, la matière, le chapitre et le mode", () => {
  const block = buildContextBlock({
    niveau: "terminale",
    serie: "S1",
    matiere: "maths",
    chapitreTitre: "Dérivation",
    mode: "correction",
    excerpt: "La dérivée de $x^2$ est $2x$.",
  });

  assert.ok(block.includes("Terminale"));
  assert.ok(block.includes("S1"));
  assert.ok(block.includes("Mathématiques"));
  assert.ok(block.includes("Dérivation"));
  assert.ok(block.includes("Corriger mon exercice"));
  assert.ok(block.includes("La dérivée de $x^2$ est $2x$."));
});

test("le bloc de contexte signale l'absence d'extrait", () => {
  const block = buildContextBlock({
    niveau: "3eme",
    serie: null,
    matiere: "svt",
    chapitreTitre: null,
    mode: "question",
    excerpt: "",
  });
  assert.ok(block.includes("3ème"));
  assert.ok(block.includes("sans série"));
  assert.ok(block.includes("Aucun extrait de cours"));
});

test("le mode indice ajoute une consigne explicite", () => {
  const block = buildContextBlock({
    niveau: "terminale",
    serie: "S2",
    matiere: "pc",
    chapitreTitre: "Cinématique",
    mode: "correction",
    excerpt: "…",
    hintOnly: true,
  });
  assert.ok(block.includes("UNIQUEMENT un indice"));
});
