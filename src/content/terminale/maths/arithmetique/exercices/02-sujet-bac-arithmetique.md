---
titre: Sujet type BAC — Divisibilité, numération et congruences
difficulte: 3
type: bac
annee: 2023
indices:
  - Décompose d'abord les nombres en facteurs premiers avant tout raisonnement de divisibilité.
  - Pour le théorème de Gauss, vérifie explicitement la condition de premier entre eux.
  - En conversion, les restes se lisent du dernier au premier (de l'unité vers les rangs les plus hauts).
---

## Énoncé

**Partie A — PGCD, PPCM et divisibilité**

On considère les entiers $a = 2^3 \times 3^2 \times 5$ et $b = 2 \times 3 \times 7^2$.

1. Calculer $\mathrm{PGCD}(a\,;\,b)$ et $\mathrm{PPCM}(a\,;\,b)$.
2. Montrer que $12$ divise $a$.
3. Justifier que $49$ divise $b^2$ et que $\mathrm{PGCD}(49\,;\,a) = 1$. En déduire, par le théorème de Gauss, que $49$ divise $a \times b^2$.

**Partie B — Bézout et congruences**

4. Résoudre en entiers l'équation $13u + 5v = 1$.
5. Résoudre la congruence $5x \equiv 4 \pmod 3$, puis simplifier si possible la congruence $6x \equiv 9 \pmod{15}$ et la résoudre.
6. Déterminer le reste de la division euclidienne de $2^{20}$ par $5$.

**Partie C — Systèmes de numération**

7. Écrire $57$ en base $2$ puis en base $5$.
8. Calculer $(1011)_2 + (101)_2$ et écrire le résultat en base $2$.
9. Développer $(2031)_4$ en base $10$ et préciser pourquoi cette écriture est valide.

## Solution

**Partie A**

**1. PGCD et PPCM.**

$$
a = 2^3 \times 3^2 \times 5, \qquad b = 2^1 \times 3^1 \times 7^2.
$$

PGCD : exposants **minimaux** ; PPCM : exposants **maximaux** :

$$
\mathrm{PGCD}(a\,;\,b) = 2^1 \times 3^1 = 6
$$

$$
\mathrm{PPCM}(a\,;\,b) = 2^3 \times 3^2 \times 5 \times 7^2 = 8 \times 9 \times 5 \times 49 = 17\,640
$$

**2. $12$ divise $a$.**

$12 = 2^2 \times 3$. Or $a = 2^3 \times 3^2 \times 5$ contient les facteurs $2^2$ et $3^1$ :

$$
a = 2^2 \times 3 \times (2 \times 3 \times 5) = 12 \times 30.
$$

Donc $12 \mid a$. ✓

**3. Théorème de Gauss.**

$49 = 7^2$ et $b^2 = 2^2 \times 3^2 \times 7^4$. Comme $7^4 = 49 \times 7^2$, on a $49 \mid b^2$.

L'entier $a = 2^3 \times 3^2 \times 5$ ne contient aucun facteur $7$, donc $\mathrm{PGCD}(49\,;\,a) = 1$ : $49$ et $a$ sont premiers entre eux.

Le théorème de Gauss s'applique : comme $49 \mid b^2$ et $\mathrm{PGCD}(49\,;\,a) = 1$, on en déduit

$$
49 \mid a \times b^2.
$$

**Partie B**

**4. Résolution de $13u + 5v = 1$.**

Algorithme d'Euclide :

$$
13 = 2 \times 5 + 3, \qquad 5 = 1 \times 3 + 2, \qquad 3 = 1 \times 2 + 1.
$$

Remontée :

$$
1 = 3 - 2 = 3 - (5 - 3) = 2 \times 3 - 5 = 2 \times (13 - 2 \times 5) - 5 = 2 \times 13 - 5 \times 5.
$$

Solution : $u = 2$ et $v = -5$, car $13 \times 2 + 5 \times (-5) = 26 - 25 = 1$. ✓

Les autres solutions s'écrivent $u = 2 + 5k$ et $v = -5 - 13k$ avec $k \in \mathbb{Z}$ (car $\mathrm{PGCD}(13\,;\,5) = 1$).

**5. Congruences.**

*Congruence $5x \equiv 4 \pmod 3$.* On réduit les coefficients modulo $3$ : $5 \equiv 2$ et $4 \equiv 1$, donc la congruence devient

$$
2x \equiv 1 \pmod{3}.
$$

L'inverse de $2$ modulo $3$ est $2$, puisque $2 \times 2 = 4 \equiv 1 \pmod 3$. En multipliant les deux membres par $2$ :

$$
x \equiv 2 \pmod{3}.
$$

L'ensemble des solutions est $\{\,2 + 3k \;/\; k \in \mathbb{Z}\,\}$.

*Congruence $6x \equiv 9 \pmod{15}$.* Le facteur commun de $6$, $9$ et $15$ est $3$, et $3$ divise bien le second membre $9$ : on peut diviser les trois termes **et** le modulo :

$$
2x \equiv 3 \pmod{5}.
$$

L'inverse de $2$ modulo $5$ est $3$ ($2 \times 3 = 6 \equiv 1 \pmod 5$), donc

$$
x \equiv 3 \times 3 = 9 \equiv 4 \pmod{5}.
$$

L'ensemble des solutions est $\{\,4 + 5k \;/\; k \in \mathbb{Z}\,\}$.

**6. Reste de $2^{20}$ modulo $5$.**

On observe que $2^2 = 4 \equiv -1 \pmod 5$, d'où

$$
2^4 = (2^2)^2 \equiv (-1)^2 = 1 \pmod{5}.
$$

Puis $2^{20} = \left(2^4\right)^5 \equiv 1^5 \equiv 1 \pmod{5}$.

Le reste de la division euclidienne de $2^{20} = 1\,048\,576$ par $5$ est donc $1$.

**Partie C**

**7. $57$ en base $2$ et base $5$.**

En base $2$, divisions successives par $2$ :

| Division | Quotient | Reste |
| --- | --- | --- |
| $57 = 2 \times 28 + 1$ | $28$ | $1$ |
| $28 = 2 \times 14 + 0$ | $14$ | $0$ |
| $14 = 2 \times 7 + 0$ | $7$ | $0$ |
| $7 = 2 \times 3 + 1$ | $3$ | $1$ |
| $3 = 2 \times 1 + 1$ | $1$ | $1$ |
| $1 = 2 \times 0 + 1$ | $0$ | $1$ |

Les restes, lus du **dernier au premier**, donnent $1\,;\,1\,;\,1\,;\,0\,;\,0\,;\,1$ :

$$
57 = (111001)_2
$$

Vérification : $1 \times 32 + 1 \times 16 + 1 \times 8 + 0 \times 4 + 0 \times 2 + 1 \times 1 = 32 + 16 + 8 + 1 = 57$. ✓

En base $5$ :

| Division | Quotient | Reste |
| --- | --- | --- |
| $57 = 5 \times 11 + 2$ | $11$ | $2$ |
| $11 = 5 \times 2 + 1$ | $2$ | $1$ |
| $2 = 5 \times 0 + 2$ | $0$ | $2$ |

Restes du dernier au premier : $2\,;\,1\,;\,2$, donc

$$
57 = (212)_5
$$

Vérification : $2 \times 5^2 + 1 \times 5 + 2 = 50 + 5 + 2 = 57$. ✓

**8. Somme en base $2$.**

On convertit en base $10$ :

$$
(1011)_2 = 8 + 2 + 1 = 11, \qquad (101)_2 = 4 + 1 = 5, \qquad 11 + 5 = 16.
$$

Or $16 = 2^4$, donc $16 = (10000)_2$. Ainsi :

$$
(1011)_2 + (101)_2 = (10000)_2.
$$

**9. Développement de $(2031)_4$.**

$$
(2031)_4 = 2 \times 4^3 + 0 \times 4^2 + 3 \times 4^1 + 1 \times 4^0 = 128 + 0 + 12 + 1 = 141.
$$

Cette écriture est **valide** car tous les chiffres ($0$, $1$, $2$, $3$) sont inférieurs à la base moins un : $d_i \leq b - 1 = 3$. Une écriture comme $(2051)_4$ serait invalide, le chiffre $5$ dépassant $3$.

:::methode Ce que le correcteur attend
- Les décompositions en facteurs premiers écrites **avant** le PGCD et le PPCM.
- Le théorème de Gauss cité avec **ses deux hypothèses** : $49 \mid b^2$ **et** $\mathrm{PGCD}(49\,;\,a) = 1$.
- La remontée de Bézout montrée ligne à ligne, avec vérification numérique.
- Les conversions avec les divisions successives **et** le développement de contrôle.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points ($1 + 1 + 1$). Partie B : 4 points ($1 + 1{,}5 + 1{,}5$). Partie C : 3 points ($1 + 1 + 1$). Une réponse juste sans justification perd la moitié des points de la question concernée.
:::
