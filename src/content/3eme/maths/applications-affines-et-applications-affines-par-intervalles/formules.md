## Les formules de base

:::formule Application affine
$$
y = ax + b
$$
avec $a$ le coefficient directeur et $b$ le terme constant.
:::

:::formule Proportionnalité (cas particulier)
$$
y = ax \qquad (b = 0)
$$
Le graphe passe par l’origine du repère $O(0\,; 0)$.
:::

:::formule Ordonnée à l’origine et image de $1$
$$
y(0) = b \qquad y(1) = a + b
$$
:::

## Sens de variation

| Signe de $a$ | Variation | Graphe | Exemple |
| --- | --- | --- | --- |
| $a > 0$ | croissante | monte de gauche à droite | $y = 3x + 2$ |
| $a < 0$ | décroissante | descend de gauche à droite | $y = -2x + 5$ |
| $a = 0$ | constante | droite horizontale | $y = 4$ |

:::formule À retenir
$$
a > 0 \implies y \text{ augmente avec } x \qquad a < 0 \implies y \text{ diminue avec } x
$$
:::

## Images et antécédents

:::formule Image de $c$
$$
y_c = ac + b
$$
:::

:::formule Antécédent de $y_0$
$$
ax_0 + b = y_0 \implies x_0 = \frac{y_0 - b}{a} \quad (a \neq 0)
$$
:::

:::formule Image d’un intervalle
$$
a > 0 : \ [c\,; d] \mapsto [f(c)\,; f(d)]
$$
$$
a < 0 : \ [c\,; d] \mapsto [f(d)\,; f(c)]
$$
:::

## Table de référence — lire un graphe

| Ce qu’on demande | Ce qu’on fait |
| --- | --- |
| L’équation de la droite | Lire $b$ (point sur l’axe des $y$) et calculer $a = \dfrac{y_2 - y_1}{x_2 - x_1}$ |
| Le sens de variation | Regarder si la droite monte ou descend |
| L’image d’une abscisse | Monter à la droite puis lire l’ordonnée |
| L’antécédent d’une ordonnée | Partir de l’ordonnée, aller à la droite puis lire l’abscisse |
| Si le point appartient au graphe | Vérifier $y = ax+b$ avec ses coordonnées |

## Modèles de problèmes

:::formule Tarifs et prix
$$
\text{prix} = \text{prise en charge} + (\text{prix unitaire} \times \text{quantité})
$$
Exemple : $y = 500 + 100x$ (taxi à Dakar, $x$ en km, $y$ en FCFA).
:::

:::formule Thermomètre
$$
y = \text{longueur à } 0\,°\text{C} + (\text{mm par degré} \times x)
$$
Exemple : $y = 10 + 2x$ ($y$ en mm, $x$ en $°$C).
:::

:::formule Échelle d’une carte
$$
\text{distance réelle} = (\text{km représentés par 1 cm}) \times \text{longueur sur la carte}
$$
Exemple : $D = 25x$ pour une échelle $1 : 2\,500\,000$.
:::

:::formule Salaire avec commission
$$
S = (\text{taux de commission} \times \text{ventes}) + \text{fixe}
$$
Exemple : $S = 0{,}05V + 25000$ (en FCFA).
:::

## Applications affines par intervalles

:::formule Structure
$$
f(x) = a_1x + b_1 \ \text{si} \ x \in I_1, \qquad f(x) = a_2x + b_2 \ \text{si} \ x \in I_2
$$
:::

:::remarque Bon usage
1. Déterminer la tranche où se trouve $x$.
2. Appliquer l’expression de cette tranche **seulement**.
3. Vérifier que la réponse est cohérente (elle doit rester dans l’intervalle traité, sinon recommencer avec l’autre expression).
:::

:::remarque Le graphe de ces applications
Ce n’est plus une droite, mais une **suite de segments** : une rupture de pente apparaît aux bornes des intervalles (prix qui « casse » après un seuil).
:::
