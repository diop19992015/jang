---
titre: Géométrie dans l’espace
accroche: Produit vectoriel, produit mixte · Transformations élémentaires de l’espace
series: S1, S3
ordre: 29
duree: 45
demo: false
statut: publie
objectifs:
  - Produit vectoriel, produit mixte
  - Transformations élémentaires de l’espace
partie: Géométrie
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Le produit vectoriel est l'outil qui calcule des **aires de parallélogrammes**, construit des **vecteurs normaux** à un plan (équation de plan, distance d'un point), et prouve des **perpendicularités** en espace. Le produit mixte calcule des **volumes** et teste la coplanarité. Les transformations élémentaires (translations, rotations, symétries) complètent la boîte à outils pour manipuler les figures de l'espace.
:::

## Produit vectoriel

:::definition Produit vectoriel
Soient $\vec{u}$ et $\vec{v}$ deux vecteurs de $\mathbb{R}^3$. Leur **produit vectoriel** $\vec{u} \wedge \vec{v}$ (noté aussi $\vec{u} \times \vec{v}$) est le unique vecteur tel que :

- $\vec{u} \wedge \vec{v}$ est **orthogonal** à $\vec{u}$ et à $\vec{v}$ ;
- $\|\vec{u} \wedge \vec{v}\| = \|\vec{u}\| \, \|\vec{v}\| \, |\sin \theta|$ (aire du parallélogramme) ;
- $(\vec{u}, \vec{v}, \vec{u} \wedge \vec{v})$ est un **triplet direct** (règle de la main droite).
:::

:::formule Calcul dans un repère
Si $\vec{u} = (x\,;\,y\,;\,z)$ et $\vec{v} = (x'\,;\,y'\,;\,z')$ :

$$
\vec{u} \wedge \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
x & y & z \\
x' & y' & z'
\end{vmatrix}
= (y z' - z y')\,\vec{i} - (x z' - z x')\,\vec{j} + (x y' - y x')\,\vec{k}.
$$
:::

:::formule Propriétés essentielles
- $\vec{u} \wedge \vec{v} = - \vec{v} \wedge \vec{u}$ (**anti-commutativité**) ;
- $(\lambda \vec{u}) \wedge \vec{v} = \lambda (\vec{u} \wedge \vec{v})$ ;
- $\vec{u} \wedge (\vec{v} + \vec{w}) = \vec{u} \wedge \vec{v} + \vec{u} \wedge \vec{w}$ (**distributivité**) ;
- $\vec{u} \wedge \vec{u} = \vec{0}$ ;
- $\vec{u} \wedge \vec{v} = \vec{0} \iff \vec{u}$ et $\vec{v}$ sont **colinéaires** ;
- $\|\vec{u} \wedge \vec{v}\|^2 = \|\vec{u}\|^2 \|\vec{v}\|^2 - (\vec{u} \cdot \vec{v})^2$ (relation de Lagrange).
:::

:::exemple Calcul direct
$\vec{u} = (1\,;\,2\,;\,0)$ et $\vec{v} = (0\,;\,1\,;\,3)$ :

$$
\vec{u} \wedge \vec{v} = (2 \times 3 - 0 \times 1)\,\vec{i} - (1 \times 3 - 0 \times 0)\,\vec{j} + (1 \times 1 - 2 \times 0)\,\vec{k} = (6\,;\,-3\,;\,1).
$$

Vérification : $(6\,;\,-3\,;\,1) \cdot (1\,;\,2\,;\,0) = 6 - 6 + 0 = 0$ ✓ et $(6\,;\,-3\,;\,1) \cdot (0\,;\,1\,;\,3) = -3 + 3 = 0$ ✓.
:::

:::methode Construire un vecteur normal à un plan
1. Trouver deux vecteurs directeurs $\vec{u}$ et $\vec{v}$ du plan.
2. Calculer $\vec{n} = \vec{u} \wedge \vec{v}$ : il est orthogonal aux deux, donc normal au plan.
3. Équation du plan passant par $M_0$ de vecteur normal $\vec{n} = (a\,;\,b\,;\,c)$ :

$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0.
$$
:::

:::erreur Les erreurs qui coûtent des points
1. Inverser l'ordre des vecteurs et oublier le signe : $\vec{v} \wedge \vec{u} = - \vec{u} \wedge \vec{v}$.
2. Prendre le produit scalaire au lieu du produit vectoriel (le produit scalaire donne un réel, pas un vecteur normal).
3. Oublier la règle de la main droite pour le signe du déterminant.
4. Confondre aire du parallélogramme ($\|\vec{u} \wedge \vec{v}\|$) et aire du triangle (la moitié).
:::

## Propriétés géométriques du produit vectoriel

:::formule Aires
$$
\text{aire du parallélogramme} = \|\vec{u} \wedge \vec{v}\|, \qquad
\text{aire du triangle} = \frac{1}{2} \|\vec{u} \wedge \vec{v}\|.
$$
:::

:::formule Triple produit vectoriel
$$
\vec{u} \wedge (\vec{v} \wedge \vec{w}) = (\vec{u} \cdot \vec{w})\,\vec{v} - (\vec{u} \cdot \vec{v})\,\vec{w}
$$

Mémo : « le produit vectoriel n'est **pas** associatif » ; développer avec la formule ci-dessus.
:::

:::formule Angle entre deux droites ou deux vecteurs
$$
\cos \theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \, \|\vec{v}\|}, \qquad
\sin \theta = \frac{\|\vec{u} \wedge \vec{v}\|}{\|\vec{u}\| \, \|\vec{v}\|}.
$$
:::

