---
titre: Géométrie dans l’espace
accroche: Programme officiel — Activités géométriques.
ordre: 13
duree: 90
demo: false
objectifs:
  - Représenter un solide et lire ses éléments (arêtes, faces, sommets)
  - Calculer le volume d’un prisme, d’un cylindre, d’un cône et d’une pyramide
  - Calculer des aires et des volumes de figures de l’espace
---

:::remarque À quoi ça sert au BFEM ?
Les solides et leurs volumes tombent presque chaque année au BFEM, souvent en fin de sujet : calculer le volume d’un cylindre ou d’une pyramide, comparer des contenants, passer de cm³ à litres. Ces questions sont très rapides si l’on retient les quatre formules de volume et les conversions d’unités.
:::

## Les solides et leurs éléments

:::definition Solide, sommet, arête, face
Un **solide** est un volume de l’espace, limité par des faces.
- un **sommet** : un point où se rencontrent plusieurs faces ;
- une **arête** : un segment où se rencontrent deux faces ;
- une **face** : une surface plane (ou courbe) qui limite le solide.
:::

:::exemple Lire les éléments d’un pavé (parallélépipède rectangle)
Le pavé $ABCD-EFGH$ a :
- **8 sommets** : $A$, $B$, $C$, $D$, $E$, $F$, $G$, $H$ ;
- **12 arêtes** : $[AB]$, $[BC]$, $[CD]$, $[DA]$, $[EF]$, $[FG]$, $[GH]$, $[HE]$, $[AE]$, $[BF]$, $[CG]$, $[DH]$ ;
- **6 faces**, toutes des rectangles : $ABCD$, $EFGH$, $ABFE$, $BCGF$, $CDHG$, $DAEH$.
:::

:::remarque Représenter un solide
Pour dessiner un solide, on trace les arêtes **visibles** en trait plein et les arêtes **cachées** en trait pointillé. Un patron est la figure plane qui, une fois pliée, reconstitue le solide.
:::

:::formule Tableau des solides de base
| Solide | Faces | Sommets | Arêtes |
| --- | --- | --- | --- |
| Pavé (parallélépipède rectangle) | 6 rectangles | 8 | 12 |
| Prisme triangulaire | 2 triangles + 3 rectangles | 6 | 9 |
| Prisme à base $n$ côtés | 2 bases $n$ côtés + $n$ rectangles | $2n$ | $3n$ |
| Cylindre | 2 cercles + 1 surface courbe | 0 | 0 |
| Cône | 1 cercle + 1 surface courbe | 1 (le sommet) | 0 |
| Pyramide à base $n$ côtés | 1 base $n$ côtés + $n$ triangles | $n + 1$ | $2n$ |
:::

## Le prisme

:::definition Prisme et hauteur
Un **prisme** est un solide dont les deux bases sont des polygones **égales et parallèles**, reliés par des faces latérales qui sont des parallelogrammes. On dit le prisme **droit** si ses faces latérales sont des rectangles ; la hauteur $h$ est la distance entre les deux bases.
:::

:::formule Volume d’un prisme
$$
V_{prisme} = \text{aire de la base} \times h
$$
$$
V = S_b \times h
$$
:::

:::exemple Volume d’un prisme triangulaire
Un prisme a pour base un triangle rectangle de côtés $3$ cm et $4$ cm, et pour hauteur $10$ cm.

- Aire de la base :
$$
S_b = \frac{3 \times 4}{2} = 6 \text{ cm}^2
$$
- Volume :
$$
V = 6 \times 10 = 60 \text{ cm}^3
$$
:::

:::methode Calculer le volume d’un prisme
1. Identifier la base (la forme du solide vue de profil : triangle, rectangle, hexagone…).
2. Calculer l’aire de cette base.
3. Repérer la hauteur, perpendiculaire à la base.
4. Multiplier : $V = S_b \times h$.
5. Écrire l’unité en **unités de volume** (cm³, m³…).
:::

## Le cylindre

:::definition Cylindre de révolution
Un **cylindre** est engendré par la rotation d’un rectangle autour d’un de ses côtés. Ses deux bases sont des **cercles** de même rayon $r$, séparés par la hauteur $h$.
:::

:::formule Volumes et aires du cylindre
$$
V_{cylindre} = \pi r^2 h
$$
$$
\text{aire latérale} = 2\pi r h
$$
$$
\text{aire totale} = 2\pi r (r + h)
$$
:::

:::exemple Un couvercle de boîte de conserve
Une conserve a un rayon de base $r = 3$ cm et une hauteur $h = 10$ cm. Avec $\pi \approx 3{,}14$ :
$$
V = \pi \times 3^2 \times 10 = 90\pi \approx 282{,}6 \text{ cm}^3
$$

Soit environ $0{,}28$ litre, car $1000$ cm³ = $1$ L.
:::

:::erreur Attention à l’ordre dans la formule
$V = \pi r^2 h$ : on met le rayon **au carré** puis on multiplie par la hauteur. Calculer $3^2 \times 10$ puis $\times \pi$. Écrire $\pi r^2$ (et non $2\pi r$) : $2\pi r$ est le périmètre du cercle, pas son aire.
:::

## Le cône

:::definition Cône de révolution
Un **cône** est engendré par la rotation d’un triangle rectangle autour d’un de ses côtés. Sa base est un cercle de rayon $r$, son sommet $S$ se projette au centre de la base ; la hauteur $h$ est la distance $[SO]$.
:::

