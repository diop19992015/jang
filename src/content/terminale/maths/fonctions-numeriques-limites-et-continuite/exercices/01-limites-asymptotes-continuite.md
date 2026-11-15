---
titre: Limites, asymptotes et continuité
difficulte: 1
type: entrainement
indices:
  - Pour la limite en 2, factorise d'abord le numérateur par (x - 2).
  - Pour les asymptotes, cherche les valeurs où le dénominateur s'annule puis calcule les limites à l'infini.
  - Pour la continuité en 0, calcule la limite de f en 0 puis compare-la à f(0).
---

## Énoncé

On considère la fonction $f$ définie par

$$
f(x) = \frac{x^2 - 4}{x(x - 2)}, \qquad x \neq 0 \;\text{et}\; x \neq 2.
$$

1. Calculer $\lim\limits_{x \to 2} f(x)$.
2. Calculer $\lim\limits_{x \to 0} f(x)$ et en déduire une asymptote verticale de $\mathcal{C}_f$.
3. Calculer $\lim\limits_{x \to +\infty} f(x)$ et en déduire une asymptote horizontale de $\mathcal{C}_f$.

On considère ensuite la fonction $g$ définie par

$$
g(x) =
\begin{cases}
\dfrac{\sin 4x}{2x} & \text{si } x \neq 0 \\[6pt]
k & \text{si } x = 0
\end{cases}
$$

4. Déterminer la valeur de $k$ pour que $g$ soit continue en $0$.

## Solution

**1. Limite en $2$.**

Pour $x \neq 2$, on peut simplifier :

$$
f(x) = \frac{(x-2)(x+2)}{x(x-2)} = \frac{x+2}{x}.
$$

Donc

$$
\lim_{x \to 2} f(x) = \lim_{x \to 2} \frac{x+2}{x} = \frac{4}{2} = 2.
$$

La fonction n'est pas définie en $2$ mais la limite existe et vaut $2$ : le point $(2\,;\,2)$ est un **point singulier isolé** (un « trou » dans la courbe).

**2. Limite en $0$ et asymptote verticale.**

Pour $x \neq 0$ et $x \neq 2$, $f(x) = \dfrac{x+2}{x}$. Quand $x \to 0$ :

- si $x \to 0^+$, alors $\dfrac{x+2}{x} \to +\infty$ (numérateur $\to 2 > 0$, dénominateur $\to 0^+$) ;
- si $x \to 0^-$, alors $\dfrac{x+2}{x} \to -\infty$.

Ainsi $\lim\limits_{x \to 0^+} f(x) = +\infty$ : la droite $x = 0$ (l'axe des ordonnées) est une **asymptote verticale** de $\mathcal{C}_f$.

**3. Limite à l'infini et asymptote horizontale.**

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x+2}{x} = \lim_{x \to +\infty} \left(1 + \frac{2}{x}\right) = 1.
$$

La limite est finie : la droite $y = 1$ est une **asymptote horizontale** de $\mathcal{C}_f$.

**4. Continuité en $0$ de $g$.**

$g$ est continue en $0$ si et seulement si $\lim\limits_{x \to 0} g(x) = g(0) = k$.

Or pour $x \neq 0$ :

$$
g(x) = \frac{\sin 4x}{2x} = \frac{\sin 4x}{4x} \times 2.
$$

En posant $u = 4x$ (qui tend vers $0$ quand $x \to 0$) et en utilisant $\lim\limits_{u \to 0} \dfrac{\sin u}{u} = 1$ :

$$
\lim_{x \to 0} g(x) = 1 \times 2 = 2.
$$

Donc $g$ est continue en $0$ si et seulement si $k = 2$.

:::remarque Vérification
Pour $k = 2$ : $\lim\limits_{x \to 0} g(x) = 2 = g(0)$. ✓ Pour tout autre $k$ (par exemple $k=0$), la limite existe mais ne vaut pas $g(0)$ : c'est une **rupture de continuité** en $0$.
:::
