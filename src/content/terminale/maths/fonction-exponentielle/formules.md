## Propriétés algébriques

:::formule Opérations
Pour tous réels $x$, $y$ et tout réel $n$ :

$$
e^{x+y} = e^x \times e^y
$$

$$
e^{x-y} = \frac{e^x}{e^y}
$$

$$
(e^x)^n = e^{nx}, \qquad e^{-x} = \frac{1}{e^x}, \qquad e^x \cdot e^{-x} = 1
$$
:::

:::formule Positivité
$$
e^x > 0 \;\; \text{pour tout } x \in \mathbb{R}, \qquad e^0 = 1
$$

Conséquence : $e^x = k$ n'a **pas de solution** si $k \leq 0$.
:::

:::remarque Faux à éviter
$$
e^{x+y} \neq e^x + e^y, \qquad
e^{2x} \neq 2e^x, \qquad
e^x + e^x = 2e^x \neq e^{2x}
$$
:::

## Étude de $x \mapsto e^x$

:::formule Définition et variations
| | |
| --- | --- |
| Domaine | $\mathbb{R}$ |
| $f(0)$ | $1$ : point $A(0\,;\,1)$ |
| Dérivée | $(e^x)' = e^x > 0$ |
| Variations | strictement croissante sur $\mathbb{R}$ |
| Positivité | courbe toujours **au-dessus** de l'axe des abscisses |
| Limites | $\lim\limits_{x \to -\infty} e^x = 0$ ; $\lim\limits_{x \to +\infty} e^x = +\infty$ |
| Asymptote | $y = 0$ est asymptote horizontale **à gauche** |
:::

:::formule Réciproque (fonction $ln$)
$$
e^{ln(x)} = x \;\;(x > 0), \qquad ln(e^t) = t
$$

$x \mapsto e^x$ est bijective de $\mathbb{R}$ sur $]0\,;\,+\infty[$.
:::

## Limites

:::formule Croissance comparée
$$
\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \;\;(n \in \mathbb{R})
$$

$$
\lim_{x \to +\infty} \frac{x^n}{e^x} = 0 \;\;(n \in \mathbb{R})
$$

$$
\lim_{x \to -\infty} x^n\,e^x = 0, \qquad
\lim_{x \to -\infty} \frac{e^x}{x^n} = 0
$$
:::

:::formule Limites types de fonctions composées
$$
\lim_{x \to +\infty} \frac{x}{e^x} = 0, \qquad
\lim_{x \to +\infty} \frac{e^x}{e^x + 1} = 1, \qquad
\lim_{x \to -\infty} e^x = 0
$$

Formes $\dfrac{\infty}{\infty}$ ou $\infty \times 0$ : **factoriser par $e^x$** (le plus grand facteur).
:::

:::remarque Ordre de grandeur en $+\infty$
$$
ln\,x \;\ll\; x^n \;\ll\; e^x
$$
:::

## Équations

:::formule Équations simples
$$
e^x = k \iff
\begin{cases}
x = ln(k) & \text{si } k > 0\\
\varnothing & \text{si } k \leq 0
\end{cases}
$$

$$
e^{u(x)} = e^{v(x)} \iff u(x) = v(x)
$$

$$
e^{u(x)} = k\,e^{v(x)} \;(k > 0) \iff u(x) = v(x) + ln(k)
$$
:::

:::formule Trinôme en $e^x$
$$
a\,(e^x)^2 + b\,e^x + c = 0
$$

Poser $X = e^x$ (avec $X > 0$) : résoudre $aX^2 + bX + c = 0$, **éliminer** les racines nulles ou négatives, puis $x = ln(X)$.
:::

:::formule Exemple type
$$
e^{2x} - 3e^x + 2 = 0 \iff (e^x - 1)(e^x - 2) = 0 \iff x = 0 \;\text{ ou }\; x = ln(2)
$$
:::

## Inéquations

:::formule Passage au logarithme
$e^x$ est strictement croissante :

$$
e^u < e^v \iff u < v
$$

$$
e^x < k \;(k > 0) \iff x < ln(k), \qquad
e^x > k \;(k > 0) \iff x > ln(k)
$$

Pour $k \leq 0$ : $e^x \leq k$ est **jamais** vérifié ; $e^x \geq k$ est **toujours** vérifié.
:::

## Dérivées

:::formule Formules
$$
(e^x)' = e^x
$$

$$
\big(e^{u(x)}\big)' = u'(x)\,e^{u(x)}
$$

$$
\big(u(x)\,e^x\big)' = \big(u'(x) + u(x)\big)\,e^x
$$

$$
\left(\frac{e^x}{u(x)}\right)' = \frac{e^x\,\big(u(x) - u'(x)\big)}{\big(u(x)\big)^2}
$$
:::

:::remarque Méthode de factorisation
Après dérivation, **factoriser par $e^x$** : comme $e^x > 0$, le signe de la dérivée est celui de l'autre facteur. Exemple :

$$
f(x) = x\,e^x \;\Rightarrow\; f'(x) = (x+1)\,e^x, \qquad \text{signe de } f' = \text{signe de } (x+1).
$$
:::

## À mémoriser absolument

- $e^x > 0$ toujours ; $e^0 = 1$ ; $(e^x)' = e^x$ ; croissante.
- $e^{x+y} = e^x e^y$, $e^{x-y} = e^x/e^y$, $(e^x)^n = e^{nx}$, $e^{-x} = 1/e^x$.
- $\lim_{-\infty} e^x = 0$ (asymptote $y = 0$ à gauche) ; $e^x \to +\infty$ en $+\infty$.
- $e^x = k$ : solution $ln(k)$ seulement si $k > 0$.
- $e^u = e^v \iff u = v$ ; $e^u < e^v \iff u < v$.
- Croissance comparée : $x^n/e^x \to 0$ en $+\infty$ ; $x^n e^x \to 0$ en $-\infty$.
