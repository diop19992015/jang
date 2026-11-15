## Tableau de référence du repère

| Élément | Définition | Repère sur la figure |
| --- | --- | --- |
| Origine $O$ | Point de rencontre des axes | Point où se croisent $(Ox)$ et $(Oy)$ |
| Axe des abscisses $(Ox)$ | Droite graduée, horizontale | Gradué vers la droite |
| Axe des ordonnées $(Oy)$ | Droite graduée, verticale | Gradué vers le haut |
| Unité | Longueur de référence | La même sur les deux axes |
| Abscisse de $M$ | Distance signée à $O$ sur $(Ox)$ | Coordonnée horizontale |
| Ordonnée de $M$ | Distance signée à $O$ sur $(Oy)$ | Coordonnée verticale |

:::formule Notation
$$
M(a\,;\,b)
$$
$a$ est l’abscisse (première valeur), $b$ l’ordonnée (seconde valeur), séparées par un **point-virgule**. On lit : « $M$ de moins trois point-virgule cinq ».
:::

## Coordonnées et quadrants

| Quadrant | Position | Abcisse | Ordonnée | Exemple |
| --- | --- | --- | --- | --- |
| I | haut-droite | $+$ | $+$ | $(3\,;\,4)$ |
| II | haut-gauche | $-$ | $+$ | $(-3\,;\,4)$ |
| III | bas-gauche | $-$ | $-$ | $(-3\,;\,-4)$ |
| IV | bas-droite | $+$ | $-$ | $(3\,;\,-4)$ |

:::formule Cas particuliers
- $M(a\,;\,0)$ : $M$ est sur l’**axe des abscisses**.
- $M(0\,;\,b)$ : $M$ est sur l’**axe des ordonnées**.
- $O(0\,;\,0)$ : c’est l’origine.
:::

## Formules de distance et de milieu

:::formule Distance entre deux points
$$
AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
$$
:::

:::formule Milieu d’un segment
$$
M\left(\frac{x_A + x_B}{2}\,;\,\frac{y_A + y_B}{2}\right)
$$
:::

:::formule Réciproque — reconnaître un angle droit
Si les longueurs vérifient
$$
AB^2 + BC^2 = AC^2
$$
alors le triangle $ABC$ est rectangle en $B$ (réciproque du théorème de Pythagore).
:::

:::formule Longueur d’un segment aligné sur les axes
Si $A$ et $B$ ont la même ordonnée :
$$
AB = |x_B - x_A|
$$
Si $A$ et $B$ ont la même abscisse :
$$
AB = |y_B - y_A|
$$
:::

## Symétries de points dans le repère

:::formule Les trois symétries
$$
\begin{aligned}
M(a\,;\,b) &\mapsto M_1(a\,;\,-b) && \text{axe des abscisses} \\
M(a\,;\,b) &\mapsto M_2(-a\,;\,b) && \text{axe des ordonnées} \\
M(a\,;\,b) &\mapsto M_3(-a\,;\,-b) && \text{origine } O
\end{aligned}
$$
:::

:::remarque Méthode du signe
« Change le signe de l’ordonnée » pour l’axe des abscisses (tu retournes en hauteur) ; « change le signe de l’abscisse » pour l’axe des ordonnées (tu retournes en largeur) ; « change les deux » pour l’origine (retournement complet).
:::

## Aires et périmètres dans le repère

| Figure | Périmètre | Aire |
| --- | --- | --- |
| Rectangle de côtés $a$ et $b$ | $2 \times (a + b)$ | $a \times b$ |
| Carré de côté $a$ | $4 \times a$ | $a^2$ |
| Triangle rectangle de côtés $a$, $b$ (hypoténuse $c$) | $a + b + c$ | $\dfrac{a \times b}{2}$ |
| Triangle quelconque | somme des 3 côtés | $\dfrac{base \times hauteur}{2}$ |
| Parallélogramme de base $a$, hauteur $h$ | somme des 4 côtés | $a \times h$ |

:::formule Méthode en 4 étapes
1. Lire les coordonnées des sommets.
2. Calculer les longueurs avec la formule de distance.
3. Identifier la figure (Pythagore pour les angles droits).
4. Appliquer les formules de périmètre et d’aire, avec les unités.
:::

## Échelles et proportionnalité

:::formule Passer du plan à la réalité
$$
\text{distance réelle} = \text{distance sur le plan} \times \text{valeur de l’unité}
$$
:::

| Échelle | 1 cm sur le plan vaut |
| --- | --- |
| $1:1\,000$ | $10$ m |
| $1:10\,000$ | $100$ m |
| $1:50\,000$ | $500$ m |
| $1:1\,000\,000$ | $10$ km |

:::remarque Unite du repère ou échelle
Sur un plan de ville, lis toujours l’unité indiquée (« 1 unité = 100 m ») avant de calculer : la formule de distance donne une valeur dans cette unité, à convertir ensuite en mètres ou en kilomètres.
:::

## Conversions utiles

| De | Vers | Opération |
| --- | --- | --- |
| m | km | diviser par $1000$ |
| cm | m | diviser par $100$ |
| m² | cm² | multiplier par $10\,000$ |
| cm³ (= mL) | L | diviser par $1000$ |
