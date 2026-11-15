---
titre: "Quiz — Primitives"
demo: false
---

## Question

Quelle est une primitive de $f(x) = 6x^2$ sur $\mathbb{R}$ ?

- [ ] $12x$
- [x] $2x^3 + K$
- [ ] $6x^3 + K$
- [ ] $2x^3$

> On cherche $F$ tel que $F' = 6x^2$. Or $(x^3)' = 3x^2$, donc $(2x^3)' = 6x^2$. Une primitive s'écrit $2x^3 + K$ : la constante est indispensable (d'où l'absence de $K$ dans la dernière option qui la rend incomplète).

## Question

Que vaut $\displaystyle\int \frac{1}{x}\, dx$ ?

- [ ] $\ln x + K$
- [x] $\ln|x| + K$
- [ ] $\dfrac{1}{x^2} + K$
- [ ] $x \ln x + K$

> La dérivée de $\ln|x|$ est $\dfrac{1}{x}$ pour tout $x \neq 0$ (y compris $x < 0$ : $(\ln(-x))' = \dfrac{-1}{-x} = \dfrac{1}{x}$). Écrire $\ln x$ limiterait le domaine à $x > 0$.

## Question

Comment calcule-t-on $\displaystyle\int e^{3x}\, dx$ ?

- [ ] $e^{3x} + K$
- [x] $\dfrac{1}{3} e^{3x} + K$
- [ ] $3 e^{3x} + K$
- [ ] $\dfrac{e^{3x}}{x} + K$

> $(e^{3x})' = 3e^{3x}$ : il manque un facteur $\dfrac{1}{3}$, donc $\displaystyle\int e^{3x}\, dx = \dfrac{1}{3} e^{3x} + K$. Vérification : $\left(\dfrac{1}{3} e^{3x}\right)' = \dfrac{1}{3} \cdot 3 e^{3x} = e^{3x}$ ✓.

## Question

Soit $F$ une primitive de $f(x) = 3x^2 + 2$ telle que $F(1) = 4$. Que vaut $F(2)$ ?

- [ ] $8$
- [x] $13$
- [ ] $12$
- [ ] $4$

> Générale : $F(x) = x^3 + 2x + K$. $F(1) = 1 + 2 + K = 4$ donne $K = 1$, donc $F(x) = x^3 + 2x + 1$ et $F(2) = 8 + 4 + 1 = 13$.
