## Le tableau statistique

| Colonne | Définition |
| --- | --- |
| Modalité | valeur de la variable (note, âge, transport…) |
| Effectif $n_i$ | nombre d’individus de la modalité |
| Fréquence $f_i$ | part de la modalité dans la population |
| Fréquence cumulée | somme des fréquences jusqu’à la modalité |

:::formule Sommes de contrôle
$$
n = \sum n_i \qquad \sum f_i = 1 \qquad \sum (\text{fréquences en \%}) = 100\,\%
$$
:::

## Effectifs et fréquences

:::formule Fréquence relative
$$
f_i = \frac{n_i}{n}
$$
:::

:::formule Fréquence en pourcentage
$$
\text{fréquence en \%} = \frac{n_i}{n} \times 100
$$
:::

:::formule Fréquence cumulée
$$
FC_i = f_1 + f_2 + \dots + f_i
$$
Elle donne la part des individus dont la modalité est inférieure ou égale à la modalité $i$.
:::

## Mesures de position

:::formule Moyenne
$$
\bar{x} = \frac{n_1 x_1 + n_2 x_2 + \dots + n_k x_k}{n}
$$
:::

:::formule Médiane
- $n$ **impair** : valeur d’ordre $\dfrac{n+1}{2}$ ;
- $n$ **pair** : moyenne des valeurs d’ordre $\dfrac{n}{2}$ et $\dfrac{n}{2} + 1$.
:::

| Situation | Où se trouve la médiane |
| --- | --- |
| $n$ impair | rang $\dfrac{n+1}{2}$, lu dans l’effectif cumulé |
| $n$ pair | entre les rangs $\dfrac{n}{2}$ et $\dfrac{n}{2}+1$ |

:::remarque Moyenne ou médiane ?
La moyenne utilise **toutes** les valeurs (elle est sensible aux valeurs extrêmes) ; la médiane ne dépend que de leur **ordre**. Si la série contient une valeur très grande ou très petite, la médiane est plus représentative de « la classe moyenne ».
:::

## Les diagrammes

:::formule Diagramme en bâtons
$$
\text{hauteur du bâton} \propto \text{effectif (ou fréquence)}
$$
:::

:::formule Diagramme circulaire
$$
\alpha_i = 360° \times \frac{n_i}{n} = 360° \times f_i
$$
:::

| Fréquence | 0,10 | 0,25 | 0,30 | 0,40 | 0,50 |
| --- | --- | --- | --- | --- | --- |
| Angle | 36° | 90° | 108° | 144° | 180° |

:::remarque Contrôles rapides
- Diagramme circulaire : $\sum \alpha_i = 360°$.
- Diagramme en bâtons : titre, axe des effectifs gradué, unités.
- Un secteur « moitié du cercle » correspond à $50\,\%$ ; un quart, à $25\,\%$ ($90°$).
:::

## Comparer deux populations

:::formule Écart entre deux moyennes
$$
\Delta = \bar{x}_1 - \bar{x}_2
$$
:::

:::methode Conclusion attendue au BFEM
1. Calculer la moyenne de chaque série.
2. Soustraire.
3. Écrire une phrase du type : « La moyenne de la série A ($12{,}5$) est supérieure de $2$ points à celle de la série B ($10{,}5$). »
:::
