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

:::remarque À quoi ça sert au BFEM ?
Les vecteurs sont un outil redoutable au BFEM : ils permettent de démontrer que deux droites sont parallèles, de trouver un milieu, de calculer une distance dans un repère. Beaucoup de candidats perdent des points en dessinant mal la somme de deux vecteurs ou en oubliant de préciser le sens d'un coefficient : ce chapitre te donne toutes les méthodes, avec des exemples de sujets de BFEM.
:::

## Qu'est-ce qu'un vecteur ?

:::definition Vecteur
Un **vecteur** est la donnée de trois éléments :
- une **direction** (la droite sur laquelle il repose) ;
- un **sens** (le côté vers lequel il pointe) ;
- une **norme** (sa longueur).

Deux vecteurs sont égaux s'ils ont la même direction, le même sens et la même norme.
:::

:::definition Notation
Le vecteur qui va du point $A$ au point $B$ s'écrit :
$$
\overrightarrow{AB}
$$

On le dessine par une **flèche** partant de $A$ (point d'origine) et allant vers $B$ (point d'arrivée). Un vecteur sans nom particulier se note $\vec{u}$, $\vec{v}$…
:::

:::remarque Le vecteur nul
Le vecteur $\overrightarrow{AA}$ (de $A$ vers $A$) est le **vecteur nul** : sa norme est nulle, il n'a pas de sens particulier. Tous les vecteurs nuls sont égaux entre eux, quel que soit le point de départ : $\overrightarrow{AA} = \overrightarrow{BB} = \vec{0}$.
:::

:::exemple Lire et dessiner
Le bus de Dakar à Thiès suit le trajet $A \to B$. Le vecteur $\overrightarrow{AB}$ représente ce déplacement : il part de $A$, arrive en $B$, et sa norme est la distance $AB$.

Le trajet retour est représenté par $\overrightarrow{BA}$ : même direction, **sens inverse**, même norme. Donc $\overrightarrow{BA} \neq \overrightarrow{AB}$, mais on écrit :
$$
\overrightarrow{BA} = -\overrightarrow{AB}
$$
:::

:::erreur Attention à l'ordre des lettres
$\overrightarrow{AB}$ et $\overrightarrow{BA}$ sont deux vecteurs de même direction et de même norme, mais de **sens opposés** : ils ne sont pas égaux. L'ordre des lettres n'est jamais un détail.
:::

## Vecteurs égaux

:::formule Égalité de deux vecteurs
Deux vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont égaux si et seulement s'ils ont :
- la même direction (les droites $(AB)$ et $(CD)$ sont parallèles),
- le même sens,
- la même norme.

$$
\overrightarrow{AB} = \overrightarrow{CD} \iff \text{même direction, même sens, même norme}
$$
:::

:::exemple Reconnaître deux vecteurs égaux
Dans la figure, $ABDC$ est un parallélogramme :
$$
\overrightarrow{AB} = \overrightarrow{CD} \qquad \overrightarrow{AC} = \overrightarrow{BD}
$$

En revanche, $\overrightarrow{AB} = \overrightarrow{DC}$ est **faux** (sens inverse).
:::

:::methode Vérifier l'égalité de deux vecteurs
1. Vérifier que les droites portant les vecteurs sont parallèles (ou confondues).
2. Vérifier le sens avec une flèche ou un repère (les deux flèches vont dans le même côté).
3. Vérifier que les longueurs sont égales.
4. Si une seule des trois conditions échoue, les vecteurs ne sont pas égaux.
:::

## La somme de deux vecteurs

:::formule Règle du triangle
Pour additionner deux vecteurs, on place le départ du second à l'arrivée du premier :
$$
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}
$$
:::

:::formule Règle du parallélogramme
Si les deux vecteurs partent du même point $O$, on construit le parallélogramme dont ils sont deux côtés ; la somme est la **diagonale** issue de $O$.
:::

:::methode Construire $\vec{u} + \vec{v}$
1. Dessiner $\vec{u}$.
2. À partir de l'arrivée de $\vec{u}$, dessiner $\vec{v}$ (même sens, même norme, déplacé si besoin) : c'est une translation de $\vec{v}$.
3. Relier le départ de $\vec{u}$ à l'arrivée finale : c'est $\vec{u} + \vec{v}$.

On peut vérifier avec la règle du parallélogramme : les deux méthodes donnent la même flèche.
:::

:::exemple Additionner trois vecteurs
L'associativité permet de « dérouler » une chaîne de vecteurs :
$$
\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}
$$

Le point de départ $A$ et le point d'arrivée $D$ suffisent : on relie $A$ à $D$.
:::

