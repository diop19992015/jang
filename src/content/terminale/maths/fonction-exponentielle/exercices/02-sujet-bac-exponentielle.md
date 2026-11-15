---
titre: Sujet type BAC — Étude d’une fonction avec l’exponentielle
difficulte: 3
type: bac
annee: 2023
indices:
  - Écris le domaine avant tout, puis dérille en gardant e^x en facteur.
  - Rappelle toujours « e^x > 0 » pour conclure sur le signe de la dérivée.
  - Pour les limites en +∞, utilise la croissance comparée : e^x domine toute puissance.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R}$ par

$$
f(x) = (x - 1)\,e^x.
$$

**Partie A — Limites et équations**

1. Calculer $\lim\limits_{x \to -\infty} f(x)$ et $\lim\limits_{x \to +\infty} f(x)$.
2. Résoudre dans $\mathbb{R}$ l'équation $f(x) = 0$.
3. Résoudre dans $\mathbb{R}$ l'équation $e^{2x} - 3\,e^x + 2 = 0$.

**Partie B — Dérivée et variations**

4. Calculer $f'(x)$ en factorisant l'expression obtenue.
5. Déterminer le signe de $f'(x)$ et dresser le tableau de variations de $f$.
6. En déduire le nombre de solutions de l'équation $f(x) = \dfrac{1}{e}$.

**Partie C — Représentation graphique**

7. Représenter la courbe de $f$ en précisant l'asymptote horizontale et les points particuliers.

## Solution

**Partie A**

**1. Limites en $\pm\infty$.**

*En $-\infty$ :* $x - 1 \to -\infty$ et $e^x \to 0$ : forme $(-\infty) \times 0$. On pose $t = -x$ avec $t \to +\infty$ :

$$
f(x) = (-t - 1)\,e^{-t} = -\frac{t + 1}{e^t} \xrightarrow[t \to +\infty]{} 0
$$

car $e^t$ domine toute puissance (croissance comparée). Donc

$$
\lim_{x \to -\infty} f(x) = 0.
$$

*En $+\infty$ :* $x - 1 \to +\infty$ et $e^x \to +\infty$, tous deux positifs :

$$
\lim_{x \to +\infty} f(x) = +\infty.
$$

**2. Équation $f(x) = 0$.**

$$
(x - 1)\,e^x = 0.
$$

Comme $e^x > 0$ pour tout réel $x$ (jamais nul), le produit ne peut s'annuler que grâce à l'autre facteur :

$$
x - 1 = 0 \iff x = 1.
$$

$$
S = \{1\}
$$

**3. Équation $e^{2x} - 3\,e^x + 2 = 0$.**

C'est un trinôme en $e^x$. Posons $X = e^x$ (avec $X > 0$) :

$$
X^2 - 3X + 2 = (X - 1)(X - 2) = 0 \iff X = 1 \;\text{ ou }\; X = 2.
$$

Les deux racines sont positives : elles sont acceptées.

$$
e^x = 1 \Rightarrow x = 0, \qquad e^x = 2 \Rightarrow x = ln(2).
$$

$$
S = \{\,0\,;\,ln(2)\,\} \approx \{0\,;\,0{,}69\}
$$

**Partie B**

**4. Dérivée de $f$.**

On utilise $(u\,e^x)' = (u' + u)\,e^x$ avec $u(x) = x - 1$, $u'(x) = 1$ :

$$
f'(x) = \big(1 + (x - 1)\big)\,e^x = x\,e^x.
$$

$$
f'(x) = x\,e^x
$$

**5. Signe et tableau de variations.**

Comme $e^x > 0$ pour tout $x$, le signe de $f'(x)$ est celui de $x$ :

- $f'(x) < 0$ sur $]-\infty\,;\,0[$ ;
- $f'(0) = 0$ ;
- $f'(x) > 0$ sur $]0\,;\,+\infty[$.

Tableau de variations (avec $f(0) = (0-1)\,e^0 = -1$ et les limites de la question 1) :

| $x$ | $-\infty$ | $0$ | $+\infty$ |
| --- | --- | --- | --- |
| $f'(x)$ | $-$ | $0$ | $+$ |
| $f(x)$ | $0$ | $\searrow$ | $-1$ | $\nearrow$ | $+\infty$ |

$f$ est strictement **décroissante** sur $]-\infty\,;\,0[$ (de $0$ à $-1$) puis strictement **croissante** sur $]0\,;\,+\infty[$ (de $-1$ à $+\infty$). Elle admet un **minimum global** en $x = 0$, de valeur $f(0) = -1$.

**6. Nombre de solutions de $f(x) = \dfrac{1}{e}$.**

La valeur $k = \dfrac{1}{e} \approx 0{,}37$ est **positive**, donc strictement supérieure au minimum $-1$.

Lecture du tableau :

- sur $]-\infty\,;\,0[$ : $f$ varie de $0$ (non atteint) à $-1$ : elle ne prend que des valeurs dans $]-1\,;\,0[$, donc **jamais** $1/e$ ;
- sur $]0\,;\,+\infty[$ : $f$ croît de $-1$ à $+\infty$, donc elle prend la valeur $1/e$ **exactement une fois**.

$$
\boxed{\text{$f(x) = \dfrac{1}{e}$ admet exactement 1 solution.}}
$$

(Plus précisément, cette solution est comprise entre $1$ et $2$, car $f(1) = 0 < \dfrac{1}{e} < f(2) = e^2$ ; le BAC demande le **nombre** de solutions, pas leur valeur exacte.)

**Partie C**

**7. Représentation graphique.**

Éléments du tracé :

1. **Asymptote horizontale** : $y = 0$ à gauche, puisque $\lim\limits_{x \to -\infty} f(x) = 0$ (tracée en tirets sur la partie gauche seulement : à droite, la courbe diverge).
2. **Point particulier** : $A(1\,;\,0)$ (intersection avec l'axe des abscisses) et minimum $M(0\,;\,-1)$.
3. **Variations** : la courbe descend de l'asymptote $y = 0$ jusqu'à $M(0\,;\,-1)$, puis remonte en traversant $A(1\,;\,0)$ et en divergent vers $+\infty$.
4. **Comportement** : pour $x < 0$, la courbe est négative (entre $-1$ et $0$) ; pour $x > 1$, elle devient positive et croît très vite (croissance exponentielle).

:::methode Ce que le correcteur attend
- La remarque « $e^x > 0$ donc le signe de $f'$ est celui de $x$ » : elle est **nécessaire** pour le tableau de signes.
- La forme $(-\infty) \times 0$ identifiée avant le changement de variable $t = -x$.
- L'équation quadratique traitée par la substitution $X = e^x$ **avec** la condition $X > 0$.
- Le nombre de solutions de $f(x) = k$ obtenu par **lecture du tableau** (et non par approximation).
- L'asymptote $y = 0$ mentionnée avec sa limite justifiée.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3,5 points ($1{,}5 + 1 + 1$). Partie B : 4 points ($1 + 1{,}5 + 1{,}5$). Partie C : 2,5 points (asymptote : 1 ; points particuliers et variations : 1,5).
:::
