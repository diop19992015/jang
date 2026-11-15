#!/usr/bin/env node
/** Aide au debug : affiche un chapitre généré (UTF-8 intact). */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const rel = process.argv[2] ?? "src/content/terminale/maths/limite-et-continuite/chapitre.md";
const file = path.join(process.cwd(), rel);
console.log(fs.existsSync(file) ? fs.readFileSync(file, "utf8") : `introuvable : ${rel}`);