:::formule Propriétés de l'addition
- **Associativité** : $(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$.
- **Vecteur nul** : $\vec{u} + \vec{0} = \vec{u}$.
- **Opposé** : $\overrightarrow{AB} + \overrightarrow{BA} = \vec{0}$.
:::

## Multiplier un vecteur par un nombre

:::definition Produit par un nombre
Soit $\lambda$ un nombre réel. Le vecteur $\lambda\vec{u}$ a :
- la **même direction** que $\vec{u}$ ;
- le **même sens** si $\lambda > 0$, le **sens opposé** si $\lambda < 0$ ;
- une norme multipliée par $|\lambda|$.

$$
\|\lambda\vec{u}\| = |\lambda| \times \|\vec{u}\|
$$
:::

:::exemple Effets du coefficient
Avec $\|\vec{u}\| = 3$ cm :
- $2\vec{u}$ : même sens, norme $2 \times 3 = 6$ cm.
- $\dfrac{1}{2}\vec{u}$ : même sens, norme $1{,}5$ cm.
- $-3\vec{u}$ : **sens opposé**, norme $3 \times 3 = 9$ cm.
:::

:::formule Combinaisons linéaires
Pour $\lambda, \mu$ deux nombres réels :
$$
\lambda\vec{u} + \mu\vec{v}
$$
est une **combinaison linéaire** de $\vec{u}$ et $\vec{v}$. En particulier :
$$
\vec{u} + \lambda\vec{u} = (1+\lambda)\vec{u}
$$
:::

:::remarque Application au parallélisme
Si $\lambda \neq 0$, les vecteurs $\vec{u}$ et $\lambda\vec{u}$ ont la même direction : c'est exactement ce qui sert à démontrer qu'une droite est parallèle à une autre.
:::

## Milieux et points alignés

:::formule Points alignés et milieu
Le point $M$ appartient à la droite $(AB)$ si et seulement si il existe un nombre $\lambda$ tel que :
$$
\overrightarrow{AM} = \lambda \overrightarrow{AB}
$$

- $M$ est le **milieu** de $[AB]$ si $\lambda = \dfrac{1}{2}$ :
$$
\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}
$$
- $M$ appartient au **segment** $[AB]$ si $0 \leq \lambda \leq 1$.
:::

:::formule Vecteur milieu (relation avec un point origine $O$)
Si $M$ est le milieu de $[AB]$, alors pour tout point $O$ :
$$
\overrightarrow{OM} = \frac{\overrightarrow{OA} + \overrightarrow{OB}}{2}
$$
:::

:::methode Calculer une position avec le milieu
1. Identifier le segment dont $M$ est le milieu.
2. Écrire $\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB}$ ou $\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}$.
3. Développer les vecteurs en utilisant un point intermédiaire (règle du triangle).
4. Isoler l'inconnue demandée.
:::

:::exemple Trouver le milieu
$M$ est le milieu de $[AB]$ et $O$ un point quelconque. On donne $\overrightarrow{OA} = \vec{a}$ et $\overrightarrow{OB} = \vec{b}$. Alors :
$$
\overrightarrow{OM} = \frac{\vec{a} + \vec{b}}{2}
$$

Si de plus $N$ est le milieu de $[CD]$, alors :
$$
\overrightarrow{ON} = \frac{\overrightarrow{OC} + \overrightarrow{OD}}{2}
$$
et le vecteur reliant les deux milieux vaut :
$$
\overrightarrow{MN} = \frac{\overrightarrow{AC} + \overrightarrow{BD}}{2}
$$
:::

## Parallélisme et colinéarité

:::formule Critère de colinéarité
Deux vecteurs non nuls $\overrightarrow{MN}$ et $\overrightarrow{AB}$ ont la même direction si et seulement s'il existe un nombre $\lambda$ tel que :
$$
\overrightarrow{MN} = \lambda \overrightarrow{AB}
$$

On dit alors que les vecteurs sont **colinéaires**.
:::

:::formule Parallélisme de deux droites
Pour deux droites distinctes $(d_1)$ et $(d_2)$ portées respectivement par les vecteurs $\vec{u}$ et $\vec{v}$ non nuls :
$$
(d_1) \parallel (d_2) \iff \vec{u} \text{ et } \vec{v} \text{ sont colinéaires}
$$
:::

:::methode Démontrer que deux droites sont parallèles
1. Choisir un vecteur propre à chaque droite ($\overrightarrow{AB}$ pour $(AB)$, $\overrightarrow{MN}$ pour $(MN)$).
2. Montrer que l'un est un multiple de l'autre : $\overrightarrow{MN} = \lambda\overrightarrow{AB}$ avec $\lambda$ trouvé explicitement.
3. Conclure : les vecteurs étant colinéaires et non nuls, les droites sont parallèles.
:::

:::exemple Démonstration complète
$M$ est le milieu de $[AB]$ et $N$ le milieu de $[AC]$. Montrer que $(MN) \parallel (BC)$.

