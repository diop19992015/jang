---
titre: P1. Lentilles minces
accroche: Lentilles convergentes et divergentes · Foyers, distance focale, vergence · Construction des images · L'œil et la correction de ses défauts
ordre: 1
duree: 40
demo: false
objectifs:
  - Lentilles convergentes et divergentes
  - Foyers, distance focale, vergence
  - Construction des images
  - L'œil et la correction de ses défauts
---

:::remarque À quoi ça sert au BFEM ?
Les questions d'optique tombent presque chaque année au BFEM : reconnaître une lentille, placer un foyer, construire une image et calculer avec la relation des distances. C'est un chapitre à points faciles : deux rayons bien tracés et une seule formule suffisent pour gagner tous les points.
:::

## Les lentilles minces

Une **lentille mince** est un élément optique transparent dont les deux faces sont courbes (sphériques) et dont on néglige l'épaisseur.

- L'**axe optique** est la droite passant par les centres des deux surfaces sphériques.
- Le **centre optique O** est le milieu de la lentille, situé sur l'axe optique.
- Le **plan principal** est le plan perpendiculaire à l'axe passant par O : toutes les constructions se font dans ce plan.

:::definition Lentille convergente
Une lentille convergente est **plus épaisse au centre qu'aux bords**. Elle **converge** les rayons parallèles à l'axe : ces rayons se croisent réellement de l'autre côté. Elle forme des images **réelles** avec des objets assez éloignés.

Exemples : loupe, objectif d'un appareil photo, verre du **loup optique** utilisé par les vendeurs, cristallin de l'œil.
:::

:::definition Lentille divergente
Une lentille divergente est **plus mince au centre qu'aux bords**. Elle **diverge** les rayons parallèles à l'axe : après réfraction, ils s'écartent et semblent provenir d'un point unique situé du même côté que l'objet. Elle ne forme que des images **virtuelles**.

Exemples : lunettes du myope, objectif de certains instruments optiques.
:::

:::erreur Attention
Une image réelle est celle où les rayons **passent vraiment** (on peut la recevoir sur un écran). Une image virtuelle est celle d'où les rayons **semblent provenir** : on la voit en regardant à travers la lentille, mais on ne peut pas la recevoir sur un écran.
:::

## Foyers, distance focale et vergence

:::definition Les foyers principaux
- **F** est le foyer image : c'est l'image du point situé à l'infini. Pour une lentille convergente, F est **réel** (c'est là que convergent les rayons parallèles) ; pour une lentille divergente, F est **virtuel**.
- **F'** est le foyer objet : il est placé de l'autre côté de O, à la même distance.
- On a $OF = OF' = f$, où $f$ est la **distance focale** (en mètres).
:::

:::formule Vergence
$$
V = \frac{1}{f}
$$

- $V$ se mesure en **dioptries** (symbole $\mathrm{D}$, soit $\mathrm{m^{-1}}$) ;
- lentille convergente : $f > 0$ donc $V > 0$ ;
- lentille divergente : $f < 0$ donc $V < 0$.
:::

:::exemple Calcul de vergence
- $f = +20\ \mathrm{cm} = +0{,}20\ \mathrm{m}$ → $V = \dfrac{1}{0{,}20} = +5\ \mathrm{D}$ (convergente de 5 dioptries).
- $f = -25\ \mathrm{cm} = -0{,}25\ \mathrm{m}$ → $V = \dfrac{1}{-0{,}25} = -4\ \mathrm{D}$ (divergente de 4 dioptries).
:::

## Construction des images

:::methode Les trois rayons utiles
1. Le rayon **parallèle à l'axe optique** ressort en passant par F (convergente) ou semble venir de F (divergente).
2. Le rayon **passant par F** ressort **parallèle à l'axe**.
3. Le rayon **passant par le centre optique O** continue **sans dévier**.

Le point d'intersection des rayons sortants donne l'image $A'B'$ ; s'il n'y a pas d'intersection réelle, on prolonge les rayons en pointillés : l'image est virtuelle.
:::

:::formule Cas d'une lentille convergente, objet réel
| Position de l'objet | Position de l'image | Nature | Taille |
| --- | --- | --- | --- |
| Au-delà de $2F$ | Entre $F$ et $O$ | réelle, renversée | réduite |
| En $2F$ | En $2F$ (autre côté) | réelle, renversée | même taille |
| Entre $F$ et $2F$ | Au-delà de $2F'$ | réelle, renversée | agrandie |
| En $F$ | À l'infini | — | — |
| Entre $O$ et $F$ | Même côté que l'objet | **virtuelle, droite** | agrandie (loupe) |
:::

:::formule Cas d'une lentille divergente
Quelle que soit la position de l'objet réel, l'image est **virtuelle, droite, réduite** et se trouve entre $O$ et $F'$, du côté de l'objet. Elle n'est jamais renversée ni agrandie.
:::

