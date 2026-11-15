---
titre: Nombre dérivé, tangente et théorème de Rolle
difficulte: 1
type: entrainement
indices:
  - Écris d'abord le quotient (f(a+h) − f(a))/h avant tout développement.
  - Factorise toujours par h avant de faire tendre h vers 0.
  - Pour Rolle, vérifie les trois hypothèses : continuité, dérivabilité, f(a) = f(b).
---

## Énoncé

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = x^2 - 2x - 3$.

1. Calculer le taux d'accroissement $\tau(h)$ de $f$ entre $3$ et $3+h$.
2. En déduire, par la définition, la valeur de $f'(3)$.
3. Déterminer l'équation de la tangente $T$ à la courbe de $f$ au point d'abscisse $3$.
4. Donner $f'(x)$ pour tout réel $x$, puis le signe de $f'(x)$ et les variations de $f$.
5. Vérifier que les hypothèses du théorème de Rolle sont satisfaites sur $[0\,;\,2]$ et donner le point $c$ garanti par ce théorème.

## Solution

**1. Taux d'accroissement entre $3$ et $3+h$.**

$$
\tau(h) = \frac{f(3+h) - f(3)}{h}.
$$

On calcule $f(3) = 3^2 - 2 \times 3 - 3 = 9 - 6 - 3 = 0$ et

$$
f(3+h) = (3+h)^2 - 2(3+h) - 3 = 9 + 6h + h^2 - 6 - 2h - 3 = h^2 + 4h.
$$

Donc, pour $h \neq 0$ :

$$
\tau(h) = \frac{h^2 + 4h}{h} = h + 4.
$$

**2. Nombre dérivé $f'(3)$.**

$$
f'(3) = \lim_{h \to 0} \tau(h) = \lim_{h \to 0} (h + 4) = 4.
$$

$f$ est donc dérivable en $3$ et $f'(3) = 4$.

**3. Tangente en $3$.**

On a $f(3) = 0$ et $f'(3) = 4$. L'équation de la tangente est

$$
y = f'(3)(x - 3) + f(3) = 4(x - 3) + 0 = 4x - 12.
$$

Donc $T: y = 4x - 12$. Vérification : en $x = 3$, $y = 12 - 12 = 0 = f(3)$. ✓

**4. Dérivée, signe et variations.**

On dérive le polynôme terme à terme :

$$
f'(x) = 2x - 2 = 2(x - 1).
$$

Le facteur $2$ est positif, donc $f'(x)$ a le signe de $(x - 1)$ :

- $f'(x) < 0$ sur $]-\infty\,;\,1[$ ;
- $f'(1) = 0$ ;
- $f'(x) > 0$ sur $]1\,;\,+\infty[$.

Tableau de variations :

| $x$ | $-\infty$ | $1$ | $+\infty$ |
| --- | --- | --- | --- |
| $f'(x)$ | $-$ | $0$ | $+$ |
| $f(x)$ | $+\infty$ | $\searrow$ | $-4$ | $\nearrow$ | $-\infty$ |

Valeurs : $f(1) = 1 - 2 - 3 = -4$ ; limites : $f(x) \to +\infty$ en $-\infty$ et $f(x) \to -\infty$ en $+\infty$ (degré impair, coefficient positif).

$f$ admet donc un **minimum local** en $x = 1$, égal à $-4$.

**5. Théorème de Rolle sur $[0\,;\,2]$.**

Vérification des hypothèses :

1. $f$ est un polynôme : continue sur $[0\,;\,2]$. ✓
2. $f$ est dérivable sur $\mathbb{R}$, donc sur $]0\,;\,2[$. ✓
3. $f(0) = 0 - 0 - 3 = -3$ et $f(2) = 4 - 4 - 3 = -3$ : $f(0) = f(2)$. ✓

Les hypothèses de Rolle sont réunies : il existe $c \in \,]0\,;\,2[$ tel que $f'(c) = 0$.

Or $f'(x) = 2(x-1)$ s'annule uniquement en $x = 1$, qui appartient bien à $]0\,;\,2[$ :

$$
c = 1.
$$

Geometricement : les points $(0\,;\,-3)$ et $(2\,;\,-3)$ ont la même ordonnée, et la tangente en $x = 1$ (point $(1\,;\,-4)$) est bien horizontale. ✓

:::remarque Contrôle
Le résultat de Rolle est cohérent avec le tableau de variations : $f$ décroît puis croît sur $[0\,;\,2]$, donc $f'$ s'annule nécessairement au passage, en $x = 1$.
:::