:::formule Volume et aire latérale du cône
$$
V_{cône} = \frac{1}{3} \pi r^2 h
$$
$$
\text{aire latérale} = \pi r \ell
$$
où $\ell$ est la **génératrice**, avec
$$
\ell = \sqrt{h^2 + r^2}
$$
:::

:::exemple Volume d’un cône
Un cône a pour rayon $r = 3$ cm et pour hauteur $h = 4$ cm.
$$
V = \frac{1}{3} \pi \times 3^2 \times 4 = \frac{1}{3} \pi \times 9 \times 4 = 12\pi \approx 37{,}7 \text{ cm}^3
$$

La génératrice vaut $\ell = \sqrt{4^2 + 3^2} = \sqrt{25} = 5$ cm : on retrouve le triplet $3$–$4$–$5$.
:::

:::remarque Comparaison cône et cylindre
Un cône et un cylindre de **même base** et de **même hauteur** ont des volumes dans le rapport $1$ : $3$ :
$$
V_{cône} = \frac{V_{cylindre}}{3}
$$
Il faut donc **trois** pleines cuves coniques pour remplir un tel cylindre.
:::

## La pyramide

:::definition Pyramide
Une **pyramide** est un solide dont la base est un polygone et dont toutes les faces latérales sont des triangles ayant un sommet commun, le **sommet** de la pyramide. La hauteur $h$ est la distance du sommet au plan de la base.
:::

:::formule Volume d’une pyramide
$$
V_{pyramide} = \frac{1}{3} \times \text{aire de la base} \times h
$$
$$
V = \frac{S_b \times h}{3}
$$
:::

:::exemple Volume d’une pyramide à base carrée
Une pyramide a pour base un carré de côté $6$ cm et pour hauteur $9$ cm.
$$
S_b = 6 \times 6 = 36 \text{ cm}^2
$$
$$
V = \frac{36 \times 9}{3} = \frac{324}{3} = 108 \text{ cm}^3
$$
:::

:::erreur Oublier le tiers
La pyramide et le cône ont un volume égal au **tiers** du prisme ou du cylindre de même base et de même hauteur. Oublier le facteur $\dfrac{1}{3}$ est l’erreur la plus fréquente au BFEM : vérifie toujours que ton résultat est plus petit que celui du cylindre correspondant.
:::

## Les volumes : résumé

:::formule Les quatre formules de volume à connaître par cœur
$$
V_{prisme} = S_b \times h
$$
$$
V_{cylindre} = \pi r^2 h
$$
$$
V_{cône} = \frac{1}{3} \pi r^2 h
$$
$$
V_{pyramide} = \frac{S_b \times h}{3}
$$
:::

:::formule Conversions de volumes
$$
1 \text{ m}^3 = 1000 \text{ dm}^3 = 1\,000\,000 \text{ cm}^3
$$
$$
1 \text{ dm}^3 = 1 \text{ L} \qquad 1 \text{ cm}^3 = 1 \text{ mL}
$$
:::

:::methode Passer de cm³ à litres
1. Calculer le volume en cm³ (ou dm³).
2. Diviser par $1000$ pour obtenir les litres.
3. Arrondir à deux chiffres après la virgule si besoin.

Exemple : $942$ cm³ = $0{,}942$ L ≈ $0{,}94$ L.
:::

## Les aires des solides

:::formule Aires des solides de révolution
- **Cylindre** : $\text{aire latérale} = 2\pi r h$, $\text{aire totale} = 2\pi r(r+h)$
- **Cône** : $\text{aire latérale} = \pi r \ell$, $\text{aire totale} = \pi r(\ell + r)$
- **Sphère** de rayon $r$ : $\text{aire} = 4\pi r^2$
:::

:::formule Aires des solides polyédriques
- **Prisme** : $\text{aire totale} = 2 S_b + \text{somme des aires latérales}$
- **Pyramide** : $\text{aire totale} = S_b + \text{somme des aires des faces latérales}$
:::

:::exemple Aire latérale d’un cylindre
Un cylindre de rayon $5$ cm et de hauteur $12$ cm :
$$
\text{aire latérale} = 2\pi \times 5 \times 12 = 120\pi \approx 377 \text{ cm}^2
$$
$$
\text{aire totale} = 2\pi \times 5 \times (5 + 12) = 170\pi \approx 534 \text{ cm}^2
$$
:::

:::remarque Pythagore dans l’espace
Dans un cylindre, un cône ou une pyramide, la hauteur, le rayon (ou la demi-base) et la génératrice forment souvent un triangle rectangle : on utilise Pythagore pour trouver l’élément manquant.
$$
\ell^2 = h^2 + r^2
$$
:::

## Ce qu’il faut retenir

- Un solide se lit à partir de ses **sommets**, de ses **arêtes** et de ses **faces** ; savoir le dessiner avec les arêtes cachées en pointillé.
- Le **prisme** a pour volume $V = S_b \times h$ : aire de la base fois hauteur.
- Le **cylindre** : $V = \pi r^2 h$, aire latérale $2\pi r h$.
- Le **cône** : $V = \dfrac{\pi r^2 h}{3}$, avec $\ell = \sqrt{h^2 + r^2}$.
- La **pyramide** : $V = \dfrac{S_b \times h}{3}$.
- Cône et cylindre (ou pyramide et prisme) de même base et même hauteur : volumes dans le rapport $1:3$.
- Conversions : $1$ m³ = $1000$ L, $1$ dm³ = $1$ L, $1$ cm³ = $1$ mL.
- Toutes les unités de volume se notent en **cube** : cm³, m³… jamais cm.
