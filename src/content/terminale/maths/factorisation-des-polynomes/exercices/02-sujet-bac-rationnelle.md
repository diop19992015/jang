---
titre: Sujet type BAC — Signe d'une fonction rationnelle et inéquation
difficulte: 3
type: bac
annee: 2023
indices:
  - Commence par factoriser le numérateur et le dénominateur avant tout tableau de signes.
  - Les zéros viennent du numérateur, les pôles viennent du dénominateur (tiret dans le tableau).
  - Écris la solution de l'inéquation sous forme d'intervalles.
---

## Énoncé

On considère la fonction $f$ définie par

$$
f(x) = \frac{x^2 - x - 6}{x^2 - 4x + 4}.
$$

**Partie A — Domaine et factorisation**

1. Déterminer l'ensemble de définition $D$ de $f$.
2. Factoriser le numérateur puis le dénominateur de $f$.
3. Déterminer les zéros et les pôles de $f$.

**Partie B — Signe et équation**

4. Dresser le tableau de signes de $f$ sur $D$.
5. Résoudre dans $D$ l'équation $f(x) = 0$.
6. Résoudre dans $D$ l'inéquation $f(x) \geq 0$.

**Partie C — Limite et étude complémentaire**

7. Calculer $\lim\limits_{x \to +\infty} f(x)$ et justifier que $y = 1$ est une asymptote horizontale.
8. Déterminer l'équation de la tangente à la courbe de $f$ au point d'abscisse $3$, si elle existe.

## Solution

**Partie A**

**1. Domaine de $f$.**

Il faut $x^2 - 4x + 4 \neq 0$. Comme $x^2 - 4x + 4 = (x-2)^2$ n'est nul qu'en $x = 2$ :

$$
D = \mathbb{R} \setminus \{2\} = \,]-\infty\,;\,2[ \;\cup\; \,]2\,;\,+\infty[.
$$

**2. Factorisations.**

Numérateur : $\Delta = 1 + 24 = 25$, racines $\dfrac{1 \pm 5}{2}$, soit $3$ et $-2$ :

$$
N(x) = x^2 - x - 6 = (x-3)(x+2).
$$

Dénominateur :

$$
D(x) = x^2 - 4x + 4 = (x-2)^2.
$$

Donc

$$
f(x) = \frac{(x-3)(x+2)}{(x-2)^2}.
$$

**3. Zéros et pôles.**

- Zéros (numérateur nul) : $x = -2$ et $x = 3$.
- Pôles (dénominateur nul) : $x = 2$ (ordre 2 : le carré $(x-2)^2$ ne change **pas** de signe).

**Partie B**

**4. Tableau de signes.**

Le facteur $(x-2)^2$ est positif partout où $f$ est définie.

| $x$ | $-\infty$ | $-2$ | | $2$ | | $3$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $x + 2$ | $-$ | $0$ | $+$ | $+$ | | $+$ | | $+$ |
| $x - 3$ | $-$ | $-$ | | $-$ | | $0$ | $+$ | |
| $(x-2)^2$ | $+$ | $+$ | | $|$ | $+$ | $+$ | | $+$ |
| $f(x)$ | $-$ | $0$ | $+$ | — | $+$ | $0$ | $+$ | |

**5. Équation $f(x) = 0$ dans $D$.**

$f(x) = 0 \iff N(x) = 0$ et $x \in D$, donc $(x-3)(x+2) = 0$ avec $x \neq 2$.

$$
S = \{-2\,;\,3\}.
$$

**6. Inéquation $f(x) \geq 0$ dans $D$.**

Le dénominateur étant strictement positif sur $D$, le signe de $f$ est celui du numérateur :

$$
(x-3)(x+2) \geq 0 \iff x \leq -2 \;\text{ ou }\; x \geq 3.
$$

$$
\boxed{S = \,]-\infty\,;\,-2] \;\cup\; \,[3\,;\,+\infty[}
$$

Le point $x = 2$ est exclu de toute façon (pas dans l'intervalle).

**Partie C**

**7. Limite en $+\infty$.**

En divisant numérateur et dénominateur par $x^2$ :

$$
f(x) = \frac{1 - \dfrac{1}{x} - \dfrac{6}{x^2}}{1 - \dfrac{4}{x} + \dfrac{4}{x^2}} \xrightarrow[x \to +\infty]{} \frac{1 - 0 - 0}{1 - 0 + 0} = 1.
$$

Donc $\lim\limits_{x \to +\infty} f(x) = 1$, ce qui montre que $y = 1$ est une **asymptote horizontale** de la courbe de $f$.

**8. Tangente en $x = 3$.**

On utilise la formule de dérivation d'un quotient avec $N(x) = x^2-x-6$ et $\mathcal{D}(x) = (x-2)^2$ :

$$
N'(x) = 2x - 1, \qquad \mathcal{D}'(x) = 2(x-2).
$$

$$
f'(x) = \frac{N'(x)\,\mathcal{D}(x) - N(x)\,\mathcal{D}'(x)}{\mathcal{D}(x)^2}
= \frac{(2x-1)(x-2)^2 - (x^2-x-6)\cdot 2(x-2)}{(x-2)^4}.
$$

En factorisant $(x-2)$ :

$$
f'(x) = \frac{(x-2)\big[(2x-1)(x-2) - 2(x^2-x-6)\big]}{(x-2)^4}
= \frac{2x^2 - 5x + 2 - 2x^2 + 2x + 12}{(x-2)^3}
= \frac{-3x + 14}{(x-2)^3}.
$$

Pour $x = 3$ :

$$
f(3) = 0, \qquad f'(3) = \frac{-9 + 14}{(3-2)^3} = 5.
$$

La tangente en $A(3\,;\,0)$ a pour équation

$$
y = 5(x - 3) + 0 \quad \text{c'est-à-dire} \quad y = 5x - 15.
$$

:::methode Ce que le correcteur attend
- Le domaine justifié par la factorisation $(x-2)^2 \neq 0$.
- Un tableau de signes complet avec le tiret au pôle $x=2$ et le rappel que $(x-2)^2 \geq 0$.
- La solution de l'inéquation en **intervalles**.
- Une limite en $+\infty$ obtenue en divisant par le plus haut degré.
- La tangente avec $f(3)$, $f'(3)$ et l'équation développée.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points (1 + 1 + 1). Partie B : 4 points (1 + 1 + 2). Partie C : 3 points (1,5 + 1,5). L'absence de tableau de signes coûte au moins 1 point, même si la réponse finale est juste.
:::
