---
titre: Quiz — Calcul intégral
demo: false
---

## Question

Quelle est une primitive de $f(x) = 3x^2$ ?

- [ ] $6x$
- [x] $x^3$
- [ ] $\dfrac{3x^3}{2}$
- [ ] $x^2$

> On applique $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1}$ : $\int 3x^2\,dx = 3 \times \dfrac{x^3}{3} = x^3 + k$, et $x^3$ est donc une primitive (car $(x^3)' = 3x^2$). $6x$ est la dérivée de $3x^2$ (donc l'inverse de ce qu'on cherche), $\dfrac{3x^3}{2}$ est la primitive de $\dfrac{3}{2}x^2$, et $(x^2)' = 2x \neq 3x^2$.

## Question

Que vaut $\displaystyle\int_1^e \frac{1}{x}\,dx$ ?

- [ ] $e$
- [x] $1$
- [ ] $\dfrac{1}{e}$
- [ ] $ln(1) = 0$

> La primitive de $\dfrac{1}{x}$ est $ln\|x\|$. Sur $[1\,;\,e]$ : $ln(e) - ln(1) = 1 - 0 = 1$.

## Question

$f(x) = x^2 - 4$ et $g(x) = 0$ (axe des abscisses). Quelle expression donne l'aire $S$ comprise entre la courbe de $f$ et l'axe des abscisses sur $[0\,;\,3]$ ?

- [ ] $\displaystyle\int_0^3 (x^2 - 4)\,dx$
- [ ] $\displaystyle\int_0^3 (4 - x^2)\,dx$
- [x] $\displaystyle\int_0^2 (4 - x^2)\,dx + \int_2^3 (x^2 - 4)\,dx$
- [ ] $0$

> Sur $[0\,;\,2]$, $f(x) \leq 0$ (l'aire vaut $\int_0^2 (4-x^2)\,dx$) ; sur $[2\,;\,3]$, $f(x) \geq 0$ (aire $= \int_2^3 (x^2-4)\,dx$). On additionne les deux aires positives. Intégrer directement $x^2-4$ donnerait la **somme signée**, pas l'aire.

## Question

$F(x) = \displaystyle\int_0^x (t^2 + 1)\,dt$. Que vaut $F'(2)$ ?

- [ ] $\dfrac{8}{3} + 2$
- [ ] $3$
- [x] $5$
- [ ] $0$

> D'après la formule de Leibniz, $F'(x) = x^2 + 1$ (on remplace la borne variable $x$ dans l'intégrande). Donc $F'(2) = 2^2 + 1 = 5$. La valeur $\dfrac{8}{3} + 2$ serait $F(2)$ (l'intégrale évaluée), pas $F'(2)$.