D'après la relation du milieu (avec le point $A$ comme origine) :
$$
\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB} \qquad \overrightarrow{AN} = \frac{1}{2}\overrightarrow{AC}
$$
On utilise la relation $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM}$… ou plus directement, avec la règle du triangle :
$$
\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AN} = -\frac{1}{2}\overrightarrow{AB} + \frac{1}{2}\overrightarrow{AC} = \frac{1}{2}(\overrightarrow{AC} - \overrightarrow{AB})
$$
Or $\overrightarrow{AC} - \overrightarrow{AB} = \overrightarrow{BC}$, donc :
$$
\overrightarrow{MN} = \frac{1}{2}\overrightarrow{BC}
$$

Les vecteurs $\overrightarrow{MN}$ et $\overrightarrow{BC}$ étant colinéaires (coefficient $\lambda = \dfrac{1}{2}$) et non nuls, les droites $(MN)$ et $(BC)$ sont **parallèles**. De plus, $\|\overrightarrow{MN}\| = \dfrac{1}{2}\|\overrightarrow{BC}\|$ : c'est la médiane du triangle, ce que donnait aussi le théorème de Thalès.
:::

:::piege Colinéarité des vecteurs ≠ droites parallèles
Si $\overrightarrow{MN} = \vec{0}$, la colinéarité est automatique mais les droites $(MN)$ et $(AB)$ ne le sont pas forcément (le point $M$ peut être n'importe où). **Précise toujours** que les vecteurs sont non nuls avant de conclure au parallélisme.
:::

## Les coordonnées d'un vecteur

Dans un repère, si $A$ a pour coordonnées $(x_A\,;\,y_A)$ et $B$ celles $(x_B\,;\,y_B)$ :

:::formule Coordonnées d'un vecteur
$$
\overrightarrow{AB} = (x_B - x_A\,;\; y_B - y_A)
$$
:::

:::formule Norme d'un vecteur (Pythagore)
$$
\|\overrightarrow{AB}\| = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}
$$
:::

:::exemple Calcul de coordonnées
$A(1\,;\,2)$, $B(4\,;\,6)$ et $C(5\,;\,0)$.
$$
\overrightarrow{AB} = (4-1\,;\; 6-2) = (3\,;\,4)
$$
$$
\|\overrightarrow{AB}\| = \sqrt{3^2+4^2} = \sqrt{25} = 5
$$

Milieu de $[AB]$ :
$$
M\left(\frac{1+4}{2}\,;\;\frac{2+6}{2}\right) = M(2{,}5\,;\,4)
$$
:::

:::formule Colinéarité avec les coordonnées
Les vecteurs $\vec{u} = (x_1\,;\,y_1)$ et $\vec{v} = (x_2\,;\,y_2)$ sont colinéaires si et seulement si :
$$
x_1 \times y_2 - x_2 \times y_1 = 0
$$

Autrement dit, les rapports des coordonnées sont égaux : $\dfrac{x_1}{x_2} = \dfrac{y_1}{y_2}$ (si aucun dénominateur n'est nul).
:::

:::exemple Vérifier un parallélisme
$\overrightarrow{AB} = (6\,;\,4)$ et $\overrightarrow{CD} = (3\,;\,2)$. On calcule :
$$
6 \times 2 - 3 \times 4 = 12 - 12 = 0
$$

Les vecteurs sont colinéaires : $(AB) \parallel (CD)$. On voit aussi directement que $\overrightarrow{AB} = 2\overrightarrow{CD}$.
:::

:::erreur Les erreurs qui coûtent des points
1. Dessiner la somme $\vec{u} + \vec{v}$ sans plaquer $\vec{v}$ à l'arrivée de $\vec{u}$ (règle du triangle) : la diagonale partant du bon sommet est exigée.
2. Écrire $\overrightarrow{AB} = \overrightarrow{BA}$ ou oublier le signe moins : $\overrightarrow{BA} = -\overrightarrow{AB}$.
3. Conclure au parallélisme sans dire que les vecteurs sont **non nuls**.
4. Soustraire les coordonnées dans le mauvais ordre : toujours **arrivée − départ**.
5. Oublier que $\|\lambda\vec{u}\| = |\lambda|\|\vec{u}\|$ : si $\lambda = -2$, la norme est multipliée par $2$, pas par $-2$.
:::

## Ce qu'il faut retenir

- Un vecteur est défini par sa **direction**, son **sens** et sa **norme** ; $\overrightarrow{AB} \neq \overrightarrow{BA}$.
- $\overrightarrow{AB} = \overrightarrow{CD}$ : même direction, même sens, même norme.
- $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ (règle du triangle) ; l'addition est associative.
- $\lambda\vec{u}$ : même direction, sens de $\lambda$ ($\lambda > 0$ ou $\lambda < 0$), norme multipliée par $|\lambda|$.
- $M$ milieu de $[AB]$ : $\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB}$ et $\overrightarrow{OM} = \dfrac{\overrightarrow{OA}+\overrightarrow{OB}}{2}$.
- $(d_1) \parallel (d_2)$ : les vecteurs directeurs sont colinéaires et non nuls.
- Coordonnées : $\overrightarrow{AB} = (x_B-x_A\,;\,y_B-y_A)$ ; colinéarité : $x_1y_2 - x_2y_1 = 0$.
