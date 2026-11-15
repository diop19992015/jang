---
titre: Tangente et variations d'un polynôme
difficulte: 1
type: entrainement
demo: true
indices:
  - Commence par calculer la fonction dérivée terme à terme.
  - Pour la tangente, il te faut $f'(a)$ et $f(a)$.
  - Le signe de $f'$ se lit sur le tableau de signes du trinôme.
---

## Énoncé

Soit $f$ la fonction définie sur $\mathbb{R}$ par
$$
f(x)=x^3-3x^2+2.
$$

1. Calculer $f'(x)$ pour tout réel $x$.
2. Déterminer l'équation de la tangente $T$ à la courbe de $f$ au point d'abscisse $1$.
3. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$.
4. En déduire les extremums locaux de $f$.

## Solution

**1. Fonction dérivée.**

$f$ est une fonction polynôme, donc dérivable sur $\mathbb{R}$. On dérive terme à terme :
$$
f'(x)=3x^2-6x=3x(x-2).
$$

**2. Tangente en $a=1$.**

On calcule $f(1)=1-3+2=0$ et $f'(1)=3\times 1^2-6\times 1=-3$.

La tangente a pour équation :
$$
y=f'(1)(x-1)+f(1)=-3(x-1)+0=-3x+3.
$$

Donc $T: y=-3x+3$.

**3. Signe de la dérivée et variations.**

$f'(x)=3x(x-2)$ est un produit de facteurs. Le facteur $3$ est positif, $x$ change de signe en $0$, et $x-2$ change de signe en $2$. On obtient :

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $x$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x-2$ | | $-$ | | $-$ | $0$ | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $2$ | $\searrow$ | $-2$ | $\nearrow$ | $+\infty$ |

On vérifie les valeurs : $f(0)=2$ et $f(2)=8-12+2=-2$. Les limites sont $\lim_{x\to-\infty}f(x)=-\infty$ et $\lim_{x\to+\infty}f(x)=+\infty$ (terme de plus haut degré $x^3$).

**4. Extremums locaux.**

- $f'$ s'annule en $0$ en passant de $+$ à $-$ : $f$ admet un **maximum local** en $0$, égal à $f(0)=2$.
- $f'$ s'annule en $2$ en passant de $-$ à $+$ : $f$ admet un **minimum local** en $2$, égal à $f(2)=-2$.

Ces extremums sont seulement locaux : $f$ tend vers $-\infty$ en $-\infty$ et vers $+\infty$ en $+\infty$.

:::remarque Vérification graphique
La tangente en $1$ a pour pente $-3$, ce qui est cohérent : entre $0$ et $2$, la fonction décroît, donc la pente est négative. Le point $(1\,;\,0)$ est un point d'inflexion, la courbe change de concavité.
:::
