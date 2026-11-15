#!/usr/bin/env node
/** Aide au debug : affiche les sections (séries) de data/programme.json. */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const file = path.join(process.cwd(), "data", "programme.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

for (const classe of data.classes) {
  console.log(`== ${classe.niveau}/${classe.matiere}`);
  classe.sections.forEach((section, index) => {
    const total = section.parties.reduce((sum, partie) => sum + partie.lecons.length, 0);
    console.log(`   [${index}] ${JSON.stringify(section.titre)} — ${section.parties.length} parties, ${total} leçons`);
  });
}

console.log("\n== maths par série (mathstd)");
for (const entry of data.mathsParSerie) {
  console.log(`   ${entry.classe} — ${entry.lecons.length} leçons`);
}
