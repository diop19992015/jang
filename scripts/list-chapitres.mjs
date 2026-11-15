#!/usr/bin/env node
/** Liste les chapitres d'un niveau/matière avec leurs métadonnées. */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const niveau = process.argv[2] ?? "3eme";
const matiere = process.argv[3] ?? "francais";
const dir = path.join(process.cwd(), "src", "content", niveau, matiere);

for (const slug of fs.readdirSync(dir).sort()) {
  const file = path.join(dir, slug, "chapitre.md");
  if (!fs.existsSync(file)) continue;
  const raw = fs.readFileSync(file, "utf8");
  const field = (name) => {
    const m = new RegExp(`^${name}: (.*)$`, "m").exec(raw);
    return m ? m[1] : "";
  };
  const prep = raw.includes("enPreparation: true");
  const objectifs = [...raw.matchAll(/^  - (.*)$/gm)].map((m) => m[1]);
  console.log(
    `${prep ? "⏳" : "✅"} ordre ${field("ordre")} | ${slug}\n   titre: ${field("titre")}\n   accroche: ${field("accroche")}\n   objectifs: ${objectifs.join(" · ")}\n`,
  );
}
