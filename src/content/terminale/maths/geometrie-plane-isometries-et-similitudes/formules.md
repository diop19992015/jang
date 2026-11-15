## Points cocycliques

:::formule Condition d'angles
$$
A, B, C, D \text{ cocycliques} \iff \widehat{ACB} = \widehat{ADB} \pmod{\pi}
$$

(même côté de $(AB)$ : égalité ; côtés opposés : somme $= \pi$).
:::

:::formule Angles dans un cercle
$$
\text{angle au centre} = 2 \times \text{angle inscrit}, \qquad
\text{angle inscrit dans un demi-cercle} = \frac{\pi}{2}
$$

Angles inscrits soutenant le même arc sont égaux.
:::

:::formule Puissance d'un point
$$
p(M) = OM^2 - R^2
$$

$$
\text{deux sécantes } MAB \text{ et } MCD: \quad MA \times MB = MC \times MD
$$

$p(M) > 0$ : point extérieur ; $p(M) = 0$ : sur le cercle ; $p(M) < 0$ : intérieur.
:::

:::remarque Méthode cocycliques
Calculer un angle $\widehat{ACB}$, calculer $\widehat{ADB}$ soutenu par la même corde $[AB]$ : égaux (même côté) $\Rightarrow$ cocycliques. Alternative : montrer que le centre du cercle circonscrit de $ABC$ est à égale distance de $D$.
:::

## Isométries

:::formule Définition
$$
d\big(f(A), f(B)\big) = d(A, B) \quad \forall A, B
$$

Les quatre isométries : **translation**, **rotation**, **symétrie axiale**, **symétrie centrale**.
:::

:::formule Tableau
| Isométrie | Déterminant | Cas particulier |
| --- | --- | --- |
| Translation de vecteur $\vec{v}$ | $+1$ (directe) | — |
| Rotation de centre $O$, angle $\alpha$ | $+1$ (directe) | $\alpha = \pi$ : symétrie centrale |
| Symétrie axiale | $-1$ | axe = médiatrice de $[AA']$ |
| Symétrie centrale de centre $O$ | $+1$ | rotation d'angle $\pi$ |

Conservent : distances, angles, aires, alignements, parallélismes, milieux.
:::

:::remarque Construire une rotation
Le centre $O$ de la rotation envoyant $A$ en $A'$ et $B$ en $B'$ est l'intersection des **médiatrices** de $[AA']$ et $[BB']$. Angle : $\widehat{AOA'}$.
:::

:::formule Composition
Toute isométrie du plan est une composition d'**au plus trois réflexions** (symétries axiales) :

- 1 réflexion : symétrie axiale ;
- 2 réflexions : translation ou rotation (directes) ;
- 3 réflexions : symétrie glide (composée de réflexion et translation).
:::

## Similitudes directes

:::formule Définition
$$
d\big(f(A), f(B)\big) = k \cdot d(A, B), \qquad k > 0, \quad \text{angles orientés conservés}
$$
:::

:::formule Homothétie
$$
\overrightarrow{Oh(A)} = k\, \overrightarrow{OA}
$$

- $k > 0$ : même côté de $O$ ; $k < 0$ : côté opposé.
- $|k| > 1$ : agrandissement ; $|k| < 1$ : réduction.
- $k = 1$ : identité ; $k = -1$ : symétrie centrale.
:::

:::formule Propriétés de l'homothétie
- Multiplie toutes les longueurs par $|k|$ et conserve les angles.
- Droite $\to$ droite **parallèle** ; cercle $\to$ cercle (rayon $\times |k|$).
- Triangle $\to$ triangle **semblable**.
- **Conserve les barycentres** : $h\big((A, m; B, n)\big) = \big(h(A), m; h(B), n\big)$.
:::

:::formule Forme générale (repère)
$$
f(M) = O + k \cdot R(\alpha)\big(\overrightarrow{OM}\big)
$$

Toute similitude directe = homothétie de rapport $k$ composée avec une rotation de centre $O$.
:::

:::formule Longueurs, aires
$$
\text{longueurs} \times k, \qquad \text{aires} \times k^2
$$

Deux triangles semblables : côtés proportionnels de rapport $k$, angles égaux, aires dans le rapport $k^2$.
:::

:::remarque Sommet / rapport
Si $h$ a pour centre $O$ et rapport $k$, et $A \neq O$ : $OA' = |k| \cdot OA$ avec $A' = h(A)$. Pour $k < 0$, $O$ est entre $A$ et $A'$.
:::
