---
titre: Sujet type BFEM — Transformations du plan
difficulte: 3
type: bfem
annee: 2023
indices:
  - Entoure les données de chaque transformation : axe, centre, vecteur.
  - Pour la démonstration, nomme la transformation puis cite la propriété de conservation utilisée.
  - Vérifie tes constructions en comparant longueurs et angles à ceux de la figure d’origine.
---

## Énoncé

L’unité de longueur est le centimètre. $ABCD$ est un rectangle tel que $AB = 8$ cm et $AD = 5$ cm. $O$ est le point de rencontre des diagonales.

**Partie A.** (4 points)
1. Construire le rectangle $ABCD$.
2. Construire l’image $A'B'C'D'$ du rectangle $ABCD$ par la **symétrie axiale** d’axe $(BC)$.
3. Donner les longueurs $A'B'$ et $A'D'$ et justifier brièvement.

**Partie B.** (3 points)
4. Soit $M$ le milieu de $[AB]$. Construire l’image $M'$ de $M$ par la **symétrie centrale** de centre $O$.
5. Justifier que $O$ est le milieu du segment $[MM']$ et donner le nom du point $M'$ (milieu de quel segment ?).

**Partie C.** (3 points)
6. Montrer que la translation qui envoie $A$ en $D$ envoie aussi $B$ en $C$.
7. En déduire deux propriétés du rectangle $ABCD$ (parallélisme et égalité de longueurs).

## Solution

**1. Construction du rectangle $ABCD$.**

On trace un segment horizontal $[AB]$ de $8$ cm, on relève en $A$ une verticale de $5$ cm pour trouver $D$, en $B$ une verticale de $5$ cm pour trouver $C$, puis on relie $[DC]$. Les quatre angles sont droits. On trace enfin les diagonales $[AC]$ et $[BD]$ qui se coupent en $O$.

**2. Symétrie axiale d’axe $(BC)$.**

L’axe $(BC)$ contient $B$ et $C$ : ils sont fixes, donc $B' = B$ et $C' = C$.

- $A$ : on trace la perpendiculaire à $(BC)$ en $B$, c’est-à-dire la droite $(AB)$ ; on reporte $BA' = BA = 8$ cm de l’autre côté de l’axe $(BC)$. Le point $A'$ est donc sur le prolongement de $[AB]$ au-delà de $B$.
- $D$ : de même, $D'$ est sur le prolongement de $[CD]$ au-delà de $C$, avec $CD' = CD = 8$ cm.

Le rectangle image $A'B'C'D'$ est le reflet de $ABCD$ à droite de l’axe $(BC)$, de mêmes dimensions.

**3. Longueurs $A'B'$ et $A'D'$.**

La symétrie axiale conserve les longueurs : $A'B' = AB$ et $A'D' = AD$. Donc
$$
A'B' = 8 \text{ cm} \qquad A'D' = 5 \text{ cm}
$$

Justification : toute transformation du plan conserve les distances entre les points, donc la longueur d’un segment est égale à celle de son image.

**4. Construction de $M'$.**

$M$ est le milieu de $[AB]$ : $AM = MB = 4$ cm. Pour la symétrie centrale de centre $O$, on trace la demi-droite $[OM)$ et on reporte $OM' = OM$ du côté opposé à $M$. Autrement dit, $O$ est le milieu de $[MM']$.

**5. Vérification et localisation de $M'$.**

Par définition de la symétrie centrale de centre $O$, l’image $M'$ de $M$ vérifie que $O$ est le milieu de $[MM']$ : c’est la propriété même de la transformation, donc $M$, $O$, $M'$ sont alignés et $OM' = OM$.

Dans le rectangle, les diagonales se coupent en leur milieu, donc $O$ est le milieu de $[AC]$ et de $[BD]$. La translation qui envoie $A$ en $D$ (vecteur $\overrightarrow{AD}$) envoie $B$ en $C$ (cf. question 6) : elle envoie donc le milieu de $[AB]$ en le milieu de $[DC]$. Ainsi $M'$ est le **milieu du segment $[DC]$**.

**6. La translation qui envoie $A$ en $D$ envoie $B$ en $C$.**

Dans le rectangle $ABCD$, les côtés $[AD]$ et $[BC]$ sont parallèles et de même longueur : $\overrightarrow{AD} = \overrightarrow{BC}$.

La translation de vecteur $\vec{v} = \overrightarrow{AD}$ envoie $A$ en $D$. Elle envoie $B$ en le point $B_1$ tel que $\overrightarrow{BB_1} = \overrightarrow{AD}$. Or $\overrightarrow{AD} = \overrightarrow{BC}$, donc $\overrightarrow{BB_1} = \overrightarrow{BC}$, ce qui donne $B_1 = C$.

La translation envoie donc $B$ en $C$.

**7. Deux propriétés déduites.**

La translation transforme la droite $(AB)$ en la droite image passant par les images de $A$ et de $B$, c’est-à-dire la droite $(DC)$. Or une translation transforme toujours une droite en une droite **parallèle** (ou confondue). Donc :
$$
(AB) \parallel (DC)
$$

De plus, la translation conserve les longueurs, donc
$$
AB = DC
$$

On retrouve ainsi deux propriétés fondamentales du rectangle (qui est aussi un parallélogramme) : les côtés opposés sont parallèles et de même longueur.

:::methode Ce que le correcteur attend
- **Partie A (4 pts)** : tracé exact du rectangle (2 pts), construction correcte de la symétrie avec l’axe $(BC)$ (1 pt), longueurs $8$ cm et $5$ cm avec justification par la conservation (1 pt).
- **Partie B (3 pts)** : $O$ milieu de $[MM']$ par définition de la symétrie centrale (2 pts), $M'$ milieu de $[DC]$ (1 pt).
- **Partie C (3 pts)** : égalité des vecteurs $\overrightarrow{AD} = \overrightarrow{BC}$ (1 pt), envoi de $B$ en $C$ (1 pt), conclusion $(AB) \parallel (DC)$ et $AB = DC$ (1 pt).
:::

:::erreur Pièges classiques de ce sujet
1. Construire la symétrie axiale en gardant $A$ du même côté de $(BC)$ : l’axe doit être la **médiatrice** de $[AA']$.
2. Oublier de citer la propriété de conservation dans la rédaction : « la symétrie axiale conserve les longueurs » vaut un point à lui seul.
3. Dans la partie C, affirmer le parallélisme sans passer par la translation : la question exige d’utiliser la transformation.
:::
