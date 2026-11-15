---
titre: Angle inscrit
accroche: Programme officiel — Activités géométriques.
ordre: 9
duree: 60
demo: false
objectifs:
  - Définir un angle inscrit et l’arc qu’il intercepte
  - Utiliser la propriété : un angle inscrit mesure la moitié de son arc
  - Calculer des angles dans un cercle
---

:::remarque À quoi ça sert au BFEM ?
Les calculs d'angles dans un cercle tombent régulièrement au BFEM, souvent combinés avec Thalès ou Pythagore : on donne un cercle, quelques arcs, et on demande plusieurs angles. Savoir passer d'un arc à un angle (et inversement) fait gagner des points rapides, à condition de bien identifier l'arc intercepté.
:::

## Rappels sur le cercle

:::definition Vocabulaire du cercle
- **Cercle** : ensemble des points situés à une même distance d'un point $O$ appelé **centre**.
- **Rayon** : segment qui relie le centre à un point du cercle ($OA$, $OB$…). Tous les rayons d'un cercle ont la même longueur.
- **Diamètre** : segment qui relie deux points du cercle en passant par le centre ($[AB]$ est un diamètre si $O$ est le milieu de $[AB]$). Un diamètre mesure le double du rayon.
- **Corde** : segment qui relie deux points quelconques du cercle.
- **Arc** : portion du cercle compris entre deux points.
:::

:::definition Mesure d'un arc
La **mesure d'un arc** (en degrés) est égale à la mesure de l'angle au centre qui le intercepte. Elle va de $0°$ à $360°$, et la mesure de tout le cercle vaut :
$$
360°
$$

L'arc qui relie deux points $A$ et $B$ se décompose toujours en deux : le **petit arc** $AB$ et le **grand arc** $AB$ ; leur somme vaut $360°$.
:::

