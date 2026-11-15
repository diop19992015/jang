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

:::remarque À quoi ça sert au BAC ?
Les isométries et les similitudes sont le langage des transformations du plan : symétries axiales, rotations, translations, homothéties. Elles servent à démontrer des égalités de longueurs et d'angles, à construire des triangles semblables, à utiliser la **puissance d'un point** et les angles dans un cercle (points cocycliques), et à simplifier des preuves de géométrie où l'on compare deux figures.
:::

## Points cocycliques

:::definition Points cocycliques
Quatre points $A$, $B$, $C$, $D$ sont **cocycliques** (ou concycliques) s'ils appartiennent tous à un même cercle.

Un triangle admet toujours un **cercle circonscrit** : son centre est le point de concours des médiatrices de ses côtés.
:::

:::formule Condition d'alignement inscrit dans un cercle
Si $A$, $B$, $C$, $D$ sont quatre points distincts, deux à deux différents, alors :

$$
A,\, B,\, C,\, D \text{ cocycliques} \iff \widehat{ACB} = \widehat{ADB} \pmod{\pi}
$$

(cas où $C$ et $D$ sont du **même côté** de la droite $AB$ ; si $C$ et $D$ sont de côtés opposés, la somme des angles vaut $\pi$).

En d'autres termes : **deux points vus sous le même angle depuis deux points d'une même arête sont cocycliques**.
:::

:::formule Puissance d'un point
Soit un cercle $\mathcal{C}$ de centre $O$ et de rayon $R$, et $M$ un point du plan :

- $M$ extérieur : la puissance de $M$ par rapport à $\mathcal{C}$ est $p(M) = OM^2 - R^2$ ; pour une sécante $MAB$, $MA \times MB = p(M)$ ;
- $M$ sur le cercle : $p(M) = 0$ ;
- $M$ intérieur : $p(M) = OM^2 - R^2 < 0$ et $MA \times MB = -p(M)$ pour la corde $AB$ passant par $M$.

Conséquence : si deux sécantes $MAB$ et $MCD$ coupent le cercle, alors $MA \times MB = MC \times MD$.
:::

