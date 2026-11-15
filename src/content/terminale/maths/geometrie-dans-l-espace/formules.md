## Produit vectoriel

:::formule Définition
$\vec{u} \wedge \vec{v}$ est le unique vecteur orthogonal à $\vec{u}$ et $\vec{v}$ tel que

$$
\|\vec{u} \wedge \vec{v}\| = \|\vec{u}\| \, \|\vec{v}\| \, |\sin \theta|
$$

et $(\vec{u}, \vec{v}, \vec{u} \wedge \vec{v})$ est un triplet direct.
:::

:::formule Calcul dans un repère
$$
\vec{u} \wedge \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
x & y & z \\
x' & y' & z'
\end{vmatrix}
= (yz' - zy')\vec{i} - (xz' - zx')\vec{j} + (xy' - yx')\vec{k}
$$
:::

:::formule Propriétés
$$
\vec{v} \wedge \vec{u} = -\vec{u} \wedge \vec{v}, \qquad
\vec{u} \wedge \vec{u} = \vec{0}, \qquad
\vec{u} \wedge \vec{v} = \vec{0} \iff \vec{u} \parallel \vec{v}
$$

Distributivité : $\vec{u} \wedge (\vec{v} + \vec{w}) = \vec{u} \wedge \vec{v} + \vec{u} \wedge \vec{w}$ ; $(\lambda\vec{u}) \wedge \vec{v} = \lambda(\vec{u} \wedge \vec{v})$.
:::

:::formule Interprétations géométriques
$$
\text{aire parallélogramme} = \|\vec{u} \wedge \vec{v}\|, \qquad
\text{aire triangle} = \frac{1}{2}\|\vec{u} \wedge \vec{v}\|
$$

$$
\sin \theta = \frac{\|\vec{u} \wedge \vec{v}\|}{\|\vec{u}\|\|\vec{v}\|}, \qquad
\cos \theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\|\vec{v}\|}
$$
:::

:::formule Triple produit vectoriel
$$
\vec{u} \wedge (\vec{v} \wedge \vec{w}) = (\vec{u} \cdot \vec{w})\vec{v} - (\vec{u} \cdot \vec{v})\vec{w}
$$

Le produit vectoriel n'est **pas** associatif.
:::

:::remarque Normal à un plan
Si $\vec{u}$ et $\vec{v}$ sont deux vecteurs directeurs d'un plan $\Pi$, alors $\vec{n} = \vec{u} \wedge \vec{v}$ est un vecteur **normal** à $\Pi$ (tout multiple non nul convient).
:::

## Produit mixte

:::formule Définition et calcul
$$
[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w} =
\begin{vmatrix}
x & y & z \\
x' & y' & z' \\
x'' & y'' & z''
\end{vmatrix}
$$
:::

:::formule Signification
$$
|[\vec{u}, \vec{v}, \vec{w}]| = \text{volume du parallélépipède}, \qquad
V_{\text{tétraèdre}} = \frac{1}{6} \, |[\vec{AB}, \vec{AC}, \vec{AD}]|
$$

$$
[\vec{u}, \vec{v}, \vec{w}] = 0 \iff \vec{u}, \vec{v}, \vec{w} \text{ coplanaires}
$$
:::

:::formule Propriétés
- Circulaire : $[\vec{u}, \vec{v}, \vec{w}] = [\vec{v}, \vec{w}, \vec{u}] = [\vec{w}, \vec{u}, \vec{v}]$.
- Échange de deux vecteurs : $[\vec{v}, \vec{u}, \vec{w}] = -[\vec{u}, \vec{v}, \vec{w}]$.
- $[\vec{u}, \vec{u}, \vec{w}] = 0$ ; $[\lambda\vec{u}, \vec{v}, \vec{w}] = \lambda[\vec{u}, \vec{v}, \vec{w}]$.
:::

:::remarque Coplanarité de quatre points
$A$, $B$, $C$, $D$ coplanaires $\iff [\vec{AB}, \vec{AC}, \vec{AD}] = 0$. Vérifier aussi les cas dégénés (trois points alignés).
:::

## Plans de l'espace

:::formule Équation cartésienne
Plan passant par $M_0(x_0; y_0; z_0)$ avec normale $\vec{n} = (a; b; c)$ :

$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0
\quad \Longleftrightarrow \quad
ax + by + cz = d
$$

avec $d = ax_0 + by_0 + cz_0$.
:::

:::formule Positions relatives (normales $\vec{n}_1$, $\vec{n}_2$)
- Plans **parallèles** $\iff \vec{n}_1 \parallel \vec{n}_2$ ;
- Plans **perpendiculaires** $\iff \vec{n}_1 \cdot \vec{n}_2 = 0$ ;
- Droite **perpendiculaire** à un plan $\iff$ vecteur directeur $\parallel$ normale ;
- Droite **parallèle** à un plan $\iff$ vecteur directeur $\perp$ normale.
:::

:::formule Distance d'un point $M_1(x_1; y_1; z_1)$ au plan $ax + by + cz = d$
$$
\delta = \frac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}}
$$
:::

## Transformations de l'espace

:::formule Définitions
- **Translation** de vecteur $\vec{v}$ : $\vec{OM'} = \vec{OM} + \vec{v}$.
- **Symétrie orthogonale** d'un plan $\Pi$ : $\Pi$ est la médiatrice de $[MM']$.
- **Symétrie centrale** de centre $O$ : $\vec{OM'} = -\vec{OM}$.
- **Rotation** d'axe $(\Delta)$ et d'angle $\alpha$ (sens de la main droite le long de l'axe).
- **Homothétie** de centre $O$ et rapport $k$ : $\vec{OM'} = k\,\vec{OM}$.
:::

:::formule Compositions remarquables
$$
\text{2 symétries de plans parallèles} = \text{translation}
$$

$$
\text{2 symétries de plans sécents} = \text{rotation d'axe l'intersection}
$$

Toute isométrie de l'espace = composition d'au plus **3** symétries orthogonales.
:::

:::remarque Orientation
Translations et rotations : isométries **directes** (orientation conservée). Symétries orthogonales : **indirectes** (orientation changée). Une composition de deux symétries est toujours directe.
:::
