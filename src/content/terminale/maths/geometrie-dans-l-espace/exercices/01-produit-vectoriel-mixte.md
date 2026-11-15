---
titre: Produit vectoriel, aires et produit mixte
difficulte: 1
type: entrainement
indices:
  - Calcule le produit vectoriel avec le déterminant 3 × 3 (i, j, k en première ligne).
  - L'aire du triangle est la moitié de la norme du produit vectoriel.
  - Pour le volume, utilise le produit mixte divisé par 6.
---

## Énoncé

On considère les vecteurs $\vec{u} = (2\,;\,1\,;\,0)$ et $\vec{v} = (1\,;\,3\,;\,0)$.

1. Calculer $\vec{u} \wedge \vec{v}$ et vérifier qu'il est orthogonal à $\vec{u}$ et à $\vec{v}$.
2. Calculer l'aire du parallélogramme construit sur $\vec{u}$ et $\vec{v}$, puis l'aire du triangle de sommets $O$, $U$ et $V$ (où $\vec{OU} = \vec{u}$ et $\vec{OV} = \vec{v}$).

On considère ensuite les points $A(1\,;\,0\,;\,0)$, $B(0\,;\,2\,;\,0)$, $C(0\,;\,0\,;\,3)$ et $D(1\,;\,1\,;\,1)$.

3. Calculer le produit mixte $[\vec{AB}, \vec{AC}, \vec{AD}]$ et en déduire si les points $A$, $B$, $C$, $D$ sont coplanaires.
4. Calculer le volume du tétraèdre $ABCD$.

## Solution

**1. Produit vectoriel.**

$$
\vec{u} \wedge \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
2 & 1 & 0 \\
1 & 3 & 0
\end{vmatrix}
= (1 \times 0 - 0 \times 3)\vec{i} - (2 \times 0 - 0 \times 1)\vec{j} + (2 \times 3 - 1 \times 1)\vec{k}.
$$

$$
\vec{u} \wedge \vec{v} = (0\,;\,0\,;\,5) = 5\vec{k}.
$$

**Vérification d'orthogonalité :**

$$
(0\,;\,0\,;\,5) \cdot (2\,;\,1\,;\,0) = 0 + 0 + 0 = 0, \qquad
(0\,;\,0\,;\,5) \cdot (1\,;\,3\,;\,0) = 0.
$$

Le vecteur est bien orthogonal aux deux (il est de plus vertical, cohérent avec deux vecteurs du plan $xOy$).

**2. Aires.**

Les deux vecteurs sont dans le plan $xOy$ : le parallélogramme est plan, son aire vaut

$$
\|\vec{u} \wedge \vec{v}\| = \sqrt{0^2 + 0^2 + 5^2} = 5.
$$

Aire du triangle $OUV$ :

$$
\text{aire}(OUV) = \frac{1}{2} \times 5 = \frac{5}{2} = 2{,}5.
$$

**3. Produit mixte.**

Vecteurs issus de $A$ :

$$
\vec{AB} = (-1\,;\,2\,;\,0), \qquad
\vec{AC} = (-1\,;\,0\,;\,3), \qquad
\vec{AD} = (0\,;\,1\,;\,1).
$$

$$
[\vec{AB}, \vec{AC}, \vec{AD}] =
\begin{vmatrix}
-1 & 2 & 0 \\
-1 & 0 & 3 \\
0 & 1 & 1
\end{vmatrix}
$$

Développement selon la première ligne :

$$
= -1 \times \begin{vmatrix} 0 & 3 \\ 1 & 1 \end{vmatrix}
- 2 \times \begin{vmatrix} -1 & 3 \\ 0 & 1 \end{vmatrix}
+ 0
= -1 \times (0 - 3) - 2 \times (-1 - 0) = 3 + 2 = 5.
$$

Le produit mixte vaut $5 \neq 0$ : les trois vecteurs ne sont **pas** coplanaires, donc les points $A$, $B$, $C$, $D$ ne sont **pas coplanaires** — ils forment un vrai tétraèdre.

**4. Volume du tétraèdre.**

$$
V_{ABCD} = \frac{1}{6} \, \big|[\vec{AB}, \vec{AC}, \vec{AD}]\big| = \frac{5}{6}.
$$

:::remarque Réflexe
Le produit mixte prend en **valeur absolue** pour un volume, mais on le garde signé pour le test de coplanarité : ici $5 \neq 0$, donc pas de coplanarité — un volume nul aurait donné des points coplanaires.
:::
