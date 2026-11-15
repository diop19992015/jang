## Les trois rapports trigonométriques

:::formule Définitions (angle aigu $A$ d'un triangle rectangle)
$$
\cos A = \frac{\text{côté adjacent à } A}{\text{hypoténuse}}
$$
$$
\sin A = \frac{\text{côté opposé à } A}{\text{hypoténuse}}
$$
$$
\tan A = \frac{\text{côté opposé à } A}{\text{côté adjacent à } A}
$$
:::

| Rapport | Numérateur | Dénominateur | Cas typique |
| --- | --- | --- | --- |
| $\cos$ | adjacent | hypoténuse | hypoténuse connue ou cherchée |
| $\sin$ | opposé | hypoténuse | hypoténuse connue ou cherchée |
| $\tan$ | opposé | adjacent | l'hypoténuse n'intervient pas |

:::formule Relation entre les trois rapports
$$
\tan A = \frac{\sin A}{\cos A}
$$
:::

:::remarque Astuce de choix
Si l'inconnue est au dénominateur (elle se trouve dans l'hypoténuse ou dans l'adjacent), l'inversion se fait par un produit en croix : de $\cos A = \dfrac{b}{c}$ on obtient $c = \dfrac{b}{\cos A}$.
:::

## Repérage des côtés dans $ABC$ rectangle en $A$

| Angle étudié | Hypoténuse | Côté opposé | Côté adjacent |
| --- | --- | --- | --- |
| $B$ | $[BC]$ | $[AC]$ | $[AB]$ |
| $C$ | $[BC]$ | $[AB]$ | $[AC]$ |

:::formule Rapports explicites
$$
\cos B = \frac{AB}{BC} \qquad \sin B = \frac{AC}{BC} \qquad \tan B = \frac{AC}{AB}
$$
:::

## Retrouver un angle aigu

:::formule Calcul d'un angle
$$
A = \cos^{-1}\left(\frac{\text{adjacent}}{\text{hypoténuse}}\right) \qquad A = \sin^{-1}\left(\frac{\text{opposé}}{\text{hypoténuse}}\right) \qquad A = \tan^{-1}\left(\frac{\text{opposé}}{\text{adjacent}}\right)
$$
:::

:::remarque Réflexes de calculatrice
1. Mode **degrés** (pas radians).
2. Calculer d'abord la fraction en nombre décimal.
3. Utiliser la touche $\cos^{-1}$, $\sin^{-1}$ ou $\tan^{-1}$ (parfois notée `SHIFT` + `cos`).
4. Vérifier : le résultat doit être compris entre $0°$ et $90°$.
:::

## Les valeurs remarquables

| Angle | $\cos$ | $\sin$ | $\tan$ | $\cos$ en décimal | $\sin$ en décimal |
| --- | --- | --- | --- | --- | --- |
| $30°$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{3}}{3}$ | $0{,}87$ | $0{,}50$ |
| $45°$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $1$ | $0{,}71$ | $0{,}71$ |
| $60°$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $\sqrt{3}$ | $0{,}50$ | $0{,}87$ |

:::formule Propriétés utiles des valeurs remarquables
$$
\cos 30° = \sin 60° \qquad \cos 60° = \sin 30° \qquad \tan 45° = 1
$$
et pour tout angle aigu $A$ :
$$
\cos(90° - A) = \sin A
$$
:::

:::formule Triangle $45°$–$45°$–$90°$ (rectangle isocèle)
Les deux côtés de l'angle droit valent $1$ ; Pythagore donne l'hypoténuse $\sqrt{1^2+1^2}=\sqrt{2}$. Donc :
$$
\cos 45° = \sin 45° = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} \qquad \tan 45° = 1
$$
:::

:::formule Triangle $30°$–$60°$–$90°$
Triangle équilatéral de côté $2$ coupé en deux : côtés $1$, $\sqrt{3}$, $2$. Donc l'angle de $30°$ a pour opposé le côté $1$ : $\sin 30° = \dfrac{1}{2}$, et l'angle de $60°$ a pour adjacent le côté $1$ : $\cos 60° = \dfrac{1}{2}$.
:::

## Applications : hauteurs et ombres

:::formule Hauteur d'un objet vertical (tour, arbre, mât)
$$
h = d \times \tan \alpha
$$
où $d$ est la distance mesurée au sol depuis le pied de l'objet et $\alpha$ l'angle d'élévation (ou l'angle des rayons du soleil).
:::

:::formule Ombre et hauteur
$$
\tan \alpha = \frac{\text{hauteur}}{\text{longueur de l'ombre}}
$$

Cas particulier : si $\alpha = 45°$, alors $\tan 45° = 1$ et **hauteur = longueur de l'ombre**.
:::

:::remarque Choix de l'outil
- Trois longueurs et un angle droit → **Pythagore** : $BC^2 = AB^2 + AC^2$.
- Droites parallèles dans deux triangles → **Thalès**.
- Un angle et des longueurs → **trigonométrie** ($\cos$, $\sin$, $\tan$).

Les sujets de BFEM combinent souvent les trois dans un même exercice.
:::
