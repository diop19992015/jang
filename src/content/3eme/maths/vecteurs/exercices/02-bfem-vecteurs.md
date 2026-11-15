---
titre: Type BFEM — Vecteurs : milieu, parallélisme et alignement
difficulte: 3
type: bfem
annee: 2023
indices:
  - Lis d’abord la figure : repère les points, les milieux et les parallèles.
  - Pour démontrer un parallélisme, exprime un vecteur comme un multiple d’un autre.
  - Écris toujours « vecteurs non nuls » avant de conclure sur les droites.
---

## Énoncé

Sujet de BFEM (10 points).

Dans un repère orthonormé, on donne les points $A(-1\,; 2)$, $B(5\,; 4)$ et
$C(3\,; -2)$. Le quadrilatère $ABCD$ est un parallélogramme. $M$ est le milieu
de $[BC]$ et $N$ est le milieu de $[AB]$.

**Partie A.** (4 points)
1. Calculer les coordonnées de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
2. Calculer les coordonnées du point $D$.
3. Calculer les coordonnées des milieux $M$ de $[BC]$ et $N$ de $[AB]$.

**Partie B.** (3 points)
4. Démontrer que les droites $(MN)$ et $(AC)$ sont parallèles.

**Partie C.** (3 points)
5. On donne $P(11\,; 6)$. Démontrer que les points $A$, $B$ et $P$ sont alignés.

## Solution

**1. Coordonnées de $\overrightarrow{AB}$ et $\overrightarrow{AC}$**

On utilise toujours **arrivée − départ**, composante par composante :

- $\overrightarrow{AB} = (5 - (-1)\,;\; 4 - 2) = (6\,;\; 2)$
- $\overrightarrow{AC} = (3 - (-1)\,;\; -2 - 2) = (4\,;\; -4)$

**2. Coordonnées de $D$**

$ABCD$ est un parallélogramme : les côtés opposés sont portés par des vecteurs
égaux, donc $\overrightarrow{AD} = \overrightarrow{BC}$.

- $\overrightarrow{BC} = (3 - 5\,;\; -2 - 4) = (-2\,;\; -6)$
- $D = A + \overrightarrow{AD} = (-1 + (-2)\,;\; 2 + (-6)) = (-3\,;\; -4)$

Vérification : $\overrightarrow{DC} = (3 - (-3)\,;\; -2 - (-4)) = (6\,;\; 2) = \overrightarrow{AB}$ :
le parallélogramme est bien construit.

**3. Milieux $M$ et $N$**

- $M$ milieu de $[BC]$ : $M\left(\dfrac{5 + 3}{2}\,;\; \dfrac{4 + (-2)}{2}\right) = (4\,;\; 1)$
- $N$ milieu de $[AB]$ : $N\left(\dfrac{-1 + 5}{2}\,;\; \dfrac{2 + 4}{2}\right) = (2\,;\; 3)$

**4. Parallélisme de $(MN)$ et $(AC)$**

- $\overrightarrow{MN} = (2 - 4\,;\; 3 - 1) = (-2\,;\; 2)$
- $\overrightarrow{AC} = (4\,;\; -4)$ (question 1)

On cherche un réel $\lambda$ tel que $\overrightarrow{MN} = \lambda\overrightarrow{AC}$. On compare
les rapports des composantes :

$$
\frac{-2}{4} = \frac{2}{-4} = -\frac{1}{2}
$$

Les rapports sont égaux, donc $\overrightarrow{MN} = -\dfrac{1}{2}\overrightarrow{AC}$.

Ces deux vecteurs sont **non nuls** (leur norme n’est pas nulle) et colinéaires :
les droites $(MN)$ et $(AC)$ sont donc **parallèles** (le facteur négatif signifie
seulement que les deux vecteurs ont des sens opposés).

**5. Alignement de $A$, $B$ et $P$**

Les points $A$, $B$, $P$ sont alignés si et seulement si $\overrightarrow{AP}$ et
$\overrightarrow{AB}$ sont colinéaires (et non nuls).

- $\overrightarrow{AB} = (6\,;\; 2)$ (question 1)
- $\overrightarrow{AP} = (11 - (-1)\,;\; 6 - 2) = (12\,;\; 4)$

On compare les rapports : $\dfrac{12}{6} = 2$ et $\dfrac{4}{2} = 2$ : les rapports sont
égaux, donc $\overrightarrow{AP} = 2\overrightarrow{AB}$.

$\overrightarrow{AB}$ étant non nul, les vecteurs sont colinéaires : **les points $A$, $B$ et
$P$ sont alignés**, et $B$ est le milieu de $[AP]$ puisque $\overrightarrow{AB} = \dfrac{1}{2}\overrightarrow{AP}$.

:::erreur Les erreurs qui coûtent des points
1. Oublier « vecteurs non nuls » avant de conclure : le vecteur nul est colinéaire
   à tout vecteur, mais il ne prouve aucun parallélisme.
2. Conclure « même norme donc parallèles » : le critère est le rapport des
   **composantes**, pas la longueur.
3. Interpréter $\lambda < 0$ comme « pas parallèle » : le signe de $\lambda$ ne concerne
   que le **sens**, pas la direction.
4. Calculer $D$ avec $D = B + C - A$ sans vérifier : ici $\overrightarrow{AD} = \overrightarrow{BC}$ est
   plus direct et se vérifie par $\overrightarrow{DC} = \overrightarrow{AB}$.
:::
