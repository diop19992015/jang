---
titre: Exponentielles, logarithmes et croissances comparées
difficulte: 1
type: entrainement
indices:
  - Passe les deux membres d'une équation à la même base quand c'est possible.
  - Pour log2 x = 3, traduis : 2^3 = x.
  - Pour les limites, classe les vitesses : logarithme < puissance < exponentielle.
---

## Énoncé

1. Calculer les valeurs suivantes :
   - $A = \log_2 32 - \log_2 4$ ;
   - $B = \ln\!\left(\dfrac{e^4}{e}\right)$ ;
   - $C = 2^{-3} \times 2^5$.

2. Résoudre sur $\mathbb{R}$ les équations :
   - $3^{2x - 1} = 27$ ;
   - $\left(\dfrac{1}{4}\right)^{x} = 16$ ;
   - $\ln(x - 1) = 0$.

3. Calculer les limites suivantes :
   - $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x}$ ;
   - $\lim\limits_{x \to +\infty} \dfrac{2^x}{x^3}$ ;
   - $\lim\limits_{x \to 0^+} x \ln x$.

4. Sans calculatrice, comparer $\left(\dfrac{1}{2}\right)^{-2}$, $\ln e^3$ et $e^0$.

## Solution

**1. Calculs.**

- $A = \log_2 32 - \log_2 4$ : comme $32 = 2^5$ et $4 = 2^2$, on a $\log_2 32 = 5$ et $\log_2 4 = 2$, donc

$$
A = 5 - 2 = 3.
$$

On peut aussi utiliser $\log_2 32 - \log_2 4 = \log_2 \dfrac{32}{4} = \log_2 8 = 3$.

- $B = \ln\!\left(\dfrac{e^4}{e}\right) = \ln\!\big(e^{4-1}\big) = \ln(e^3) = 3$.
- $C = 2^{-3} \times 2^5 = 2^{-3+5} = 2^2 = 4$.

**2. Résolutions.**

- $3^{2x-1} = 27$ : comme $27 = 3^3$, on égale les exposants :

$$
2x - 1 = 3 \iff 2x = 4 \iff x = 2.
$$

- $\left(\dfrac{1}{4}\right)^x = 16$ : on passe à la base $2$ : $\left(\dfrac{1}{4}\right)^x = (2^{-2})^x = 2^{-2x}$ et $16 = 2^4$. Donc

$$
-2x = 4 \iff x = -2.
$$

- $\ln(x - 1) = 0$ : le domaine impose $x - 1 > 0$, soit $x > 1$. Comme $\ln 1 = 0$,

$$
x - 1 = 1 \iff x = 2,
$$

qui appartient bien au domaine ($2 > 1$). ✓

**3. Limites.**

- $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x}$ : croissances comparées, le logarithme est moins rapide que la puissance $x^1$, donc

$$
\lim_{x \to +\infty} \frac{\ln x}{x} = 0.
$$

- $\lim\limits_{x \to +\infty} \dfrac{2^x}{x^3}$ : l'exponentielle l'emporte sur toute puissance, donc

$$
\lim_{x \to +\infty} \frac{2^x}{x^3} = +\infty.
$$

- $\lim\limits_{x \to 0^+} x \ln x$ : forme $0 \times (-\infty)$ ; c'est le cas remarquable de la croissance comparée en $0^+$ :

$$
\lim_{x \to 0^+} x \ln x = 0.
$$

(On peut aussi écrire $x \ln x = \dfrac{\ln x}{1/x}$ puis appliquer la croissance comparée à $+\infty$ sur la variable $t = 1/x \to +\infty$ : $\dfrac{\ln t}{t} \to 0$.)

**4. Comparaison.**

$$
\left(\frac{1}{2}\right)^{-2} = 2^2 = 4, \qquad
\ln e^3 = 3, \qquad
e^0 = 1.
$$

Donc

$$
e^0 < \ln e^3 < \left(\frac{1}{2}\right)^{-2}, \qquad \text{c'est-à-dire} \qquad 1 < 3 < 4 .
$$

:::remarque Réflexe
Pour comparer des puissances, les ramener à la même base ; pour comparer des logarithmes, utiliser la variation (base $> 1$ : croissante) ; et toujours situer les valeurs par rapport à $0$ et $1$.
:::
