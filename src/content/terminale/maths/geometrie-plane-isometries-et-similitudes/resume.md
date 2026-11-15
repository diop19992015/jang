---
titre: "Géométrie plane : isométries et similitudes"
accroche: Points cocycliques · Rappels sur les isométries · Similitudes directes
series: S1, S3
ordre: 28
duree: 45
demo: false
statut: publie
objectifs:
  - Points cocycliques
  - Rappels sur les isométries
  - Similitudes directes
partie: Géométrie
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Points cocycliques
$$
A, B, C, D \text{ cocycliques} \iff \widehat{ACB} = \widehat{ADB} \ (\text{même côté de } (AB))
$$

Angles inscrits soutenant le même arc sont égaux ; angle inscrit dans un demi-cercle $= \dfrac{\pi}{2}$ ; angle au centre $= 2 \times$ angle inscrit.
:::

:::formule Puissance d'un point
$$
p(M) = OM^2 - R^2, \qquad MA \times MB = MC \times MD \ \text{(deux sécantes)}
$$
:::

:::formule Isométries (conservent distances et angles)
Translation, rotation, symétrie axiale, symétrie centrale. Directes (déterminant $+1$) : translations et rotations. Elles conservent longueurs, angles, aires, alignements, parallélisme, milieux.
:::

:::formule Similitude directe de rapport $k > 0$
$$
d\big(f(A), f(B)\big) = k \cdot d(A, B), \qquad \text{angles orientés conservés}
$$

L'homothétie de centre $O$ et rapport $k$ : $\overrightarrow{Oh(A)} = k\, \overrightarrow{OA}$. Elle transforme droites en droites parallèles et triangles en triangles semblables.
:::

:::formule Rapport et aires
Deux figures semblables de rapport $k$ : longueurs $\times k$, **aires** $\times k^2$.
:::

## Méthode express

1. **Prouver des points cocycliques** : calculer deux angles inscrits soutenant la même corde ; s'ils sont égaux (même côté), les quatre points sont cocycliques.
2. **Utiliser la puissance d'un point** : repérer deux sécantes issues de $M$ et écrire $MA \times MB = MC \times MD$ (longueurs).
3. **Reconnaître une isométrie** : distances conservées $\to$ translation, rotation ou symétrie ; regarder si un point est fixe (rotation : centre ; symétrie : axe).
4. **Construire le centre d'une rotation** : intersection des médiatrices de $[AA']$ et $[BB']$.
5. **Prouver deux triangles semblables** : proportionnalité des trois côtés, ou deux côtés proportionnels + angle compris, ou passage par une homothétie.
6. **Passer de la similitude aux mesures** : longueurs $\times k$, aires $\times k^2$ ; vérifier le sens de $k$ (positif : même côté du centre).

:::erreur Les erreurs qui coûtent des points
1. Égaler deux angles inscrits sans vérifier que les points sont du même côté de la corde.
2. Confondre isométrie ($k = 1$, distances conservées) et similitude ($k$ quelconque, distances multipliées).
3. Multiplier les aires par $k$ au lieu de $k^2$.
4. Oublier le signe de $k$ dans une homothétie ($k < 0$ : image de l'autre côté du centre).
5. Utiliser Thalès sans vérifier le parallélisme des droites.
:::

## Vocabulaire

- **Cocycliques** : quatre points appartenant à un même cercle.
- **Cercle circonscrit** : cercle passant par les trois sommets d'un triangle ; centre au concours des médiatrices.
- **Angle inscrit / au centre** : angle soutenu par un arc, au point du cercle / au centre.
- **Puissance d'un point** : $OM^2 - R^2$ ; nulle si le point est sur le cercle.
- **Isométrie** : transformation préservant les distances (translation, rotation, symétries).
- **Isométrie directe** : isométrie de déterminant $+1$ (translation, rotation).
- **Similitude** : transformation multipliant les distances par un facteur $k > 0$ et conservant les angles.
- **Homothétie** : similitude de rapport $k$ qui fixe un centre et transforme chaque droite en une droite parallèle.
- **Rapport de similitude** : facteur $k$ qui multiplie les longueurs.
- **Semblables** : triangles de mêmes angles (ou côtés proportionnels).
