---
titre: Repérage dans le plan
accroche: Programme officiel — Activités géométriques.
ordre: 12
duree: 90
demo: false
objectifs:
  - Définir un repère : origine, axe des abscisses, axe des ordonnées, unités
  - Placer un point à partir de ses coordonnées et lire les coordonnées d’un point
  - Calculer une distance et le milieu d’un segment dans un repère
---

:::remarque À quoi ça sert au BFEM ?
Le repérage tombe presque chaque année au BFEM : on demande de lire ou de donner les coordonnées d’un point, de calculer une distance avec Pythagore ou le milieu d’un segment. C’est aussi la base des questions de proportionnalité (échelle d’un plan de Dakar) et des démonstrations de géométrie. Ces points sont rapides à gagner si la méthode est maîtrisée.
:::

## Le repère orthogonal

:::definition Repère orthogonal du plan
Un repère orthogonal du plan est constitué de :
- un point $O$, appelé **origine** ;
- une droite $(Ox)$, appelée **axe des abscisses**, graduée ;
- une droite $(Oy)$, appelée **axe des ordonnées**, graduée perpendiculairement à $(Ox)$ ;
- une **unité de longueur**, choisie une fois pour toutes (1 cm, 1 unité…).

Les deux axes sont **perpendiculaires** et se coupent en $O$.
:::

:::remarque Notation et conventions
- On note le repère $(O\,;\,x\,;\,y)$ ou $(O\,;\,u\,;\,v)$, où $\vec{u}$ et $\vec{v}$ sont les vecteurs unité des deux axes.
- Les axes sont gradués **positivement** : vers la droite pour $(Ox)$, vers le haut pour $(Oy)$.
- Le **repère orthonormé** est le repère orthogonal dont les unités sont égales sur les deux axes : c’est celui du programme de 3ème.
:::

:::methode Lire un repère sur une figure
1. Repérer l’origine $O$ et le sens positif de chaque axe.
2. Vérifier que les deux graduations utilisent la **même unité**.
3. Descendre de $M$ la perpendiculaire à $(Ox)$ : le point de rencontre donne l’abscisse.
4. Descendre de $M$ la perpendiculaire à $(Oy)$ : le point de rencontre donne l’ordonnée.
:::

## Les coordonnées d’un point

:::definition Coordonnées d’un point
Soit un repère orthogonal $(O\,;\,x\,;\,y)$. Les **coordonnées** du point $M$ sont le couple $(a\,;\,b)$ où :
- $a$ est l’**abscisse** : la mesure signée du segment projeté sur $(Ox)$ ;
- $b$ est l’**ordonnée** : la mesure signée du segment projeté sur $(Oy)$.

On note $M(a\,;\,b)$.
:::

:::erreur Attention au point-virgule
On écrit $M(-3\,;\,5)$ avec un **point-virgule** entre les deux coordonnées, jamais une virgule : $(-3,5)$ signifierait le nombre $-3{,}5$ ! Les coordonnées sont **signées** : $-3$ veut dire $3$ unités à gauche de l’origine.
:::

:::exemple Lire et placer des points
Dans un repère d’unité 1 cm :
- $A(3\,;\,2)$ : 3 unités à droite de $O$, puis 2 unités vers le haut ;
- $B(-4\,;\,1)$ : 4 unités à gauche, puis 1 unité vers le haut ;
- $C(0\,;\,-5)$ : sur l’axe des ordonnées, 5 unités sous $O$ ;
- $D(-2\,;\,0)$ : sur l’axe des abscisses, 2 unités à gauche de $O$.

Un point est sur l’axe des abscisses **si et seulement si** son ordonnée vaut $0$.
:::

:::formule Signes des coordonnées selon le quadrant
| Quadrant | Position de $M$ | Abcisse | Ordonnée | Exemple |
| --- | --- | --- | --- | --- |
| I | en haut à droite | $+$ | $+$ | $M(3\,;\,4)$ |
| II | en haut à gauche | $-$ | $+$ | $M(-3\,;\,4)$ |
| III | en bas à gauche | $-$ | $-$ | $M(-3\,;\,-4)$ |
| IV | en bas à droite | $+$ | $-$ | $M(3\,;\,-4)$ |
:::

## Les symétries de points dans un repère

:::formule Coordonnées des images par symétrie
Pour un point $M(a\,;\,b)$ :
- image par l’**axe des abscisses** : $M_1(a\,;\,-b)$ (on change le signe de l’ordonnée) ;
- image par l’**axe des ordonnées** : $M_2(-a\,;\,b)$ (on change le signe de l’abscisse) ;
- image par l’**origine $O$** (symétrie centrale) : $M_3(-a\,;\,-b)$ (on change les deux signes).
:::

:::exemple Applications- $P(3\,;\,-4)$ devient $(-3\,;\,-4)$ par l’axe des abscisses : $P$ est en quadrant IV, son image en quadrant III ;
- $Q(-5\,;\,2)$ devient $(5\,;\,2)$ par l’axe des ordonnées ;
- $R(6\,;\,7)$ devient $(-6\,;\,-7)$ par l’origine.
:::

:::remarque Lien avec le chapitre précédent
Ces trois formules ne sont que l’expression, dans un repère, des symétries axiale et centrale étudiées en transformations du plan : la distance à l’axe reste la même, seul le signe change.
:::