:::formule Relation des distances
$$
\frac{1}{f} = \frac{1}{OA} + \frac{1}{OA'}
$$

**Convention de signes :**
- $OA > 0$ si l'objet est réel (devant la lentille) ;
- $OA' > 0$ si l'image est **réelle** (de l'autre côté de la lentille) ;
- $OA' < 0$ si l'image est **virtuelle** (même côté que l'objet) ;
- $f > 0$ pour une lentille convergente, $f < 0$ pour une divergente.
:::

:::methode Résoudre un problème d'image
1. Convertir toutes les longueurs en **mètres**.
2. Repérer $f$ avec son **signe** et $OA$.
3. Calculer $\dfrac{1}{OA'} = \dfrac{1}{f} - \dfrac{1}{OA}$, puis $OA'$.
4. Le signe de $OA'$ donne la **nature** ; le rapport $g = \dfrac{|OA'|}{OA}$ donne la **taille** (g < 1 : réduite, g > 1 : agrandie).
:::

:::exemple Calcul complet
Une lentille convergente de distance focale $f = +20\ \mathrm{cm} = +0{,}20\ \mathrm{m}$ reçoit un objet placé à $OA = 30\ \mathrm{cm} = 0{,}30\ \mathrm{m}$.

$$
\frac{1}{OA'} = \frac{1}{0{,}20} - \frac{1}{0{,}30} = 5 - 3{,}33 = 1{,}67\ \mathrm{m^{-1}}
$$

$$
OA' = \frac{1}{1{,}67} = 0{,}60\ \mathrm{m} = 60\ \mathrm{cm}
$$

$OA'$ est positif → image **réelle**, donc renversée. Rapport : $g = \dfrac{60}{30} = 2$ → image **agrandie**. Elle se forme à $60\ \mathrm{cm}$ derrière la lentille, deux fois plus grande que l'objet.
:::

:::piege Les trois pièges classiques
1. Oublier de convertir les centimètres en mètres avant le calcul.
2. Changer le signe de $f$ : une lentille divergente a $f < 0$.
3. Croire qu'une image « derrière la lentille » est forcément agrandie : elle est réduite si l'objet est au-delà de $2F$.
:::

## L'œil et la correction de ses défauts

:::definition L'œil, une lentille convergente variable
L'œil est formé d'un système optique (cornée et cristallin) qui joue le rôle d'une **lentille convergente**. L'image d'un objet se forme sur la **rétine** : elle est toujours **réelle, renversée et réduite**. Le cristallin change de forme pour faire la mise au point : c'est l'**accommodation**.
:::

:::formule Défauts de l'œil et corrections
| Défaut | Position de l'image | Correction |
| --- | --- | --- |
| **Myopie** (voit flou de loin) | en avant de la rétine | lunette à lentille **divergente** |
| **Hypermétropie** (voit flou de près) | en arrière de la rétine | lunette à lentille **convergente** |
| **Presbytie** (fatigue à lire, avec l'âge) | en arrière de la rétine | lunette à lentille **convergente** (lecture) |
| **Astigmatisme** | image déformée | lentille cylindrique |
:::

:::methode Choisir la bonne lentille
1. On pose le diagnostic : la myope voit mal **de loin**, l'hypermétrope voit mal **de près**.
2. Le myope a un œil trop convergent → on **diverge** l'entrée pour repousser l'image sur la rétine.
3. L'hypermétrope a un œil pas assez convergent → on **converge** l'entrée pour attirer l'image sur la rétine.
:::

:::exemple Au quotidien
À Dakar, de nombreux élèves sont myopes : leur lunette porte une lentille **divergente** (verre négatif, ex. $-2{,}50\ \mathrm{D}$). Un lecteur presbyte porte une lentille **convergente** (verre positif, ex. $+2{,}00\ \mathrm{D}$). Les lunettes de soleil ne corrigent aucun défaut : elles réduisent simplement la luminosité qui entre dans l'œil.
:::

## Ce qu'il faut retenir

- Une lentille **convergente** est épaisse au centre, $f > 0$, $V > 0$ ; une **divergente** est mince au centre, $f < 0$, $V < 0$.
- **Vergence** : $V = 1/f$, en dioptries.
- Trois rayons de construction : parallèle → passe par F ; passe par F → sort parallèle ; passe par O → sans dévier.
- Convergente + objet réel au-delà de $2F$ : image réelle, renversée, réduite ; entre $F$ et $O$ : image virtuelle, droite, agrandie (loupe). Divergente : toujours virtuelle, droite, réduite.
- Relation : $\dfrac{1}{f} = \dfrac{1}{OA} + \dfrac{1}{OA'}$, en mètres, avec le signe de $f$ et de $OA'$.
- Myopie → lunette divergente ; hypermétropie et presbytie → lunette convergente.