:::remarque Perpendicularité en espace
$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$. Deux plans sont perpendiculaires si leurs vecteurs normaux le sont ; une droite de vecteur $\vec{d}$ est perpendiculaire à un plan de normale $\vec{n}$ si $\vec{d}$ et $\vec{n}$ sont colinéaires.
:::

## Produit mixte

:::definition Produit mixte
Le **produit mixte** de trois vecteurs $\vec{u}$, $\vec{v}$, $\vec{w}$ est le scalaire :

$$
[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w} =
\begin{vmatrix}
x & y & z \\
x' & y' & z' \\
x'' & y'' & z''
\end{vmatrix}.
$$
:::

:::formule Signification géométrique
$$
|[\vec{u}, \vec{v}, \vec{w}]| = \text{volume du parallélépipède défini par } \vec{u}, \vec{v}, \vec{w}
$$

- Volume du tétraèdre : $\dfrac{1}{6} \, |[\vec{AB}, \vec{AC}, \vec{AD}]|$.
- $[\vec{u}, \vec{v}, \vec{w}] = 0 \iff$ les trois vecteurs sont **coplanaires** (colinéaires ou non, le parallélépipède est écrasé).
:::

:::formule Propriétés
- Permutation circulaire : $[\vec{u}, \vec{v}, \vec{w}] = [\vec{v}, \vec{w}, \vec{u}] = [\vec{w}, \vec{u}, \vec{v}]$ ;
- Deux permutations changeant le signe : $[\vec{v}, \vec{u}, \vec{w}] = -[\vec{u}, \vec{v}, \vec{w}]$ ;
- $[\vec{u}, \vec{u}, \vec{w}] = 0$.
:::

:::methode Tester la coplanarité de quatre points $A$, $B$, $C$, $D$
1. Construire trois vecteurs de même origine : $\vec{AB}$, $\vec{AC}$, $\vec{AD}$.
2. Calculer le produit mixte $[\vec{AB}, \vec{AC}, \vec{AD}]$.
3. S'il vaut $0$, les vecteurs sont coplanaires, donc $A$, $B$, $C$, $D$ sont coplanaires (alignements inclus).
:::

:::exemple Volume de tétraèdre
$A(0\,;\,0\,;\,0)$, $B(1\,;\,0\,;\,0)$, $C(0\,;\,2\,;\,0)$, $D(0\,;\,0\,;\,3)$ :

$$
[\vec{AB}, \vec{AC}, \vec{AD}] =
\begin{vmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3
\end{vmatrix}
= 6.
$$

Volume du tétraèdre $= \dfrac{6}{6} = 1$ (c'est un tiers du volume du pavé $1 \times 2 \times 3$). ✓
:::

:::erreur Le produit mixte n'est pas une aire
Le produit mixte est un **réel** (un volume signé). C'est le produit vectoriel qui est un vecteur. Confondre $(\vec{u} \wedge \vec{v}) \cdot \vec{w}$ et $\vec{u} \wedge (\vec{v} \cdot \vec{w})$ (qui n'a aucun sens) est une faute à proscrire.
:::

## Transformations élémentaires de l'espace

:::formule Tableau des transformations
| Transformation | Définition | Propriétés |
| --- | --- | --- |
| Translation de vecteur $\vec{v}$ | $\vec{OM'} = \vec{OM} + \vec{v}$ | isométrie directe, conserve orientations et parallélisme |
| Symétrie orthogonale d'un plan $\Pi$ | $M'$ tel que $\Pi$ est médiatrice de $[MM']$ | isométrie indirecte, conserve distances et angles |
| Symétrie centrale de centre $O$ | $\vec{OM'} = -\vec{OM}$ | rotation d'angle $\pi$ |
| Rotation d'axe $(\Delta)$ et d'angle $\alpha$ | rotation du plan perpendiculaire à $(\Delta)$ | isométrie directe |
| Homothétie de centre $O$ et rapport $k$ | $\vec{OM'} = k \vec{OM}$ | similitude, multiplie les longueurs par $|k|$ |
:::

:::formule Composition
- Deux symétries orthogonales de plans **parallèles** = translation ;
- Deux symétries orthogonales de plans **sécants** = rotation d'axe l'intersection ;
- Toute isométrie de l'espace est une composition de trois symétries orthogonales au plus.
:::

:::remarque Repères et transformations
Dans un repère, la translation s'écrit $\vec{OM'} = \vec{OM} + \vec{v}$ ; l'homothétie $\vec{OM'} = k\vec{OM}$. Une rotation se décrit par son axe et son angle, la règle de la main droite donnant le sens positif.
:::

:::piege Attention au sens de la rotation
L'angle d'une rotation se lit autour de l'axe, **doigts de la main droite** dans le sens de l'axe : c'est le sens positif. Changer de sens change le signe de l'angle.
:::

## Ce qu'il faut retenir

- **Produit vectoriel** $\vec{u} \wedge \vec{v}$ : orthogonal aux deux vecteurs, norme $= \|\vec{u}\|\|\vec{v}\||\sin\theta|$ (aire du parallélogramme), anti-commutatif ; $\vec{u} \wedge \vec{v} = \vec{0} \iff$ colinéaires.
- **Calcul** : déterminant $3 \times 3$ avec $\vec{i}, \vec{j}, \vec{k}$ en première ligne.
- **Normal à un plan** : $\vec{n} = \vec{u} \wedge \vec{v}$ avec $\vec{u}, \vec{v}$ directeurs ; équation $a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$.
- **Produit mixte** $[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w}$ : valeur absolue = volume du parallélépipède ; nul $\iff$ vecteurs coplanaires ; tétraèdre $= \frac{1}{6}$ du pavé.
- **Transformations** : translations et rotations conservent l'orientation ; symétries orthogonales la changent ; deux symétries = translation ou rotation.
