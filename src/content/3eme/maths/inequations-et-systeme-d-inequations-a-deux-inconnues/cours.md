---
titre: Inéquations et système d’inéquations à deux inconnues
accroche: Programme officiel — Activités numériques.
ordre: 5
duree: 40
demo: false
objectifs:
  - Résoudre une inéquation à deux inconnues et représenter la solution dans le plan
  - Résoudre un système d’inéquations par la méthode graphique
  - Résoudre un problème de condition par un système d’inéquations
---

:::remarque À quoi ça sert au BFEM ?
Les inéquations et les problèmes de « conditions » (budget, nombre minimum ou maximum à acheter) reviennent régulièrement au BFEM, souvent sous forme de « représente graphiquement la solution » ou « indique toutes les possibilités ». Savoir tracer un demi-plan et croiser deux conditions fait gagner des points faciles.
:::

## Rappel : une inéquation à une inconnue

:::definition Inéquation
Une **inéquation** est une inégalité dans laquelle apparaît une inconnue, par exemple $-2x + 3 \le 11$. La **solution** est l’ensemble des valeurs de $x$ qui rendent l’inégalité vraie.
:::

:::formule Les règles de résolution
- On peut **ajouter ou soustraire** un même nombre des deux membres sans changer le sens.
- On peut **multiplier ou diviser** par un même nombre **positif** sans changer le sens.
- On peut **multiplier ou diviser** par un même nombre **négatif** en **renversant le sens** : $<$ devient $>$ et $>$ devient $<$.
:::

:::exemple Une inéquation à une inconnue
$$
-2x + 3 \le 11
$$
$$
-2x \le 11 - 3 = 8
$$

On divise par $-2$ : comme $-2$ est négatif, on **renverse le sens** :
$$
x \ge -4
$$

Les solutions sont tous les nombres réels supérieurs ou égaux à $-4$.
:::

:::remarque Où poser la solution ?
Sur une droite graduée, on écrit $x \ge -4$ : le point $-4$ est **inclus** (point plein) et tous les nombres à droite de $-4$ sont solutions. Si l’inéquation est stricte ($x > -4$), le point est **exclu** (point creux).
:::

## Une inéquation à deux inconnues

:::definition Inéquation à deux inconnues
Une inéquation à deux inconnues est une inégalité de la forme $ax + by \le c$, où $x$ et $y$ sont les inconnues. Ses solutions sont des **couples** $(x, y)$.
:::

:::formule Formes possibles
$$
ax + by \le c \qquad ax + by \ge c \qquad ax + by < c \qquad ax + by > c
$$
:::

:::methode Construire un jeu de solutions
1. Choisir des valeurs pour $x$ (0, 1, 2…).
2. Trouver les valeurs de $y$ qui vérifient l’inéquation pour chaque $x$.
3. Ranger les couples $(x, y)$ dans un tableau.
:::

:::exemple Solutions de $x + y \le 5$ avec $x$ et $y$ positifs ou nuls
| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| $y$ possible | 0, 1, 2, 3, 4, 5 | 0 à 4 | 0 à 3 | 0 à 2 | 0 à 1 | 0 |

Par exemple $(2, 3)$ est une solution car $2 + 3 = 5 \le 5$, alors que $(4, 4)$ n’en est pas car $4 + 4 = 8 > 5$.
:::

## Représenter la solution dans le plan

Pour une inéquation à deux inconnues, la solution n’est pas une droite : c’est une **région** du plan appelée **demi-plan**.

:::methode Tracer la solution d’une inéquation
1. Tracer la **droite frontière**, c’est-à-dire la droite d’équation $ax + by = c$ (les points où l’égalité est atteinte).
2. Choisir un point non situé sur cette droite, souvent l’origine $O(0, 0)$, et le tester dans l’inéquation.
3. Si l’origine vérifie l’inéquation, la solution est le demi-plan qui **contient** l’origine ; sinon, c’est l’autre demi-plan.
4. Si l’inéquation est stricte ($<$ ou $>$), on trace la droite en **trait pointillé** ; sinon ($\le$ ou $\ge$), en **trait plein**.
:::

:::exemple Représenter $2x + y \le 10$
1. Droite frontière : $2x + y = 10$. Points : $A(0, 10)$ et $B(5, 0)$.
2. Test de l’origine : $2 \times 0 + 0 = 0 \le 10$ : c’est **vrai**, donc l’origine est dans la solution.
3. L’inéquation est non stricte : trait **plein**, et on hachure la zone située sous la droite, en incluant la droite.

Tous les points de cette zone, par exemple $P(2, 4)$ car $2 \times 2 + 4 = 8 \le 10$, sont solutions.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de changer le sens quand on multiplie ou on divise par un nombre négatif.
2. Tracer la droite en trait plein pour une inéquation stricte ($<$ ou $>$).
3. Hacher du mauvais côté : on teste toujours l’origine (sauf si elle est sur la droite).
4. Tracer la droite en reliant deux points « à l’œil » : prends toujours les deux intercepts.
:::

## Système d’inéquations : la méthode graphique

:::definition Système d’inéquations
Un **système d’inéquations** regroupe plusieurs inéquations qui doivent être vérifiées **en même temps**. Sa solution est la partie du plan qui vérifie **toutes** les conditions.
:::

