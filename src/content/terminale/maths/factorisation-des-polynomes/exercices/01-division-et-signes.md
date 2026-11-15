---
titre: Division d'un polynôme et tableau de signes
difficulte: 1
type: entrainement
indices:
  - Calcule d'abord P(2) : c'est le reste de la division par x − 2.
  - Utilise la méthode de Horner : coefficients du plus haut degré au terme indépendant, multiplication par 2, additions.
  - Pour le signe, factorise P complètement en facteurs du premier degré.
---

## Énoncé

Soit $P$ le polynôme défini par

$$
P(x) = x^3 - 4x^2 + x + 6.
$$

1. Calculer $P(2)$.
2. Écrire la division euclidienne de $P$ par $x - 2$, puis en déduire une factorisation de $P$.
3. Déterminer toutes les racines de $P$ et écrire $P$ sous forme factorisée.
4. Dresser le tableau de signes de $P$ et déterminer l'ensemble $S = \{x \in \mathbb{R} \;/\; P(x) \geq 0\}$.
5. Résoudre l'équation $P(x) = 0$.

## Solution

**1. Calcul de $P(2)$.**

$$
P(2) = 2^3 - 4 \times 2^2 + 2 + 6 = 8 - 16 + 2 + 6 = 0.
$$

**2. Division par $x - 2$.**

Le reste vaut $P(2) = 0$, donc $(x-2)$ divise $P$. Procédons à la division avec les coefficients $1\,;\,-4\,;\,1\,;\,6$ :

| | $x^3$ | $x^2$ | $x$ | $1$ |
| --- | --- | --- | --- | --- |
| Coefficients | $1$ | $-4$ | $1$ | $6$ |
| $\times\, 2$ | | $2$ | $-4$ | $-6$ |
| **Somme** | $1$ | $-2$ | $-3$ | $0$ |

Le quotient est $Q(x) = x^2 - 2x - 3$ et le reste est $0$. Donc

$$
P(x) = (x-2)(x^2 - 2x - 3).
$$

Vérification : $(x-2)(x^2-2x-3) = x^3 - 2x^2 - 3x - 2x^2 + 4x + 6 = x^3 - 4x^2 + x + 6$. ✓

**3. Racines et forme factorisée.**

Le trinôme $x^2 - 2x - 3$ a pour discriminant $\Delta = 4 + 12 = 16$, donc

$$
x = \frac{2 \pm 4}{2} \implies x_1 = -1 \;\text{ et }\; x_2 = 3.
$$

Donc $x^2 - 2x - 3 = (x+1)(x-3)$ et

$$
P(x) = (x+1)(x-2)(x-3).
$$

Les racines de $P$ sont $-1$, $2$ et $3$.

**4. Tableau de signes et ensemble $S$.**

| $x$ | $-\infty$ | $-1$ | | $2$ | | $3$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $x + 1$ | $-$ | $0$ | $+$ | $+$ | | $+$ | | $+$ |
| $x - 2$ | $-$ | $-$ | | $0$ | $+$ | $+$ | | $+$ |
| $x - 3$ | $-$ | $-$ | | $-$ | | $0$ | $+$ | |
| $P(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

Lecture : trois facteurs négatifs donnent un produit négatif à gauche de $-1$ ; à gauche de $-1$ le signe est $-$ (3 facteurs négatifs : $-$). Entre $-1$ et $2$, un seul facteur est positif : signe $+$. Entre $2$ et $3$ : deux facteurs positifs, un négatif : signe $-$. À droite de $3$ : tous positifs : signe $+$.

$$
S = \,[-1\,;\,2] \cup \,[3\,;\,+ \infty[
$$

**5. Résolution de $P(x) = 0$.**

Le produit s'annule si l'un des facteurs s'annule :

$$
x + 1 = 0 \;\text{ ou }\; x - 2 = 0 \;\text{ ou }\; x - 3 = 0,
$$

d'où $S = \{-1\,;\,2\,;\,3\}$.

:::remarque Vérification rapide
$P(-1) = -1 - 4 - 1 + 6 = 0$ ; $P(2) = 0$ (déjà calculé) ; $P(3) = 27 - 36 + 3 + 6 = 0$. Les trois racines sont confirmées.
:::
