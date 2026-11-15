---
titre: Quiz — Limite et continuité
demo: false
---

## Question

Que vaut $\lim\limits_{x \to 3} \dfrac{x^2 - 9}{x - 3}$ ?

- [ ] $0$
- [x] $6$
- [ ] Le nombre $0/0$ n'est pas défini, donc la limite n'existe pas
- [ ] $3$

> Pour $x = 3$, on obtient la forme indéterminée $\frac{0}{0}$ : la substitution est interdite. On factorise $x^2 - 9 = (x-3)(x+3)$, puis on simplifie par $x-3$ (possible car $x \neq 3$ au voisinage de $3$) : la limite vaut $3 + 3 = 6$.

## Question

$f$ est définie par $f(x) = \dfrac{x^2 - 4}{x - 2}$ si $x \neq 2$ et $f(2) = 5$. Que peut-on dire ?

- [ ] $f$ est continue en $2$ car $f(2)$ existe.
- [ ] $f$ est continue en $2$ car la limite existe.
- [x] $f$ est discontinue en $2$ car $\lim_{x \to 2} f(x) = 4 \neq 5 = f(2)$.
- [ ] $f$ est discontinue en $2$ car la limite n'existe pas.

> La continuité en $a$ exige les trois conditions : $f(a)$ existe, la limite existe, et $\lim_{x \to a} f(x) = f(a)$. Ici $f(x) = x + 2$ pour $x \neq 2$, donc la limite vaut $4$, qui diffère de $f(2) = 5$ : la troisième condition échoue.

## Question

Que vaut $\lim\limits_{x \to +\infty} \dfrac{2x^2 + 5}{3x^2 - 1}$ ?

- [ ] $+\infty$
- [ ] $0$
- [x] $\dfrac{2}{3}$
- [ ] $\dfrac{5}{-1}$

> On divise tous les termes par $x^2$ (la plus haute puissance) : la limite vaut le quotient des coefficients de $x^2$, à savoir $\dfrac{2}{3}$. En effet $\lim \frac{5}{x^2} = 0$ et $\lim \frac{-1}{x^2} = 0$.

## Question

Quelle est la condition pour que $\lim\limits_{x \to a} f(x)$ existe ?

- [ ] Que $f(a)$ existe.
- [ ] Que $f$ soit dérivable en $a$.
- [x] Que les limites à gauche et à droite existent et soient égales.
- [ ] Que $f$ soit définie autour de $a$ et $f(a) = 0$.

> $\lim_{x \to a} f(x)$ existe si et seulement si $\lim_{x \to a^-} f(x)$ et $\lim_{x \to a^+} f(x)$ existent et sont **égales**. La valeur $f(a)$ n'importe pas, et la dérivabilité est une notion plus forte qui n'est pas nécessaire.
