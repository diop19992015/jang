## Statistiques à deux variables

:::formule Moyennes et écarts-types
$$
\overline{x} = \frac{1}{n}\sum_{i=1}^n x_i, \qquad
\overline{y} = \frac{1}{n}\sum_{i=1}^n y_i
$$

$$
\sigma_x = \sqrt{\frac{1}{n}\sum_{i=1}^n (x_i-\overline{x})^2}, \qquad
\sigma_y = \sqrt{\frac{1}{n}\sum_{i=1}^n (y_i-\overline{y})^2}
$$
:::

:::formule Covariance empirique
$$
s_{xy} = \frac{1}{n}\sum_{i=1}^n (x_i-\overline{x})(y_i-\overline{y})
$$
:::

:::remarque Formules équivalentes utiles à la calculatrice
$$
\sigma_x^2 = \frac{1}{n}\sum x_i^2 - \overline{x}^{\,2}
\qquad
s_{xy} = \frac{1}{n}\sum x_i y_i - \overline{x}\,\overline{y}
$$
:::

## Corrélation

:::formule Coefficient de corrélation de Pearson
$$
r_{xy} = \frac{s_{xy}}{\sigma_x \sigma_y}
$$

$$
-1 \leq r_{xy} \leq 1
$$
:::

:::formule Lecture de $r_{xy}$
| $r_{xy}$ | Interprétation |
| --- | --- |
| proche de $+1$ | lien linéaire positif fort |
| proche de $-1$ | lien linéaire négatif fort |
| proche de $0$ | pas de lien linéaire |
| $> 0$ | $y$ tend à croître avec $x$ |
| $< 0$ | $y$ tend à décroître quand $x$ augmente |
:::

:::remarque Attention
$r_{xy}$ mesure un lien **linéaire uniquement**. $r_{xy} \approx 0$ n'exclut pas une relation non linéaire, et $r_{xy}$ n'est **pas** une équation.
:::

## Droite de régression

:::formule Pente et ordonnée à l'origine (régression de $Y$ en $X$)
$$
a = \frac{s_{xy}}{\sigma_x^2}
\qquad \text{équivalamment} \qquad
a = r_{xy}\,\frac{\sigma_y}{\sigma_x}
$$

$$
b = \overline{y} - a\,\overline{x}
$$
:::

:::formule Équation complète
$$
\mathcal{D}: y = ax + b, \qquad (\overline{x}\,;\,\overline{y}) \in \mathcal{D}
$$
:::

:::remarque Régression de $X$ en $Y$ (si demandée)
$$
x = a'y + b' \qquad \text{avec} \qquad a' = \frac{s_{xy}}{\sigma_y^2}, \quad b' = \overline{x} - a'\,\overline{y}
$$

Les deux droites sont **différentes** : lis bien quel sens l'énoncé demande.
:::

## Prévisions

:::formule Valeur prévue
$$
\hat{y} = a\,x_0 + b \qquad \text{pour un abscisse donné } x_0
$$
:::

:::formule Contrôles de prévision
- Vérifier que $\hat{y}$ est **raisonnable** par rapport aux $y_i$ du tableau.
- Si $x_0$ est hors de l'intervalle $[\min x_i\,;\,\max x_i]$ : **extrapolation**, fiabilité moindre.
- La conclusion doit être écrite **dans le contexte** avec les unités.
:::

## Protocole de calcul (calculatrice)

:::formule Mode statistique bivarié
1. Saisir les couples $(x_i\,;\,y_i)$ dans la calculatrice (mode **régression linéaire**).
2. Lire $r$ (= $r_{xy}$), $a$, $b$, $\overline{x}$, $\overline{y}$, $\sigma_x$, $\sigma_y$.
3. Recopier **les formules** dans la copie : le résultat seul ne suffit pas.
:::

:::remarque Ce que le correcteur exige
Les étapes : formule $\to$ remplacement numérique $\to$ résultat $\to$ interprétation. Une valeur juste sans formule vaut la moitié des points.
:::

## À mémoriser absolument

- $r_{xy} = \dfrac{s_{xy}}{\sigma_x \sigma_y}$, entre $-1$ et $+1$.
- $a = \dfrac{s_{xy}}{\sigma_x^2} = r_{xy}\dfrac{\sigma_y}{\sigma_x}$.
- $b = \overline{y} - a\,\overline{x}$.
- $(\overline{x}\,;\,\overline{y})$ est sur la droite : vérification gratuite.
- Prévision : $\hat{y} = a x_0 + b$ + phrase de conclusion.
