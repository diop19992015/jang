## Exponentielle de base $a$

:::formule Définition
$a > 0$ et $a \neq 1$ : la fonction $x \mapsto a^x$ est définie sur $\mathbb{R}$, avec $a^0 = 1$ et $a^x > 0$ toujours.

Passage à la base $e$ :
$$
a^x = e^{x \ln a}
$$
:::

:::formule Propriétés algébriques
$$
a^x \cdot a^y = a^{x+y}, \qquad
\frac{a^x}{a^y} = a^{x-y}, \qquad
\big(a^x\big)^y = a^{xy}, \qquad
\frac{1}{a^x} = a^{-x}, \qquad
\sqrt[n]{a^x} = a^{x/n}
$$
:::

:::formule Variation et limites
| Base | $a^x$ | $\lim\limits_{x \to -\infty} a^x$ | $\lim\limits_{x \to +\infty} a^x$ |
| --- | --- | --- | --- |
| $a > 1$ | croissante | $0$ | $+\infty$ |
| $0 < a < 1$ | décroissante | $+\infty$ | $0$ |

Dans les deux cas : asymptote horizontale $y = 0$, passage par $(0\,;\,1)$.
:::

:::remarque Comparer des puissances
Même base → comparer les exposants. Bases différentes → même puissance : $2^{30} = 8^{10}$ et $3^{20} = 9^{10}$, donc $2^{30} < 3^{20}$ car $8 < 9$.
:::

## Logarithme de base $a$

:::formule Définition
$$
\ln_a x = y \iff a^y = x \quad (x > 0,\; a > 0,\; a \neq 1)
$$

Domaine : $]0\,;\,+\infty[$. Propriétés : $\ln_a 1 = 0$ et $\ln_a a = 1$.
:::

:::formule Calculs
$$
\ln_a(xy) = \ln_a x + \ln_a y, \qquad
\ln_a\!\left(\frac{x}{y}\right) = \ln_a x - \ln_a y, \qquad
\ln_a(x^k) = k \ln_a x
$$

$$
a^{\ln_a x} = x, \qquad \ln_a\big(a^x\big) = x
$$
:::

:::formule Changement de base
$$
\ln_a x = \frac{\ln x}{\ln a}, \qquad
\log_a x = \frac{\log x}{\log a}
$$
:::

:::formule Variation et limites
| Base | $\ln_a x$ | $\lim\limits_{x \to 0^+} \ln_a x$ | $\lim\limits_{x \to +\infty} \ln_a x$ |
| --- | --- | --- | --- |
| $a > 1$ | croissante | $-\infty$ | $+\infty$ |
| $0 < a < 1$ | décroissante | $+\infty$ | $-\infty$ |

Asymptote verticale : $x = 0$ ; $\ln_a x < 0$ sur $]0\,;\,1[$ et $> 0$ sur $]1\,;\,+\infty[$.
:::

:::remarque Dérivées (pour les études)
$$
\big(a^x\big)' = a^x \ln a, \qquad
\big(\ln_a x\big)' = \frac{1}{x \ln a}
$$

Le signe de $a^x \ln a$ dépend de $a$ : $a > 1 \Rightarrow \ln a > 0$, $0 < a < 1 \Rightarrow \ln a < 0$.
:::

## Croissances comparées

:::formule Classement à $+\infty$
$$
\ln x \;\ll\; x^{\alpha} \;\ll\; a^x \qquad \text{pour tout } \alpha > 0 \text{ et } a > 1
$$
:::

:::formule Limites associées
$$
\lim_{x \to +\infty} \frac{\ln x}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^x} = 0, \qquad
\lim_{x \to +\infty} \frac{a^x}{x^{\alpha}} = +\infty
$$

$$
\lim_{x \to 0^+} x^{\alpha} \ln x = 0 \;(\alpha > 0), \qquad
\lim_{x \to 0^+} x^x = 1
$$
:::

:::remarque Limites de l'énoncé type
$$
\lim_{x \to +\infty} \frac{e^x}{x^{10}} = +\infty, \qquad
\lim_{x \to +\infty} \frac{\ln x}{x} = 0, \qquad
\lim_{x \to 0^+} x \ln x = 0
$$

Méthode : transformer en $\dfrac{\infty}{\infty}$ ou $0 \times \infty$, puis appliquer le classement ci-dessus (diviser par la plus forte puissance).
:::

## Équations et inéquations

:::formule Équations exponentielles
$$
a^{u(x)} = a^{v(x)} \iff u(x) = v(x)
$$

$$
a^{u(x)} = k \begin{cases}
\text{aucune solution} & k \leq 0 \\[4pt]
u(x) = \dfrac{\ln k}{\ln a} & k > 0
\end{cases}
$$
:::

:::formule Équations logarithmiques
$$
\ln_a u(x) = k \iff u(x) = a^k \;(u > 0)
$$

$$
\ln_a u(x) = \ln_a v(x) \iff u(x) = v(x) \;(u, v > 0)
$$
:::

:::remarque Méthode générale d'une équation $f(x) = g(x)$
Si $f$ est strictement croissante et $g$ strictement décroissante : $h = f - g$ est strictement croissante → **au plus une** solution. Chercher un intervalle où $h$ change de signe, appliquer le **théorème des valeurs intermédiaires** : existence + unicité.
:::
