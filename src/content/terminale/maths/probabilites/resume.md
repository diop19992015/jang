---
titre: Probabilités
accroche: Événements et probabilité · Probabilité conditionnelle et indépendance · Formule des probabilités totales
series: S1, S3, S2, S4, S5
ordre: 14
duree: 45
demo: false
statut: publie
objectifs:
  - Événements et probabilité
  - Probabilité conditionnelle et indépendance
  - Formule des probabilités totales
partie: Probabilités
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Rappels
$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B), \qquad
\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)
$$
:::

:::formule Probabilité conditionnelle
$$
\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} \qquad (\mathbb{P}(B) > 0)
$$

Équivalent : $\mathbb{P}(A \cap B) = \mathbb{P}(B) \times \mathbb{P}(A \mid B)$.
:::

:::formule Formules de multiplication (enchaînement)
$$
\mathbb{P}(A \cap B \cap C) = \mathbb{P}(A) \times \mathbb{P}(B \mid A) \times \mathbb{P}(C \mid A \cap B)
$$

Pour un tirage **avec remise** : $\mathbb{P}(A \cap B) = \mathbb{P}(A) \times \mathbb{P}(B)$ (indépendance).
:::

:::formule Indépendance
$$
A, B \text{ indépendants} \iff \mathbb{P}(A \cap B) = \mathbb{P}(A)\,\mathbb{P}(B) \iff \mathbb{P}(A \mid B) = \mathbb{P}(A)
$$

Avec remise : indépendants. Sans remise : dépendants (sauf cas particulier).

Incompatibles ($A \cap B = \varnothing$) $\neq$ indépendants : ce sont des événements **dépendants** (si leurs probabilités sont non nulles).
:::

:::formule Loi totale
$(B_1\,;\,\dots\,;\,B_n)$ partition de $E$ :

$$
\mathbb{P}(A) = \sum_{i=1}^{n} \mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)
$$
:::

:::formule Formule bayésienne
$$
\mathbb{P}(B_j \mid A) = \frac{\mathbb{P}(B_j)\,\mathbb{P}(A \mid B_j)}{\sum_{i=1}^{n} \mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)}
$$
:::

## Méthode express

1. **Nommer** les événements (« On note $A$ : ... ») et écrire les données en probabilités.
2. **Conditionnelle** : repérer le « sachant que » → l'événement au dénominateur.
3. **Enchaîner** : $\mathbb{P}(A \cap B) = \mathbb{P}(A) \times \mathbb{P}(B \mid A)$, en précisant remise ou non.
4. **Indépendance** : comparer $\mathbb{P}(A \cap B)$ et $\mathbb{P}(A)\mathbb{P}(B)$ (ou invoquer la remise).
5. **Loi totale** : choisir la partition, écrire la somme des produits $\mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)$.
6. **Bayes** : « sachant le résultat, retrouver le cas d'origine ».
7. **Conclure** en phrase avec le contexte et l'unité (probabilité, pourcentage).

:::erreur Les erreurs qui coûtent des points
1. Oublier de **définir** les événements avant de calculer.
2. Inverser $\mathbb{P}(A \mid B)$ et $\mathbb{P}(B \mid A)$ (dénominateur : l'événement **donné**).
3. Utiliser le produit $\mathbb{P}(A)\mathbb{P}(B)$ sur un tirage **sans remise** (c'est faux).
4. Dire que deux événements incompatibles sont indépendants : faux.
5. Oublier la condition $\mathbb{P}(B) > 0$ dans la conditionnelle.
6. Laisser $\dfrac{12}{90}$ non simplifié.
:::

## Vocabulaire

- **Probabilité conditionnelle** $\mathbb{P}(A \mid B)$ : probabilité de $A$ une fois $B$ réalisé.
- **Événements indépendants** : réaliser l'un n'altère pas la probabilité de l'autre.
- **Partition de l'univers** : événements mutuellement exclusifs et exhaustifs.
- **Loi totale** : décomposition d'une probabilité selon une partition.
- **Formule bayésienne** : retour du conditionnement ($\mathbb{P}(B \mid A)$ à partir de $\mathbb{P}(A \mid B)$).
- **Sensibilité** : $\mathbb{P}(\text{test}^+ \mid \text{malade})$ ; **spécificité** : $\mathbb{P}(\text{test}^- \mid \text{sain})$.
- **Faux positif** : $\mathbb{P}(\text{test}^+ \mid \text{sain})$.
- **Tirage avec remise / sans remise** : indépendance / dépendance des tirages.
