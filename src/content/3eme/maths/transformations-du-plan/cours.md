---
titre: Transformations du plan
accroche: Programme officiel — Activités géométriques.
ordre: 11
duree: 80
demo: false
objectifs:
  - Reconnaître et construire une translation, une rotation et une symétrie
  - Connaître les propriétés de conservation (longueurs, angles, parallélisme)
  - Utiliser les transformations pour démontrer dans une figure
---

:::remarque À quoi ça sert au BFEM ?
Les transformations du plan tombent presque chaque année au BFEM, souvent sous forme de construction (« Construire l'image d'une figure par… ») ou de démonstration (« Montrer que… en utilisant une transformation »). Les propriétés de conservation permettent de justifier en deux lignes des résultats qui, sinon, demanderaient des calculs longs.
:::

## Qu'est-ce qu'une transformation du plan ?

Une **transformation du plan** associe à chaque point $M$ du plan un unique point $M'$, dit **image de $M$**. Le point $M$ est l'**antécédent** de $M'$.

:::definition Les quatre transformations de 3ème
- la **translation** : on déplace la figure dans une direction, d'une même longueur ;
- la **rotation** : on fait tourner la figure autour d'un centre, d'un certain angle ;
- la **symétrie axiale** : on retourne la figure de part et d'autre d'une droite, appelée **axe** ;
- la **symétrie centrale** : on retourne la figure autour d'un point, appelé **centre**.
:::

:::remarque Repérer les données dans un énoncé
Une translation est définie par un **vecteur**, une rotation par un **centre** et un **angle**, une symétrie axiale par un **axe**, une symétrie centrale par un **centre**. Avant toute construction, entoure ces données dans l'énoncé.
:::

## La translation

:::definition Translation
Soit $\vec{v}$ un vecteur du plan. La translation de vecteur $\vec{v}$ est la transformation qui associe à chaque point $M$ le point $M'$ tel que
$$
\overrightarrow{MM'} = \vec{v}
$$
:::

:::formule Propriétés de la translation
- $\overrightarrow{AA'} = \overrightarrow{BB'} = \vec{v}$ pour tous les points $A$, $B$ de la figure ;
- un segment est envoyé sur un segment **parallèle et égal** : $[A'B'] \parallel [AB]$ et $A'B' = AB$ ;
- une droite est envoyée sur une droite **parallèle ou confondue** ;
- les longueurs, les angles et les aires sont conservés.
:::

:::methode Construire l'image d'une figure par translation
1. Repérer le vecteur $\vec{v}$ de la translation dans l'énoncé.
2. Choisir un point $A$ de la figure et construire $A'$ tel que $\overrightarrow{AA'} = \vec{v}$ : même direction, même longueur, même sens.
3. Recommencer pour les autres points $B$, $C$, $D$… avec le **même** vecteur.
4. Relier les images dans le même ordre : $A'B'C'D'$.
5. Vérifier : chaque segment doit être parallèle et égal à son image.
:::

:::exemple Image d'un triangle par translation
Le triangle $ABC$ est donné. La translation de vecteur $\vec{v}$ de $5$ cm, dirigé par la droite $(AB)$, envoie $A$ en $A'$.

- On trace la parallèle à $(AB)$ passant par $A$ ;
- on porte sur cette droite la longueur $AA' = 5$ cm dans le bon sens ;
- on fait de même pour $B$ et $C$.

Le triangle $A'B'C'$ a les mêmes longueurs et les mêmes angles que $ABC$ : $A'B' = AB$, $B'C' = BC$, $A'C' = AC$.
:::

:::erreur Deux erreurs fréquentes
1. Oublier le **sens** du vecteur : $A'$ n'est pas placé du côté du hasard.
2. Déplacer un seul point : la translation s'applique à **tous** les points de la figure avec le **même** vecteur.
:::

## La rotation

:::definition Rotation
La rotation de centre $O$ et d'angle $\alpha$ associe à chaque point $M$ son image $M'$ telle que :
- $OM' = OM$ ;
- l'angle $\widehat{MOM'}$ mesure $\alpha$, dans le sens indiqué (souvent le sens direct, c'est-à-dire celui des aiguilles d'une montre opposé).
:::

