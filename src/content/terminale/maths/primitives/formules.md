## Définition

:::formule Primitive
$$
F'(x) = f(x) \ \forall x \in I \;\Longrightarrow\; F \text{ est une primitive de } f \text{ sur } I
$$

Deux primitives diffèrent d'une constante :

$$
\int f(x)\, dx = F(x) + K, \qquad K \in \mathbb{R}
$$
:::

:::remarque Condition initiale
La condition $F(a) = b$ fixe $K$ : $K = b - F(a)$ où $a$ est remplacé dans la primitive **générale**. Toujours vérifier ensuite : $F'(x) = f(x)$ et $F(a) = b$.
:::

## Tableau à connaître

:::formule Primitives usuelles
| $f(x)$ | $F(x)$ |
| --- | --- |
| $c$ | $cx$ |
| $x^n \ (n \neq -1)$ | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac{1}{x}$ | $\ln\|x\|$ |
| $e^{kx}$ | $\dfrac{1}{k}\, e^{kx}$ |
| $a^x$ | $\dfrac{a^x}{\ln a}$ |
| $\sin x$ | $-\cos x$ |
| $\cos x$ | $\sin x$ |
| $\dfrac{1}{1+x^2}$ | $\arctan x$ |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x$ |
| $\tan x$ | $-\ln|\cos x|$ |
:::

:::remarque Mémorisation
Les quatre « inverses » de la dérivée : $x^{n+1}/(n+1)$ (sauf $n = -1$ qui donne $\ln|x|$), $e^{kx}$ avec le facteur $1/k$, $-\cos x$ pour $\sin x$, et les réciproques $\arctan$ / $\arcsin$.
:::

## Propriétés

:::formule Linéarité
$$
\int \big(\lambda f + \mu g\big)(x)\, dx = \lambda \int f(x)\, dx + \mu \int g(x)\, dx
$$

Exemple :

$$
\int (3x^2 - 2\sin x + 1)\, dx = x^3 + 2\cos x + x + K
$$
:::

:::formule Règle de la chaîne à l'envers
$$
\int f\big(u(x)\big) u'(x)\, dx = F\big(u(x)\big) + K
$$

| Forme | Primitive |
| --- | --- |
| $u^n u'$ | $\dfrac{u^{n+1}}{n+1}$ ($n \neq -1$) |
| $\dfrac{u'}{u}$ | $\ln\|u\|$ |
| $e^u u'$ | $e^u$ |
| $\cos(u) \cdot u'$ | $\sin u$ |
| $-\sin(u) \cdot u'$ | $\cos u$ |
:::

:::remarque Exemples
$$
\int \frac{x}{1+x^2}\, dx = \frac{1}{2}\ln(1+x^2) + K \qquad (\text{car } (1+x^2)' = 2x)
$$

$$
\int x e^{x^2}\, dx = \frac{1}{2} e^{x^2} + K, \qquad
\int \tan x\, dx = -\ln|\cos x| + K
$$
:::

## Encadrement et calculs d'aires

:::formule Comparaison de primitives
Si $f(x) \leq g(x)$ sur $[a\,;\,b]$ :

$$
\int_a^b f(x)\, dx \leq \int_a^b g(x)\, dx
$$

Si $m \leq f(x) \leq M$ sur $[a\,;\,b]$ :

$$
m(b-a) \leq \int_a^b f(x)\, dx \leq M(b-a)
$$
:::

:::formule Formules de calcul intégral
Si $F$ est une primitive de $f$ :

$$
\int_a^b f(x)\, dx = F(b) - F(a)
$$

Propriétés :

$$
\int_a^b f = -\int_b^a f, \qquad
\int_a^b f = \int_a^c f + \int_c^b f, \qquad
\int_a^a f = 0
$$
:::

:::remarque Interprétation
Pour $f \geq 0$, $\displaystyle\int_a^b f(x)\, dx$ est l'aire comprise entre la courbe, l'axe des abscisses et les droites $x = a$, $x = b$. Si $f$ change de signe, l'intégrale est une **aire signée** : l'aire géométrique s'obtient en découpant aux zéros de $f$.
:::