## La distance entre deux points

:::formule Distance entre deux points
Soit $A(x_A\,;\,y_A)$ et $B(x_B\,;\,y_B)$ dans un repère orthogonal :
$$
AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
$$
:::

La formule vient du **théorème de Pythagore** : si on projette le segment $[AB]$ sur les deux axes, on obtient un triangle rectangle dont l’hypoténuse est $AB$.

:::methode Calculer $AB$
1. Écrire les coordonnées des deux points.
2. Calculer la différence des abscisses et la différence des ordonnées.
3. Élever chaque différence au carré.
4. Additionner, puis extraire la racine carrée.
5. Donner l’unité (cm, km…) et arrondir si besoin.
:::

:::exemple Calcul de $AB$
$A(2\,;\,-1)$ et $B(5\,;\,3)$.
$$
AB = \sqrt{(5 - 2)^2 + (3 - (-1))^2}
$$
$$
AB = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25}
$$
$$
AB = 5
$$

Donc $AB = 5$ unités. On retrouve le triplet pythagoricien $3$–$4$–$5$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier les **parenthèses** avant d’élever au carré : $(5-2)^2$ vaut $9$, mais $5 - 2^2$ vaut $1$.
2. Ne pas **changer de signe** quand une coordonnée est négative : $3 - (-1) = 4$, pas $2$.
3. Oublier la **racine carrée** à la fin, ou oublier l’unité.
:::

## Le milieu d’un segment

:::formule Milieu d’un segment
Si $A(x_A\,;\,y_A)$ et $B(x_B\,;\,y_B)$, le milieu $M$ du segment $[AB]$ a pour coordonnées :
$$
M\left(\frac{x_A + x_B}{2}\,;\,\frac{y_A + y_B}{2}\right)
$$
:::

On **moyenne** les abscisses d’un côté, les ordonnées de l’autre.

:::exemple Calcul d’un milieu
$A(-2\,;\,5)$ et $B(6\,;\,-1)$. Le milieu $M$ de $[AB]$ a pour coordonnées :
$$
x_M = \frac{-2 + 6}{2} = \frac{4}{2} = 2
$$
$$
y_M = \frac{5 + (-1)}{2} = \frac{4}{2} = 2
$$

Donc $M(2\,;\,2)$.
:::

:::methode Vérifier qu’un point est un milieu
1. Calculer le milieu de $[AB]$ avec la formule.
2. Comparer au point donné.
3. Ou vérifier que $AM = MB$ et que $A$, $M$, $B$ sont alignés (distance nulle entre $A$, $B$ et $AM + MB = AB$).
:::

## Les figures dans le repère

:::methode Traiter une figure placée dans un repère
1. Lire les coordonnées de tous les sommets.
2. Calculer les longueurs des côtés avec la formule de distance.
3. Utiliser Pythagore pour reconnaître un angle droit (réciproque) si besoin.
4. Calculer le périmètre, puis l’aire ($aire = base \times hauteur$ pour un rectangle, $\dfrac{base \times hauteur}{2}$ pour un triangle).
:::

:::exemple Un terrain rectangulaire sur le plan de Sandaga
Sur un plan du marché de Sandaga, un étal occupe les sommets $A(-1\,;\,2)$, $B(5\,;\,2)$, $C(5\,;\,5)$ et $D(-1\,;\,5)$, l’unité étant le mètre.

- $AB = \sqrt{(5-(-1))^2 + (2-2)^2} = \sqrt{36} = 6$ m ;
- $BC = \sqrt{(5-5)^2 + (5-2)^2} = \sqrt{9} = 3$ m ;
- le terrain est un rectangle de $6$ m sur $3$ m :
$$
\text{périmètre} = 2 \times (6 + 3) = 18 \text{ m}
$$
$$
\text{aire} = 6 \times 3 = 18 \text{ m}^2
$$

Pour un carré aligné sur les axes, les longueurs se lisent presque directement : on soustrait les abscisses d’un côté, les ordonnées de l’autre.
:::

:::remarque Plans et échelles
Sur un plan, l’unité du repère est souvent une **échelle** : 1 unité = 100 m, 1 unité = 1 km… La distance calculée dans le repère se multiplie alors par l’échelle pour obtenir la distance réelle, en appliquant une simple proportionnalité.
:::

## Ce qu’il faut retenir

- Un repère orthogonal est fait d’une **origine $O$**, de l’**axe des abscisses** $(Ox)$, de l’**axe des ordonnées** $(Oy)$ et d’une **unité**.
- Les coordonnées d’un point $M(a\,;\,b)$ sont **signées** et séparées par un point-virgule.
- Un point est sur $(Ox)$ si $b = 0$, sur $(Oy)$ si $a = 0$.
- Symétries : axe des abscisses $(a\,;\,-b)$, axe des ordonnées $(-a\,;\,b)$, origine $(-a\,;\,-b)$.
- Distance :
$$
AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
$$
- Milieu :
$$
M\left(\frac{x_A + x_B}{2}\,;\,\frac{y_A + y_B}{2}\right)
$$
- Toute figure du repère se traite en trois temps : **coordonnées → longueurs → périmètre et aires**.
