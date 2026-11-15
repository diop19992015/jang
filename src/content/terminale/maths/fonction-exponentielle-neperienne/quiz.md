---
titre: Quiz — Fonction exponentielle népérienne
demo: false
---

## Question

Quelle est la valeur de $\dfrac{e^4}{e}$ ?

- [ ] $e^5$
- [x] $e^3$
- [ ] $e^4$
- [ ] $e$

> Au quotient, on **soustrait** les exposants : $\dfrac{e^4}{e^1} = e^{4-1} = e^3$.

## Question

Quelle est la limite de $e^x$ quand $x \to -\infty$ ?

- [ ] $+\infty$
- [ ] $1$
- [x] $0$
- [ ] La limite n'existe pas

> Quand $x$ devient très négatif, $e^x = \dfrac{1}{e^{|x|}}$ a un dénominateur qui diverge : la fraction tend vers $0$. La courbe a pour asymptote la droite $y = 0$ en $-\infty$, mais $e^x$ reste strictement positif.

## Question

Résoudre $e^{3x - 1} = e^2$.

- [ ] $x = \dfrac{1}{3}$
- [x] $x = 1$
- [ ] $x = \dfrac{2}{3}$
- [ ] Aucune solution

> L'exponentielle est strictement croissante : $e^{u} = e^{v} \iff u = v$. Donc $3x - 1 = 2$, soit $3x = 3$ et $x = 1$.

## Question

Comment dériver $f(x) = x^2 e^x$ ?

- [ ] $f'(x) = 2x\, e^x$
- [ ] $f'(x) = x^2 e^x + 2x$
- [x] $f'(x) = (x^2 + 2x)\, e^x$
- [ ] $f'(x) = 2x\, e^x + x^2$

> Règle du produit avec $u = x^2$ et $v = e^x$ : $f'(x) = u'v + uv' = 2x\, e^x + x^2 e^x = (x^2 + 2x)\, e^x$. On factorise toujours par $e^x$, qui est positif.
