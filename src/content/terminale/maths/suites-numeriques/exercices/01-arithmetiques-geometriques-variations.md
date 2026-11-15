---
titre: Arithmétiques, géométriques et variations
difficulte: 1
type: entrainement
indices:
  - Calcule d'abord u₁ − u₀, u₂ − u₁ (ou le quotient) pour identifier le type de suite.
  - Pour une géométrique, pense à uₙ = u₀ × qⁿ et à comparer |q| avec 1.
  - Pour la variation, factorise u_{n+1} − uₙ et discute le signe en fonction de n.
---

## Énoncé

1. Soit $(u_n)$ définie par $u_0 = 5$ et $u_{n+1} = u_n - 4$.
   a. Calculer $u_1$, $u_2$ et $u_3$.
   b. Quel type de suite est $(u_n)$ ? Donner son terme général.
   c. Calculer $u_{100}$.

2. Soit $(v_n)$ définie par $v_0 = 12$ et $v_{n+1} = \dfrac{1}{3}\,v_n$.
   a. Donner le terme général de $(v_n)$.
   b. Calculer la somme $S = v_0 + v_1 + \dots + v_9$.
   c. Que vaut $\lim\limits_{n \to +\infty} v_n$ ? Justifier.

3. Soit $(w_n)$ définie pour tout $n \geq 1$ par $w_n = \dfrac{2n + 1}{n + 3}$.
   a. Calculer $w_{n+1} - w_n$ et factoriser l'expression.
   b. En déduire le sens de variation de $(w_n)$.

## Solution

**1. Suite $(u_n)$ avec $u_0 = 5$ et $u_{n+1} = u_n - 4$.**

*a.* $u_1 = 5 - 4 = 1$ ; $u_2 = 1 - 4 = -3$ ; $u_3 = -3 - 4 = -7$.

*b.* La différence $u_{n+1} - u_n = -4$ est **constante** : $(u_n)$ est une suite **arithmétique** de raison $q = -4$. Son terme général est

$$
u_n = u_0 + n\,q = 5 - 4n.
$$

*c.* $u_{100} = 5 - 4 \times 100 = 5 - 400 = -395$.

**2. Suite $(v_n)$ avec $v_0 = 12$ et $v_{n+1} = \dfrac{1}{3}v_n$.**

*a.* Le quotient $\dfrac{v_{n+1}}{v_n} = \dfrac{1}{3}$ est constant : $(v_n)$ est géométrique de raison $q = \dfrac{1}{3}$.

$$
v_n = v_0 \times q^n = 12 \times \left(\frac{1}{3}\right)^n.
$$

*b.* $N = 10$ termes (de $v_0$ à $v_9$) et $q = \dfrac{1}{3} \neq 1$ :

$$
S = v_0 \times \frac{1 - q^{10}}{1 - q} = 12 \times \frac{1 - \left(\frac{1}{3}\right)^{10}}{1 - \frac{1}{3}} = 12 \times \frac{1 - \frac{1}{59049}}{\frac{2}{3}} = 18 \times \frac{59048}{59049} = \frac{1\,062\,864}{59\,049} \approx 18.
$$

Plus simplement : $S = 12 \times \dfrac{3}{2}\left(1 - \dfrac{1}{3^{10}}\right) = 18\left(1 - \dfrac{1}{59049}\right) \approx 17{,}9997$.

*c.* $|q| = \dfrac{1}{3} < 1$ : d'après le théorème de convergence des suites géométriques,

$$
\lim_{n \to +\infty} v_n = 0.
$$

Justification : $v_n = 12 \times \left(\dfrac{1}{3}\right)^n$ est un produit de la constante $12$ par $q^n$ avec $|q| < 1$, et $q^n \to 0$.

**3. Suite $(w_n)$ avec $w_n = \dfrac{2n+1}{n+3}$.**

*a.* Calcul de la différence (même dénominateur) :

$$
w_{n+1} - w_n = \frac{2(n+1) + 1}{(n+1) + 3} - \frac{2n+1}{n+3} = \frac{2n+3}{n+4} - \frac{2n+1}{n+3}.
$$

Mise au même dénominateur :

$$
w_{n+1} - w_n = \frac{(2n+3)(n+3) - (2n+1)(n+4)}{(n+4)(n+3)}.
$$

Développons le numérateur :

$$
(2n+3)(n+3) = 2n^2 + 9n + 9, \qquad (2n+1)(n+4) = 2n^2 + 9n + 4.
$$

$$
w_{n+1} - w_n = \frac{(2n^2 + 9n + 9) - (2n^2 + 9n + 4)}{(n+3)(n+4)} = \frac{5}{(n+3)(n+4)}.
$$

L'expression est déjà « factorisée » : numérateur $5 > 0$ et dénominateur $(n+3)(n+4) > 0$ pour tout $n \geq 1$.

*b.* $w_{n+1} - w_n = \dfrac{5}{(n+3)(n+4)} > 0$ pour tout $n \geq 1$ : donc

$$
(w_n) \text{ est strictement croissante.}
$$

*Remarque :* $\lim\limits_{n \to +\infty} w_n = 2$ (quotient des coefficients dominants $\dfrac{2}{1}$) : la suite est croissante et majorée par $2$, ce qui confirme sa convergence.

:::remarque Vérification
Pour $n = 1$ : $w_1 = \dfrac{3}{4} = 0{,}75$ et $w_2 = \dfrac{5}{5} = 1$ : bien $w_2 > w_1$ ✓ ; la différence $w_2 - w_1 = 0{,}25$ et la formule donne $\dfrac{5}{4 \times 5} = 0{,}25$ ✓.
:::
