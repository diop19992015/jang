---
titre: Quiz — Factorisation des polynômes
demo: false
---

## Question

$P(x) = x^3 - 3x + 2$. Quelle est la valeur du reste de la division euclidienne de $P$ par $x - 1$ ?

- [ ] $1$
- [ ] $2$
- [x] $0$
- [ ] $-2$

> Le reste de la division par $x - a$ vaut $P(a)$ : ici $P(1) = 1 - 3 + 2 = 0$. Donc le reste est nul, ce qui signifie que $(x-1)$ divise $P$.

## Question

Le schéma de Horner donne, pour $P(x) = 2x^3 - 5x^2 + x - 4$ et $a = 3$, les résultats $2\,;\,1\,;\,4\,;\,8$. Que peut-on en déduire ?

- [ ] $P(3) = 4$ et $Q(x) = 2x^2 + x + 4$
- [x] $P(3) = 8$ et $Q(x) = 2x^2 + x + 4$
- [ ] $P(3) = 8$ et $Q(x) = 2x^3 + x^2 + 4x$
- [ ] $P(3) = 2$ et $Q(x) = 8$

> Le dernier nombre du schéma est la valeur de $P$ en $a$ : $P(3) = 8$. Les nombres précédents, $2\,;\,1\,;\,4$, sont les coefficients du quotient de degré $2$ : $Q(x) = 2x^2 + x + 4$.

## Question

Quelle est la forme factorisée de $P(x) = x^2 - 5x + 6$ ?

- [ ] $(x+2)(x+3)$
- [x] $(x-2)(x-3)$
- [ ] $(x-1)(x-6)$
- [ ] $P$ n'est pas factorisable sur $\mathbb{R}$

> $\Delta = 25 - 24 = 1 > 0$ et les racines sont $x_1 = \dfrac{5-1}{2} = 2$ et $x_2 = \dfrac{5+1}{2} = 3$. Donc $P(x) = (x-2)(x-3)$. On vérifie : $(x-2)(x-3) = x^2 - 5x + 6$.

## Question

Soit $f(x) = \dfrac{x-2}{x+1}$. Sur $]-1\,;\,2[$, quel est le signe de $f$ ?

- [ ] $f(x) > 0$
- [x] $f(x) < 0$
- [ ] $f(x) = 0$ sur tout l'intervalle
- [ ] $f$ n'est pas définie sur $]-1\,;\,2[$

> Pour $x \in \,]-1\,;\,2[$ (par exemple $x=0$) : le numérateur $x-2$ est négatif, le dénominateur $x+1$ est positif, donc le quotient est négatif. Le point $-1$ est un pôle : $f$ n'y est pas définie, mais elle l'est sur tout l'intervalle ouvert.
