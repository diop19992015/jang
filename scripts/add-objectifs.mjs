#!/usr/bin/env node
/** Ajoute les objectifs manquants des chapitres 3ème (programme officiel BFEM).
 *  Usage : node scripts/add-objectifs.mjs [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const DRY_RUN = process.argv.includes("--dry-run");

const OBJECTIFS = {
  "3eme/maths/angle-inscrit": [
    "Définir un angle inscrit et l’arc qu’il intercepte",
    "Utiliser la propriété : un angle inscrit mesure la moitié de son arc",
    "Calculer des angles dans un cercle",
  ],
  "3eme/maths/applications-affines-et-applications-affines-par-intervalles": [
    "Reconnaître et écrire une application affine y = ax + b",
    "Construire le graphe d’une application affine et lire son sens de variation",
    "Déterminer images et antécédents sur un intervalle",
    "Résoudre un problème par une application affine",
  ],
  "3eme/maths/equations-et-inequations-a-une-inconnue": [
    "Résoudre une équation du premier degré à une inconnue",
    "Établir une équation à partir d’un énoncé",
    "Résoudre une inéquation et représenter sa solution sur une droite",
  ],
  "3eme/maths/equations-et-systeme-d-equations-a-deux-inconnues": [
    "Résoudre une équation à deux inconnues par le jeu des solutions",
    "Résoudre un système d’équations par substitution et par comparaison",
    "Interpréter graphiquement la solution d’un système",
    "Résoudre un problème par la mise en équation d’un système",
  ],
  "3eme/maths/geometrie-dans-l-espace": [
    "Représenter un solide et lire ses éléments (arêtes, faces, sommets)",
    "Calculer le volume d’un prisme, d’un cylindre, d’un cône et d’une pyramide",
    "Calculer des aires et des volumes de figures de l’espace",
  ],
  "3eme/maths/inequations-et-systeme-d-inequations-a-deux-inconnues": [
    "Résoudre une inéquation à deux inconnues et représenter la solution dans le plan",
    "Résoudre un système d’inéquations par la méthode graphique",
    "Résoudre un problème de condition par un système d’inéquations",
  ],
  "3eme/maths/relations-trigonometriques-dans-un-triangle-rectangle": [
    "Définir cosinus, sinus et tangente dans un triangle rectangle",
    "Calculer un côté ou un angle aigu avec les relations trigonométriques",
    "Utiliser les valeurs remarquables de 30°, 45° et 60°",
  ],
  "3eme/maths/reperage-dans-le-plan": [
    "Définir un repère : origine, axe des abscisses, axe des ordonnées, unités",
    "Placer un point à partir de ses coordonnées et lire les coordonnées d’un point",
    "Calculer une distance et le milieu d’un segment dans un repère",
  ],
  "3eme/maths/statistiques": [
    "Construire un tableau et un diagramme à partir d’une série statistique",
    "Calculer effectifs, fréquences, moyenne et médiane",
    "Interpréter et comparer des représentations graphiques",
  ],
  "3eme/maths/transformations-du-plan": [
    "Reconnaître et construire une translation, une rotation et une symétrie",
    "Connaître les propriétés de conservation (longueurs, angles, parallélisme)",
    "Utiliser les transformations pour démontrer dans une figure",
  ],
  "3eme/maths/vecteurs": [
    "Représenter un vecteur et reconnaître deux vecteurs égaux",
    "Construire la somme de deux vecteurs et multiplier un vecteur par un nombre",
    "Utiliser les vecteurs pour démontrer un parallélisme ou trouver un milieu",
  ],
  "3eme/histoire/dossier-sur-les-tirailleurs-senegalais-dans-les-deux-guerres-activite-de-consolidation": [
    "Situer les tirailleurs sénégalais dans les deux guerres mondiales",
    "Constituer un dossier à partir de documents et de sources",
    "Rédiger une réponse argumentée à partir du dossier constitué",
  ],
  "3eme/histoire/l-imperialisme-americain": [
    "Expliquer l’expansion des États-Unis (doctrine de Monroé, guerre hispano-américaine de 1898)",
    "Identifier les moyens de l’hégémonie américaine : économie, culture, armée",
    "Situer l’impérialisme américain dans l’impérialisme mondial",
  ],
  "3eme/histoire/l-imperialisme-europeen-en-asie-y-compris-l-imperialisme-russe": [
    "Repérer les conquêtes européennes en Asie (Inde, Chine, Indochine)",
    "Décrire l’impérialisme russe : conquête de la Sibérie et de l’Asie centrale",
    "Comparer les méthodes de domination en Asie",
  ],
  "3eme/histoire/l-imperialisme-japonais": [
    "Expliquer l’ouverture forcée du Japon en 1853",
    "Décrire la modernisation du Japon à l’ère Meiji (1868)",
    "Analyser l’expansion japonaise en Asie (1894-1895, 1904-1905, Mandchourie)",
  ],
  "3eme/histoire/la-crise-des-annees-30": [
    "Expliquer les origines de la crise de 1929 (krach de Wall Street)",
    "Décrire la propagation mondiale de la crise : chômage et protectionnisme",
    "Présenter les réponses à la crise, dont le New Deal de Roosevelt",
  ],
  "3eme/histoire/la-revolution-russe-et-la-consolidation-du-regime-1915-1928": [
    "Expliquer les causes de la révolution russe de 1917 (février et octobre)",
    "Décrire la création de l’URSS en 1922",
    "Analyser la consolidation du régime bolchevique (guerre civile, NEP, montée de Staline)",
  ],
};

let ajoutes = 0;
let sautes = 0;

for (const [rel, objectifs] of Object.entries(OBJECTIFS)) {
  const file = path.join(process.cwd(), "src", "content", `${rel}/chapitre.md`);
  if (!fs.existsSync(file)) {
    console.log(`  ✗ introuvable : ${rel}`);
    continue;
  }
  const raw = fs.readFileSync(file, "utf8");
  if (/^objectifs:/m.test(raw)) {
    console.log(`  = déjà présent : ${rel}`);
    sautes += 1;
    continue;
  }
  const bloc = ["objectifs:", ...objectifs.map((o) => `  - ${o}`)].join("\n");
  // insère après la ligne « statut: publie »
  const out = raw.replace(/^(statut: .*)$/m, `$1\n${bloc}`);
  if (out === raw) {
    console.log(`  ✗ repère « statut » absent : ${rel}`);
    continue;
  }
  if (!DRY_RUN) fs.writeFileSync(file, out.replace(/\n{3,}/g, "\n\n"), "utf8");
  ajoutes += 1;
  console.log(`  ✓ ${rel} — ${objectifs.length} objectifs`);
}

console.log(`\n${DRY_RUN ? "[simulation] " : ""}${ajoutes} chapitre(s) mis à jour, ${sautes} ignoré(s).`);
