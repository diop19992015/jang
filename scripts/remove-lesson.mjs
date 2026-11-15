#!/usr/bin/env node
/** Retire du programme les leçons en doublon avec les chapitres démo.
 *  Usage : node scripts/remove-lesson.mjs "<niveau>" "<matiere>" "<titre exact>"
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const [niveau, matiere, titre] = process.argv.slice(2);
if (!niveau || !matiere || !titre) {
  console.error('Usage : node scripts/remove-lesson.mjs "<niveau>" "<matiere>" "<titre exact>"');
  process.exit(1);
}

const file = path.join(process.cwd(), "data", "programme.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

let retirees = 0;
for (const classe of data.classes) {
  if (classe.niveau !== niveau || classe.matiere !== matiere) continue;
  for (const section of classe.sections) {
    for (const partie of section.parties) {
      const avant = partie.lecons.length;
      partie.lecons = partie.lecons.filter((l) => l.titre.trim() !== titre.trim());
      retirees += avant - partie.lecons.length;
    }
  }
}

if (!retirees) {
  console.error(`Aucune leçon « ${titre} » dans ${niveau}/${matiere}`);
  process.exit(1);
}
fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(`${retirees} leçon(s) retirée(s) : ${niveau}/${matiere} — « ${titre} »`);
