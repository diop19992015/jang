---
titre: Sujet type BAC — Étude de $x^2 e^{-x}$ et équations exponentielles
difficulte: 3
type: bac
annee: 2023
indices:
  - Dérive avec la règle du produit en posant u = x² et v = e^{-x}, puis factorise par e^{-x} et par x.
  - Le maximum vaut 4/e² : compare-le à 1 pour traiter f(x) = 1, puis à 1/2 pour f(x) = 1/2.
  - Pour f(x) = 1/2, utilise le TVI sur [0 ; 2] et [2 ; 4] avec les valeurs f(0), f(2), f(4).
  - Pour la dernière question, égale les exposants : l'exponentielle est strictement croissante.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R}$ par

$$
f(x) = x^2 e^{-x}.
$$

**Partie A — Étude de $f$**

1. Calculer $f'(x)$ et le mettre sous la forme $x\, e^{-x}(2 - x)$.
2. Déterminer le signe de $f'(x)$ puis dresser le tableau de variations de $f$.
3. Calculer $\lim\limits_{x \to +\infty} f(x)$ et $\lim\limits_{x \to -\infty} f(x)$, et préciser l'asymptote horizontale éventuelle de $\mathcal{C}_f$.

**Partie B — Résolution d'équations**

4. Montrer que l'équation $f(x) = 1$ n'admet **aucune** solution dans $\mathbb{R}$.
5. Montrer que l'équation $f(x) = \dfrac{1}{2}$ admet exactement **deux** solutions dans $]0\,;\,+\infty[$ : une dans $]0\,;\,2[$ et une dans $]2\,;\,4[$.

**Partie C — Équations exponentielles**

6. Résoudre sur $\mathbb{R}$ l'équation $e^{x^2 - 3} = e^{2x}$.
7. Résoudre sur $\mathbb{R}$ l'inéquation $e^{x^2 - 3} < e^{2x}$.

## Solution

**Partie A**

**1.** $f$ est produit de $x \mapsto x^2$ et de $x \mapsto e^{-x}$ (dérivable, avec $(e^{-x})' = -e^{-x}$) :

$$
f'(x) = 2x\, e^{-x} + x^2 (-e^{-x}) = 2x\, e^{-x} - x^2 e^{-x}.
$$

En factorisant par $e^{-x}$ puis par $x$ :

$$
f'(x) = e^{-x}\,(2x - x^2) = x\, e^{-x}\,(2 - x).
$$

**2.** $e^{-x} > 0$ pour tout $x$ : le signe de $f'(x)$ est celui de $x(2-x)$, qui s'annule en $0$ et $2$.

- $x < 0$ : $x < 0$ et $2 - x > 0$, donc $f'(x) < 0$ ;
- $0 < x < 2$ : $x > 0$ et $2 - x > 0$, donc $f'(x) > 0$ ;
- $x > 2$ : $x > 0$ et $2 - x < 0$, donc $f'(x) < 0$.

Tableau de variations :

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | $+\infty$ | $\searrow$ | $0$ | $\nearrow$ | $\dfrac{4}{e^2}$ | $\searrow$ | $0$ |

**3.**

$$
\lim_{x \to +\infty} x^2 e^{-x} = \lim_{x \to +\infty} \frac{x^2}{e^{x}} = 0
$$

(car l'exponentielle diverge plus vite que toute puissance : croissance comparée). Donc la droite $y = 0$ est **asymptote horizontale** de $\mathcal{C}_f$ en $+\infty$.

Quand $x \to -\infty$ : $x^2 \to +\infty$ et $e^{-x} = e^{|x|} \to +\infty$, donc

$$
\lim_{x \to -\infty} f(x) = +\infty .
$$

**Partie B**

**4.** D'après le tableau, le **maximum** de $f$ est $f(2) = \dfrac{4}{e^2}$.

Or $e \approx 2{,}718 > 2$, donc $e^2 > 4$ et

$$
f(x) \leq \frac{4}{e^2} < 1 \quad \text{pour tout } x \in \mathbb{R}.
$$

La valeur $1$ n'est **jamais** atteinte : l'équation $f(x) = 1$ n'admet **aucune solution**.

**5.** $f$ est continue sur $\mathbb{R}$ (produit de fonctions continues).

Sur $[0\,;\,2]$ : $f(0) = 0 < \dfrac{1}{2}$ et $f(2) = \dfrac{4}{e^2} \approx 0{,}541 > \dfrac{1}{2}$ (car $4 > 2$... plus précisément $e^2 \approx 7{,}39$ donc $\dfrac{4}{e^2} \approx 0{,}541$). Par le **théorème des valeurs intermédiaires**, il existe $c_1 \in \,]0\,;\,2[$ tel que $f(c_1) = \dfrac{1}{2}$. Comme $f$ est **strictement croissante** sur $]0\,;\,2[$, cette solution est **unique** sur cet intervalle.

Sur $[2\,;\,4]$ : $f(2) \approx 0{,}541 > \dfrac{1}{2}$ et $f(4) = 16\, e^{-4} = \dfrac{16}{e^4} \approx \dfrac{16}{54{,}6} \approx 0{,}293 < \dfrac{1}{2}$. Par le TVI, il existe $c_2 \in \,]2\,;\,4[$ tel que $f(c_2) = \dfrac{1}{2}$, **unique** car $f$ est strictement décroissante sur $]2\,;\,+\infty[$.

**Remarque :** l'énoncé porte sur $]0\,;\,+\infty[$. Sur $]-\infty\,;\,0[$ au contraire, $f$ décroît de $+\infty$ à $0$ : comme $f(-1) = e \approx 2{,}72 > \dfrac{1}{2}$ et $f(0) = 0 < \dfrac{1}{2}$, le TVI y fournit encore une solution (une seule, $f$ y étant strictement décroissante). Sur $\mathbb{R}$ entier, l'équation admet donc **trois** solutions ; la restriction à $]0\,;\,+\infty[$ en retient **deux**, comme demandé : $c_1 \in \,]0\,;\,2[$ et $c_2 \in \,]2\,;\,4[$.

**Partie C**

**6.** $x \mapsto e^x$ est strictement croissante :

$$
e^{x^2 - 3} = e^{2x} \iff x^2 - 3 = 2x \iff x^2 - 2x - 3 = 0 \iff (x - 3)(x + 1) = 0 .
$$

D'où

$$
x = -1 \quad \text{ou} \quad x = 3, \qquad \text{soit } \{-1\,;\,3\}.
$$

**7.** Même raisonnement, l'inégalité se transfère sur les exposants :

$$
e^{x^2 - 3} < e^{2x} \iff x^2 - 3 < 2x \iff x^2 - 2x - 3 < 0 \iff (x-3)(x+1) < 0 .
$$

Le trinôme $x^2 - 2x - 3$ est **négatif entre ses racines** $-1$ et $3$ :

$$
x \in \,]-1\,;\,3[ .
$$

:::methode Ce que le correcteur attend
- Dérivée produit correcte et **factorisée** $x e^{-x}(2-x)$, avec la mention $e^{-x} > 0$.
- Tableau complet avec les valeurs $0$, $\dfrac{4}{e^2}$ et les deux limites.
- Asymptote $y = 0$ justifiée par un calcul de limite.
- Pour l'existence : TVI cité (continuité + signes contraires) ; pour l'unicité : sens de variation.
- Équations exponentielles : comparaison des exposants justifiée par la monotonie de $e^x$.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points (1 + 2 + 1). Partie B : 3 points (1,5 + 1,5). Partie C : 3 points (1,5 + 1,5). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
