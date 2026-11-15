---
titre: Barycentres, coordonnées et milieu
difficulte: 1
type: entrainement
indices:
  - Utilise x_G = Σ mᵢxᵢ / Σ mᵢ et y_G = Σ mᵢyᵢ / Σ mᵢ.
  - Pour le milieu, les masses sont égales (1 et 1) : la somme vaut 2.
  - Pour passer d'un vecteur à un barycentre, fais en sorte que les coefficients somment à 1.
---

## Énoncé

Dans un repère orthonormé $(O\,;\,\vec{i},\vec{j})$, on considère les points $A(-2\,;\,4)$, $B(6\,;\,4)$ et $C(2\,;\,10)$.

1. Calculer les coordonnées du barycentre $G$ de $(A\,;\,1)$, $(B\,;\,1)$, $(C\,;\,1)$.
2. Calculer les coordonnées du milieu $I$ de $[AB]$, puis vérifier que $I$ est bien le barycentre de $(A\,;\,1)$ et $(B\,;\,1)$.
3. Calculer les coordonnées du point $M$ barycentre de $(A\,;\,2)$, $(B\,;\,2)$, $(C\,;\,1)$, puis montrer que $M$ est aussi le barycentre de $(I\,;\,4)$ et $(C\,;\,1)$.
4. Soit $h$ l'application affine définie par $h(x\,;\,y) = (x + 3\,;\,y - 2)$. Calculer $h(G)$ et vérifier que $h(G)$ est le barycentre de $h(A)$, $h(B)$, $h(C)$ avec les masses $1$, $1$, $1$.

## Solution

**1. Barycentre $G$ de $(A\,;\,1)$, $(B\,;\,1)$, $(C\,;\,1)$.**

La somme des masses vaut $M = 1 + 1 + 1 = 3 \neq 0$ : le barycentre existe. Formules :

$$
x_G = \frac{1 \times (-2) + 1 \times 6 + 1 \times 2}{3} = \frac{-2 + 6 + 2}{3} = \frac{6}{3} = 2,
$$

$$
y_G = \frac{1 \times 4 + 1 \times 4 + 1 \times 10}{3} = \frac{4 + 4 + 10}{3} = \frac{18}{3} = 6.
$$

Donc $G(2\,;\,6)$. C'est le **centre de gravité** du triangle $ABC$.

**2. Milieu $I$ de $[AB]$.**

$$
x_I = \frac{-2 + 6}{2} = 2, \qquad y_I = \frac{4 + 4}{2} = 4, \qquad I(2\,;\,4).
$$

Vérification : $I$ barycentre de $(A\,;\,1)$ et $(B\,;\,1)$ : somme des masses $= 2$,

$$
x = \frac{-2 + 6}{2} = 2, \qquad y = \frac{4 + 4}{2} = 4.
$$

Mêmes coordonnées : par **unicité** du barycentre, $I$ est bien le milieu de $[AB]$ ✓.

**3. Point $M$.**

Masse totale : $M_{\text{tot}} = 2 + 2 + 1 = 5$.

$$
x_M = \frac{2 \times (-2) + 2 \times 6 + 1 \times 2}{5} = \frac{-4 + 12 + 2}{5} = \frac{10}{5} = 2,
$$

$$
y_M = \frac{2 \times 4 + 2 \times 4 + 1 \times 10}{5} = \frac{8 + 8 + 10}{5} = \frac{26}{5} = 5{,}2.
$$

Donc $M(2\,;\,5{,}2)$.

**Regroupement :** $A$ et $B$ ont chacun la masse $2$ : leur barycentre partiel est $I$ (masse totale $2 + 2 = 4$). Par l'associativité :

$$
M = (4I + 1C), \qquad \text{c'est-à-dire} \qquad M = \frac{4I + C}{5}.
$$

Vérification : $x = \dfrac{4 \times 2 + 2}{5} = \dfrac{10}{5} = 2$ et $y = \dfrac{4 \times 4 + 10}{5} = \dfrac{26}{5} = 5{,}2$ ✓ — identique à $M$.

**4. Application affine $h(x\,;\,y) = (x+3\,;\,y-2)$.**

$h$ est de la forme $h(M) = M + \vec{v}$ avec $\vec{v} = (3\,;\,-2)$ : c'est une **translation**, donc une application affine.

$$
h(G) = (2 + 3\,;\,6 - 2) = (5\,;\,4).
$$

Images des sommets :

$$
h(A) = (-2 + 3\,;\,4 - 2) = (1\,;\,2), \qquad
h(B) = (6 + 3\,;\,4 - 2) = (9\,;\,2), \qquad
h(C) = (2 + 3\,;\,10 - 2) = (5\,;\,8).
$$

Barycentre de ces trois points avec les masses $1$, $1$, $1$ :

$$
x = \frac{1 + 9 + 5}{3} = \frac{15}{3} = 5, \qquad
y = \frac{2 + 2 + 8}{3} = \frac{12}{3} = 4.
$$

On retrouve $(5\,;\,4) = h(G)$ : la conservation du barycentre par les applications affines est vérifiée ✓.

:::remarque Réflexe
Avant tout calcul, vérifie que la somme des masses est non nulle, et après calcul, **reprends l'expression avec les masses** pour vérifier : c'est la méthode qui évite les fautes d'arithmétique.
:::