:::exemple Mesures d'arc
Dans un cercle de centre $O$, si l'angle $\widehat{AOB} = 80°$, alors l'arc $AB$ (celui qui ne contient pas le centre dans l'angle) mesure $80°$.

Si le petit arc $AB$ mesure $80°$, le grand arc $AB$ mesure $360° - 80° = 280°$.
:::

## L'angle au centre

:::formule Angle au centre
L'angle au centre est un angle dont le sommet est le centre du cercle ; sa mesure est égale à la mesure de l'arc qu'il intercepte :
$$
m(\widehat{AOB}) = m(\text{arc } AB)
$$
:::

## L'angle inscrit

:::definition Angle inscrit
Un **angle inscrit** est un angle dont le **sommet est sur le cercle** et dont les côtés (deux demi-droites) sont des **cordes** du cercle.

L'arc situé à l'intérieur de l'angle s'appelle l'**arc intercepté**.
:::

:::exemple Reconnaître un angle inscrit
Dans le cercle ci-dessous, les points $A$, $B$, $C$ sont sur le cercle.

- L'angle $\widehat{ACB}$ est un angle inscrit : sommet $C$ sur le cercle, côtés $[CA]$ et $[CB]$ des cordes. Il **intercepte l'arc $AB$** (l'arc que l'on voit « à l'intérieur » de l'angle).
- L'angle $\widehat{AOB}$ est un **angle au centre** : son sommet est le centre $O$ ; il intercepte lui aussi l'arc $AB$.
:::

:::erreur Repérer le bon arc
L'arc intercepté est celui qui se trouve **à l'intérieur** de l'angle, du côté des rayons qui partent du sommet. Fais attention aux arcs complémentaires : $\widehat{ACB}$ n'intercepte pas le même arc que $\widehat{ABC}$ !
:::

## La propriété fondamentale de l'angle inscrit

:::formule Théorème de l'angle inscrit
La mesure d'un angle inscrit est la **moitié de la mesure de l'arc** qu'il intercepte :
$$
m(\widehat{ACB}) = \frac{m(\text{arc } AB)}{2}
$$

et réciproquement :
$$
m(\text{arc intercepté}) = 2 \times m(\text{angle inscrit})
$$
:::

:::formule Angle au centre et angle inscrit de même arc
L'angle au centre interceptant un même arc est le **double** de l'angle inscrit :
$$
m(\widehat{AOB}) = 2 \times m(\widehat{ACB})
$$
:::

:::methode Calculer un angle inscrit
1. Repérer le sommet de l'angle (il est sur le cercle).
2. Identifier l'arc intercepté, en traçant si besoin les deux cordes.
3. Diviser la mesure de cet arc par $2$.
4. Pour un angle au centre, prendre l'arc tel quel (pas de division) : l'angle au centre vaut deux fois l'angle inscrit de même arc.
:::

:::exemple Premier calcul
Dans un cercle de centre $O$, les points $A$, $B$ et $C$ sont sur le cercle et $m(\text{arc } AB) = 80°$. Calculer $\widehat{ACB}$.

Le sommet $C$ est sur le cercle et l'angle intercepte l'arc $AB$ :
$$
m(\widehat{ACB}) = \frac{80°}{2} = 40°.
$$

L'angle au centre correspondant vaut, lui, $80°$.
:::

## Angles inscrits de même arc

:::formule Angles de même arc
Deux angles inscrits qui **interceptent le même arc** ont la même mesure :
$$
m(\widehat{ACB}) = m(\widehat{ADB}) = \frac{m(\text{arc } AB)}{2}
$$
:::

:::exemple Deux angles égaux
$A$, $B$, $C$, $D$ sont sur un cercle, $C$ et $D$ du même côté de la droite $(AB)$, et $m(\text{arc } AB) = 120°$. Alors :
$$
m(\widehat{ACB}) = m(\widehat{ADB}) = \frac{120°}{2} = 60°.
$$
:::

:::remarque Points de part et d'autre de la corde
Si $C$ et $D$ sont de part et d'autre de la corde $[AB]$, les angles $\widehat{ACB}$ et $\widehat{ADB}$ sont **supplémentaires** (somme $= 180°$) : ils interceptent les deux arcs complémentaires qui, réunis, valent $360°$.
:::

## L'angle inscrit dans un demi-cercle

:::formule Cas du diamètre (théorème de Thalès)
Si un angle inscrit intercepte un **demi-cercle** (c'est-à-dire si l'un des côtés de l'angle est un diamètre), alors l'angle est droit :
$$
[AB] \text{ diamètre et } C \text{ sur le cercle} \implies m(\widehat{ACB}) = 90°
$$

En effet, l'arc d'un demi-cercle mesure $180°$, et $180° : 2 = 90°$.
:::

:::remarque Lien avec le théorème de Thalès
Ce résultat est exactement le **théorème de Thalès** : tout triangle inscrit dans un demi-cercle est rectangle. C'est pourquoi les sujets de BFEM associent souvent l'angle inscrit, Pythagore et Thalès dans la même figure.
:::

:::exemple Un triangle rectangle grâce au cercle
$[AB]$ est un diamètre du cercle de centre $O$ et $C$ est un point du cercle tel que $AC = 6$ cm et $BC = 8$ cm.

- D'après la réciproque du théorème, le triangle $ABC$ est rectangle en $C$.
- Pythagore donne alors :
$$
AB^2 = AC^2 + BC^2 = 36 + 64 = 100 \implies AB = 10 \text{ cm}.
$$

Le rayon du cercle vaut donc $5$ cm.
:::

:::formule Réciproque : retrouver le diamètre
Si un angle inscrit est **droit**, alors son côté est un diamètre du cercle : le triangle est rectangle et le diamètre est son hypoténuse.
:::

## Calculer des angles dans une figure complète

:::methode Méthode en cinq étapes
1. Noter la mesure de **tous les arcs donnés** ; si le cercle est complet, vérifier que leur somme fait $360°$ (ou $180°$ sur un demi-cercle).
2. Classer chaque angle : au centre (mesure = arc) ou inscrit (mesure = arc ÷ 2).
3. Identifier précisément l'arc intercepté par chaque angle.
4. Calculer, puis vérifier : somme des angles d'un triangle = $180°$.
5. Si un diamètre apparaît, penser immédiatement à l'angle droit.
:::

:::exemple Exercice complet
$[AD]$ est un diamètre du cercle de centre $O$. Les points $B$ et $C$ sont sur le cercle, dans l'ordre $A$, $B$, $C$, $D$. On donne :
$$
m(\text{arc } AB) = 50° \qquad m(\text{arc } CD) = 30°
$$

**a.** Calculer l'arc $BC$. Comme $[AD]$ est un diamètre, l'arc semi-cercle $ABCD$ mesure $180°$ :
$$
m(\text{arc } BC) = 180° - 50° - 30° = 100°.
$$

**b.** Calculer $\widehat{ACB}$. L'angle inscrit $\widehat{ACB}$ intercepte l'arc $AB$ :
$$
m(\widehat{ACB}) = \frac{50°}{2} = 25°.
$$

**c.** Calculer $\widehat{ADB}$. Il intercepte le même arc $AB$ :
$$
m(\widehat{ADB}) = 25° \quad (\text{angles de même arc}).
$$

**d.** Calculer $\widehat{DAC}$. Il intercepte l'arc $CD$ :
$$
m(\widehat{DAC}) = \frac{30°}{2} = 15°.
$$

**e.** Calculer $\widehat{ACD}$. $[AD]$ est un diamètre, donc l'angle inscrit $\widehat{ACD}$ est droit :
$$
m(\widehat{ACD}) = 90°.
$$

**f.** Vérification dans le triangle $ABC$ :
$$
m(\widehat{BAC}) = \frac{m(\text{arc } BC)}{2} = \frac{100°}{2} = 50°,
$$
$$
m(\widehat{ABC}) = \frac{m(\text{arc } ADC)}{2} = \frac{180° + 30°}{2} = 105°,
$$
$$
50° + 105° + 25° = 180° \quad \checkmark
$$
:::

:::piege Attention à l'arc « de l'autre côté »
L'angle $\widehat{ABC}$ ne intercepte pas l'arc $BC$, mais l'arc $AC$ qui est **en face** de lui (celui qui ne contient pas $B$). Trace les deux côtés de l'angle et regarde quel arc se trouve à l'intérieur : c'est celui-là qu'on divise par $2$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier la division par $2$ : un angle inscrit mesure la **moitié** de son arc, pas l'arc lui-même.
2. Utiliser un arc qui n'est pas intercepté par l'angle (le mauvais côté de la corde).
3. Prendre un angle au centre comme un angle inscrit : l'angle au centre n'est **pas** divisé par $2$ (c'est deux fois l'angle inscrit de même arc).
4. Écrire $m(\widehat{ACB}) = 80°$ sans dire que $m(\text{arc } AB) = 80°$ : la rédaction doit faire apparaître l'arc utilisé.
:::

## Ce qu'il faut retenir

- Un **angle inscrit** a son sommet sur le cercle et ses côtés sont des cordes ; il **intercepte** un arc.
- $m(\text{angle inscrit}) = \dfrac{m(\text{arc intercepté})}{2}$ et $m(\text{angle au centre}) = m(\text{arc})$.
- Deux angles inscrits de **même arc** sont égaux ; l'angle au centre est le double de l'angle inscrit.
- Un angle inscrit dans un **demi-cercle** est droit : c'est le théorème de Thalès.
- La mesure de tout un cercle vaut $360°$ : vérifie toujours la somme des arcs et la somme des angles du triangle ($180°$).
