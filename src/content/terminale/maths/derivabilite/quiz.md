---
titre: Quiz — Dérivabilité
demo: false
---

## Question

$f(x) = x^2 - 4x$. Que vaut le nombre dérivé $f'(2)$ ?

- [ ] $-4$
- [ ] $2$
- [x] $0$
- [ ] $4$

> $f'(x) = 2x - 4$, donc $f'(2) = 2 \times 2 - 4 = 0$. La tangente est horizontale en $2$ : c'est le point de passage d'un extremum (ici un minimum, car $f'(x) = 2(x-2)$ change de signe en $2$).

## Question

Quelle est l'équation de la tangente à la courbe de $f(x) = x^2$ au point d'abscisse $3$ ?

- [ ] $y = 6x$
- [ ] $y = 6x + 3$
- [x] $y = 6x - 9$
- [ ] $y = 3x - 9$

> $f(3) = 9$ et $f'(x) = 2x$ donne $f'(3) = 6$. La tangente s'écrit $y = 6(x-3) + 9 = 6x - 18 + 9 = 6x - 9$. Attention : $y = f'(a)x + f(a)$ serait faux.

## Question

Laquelle de ces affirmations est VRAIE ?

- [ ] Si $f$ est continue en $a$, alors $f$ est dérivable en $a$.
- [x] Si $f$ est dérivable en $a$, alors $f$ est continue en $a$.
- [ ] $f$ dérivable en $a$ et $f'(a) = 0$ garantit un extremum en $a$.
- [ ] La fonction $|x|$ est dérivable en $0$.

> Le théorème fondamental est : dérivable $\Rightarrow$ continue. La réciproque est fausse ($|x|$ est continue mais pas dérivable en $0$), et $f'(a) = 0$ n'est qu'une condition **nécessaire** : $x^3$ en $0$ n'a pas d'extremum.

## Question

$f$ est dérivable sur $[0\,;\,2]$, avec $f(0) = f(2) = 5$. Que garantit le théorème de Rolle ?

- [ ] $f$ est constante sur $[0\,;\,2]$.
- [ ] $f'(0) = f'(2) = 0$.
- [x] Il existe $c \in \,]0\,;\,2[$ tel que $f'(c) = 0$.
- [ ] $f$ admet un maximum en $1$.

> Rolle exige : continue sur $[a\,;\,b]$, dérivable sur $]a\,;\,b[$ et $f(a) = f(b)$. Ces hypothèses étant réunies, il existe $c \in \,]0\,;\,2[$ tel que $f'(c) = 0$, c'est-à-dire une tangente horizontale entre les deux bornes. Rien n'annonce que $c = 1$ ni que $f$ soit constante.
