---
titre: Équations, inéquations et tableau de signes
difficulte: 1
type: entrainement
indices:
  - Factorise toujours avant de résoudre : ne divise jamais par une expression de l'inconnue.
  - Écris les points de passage (où chaque facteur s'annule) sur une droite avant le tableau.
  - Dans une équation rationnelle, n'oublie pas l'interdit du dénominateur.
---

## Énoncé

1. Résoudre dans $\mathbb{R}$ l'équation $x^2 - 7x + 12 = 0$.
2. Résoudre dans $\mathbb{R}$ l'équation $2x^2 - 8x = 0$.
3. Résoudre dans $\mathbb{R}$ l'inéquation $(x - 1)(x + 4) < 0$.
4. Résoudre dans $\mathbb{R}$ l'inéquation $\dfrac{x - 3}{x + 2} \geq 0$.
5. Résoudre dans $\mathbb{R}$ l'équation $\dfrac{x^2 - 9}{x - 3} = 6$.

## Solution

**1. Équation $x^2 - 7x + 12 = 0$.**

On cherche deux produits donnant $12$ et dont la somme vaut $-7$ : $-3$ et $-4$.

$$
x^2 - 7x + 12 = (x-3)(x-4).
$$

L'équation devient $(x-3)(x-4) = 0$, et un produit est nul si un de ses facteurs l'est :

$$
x - 3 = 0 \;\Rightarrow\; x = 3, \qquad x - 4 = 0 \;\Rightarrow\; x = 4.
$$

$$
S = \{3\,;\,4\}
$$

*Contrôle :* $\Delta = 49 - 48 = 1 > 0$ et $x = \dfrac{7 \pm 1}{2}$, soit $3$ et $4$. ✓

**2. Équation $2x^2 - 8x = 0$.**

On met le facteur commun en facteur :

$$
2x^2 - 8x = 2x(x - 4) = 0.
$$

Donc $2x = 0$ ou $x - 4 = 0$, soit

$$
S = \{0\,;\,4\}.
$$

*Piège évité :* si l'on avait divisé par $x$, on aurait perdu la solution $x = 0$.

**3. Inéquation $(x-1)(x+4) < 0$.**

Points de passage : $x = 1$ et $x = -4$. On les classe : $-4 < 1$.

| Signe | $x < -4$ | $-4$ | $-4 < x < 1$ | $1$ | $x > 1$ |
| --- | --- | --- | --- | --- | --- |
| $x - 1$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $x + 4$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| Produit | $+$ | $0$ | $-$ | $0$ | $+$ |

Le produit est strictement négatif sur $]-4\,;\,1[$. L'inéquation est **stricte** : les bornes sont exclues.

$$
S = \,]-4\,;\,1[
$$

**4. Inéquation $\dfrac{x-3}{x+2} \geq 0$.**

**Interdit :** $x + 2 \neq 0$, donc $x \neq -2$.

Points de passage : $x = 3$ (numérateur) et $x = -2$ (dénominateur).

| Signe | $x < -2$ | $-2$ | $-2 < x < 3$ | $3$ | $x > 3$ |
| --- | --- | --- | --- | --- | --- |
| $x - 3$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $x + 2$ | $-$ | interdit | $+$ | $+$ | $+$ |
| Quotient | $+$ | interdit | $-$ | $0$ | $+$ |

Le quotient est positif ou nul sur $]-\infty\,;\,-2[$ et sur $[3\,;\,+\infty[$. Attention : $-2$ reste **exclus** (interdit), même si l'inéquation est non stricte, alors que $3$ est inclus.

$$
S = \,]-\infty\,;\,-2[ \;\cup\; \,]3\,;\,+\infty[
$$

**5. Équation $\dfrac{x^2 - 9}{x - 3} = 6$.**

**Interdit :** $x \neq 3$.

On met sur un même dénominateur :

$$
\frac{x^2 - 9}{x-3} - 6 = 0 \iff \frac{x^2 - 9 - 6(x-3)}{x-3} = 0 \iff \frac{x^2 - 6x + 9}{x-3} = 0.
$$

Le numérateur est un carré parfait : $x^2 - 6x + 9 = (x-3)^2$. Donc

$$
\frac{(x-3)^2}{x-3} = 0 \iff x - 3 = 0 \;\text{ avec }\; x \neq 3.
$$

Or $x = 3$ est précisément l'interdit : il n'y a **aucune solution**.

$$
S = \varnothing
$$

*Remarque :* pour $x \neq 3$, la fonction vaut $x + 3$, qui vaut $6$ exactement en $x = 3$ — valeur interdite. L'équation n'admet donc aucune solution.

:::remarque Contrôle général
Substitue toujours une ou deux solutions trouvées dans l'équation de départ : dans la question 1, $3^2 - 21 + 12 = 0$ ✓ ; dans la question 2, $0 - 0 = 0$ ✓.
:::
