---
titre: Coordonnées, distance et milieu dans un repère
difficulte: 1
type: entrainement
indices:
  - Écris les coordonnées des points avant tout calcul.
  - Pour la distance, calcule d’abord les différences des coordonnées, puis mets-les au carré.
  - Pour le milieu, moyenne les abscisses d’un côté et les ordonnées de l’autre.
---

## Énoncé

L’unité de longueur est le centimètre. On considère le repère orthogonal $(O\,;\,x\,;\,y)$ et les points suivants :
$$
A(-1\,;\,2) \qquad B(5\,;\,2) \qquad C(5\,;\,-1)
$$

1. Placer les points $A$, $B$ et $C$ sur le repère, puis tracer le triangle $ABC$.
2. Calculer les longueurs $AB$ et $BC$.
3. Calculer la longueur $AC$ et vérifier que le triangle $ABC$ est rectangle en $B$.
4. Calculer le périmètre, puis l’aire du triangle $ABC$.
5. Donner les coordonnées du milieu $M$ du segment $[AC]$.
6. Donner les coordonnées du point $A'$, image de $A$ par la symétrie par rapport à l’axe des abscisses.

## Solution

**1. Placement des points.**

- $A(-1\,;\,2)$ : on avance de $1$ unité à gauche de $O$, puis de $2$ unités vers le haut.
- $B(5\,;\,2)$ : $5$ unités à droite, $2$ unités vers le haut. Les points $A$ et $B$ ont la même ordonnée, donc le segment $[AB]$ est horizontal.
- $C(5\,;\,-1)$ : $5$ unités à droite, $1$ unité vers le bas. Les points $B$ et $C$ ont la même abscisse, donc $[BC]$ est vertical.

Le triangle $ABC$ est rectangle en $B$, car un angle formé par une horizontale et une verticale est droit.

**2. Calcul de $AB$ et $BC$.**

$$
AB = \sqrt{(5 - (-1))^2 + (2 - 2)^2}
$$
$$
AB = \sqrt{6^2 + 0^2} = \sqrt{36} = 6 \text{ cm}
$$

$$
BC = \sqrt{(5 - 5)^2 + (-1 - 2)^2}
$$
$$
BC = \sqrt{0^2 + (-3)^2} = \sqrt{9} = 3 \text{ cm}
$$

On pouvait aussi les lire directement, les segments étant alignés sur les axes.

**3. Calcul de $AC$ et vérification.**

$$
AC = \sqrt{(5 - (-1))^2 + (-1 - 2)^2}
$$
$$
AC = \sqrt{6^2 + (-3)^2} = \sqrt{36 + 9} = \sqrt{45}
$$
$$
AC = 3\sqrt{5} \approx 6{,}7 \text{ cm}
$$

Vérification par la réciproque du théorème de Pythagore :
$$
AB^2 + BC^2 = 36 + 9 = 45
$$
$$
AC^2 = (\sqrt{45})^2 = 45
$$

Comme $AB^2 + BC^2 = AC^2$, le triangle $ABC$ est bien **rectangle en $B$**.

**4. Périmètre et aire.**

$$
\text{Périmètre} = AB + BC + AC = 6 + 3 + 6{,}7 \approx 15{,}7 \text{ cm}
$$

$$
\text{Aire} = \frac{AB \times BC}{2} = \frac{6 \times 3}{2} = \frac{18}{2} = 9 \text{ cm}^2
$$

**5. Milieu $M$ de $[AC]$.**

$$
x_M = \frac{-1 + 5}{2} = \frac{4}{2} = 2
$$
$$
y_M = \frac{2 + (-1)}{2} = \frac{1}{2} = 0{,}5
$$

Donc $M(2\,;\,0{,}5)$.

**6. Image de $A$ par l’axe des abscisses.**

La symétrie par rapport à l’axe des abscisses change le signe de l’ordonnée, l’abscisse reste $-1$ :
$$
A'(-1\,;\,-2)
$$

On vérifie que le milieu de $[AA']$ est le point $(-1\,;\,0)$, qui appartient bien à l’axe des abscisses.

:::remarque Vérification globale
Le triangle rectangle obtenu a pour côtés $6$, $3$ et $3\sqrt{5}$, et son aire vaut $9$ cm². Ces valeurs sont cohérentes : l’aire calculée avec la base $AB$ et la hauteur $BC$ correspond bien au rectangle de $6 \times 3$ coupé en deux par la diagonale.
:::
