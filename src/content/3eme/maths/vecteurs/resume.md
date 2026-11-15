---
titre: Vecteurs
accroche: Programme officiel — Activités géométriques.
ordre: 10
duree: 80
demo: false
objectifs:
  - Représenter un vecteur et reconnaître deux vecteurs égaux
  - Construire la somme de deux vecteurs et multiplier un vecteur par un nombre
  - Utiliser les vecteurs pour démontrer un parallélisme ou trouver un milieu
---

## L'essentiel du chapitre

:::formule Un vecteur, trois caractéristiques
Direction · sens · norme. $\overrightarrow{AB}$ va de $A$ vers $B$ ; $\overrightarrow{BA} = -\overrightarrow{AB}$ (même direction, sens opposé).
:::

:::formule Égalité de vecteurs
$$
\overrightarrow{AB} = \overrightarrow{CD} \iff \text{même direction, même sens, même norme}
$$
:::

:::formule Somme de deux vecteurs (règle du triangle)
$$
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}
$$
La chaîne se déroule : $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AD}$.
:::

:::formule Multiplication par un nombre
$$
\|\lambda\vec{u}\| = |\lambda| \times \|\vec{u}\|
$$
$\lambda > 0$ : même sens ; $\lambda < 0$ : sens opposé ; direction toujours la même.
:::

:::formule Milieu
$$
\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB} \qquad \overrightarrow{OM} = \frac{\overrightarrow{OA} + \overrightarrow{OB}}{2}
$$
:::

:::formule Colinéarité et parallélisme
$$
\overrightarrow{MN} = \lambda\overrightarrow{AB} \ (\lambda \neq 0) \implies (MN) \parallel (AB)
$$
Les vecteurs non nuls colinéaires portent des droites parallèles (ou confondues).
:::

:::formule Coordonnées
$$
\overrightarrow{AB} = (x_B - x_A\,;\; y_B - y_A) \qquad \|\overrightarrow{AB}\| = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}
$$
Milieu de $[AB]$ : $M\left(\dfrac{x_A+x_B}{2}\,;\,\dfrac{y_A+y_B}{2}\right)$. Colinéarité : $x_1y_2 - x_2y_1 = 0$.
:::

## Méthode express

1. **Reconnaître des vecteurs égaux** : même direction, même sens, même norme (les trois !).
2. **Additionner** : plaquer le second vecteur à l'arrivée du premier (règle du triangle) ou construire le parallélogramme.
3. **Multiplier** par $\lambda$ : sens de $\lambda$, norme × $|\lambda|$.
4. **Milieu** : écrire $\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB}$, puis développer avec un point intermédiaire.
5. **Parallélisme** : exprimer $\overrightarrow{MN} = \lambda\overrightarrow{AB}$, préciser que les vecteurs sont non nuls, conclure.
6. **Coordonnées** : arrivée − départ, Pythagore pour la norme, moyennes pour le milieu.

:::erreur Les erreurs qui coûtent des points
1. Écrire $\overrightarrow{AB} = \overrightarrow{BA}$ : les sens sont opposés.
2. Dessiner $\vec{u}+\vec{v}$ sans respecter la règle du triangle (flèche finale mal placée).
3. Conclure « colinéaires donc parallèles » sans exclure le vecteur nul.
4. Calculer les coordonnées en faisant départ − arrivée au lieu de arrivée − départ.
5. Oublier la valeur absolue du coefficient pour la norme : $\|-2\vec{u}\| = 2\|\vec{u}\|$.
:::

## Vocabulaire

- **Vecteur** : triplet direction, sens, norme.
- **Norme** : longueur du vecteur, notée $\|\vec{u}\|$.
- **Vecteur nul** : $\vec{0}$, de norme nulle, égal à tout $\overrightarrow{AA}$.
- **Vecteurs égaux** : mêmes direction, sens et norme.
- **Opposé** : $-\vec{u}$, même direction, sens contraire.
- **Règle du triangle / du parallélogramme** : deux façons de construire une somme.
- **Combinaison linéaire** : $\lambda\vec{u} + \mu\vec{v}$.
- **Colinéarité** : deux vecteurs de même direction (l'un est un multiple de l'autre).
- **Origine / arrivée** : les points $A$ et $B$ de $\overrightarrow{AB}$ ; coordonnées : arrivée − départ.
