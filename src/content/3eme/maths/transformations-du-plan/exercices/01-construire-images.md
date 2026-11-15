---
titre: Construire les images d’un rectangle
difficulte: 1
type: entrainement
indices:
  - Repère d’abord la donnée de chaque transformation : vecteur, axe ou centre.
  - Transforme chaque sommet séparément, puis relie les images dans le même ordre.
  - Vérifie tes constructions en comparant les longueurs de la figure et de son image.
---

## Énoncé

L’unité de longueur est le centimètre. $ABCD$ est un rectangle tel que $AB = 6$ cm et $BC = 4$ cm (les côtés $[AB]$ et $[DC]$ sont horizontaux, les côtés $[AD]$ et $[BC]$ sont verticaux).

1. Construire le rectangle $ABCD$ à l’aide de la règle et du rapporteur.
2. Construire l’image $A_1B_1C_1D_1$ du rectangle par la **translation de vecteur** $\vec{v}$ de $5$ cm, horizontal et dirigé vers la droite.
3. Construire l’image $A_2B_2C_2D_2$ du rectangle par la **symétrie axiale** d’axe $(AB)$.
4. Construire l’image $A_3B_3C_3D_3$ du rectangle par la **rotation** de centre $A$ et d’angle $90°$ dans le sens direct.
5. Pour chaque figure obtenue, donner la longueur $A_iB_i$ et dire si $(A_iB_i)$ est parallèle à $(AB)$.

## Solution

**1. Construction du rectangle $ABCD$.**

On trace un segment horizontal $[AB]$ de $6$ cm. En $A$ et en $B$, on relève des perpendiculaires de $4$ cm (angles droits de $90°$) : on obtient $D$ et $C$. On relie $C$ et $D$. Les quatre angles valent $90°$.

**2. Translation de vecteur $\vec{v}$ de $5$ cm vers la droite.**

La translation est définie par un vecteur : pour chaque sommet, on trace la parallèle à $(AB)$ dirigée vers la droite et on porte $5$ cm.

- $A_1$ : sur l’horizontale passant par $A$, à droite de $A$ et à $AA_1 = 5$ cm ;
- $B_1$ : sur l’horizontale passant par $B$, à $BB_1 = 5$ cm (on trouve $B_1$ à droite de $B$) ;
- $D_1$ et $C_1$ : de même, à $5$ cm à droite de $D$ et $C$.

Le rectangle $A_1B_1C_1D_1$ est donc à droite de $ABCD$. Comme la translation conserve les longueurs,
$$
A_1B_1 = AB = 6 \text{ cm} \qquad B_1C_1 = BC = 4 \text{ cm}
$$

Comme la transformation transforme une droite en droite parallèle,
$$
(A_1B_1) \parallel (AB)
$$

**3. Symétrie axiale d’axe $(AB)$.**

L’axe $(AB)$ contient les sommets $A$ et $B$ : ils sont donc **fixes**, $A_2 = A$ et $B_2 = B$.

- Pour $D$ : on trace la perpendiculaire à $(AB)$ en $A$, on reporte $AD_2 = AD = 4$ cm de l’autre côté de l’axe. $D_2$ est donc sous $A$.
- Pour $C$ : de même, $C_2$ est sous $B$, avec $BC_2 = 4$ cm.

Le rectangle $A_2B_2C_2D_2$ est le reflet de $ABCD$ en dessous de l’axe. Les longueurs sont conservées :
$$
A_2B_2 = AB = 6 \text{ cm}
$$

et $(A_2B_2)$ est confondue avec $(AB)$, donc en particulier parallèle à $(AB)$.

**4. Rotation de centre $A$ et d’angle $90°$ dans le sens direct.**

- $A_3 = A$ (le centre est fixe).
- $B_3$ : $AB = 6$ cm, tourné de $90°$ direct autour de $A$ : $B_3$ est sur la verticale passant par $A$, à $6$ cm **au-dessus** de $A$. Donc $(AB_3) \perp (AB)$.
- $D_3$ : $AD = 4$ cm, tourné de $90°$ : $D_3$ est sur l’horizontale passant par $A$, à $4$ cm à gauche de $A$.
- $C_3$ : image de $C$ par la même rotation, telle que $AC_3 = AC$ et $\widehat{CAC_3} = 90°$. On peut aussi le construire en complétant le rectangle $AB_3C_3D_3$.

Le rectangle image $A_3B_3C_3D_3$ est « couché » : ses côtés ont tourné de $90°$.

**5. Vérifications.**

| Figure | $A_iB_i$ | Parallélisme de $(A_iB_i)$ et $(AB)$ |
| --- | --- | --- |
| Translation | $6$ cm | $(A_1B_1) \parallel (AB)$ |
| Symétrie axiale | $6$ cm | $(A_2B_2)$ confondue avec $(AB)$, donc parallèle |
| Rotation de $90°$ | $6$ cm | $(A_3B_3) \perp (AB)$, donc **non** parallèle |

:::remarque Pourquoi la rotation change le parallélisme
La rotation conserve les longueurs ($A_3B_3 = 6$ cm) mais fait tourner la direction des droites de $90°$ : les droites deviennent perpendiculaires, plus parallèles. Seules la translation et la symétrie centrale envoient une droite sur une droite parallèle ; la symétrie axiale peut la renvoyer sur elle-même.
:::
