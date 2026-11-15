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

## L'essentiel du chapitre

:::formule Produit vectoriel
$$
\vec{u} \wedge \vec{v} \perp \vec{u}, \vec{v}, \qquad \|\vec{u} \wedge \vec{v}\| = \|\vec{u}\|\,\|\vec{v}\|\,|\sin\theta|
$$

Anti-commutatif : $\vec{v} \wedge \vec{u} = -\vec{u} \wedge \vec{v}$ ; $\vec{u} \wedge \vec{u} = \vec{0}$ ; nul $\iff$ vecteurs colinéaires.

Calcul : $\vec{u} \wedge \vec{v} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x & y & z \\ x' & y' & z' \end{vmatrix}$.
:::

:::formule Interprétations
- $\|\vec{u} \wedge \vec{v}\|$ = aire du **parallélogramme** ; $\dfrac{1}{2}\|\vec{u} \wedge \vec{v}\|$ = aire du triangle.
- $\sin \theta = \dfrac{\|\vec{u} \wedge \vec{v}\|}{\|\vec{u}\|\|\vec{v}\|}$ (angle entre vecteurs).
- Vecteur normal au plan de directeurs $\vec{u}, \vec{v}$ : $\vec{n} = \vec{u} \wedge \vec{v}$.
:::

:::formule Produit mixte
$$
[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w} = \det(\vec{u}, \vec{v}, \vec{w})
$$

- $|[\vec{u}, \vec{v}, \vec{w}]|$ = volume du parallélépipède ; tétraèdre $= \dfrac{1}{6}|[\vec{AB}, \vec{AC}, \vec{AD}]|$.
- $[\vec{u}, \vec{v}, \vec{w}] = 0 \iff$ vecteurs **coplanaires**.
- Circulaire : $[\vec{u}, \vec{v}, \vec{w}] = [\vec{v}, \vec{w}, \vec{u}] = [\vec{w}, \vec{u}, \vec{v}]$ ; échanger deux vecteurs change le signe.
:::

:::formule Équation d'un plan
Plan de point $M_0(x_0; y_0; z_0)$ et de normale $\vec{n} = (a; b; c)$ :

$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0
$$
:::

:::formule Transformations de l'espace
| Transformation | Formule / définition | Nature |
| --- | --- | --- |
| Translation | $\vec{OM'} = \vec{OM} + \vec{v}$ | isométrie directe |
| Symétrie orthogonale d'un plan | $\Pi$ = médiatrice de $[MM']$ | isométrie indirecte |
| Rotation | axe + angle (main droite) | isométrie directe |
| Homothétie | $\vec{OM'} = k\vec{OM}$ | similitude ($\times |k|$) |

Deux symétries de plans parallèles = translation ; de plans sécents = rotation.
:::

## Méthode express

1. **Vecteur normal à un plan** : prendre deux directeurs $\vec{u}, \vec{v}$ du plan, calculer $\vec{n} = \vec{u} \wedge \vec{v}$ (ou un multiple).
2. **Équation de plan** : $a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$ avec $\vec{n} = (a;b;c)$ et un point du plan.
3. **Aire d'un triangle de l'espace** : $\dfrac{1}{2}\|\vec{AB} \wedge \vec{AC}\|$.
4. **Volume de tétraèdre** : $\dfrac{1}{6}\big|[\vec{AB}, \vec{AC}, \vec{AD}]\big|$.
5. **Coplanarité** : calculer le produit mixte des trois vecteurs ; s'il est nul, les points sont coplanaires.
6. **Perpendicularité / parallélisme** : plans perpendiculaires $\iff$ normales perpendiculaires (produit scalaire nul) ; plans parallèles $\iff$ normales colinéaires.

:::erreur Les erreurs qui coûtent des points
1. Oublier la moitié pour l'aire d'un triangle, ou le sixième pour un tétraèdre.
2. Changer l'ordre des vecteurs dans un produit vectoriel sans changer de signe.
3. Prendre un produit scalaire là où il faut un produit vectoriel (ou inversement).
4. Écrire l'équation $ax + by + cz = d$ sans vérifier qu'un point du plan convient (calcul de $d$).
5. Confondre produit mixte (réel) et produit vectoriel (vecteur).
:::

## Vocabulaire

- **Produit vectoriel** $\vec{u} \wedge \vec{v}$ : vecteur orthogonal aux deux, de norme l'aire du parallélogramme.
- **Triplet direct** : $(\vec{u}, \vec{v}, \vec{u} \wedge \vec{v})$ conforme à la règle de la main droite.
- **Produit mixte** : $(\vec{u} \wedge \vec{v}) \cdot \vec{w}$, scalaire égal au volume signé du parallélépipède.
- **Coplanaires** : appartenant au même plan (produit mixte nul).
- **Normale** : vecteur perpendiculaire à un plan ; sert à l'équation cartésienne.
- **Translation** : $\vec{MM'} = \vec{v}$ constant ; **rotation** : axe + angle ; **symétrie orthogonale** : plan médiatrice.
- **Isométrie directe / indirecte** : conserve / change l'orientation (translations et rotations : directes).
