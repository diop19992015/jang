---
titre: Sujet type BAC — Étude d'une fonction rationnelle et accroissements finis
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour f'(x), utilise la règle du quotient et développe soigneusement le numérateur.
  - Le signe de f' se déduit du numérateur 4x, le dénominateur étant toujours positif.
  - Pour l'asymptote horizontale, divise numérateur et dénominateur par x².
  - Pour la partie C, pose φ(x) = ln x sur [1 ; 1,5] et encadre 1/x sur cet intervalle.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R}$ par

$$
f(x) = \frac{x^2 - 1}{x^2 + 1}.
$$

**Partie A — Étude de $f$**

1. Calculer $f'(x)$ et déterminer le signe de $f'(x)$.
2. Dresser le tableau de variations de $f$ et conclure sur l'extremum de $f$.
3. Calculer $f(0)$ et résoudre l'équation $f(x) = 0$.

**Partie B — Géométrie**

4. Calculer $\lim\limits_{x \to +\infty} f(x)$ et $\lim\limits_{x \to -\infty} f(x)$, puis en déduire une asymptote horizontale de $\mathcal{C}_f$.
5. Déterminer l'équation de la tangente $T$ à la courbe de $f$ au point d'abscisse $1$.
6. Donner une équation de la tangente au point d'abscisse $-1$ sans nouveau calcul, en justifiant.

**Partie C — Accroissements finis**

7. En appliquant le théorème des accroissements finis à $\varphi(x) = \ln x$ sur $[1\,;\,1{,}5]$, démontrer que

$$
\frac{1}{3} \leq \ln 1{,}5 \leq \frac{1}{2}.
$$

## Solution

**Partie A**

**1.** $f$ est un quotient de polynômes, donc dérivable sur $\mathbb{R}$ (le dénominateur $x^2+1 \geq 1$ ne s'annule jamais). La règle du quotient donne :

$$
f'(x) = \frac{2x(x^2+1) - (x^2-1) \cdot 2x}{(x^2+1)^2} = \frac{2x^3 + 2x - 2x^3 + 2x}{(x^2+1)^2} = \frac{4x}{(x^2+1)^2}.
$$

Le dénominateur $(x^2+1)^2$ est **strictement positif** pour tout $x$ : le signe de $f'(x)$ est celui de $4x$, c'est-à-dire celui de $x$ :

- $f'(x) < 0$ pour $x < 0$ ;
- $f'(0) = 0$ ;
- $f'(x) > 0$ pour $x > 0$.

**2.** Tableau de variations :

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $1$ | $\searrow$ | $-1$ | $\nearrow$ | $1$ |

(Les limites à $\pm\infty$ sont calculées en partie B ; on peut aussi les calculer d'emblée.)

$f'$ change de signe de $-$ à $+$ en $0$ : $f$ admet un **minimum en $0$**, de valeur $f(0) = \dfrac{-1}{1} = -1$.

**3.** $f(0) = -1$. Résolution de $f(x) = 0$ :

$$
\frac{x^2 - 1}{x^2 + 1} = 0 \iff x^2 - 1 = 0 \iff x = 1 \;\text{ ou }\; x = -1
$$

(le dénominateur ne s'annule jamais, il n'y a donc pas de valeur d'exclusion).

Ensemble des solutions : $\{-1\,;\,1\}$.

**Partie B**

**4.** On divise numérateur et dénominateur par $x^2$ :

$$
f(x) = \frac{1 - \frac{1}{x^2}}{1 + \frac{1}{x^2}} \xrightarrow[x \to \pm\infty]{} \frac{1 - 0}{1 + 0} = 1 .
$$

Donc $\lim\limits_{x \to +\infty} f(x) = \lim\limits_{x \to -\infty} f(x) = 1$ : la droite $y = 1$ est une **asymptote horizontale** de $\mathcal{C}_f$ (des deux côtés).

**5.** En $x = 1$ :

$$
f(1) = \frac{1 - 1}{1 + 1} = 0, \qquad f'(1) = \frac{4}{(1+1)^2} = \frac{4}{4} = 1.
$$

La tangente $T$ a pour équation :

$$
y = f'(1)(x - 1) + f(1) = 1 \cdot (x - 1) + 0, \qquad \text{soit} \qquad T : y = x - 1 .
$$

**6.** $f$ est une fonction **paire** : $f(-x) = f(x)$ car $(-x)^2 = x^2$. Sa courbe est donc symétrique par rapport à l'axe des ordonnées.

La tangente en $(-1\,;\,f(-1))$ est le symétrique de $T$ par l'axe des ordonnées : on change $x$ en $-x$ dans l'équation, ce qui donne

$$
y = -x - 1 .
$$

Vérification directe : $f(-1) = 0$ et $f'(-1) = \dfrac{-4}{4} = -1$, d'où $y = -1 \cdot (x + 1) + 0 = -x - 1$. ✓

**Partie C**

**7.** $\varphi(x) = \ln x$ est continue sur $[1\,;\,1{,}5]$ et dérivable sur $]1\,;\,1{,}5[$ avec $\varphi'(x) = \dfrac{1}{x}$ : le théorème des accroissements finis s'applique. Il existe $\xi \in \,]1\,;\,1{,}5[$ tel que

$$
\varphi(1{,}5) - \varphi(1) = \varphi'(\xi)\,(1{,}5 - 1), \qquad \text{soit} \qquad \ln 1{,}5 - 0 = \frac{0{,}5}{\xi}.
$$

La fonction $x \mapsto \dfrac{1}{x}$ est strictement décroissante sur $[1\,;\,1{,}5]$ et $1 < \xi < 1{,}5$, donc :

$$
\frac{1}{1{,}5} < \frac{1}{\xi} < \frac{1}{1}, \qquad \text{c'est-à-dire} \qquad \frac{2}{3} < \frac{1}{\xi} < 1 .
$$

En multipliant par $0{,}5$ :

$$
\frac{0{,}5 \times 2}{3} < \ln 1{,}5 < 0{,}5, \qquad \text{soit} \qquad \frac{1}{3} < \ln 1{,}5 < \frac{1}{2}.
$$

L'inégalité **non stricte** demandée est démontrée. Vérification numérique : $\ln 1{,}5 \approx 0{,}405$, bien dans $\left[\dfrac{1}{3}\,;\,\dfrac{1}{2}\right] = [0{,}333\,;\,0{,}5]$. ✓

:::methode Ce que le correcteur attend
- La dérivée du quotient avec le numérateur simplifié $4x$ et la mention que le dénominateur est positif.
- Un tableau de variations complet (limites aux bornes comprises) et le minimum identifié.
- L'asymptote horizontale justifiée par un calcul de limite, pas affirmée.
- La tangente obtenue avec la formule $y = f'(a)(x-a) + f(a)$.
- Le théorème des accroissements finis cité avec ses hypothèses, puis l'encadrement de $1/\xi$ **et** la multiplication par $0{,}5$.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points (1 + 2 + 1). Partie B : 3 points (1 + 1 + 1). Partie C : 3 points (théorème 1,5 + encadrement 1,5). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
