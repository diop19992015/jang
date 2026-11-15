---
titre: "Quiz — Fonctions numériques : limites et continuité"
demo: false
---

## Question

Quelle est la valeur de $\lim\limits_{x \to 3} \dfrac{x^2-9}{x-3}$ ?

- [ ] La limite n'existe pas
- [x] $6$
- [ ] $0$
- [ ] $3$

> On factorise : $x^2-9 = (x-3)(x+3)$. Pour $x \neq 3$, on simplifie et il reste $x+3$, qui tend vers $6$ quand $x \to 3$. La forme était $\dfrac{0}{0}$ : il fallait factoriser avant de conclure.

## Question

La fonction $f(x) = \dfrac{2x^2+1}{x-1}$ admet quelle asymptote verticale ?

- [ ] $x = -1$
- [x] $x = 1$
- [ ] $y = 1$
- [ ] $y = 2x+2$

> Le dénominateur s'annule en $x = 1$ et $|f(x)| \to +\infty$ quand $x \to 1$ : l'asymptote verticale est la droite $x = 1$. La droite $y = 2x+2$ est l'asymptote **oblique**, et $y = 1$ serait une asymptote horizontale inexistante ici.

## Question

Si $\lim\limits_{x \to 0} f(x) = 1$ et $g(u) = \ln u$, que vaut $\lim\limits_{x \to 0} g\big(f(x)\big)$ ?

- [ ] $1$
- [x] $0$
- [ ] $1$
- [ ] La limite n'existe pas

> Le logarithme est continue en $1$ : par le théorème d'acheminement, $\lim\limits_{x \to 0} \ln\big(f(x)\big) = \ln\big(\lim\limits_{x \to 0} f(x)\big) = \ln 1 = 0$.

## Question

Pour montrer que l'équation $x^3 + x - 1 = 0$ admet une solution dans $[0\,;\,1]$, quel argument est indispensable ?

- [ ] Calculer $f(0)$ et $f(1)$ seulement
- [ ] Montrer que $f$ est dérivable
- [x] Utiliser le théorème des valeurs intermédiaires avec la continuité de $f$ sur $[0\,;\,1]$
- [ ] Calculer $f'(x)$ et résoudre $f'(x) = 0$

> $f(0) = -1$ et $f(1) = 1$ ont des signes contraires, mais cela ne suffit pas : il faut la **continuité** de $f$ (polynôme, donc continue) et le TVI pour conclure à l'existence. La dérivée sert ensuite à l'unicité ($f' > 0$).
