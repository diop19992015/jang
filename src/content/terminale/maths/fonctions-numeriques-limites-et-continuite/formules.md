## Limites : propriétés

:::formule Limites algébriques
Si $\lim\limits_{x \to a} f(x) = \ell$ et $\lim\limits_{x \to a} g(x) = m$ :

$$
\lim (f \pm g) = \ell \pm m, \qquad
\lim (f \times g) = \ell \times m, \qquad
\lim \frac{f}{g} = \frac{\ell}{m} \;(m \neq 0)
$$
:::

:::formule Limites remarquables
$$
\lim_{x \to a} x = a, \qquad
\lim_{x \to a} x^n = a^n, \qquad
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{e^x - 1}{x} = 1
$$
:::

:::formule Quotient de polynômes à l'infini
$$
\lim_{x \to +\infty} \frac{a_n x^n + \dots}{b_p x^p + \dots} =
\begin{cases}
0 & (n < p) \\[4pt]
\dfrac{a_n}{b_p} & (n = p) \\[4pt]
\pm\infty & (n > p)
\end{cases}
$$
:::

:::remarque Formes indéterminées
$\dfrac{0}{0}$ : factoriser ou conjuguer. $\infty - \infty$ : réduire au même dénominateur. $\dfrac{\infty}{\infty}$ : diviser numérateur et dénominateur par la plus forte puissance. On ne « calcule » jamais une forme indéterminée telle quelle.
:::

## Asymptotes

:::formule Asymptote verticale
$$
x = a \text{ asymptote verticale} \iff \lim_{x \to a^-} f(x) = \pm\infty \;\text{ ou }\; \lim_{x \to a^+} f(x) = \pm\infty
$$
:::

:::formule Asymptote horizontale
$$
y = \ell \text{ asymptote horizontale} \iff \lim_{x \to +\infty} f(x) = \ell \;\text{ ou }\; \lim_{x \to -\infty} f(x) = \ell \;(\ell \in \mathbb{R})
$$
:::

:::formule Asymptote oblique
$$
\lim_{x \to +\infty} \frac{f(x)}{x} = m \neq 0 \quad \text{et} \quad \lim_{x \to +\infty} \big(f(x) - mx\big) = b
\;\Longrightarrow\; y = mx + b
$$
:::

:::remarque Méthode complète
Chercher les valeurs d'exclusion du domaine (verticales) puis les deux limites à $\pm\infty$ : si la limite est finie → horizontale ; si elle vaut $\pm\infty$ → calculer $\dfrac{f(x)}{x}$ pour une oblique.
:::

## Fonctions composées

:::formule Théorème d'acheminement
$$
\lim_{x \to a} f(x) = L \;\text{ et }\; g \text{ continue en } L
\;\Longrightarrow\;
\lim_{x \to a} g\big(f(x)\big) = g(L)
$$
:::

:::remarque Attention
Le théorème ne s'applique pas si $g$ n'est pas continue en $L$, ou si $L$ est infini sans étude du comportement de $g$ à l'infini. Exemple : $\lim\limits_{x \to 0} \sin\!\left(\dfrac{1}{x}\right)$ n'existe pas.
:::

## Continuité

:::formule Définition
$$
f \text{ continue en } a \iff \lim_{x \to a} f(x) = f(a)
$$
:::

:::formule Domaines de continuité des usuelles
| Fonction | Ensemble de continuité |
| --- | --- |
| Polynôme $P$ | $\mathbb{R}$ |
| $\dfrac{1}{x^n}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $[0\,;\,+\infty[$ |
| $\ln x$ | $]0\,;\,+\infty[$ |
| $e^x$, $\sin x$, $\cos x$ | $\mathbb{R}$ |
:::

:::formule Opérations
Si $f$ et $g$ sont continues en $a$ : $f \pm g$, $f \cdot g$, $\dfrac{f}{g}$ ($g(a) \neq 0$) et $g \circ f$ sont continues en $a$.
:::

:::remarque Fonction morceau par morceau
Au point de jonction $a$ : calculer $\lim\limits_{x \to a} f(x)$ ; la fonction est continue en $a$ si et seulement si cette limite vaut $f(a)$. C'est ainsi qu'on détermine une constante inconnue.
:::

## Théorème des valeurs intermédiaires

:::formule TVI
$$
f \text{ continue sur } [a\,;\,b] \;\text{ et }\; k \text{ entre } f(a) \text{ et } f(b)
\;\Longrightarrow\; \exists\, c \in [a\,;\,b] : f(c) = k
$$
:::

:::formule Cas des zéros (corollaire)
$$
f \text{ continue sur } [a\,;\,b] \;\text{ et }\; f(a) \times f(b) < 0
\;\Longrightarrow\; \exists\, c \in ]a\,;\,b[ : f(c) = 0
$$
:::

:::formule Weierstrass
Une fonction continue sur un intervalle fermé borné $[a\,;\,b]$ y admet un **minimum** et un **maximum** (atteints).
:::

:::remarque Rédaction attendue au BAC
Toujours citer les trois points : « $f$ est continue sur $[a\,;\,b]$ », « $f(a) < 0 < f(b)$ », « donc par le théorème des valeurs intermédiaires, il existe $c \in [a\,;\,b]$ tel que $f(c) = 0$ ». Puis, si $f$ est monotone, ajouter l'unicité.
:::
