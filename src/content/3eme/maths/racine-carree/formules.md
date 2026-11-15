## La table des carrés parfaits

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 | 169 | 196 | 225 |

Suite : $20^2 = 400$, $25^2 = 625$, $30^2 = 900$, $40^2 = 1600$, $50^2 = 2500$.

## Les propriétés fondamentales

:::formule Propriétés de la racine carrée
Pour $a \geqslant 0$ et $b \geqslant 0$ :
$$
(\sqrt{a})^2 = a
$$
$$
\sqrt{a^2} = |a|
$$
$$
\sqrt{a} \times \sqrt{b} = \sqrt{a \times b}
$$
$$
\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \quad (b > 0)
$$
:::

:::formule Puissances de racines
$$
\sqrt{\sqrt{a}} = \sqrt[4]{a} \qquad (\sqrt{a})^n = \sqrt{a^n}
$$
Au BFEM, on utilise surtout $(\sqrt{a})^2 = a$ et $\sqrt{a} \times \sqrt{a} = a$.
:::

## Équations du type $x^2 = a$

:::formule Solutions
$$
x^2 = a \iff x = \sqrt{a} \ \text{ou} \ x = -\sqrt{a} \quad (a \geqslant 0)
$$
$$
a < 0 \implies \text{aucune solution}
$$
:::

| Équation | Solutions |
| --- | --- |
| $x^2 = 49$ | $x = 7$ ou $x = -7$ |
| $x^2 = 144$ | $x = 12$ ou $x = -12$ |
| $x^2 - 25 = 0$ | $x = 5$ ou $x = -5$ |
| $x^2 = 50$ | $x = 5\sqrt{2}$ ou $x = -5\sqrt{2}$ |
| $x^2 = -9$ | aucune solution |

## Calcul sur les radicaux

:::formule Simplification
$$
\sqrt{a^2 \times b} = a\sqrt{b} \quad (a > 0)
$$

Exemples : $\sqrt{12} = 2\sqrt{3}$, $\sqrt{18} = 3\sqrt{2}$, $\sqrt{48} = 4\sqrt{3}$, $\sqrt{75} = 5\sqrt{3}$, $\sqrt{98} = 7\sqrt{2}$, $\sqrt{50} = 5\sqrt{2}$.
:::

:::formule Radicaux semblables
$$
a\sqrt{c} + b\sqrt{c} = (a+b)\sqrt{c}
$$
$$
a\sqrt{c} - b\sqrt{c} = (a-b)\sqrt{c}
$$
:::

:::formule Produits et quotients
$$
a\sqrt{b} \times c\sqrt{d} = (a \times c)\sqrt{b \times d}
$$
$$
\frac{a\sqrt{b}}{c\sqrt{d}} = \frac{a}{c}\sqrt{\frac{b}{d}}
$$
:::

:::remarque Produits remarquables conservés
Les identités du collège restent valables avec les radicaux :
$$
(a+\sqrt{b})(a-\sqrt{b}) = a^2 - b
$$
$$
(a+\sqrt{b})^2 = a^2 + 2a\sqrt{b} + b
$$
:::

## Racines carrées remarquables

:::formule Trois valeurs à retenir
$$
\sqrt{2} \approx 1,414 \qquad \sqrt{3} \approx 1,732 \qquad \sqrt{5} \approx 2,236
$$
:::

:::formule Comparaison
La fonction racine carrée est **croissante** sur les réels positifs :
$$
0 \leqslant a \leqslant b \implies \sqrt{a} \leqslant \sqrt{b}
$$
Exemple : $\sqrt{8} < \sqrt{11}$ car $8 < 11$.
:::

## Formules d’application

:::formule Carré, rectangle et diagonale
- Carré de côté $a$ : surface $= a^2$, diagonale $= a\sqrt{2}$.
- Côté d’un carré de surface $S$ : $a = \sqrt{S}$.
- Triangle rectangle : $c = \sqrt{a^2+b^2}$ (hypoténuse).
:::

:::remarque Contrôle de réponse
Toute longueur, surface ou durée calculée par une racine carrée est **positive**. Un résultat négatif trahit une erreur de signe.
:::
