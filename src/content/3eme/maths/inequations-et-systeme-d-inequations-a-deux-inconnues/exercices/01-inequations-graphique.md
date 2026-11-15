---
titre: Inéquations à deux inconnues et système graphique
difficulte: 1
type: entrainement
indices:
  - Pour l’inéquation à une inconnue, isole $x$ puis pense au changement de sens si tu divises par un négatif.
  - Pour tester un point, remplace simplement ses coordonnées dans l’inéquation.
  - Pour tracer une droite frontière, prends les deux points où elle coupe les axes.
---

## Énoncé

**1.** Résoudre l’inéquation suivante :
$$
-5x + 2 > 17
$$

**2.** Dire si les points $P(3, 2)$ et $Q(4, 5)$ sont solutions de l’inéquation
$$
x + 2y \le 10
$$

**3.** Construire un jeu de solutions de $2x + y \le 8$ où $x$ et $y$ sont des entiers positifs ou nuls.

**4.** Résoudre graphiquement le système $(S)$ suivant :
$$
(S) : \left\{
\begin{aligned}
x + y &\le 6 \\
x + 2y &\le 8
\end{aligned}
\right.
$$
Indiquer si le point $I(4, 2)$ appartient à la solution.

## Solution

**1. Résolution de $-5x + 2 > 17$.**

On soustrait $2$ des deux membres (le sens ne change pas) :
$$
-5x > 17 - 2 = 15
$$

On divise par $-5$ : comme $-5$ est un nombre négatif, on **renverse le sens** :
$$
x < \frac{15}{-5} \implies x < -3
$$

**Solution :** tous les nombres réels strictement inférieurs à $-3$.

Vérification avec $x = -4$ (qui vérifie $x < -3$) : $-5 \times (-4) + 2 = 20 + 2 = 22 > 17$ ✓.  
Avec $x = 0$ (qui ne vérifie pas) : $0 + 2 = 2 > 17$ est faux, le sens est bien le bon.

**2. Test des points $P(3, 2)$ et $Q(4, 5)$.**

Pour $P(3, 2)$ : on remplace $x = 3$ et $y = 2$ :
$$
x + 2y = 3 + 2 \times 2 = 3 + 4 = 7 \le 10 \text{ (vrai)}
$$
Le point $P(3, 2)$ **est** solution.

Pour $Q(4, 5)$ :
$$
x + 2y = 4 + 2 \times 5 = 4 + 10 = 14 \le 10 \text{ (faux)}
$$
Le point $Q(4, 5)$ **n’est pas** solution.

**3. Jeu de solutions de $2x + y \le 8$ ($x, y$ entiers positifs ou nuls).**

- Pour $x = 0$ : $y \le 8$, donc $y \in \{0, 1, \dots, 8\}$.
- Pour $x = 1$ : $2 + y \le 8$, donc $y \le 6$.
- Pour $x = 2$ : $4 + y \le 8$, donc $y \le 4$.
- Pour $x = 3$ : $6 + y \le 8$, donc $y \le 2$.
- Pour $x = 4$ : $8 + y \le 8$, donc $y = 0$.
- Pour $x \ge 5$ : $2x \ge 10 > 8$, aucune solution.

| $x$ | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| $y$ | 0 à 8 | 0 à 6 | 0 à 4 | 0 à 2 | 0 |

Par exemple $(2, 4)$ est solution : $2 \times 2 + 4 = 8 \le 8$ ✓, tandis que $(3, 4)$ n’en est pas : $2 \times 3 + 4 = 10 > 8$ ✗.

**4. Résolution graphique du système $(S)$.**

*Première frontière* : $x + y = 6$ passe par $A(6, 0)$ et $B(0, 6)$. Test de l’origine : $0 + 0 = 0 \le 6$ est vrai → on hachure la zone sous la droite, en **trait plein** (inéquation non stricte).

*Seconde frontière* : $x + 2y = 8$ passe par $C(8, 0)$ et $D(0, 4)$. Test de l’origine : $0 \le 8$ est vrai → on hachure aussi la zone sous cette droite, en **trait plein**.

La solution du système est la zone commune aux deux demi-plans (sous les deux droites, avec $x \ge 0$ et $y \ge 0$). Ses sommets sont $O(0, 0)$, $A(6, 0)$, $I(4, 2)$ et $D(0, 4)$ : en effet, entre $A$ et $I$ c’est la droite $x + y = 6$ qui délimite la zone, puis entre $I$ et $D$ c’est la droite $x + 2y = 8$.

Les deux frontières se coupent en résolvant :
$$
\left\{
\begin{aligned}
x + y &= 6 \\
x + 2y &= 8
\end{aligned}
\right.
$$

On soustrait la première de la seconde : $y = 2$, puis $x = 6 - 2 = 4$. Donc $I(4, 2)$.

Vérification de $I(4, 2)$ dans le système : $4 + 2 = 6 \le 6$ ✓ et $4 + 2 \times 2 = 8 \le 8$ ✓ : **le point $I(4, 2)$ appartient à la solution** (il est même sur les deux frontières).
