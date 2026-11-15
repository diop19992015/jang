#!/usr/bin/env node
/** Aide au debug : affiche les titres de parties et d'exemples de leçons. */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const file = path.join(process.cwd(), "data", "programme.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

for (const cible of [
  ["3eme", "maths"],
  ["terminale", "svt"],
  ["seconde", "pc"],
]) {
  const classe = data.classes.find(
    (item) => item.niveau === cible[0] && item.matiere === cible[1],
  );
  if (!classe) continue;
  console.log(`== ${classe.niveau}/${classe.matiere}`);
  for (const section of classe.sections) {
    for (const partie of section.parties) {
      console.log(`   partie: ${JSON.stringify(partie.titre)}`);
      for (const lecon of partie.lecons.slice(0, 3)) {
        console.log(
          `      - ${JSON.stringify(lecon.titre)} | duree=${JSON.stringify(lecon.duree)} | ${JSON.stringify(lecon.points)}`,
        );
      }
    }
  }
}
