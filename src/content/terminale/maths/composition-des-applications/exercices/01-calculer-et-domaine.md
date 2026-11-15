---
titre: Calculer g∘f et déterminer son domaine
difficulte: 1
type: entrainement
indices:
  - Remplace chaque x par f(x) dans l'expression de g, puis développe.
  - Pour le domaine, écris d'abord le domaine de f, puis la condition f(x) ∈ D_g.
  - Ne simplifie jamais une expression avant d'avoir écrit son domaine de validité.
---

## Énoncé

Soient les applications $f$ et $g$ définies par :

$$
f(x) = 2x + 3 \qquad \text{et} \qquad g(x) = x^2 - 1.
$$

1. Calculer $(g \circ f)(x)$.
2. Calculer $(f \circ g)(x)$ et conclure sur la commutativité de la composition.
3. Déterminer l'ensemble de définition de $g \circ f$.
4. Soient $u(x) = \dfrac{1}{x-1}$ et $v(x) = \sqrt{x}$. Déterminer l'ensemble de définition de $v \circ u$.
5. Résoudre l'équation $(g \circ f)(x) = 0$.

## Solution

**1. Calcul de $(g \circ f)(x)$.**

On applique $f$ d'abord, puis $g$ :

$$
(g \circ f)(x) = g\big(2x+3\big) = (2x+3)^2 - 1.
$$

On développe avec l'identité remarquable $(a+b)^2 = a^2 + 2ab + b^2$ :

$$
(g \circ f)(x) = 4x^2 + 12x + 9 - 1 = 4x^2 + 12x + 8.
$$

**2. Calcul de $(f \circ g)(x)$.**

$$
(f \circ g)(x) = f\big(x^2-1\big) = 2(x^2-1) + 3 = 2x^2 - 2 + 3 = 2x^2 + 1.
$$

Or $(g \circ f)(x) = 4x^2 + 12x + 8 \neq 2x^2 + 1$ par exemple pour $x = 0$ ($8 \neq 1$).

**Conclusion :** $g \circ f \neq f \circ g$, la composition n'est pas commutative.

**3. Ensemble de définition de $g \circ f$.**

- $f$ est définie sur $\mathbb{R}$ (fonction polynôme).
- $g$ est définie sur $\mathbb{R}$ (fonction polynôme).

La condition $f(x) \in D_g$ est donc $2x+3 \in \mathbb{R}$, toujours vraie.

$$
\mathrm{Dom}(g \circ f) = \mathbb{R}.
$$

**4. Ensemble de définition de $v \circ u$.**

- $u(x) = \dfrac{1}{x-1}$ est définie sur $\mathbb{R} \setminus \{1\}$ (dénominateur non nul).
- $v(t) = \sqrt{t}$ est définie sur $[0\,;\,+\infty[$.

Il faut donc $x \neq 1$ **et** $u(x) \geq 0$ :

$$
\frac{1}{x-1} \geq 0 \iff x - 1 > 0 \iff x > 1.
$$

(Le numérateur $1$ est positif, donc le quotient est positif exactement quand le dénominateur l'est.)

$$
\mathrm{Dom}(v \circ u) = \,]1\,;\,+\infty[.
$$

On vérifie : pour $x = 2$, $u(2) = 1$ et $\sqrt{1}$ existe ; pour $x = 0$, $u(0) = -1$ et $\sqrt{-1}$ n'existe pas, ce qui confirme l'exclusion.

**5. Résolution de $(g \circ f)(x) = 0$.**

$$
4x^2 + 12x + 8 = 0 \iff x^2 + 3x + 2 = 0 \iff (x+1)(x+2) = 0.
$$

On divise par $4$ (possible car $4 \neq 0$), puis on factorise $x^2+3x+2 = (x+1)(x+2)$.

Les solutions sont $x = -1$ et $x = -2$. Toutes deux appartiennent au domaine $\mathbb{R}$.

$$
S = \{-2\,;\,-1\}.
$$

:::remarque Vérification
On peut aussi résoudre directement $(2x+3)^2 - 1 = 0$, soit $(2x+3)^2 = 1$, donc $2x+3 = 1$ (d'où $x=-1$) ou $2x+3 = -1$ (d'où $x=-2$). Mêmes solutions.
:::
