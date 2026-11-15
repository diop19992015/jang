#!/usr/bin/env node
/** Liste les leçons d'un niveau/matière (recherche par sous-chaîne du titre). */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const [niveau, matiere, filtre = ""] = process.argv.slice(2);
const data = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "data", "programme.json"), "utf8"),
);

for (const classe of data.classes) {
  if (classe.niveau !== niveau || classe.matiere !== matiere) continue;
  for (const section of classe.sections) {
    for (const partie of section.parties) {
      for (const lecon of partie.lecons) {
        if (lecon.titre.toLowerCase().includes(filtre.toLowerCase())) {
          console.log(`[${section.titre}] ${partie.titre} → « ${lecon.titre} »`);
        }
      }
    }
  }
}
