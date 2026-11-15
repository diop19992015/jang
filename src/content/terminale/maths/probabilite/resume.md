---
titre: Probabilité
accroche: Expérience aléatoire, univers, événements · Équiprobabilité · Cas simples de non-équiprobabilité
series: L
ordre: 4
duree: 45
demo: false
statut: publie
objectifs:
  - Expérience aléatoire, univers, événements
  - Équiprobabilité
  - Cas simples de non-équiprobabilité
partie: Probabilité
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Définitions
- **Expérience aléatoire** : expérience au résultat incertain mais dont on connaît tous les résultats possibles.
- **Univers** $E$ : ensemble fini des issues possibles (mutuellement exclusives et exhaustives).
- **Événement** : partie de $E$.
:::

:::formule Axiomes de probabilité
$$
0 \leq \mathbb{P}(A) \leq 1, \qquad \mathbb{P}(E) = 1, \qquad \mathbb{P}(\varnothing) = 0
$$

$$
\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)
$$
:::

:::formule Cas équiprobable
$$
\mathbb{P}(A) = \frac{\mathrm{card}(A)}{\mathrm{card}(E)}
$$

Valable **uniquement** si toutes les issues de $E$ ont la même probabilité.
:::

:::formule Réunion et intersection
$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)
$$

$$
A \cap B = \varnothing \;\Rightarrow\; \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)
$$
:::

:::formule Cas non équiprobable
Si les issues $i$ ont des probabilités individuelles différentes :

$$
\mathbb{P}(A) = \sum_{i \in A} \mathbb{P}(\{i\}), \qquad \sum_{\text{toutes les issues}} \mathbb{P}(\{i\}) = 1
$$
:::

:::formule Univers à deux variables
Tirer un élève au hasard dans un groupe :

$$
\mathbb{P}(A) = \frac{\text{effectif de } A}{\text{effectif total}}
$$

Pour des proportions : $\mathbb{P}(\text{lunettes}) = \mathbb{P}(\text{fille}) \times \mathbb{P}(\text{lunettes} \mid \text{fille}) + \mathbb{P}(\text{garçon}) \times \mathbb{P}(\text{lunettes} \mid \text{garçon})$.
:::

## Méthode express

1. **Définir l'univers** $E$ : « $E = \{$…$\}$ » avec $\mathrm{card}(E)$ (les $36$ couples de dés, les $52$ cartes…).
2. **Dire** que les issues sont équiprobables (et pourquoi), ou lister les probabilités individuelles si elles diffèrent.
3. **Décrire l'événement** $A$ et compter $\mathrm{card}(A)$ (tableau ou inclusion-exclusion).
4. **Calculer** $\mathbb{P}(A) = \dfrac{\mathrm{card}(A)}{\mathrm{card}(E)}$, fraction irréductible.
5. **Contrôler** : $0 \leq \mathbb{P}(A) \leq 1$ ; pour un complémentaire, $\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)$.

:::erreur Les erreurs qui coûtent des points
1. Oublier de définir l'univers avant de calculer (question souvent notée à part).
2. Prendre les sommes comme issues équiprobables sur deux dés : il faut les $36$ couples.
3. Utiliser le comptage simple sur une urne aux couleurs inégales : il faut **pondérer**.
4. Oublier de soustraire l'intersection dans $\mathbb{P}(A \cup B)$.
5. Laisser $\dfrac{12}{36}$ non simplifié : donne $\dfrac{1}{3}$.
:::

## Vocabulaire

- **Expérience aléatoire** : expérience dont l'issue est inconnue à l'avance.
- **Univers / espace des issues** $E$ : tous les résultats possibles.
- **Issue** : élément de $E$.
- **Événement** : partie de $E$ (ensemble d'issues).
- **Équiprobabilité** : toutes les issues ont la même probabilité.
- **Événement impossible** : $\varnothing$, probabilité $0$.
- **Événement certain** : $E$, probabilité $1$.
- **Complémentaire** $\overline{A}$ : « pas $A$ », avec $\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)$.
- **Pondération** : attribution d'une probabilité propre à chaque issue.
