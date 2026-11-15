---
titre: Sujet type BAC — Résolution d’équations et d’inéquations
difficulte: 3
type: bac
annee: 2023
indices:
  - Écris les interdits avant tout calcul dès qu'un dénominateur apparaît.
  - Construis systématiquement le tableau de signes : il sert aux deux parties de la question.
  - Pour la partie graphique, relie chaque solution à la lecture des intersections avec l'horizontale.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R} \setminus \{-1\}$ par

$$
f(x) = \frac{x^2 + 2x - 3}{x + 1}.
$$

**Partie A — Factorisation et équations**

1. Factoriser le numérateur $x^2 + 2x - 3$.
2. Résoudre dans $\mathbb{R}$ l'équation $x^2 + 2x - 3 = 0$.
3. Résoudre dans $\mathbb{R}$ l'équation $f(x) = 0$.
4. Résoudre dans $\mathbb{R}$ l'équation $f(x) = x - 1$.

**Partie B — Inéquations**

5. Déterminer le signe de $f(x)$ sur $\mathbb{R} \setminus \{-1\}$ à l'aide d'un tableau de signes.
6. Résoudre dans $\mathbb{R}$ l'inéquation $f(x) > 0$.
7. Résoudre dans $\mathbb{R}$ l'inéquation $f(x) \leq 4$.

**Partie C — Résolution graphique**

8. On donne le graphique de $f$ (courbe admettant l'asymptote verticale $x = -1$ et l'asymptote oblique $y = x + 1$). En utilisant la représentation graphique, résoudre l'équation $f(x) = 4$ puis l'inéquation $f(x) < 4$.

## Solution

**Partie A**

**1. Factorisation du numérateur.**

On cherche deux nombres de produit $-3$ et de somme $+2$ : $+3$ et $-1$.

$$
x^2 + 2x - 3 = (x + 3)(x - 1).
$$

*Vérification :* $(x+3)(x-1) = x^2 - x + 3x - 3 = x^2 + 2x - 3$. ✓

**2. Équation $x^2 + 2x - 3 = 0$.**

Un produit est nul si un facteur l'est :

$$
x + 3 = 0 \Rightarrow x = -3, \qquad x - 1 = 0 \Rightarrow x = 1.
$$

$$
S = \{-3\,;\,1\}
$$

**3. Équation $f(x) = 0$.**

**Interdit :** $x + 1 \neq 0$, donc $x \neq -1$.

Le quotient est nul si le numérateur est nul et le dénominateur non nul :

$$
(x+3)(x-1) = 0 \;\text{ et }\; x \neq -1 \iff x = -3 \;\text{ ou }\; x = 1.
$$

Ni $-3$ ni $1$ n'est égal à $-1$ : aucun interdit n'est atteint.

$$
S = \{-3\,;\,1\}
$$

**4. Équation $f(x) = x - 1$.**

**Interdit :** $x \neq -1$.

$$
\frac{x^2 + 2x - 3}{x+1} = x - 1 \iff \frac{(x+3)(x-1)}{x+1} - (x-1) = 0.
$$

On met sur un même dénominateur :

$$
\frac{(x+3)(x-1) - (x-1)(x+1)}{x+1} = 0 \iff \frac{(x-1)\big[(x+3) - (x+1)\big]}{x+1} = 0 \iff \frac{2(x-1)}{x+1} = 0.
$$

Donc $2(x-1) = 0$ et $x \neq -1$, soit

$$
S = \{1\}.
$$

**Partie B**

**5. Signe de $f(x)$.**

**Interdit :** $x = -1$. Points de passage du numérateur : $x = -3$ et $x = 1$.

On étudie le signe de chaque facteur sur chaque intervalle délimité par $-3$, $-1$ et $1$ :

| Signe | $x < -3$ | $-3$ | $-3 < x < -1$ | $-1$ | $-1 < x < 1$ | $1$ | $x > 1$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $x + 3$ | $-$ | $0$ | $+$ | $+$ | $+$ | $+$ | $+$ |
| $x - 1$ | $-$ | $-$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $(x+3)(x-1)$ | $+$ | $0$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $x + 1$ | $-$ | $-$ | $-$ | interdit | $+$ | $+$ | $+$ |
| $f(x)$ | $-$ | $0$ | $+$ | interdit | $-$ | $0$ | $+$ |

*Contrôles :* $f(-4) = \dfrac{16 - 8 - 3}{-3} = -\dfrac{5}{3} < 0$ ; $f(-2) = \dfrac{4 - 4 - 3}{-1} = 3 > 0$ ; $f(0) = -3 < 0$ ; $f(2) = \dfrac{5}{3} > 0$. Les signes du tableau sont confirmés. ✓

