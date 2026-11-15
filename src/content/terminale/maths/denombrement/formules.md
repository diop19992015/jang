## Inclusion-exclusion

:::formule Deux ensembles
$$
\mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B) - \mathrm{card}(A \cap B)
$$
:::

:::formule Trois ensembles
$$
\mathrm{card}(A \cup B \cup C) = \mathrm{card}(A) + \mathrm{card}(B) + \mathrm{card}(C) - \mathrm{card}(A \cap B) - \mathrm{card}(A \cap C) - \mathrm{card}(B \cap C) + \mathrm{card}(A \cap B \cap C)
$$
:::

:::formule Cas particuliers
$$
A \cap B = \varnothing \Rightarrow \mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B)
$$

$$
B \subset A \Rightarrow \mathrm{card}(A \cup B) = \mathrm{card}(A)
$$
:::

## Complémentaire

:::formule Complémentaire dans un univers fini
$$
\mathrm{card}(\overline{A}) = \mathrm{card}(E) - \mathrm{card}(A)
$$

$$
\mathrm{card}(\overline{A \cup B}) = \mathrm{card}(E) - \mathrm{card}(A \cup B)
$$
:::

:::remarque « Au moins un » par le complémentaire
$\mathrm{card}(\text{au moins un}) = \mathrm{card}(E) - \mathrm{card}(\text{aucun})$ est souvent plus rapide que d'additionner plusieurs zones.
:::

## Tableau 2 × 2

:::formule Structure du tableau
| | $B$ | $\overline{B}$ | **Total** |
| --- | --- | --- | --- |
| $A$ | $\mathrm{card}(A \cap B)$ | $\mathrm{card}(A) - \mathrm{card}(A \cap B)$ | $\mathrm{card}(A)$ |
| $\overline{A}$ | $\mathrm{card}(B) - \mathrm{card}(A \cap B)$ | reste | $\mathrm{card}(E) - \mathrm{card}(A)$ |
| **Total** | $\mathrm{card}(B)$ | $\mathrm{card}(E) - \mathrm{card}(B)$ | $\mathrm{card}(E)$ |
:::

:::formule Contrôle
$$
\text{somme des quatre cases} = \mathrm{card}(E)
$$
:::

## Expressions utiles

:::formule Formules à reconnaître dans l'énoncé
$$
\text{exactement } A = \mathrm{card}(A) - \mathrm{card}(A \cap B)
$$

$$
\text{au moins un des deux} = \mathrm{card}(A \cup B)
$$

$$
\text{aucun des deux} = \mathrm{card}(E) - \mathrm{card}(A \cup B)
$$

$$
\text{exactly one of three} = \mathrm{card}(A \cup B \cup C) - \mathrm{card}(\text{au moins deux})
$$
:::

:::remarque Diagramme de Venn
Remplir **du centre vers l'extérieur** : intersection des trois, puis intersections deux à deux, puis parties « un seul », puis le complémentaire. Le total doit retomber sur $\mathrm{card}(E)$.
:::

## À mémoriser absolument

- Réunion : somme **moins** l'intersection (compter deux fois = erreur).
- Trois ensembles : $+$ simple, $-$ double, $+$ triple.
- Complémentaire : univers moins la card.
- Ensembles disjoints : on additionne simplement.
- Toujours nommer les ensembles et donner l'univers.
