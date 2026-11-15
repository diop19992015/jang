---
titre: Sujet type BAC — Étude complète de fonction
difficulte: 3
type: bac
annee: 2023
indices:
  - Suis la procédure : domaine, limites, asymptotes, dérivée, variations, représentation.
  - Pour la parité, teste d'abord la symétrie du domaine avant de calculer f(−x).
  - Lis le nombre de solutions de f(x) = k directement sur le tableau de variations.
---

## Énoncé

On considère la fonction $f$ définie sur $]-\infty\,;\,1[ \;\cup\; \,]1\,;\,+\infty[$ par

$$
f(x) = \frac{x^2}{x-1}.
$$

**Partie A — Domaine et limites**

1. Justifier que le domaine de $f$ est $D_f = \mathbb{R} \setminus \{1\}$.
2. Calculer $\lim\limits_{x \to 1^-} f(x)$ et $\lim\limits_{x \to 1^+} f(x)$, puis en déduire une asymptote verticale de la courbe de $f$.
3. Calculer $\lim\limits_{x \to -\infty} f(x)$ et $\lim\limits_{x \to +\infty} f(x)$.

**Partie B — Parité et asymptotes**

4. $f$ est-elle paire, impaire, ou ni l'un ni l'autre ? Justifier.
5. Effectuer la division euclidienne de $x^2$ par $x - 1$ et en déduire l'équation de l'asymptote oblique de la courbe de $f$.

**Partie C — Dérivée et variations**

6. Calculer $f'(x)$, puis déterminer les points critiques de $f$.
7. Dresser le tableau de variations de $f$ sur $D_f$.
8. Résoudre l'équation $f(x) = 4$, puis donner le nombre de solutions de l'équation $f(x) = 5$.

**Partie D — Représentation graphique**

9. Représenter la courbe de $f$ en respectant les asymptotes (tracées en tirets) et les points particuliers trouvés.

## Solution

**Partie A**

**1. Domaine.**

$f$ est une fonction rationnelle : il faut que le dénominateur soit non nul, soit $x - 1 \neq 0$, donc $x \neq 1$. Aucune autre restriction (le numérateur $x^2$ est défini partout).

$$
D_f = \mathbb{R} \setminus \{1\} = \;]-\infty\,;\,1[ \;\cup\; \,]1\,;\,+\infty[.
$$

**2. Limites en $1$.**

Le numérateur tend vers $1$ en $1$ (il vaut $1^2 = 1 \neq 0$), le dénominateur change de signe :

$$
\lim_{x \to 1^-} f(x) = \frac{1}{0^-} = -\infty, \qquad
\lim_{x \to 1^+} f(x) = \frac{1}{0^+} = +\infty.
$$

La limite est infinie au moins d'un côté : **$x = 1$ est asymptote verticale** de la courbe de $f$.

**3. Limites en $\pm\infty$.**

Pour $x \neq 1$, on écrit $f(x) = \dfrac{x^2}{x-1}$. Le degré du numérateur ($2$) est strictement supérieur d'unité au degré du dénominateur ($1$), donc $|f(x)| \to +\infty$. Plus précisément, le quotient des coefficients dominants donne la pente :

$$
\lim_{x \to +\infty} f(x) = +\infty, \qquad \lim_{x \to -\infty} f(x) = -\infty.
$$

(En effet pour $x$ très négatif : numérateur $> 0$ grand, dénominateur $< 0$ grand en valeur absolue, quotient négatif.) Il n'y a donc **pas d'asymptote horizontale**.

**Partie B**

**4. Parité.**

$D_f = \mathbb{R} \setminus \{1\}$ : or $1 \in D_f$ est exclu alors que son opposé $-1 \in D_f$. Le domaine **n'est pas stable par l'opposé** (il est asymétrique). Donc $f$ n'est ni paire ni impaire.

*(Même sans ce constat, on verrait que $f(-x) = \dfrac{x^2}{-x-1} = -\dfrac{x^2}{x+1}$ ne coïncide ni avec $f(x)$ ni avec $-f(x)$ : $f$ est bien ni paire ni impaire.)*

**5. Division euclidienne et asymptote oblique.**

On cherche $q$ et $r$ tels que $x^2 = (x-1)q(x) + r$ :

$$
x^2 = (x-1)(x+1) + 1.
$$

Vérification : $(x-1)(x+1) + 1 = x^2 - 1 + 1 = x^2$. ✓ Donc

$$
f(x) = \frac{(x-1)(x+1) + 1}{x-1} = x + 1 + \frac{1}{x-1}.
$$

Quand $x \to \pm\infty$, $\dfrac{1}{x-1} \to 0$, donc

$$
\lim_{x \to \pm\infty} \big(f(x) - (x+1)\big) = 0.
$$

**$y = x + 1$ est asymptote oblique** de la courbe de $f$ (de chaque côté).

**Partie C**

**6. Dérivée et points critiques.**

Par la formule du quotient :

$$
f'(x) = \frac{2x(x-1) - x^2 \times 1}{(x-1)^2} = \frac{2x^2 - 2x - x^2}{(x-1)^2} = \frac{x^2 - 2x}{(x-1)^2} = \frac{x(x-2)}{(x-1)^2}.
$$

Le dénominateur est strictement positif pour $x \neq 1$, donc le signe de $f'(x)$ est celui de $x(x-2)$ :

- $f'(x) > 0$ sur $]-\infty\,;\,0[$ et sur $]2\,;\,+\infty[$ ;
- $f'(0) = 0$ et $f'(2) = 0$ ;
- $f'(x) < 0$ sur $]0\,;\,1[$ et sur $]1\,;\,2[$.

Les points critiques sont $x = 0$ et $x = 2$.

**7. Tableau de variations.**

Valeurs : $f(0) = \dfrac{0}{-1} = 0$ et $f(2) = \dfrac{4}{1} = 4$.

| $x$ | $-\infty$ | $0$ | $1$ | $2$ | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | / | $-$ | $0$ | $+$ |
| $f(x)$ | $-\infty$ | $\nearrow$ | $0$ | $-\infty$ | $+\infty$ | $4$ | $\searrow$ | $\nearrow$ | $+\infty$ |

Lecture : sur $]-\infty\,;\,0[$, $f$ croît de $-\infty$ à $f(0) = 0$ ; sur $]0\,;\,1[$, $f$ décroît de $0$ à $-\infty$ (limite en $1^-$) ; sur $]1\,;\,2[$, $f$ décroît de $+\infty$ (limite en $1^+$) à $f(2) = 4$ ; sur $]2\,;\,+\infty[$, $f$ croît de $4$ à $+\infty$.

**8. Équations $f(x) = 4$ et $f(x) = 5$.**

*$f(x) = 4$ :* d'après le tableau, sur $]1\,;\,+\infty[$, $f$ décroît de $+\infty$ à $4$ puis croît de $4$ à $+\infty$ : la valeur $4$ est atteinte **en un seul point**, le minimum $x = 2$ (car $f(2) = 4$ et $f$ est strictement croissante avant/après sur chaque morceau). Sur $]-\infty\,;\,1[$, $f$ varie de $-\infty$ à $0$ puis de $0$ à $-\infty$ : elle ne prend que des valeurs $\leq 0$, donc jamais $4$.

Réponse : **$f(x) = 4$ admet pour unique solution $x = 2$.**

*$f(x) = 5$ :* la valeur $5 > 4$ : sur $]1\,;\,2[$, $f$ décroît de $+\infty$ à $4$, donc elle prend la valeur $5$ une fois ; sur $]2\,;\,+\infty[$, $f$ croît de $4$ à $+\infty$, donc elle prend la valeur $5$ une fois aussi. Sur $]-\infty\,;\,1[$, les valeurs sont $\leq 0$.

**$f(x) = 5$ admet exactement 2 solutions.**

**Partie D**

**9. Représentation graphique.**

Consignes de tracé :

1. Tracer en **tirets** l'asymptote verticale $x = 1$ et l'asymptote oblique $y = x + 1$.
2. Placer les points particuliers : $O(0\,;\,0)$ (intersection à l'origine) et $M(2\,;\,4)$ (minimum).
3. Reporter les limites : la courbe monte vers $-\infty$ à gauche de $0$, redescend vers $-\infty$ en approchant $1$ par la gauche, part de $+\infty$ juste à droite de $1$, descend jusqu'à $M(2\,;\,4)$, puis remonte indéfiniment en suivant l'asymptote oblique.
4. La courbe ne touche **jamais** l'asymptote verticale $x = 1$ et s'approche de $y = x + 1$ sans la traverser au voisinage de $\pm\infty$.

:::methode Ce que le correcteur attend
- Le domaine écrit en **intervalles** avec la condition $x - 1 \neq 0$.
- Chaque limite justifiée par le signe du dénominateur ($0^+$ ou $0^-$).
- La division euclidienne montrée **avant** l'annonce de l'asymptote oblique.
- Le tableau de variations avec les **valeurs** $f(0)$, $f(2)$ et les **limites aux bornes**.
- Le nombre de solutions de $f(x) = k$ lu sur le tableau (pas par un calcul algébrique seul).
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points ($0{,}5 + 1 + 1{,}5$). Partie B : 2,5 points ($1 + 1{,}5$). Partie C : 3 points ($1 + 1{,}5 + 0{,}5$). Partie D : 1,5 points (asymptotes en tirets : 0,5 ; points particuliers : 0,5 ; respect des limites : 0,5).
:::
