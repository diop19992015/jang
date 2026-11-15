---
titre: Quiz — Composition des applications
demo: false
---

## Question

Soient $f(x) = 3x - 1$ et $g(x) = x^2$. Que vaut $(g \circ f)(2)$ ?

- [ ] $37$
- [x] $25$
- [ ] $35$
- [ ] $16$

> $(g \circ f)(2) = g(f(2))$. On calcule d'abord $f(2) = 3 \times 2 - 1 = 5$, puis $g(5) = 5^2 = 25$. On applique $f$ en premier, car elle est écrite à droite.

## Question

$f(x) = \sqrt{x-1}$ est définie sur $[1\,;\,+\infty[$ et $g(t) = \ln t$ est définie sur $]0\,;\,+\infty[$. Quel est l'ensemble de définition de $g \circ f$ ?

- [ ] $[1\,;\,+\infty[$
- [x] $]1\,;\,+\infty[$
- [ ] $]0\,;\,+\infty[$
- [ ] $]-\infty\,;\,1[$

> Il faut $x \geq 1$ (domaine de $f$) **et** $\sqrt{x-1} > 0$ (domaine de $g$), soit $x > 1$. Le point $x=1$ est exclu car $\ln 0$ n'existe pas.

## Question

$f$ est décroissante et $g$ est décroissante sur les intervalles concernés. Que peut-on dire de $g \circ f$ ?

- [ ] Elle est décroissante.
- [x] Elle est croissante.
- [ ] On ne peut pas conclure.
- [ ] Elle est constante.

> Deux décroissances composées donnent une croissance : le nombre de fonctions décroissantes est pair (2). $x \mapsto -x$ puis $t \mapsto -t$ illustrent le cas : $(-(-x)) = x$.

## Question

Parmi les propositions suivantes, laquelle est VRAIE ?

- [ ] $(g \circ f)(x) = f(g(x))$ pour tout $x$
- [ ] Le domaine de $g \circ f$ est toujours $D_f$
- [x] $(g \circ f)(x) = g(f(x))$ et la composition n'est pas commutative
- [ ] $(g \circ f) \circ h = f \circ (g \circ h)$ est fausse

> Par définition $(g \circ f)(x) = g(f(x))$. La composition est associative ($(h \circ g) \circ f = h \circ (g \circ f)$, donc la dernière proposition est fausse) mais pas commutative, et le domaine de $g \circ f$ peut être strictement inclus dans $D_f$.
