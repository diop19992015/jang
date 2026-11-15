---
titre: Primitives, intégrales et aires
difficulte: 1
type: entrainement
indices:
  - Retrouve d'abord le tableau des primitives usuelles avant tout calcul.
  - Pour une intégrale définie, applique F(b) − F(a) en montrant les deux remplacements.
  - Avant d'annoncer une aire, vérifie le signe de la fonction sur chaque intervalle.
---

## Énoncé

1. Donner, pour chaque fonction, une primitive sur l'intervalle indiqué :
   a. $f(x) = 4x^3 + 2$ sur $\mathbb{R}$ ;
   b. $g(x) = \dfrac{3}{x}$ sur $]0\,;\,+\infty[$ ;
   c. $h(x) = e^{2x}$ sur $\mathbb{R}$ ;
   d. $p(x) = 2\sin x$ sur $\mathbb{R}$.

2. Calculer les intégrales suivantes :
   a. $\displaystyle\int_0^2 (3x^2 + 1)\,dx$ ;
   b. $\displaystyle\int_1^4 \left(2x + \frac{1}{x}\right)dx$ ;
   c. $\displaystyle\int_0^1 (e^x - 1)\,dx$.

3. Soit $f(x) = x - 2$.
   a. Déterminer le point d'intersection de la courbe de $f$ avec l'axe des abscisses.
   b. Calculer l'aire $S$ du triangle compris entre la courbe de $f$, l'axe des abscisses et les droites $x = 0$, $x = 4$ par une intégrale, puis le vérifier par la formule géométrique du triangle.

## Solution

**1. Primitives.**

*a.* $f(x) = 4x^3 + 2$ : on utilise $\displaystyle\int x^n dx = \frac{x^{n+1}}{n+1}$ :

$$
F(x) = 4 \times \frac{x^4}{4} + 2x = x^4 + 2x.
$$

Une primitive est $F(x) = x^4 + 2x$ (on peut ajouter une constante $k$).

*b.* $g(x) = \dfrac{3}{x} = 3 \times \dfrac{1}{x}$ sur $]0\,;\,+\infty[$ :

$$
G(x) = 3\,ln(x) + k \quad (\text{sur } ]0\,;\,+\infty[, \|x\| = x).
$$

*c.* $h(x) = e^{2x}$ : avec la règle $\displaystyle\int e^{ax}dx = \frac{1}{a}e^{ax}$ ($a = 2$) :

$$
H(x) = \frac{1}{2}\,e^{2x} + k.
$$

*Vérification :* $H'(x) = \dfrac{1}{2} \times 2\,e^{2x} = e^{2x}$. ✓

*d.* $p(x) = 2\sin x$ : la primitive de $\sin x$ est $-\cos x$, donc

$$
P(x) = -2\cos x + k.
$$

*Vérification :* $P'(x) = -2 \times (-\sin x) = 2\sin x$. ✓

**2. Intégrales définies.**

*a.* $\displaystyle\int_0^2 (3x^2 + 1)\,dx$ : une primitive est $x^3 + x$, donc

$$
\Big[x^3 + x\Big]_0^2 = (2^3 + 2) - (0^3 + 0) = 8 + 2 = 10.
$$

*b.* $\displaystyle\int_1^4 \left(2x + \frac{1}{x}\right)dx$ : une primitive est $x^2 + ln(x)$ (car $x > 0$ sur $[1\,;\,4]$) :

$$
\Big[x^2 + ln\,x\Big]_1^4 = (16 + ln\,4) - (1 + ln\,1) = 16 + ln\,4 - 1 - 0 = 15 + ln\,4.
$$

*c.* $\displaystyle\int_0^1 (e^x - 1)\,dx$ : une primitive est $e^x - x$ :

$$
\Big[e^x - x\Big]_0^1 = (e - 1) - (e^0 - 0) = e - 1 - 1 = e - 2 \approx 0{,}72.
$$

**3. Aire sous $f(x) = x - 2$.**

*a.* Intersection avec l'axe des abscisses : $f(x) = 0 \iff x - 2 = 0 \iff x = 2$. Le point est $I(2\,;\,0)$.

*b.* Sur $[0\,;\,4]$, la fonction change de signe en $x = 2$ :

- $f(x) \leq 0$ sur $[0\,;\,2]$ (aire au-dessus de la courbe mais **sous** l'axe : $\int_0^2 (2 - x)\,dx$) ;
- $f(x) \geq 0$ sur $[2\,;\,4]$ ($\int_2^4 (x - 2)\,dx$).

$$
S = \int_0^2 (2 - x)\,dx + \int_2^4 (x - 2)\,dx.
$$

*Premier terme :* primitive de $2 - x$ est $2x - \dfrac{x^2}{2}$ :

$$
\int_0^2 (2-x)\,dx = \Big[2x - \frac{x^2}{2}\Big]_0^2 = (4 - 2) - 0 = 2.
$$

*Second terme :* primitive de $x - 2$ est $\dfrac{x^2}{2} - 2x$ :

$$
\int_2^4 (x-2)\,dx = \Big[\frac{x^2}{2} - 2x\Big]_2^4 = (8 - 8) - (2 - 4) = 0 - (-2) = 2.
$$

$$
S = 2 + 2 = 4 \;\text{unités carrées}.
$$

*Vérification géométrique :* la courbe forme avec l'axe et les droites $x = 0$, $x = 4$ **deux triangles** :

- triangle de gauche : base $= 2$ (de $0$ à $2$), hauteur $= |f(0)| = 2$ : aire $= \dfrac{2 \times 2}{2} = 2$ ;
- triangle de droite : base $= 2$ (de $2$ à $4$), hauteur $= f(4) = 2$ : aire $= \dfrac{2 \times 2}{2} = 2$.

$$
S = 2 + 2 = 4. \;\checkmark
$$

:::remarque Leçon
Si l'on avait écrit $S = \int_0^4 (x - 2)\,dx = \Big[\dfrac{x^2}{2} - 2x\Big]_0^4 = (8 - 8) - 0 = 0$, on aurait obtenu... zéro : c'est la **somme signée**, pas l'aire. D'où l'obligation de découper aux changements de signe.
:::