:::methode Résoudre un système graphiquement
1. Tracer la droite frontière de la première inéquation (plein ou pointillé) et hachurer le demi-plan solution.
2. Tracer la droite frontière de la seconde inéquation et hachurer son demi-plan solution, avec des hachures **dans l’autre sens**.
3. La solution du système est la zone **hachurée deux fois**, c’est-à-dire l’intersection des deux demi-plans.
4. Lire les coordonnées des sommets de cette zone et vérifier dans les deux inéquations.
:::

:::exemple Résoudre le système $(S)$
$$
(S) : \left\{
\begin{aligned}
2x + y &\le 20 \\
x + y &\le 12
\end{aligned}
\right.
$$

1. $2x + y = 20$ passe par $(0, 20)$ et $(10, 0)$ ; l’origine vérifie $0 \le 20$ : on hachure dessous, en trait plein.
2. $x + y = 12$ passe par $(0, 12)$ et $(12, 0)$ ; l’origine vérifie $0 \le 12$ : on hachure dessous, en trait plein.
3. La solution commune est la zone située sous les deux droites (avec $x \ge 0$ et $y \ge 0$ si l’énoncé l’exige).
4. Les deux frontières se coupent en résolvant $2x + y = 20$ et $x + y = 12$ : on trouve $x = 8$, $y = 4$, donc le sommet $I(8, 4)$.

Les sommets de la zone sont $O(0, 0)$, $A(10, 0)$, $I(8, 4)$ et $C(0, 12)$ : toute la surface qu’ils délimitent (droites comprises) est la solution.
:::

:::remarque Zone fermée ou zone ouverte
Quand les inéquations sont non strictes ($\le$, $\ge$), les frontières font partie de la solution : trait plein. Dès qu’une inéquation est stricte ($<$, $>$), la frontière est exclue : trait pointillé pour cette droite.
:::

## Problèmes de condition

Les problèmes de condition (budget, quantités minimales, contraintes) se traduisent par un système d’inéquations.

:::methode Les cinq étapes d’un problème de condition
1. Identifier les inconnues : $x = \dots$, $y = \dots$ (toujours avec l’unité).
2. Traduire **chaque condition** en une inéquation (budget → « moins que », minimum → « plus que »).
3. Ajouter $x \ge 0$ et $y \ge 0$ si les quantités ne peuvent pas être négatives.
4. Tracer les demi-plans et repérer l’intersection.
5. Lire la ou les solutions demandées (parfois une combinaison précise, parfois une zone).
:::

:::exemple Le budget d’Aminata au marché de Sandaga
Aminata dispose de $4800$ F. Les mangues coûtent $600$ F le kilogramme et les oranges $300$ F le kilogramme. Elle veut acheter au plus $10$ kg de fruits en tout. Quelles sont ses possibilités ?

$x$ = nombre de kilogrammes de mangues, $y$ = nombre de kilogrammes d’oranges.

Conditions :
$$
(S) : \left\{
\begin{aligned}
600x + 300y &\le 4800 \quad \text{(budget)}\\
x + y &\le 10 \quad \text{(quantité totale)}
\end{aligned}
\right.
$$

On simplifie la première inéquation en divisant par $300$ :
$$
(S) : \left\{
\begin{aligned}
2x + y &\le 16 \\
x + y &\le 10
\end{aligned}
\right.
$$

1. $2x + y = 16$ passe par $(0, 16)$ et $(8, 0)$ ; l’origine vérifie la condition : on hachure dessous.
2. $x + y = 10$ passe par $(0, 10)$ et $(10, 0)$ ; l’origine vérifie la condition : on hachure dessous.
3. Les deux frontières se coupent en $x = 6$ et $y = 4$ (on soustrait les deux équations).
4. La solution commune est la zone sous les deux droites, avec $x \ge 0$ et $y \ge 0$.

Par exemple, Aminata peut acheter $6$ kg de mangues et $4$ kg d’oranges : cela coûte $6 \times 600 + 4 \times 300 = 3600 + 1200 = 4800$ F, exactement son budget, pour $10$ kg de fruits. ✓
:::

:::piege « Au plus » ou « au moins » ?
- « **au plus** $10$ kg » → $x + y \le 10$ (le total ne doit pas dépasser $10$).
- « **au moins** $30$ articles » → $x + y \ge 30$ (le total doit atteindre $30$ au minimum).
Inverser ces deux mots fait pencher toute la zone du mauvais côté : lis l’énoncé deux fois avant de tracer.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de renverser le sens quand on divise par un nombre négatif.
2. Oublier le trait pointillé pour les inéquations strictes (et ne pas le signaler dans la légende).
3. Hacher du mauvais côté faute de tester l’origine.
4. Ne prendre qu’un seul demi-plan pour solution d’un système : il faut la zone commune aux deux.
5. Donner une réponse qui ne vérifie pas toutes les conditions (par exemple un budget dépassé).
:::

## Ce qu’il faut retenir

- Résoudre une inéquation : on ajoute/soustrait librement ; on multiplie/divise par un positif sans changer le sens, par un **négatif en changeant le sens**.
- La solution d’une inéquation à deux inconnues est un **demi-plan** : droite frontière (plein si $\le$ ou $\ge$, pointillé si $<$ ou $>$) + test de l’origine.
- La solution d’un système est l’**intersection** des demi-plans : la zone hachurée deux fois.
- Un problème de condition se traduit en inéquations (budget, minimum, maximum), puis se résout graphiquement.
- Toujours vérifier la solution lue dans le plan dans **toutes** les inéquations du système.
