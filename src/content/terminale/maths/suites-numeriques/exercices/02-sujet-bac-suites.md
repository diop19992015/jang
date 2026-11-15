---
titre: Sujet type BAC — Suites arithmétiques, géométriques et convergence
difficulte: 3
type: bac
annee: 2023
indices:
  - Identifie le type de suite en calculant la différence ou le quotient constant.
  - Dans une question « montrer que », écris la récurrence complète et factorise avant de conclure.
  - Pour la limite, passe à la limite dans la récurrence seulement après avoir établi la convergence.
---

## Énoncé

On considère les suites $(a_n)$ et $(b_n)$ définies respectivement par :

$$
a_0 = 2, \qquad a_{n+1} = a_n + 5, \qquad \text{pour tout } n \in \mathbb{N}
$$

$$
b_0 = 100, \qquad b_{n+1} = \frac{3}{4}\,b_n, \qquad \text{pour tout } n \in \mathbb{N}
$$

**Partie A — Suite arithmétique**

1. Montrer que $(a_n)$ est une suite arithmétique et donner son terme général.
2. Calculer $a_{20}$ et la somme $S = a_0 + a_1 + \dots + a_{19}$.
3. Déterminer le plus petit entier $n$ tel que $a_n > 200$.

**Partie B — Suite géométrique**

4. Montrer que $(b_n)$ est une suite géométrique, donner sa raison et son terme général.
5. Calculer la somme $T = b_0 + b_1 + \dots + b_9$.
6. Étudier la convergence de $(b_n)$ et donner sa limite le cas échéant.

**Partie C — Suite définie par récurrence**

7. Soit $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = \dfrac{u_n + 3}{2}$.
   a. Calculer $u_1$ et $u_2$.
   b. Montrer que $(u_n)$ est croissante.
   c. Montrer que $(u_n)$ est majorée par $3$.
   d. En déduire que $(u_n)$ converge, puis calculer sa limite $\ell$.

## Solution

**Partie A**

**1. Suite arithmétique.**

La relation $a_{n+1} = a_n + 5$ signifie que la différence $a_{n+1} - a_n = 5$ est **constante** : $(a_n)$ est une suite arithmétique de raison $q = 5$. Son terme général est

$$
a_n = a_0 + n\,q = 2 + 5n.
$$

**2. $a_{20}$ et somme $S$.**

$$
a_{20} = 2 + 5 \times 20 = 2 + 100 = 102.
$$

La somme $S$ comporte les termes de $a_0$ à $a_{19}$, soit $20$ termes :

$$
a_{19} = 2 + 5 \times 19 = 97.
$$

$$
S = \frac{20\,(a_0 + a_{19})}{2} = \frac{20 \times (2 + 97)}{2} = 10 \times 99 = 990.
$$

**3. Plus petit $n$ tel que $a_n > 200$.**

$$
2 + 5n > 200 \iff 5n > 198 \iff n > \frac{198}{5} = 39{,}6.
$$

Le plus petit entier vérifiant cette condition est $n = 40$ (car $a_{39} = 197 \leq 200$ et $a_{40} = 202 > 200$).

$$
n = 40
$$

**Partie B**

**4. Suite géométrique.**

Le quotient $\dfrac{b_{n+1}}{b_n} = \dfrac{3}{4}$ est **constant** : $(b_n)$ est une suite géométrique de raison $q = \dfrac{3}{4}$. Son terme général est

$$
b_n = b_0 \times q^n = 100 \times \left(\frac{3}{4}\right)^n.
$$

**5. Somme $T$.**

De $b_0$ à $b_9$ : $10$ termes, et $q = \dfrac{3}{4} \neq 1$ :

$$
T = b_0 \times \frac{1 - q^{10}}{1 - q} = 100 \times \frac{1 - \left(\frac{3}{4}\right)^{10}}{1 - \frac{3}{4}} = 100 \times 4 \times \left(1 - \left(\frac{3}{4}\right)^{10}\right).
$$

Or $\left(\dfrac{3}{4}\right)^{10} = \dfrac{59\,049}{1\,048\,576} \approx 0{,}0563$, donc

$$
T \approx 400 \times (1 - 0{,}0563) = 400 \times 0{,}9437 \approx 377{,}5.
$$

**6. Convergence de $(b_n)$.**

La raison vérifie $|q| = \dfrac{3}{4} < 1$ : d'après le théorème de convergence des suites géométriques, $(b_n)$ **converge** et

$$
\lim_{n \to +\infty} b_n = 0.
$$

**Partie C**

**7. Suite $(u_n)$ avec $u_0 = 1$ et $u_{n+1} = \dfrac{u_n + 3}{2}$.**

*a.* $u_1 = \dfrac{1 + 3}{2} = 2$ et $u_2 = \dfrac{2 + 3}{2} = \dfrac{5}{2} = 2{,}5$.

*b.* Croissance : pour tout $n$,

$$
u_{n+1} - u_n = \frac{u_n + 3}{2} - u_n = \frac{u_n + 3 - 2u_n}{2} = \frac{3 - u_n}{2}.
$$

La question c) va montrer que $u_n \leq 3$, donc $3 - u_n \geq 0$ et $u_{n+1} - u_n \geq 0$ : la suite est croissante.

*c.* Majoration par $3$ : on raisonne par **récurrence**.

- *Initialisation :* $u_0 = 1 \leq 3$ ✓.
- *Hérédité :* supposons $u_n \leq 3$. Alors

$$
u_{n+1} = \frac{u_n + 3}{2} \leq \frac{3 + 3}{2} = 3.
$$

La propriété est hérédite : pour tout $n$, $u_n \leq 3$. ✓

*Remarque :* $u_n \leq 3$ implique $3 - u_n \geq 0$, ce qui justifie bien la croissance en b) : les deux questions se complètent.

*d.* Convergence et limite : $(u_n)$ est **croissante et majorée par $3$** : d'après le théorème de convergence des suites monotones, $(u_n)$ **converge**. Soit $\ell = \lim\limits_{n \to +\infty} u_n$.

En passant à la limite dans la récurrence $u_{n+1} = \dfrac{u_n + 3}{2}$ (les suites $(u_{n+1})$ et $(u_n)$ ont la même limite) :

$$
\ell = \frac{\ell + 3}{2} \iff 2\ell = \ell + 3 \iff \ell = 3.
$$

$$
\lim_{n \to +\infty} u_n = 3
$$

*Interprétation :* la suite est strictement croissante, commence à $1$, et s'approche de $3$ sans jamais l'atteindre (car si $u_n < 3$ alors $u_{n+1} = \dfrac{u_n+3}{2} < 3$).

:::methode Ce que le correcteur attend
- « $a_{n+1} - a_n$ est constant » (resp. « $b_{n+1}/b_n$ est constant ») **avant** d'annoncer le type de suite.
- La somme avec le **nombre de termes** justifié ($20$ termes de $a_0$ à $a_{19}$).
- La récurrence de majoration avec initialisation **et** hérédité.
- La convergence citée avec le théorème (monotone + borne) **avant** le passage à la limite.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points ($1 + 1 + 1$). Partie B : 3 points ($1 + 1 + 1$). Partie C : 4 points ($0{,}5 + 1 + 1 + 1{,}5$). Un passage à la limite sans preuve de convergence perd la moitié des points de la question d).
:::
