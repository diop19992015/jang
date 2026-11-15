---
titre: Équations et système d’équations à deux inconnues
accroche: Programme officiel — Activités numériques.
ordre: 4
duree: 80
demo: false
objectifs:
  - Résoudre une équation à deux inconnues par le jeu des solutions
  - Résoudre un système d’équations par substitution et par comparaison
  - Interpréter graphiquement la solution d’un système
  - Résoudre un problème par la mise en équation d’un système
---

:::remarque À quoi ça sert au BFEM ?
Le système de deux équations à deux inconnues est un classique des sujets de BFEM : on y trouve presque chaque année un exercice de « résolution de système » et un problème à mettre en équations (billets, achats au marché, effectifs). Savoir raisonner avec deux inconnues et écrire les bonnes équations fait gagner des points rapides et sûrs.
:::

## Rappel : résoudre une équation à une inconnue

Une **équation** est une égalité dans laquelle on cherche la valeur de l'inconnue. Pour la résoudre, on isole l'inconnue en faisant les mêmes opérations des deux membres.

:::exemple Rappel de résolution
$$
3x + 7 = 22
$$
$$
3x = 22 - 7 = 15
$$
$$
x = \frac{15}{3} = 5
$$

Vérification : $3 \times 5 + 7 = 15 + 7 = 22$. ✓
:::

## Une équation à deux inconnues : le jeu des solutions

:::definition Équation à deux inconnues
Une équation à deux inconnues est une équation de la forme $ax + by = c$, où $x$ et $y$ sont les deux inconnues et $a$, $b$, $c$ sont des nombres connus.
:::

:::formule Forme générale
$$
ax + by = c
$$
:::

:::remarque Une infinité de solutions
Une seule équation à deux inconnues admet une **infinité** de solutions : dès qu'on fixe $x$, la valeur de $y$ est déterminée. On organise toutes ces solutions dans un **jeu de solutions**.
:::

:::methode Construire un jeu de solutions
1. Choisir des valeurs pour $x$ (0, 1, 2, 3…).
2. Pour chaque valeur, résoudre l’équation qui reste pour trouver $y$.
3. Ranger les couples $(x, y)$ dans un tableau.
4. Vérifier chaque couple dans l’équation de départ.
:::

:::exemple Jeu de solutions de $x + y = 10$
| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| $y$ | 10 | 9 | 8 | 7 | 6 | 5 |

Vérification du couple $(3, 7)$ : $3 + 7 = 10$ ✓.  
Le couple $(8, 2)$ est aussi une solution, car $8 + 2 = 10$ : il suffit de continuer le tableau.
:::

## Les systèmes de deux équations à deux inconnues

:::definition Système de deux équations
Un **système de deux équations à deux inconnues** réunit deux équations qui doivent être vérifiées **en même temps** par le même couple de valeurs.
:::