**6. Inéquation $f(x) > 0$.**

D'après le tableau, $f(x) > 0$ sur $]-3\,;\,-1[$ et sur $]1\,;\,+\infty[$. L'inéquation est stricte : les zéros sont exclus et l'interdit aussi.

$$
S = \,]-3\,;\,-1[ \;\cup\; \,]1\,;\,+\infty[
$$

**7. Inéquation $f(x) \leq 4$.**

$$
f(x) \leq 4 \iff \frac{x^2 + 2x - 3}{x+1} - 4 \leq 0 \iff \frac{x^2 + 2x - 3 - 4(x+1)}{x+1} \leq 0 \iff \frac{x^2 - 2x - 7}{x+1} \leq 0.
$$

Le numérateur $x^2 - 2x - 7$ a pour discriminant $\Delta = 4 + 28 = 32$, donc $\sqrt{\Delta} = 4\sqrt{2}$ et ses racines sont

$$
\alpha = \frac{2 - 4\sqrt{2}}{2} = 1 - 2\sqrt{2} \approx -1{,}83, \qquad
\beta = \frac{2 + 4\sqrt{2}}{2} = 1 + 2\sqrt{2} \approx 3{,}83.
$$

Points de passage : $\alpha \approx -1{,}83$, $-1$ (interdit), $\beta \approx 3{,}83$, dans l'ordre croissant $\alpha < -1 < \beta$.

| Signe | $x < \alpha$ | $\alpha$ | $\alpha < x < -1$ | $-1$ | $-1 < x < \beta$ | $\beta$ | $x > \beta$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $x^2 - 2x - 7$ | $+$ | $0$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $x + 1$ | $-$ | $-$ | $-$ | interdit | $+$ | $+$ | $+$ |
| Quotient | $-$ | $0$ | $+$ | interdit | $-$ | $0$ | $+$ |

Le quotient est $\leq 0$ (négatif ou nul) sur $]-\infty\,;\,\alpha]$ et sur $]-1\,;\,\beta]$ (l'interdit $-1$ reste exclu, les zéros $\alpha$ et $\beta$ sont inclus).

$$
S = \,]-\infty\,;\,1 - 2\sqrt{2}\,] \;\cup\; \,]-1\,;\,1 + 2\sqrt{2}\,]
$$

**Partie C**

**8. Résolution graphique.**

La courbe de $f$ admet pour asymptote verticale $x = -1$ et pour asymptote oblique $y = x + 1$. L'horizontale $y = 4$ coupe la courbe en deux points.

*Équation $f(x) = 4$ :* les abscisses des points d'intersection sont les solutions. D'après la question 7, $f(x) = 4$ correspond aux bornes du quotient nul : $\dfrac{x^2 - 2x - 7}{x+1} = 0$ donne exactement $x = 1 - 2\sqrt{2} \approx -1{,}83$ et $x = 1 + 2\sqrt{2} \approx 3{,}83$.

$$
S = \{\,1 - 2\sqrt{2}\,;\,1 + 2\sqrt{2}\,\} \approx \{-1{,}83\,;\,3{,}83\}
$$

*Inéquation $f(x) < 4$ :* on lit les abscisses pour lesquelles la courbe est **strictement en dessous** de la droite $y = 4$, c'est-à-dire les mêmes intervalles que la question 7 mais **sans** les points de contact (les bornes où $f(x) = 4$ sont exclues) et sans l'interdit :

$$
S = \,]-\infty\,;\,1 - 2\sqrt{2}\,[ \;\cup\; \,]-1\,;\,1 + 2\sqrt{2}\,[
$$

:::methode Ce que le correcteur attend
- Les **interdits** écrits à chaque question impliquant un dénominateur.
- Le tableau de signes complet (facteur par facteur, avec la ligne du quotient).
- La mise sur un même dénominateur montrée avant chaque inéquation.
- La distinction stricte/non stricte : $<$ exclut les points de contact, $\leq$ les inclut (mais jamais l'interdit).
- La phrase « les solutions sont les abscisses des points d'intersection avec la droite $y = 4$ » dans la partie graphique.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3,5 points ($1 + 1 + 0{,}5 + 1$). Partie B : 4 points ($1 + 1{,}5 + 1{,}5$). Partie C : 2,5 points ($1 + 1{,}5$). Un tableau de signes incomplet (sans la ligne du quotient) coûte la moitié du point de la question 5.
:::
