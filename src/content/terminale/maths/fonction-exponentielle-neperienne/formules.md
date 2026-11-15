## Définition

:::formule Nombre de Néper
$$
e = \lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n \approx 2{,}71828
$$
:::

:::formule Exponentielle
$$
x \mapsto e^x, \qquad e^0 = 1, \qquad e^1 = e
$$
:::

## Propriétés algébriques

:::formule Calculs avec les exposants
$$
e^x \times e^y = e^{x+y}, \qquad
\frac{e^x}{e^y} = e^{x-y}, \qquad
\big(e^x\big)^y = e^{xy}
$$

$$
e^{-x} = \frac{1}{e^x}, \qquad
\frac{1}{e^{-x}} = e^{x}, \qquad
\sqrt{e^x} = e^{x/2}
$$
:::

:::remarque Mémo
**Produit** → exposants **additionnés** ; **quotient** → exposants **soustraits** ; **puissance d'une puissance** → exposants **multipliés**.
:::

## Variation et limites

:::formule Propriétés
- $e^x > 0$ pour tout $x \in \mathbb{R}$.
- $x \mapsto e^x$ est strictement **croissante** sur $\mathbb{R}$.
- $x \mapsto e^{-x}$ est strictement **décroissante** sur $\mathbb{R}$.
:::

:::formule Limites
$$
\lim_{x \to -\infty} e^x = 0, \qquad
\lim_{x \to +\infty} e^x = +\infty, \qquad
\lim_{x \to -\infty} x^n e^x = 0 \;(\forall n \in \mathbb{N})
$$

$$
\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \;(\forall n \in \mathbb{N}^*)
$$
:::

:::remarque Asymptote
La droite $y = 0$ est asymptote de $x \mapsto e^x$ en $-\infty$ : l'exponentielle s'en approche indéfiniment mais reste strictement positive.
:::

## Dérivée

:::formule Dérivées
$$
\big(e^x\big)' = e^x, \qquad
\big(e^{-x}\big)' = -e^{-x}, \qquad
\big(e^{u(x)}\big)' = u'(x)\, e^{u(x)}
$$
:::

:::formule Convexité et inégalité fondamentale
$$
\big(e^x\big)'' = e^x > 0 \;\Longrightarrow\; e^x \geq 1 + x \quad (\forall x \in \mathbb{R})
$$

avec égalité si et seulement si $x = 0$.
:::

:::remarque Tangente remarquable
La tangente à la courbe de $x \mapsto e^x$ en $(0\,;\,1)$ a pour équation $y = x + 1$ : la courbe est au-dessus de cette droite partout.
:::

## Équations et inéquations

:::formule Équations
$$
e^{u(x)} = e^{v(x)} \iff u(x) = v(x)
$$

$$
e^{u(x)} = k \begin{cases}
\text{aucune solution} & \text{si } k \leq 0 \\[4pt]
u(x) = \ln k & \text{si } k > 0
\end{cases}
$$
:::

:::formule Inéquations (fonction croissante)
$$
e^{u} < e^{v} \iff u < v, \qquad
e^{u} \leq e^{v} \iff u \leq v, \qquad
e^{u} > k
$$

Si $k \leq 0$ : $e^u > k$ est **vrai pour tout** $x$ (car $e^u > 0$).
:::

:::remarque Points d'attention
- $e^{x^2} = 1 \iff x^2 = 0 \iff x = 0$ (et non $x = \pm 1$).
- $e^{2x} < 1 \iff 2x < 0 \iff x < 0$ (car $1 = e^0$).
- Toujours vérifier que la solution trouvée appartient bien au domaine.
:::

## Étude de type $P(x)\, e^x$

:::formule Dérivée produit
$$
\big(P(x)\, e^x\big)' = \big(P'(x) + P(x)\big) e^x
$$

Comme $e^x > 0$, le signe de la dérivée est celui de $P'(x) + P(x)$.
:::

:::remarque Méthode
1. Dérivée puis factorisation par $e^x$.
2. Signe de l'autre facteur (polynôme) → tableau de variations.
3. Limites : en $-\infty$, $P(x)e^x \to 0$ ; en $+\infty$, signe du plus haut degré de $P$.
4. Asymptote $y = 0$ à $-\infty$ si $P$ est un polynôme.
:::