:::methode Construire l'image d'un point par rotation
1. Tracer le segment $[OM]$.
2. Construire au sommet $O$ l'angle de mesure $\alpha$, dans le bon sens.
3. Reporter la longueur $OM' = OM$ sur le nouveau rayon.
4. Recommencer pour chaque point de la figure, puis relier les images.
:::

:::exemple Rotation de 90°
Dans une rotation de centre $O$ et d'angle $90°$ dans le sens direct, le point $A$ tel que $OA = 4$ cm est envoyé en $A'$ avec $OA' = 4$ cm et $\widehat{AOA'} = 90°$.

Tous les segments tournent de $90°$ : la droite $(AB)$ devient la droite $(A'B')$, et comme l'angle entre les deux directions vaut $90°$, on a $(A'B') \perp (AB)$.
:::

:::piege Attention au sens de l'angle
Un angle peut être tourné dans le sens horaire ou dans le sens direct. Lis le sens demandé dans l'énoncé : un angle de $90°$ dans le sens direct et un angle de $90°$ dans le sens horaire donnent deux images différentes.
:::

## La symétrie axiale

:::definition Symétrie axiale
La symétrie axiale d'axe $(d)$ associe à chaque point $M$ son image $M'$ telle que $(d)$ est la **médiatrice** du segment $[MM']$ :
- $(d)$ est perpendiculaire à $[MM']$ ;
- le milieu de $[MM']$ appartient à $(d)$.

Les points de $(d)$ sont **fixes** : leur image est eux-mêmes.
:::

:::formule Propriétés de la symétrie axiale
- $M$ et $M'$ sont à **égale distance** de l'axe $(d)$ ;
- les distances sont conservées : la distance $MN$ vaut la distance $M'N'$ ;
- une droite perpendiculaire à $(d)$ est transformée en elle-même ;
- une droite parallèle à $(d)$ est transformée en une droite **parallèle** ;
- les droites sécantes restent sécantes, et l'angle entre deux droites est conservé.
:::

:::methode Construire la symétrie d'un point
1. Depuis $M$, tracer la perpendiculaire à $(d)$.
2. Noter $H$ le point d'intersection de cette perpendiculaire avec $(d)$.
3. Reporter de l'autre côté $HM' = HM$.
4. $M'$ est l'image de $M$ ; recommencer pour chaque point, puis relier.
:::

:::exemple Symétrie d'un rectangle
Le rectangle $ABCD$ a son côté $[AB]$ posé sur l'axe $(d)$. Comme $A$ et $B$ appartiennent à $(d)$, ils sont fixes : $A' = A$ et $B' = B$. Les points $C$ et $D$ passent de l'autre côté de $(d)$. Le rectangle image $A'B'C'D'$ a les mêmes longueurs que $ABC$ et repose lui aussi sur $(d)$.
:::

:::piege L'axe n'est pas un centre de rotation
Dans une symétrie axiale, $M$ et $M'$ sont de **part et d'autre** de $(d)$, jamais du même côté. Si ton image reste du même côté de l'axe, tu as fait une translation au lieu d'une symétrie.
:::

## La symétrie centrale

:::definition Symétrie centrale
La symétrie centrale de centre $O$ associe à chaque point $M$ son image $M'$ telle que $O$ est le **milieu** du segment $[MM']$.
:::

:::remarque Un cas particulier de rotation
La symétrie centrale de centre $O$ est la rotation de centre $O$ et d'angle $180°$ : on a $OM' = OM$ et $\widehat{MOM'} = 180°$, donc $M$, $O$ et $M'$ sont alignés.
:::

:::formule Propriétés de la symétrie centrale
- $O$ est le milieu de $[MM']$ pour tout point $M$ ;
- une droite est transformée en une droite **parallèle** ou confondue ;
- les longueurs, les angles et les aires sont conservés ;
- si une figure a un centre de symétrie, ce centre en est aussi le centre de gravité : c'est le cas du parallélogramme, du rectangle, du carré, du cercle.
:::

:::exemple Image d'un segment
Soit le segment $[AB]$ et le point $O$ son milieu. L'image de $A$ est le point $A'$ tel que $O$ est le milieu de $[AA']$ : c'est $B$. De même, l'image de $B$ est $A$. L'image du segment $[AB]$ est donc le segment $[BA]$, qui est le même segment, mais dont les deux extrémités se sont **échangées**.
:::

## Les propriétés de conservation

:::formule Ce que les quatre transformations conservent
- les **longueurs** : $AB = A'B'$ ;
- les **angles** : $\widehat{ABC} = \widehat{A'B'C'}$ ;
- les **aires** ;
- le **parallélisme** : $(AB) \parallel (CD)$ entraîne $(A'B') \parallel (C'D')$ ;
- l'**alignement** : si $M$, $N$, $P$ sont alignés, alors $M'$, $N'$, $P'$ sont alignés ;
- les **milieux** et les **rapports de longueurs**.
:::

:::remarque Ce qui n'est pas conservé
La **position** des points change, ainsi que le **sens de parcours** d'une figure : après une symétrie axiale, la figure « retourne ». Les longueurs et les angles, eux, ne changent jamais.
:::

:::exemple Vérifier la conservation
Un triangle $ABC$ a des côtés de $5$ cm, $6$ cm et $7$ cm. Son image $A'B'C'$ par n'importe laquelle des quatre transformations a forcément les côtés $5$ cm, $6$ cm et $7$ cm, et les mêmes angles. Si ton image donne $A'B' = 8$ cm, c'est que la construction est fautive.
:::

## Utiliser les transformations pour démontrer

:::methode Démonstration en quatre étapes
1. Choisir la transformation adaptée (translation, rotation ou symétrie).
2. Écrire précisément ce qu'elle transforme : $A \mapsto A'$, $(AB) \mapsto (A'B')$…
3. Invoquer une propriété de conservation (longueurs, parallélisme, angles…).
4. Conclure par une phrase complète, en citant la propriété utilisée.
:::

:::exemple Démontrer que $MA = MB$
Soit $[AB]$ un segment et $(d)$ sa médiatrice. Si $M$ appartient à $(d)$, montrer que $MA = MB$.

La symétrie axiale d'axe $(d)$ transforme $A$ en $B$ (car $(d)$ est la médiatrice de $[AB]$) et laisse $M$ fixe (car $M \in (d)$). Cette symétrie conserve les distances : la distance entre $A$ et $M$ est donc égale à la distance entre leurs images $B$ et $M$. Ainsi
$$
MA = MB
$$
:::

:::exemple Démontrer un parallélisme
Soit $ABCD$ un parallélogramme. La translation qui envoie $A$ en $C$ envoie aussi $B$ en $D$, car $\overrightarrow{AB} = \overrightarrow{DC}$. L'image de la droite $(AB)$ est donc la droite $(CD)$. Or une translation transforme une droite en une droite parallèle : on conclut que
$$
(AB) \parallel (CD)
$$
:::

:::erreur Ce que le correcteur attend
- La **transformation choisie** doit être nommée et ses données (vecteur, centre, axe) précisées.
- La **propriété utilisée** doit être citée : « une translation conserve les longueurs », « la symétrie axiale transforme une droite en une droite perpendiculaire »…
- La **conclusion** doit être écrite en mots, pas seulement par un schéma.
:::

## Ce qu'il faut retenir

- Une transformation associe à chaque point un **image unique** ; les quatre étudiées en 3ème sont : translation, rotation, symétrie axiale, symétrie centrale.
- La **translation** se définit par un **vecteur** : $\overrightarrow{MM'} = \vec{v}$, elle envoie chaque droite sur une droite parallèle.
- La **rotation** se définit par un **centre** et un **angle** : $OM' = OM$.
- La **symétrie axiale** se définit par un **axe**, qui est la **médiatrice** de $[MM']$ ; les points de l'axe sont fixes.
- La **symétrie centrale** se définit par un **centre**, **milieu** de $[MM']$ ; c'est une rotation de $180°$.
- Toutes les transformations **conservent** longueurs, angles, aires, alignements, milieux, parallélisme et rapports de longueurs.
- Pour démontrer : choisir la transformation → écrire ce qu'elle transforme → citer la conservation → conclure.
