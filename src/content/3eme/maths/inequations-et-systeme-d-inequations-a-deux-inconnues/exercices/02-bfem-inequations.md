---
titre: Sujet type BFEM — Inéquations et problème de condition
difficulte: 3
type: bfem
annee: 2023
indices:
  - Pour chaque inéquation, calcule d’abord les deux points où la droite frontière coupe les axes.
  - Teste toujours l’origine $O(0, 0)$ pour savoir de quel côté hachurer.
  - Dans la partie C, traduis « au moins 30 articles » par une inéquation et « dépenser tout son argent » par une équation.
---

## Énoncé

L’unité de monnaie est le franc CFA (F).

**A.** 1. Construire le jeu de solutions de l’inéquation $x + 2y \le 8$ où $x$ et $y$ sont des entiers positifs ou nuls.
2. Représenter graphiquement, dans un repère orthonormé, la solution de cette inéquation.
3. Dire si le point $P(2, 3)$ est solution.

**B.** Résoudre graphiquement le système $(S)$ :
$$
(S) : \left\{
\begin{aligned}
x + y &\le 9 \\
x + 2y &\le 12
\end{aligned}
\right.
$$
1. Tracer les deux demi-plans solutions et indiquer la zone solution.
2. Donner les coordonnées du point d’intersection des deux frontières.
3. Dire si le point $A(4, 4)$ appartient à la zone solution.

**C.** Fatou dispose de $12\,000$ F pour acheter des cahiers à $500$ F l’unité et des stylos à $250$ F l’unité. Elle veut faire au moins $30$ articles.
1. Écrire le système d’inéquations traduisant la situation de Fatou.
2. Combien de cahiers et combien de stylos peut-elle acheter si elle veut faire exactement $30$ articles en dépensant tout son argent ?

## Solution

**A. 1. Jeu de solutions de $x + 2y \le 8$ ($x, y$ entiers positifs ou nuls).**

- $x = 0$ : $2y \le 8 \implies y \le 4$ → $y \in \{0, 1, 2, 3, 4\}$
- $x = 1$ : $2y \le 7 \implies y \le 3$ (entier)
- $x = 2$ : $2y \le 6 \implies y \le 3$
- $x = 3$ : $2y \le 5 \implies y \le 2$
- $x = 4$ : $2y \le 4 \implies y \le 2$
- $x = 5$ : $2y \le 3 \implies y \le 1$
- $x = 6$ : $2y \le 2 \implies y \le 1$
- $x = 7$ : $2y \le 1 \implies y = 0$
- $x = 8$ : $y \le 0 \implies y = 0$
- $x \ge 9$ : aucune solution

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y$ | 0 à 4 | 0 à 3 | 0 à 3 | 0 à 2 | 0 à 2 | 0 à 1 | 0 à 1 | 0 | 0 |

*Barème :* tableau complet et correct (2 pts).

**A. 2. Représentation graphique.**

La droite frontière $x + 2y = 8$ passe par $B(0, 4)$ (car $x = 0 \implies y = 4$) et $C(8, 0)$ (car $y = 0 \implies x = 8$).

L’inéquation est non stricte ($\le$) : la droite se trace en **trait plein** et elle appartient à la solution.

Test de l’origine : $0 + 2 \times 0 = 0 \le 8$ est **vrai** : on hachure le demi-plan qui contient $O(0, 0)$, c’est-à-dire la zone située sous la droite (y compris les axes positifs).

*Barème :* droite correcte passant par les deux intercepts (2 pts), trait plein et hachure du bon côté (1 pt).

**A. 3. Le point $P(2, 3)$.**

$$
x + 2y = 2 + 2 \times 3 = 2 + 6 = 8 \le 8 \text{ (vrai)}
$$

**Réponse :** $P(2, 3)$ **est** solution (il est d’ailleurs sur la droite frontière, qui fait partie de la solution).

*Barème :* calcul et conclusion (1 pt).

**B. 1. Tracé des demi-plans.**

- Frontière $(d_1) : x + y = 9$ passe par $(9, 0)$ et $(0, 9)$. Test de l’origine : $0 \le 9$ vrai → hachurer **sous** $(d_1)$, trait plein.
- Frontière $(d_2) : x + 2y = 12$ passe par $(12, 0)$ et $(0, 6)$. Test de l’origine : $0 \le 12$ vrai → hachurer **sous** $(d_2)$, trait plein.

La zone solution est la zone hachurée deux fois : sous les deux droites, avec $x \ge 0$ et $y \ge 0$. Elle est délimitée par les sommets $O(0, 0)$, $M(9, 0)$, $I(6, 3)$ et $N(0, 6)$.

*Barème :* tracé des deux frontières (2 pts), hachures correctes et zone solution indiquée (2 pts).

**B. 2. Point d’intersection des frontières.**

On résout le système formé des deux équations :
$$
\left\{
\begin{aligned}
x + y &= 9 \\
x + 2y &= 12
\end{aligned}
\right.
$$

On soustrait la première équation de la seconde :
$$
(x + 2y) - (x + y) = 12 - 9 \implies y = 3
$$

Puis $x = 9 - 3 = 6$.

**Réponse :** $I(6, 3)$.

*Barème :* résolution et résultat (1 pt).

**B. 3. Le point $A(4, 4)$.**

- Première condition : $x + y = 4 + 4 = 8 \le 9$ (vrai).
- Seconde condition : $x + 2y = 4 + 8 = 12 \le 12$ (vrai).

**Réponse :** $A(4, 4)$ **appartient** à la zone solution (il est d’ailleurs sur la frontière $(d_2)$).

*Barème :* vérification dans les deux inéquations (1 pt).

**C. 1. Système d’inéquations.**

Soient $x$ le nombre de cahiers et $y$ le nombre de stylos ($x$ et $y$ sont des entiers positifs ou nuls).

- Le budget ne doit pas dépasser $12\,000$ F : $500x + 250y \le 12\,000$, soit, en divisant par $250$ :
$$
2x + y \le 48
$$
- Elle veut **au moins** $30$ articles : $x + y \ge 30$.

**Système :**
$$
\left\{
\begin{aligned}
2x + y &\le 48 \\
x + y &\ge 30 \\
x &\ge 0,\ y \ge 0
\end{aligned}
\right.
$$

*Barème :* deux inéquations justes (1,5 pt), simplification correcte (1 pt), conditions de positivité (0,5 pt) → **3 pts**.

**C. 2. Combinaison exacte.**

« Exactement $30$ articles » donne l’équation $x + y = 30$ ; « dépenser tout son argent » donne l’équation $2x + y = 48$ (budget atteint).

On résout ce système :
$$
\left\{
\begin{aligned}
x + y &= 30 \\
2x + y &= 48
\end{aligned}
\right.
$$

On soustrait la première équation de la seconde :
$$
x = 48 - 30 = 18
$$

Puis $y = 30 - 18 = 12$.

**Réponse :** Fatou peut acheter $18$ cahiers et $12$ stylos.

**Vérification :** nombre d’articles : $18 + 12 = 30$ ✓ ; dépense : $18 \times 500 + 12 \times 250 = 9000 + 3000 = 12\,000$ F, soit exactement son budget ✓.

*Barème :* traduction des deux conditions (1 pt), résolution du système (2 pts), réponse avec les unités (1 pt), vérification (1 pt) → **5 pts**.

*Total :* A (6 pts) + B (6 pts) + C (8 pts) = **20 pts**.

:::methode Ce que le correcteur attend
- Des droites tracées avec leurs deux intercepts, un trait plein ou pointillé conforme et une hachure du bon côté.
- Le test de l’origine écrit ou manifestement appliqué.
- La zone solution bien délimitée et les sommets lus dans le repère.
- Dans la partie C, la distinction claire entre inéquation (contrainte) et équation (égalité stricte) et la phrase de réponse avec l’unité F.
:::
