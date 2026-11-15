## Rappels

:::formule Opérations sur les événements
$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)
$$

$$
A \cap B = \varnothing \;\Rightarrow\; \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)
$$

$$
\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A), \qquad \mathbb{P}(E) = 1, \qquad \mathbb{P}(\varnothing) = 0
$$
:::

## Probabilité conditionnelle

:::formule Définition
$$
\boxed{\;\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}\;} \qquad \text{avec } \mathbb{P}(B) > 0
$$

Équivalences :

$$
\mathbb{P}(A \cap B) = \mathbb{P}(B)\,\mathbb{P}(A \mid B) = \mathbb{P}(A)\,\mathbb{P}(B \mid A)
$$
:::

:::formule Cas équiprobable (comptage)
$$
\mathbb{P}(A \mid B) = \frac{\mathrm{card}(A \cap B)}{\mathrm{card}(B)}
$$

On **restreint** l'univers à $B$ : ne compter que les issues de $B$.
:::

:::formule Enchaînement de plusieurs tirages
$$
\mathbb{P}(A_1 \cap A_2 \cap \dots \cap A_n) = \mathbb{P}(A_1) \times \mathbb{P}(A_2 \mid A_1) \times \mathbb{P}(A_3 \mid A_1 \cap A_2) \times \dots
$$
:::

:::remarque Remise ou non
- **Avec remise** : $\mathbb{P}(A_2 \mid A_1) = \mathbb{P}(A_2)$ : les tirages sont indépendants.
- **Sans remise** : le dénominateur diminue (une boule de moins) : $\mathbb{P}(A_2 \mid A_1) \neq \mathbb{P}(A_2)$.
:::

## Indépendance

:::formule Critère
$$
\boxed{\;A \text{ et } B \text{ indépendants} \iff \mathbb{P}(A \cap B) = \mathbb{P}(A) \times \mathbb{P}(B)\;}
$$

Équivalent (si $\mathbb{P}(B) > 0$) :

$$
\mathbb{P}(A \mid B) = \mathbb{P}(A) \qquad (\text{et } \mathbb{P}(B \mid A) = \mathbb{P}(B))
$$
:::

:::formule Propriétés
- $A$ et $B$ indépendants $\Rightarrow$ $A$ et $\overline{B}$ indépendants, $\overline{A}$ et $B$ indépendants, $\overline{A}$ et $\overline{B}$ indépendants.
- Si $\mathbb{P}(A) > 0$ et $\mathbb{P}(B) > 0$ : $A \cap B = \varnothing \Rightarrow$ **dépendants**.
:::

:::remarque Test d'indépendance
Calculer $\mathbb{P}(A)$, $\mathbb{P}(B)$, $\mathbb{P}(A \cap B)$, puis comparer $\mathbb{P}(A \cap B)$ à $\mathbb{P}(A)\,\mathbb{P}(B)$.
:::

## Loi totale et bayés

:::formule Formule des probabilités totales
$(B_1\,;\,B_2\,;\,\dots\,;\,B_n)$ **partition** de $E$ :

$$
\boxed{\;\mathbb{P}(A) = \mathbb{P}(B_1)\,\mathbb{P}(A \mid B_1) + \mathbb{P}(B_2)\,\mathbb{P}(A \mid B_2) + \dots + \mathbb{P}(B_n)\,\mathbb{P}(A \mid B_n)\;}
$$
:::

:::formule Formule bayésienne
$$
\boxed{\;\mathbb{P}(B_j \mid A) = \frac{\mathbb{P}(B_j)\,\mathbb{P}(A \mid B_j)}{\mathbb{P}(B_1)\,\mathbb{P}(A \mid B_1) + \dots + \mathbb{P}(B_n)\,\mathbb{P}(A \mid B_n)}\;}
$$

Le dénominateur est exactement $\mathbb{P}(A)$ (loi totale).
:::

:::formule Découpage en deux cas (cas le plus fréquent)
$$
\mathbb{P}(A) = \mathbb{P}(B)\,\mathbb{P}(A \mid B) + \mathbb{P}(\overline{B})\,\mathbb{P}(A \mid \overline{B})
$$
:::

:::remarque Dépistage (type BAC)
$$
\mathbb{P}(\text{malade} \mid \text{test}^+) = \frac{\mathbb{P}(\text{malade}) \times \mathbb{P}(\text{test}^+ \mid \text{malade})}{\mathbb{P}(\text{test}^+)}
$$

avec $\mathbb{P}(\text{test}^+) = \mathbb{P}(\text{malade})\,\mathbb{P}(\text{test}^+ \mid \text{malade}) + \mathbb{P}(\text{sain})\,\mathbb{P}(\text{test}^+ \mid \text{sain})$.
:::

## Rédaction type

:::formule Le paragraphe attendu
1. « On note $A$ : « ... », $B$ : « ... » »
2. « On sait que $\mathbb{P}(B) = \dots$, $\mathbb{P}(A \mid B) = \dots$ »
3. « D'après [formule], $\mathbb{P}(A \cap B) = \mathbb{P}(B) \times \mathbb{P}(A \mid B) = \dots$ »
4. « Donc la probabilité que... est égale à $\dfrac{\dots}{\dots} = \dots$ »
:::

## À mémoriser absolument

- $\mathbb{P}(A \mid B) = \mathbb{P}(A \cap B)/\mathbb{P}(B)$ (dénominateur = événement **donné**).
- $\mathbb{P}(A \cap B) = \mathbb{P}(A)\,\mathbb{P}(B \mid A) = \mathbb{P}(B)\,\mathbb{P}(A \mid B)$.
- Indépendance $\iff \mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$ ; avec remise $\Rightarrow$ indépendants.
- Incompatibles $\neq$ indépendants.
- Loi totale : somme des $\mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)$ sur une partition.
- Bayes : $\mathbb{P}(B_j \mid A) = \mathbb{P}(B_j)\mathbb{P}(A \mid B_j) / \mathbb{P}(A)$.
