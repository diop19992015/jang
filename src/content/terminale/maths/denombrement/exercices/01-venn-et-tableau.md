---
titre: Cardinaux, diagramme de Venn et tableau
difficulte: 1
type: entrainement
indices:
  - Commence par écrire A = … et B = … avec les cardinaux donnés dans l'énoncé.
  - Dans le diagramme, remplis d'abord la case commune A ∩ B.
  - Contrôle ton résultat : la somme de toutes les zones doit valoir card(E).
---

## Énoncé

Dans une classe de $40$ élèves, on demande à chacun s'il aime le foot ($F$) et s'il aime le basket ($B$). On obtient les résultats suivants :

- $26$ élèves aiment le foot ;
- $21$ élèves aiment le basket ;
- $12$ élèves aiment les deux.

1. Construire le diagramme de Venn correspondant et compléter toutes les zones.
2. Calculer le cardinal de l'ensemble des élèves qui aiment **au moins** un des deux sports.
3. Calculer le cardinal des élèves qui n'aiment **aucun** des deux sports.
4. Combien d'élèves aiment le foot mais pas le basket ?
5. Deux élèves sont tirés au hasard dans la classe. Donner le nombre de couples possibles où les deux élèves aiment au moins un sport, en justifiant simplement.

## Solution

**1. Diagramme de Venn.**

Posons $F$ = « aime le foot », $B$ = « aime le basket », $E$ = la classe entière avec $\mathrm{card}(E) = 40$.

- Zone commune : $\mathrm{card}(F \cap B) = 12$.
- Foot seul : $\mathrm{card}(F) - \mathrm{card}(F \cap B) = 26 - 12 = 14$.
- Basket seul : $\mathrm{card}(B) - \mathrm{card}(F \cap B) = 21 - 12 = 9$.
- Aucun : $40 - (14 + 12 + 9) = 40 - 35 = 5$.

Le diagramme comporte donc quatre zones : $14$ (foot seul), $12$ (les deux), $9$ (basket seul), $5$ (aucun).

**2. Au moins un des deux sports.**

On utilise le principe d'inclusion-exclusion :

$$
\mathrm{card}(F \cup B) = \mathrm{card}(F) + \mathrm{card}(B) - \mathrm{card}(F \cap B) = 26 + 21 - 12 = 35.
$$

$\mathrm{card}(F \cup B) = 35$ élèves.

**3. Aucun des deux sports.**

Ce sont ceux qui sont dans le complémentaire de $F \cup B$ :

$$
\mathrm{card}(\overline{F \cup B}) = \mathrm{card}(E) - \mathrm{card}(F \cup B) = 40 - 35 = 5.
$$

**4. Foot mais pas basket.**

Ce sont les éléments de $F$ qui ne sont pas dans $B$, c'est-à-dire $F \cap \overline{B}$ :

$$
\mathrm{card}(F \cap \overline{B}) = \mathrm{card}(F) - \mathrm{card}(F \cap B) = 26 - 12 = 14.
$$

**5. Nombre de couples.**

Les élèves qui aiment au moins un sport sont $35$. Choisir deux élèves **distincts** parmi $35$ se fait de

$$
35 \times 34 = 1190
$$

façons si l'ordre compte (premier élève puis second), soit $\dfrac{35 \times 34}{2} = 595$ couples si l'ordre ne compte pas (le mot « couple » désigne ici un ensemble de deux élèves).

Réponse : $\boxed{595}$ couples.

:::remarque Vérification
Somme des zones : $14 + 12 + 9 + 5 = 40 = \mathrm{card}(E)$. ✓ Et $\mathrm{card}(F \cup B) = 14 + 12 + 9 = 35$, ce qui confirme la question 2.
:::
