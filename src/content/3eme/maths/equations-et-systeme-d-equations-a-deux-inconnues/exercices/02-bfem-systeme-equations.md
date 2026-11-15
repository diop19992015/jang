---
titre: Sujet type BFEM — Système d’équations et problème
difficulte: 3
type: bfem
annee: 2023
indices:
  - Dans la partie A, isole $y$ dans la seconde équation puis substitue dans la première.
  - Dans la partie B, écris deux équations : une pour les quantités, une pour les sommes.
  - Dans la partie C, construis chaque droite avec deux points (les intercepts) et lis l’intersection.
---

## Énoncé

L’unité de monnaie est le franc CFA (F).

**A.** Résoudre le système $(S)$ suivant :

$$
(S) : \left\{
\begin{aligned}
x + 2y &= 11 \\
3x - y &= 5
\end{aligned}
\right.
$$

**B.** Au marché de Sandaga, une marchande vend des tomates et des aubergines.
- Vendre $15$ kg de tomates et $10$ kg d’aubergines lui rapporte $12\,500$ F.
- Vendre $10$ kg de tomates et $15$ kg d’aubergines lui rapporte $13\,000$ F.

1. Calculer le prix d’un kilogramme de tomates et le prix d’un kilogramme d’aubergines.
2. Quelle recette obtient-elle en vendant $8$ kg de tomates et $6$ kg d’aubergines ?

**C.** Représenter graphiquement, dans un repère orthonormé, le système $(T)$ :

$$
(T) : \left\{
\begin{aligned}
2x + y &= 16 \\
x - y &= 2
\end{aligned}
\right.
$$

En déduire la solution du système $(T)$.

## Solution

**A. Résolution du système $(S)$.**

On écrit la seconde équation sous la forme :
$$
y = 3x - 5 \quad (2')
$$

On substitue $(2')$ dans la première équation $x + 2y = 11$ :
$$
x + 2(3x - 5) = 11
$$
$$
x + 6x - 10 = 11
$$
$$
7x = 21 \implies x = 3
$$

Puis, dans $(2')$ :
$$
y = 3 \times 3 - 5 = 4
$$

**Solution :** $(x, y) = (3, 4)$.

Vérification : $3 + 2 \times 4 = 11$ ✓ et $3 \times 3 - 4 = 5$ ✓.

*Barème :* mise en forme de la substitution (2 pts), résolution de l’équation à une inconnue (2 pt), valeur de $y$ et couple solution (1 pt), vérification (1 pt) → **6 pts**.

**B. Prix de la tomate et de l’aubergine.**

Soient $t$ le prix d’un kilogramme de tomates et $a$ le prix d’un kilogramme d’aubergines (en FCFA).

Mise en équations :
$$
\left\{
\begin{aligned}
15t + 10a &= 12\,500 \quad &(1)\\
10t + 15a &= 13\,000 \quad &(2)
\end{aligned}
\right.
$$

On divise $(1)$ par $5$ et $(2)$ par $5$ :
$$
\left\{
\begin{aligned}
3t + 2a &= 2500 \\
2t + 3a &= 2600
\end{aligned}
\right.
$$

On multiplie la première par $3$ et la seconde par $2$ :
$$
\left\{
\begin{aligned}
9t + 6a &= 7500 \\
4t + 6a &= 5200
\end{aligned}
\right.
$$

On soustrait membre à membre :
$$
(9t + 6a) - (4t + 6a) = 7500 - 5200 \implies 5t = 2300 \implies t = 460
$$

On remplace dans $2t + 3a = 2600$ :
$$
2 \times 460 + 3a = 2600 \implies 920 + 3a = 2600 \implies 3a = 1680 \implies a = 560
$$

**1. Réponse :** le kilogramme de tomates coûte $460$ F et le kilogramme d’aubergines coûte $560$ F.

Vérification : $15 \times 460 + 10 \times 560 = 6900 + 5600 = 12\,500$ F ✓ et $10 \times 460 + 15 \times 560 = 4600 + 8400 = 13\,000$ F ✓.

**2.** Pour $8$ kg de tomates et $6$ kg d’aubergines :
$$
8 \times 460 + 6 \times 560 = 3680 + 3360 = 7040 \text{ F}.
$$

La recette est de $7040$ F.

*Barème :* équations du système (3 pts), résolution (3 pts), réponse avec unités pour les prix (1 pt), calcul de la recette (1 pt) → **8 pts**.

**C. Représentation graphique de $(T)$.**

*Première droite* $(d_1) : 2x + y = 16$, soit $y = 16 - 2x$.
- $x = 0$ donne $y = 16$ : point $A(0, 16)$ ;
- $y = 0$ donne $x = 8$ : point $B(8, 0)$.

*Seconde droite* $(d_2) : x - y = 2$, soit $y = x - 2$.
- $x = 0$ donne $y = -2$ : point $C(0, -2)$ ;
- $y = 0$ donne $x = 2$ : point $D(2, 0)$.

On trace les deux droites dans un repère orthonormé (avec une unité de $1$ cm par exemple). Les deux droites se coupent en un point $I$ dont on lit les coordonnées :
$$
I(6, 4)
$$

**Solution du système :** $(x, y) = (6, 4)$.

Vérification : $2 \times 6 + 4 = 16$ ✓ et $6 - 4 = 2$ ✓.

*Barème :* tracé de $(d_1)$ avec deux points justes (2 pts), tracé de $(d_2)$ avec deux points justes (2 pts), lecture de l’intersection (1 pt), écriture de la solution (1 pt) → **6 pts**.

*Total :* A (6 pts) + B (8 pts) + C (6 pts) = **20 pts**.

:::methode Ce que le correcteur attend
- L’étape « on isole $y$ » avant la substitution dans la partie A.
- Les deux équations du problème en partie B, avec une phrase de réponse et l’unité F.
- Des droites tracées avec les intercepts, pas « à main levée » : les axes, l’unité et les points doivent être lisibles.
- La vérification du couple dans les deux équations, qui sécurise le point final.
:::
