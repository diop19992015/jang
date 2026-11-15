---
titre: Type BFEM — Résolution, mise en équation et inéquation
difficulte: 3
type: bfem
annee: 2023
indices:
  - Pour la partie A, suis les cinq étapes : développer, regrouper, réduire, diviser, vérifier.
  - Pour la partie B, définis l'inconnue avant de traduire la deuxième phrase de l'énoncé.
  - Pour la partie C, « au plus » se traduit par $\leqslant$ ; pense à arrondir au nombre entier.
---

## Énoncé

Le sujet suivant reprend le format des épreuves de mathématiques du BFEM.

**Partie A.** (4 points)

Résoudre les équations suivantes et donner l'ensemble des solutions $S$ :

1. $3(x - 4) = 2x + 5$ (1,5 point)
2. $(2x - 6)(x + 5) = 0$ (1,5 point)
3. On considère l'équation $5x + a = 2x + 15$, où $a$ est un nombre tel que $x = 4$ est solution. Déterminer la valeur de $a$. (1 point)

**Partie B.** (3 points)

4. Un commerçant du marché de Sandaga partage une somme de $450\,000$ FCFA en deux parts. La seconde part est égale au triple de la première, augmentée de $30\,000$ FCFA. Calculer chaque part. (3 points)

**Partie C.** (3 points)

Un entrepreneur de Thiès dispose de $120\,000$ FCFA pour acheter des sacs de ciment au prix de $7500$ FCFA le sac.

5. Poser puis résoudre l'inéquation qui donne le nombre $x$ de sacs qu'il peut acheter. (2 points)
6. Représenter la solution sur une droite numérique et donner le plus grand nombre de sacs qu'il peut acheter. (1 point)

## Solution

**1. $3(x - 4) = 2x + 5$**

On développe à gauche :
$$
3x - 12 = 2x + 5
$$
On regroupe les $x$ à gauche et les nombres à droite (changement de signe) :
$$
3x - 2x = 5 + 12
$$
$$
x = 17
$$
Vérification : $3 \times (17 - 4) = 3 \times 13 = 39$ et $2 \times 17 + 5 = 39$. ✔

Donc $S = \{17\}$.

**2. $(2x - 6)(x + 5) = 0$**

Un produit est nul si et seulement si l'un de ses facteurs est nul :
- $2x - 6 = 0$ donne $2x = 6$, donc $x = 3$ ;
- $x + 5 = 0$ donne $x = -5$.

Donc $S = \{-5\,;\,3\}$.

**3. Déterminer $a$**

$x = 4$ est solution de $5x + a = 2x + 15$, donc en remplaçant $x$ par $4$ :
$$
5 \times 4 + a = 2 \times 4 + 15
$$
$$
20 + a = 8 + 15 = 23
$$
$$
a = 23 - 20 = 3
$$
Donc $a = 3$.

**4. Partage de la somme de $450\,000$ FCFA**

Soit $x$ le montant de la première part, en FCFA. La seconde part s'écrit $3x + 30000$. La somme des deux parts vaut $450\,000$ :
$$
x + (3x + 30000) = 450000
$$
On développe et on réduit :
$$
4x + 30000 = 450000
$$
$$
4x = 450000 - 30000 = 420000
$$
$$
x = \frac{420000}{4} = 105000
$$
Première part : **105 000 FCFA**.
Seconde part :
$$
3 \times 105000 + 30000 = 315000 + 30000 = 345000 \text{ FCFA}
$$
Vérification : $105\,000 + 345\,000 = 450\,000$. ✔

Réponse : les deux parts valent **105 000 FCFA** et **345 000 FCFA**.

**5. Inéquation des sacs de ciment**

Chaque sac coûte $7500$ FCFA et l'entrepreneur a au maximum $120\,000$ FCFA :
$$
7500x \leqslant 120000
$$
On divise par $7500$, nombre **positif**, donc le sens ne change pas :
$$
x \leqslant \frac{120000}{7500} = 16
$$
Donc $S = ]-\infty\,;\,16]$.

**6. Représentation et réponse**

Sur une droite graduée : **point plein** en $16$ (la valeur $16$ est acceptée) et **flèche vers la gauche**, car la solution est « tout nombre inférieur ou égal à $16$ ».

Comme $x$ représente un nombre de sacs, il faut un entier. Le plus grand entier de $S$ est $16$.

Réponse : l'entrepreneur peut acheter **16 sacs au plus** (exactement $7500 \times 16 = 120\,000$ FCFA, tout son budget).

:::erreur Pièges de l'épreuve
1. Oublier d'inverser le sens lors d'une division par un nombre négatif (ici $7500 > 0$, le sens ne change pas : lis bien le signe !).
2. Écrire une réponse décimale ($16$ n'a pas de décimale, mais si le calcul donne $16{,}67$, il faut redescendre à $16$ pour « au plus »).
3. Répondre « $x \leqslant 16$ » sans phrase finale : le barème de conclusion réclame « 16 sacs au plus ».
:::
