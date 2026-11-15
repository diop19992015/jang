---
titre: Dénombrement
accroche: Cardinal d’une réunion, d’une intersection, du complémentaire · Schémas et diagrammes
series: L
ordre: 3
duree: 45
demo: false
statut: publie
objectifs:
  - Cardinal d’une réunion, d’une intersection, du complémentaire
  - Schémas et diagrammes
partie: Probabilité
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Deux ensembles
$$
\mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B) - \mathrm{card}(A \cap B)
$$
:::

:::formule Trois ensembles
$$
\mathrm{card}(A \cup B \cup C) = \sum \mathrm{cards} - \sum \mathrm{intersections\;2\;à\;2} + \mathrm{card}(A \cap B \cap C)
$$

Concrètement :
$$
s + b + c - (ab + ac + bc) + abc
$$
:::

:::formule Complémentaire
$$
\mathrm{card}(\overline{A}) = \mathrm{card}(E) - \mathrm{card}(A)
\qquad
\mathrm{card}(\text{aucun}) = \mathrm{card}(E) - \mathrm{card}(A \cup B \cup C)
$$
:::

:::formule Lecture des questions type
| Question | Écriture |
| --- | --- |
| au moins l'un des deux | $\mathrm{card}(A \cup B)$ |
| les deux à la fois | $\mathrm{card}(A \cap B)$ |
| ni l'un ni l'autre | $\mathrm{card}(E) - \mathrm{card}(A \cup B)$ |
| $A$ mais pas $B$ | $\mathrm{card}(A) - \mathrm{card}(A \cap B)$ |
| exactement un des trois | $\mathrm{card}(A \cup B \cup C) - \mathrm{card}(\text{au moins deux})$ |
:::

## Méthode express

1. **Nommer** : $A$ = …, $B$ = … avec leurs cardinaux, et $E$ = l'univers.
2. **Traduire** chaque phrase en équation de cardinaux (« 40 ont les deux » $= \mathrm{card}(A \cap B) = 40$).
3. **Dessiner** le diagramme de Venn ou le tableau 2 × 2, en remplissant d'abord l'intersection.
4. **Calculer** avec la formule écrite, ligne par ligne.
5. **Contrôler** : somme des cases = $\mathrm{card}(E)$ ; la réponse ne peut pas dépasser le total.

:::erreur Les erreurs qui coûtent des points
1. Oublier de soustraire $\mathrm{card}(A \cap B)$ dans la réunion.
2. Ajouter $\mathrm{card}(A \cap B \cap C)$ une fois de trop (le signe final est **plus**).
3. Confondre « au moins un » et « exactement un ».
4. Donner une réponse sans citer ni la formule ni le nom des ensembles : la rédaction est notée.
5. Retenir un cardinal qui dépasse $\mathrm{card}(E)$ : recalcule, il y a une erreur de traduction de l'énoncé.
:::

## Vocabulaire

- **Univers** $E$ : l'ensemble de référence, tous les cas possibles.
- **Réunion** $A \cup B$ : « $A$ ou $B$ » (ou les deux).
- **Intersection** $A \cap B$ : « $A$ et $B$ » en même temps.
- **Complémentaire** $\overline{A}$ : « pas $A$ » dans $E$.
- **Disjoints** : $A \cap B = \varnothing$ (aucun élément commun).
- **Cardinal** : nombre d'éléments de l'ensemble.
- **Principe d'inclusion-exclusion** : somme des cards moins les intersections, pour ne jamais compter deux fois.
- **Diagramme de Venn** : représentation graphique des ensembles par des disques superposés.
