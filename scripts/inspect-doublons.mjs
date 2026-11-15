#!/usr/bin/env node
/** Aide au debug : compte les leçons uniques par (niveau, matière, titre). */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const file = path.join(process.cwd(), "data", "programme.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

let total = 0;
let uniques = 0;
let collisions = 0;

for (const classe of data.classes) {
  const seen = new Map();
  let count = 0;
  for (const section of classe.sections) {
    for (const partie of section.parties) {
      for (const lecon of partie.lecons) {
        count += 1;
        const key = slugify(lecon.titre);
        if (seen.has(key)) {
          seen.set(key, seen.get(key) + 1);
        } else {
          seen.set(key, 1);
        }
      }
    }
  }
  const unique = seen.size;
  const doublons = [...seen.values()].filter((v) => v > 1).length;
  total += count;
  uniques += unique;
  collisions += doublons;
  console.log(
    `${classe.niveau}/${classe.matiere}: ${count} leçons → ${unique} titres uniques (${doublons} répétés)`,
  );
}

console.log(`\nTOTAL ${total} leçons → ${uniques} chapitres uniques (${collisions} titres répétés)`);
