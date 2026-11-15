---
titre: Quiz — Étude de fonction
demo: false
---

## Question

Quel est le domaine de définition de $f(x) = \dfrac{1}{x(x-2)}$ ?

- [ ] $\mathbb{R}$
- [x] $\mathbb{R} \setminus \{0\,;\,2\}$
- [ ] $]2\,;\,+\infty[$
- [ ] $]0\,;\,2[$

> Il faut que le dénominateur soit non nul : $x(x-2) \neq 0$, donc $x \neq 0$ et $x \neq 2$. Le domaine est $\mathbb{R} \setminus \{0\,;\,2\}$, soit $]-\infty\,;\,0[ \cup \,]0\,;\,2[ \cup \,]2\,;\,+\infty[$.

## Question

La fonction $f(x) = \dfrac{2x}{1 + x^2}$ est :

- [ ] paire
- [x] impaire
- [ ] ni paire ni impaire
- [ ] périodique

> Le domaine $\mathbb{R}$ est symétrique, et $f(-x) = \dfrac{-2x}{1 + (-x)^2} = \dfrac{-2x}{1+x^2} = -f(x)$. La fonction est impaire : sa courbe est symétrique par rapport à l'origine.

## Question

Soit $f(x) = \dfrac{x+3}{x-1}$. Quelle est l'asymptote verticale de sa courbe ?

- [ ] $y = 1$
- [ ] $y = 0$
- [x] $x = 1$
- [ ] $x = -3$

> Le dénominateur s'annule en $x = 1$, et $\lim_{x \to 1^+} f(x) = +\infty$, $\lim_{x \to 1^-} f(x) = -\infty$ : la droite $x = 1$ est asymptote **verticale**. $y = 1$ serait une asymptote horizontale si la limite en $\pm\infty$ valait $1$ (elle vaut ici $1$, donc $y = 1$ est aussi asymptote horizontale, mais la question porte sur la verticale).

## Question

$f(x) = \dfrac{x^4 + 1}{x^2}$. Que peut-on dire de la courbe de $f$ en $\pm\infty$ ?

- [ ] Elle admet l'axe des abscisses comme asymptote horizontale.
- [ ] Elle admet la droite $y = x^2$ comme asymptote oblique.
- [x] Elle admet la parabole $y = x^2$ comme branche parabolique.
- [ ] Elle est constante en $\pm\infty$.

> En divisant : $f(x) = x^2 + \dfrac{1}{x^2}$, donc $f(x) - x^2 = \dfrac{1}{x^2} \to 0$ en $\pm\infty$ : la distance verticale à la courbe $y = x^2$ tend vers zéro. C'est une **branche parabolique** (une courbe), et non une asymptote (une droite).