:::formule Angles dans un cercle
- Angle inscrit : $\widehat{ACB} = \dfrac{1}{2}\, \widehat{AOB}$ ($O$ centre, $A$, $B$ extrémités de l'arc vu par $C$).
- Angle inscrit dans un demi-cercle : tout angle inscrit dans un cercle dont un diamètre est une corde vaut $\dfrac{\pi}{2}$.
- Angles inscrits soutenant le même arc sont égaux.
:::

:::methode Montrer que quatre points sont cocycliques
1. Calculer (ou identifier) un angle inscrit $\widehat{ACB}$.
2. Calculer l'angle $\widehat{ADB}$ correspondant, soutenu par la même corde $[AB]$.
3. S'ils sont égaux (ou complémentaires à $\pi$ selon la position des points), conclure : $A$, $B$, $C$, $D$ sont cocycliques.

Autre méthode : montrer que le point de concours des médiatrices de $ABC$ est à égale distance de $D$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de vérifier que $C$ et $D$ sont bien du même côté de $(AB)$ avant d'égaler les angles.
2. Confondre angle au centre et angle inscrit en oubliant le facteur $\dfrac{1}{2}$.
3. Écrire $MA \times MB = MC \times MD$ sans préciser que c'est les **longueurs** des segments (et pas les vecteurs).
:::

## Rappels sur les isométries

:::definition Isométrie
Une **isométrie** du plan est une transformation qui préserve les distances :

$$
\forall A, B: \quad d\big(f(A), f(B)\big) = d(A, B).
$$

Les quatre isométries du plan sont : la **translation**, la **rotation**, la **symétrie axiale** et la **symétrie centrale**. Toute isométrie du plan est une composition d'au plus trois réflexions.
:::

:::formule Tableau des isométries
| Isométrie | Déterminant | Composition |
| --- | --- | --- |
| Translation de vecteur $\vec{v}$ | $1$ | 2 réflexions (axes parallèles) |
| Rotation de centre $O$ et d'angle $\alpha$ | $1$ | 2 réflexions (axes sécents en $O$) |
| Symétrie axiale | $-1$ | 1 réflexion |
| Symétrie centrale (rotation d'angle $\pi$) | $1$ | 2 réflexions (axes perpendiculaires) |

Les isométries de déterminant $+1$ sont les **isométries directes** : translations et rotations.
:::

:::formule Propriétés conservées par toute isométrie
- Les **distances** et les **longueurs** ;
- Les **angles** (et les angles orientés) ;
- L'**alignement**, le **parallélisme**, les **milieux** ;
- L'aire (et son signe) et la **colinéarité**.
:::

:::remarque Repérer une rotation
Si $f$ est la rotation de centre $O$ et d'angle $\alpha$, alors $O$ est fixe et pour tout point $A$ :

$$
OA = O f(A), \qquad \widehat{A O f(A)} = \alpha.
$$

Pour construire le centre d'une rotation qui transforme $A$ en $A'$ et $B$ en $B'$ : le centre est à l'intersection des médiatrices de $[AA']$ et de $[BB']$ (les deux médiatrices se coupent en un point : centre de la rotation).
:::

:::exemple Retrouver une figure par isométrie
Soit $ABC$ un triangle isocèle en $A$ avec $AB = AC = 5$ et $BC = 6$. La symétrie axiale d'axe $(BC)$ échange $B$ et $C$ et laisse $A$ fixe : elle transforme le triangle en lui-même. En revanche, la symétrie d'axe $(AB)$ transforme $C$ en un point $C'$ tel que $AC' = AC = 5$ et $BC' = BC = 6$ : le triangle $ABC'$ est le symétrique de $ABC$.
:::

:::piege Attention au sens de composition
$f \circ g$ signifie **appliquer $g$ puis $f$**. Les compositions d'isométries ne sont pas commutatives en général : une translation suivie d'une rotation n'est pas la même chose que la rotation suivie de la translation.
:::

## Similitudes directes

:::definition Similitude directe
Une **similitude directe** du plan est une transformation qui multiplie toutes les distances par un même facteur $k > 0$ (le **rapport** de la similitude) et préserve les angles orientés :

$$
\forall A, B: \quad d\big(f(A), f(B)\big) = k \cdot d(A, B).
$$

Une similitude directe est soit une **homothétie**, soit la composition d'une homothétie et d'une rotation.
:::

:::formule Homothétie
L'homothétie de centre $O$ et de rapport $k \neq 0$ est l'application définie par :

$$
\overrightarrow{O h(A)} = k \, \overrightarrow{OA}.
$$

- $k > 0$ : $A$ et $h(A)$ sont du même côté de $O$ ;
- $k < 0$ : $A$ et $h(A)$ sont de côtés opposés ;
- $|k| > 1$ : agrandissement ; $|k| < 1$ : réduction ;
- $k = 1$ : identité ; $k = -1$ : symétrie centrale.
:::

:::formule Propriétés de l'homothétie
- L'homothétie est une **similitude directe** de rapport $k$ (elle multiplie les longueurs par $|k|$ et conserve les angles).
- Elle transforme une droite en une **droite parallèle**.
- Elle transforme un triangle en un **triangle semblable**.
- Si $G$ est le barycentre de $(A, m)$ et $(B, n)$, alors $h(G)$ est le barycentre de $(h(A), m)$ et $(h(B), n)$ : **conservation des barycentres**.
- Elle transforme un cercle en un cercle, le multipliant son rayon par $|k|$.
:::

:::formule Similitude directe au centre $O$ et rapport $k$
Toute similitude directe peut s'écrire, dans un repère, sous la forme :

$$
f(M) = O + k \cdot R(\alpha) \cdot \overrightarrow{OM},
$$

où $R(\alpha)$ est la rotation d'angle $\alpha$. En particulier :

$$
f(M) = \frac{\sum m_i f(A_i)}{\sum m_i} \qquad \text{si } f \text{ est affine (cas particulier des similitudes)}.
$$
:::

:::methode Démontrer que deux triangles sont semblables
1. Montrer que les trois côtés de l'un sont proportionnels à ceux de l'autre (réciproque du théorème de Thalès, ou rapport de deux côtés + angle compris).
2. Ou montrer que l'un est l'image de l'autre par une similitude (homothétie + rotation).
3. En déduire l'égalité des angles et la proportionnalité des hauteurs, médianes, bissectrices.

Attention : deux triangles de mêmes côtés ne sont pas toujours semblables (il faut le rapport) ; deux triangles de mêmes angles le sont toujours.
:::

:::exemple Homothétie et triangle
Soit $h$ l'homothétie de centre $O$ et de rapport $2$. Si $ABC$ est un triangle de côtés $3$, $4$, $5$, alors $h(A)h(B)h(C)$ est un triangle de côtés $6$, $8$, $10$ : les longueurs sont multipliées par $|k| = 2$, les angles sont conservés.

Si $G$ est le centre de gravité de $ABC$, alors $h(G)$ est le centre de gravité de $h(A)h(B)h(C)$.
:::

:::erreur Les erreurs qui coûtent des points
1. Confondre similitude et isométrie : une similitude de rapport $k \neq 1$ **ne** conserve **pas** les longueurs (elle les multiplie par $k$).
2. Oublier que l'homothétie de rapport $k$ multiplie les longueurs par $|k|$ (le signe de $k$ donne le côté, pas la longueur).
3. Écrire que deux triangles sont semblables parce qu'ils ont deux angles égaux sans préciser que le troisième l'est aussi (somme des angles).
4. Utiliser une homothétie de rapport $0$ (interdite) ou de centre mal choisi.
:::

:::remarque Rapport de similitude et aires
Si deux figures sont semblables de rapport $k$, alors :

- les longueurs sont multipliées par $k$ ;
- les **aires** sont multipliées par $k^2$ ;
- les volumes (en 3D) seraient multipliés par $k^3$.
:::

## Ce qu'il faut retenir

- **Points cocycliques** : $A$, $B$, $C$, $D$ cocycliques $\iff$ angles inscrits soutenant la même corde égaux (à $\pi$ près selon les côtés).
- **Puissance d'un point** : $MA \times MB = MC \times MD$ pour deux sécantes issues de $M$.
- **Isométries** : translations, rotations, symétries — elles conservent distances, angles, aires et alignements ; celles de déterminant $+1$ (translations, rotations) sont directes.
- **Similitude directe** : multiplie les distances par $k > 0$ et conserve les angles orientés ; l'**homothétie** en est le cas le plus courant.
- **Homothétie** : $\overrightarrow{Oh(A)} = k \overrightarrow{OA}$ ; elle envoie une droite sur une droite parallèle et un triangle sur un triangle semblable.
- Deux figures semblables de rapport $k$ : longueurs $\times k$, aires $\times k^2$.
- Les applications affines (translations, homothéties, symétries…) conservent les **barycentres**.
