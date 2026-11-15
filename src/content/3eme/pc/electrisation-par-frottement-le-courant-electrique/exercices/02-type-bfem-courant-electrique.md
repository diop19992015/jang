---
titre: Sujet type BFEM — Électrisation et courant électrique
difficulte: 3
type: bfem
annee: 2023
indices:
  - Commence par identifier le mode d'électrisation (frottement, contact ou influence).
  - Pour les calculs, écris la formule, remplace les valeurs avec leurs unités, puis donne le résultat unité.
  - Pense à convertir les minutes en secondes avant d'utiliser I = q/t.
---

## Énoncé

**Contexte.** Une élève du collège de Thiès effectue la manipulation suivante : elle frotte une balle de tennis contre ses cheveux, puis elle rapproche la balle de petits morceaux de papier qui sont attirés. Elle touche ensuite la balle de liège suspendue à un fil de soie avec la balle de tennis : le pendule de liège est ensuite repoussé par la balle de tennis.

Plus tard, elle réalise un circuit électrique constitué d'un générateur de tension $U = 6\ \text{V}$, d'une lampe et d'un ampèremètre. Un courant de $I = 0{,}25\ \text{A}$ circule dans le circuit.

**Partie A.** (4 points)
1. Identifier le mode d'électrisation utilisé pour électriser la balle de tennis et justifier la réponse. (1 pt)
2. Expliquer pourquoi le pendule de liège est **repoussé** après le contact avec la balle de tennis. (1 pt)
3. Citer un **conducteur** et un **isolant** parmi : le fil de cuivre du circuit, le plastique du support de lampe, l'eau du robinet, le verre. (1 pt)
4. Donner le nombre de charges élémentaires $e$ et sa valeur en coulombs. (1 pt)

**Partie B.** (4 points)
5. Pendant un passage de courant de $t = 2\ \text{min}$, une charge de $q = 30\ \text{C}$ traverse la lampe. Calculer l'intensité du courant. (2 pts)
6. Combien d'électrons correspondent à cette charge de $30\ \text{C}$ ? (2 pts)

**Partie C.** (2 points)
7. Rédiger une phrase justifiant le danger du courant électrique pour le corps humain, en citant un effet du courant. (1 pt)
8. Préciser dans quel sens le courant conventionnel circule dans le fil de cuivre, à l'extérieur du générateur. (1 pt)

## Solution

**1. Mode d'électrisation.**

La balle de tennis est **électrisée par frottement** : elle est frottée contre les cheveux, c'est-à-dire deux corps isolants. L'électrisation par contact nécessiterait le toucher d'un corps déjà électrisé, et l'électrisation par influence se fait **sans contact**.

**2. Repulsion du pendule de liège.**

Au moment du contact, la balle de tennis a **transféré** une partie de ses charges au pendule de liège : les deux corps portent alors des charges de **même signe**. Or deux charges de même signe se **repoussent** : c'est pourquoi le pendule est repoussé. (S'il avait été chargé de signe opposé, il aurait été attiré.)

**3. Conducteurs et isolants.**

- **Conducteurs** : le fil de cuivre du circuit, l'eau du robinet (elle contient des sels qui lui donnent de la conductivité).
- **Isolants** : le plastique du support de lampe, le verre.

**4. Charge élémentaire.**

La charge élémentaire est la charge de l'électron, notée $e$ :
$$
e = 1{,}6 \times 10^{-19}\ \text{C}
$$
Toute charge électrique est un multiple entier de cette valeur.

**5. Intensité du courant.**

Données : $q = 30\ \text{C}$ et $t = 2\ \text{min} = 2 \times 60 = 120\ \text{s}$.

Formule : $I = \dfrac{q}{t}$

$$
I = \frac{30}{120} = 0{,}25\ \text{A}
$$

L'intensité du courant est **$0{,}25\ \text{A}$**, soit $250\ \text{mA}$. (On retrouve la valeur indiquée dans l'énoncé : le calcul est cohérent.)

**6. Nombre d'électrons.**

On part de $q = n \cdot e$, donc $n = \dfrac{q}{e}$ :

$$
n = \frac{30}{1{,}6 \times 10^{-19}} = \frac{30}{1{,}6} \times 10^{19} = 18{,}75 \times 10^{19} = 1{,}875 \times 10^{20}
$$

Il faut environ $1{,}9 \times 10^{20}$ électrons. Le nombre de charges est un entier : on arrondit donc au nombre entier le plus proche.

**7. Danger du courant.**

Le corps humain est un **conducteur** : le courant qui le traverse produit un effet **thermique** (chauffage des tissus) et peut provoquer des contractions musculaires, voire l'arrêt du cœur. C'est pourquoi il ne faut jamais toucher un fil sous tension, surtout avec les mains mouillées.

**8. Sens du courant conventionnel.**

Par convention, le courant circule du **pôle positif $+$ vers le pôle négatif $-$** dans le fil de cuivre à l'extérieur du générateur (donc dans la lampe), et du $-$ vers le $+$ à l'intérieur du générateur.

:::methode Ce que le correcteur attend
- Les mots-clés exacts : « frottement », « même signe », « repoussent », « conducteur/isolant ».
- Le calcul **progressif** : données → formule → remplacement avec unités → résultat avec unité.
- La conversion obligatoire : $2\ \text{min} = 120\ \text{s}$ avant tout usage de $I = q/t$.
- Le sens conventionnel du courant, toujours indiqué sur le schéma.
:::
