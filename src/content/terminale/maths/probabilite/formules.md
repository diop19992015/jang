## Axiomes

:::formule Fondamentaux
$$
0 \leq \mathbb{P}(A) \leq 1
$$

$$
\mathbb{P}(E) = 1 \qquad \mathbb{P}(\varnothing) = 0
$$

$$
\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)
$$
:::

## Cas équiprobable

:::formule Formule de base
$$
\mathbb{P}(A) = \frac{\mathrm{card}(A)}{\mathrm{card}(E)}
$$
:::

| Situation | $\mathrm{card}(E)$ |
| --- | --- |
| Deux dés (couples) | $36$ |
| Un dé | $6$ |
| Un jeu de $52$ cartes | $52$ |
| Tirer $1$ élève parmi $n$ | $n$ |
| Deux pièces | $4$ |

:::remarque Équiprobabilité à vérifier
La formule ne s'applique que si **toutes** les issues ont la même probabilité. Sur deux dés, les sommes $2$ à $12$ ne sont **pas** équiprobables : on compte les $36$ couples.
:::

## Opérations

:::formule Réunion
$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)
$$

Si $A \cap B = \varnothing$ : $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$.
:::

:::formule Intersection
$$
\mathbb{P}(A \cap B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cup B)
$$
:::

:::formule Complémentaire
$$
\mathbb{P}(\text{au moins un}) = 1 - \mathbb{P}(\text{aucun})
$$
:::

## Cas non équiprobable

:::formule Pondération
$$
\mathbb{P}(A) = \sum_{i \in A} \mathbb{P}(\{i\})
\qquad \text{avec} \qquad
\sum_{\text{issues de } E} \mathbb{P}(\{i\}) = 1
$$
:::

:::formule Urne à couleurs
$ r $ rouges, $ b $ bleues, $ v $ vertes, total $n = r+b+v$ :

$$
\mathbb{P}(\text{rouge}) = \frac{r}{n}, \qquad
\mathbb{P}(\text{rouge ou verte}) = \frac{r + v}{n}
$$
:::

:::formule Découpage en groupes (loi totale)
$$
\mathbb{P}(B) = \mathbb{P}(A) \times \mathbb{P}(B \mid A) + \mathbb{P}(\overline{A}) \times \mathbb{P}(B \mid \overline{A})
$$

Exemple : $\mathbb{P}(\text{lunettes}) = 0{,}4 \times 0{,}3 + 0{,}6 \times 0{,}2 = 0{,}24$.
:::

## Rédaction attendue au BAC

:::formule Le paragraphe type
1. « L'univers est $E = \{\dots\}$, de cardinal $\mathrm{card}(E) = \dots$ »
2. « Les issues sont équiprobables car le tirage est fait au hasard. »
3. « L'événement $A$ est $\{\dots\}$, donc $\mathrm{card}(A) = \dots$ »
4. « $\mathbb{P}(A) = \dfrac{\dots}{\dots} = \dfrac{\text{irréductible}}{\text{irréductible}}$ »
:::

:::remarque Contrôles rapides
- $\mathbb{P}(A) \in [0\,;\,1]$ toujours.
- Somme des probabilités de toutes les issues $= 1$.
- $\mathbb{P}(A) + \mathbb{P}(\overline{A}) = 1$.
:::

## À mémoriser absolument

- $\mathbb{P}(A) = \mathrm{card}(A)/\mathrm{card}(E)$ si équiprobable.
- $\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)$.
- $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$.
- Deux dés : toujours $36$ issues équiprobables (couples).
- Définir l'univers **avant** tout calcul.
