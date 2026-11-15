---
titre: PGCD, Bézout et congruences
difficulte: 1
type: entrainement
indices:
  - Décompose d'abord les deux nombres en facteurs premiers : le PGCD prend les exposants minimaux.
  - Pour Bézout, fais l'algorithme d'Euclide puis remonte en substituant chaque reste.
  - Une congruence a·x ≡ b (mod n) se résout en trouvant l'inverse de a modulo n.
---

## Énoncé

1. Décomposer $420$ et $756$ en produits de facteurs premiers.
2. Calculer $\mathrm{PGCD}(420\,;\,756)$ et $\mathrm{PPCM}(420\,;\,756)$.
3. Résoudre l'équation diophantienne $17u + 5v = 1$ en entiers, puis en déduire que l'équation $17u + 5v = 3$ admet une solution.
4. Calculer le reste de la division euclidienne de $2^{10}$ par $7$.
5. Résoudre la congruence $5x \equiv 3 \pmod{7}$ et donner l'ensemble des solutions entières.

## Solution

**1. Décomposition en facteurs premiers.**

Pour $420$ :

$$
420 = 2 \times 210 = 2^2 \times 105 = 2^2 \times 3 \times 35 = 2^2 \times 3 \times 5 \times 7.
$$

Donc $420 = 2^2 \times 3 \times 5 \times 7$.

Pour $756$ :

$$
756 = 2 \times 378 = 2^2 \times 189 = 2^2 \times 3 \times 63 = 2^2 \times 3^2 \times 7 = 2^2 \times 3^3 \times 7.
$$

Donc $756 = 2^2 \times 3^3 \times 7$.

**2. PGCD et PPCM.**

On aligne les exposants ($756$ n'a pas de facteur $5$, exposant $0$) :

| Facteur | $2$ | $3$ | $5$ | $7$ |
| --- | --- | --- | --- | --- |
| $420$ | $2$ | $1$ | $1$ | $1$ |
| $756$ | $2$ | $3$ | $0$ | $1$ |
| $\min$ | $2$ | $1$ | $0$ | $1$ |
| $\max$ | $2$ | $3$ | $1$ | $1$ |

$$
\mathrm{PGCD}(420\,;\,756) = 2^2 \times 3 = 12
$$

$$
\mathrm{PPCM}(420\,;\,756) = 2^2 \times 3^3 \times 5 \times 7 = 4 \times 27 \times 35 = 3780
$$

**Contrôle par la relation fondamentale :**

$$
\mathrm{PGCD} \times \mathrm{PPCM} = 12 \times 3780 = 45\,360 \qquad \text{et} \qquad 420 \times 756 = 45\,360. \;\checkmark
$$

**3. Équation $17u + 5v = 1$.**

Algorithme d'Euclide :

$$
17 = 3 \times 5 + 2, \qquad 5 = 2 \times 2 + 1.
$$

On remonte :

$$
1 = 5 - 2 \times 2 = 5 - 2 \times (17 - 3 \times 5) = -2 \times 17 + 7 \times 5.
$$

Donc $u = -2$ et $v = 7$ est une solution : $17 \times (-2) + 5 \times 7 = -34 + 35 = 1$. ✓

Pour l'équation $17u + 5v = 3$, on multiplie la relation précédente par $3$ :

$$
17 \times (-6) + 5 \times 21 = 3.
$$

Une solution est donc $u = -6$, $v = 21$ (et on peut en écrire d'autres : $u = -6 + 5k$, $v = 21 - 17k$).

**4. Reste de $2^{10}$ modulo $7$.**

On remarque que $2^3 = 8 \equiv 1 \pmod{7}$. Donc, en élevant au carré :

$$
2^6 = (2^3)^2 \equiv 1^2 \equiv 1 \pmod{7}, \qquad 2^9 \equiv 1 \pmod{7}.
$$

Ainsi $2^{10} = 2^9 \times 2 \equiv 1 \times 2 \equiv 2 \pmod{7}$.

Le reste de la division de $2^{10} = 1024$ par $7$ est $2$ (vérification : $1024 = 7 \times 146 + 2$). ✓

**5. Résolution de $5x \equiv 3 \pmod{7}$.**

On cherche $u$ tel que $5u \equiv 1 \pmod{7}$ : $5 \times 3 = 15 = 2 \times 7 + 1 \equiv 1 \pmod{7}$, donc $u = 3$ est l'inverse de $5$ modulo $7$.

En multipliant la congruence par $3$ :

$$
x \equiv 3 \times 3 = 9 \equiv 2 \pmod{7}.
$$

L'ensemble des solutions est

$$
S = \{\, 2 + 7k \;/\; k \in \mathbb{Z} \,\} = \{\dots\,;\,-5\,;\,2\,;\,9\,;\,16\,;\dots\}
$$

Vérification : $5 \times 2 = 10 = 7 + 3 \equiv 3 \pmod 7$. ✓

:::remarque Méthode de contrôle
Pour tout exercice d'arithmétique : décomposition $\to$ formule $\to$ **vérification numérique** (ici $12 \times 3780 = 420 \times 756$, et $1024 = 7 \times 146 + 2$). Le contrôle ne coûte qu'une ligne et sécurise les points.
:::