:::formule Notation d’un système
$$
(S) : \left\{
\begin{aligned}
x + y &= 7 \\
2x + y &= 10
\end{aligned}
\right.
$$
:::

:::definition Solution d’un système
Une solution d’un système est un couple $(x, y)$ qui vérifie **les deux** équations du système.
:::

:::methode Vérifier un couple
1. Remplacer $x$ et $y$ par les valeurs proposées dans la première équation et calculer chaque membre.
2. Faire de même pour la seconde équation.
3. Si les deux égalités sont vraies, le couple est solution du système.
:::

:::exemple Le couple $(3, 4)$ est-il solution de $(S)$ ?
- $x + y = 3 + 4 = 7$ ✓
- $2x + y = 2 \times 3 + 4 = 6 + 4 = 10$ ✓

Le couple $(3, 4)$ vérifie les deux équations : c’est la solution du système $(S)$.
:::

## Résolution par substitution

:::methode La méthode par substitution
1. Dans l’une des deux équations, **exprimer une inconnue** en fonction de l’autre.
2. **Remplacer** cette expression dans l’autre équation : il ne reste qu’une seule inconnue.
3. **Résoudre** cette équation à une inconnue.
4. **Remplacer** la valeur trouvée dans l’expression obtenue à l’étape 1.
5. **Vérifier** le couple dans les deux équations.
:::

:::exemple Résolution de $(S)$ par substitution
$$
(S) : \left\{
\begin{aligned}
x + y &= 7 \quad &(1)\\
2x + y &= 10 \quad &(2)
\end{aligned}
\right.
$$

Dans $(1)$ : $y = 7 - x$.

On remplace dans $(2)$ :
$$
2x + (7 - x) = 10
$$
$$
2x + 7 - x = 10 \implies x = 3
$$

Puis $y = 7 - 3 = 4$.

**Solution :** $(x, y) = (3, 4)$.
:::

## Résolution par comparaison

:::methode La méthode par comparaison
1. Résoudre chacune des deux équations pour obtenir la **même inconnue** exprimée de deux façons (souvent $y = \dots$).
2. **Égaler** les deux expressions obtenues.
3. Résoudre l’équation à une inconnue qui en découle.
4. Remplacer pour trouver l’autre inconnue.
5. Vérifier le couple dans les deux équations.
:::

:::exemple Résolution de $(S)$ par comparaison
- Équation $(1)$ : $y = 7 - x$
- Équation $(2)$ : $y = 10 - 2x$

On compare les deux expressions de $y$ :
$$
7 - x = 10 - 2x
$$
$$
- x + 2x = 10 - 7 \implies x = 3
$$

Puis $y = 7 - 3 = 4$.

**Solution :** $(x, y) = (3, 4)$, ce qui confirme le résultat obtenu par substitution.
:::

:::remarque Quelle méthode choisir ?
- **Substitution** : quand une inconnue est déjà isolée ($y = \dots$) ou facile à isoler.
- **Comparaison** : quand les deux équations se résolvent facilement pour la même inconnue (c’est le cas quand les coefficients de l’autre inconnue sont égaux ou opposés).
:::

## Interprétation graphique d’un système

Chaque équation $ax + by = c$ définit une **droite** : toutes les solutions de l’équation sont les points de cette droite. Donc la solution du système est le point qui appartient aux **deux** droites.

:::formule Lecture graphique
$$
\text{solution du système} = \text{coordonnées du point d'intersection des deux droites}
$$
:::

:::methode Représenter un système dans le plan
1. Pour chaque équation, construire un petit tableau avec deux valeurs (prendre $x = 0$ puis $y = 0$).
2. Tracer les deux droites sur un papier millimétré.
3. Lire les coordonnées du point d’intersection.
4. Vérifier le couple lu dans les deux équations.
:::

:::exemple Tracé du système $(S)$
- $x + y = 7$ : la droite passe par $A(0, 7)$ et $B(7, 0)$.
- $2x + y = 10$ : la droite passe par $C(0, 10)$ et $D(5, 0)$.

Les deux droites se coupent en $I(3, 4)$ : c’est bien la solution trouvée par substitution et par comparaison.
:::

:::remarque Trois cas de figure
- Les droites se coupent en **un point** → une seule solution.
- Les droites sont **parallèles** → aucune solution (système impossible).
- Les droites sont **confondues** → une infinité de solutions.
:::

## Résoudre un problème : la mise en équation

:::methode Les cinq étapes d’un problème
1. Lire attentivement l’énoncé et repérer ce qu’on cherche.
2. Nommer les inconnues : $x = \dots$, $y = \dots$ (toujours avec l’unité).
3. Traduire **chaque phrase** de l’énoncé en une équation.
4. Résoudre le système par substitution ou comparaison.
5. Répondre à la question par une phrase complète et vérifier.
:::

:::exemple Billets de bus — Dakar vers Thiès
Un bus effectue un trajet de Dakar à Thiès. Un billet d’adulte coûte $2500$ F et un billet d’enfant $1500$ F. On vend $40$ billets et la recette totale est de $75\,000$ F. Combien de billets d’adultes et combien de billets d’enfants a-t-on vendus ?

**Mise en équations :** $x$ = nombre d’adultes, $y$ = nombre d’enfants.
$$
(S) : \left\{
\begin{aligned}
x + y &= 40 \quad &(1)\\
2500x + 1500y &= 75\,000 \quad &(2)
\end{aligned}
\right.
$$

On simplifie $(2)$ en divisant par $500$ :
$$
5x + 3y = 150 \quad (2')
$$

Par substitution : $x = 40 - y$ dans $(2')$ :
$$
5(40 - y) + 3y = 150
$$
$$
200 - 5y + 3y = 150 \implies 2y = 50 \implies y = 25
$$

Donc $x = 40 - 25 = 15$.

**Réponse :** le bus a transporté $15$ adultes et $25$ enfants.

**Vérification :** $15 + 25 = 40$ billets et $15 \times 2500 + 25 \times 1500 = 37\,500 + 37\,500 = 75\,000$ F. ✓
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier d’expliquer ce que représentent $x$ et $y$ (« $x$ = nombre d’adultes »).
2. Mélanger les grandeurs : une équation pour les **nombres**, une équation pour les **sommes**.
3. Ne pas vérifier la solution dans les deux équations.
4. Trouver les valeurs mais ne pas répondre à la question posée (si l’énoncé demande les enfants, c’est $y$).
:::

:::piege Le mot-clé de l’équation
Attention au sens des phrases : « **au total**, $40$ billets » donne $x + y = 40$ ; « la recette **totale** est de $75\,000$ F » donne l’équation des prix. Si l’énoncé dit « deux adultes de plus que d’enfants », l’équation est $x = y + 2$ : traduire mot à mot, jamais l’inverse.
:::

## Ce qu’il faut retenir

- Une équation à deux inconnues $ax + by = c$ a une infinité de solutions, rangées en **jeu de solutions**.
- Un **système** impose de vérifier les deux équations **en même temps**.
- **Substitution** : exprimer une inconnue, injecter, résoudre, remplacer.
- **Comparaison** : exprimer la même inconnue dans les deux équations, égaler, résoudre.
- Graphiquement, la solution du système est le **point d’intersection** des deux droites.
- Pour un problème : inconnues → équations → résolution → réponse phrase + vérification.
