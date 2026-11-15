---
titre: Sujet type BFEM — Volumes de la pyramide, du cylindre et du cône
difficulte: 3
type: bfem
annee: 2023
indices:
  - Commence toujours par calculer l’aire de la base avant le volume.
  - Pour la pyramide et le cône, n’oublie pas le facteur 1/3.
  - Pour convertir en litres, divise le volume en cm³ par 1000.
---

## Énoncé

L’unité de longueur est le centimètre. On prend $\pi \approx 3{,}14$.

Une pyramide $SABCD$ de sommet $S$ a pour base le rectangle $ABCD$ tel que $AB = 8$ cm et $BC = 6$ cm. Sa hauteur vaut $10$ cm.

**Partie A.** (4 points)
1. Calculer l’aire de la base $ABCD$.
2. Calculer le volume de la pyramide $SABCD$.

**Partie B.** (3 points)
3. Un cylindre a pour rayon de base $6$ cm et pour hauteur $15$ cm. Calculer son volume en cm³, puis en litres.

**Partie C.** (3 points)
4. Un cône de ciment a pour rayon de base $6$ cm et pour hauteur $15$ cm.
   a. Calculer son volume.
   b. Combien de fois faut-il remplir ce cône pour remplir exactement le cylindre de la question 3 ? Justifier.

## Solution

**1. Aire de la base $ABCD$.**

La base est un rectangle de longueur $AB = 8$ cm et de largeur $BC = 6$ cm :
$$
S_{ABCD} = AB \times BC = 8 \times 6 = 48 \text{ cm}^2
$$

**2. Volume de la pyramide.**

Le volume d’une pyramide est le tiers du produit de l’aire de la base par la hauteur :
$$
V_{pyramide} = \frac{S_b \times h}{3} = \frac{48 \times 10}{3}
$$
$$
V_{pyramide} = \frac{480}{3} = 160 \text{ cm}^3
$$

Le volume de la pyramide est de $160$ cm³ (soit $0{,}16$ litre).

**3. Volume du cylindre.**

Le cylindre a pour rayon $r = 6$ cm et pour hauteur $h = 15$ cm :
$$
V_{cylindre} = \pi r^2 h = 3{,}14 \times 6^2 \times 15
$$
$$
V_{cylindre} = 3{,}14 \times 36 \times 15 = 3{,}14 \times 540
$$
$$
V_{cylindre} = 1695{,}6 \text{ cm}^3
$$

Conversion en litres ($1000$ cm³ = $1$ L) :
$$
V_{cylindre} = \frac{1695{,}6}{1000} = 1{,}6956 \text{ L} \approx 1{,}7 \text{ L}
$$

**4. Le cône de ciment.**

**a. Volume du cône.**

Le cône a la même base ($r = 6$ cm) et la même hauteur ($h = 15$ cm) que le cylindre :
$$
V_{cône} = \frac{\pi r^2 h}{3} = \frac{1695{,}6}{3} = 565{,}2 \text{ cm}^3
$$

Soit environ $0{,}57$ litre.

**b. Nombre de remplissages.**

Un cône et un cylindre de **même base** et de **même hauteur** ont des volumes dans le rapport $1:3$, donc il faut **3** cuves coniques pour remplir le cylindre.

Vérification par le calcul :
$$
\frac{V_{cylindre}}{V_{cône}} = \frac{1695{,}6}{565{,}2} = 3
$$

Il faut donc remplir **3 fois** le cône de ciment pour remplir exactement le cylindre.

:::methode Ce que le correcteur attend
- **Partie A (4 pts)** : aire de la base $48$ cm² avec l’unité (2 pts), volume $160$ cm³ en posant la formule avec le tiers (2 pts).
- **Partie B (3 pts)** : formule $V = \pi r^2 h$ posée (1 pt), résultat $1695{,}6$ cm³ (1 pt), conversion en litres (1 pt).
- **Partie C (3 pts)** : volume du cône $565{,}2$ cm³ (1 pt), comparaison ou rapport $1:3$ (1 pt), conclusion « 3 fois » avec justification (1 pt).
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier le $\dfrac{1}{3}$ dans le volume de la pyramide : $480$ cm³ au lieu de $160$ cm³.
2. Écrire l’unité du volume en cm au lieu de cm³.
3. Dans la question 4, calculer le volume du cône sans remarquer qu’il a la même base et la même hauteur que le cylindre : le rapport $1:3$ permet de répondre sans nouveau calcul.
:::
