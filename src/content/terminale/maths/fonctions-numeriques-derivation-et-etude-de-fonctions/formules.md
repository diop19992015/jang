## Dérivées usuelles et opérations

:::formule Dérivées usuelles
| $f(x)$ | $f'(x)$ | Domaine |
| --- | --- | --- |
| $x^n$ ($n \in \mathbb{Z}$) | $n x^{n-1}$ | $\mathbb{R}$ ou $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0\,;\,+\infty[$ |
| $\ln x$ | $\dfrac{1}{x}$ | $]0\,;\,+\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
:::

:::formule Somme, produit, quotient
$$
(u+v)' = u' + v', \qquad (ku)' = k u'
$$

$$
(uv)' = u'v + uv', \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \;(v \neq 0)
$$
:::

:::remarque Pièges classiques
$(uv)' \neq u'v'$ et $\left(\dfrac{u}{v}\right)' \neq \dfrac{u'}{v'}$. La dérivée d'un produit fait apparaître les **deux** dérivées à tour de rôle.
:::

## Fonctions composées

:::formule Règle de la chaîne
$$
\big(v(u(x))\big)' = u'(x)\, v'\big(u(x)\big)
$$
:::

:::formule Formules composées à connaître
$$
\big(\sqrt{u}\big)' = \frac{u'}{2\sqrt{u}}, \qquad
\big(\ln u\big)' = \frac{u'}{u}, \qquad
\big(e^{u}\big)' = u' e^{u}
$$

$$
\big(\sin u\big)' = u' \cos u, \qquad
\big(\cos u\big)' = -u' \sin u, \qquad
\big(u^n\big)' = n u^{n-1} u'
$$
:::

:::remarque Méthode
Identifier $u(x)$ (l'intérieur), calculer $u'(x)$, dériver l'extérieur en gardant $u(x)$, puis multiplier. Exemple : $\big(\ln(1+x^2)\big)' = \dfrac{2x}{1+x^2}$.
:::

## Fonction réciproque

:::formule Théorème de la réciproque
$$
\big(f^{-1}\big)'(b) = \frac{1}{f'(a)}, \qquad \text{où } a = f^{-1}(b), \; f'(a) \neq 0
$$
:::

:::remarque Interprétation
La courbe de $f^{-1}$ est le symétrique de celle de $f$ par $y = x$ : les pentes de tangentes correspondantes sont **inverses**.
:::

## Accroissements finis

:::formule Théorème
$f$ continue sur $[a\,;\,b]$ et dérivable sur $]a\,;\,b[$ :

$$
\exists\, \xi \in \,]a\,;\,b[ : \quad f(b) - f(a) = f'(\xi)\,(b-a)
$$
:::

:::formule Encadrement
$$
\min_{[a;b]} f' \times (b-a) \;\leq\; f(b) - f(a) \;\leq\; \max_{[a;b]} f' \times (b-a)
$$
:::

:::remarque Usage au BAC
Borner $\ln 1{,}1$, $e^{0{,}1} - 1$, $\sqrt{1{,}04} - 1$… sans calculatrice : poser $f(x) = \ln x$ (ou $e^x$, $\sqrt{x}$), encadrer $f'$ sur l'intervalle, multiplier par la longueur de l'intervalle.
:::

## Étude de fonction

:::formule Équation de la tangente
$$
y = f'(a)(x - a) + f(a)
$$
:::

:::formule Signe et variations
- $f' > 0$ sur $I$ $\Rightarrow$ $f$ strictement croissante sur $I$.
- $f' < 0$ sur $I$ $\Rightarrow$ $f$ strictement décroissante sur $I$.
- $f'$ s'annule en changeant de signe $\Rightarrow$ extremum local.
:::

:::formule Asymptotes d'une fonction rationnelle $f = \dfrac{P}{Q}$
- Zéros de $Q$ : candidats à l'asymptote **verticale** (si $f \to \pm\infty$).
- $\deg P < \deg Q$ : asymptote horizontale $y = 0$.
- $\deg P = \deg Q + 1$ : asymptote oblique $y = mx + b$ avec $m = \dfrac{\text{chef de } P}{\text{chef de } Q}$ et $b = \lim\limits_{x \to +\infty} \big(f(x) - mx\big)$.
:::

:::remarque Points remarquables
Toujours chercher : points où $f(x) = 0$ (racines), point où $x = 0$ ($y$-intercept), tangentes horizontales ($f' = 0$), limites aux bornes du domaine.
:::
