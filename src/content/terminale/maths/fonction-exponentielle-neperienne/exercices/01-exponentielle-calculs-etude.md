---
titre: Calculs, équations et étude avec l'exponentielle
difficulte: 1
type: entrainement
indices:
  - Simplifie les exposants : addition au produit, soustraction au quotient.
  - Pour résoudre une équation exponentielle, égale les exposants (ou utilise ln si le second membre n'est pas une puissance de e).
  - Pour la dérivée, utilise la règle du produit puis factorise par e^x.
---

## Énoncé

1. Simplifier les expressions suivantes :
   - $A = e^3 \times e^{-5}$ ;
   - $B = \dfrac{e^4}{e^{-2}}$ ;
   - $C = \big(e^{-2}\big)^3$.

2. Résoudre sur $\mathbb{R}$ les équations :
   - $e^{2x - 1} = e^5$ ;
   - $e^{x^2 - 4} = 1$ ;
   - $e^{x+1} = 10$ (on rappelle $\ln 10 \approx 2{,}30$).

3. Résoudre sur $\mathbb{R}$ l'inéquation $e^{-x} < e^3$.

4. Soit $f(x) = (x + 1)\, e^x$.
   - Calculer $f'(x)$ et factoriser.
   - Déterminer le signe de $f'(x)$ et le minimum de $f$.

## Solution

**1. Calculs avec les exposants.**

- $A = e^3 \times e^{-5} = e^{3 + (-5)} = e^{-2} = \dfrac{1}{e^2}$.
- $B = \dfrac{e^4}{e^{-2}} = e^{4 - (-2)} = e^{6}$.
- $C = \big(e^{-2}\big)^3 = e^{-2 \times 3} = e^{-6} = \dfrac{1}{e^6}$.

Dans le produit, les exposants s'**additionnent** ; dans le quotient, ils se **soustraient** ; pour une puissance d'une puissance, on **multiplie**.

**2. Résolutions d'équations.**

- $e^{2x-1} = e^5$ : l'exponentielle est strictement croissante, donc on égale les exposants :

$$
2x - 1 = 5 \iff 2x = 6 \iff x = 3.
$$

- $e^{x^2 - 4} = 1$ : comme $1 = e^0$, on a $x^2 - 4 = 0$, soit $x^2 = 4$, d'où

$$
x = -2 \quad \text{ou} \quad x = 2.
$$

Ensemble des solutions : $\{-2\,;\,2\}$.

- $e^{x+1} = 10$ : le second membre $10$ n'est pas $e^k$ avec $k$ simple. On prend le logarithme népérien des deux membres (fonction strictement croissante) :

$$
x + 1 = \ln 10 \approx 2{,}30 \quad \text{d'où} \quad x = \ln 10 - 1 \approx 1{,}30 .
$$

**3. Inéquation $e^{-x} < e^3$.**

$x \mapsto e^x$ est strictement croissante, donc on peut « lever » l'exponentielle en conservant le sens :

$$
e^{-x} < e^3 \iff -x < 3 \iff x > -3 .
$$

Ensemble des solutions : $]-3\,;\,+\infty[$. Vérification : pour $x = -3$, $e^{3} = e^{3}$ (égalité, donc $-3$ est bien exclu) ; pour $x = 0$, $e^0 = 1 < e^3$ ✓.

**4. Étude de $f(x) = (x+1)e^x$.**

- **Dérivée** : règle du produit avec $u(x) = x+1$ ($u' = 1$) et $v(x) = e^x$ ($v' = e^x$) :

$$
f'(x) = 1 \cdot e^x + (x+1) e^x = e^x (1 + x + 1) = e^x (x + 2).
$$

- **Signe** : $e^x > 0$ pour tout $x$ : le signe de $f'(x)$ est celui de $x + 2$.

| $x$ | $-\infty$ | | $-2$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $0^-$ | $\searrow$ | $-e^{-2}$ | $\nearrow$ | $+\infty$ |

$f'$ change de signe de $-$ à $+$ en $-2$ : $f$ admet un **minimum** en $x = -2$, de valeur

$$
f(-2) = (-2 + 1) e^{-2} = -e^{-2} = -\frac{1}{e^2} \approx -0{,}135 .
$$

Note : $\lim\limits_{x \to -\infty} f(x) = 0$, donc la courbe a pour asymptote $y = 0$ à $-\infty$, et le minimum global est bien $-e^{-2}$.

:::remarque Vérification
Pour $x = -1$ : $f(-1) = 0$ ; pour $x = 0$ : $f(0) = 1$. La fonction s'annule en $-1$, devient positive ensuite, décroît vers $-e^{-2}$ puis remonte : cohérent avec le tableau.
:::
