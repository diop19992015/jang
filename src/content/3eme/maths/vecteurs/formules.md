## Définitions et notations

:::formule Vecteur
Donnée de trois éléments : **direction**, **sens**, **norme**. Le vecteur allant de $A$ à $B$ s'écrit $\overrightarrow{AB}$ ; $\overrightarrow{AA} = \vec{0}$ (vecteur nul).
:::

:::formule Opposé
$$
\overrightarrow{BA} = -\overrightarrow{AB} \qquad \overrightarrow{AB} + \overrightarrow{BA} = \vec{0}
$$
:::

:::formule Égalité
$$
\overrightarrow{AB} = \overrightarrow{CD} \iff \text{même direction, même sens, même norme}
$$
:::

## L'addition des vecteurs

:::formule Règle du triangle
$$
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}
$$
:::

:::formule Chaîne de vecteurs
$$
\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DE} = \overrightarrow{AE}
$$
:::

:::formule Propriétés
| Propriété | Écriture |
| --- | --- |
| Associativité | $(\vec{u}+\vec{v})+\vec{w} = \vec{u}+(\vec{v}+\vec{w})$ |
| Vecteur nul | $\vec{u}+\vec{0} = \vec{u}$ |
| Opposé | $\vec{u}+(-\vec{u}) = \vec{0}$ |
| Translation | $\overrightarrow{OA} + \overrightarrow{AB} = \overrightarrow{OB}$ |
:::

## Produit par un nombre

:::formule Définition
$$
\|\lambda\vec{u}\| = |\lambda| \times \|\vec{u}\|
$$

| Cas | Sens | Norme |
| --- | --- | --- |
| $\lambda > 0$ | identique à $\vec{u}$ | $\times \lambda$ |
| $\lambda < 0$ | opposé à $\vec{u}$ | $\times |\lambda|$ |
| $\lambda = 0$ | vecteur nul $\vec{0}$ | $0$ |
:::

:::formule Combinaison linéaire
$$
\lambda\vec{u} + \mu\vec{v} \quad (\lambda, \mu \in \mathbb{R})
$$
En particulier : $\vec{u}+\vec{u} = 2\vec{u}$, $\dfrac{\vec{u}}{2} = \dfrac{1}{2}\vec{u}$.
:::

:::remarque Repères pour dessiner
Pour additionner, on **translate** : on déplace un vecteur sans changer son direction, son sens ni sa norme. La somme $\vec{u}+\vec{v}$ est la diagonale du parallélogramme construit sur $\vec{u}$ et $\vec{v}$ (règle du parallélogramme) ou la flèche reliant le départ de $\vec{u}$ à l'arrivée de $\vec{v}$ déplacé (règle du triangle).
:::

## Milieux et points alignés

:::formule Alignement
$$
M \in (AB) \iff \exists \lambda \in \mathbb{R},\ \overrightarrow{AM} = \lambda\overrightarrow{AB}
$$
:::

:::formule Milieu d'un segment
$$
\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB} \qquad \text{et} \qquad \overrightarrow{OM} = \frac{\overrightarrow{OA}+\overrightarrow{OB}}{2}
$$
:::

:::formule Segment et $\lambda$
- $M \in [AB] \iff 0 \leq \lambda \leq 1$.
- $M$ milieu de $[AB] \iff \lambda = \dfrac{1}{2}$.
- $\lambda < 0$ ou $\lambda > 1$ : $M$ est sur la droite $(AB)$ mais hors du segment.
:::

:::formule Vecteur reliant deux milieux
Si $M$ est le milieu de $[AB]$ et $N$ le milieu de $[CD]$ :
$$
\overrightarrow{MN} = \frac{\overrightarrow{AC} + \overrightarrow{BD}}{2}
$$
:::

## Parallélisme

:::formule Critère de colinéarité
$$
\overrightarrow{MN} = \lambda\overrightarrow{AB}
$$
Les vecteurs $\overrightarrow{MN}$ et $\overrightarrow{AB}$ ont alors la même direction.
:::

:::formule Parallélisme de droites
$$
(d_1) \parallel (d_2) \iff \text{deux vecteurs non nuls, propres à chacune, colinéaires}
$$
:::

:::remarque Formulation attendue au BFEM
« Les vecteurs $\overrightarrow{MN}$ et $\overrightarrow{BC}$ sont colinéaires (avec $\overrightarrow{MN} = \frac{1}{2}\overrightarrow{BC}$), et ils sont non nuls, donc les droites $(MN)$ et $(BC)$ sont parallèles. » Les deux mentions (colinéarité **et** non-nullité) rapportent chacune leur point.
:::

## Coordonnées

:::formule Vecteur entre deux points
$$
\overrightarrow{AB} = (x_B - x_A\,;\; y_B - y_A)
$$
:::

:::formule Norme (Pythagore)
$$
\|\overrightarrow{AB}\| = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}
$$
:::

:::formule Milieu et parallélisme avec les coordonnées
$$
M\left(\frac{x_A+x_B}{2}\,;\;\frac{y_A+y_B}{2}\right) \qquad \vec{u}=(x_1;y_1),\ \vec{v}=(x_2;y_2) \text{ colinéaires} \iff x_1y_2 - x_2y_1 = 0
$$
:::

| Opération | Coordonnées du résultat |
| --- | --- |
| $\overrightarrow{AB} + \overrightarrow{BC}$ | $(x_C - x_A\,;\; y_C - y_A)$ |
| $\overrightarrow{AB} + \overrightarrow{CD}$ | $(x_B - x_A + x_D - x_C\,;\; y_B - y_A + y_D - y_C)$ |
| $\lambda\overrightarrow{AB}$ | $(\lambda(x_B - x_A)\,;\; \lambda(y_B - y_A))$ |

:::remarque Arrivée − départ
La règle se retient en trois mots : **arrivée moins départ**. Et pour vérifier un résultat : les coordonnées d'un vecteur nul sont $(0\,;\,0)$.
:::
