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

:::remarque À quoi ça sert au BAC ?
Les probabilités constituent presque toujours la **dernière grande question** du sujet de maths : $6$ à $8$ points sur $20$. Les bases (expérience aléatoire, univers, événements, équiprobabilité) sont le socle : sans univers correctement défini et sans dénombrement rigoureux, aucune question suivante ne peut être réussie.
:::

## Expérience aléatoire, univers, issue

:::definition Expérience aléatoire et univers
Une **expérience aléatoire** est une expérience dont le résultat n'est pas connu à l'avance mais dont on peut décrire **tous** les résultats possibles.

L'**univers** $E$ (ou espace des issues) est l'ensemble **fini** de tous les résultats possibles de l'expérience. Ses éléments s'appellent les **issues**.
:::

:::remarque Définir un univers correct
L'univers doit être **fini**, **mutuellement exclusives** (deux issues différentes ne peuvent pas se réaliser ensemble) et **exhaustives** (l'une des issues se réalise obligatoirement). Un univers mal défini est la première cause de perte de points.
:::

:::exemple Définir l'univers
« On tire au hasard un élève d'une classe de $30$ » : $E = \{$ les $30$ élèves $\}$, $\mathrm{card}(E) = 30$.

« On lance deux dés » : $E$ comporte $6 \times 6 = 36$ issues, à décrire par paires $(d_1\,;\,d_2)$, **pas** seulement les sommes $2$ à $12$ (les issues ne sont pas équiprobables si on ne retient que les sommes).
:::

:::erreur L'erreur classique sur les deux dés
Prendre $E = \{2\,;\,3\,;\,\dots\,;\,12\}$ avec $11$ issues. C'est **faux** : la somme $7$ arrive $6$ fois sur $36$ alors que la somme $2$ arrive $1$ fois : ces issues ne sont pas équiprobables. Il faut dénombrer les $36$ couples $(d_1\,;\,d_2)$.
:::

## Événements

:::definition Événement
Un **événement** est une partie de l'univers, c'est-à-dire un ensemble d'issues. On note généralement $A$, $B$, $C$…

- $A \cup B$ : « $A$ **ou** $B$ » (au moins l'un des deux).
- $A \cap B$ : « $A$ **et** $B$ » (les deux en même temps).
- $\overline{A}$ : « **pas** $A$ ».
- $\varnothing$ : l'événement **impossible** ; $E$ : l'événement **certain**.
:::

:::exemple Événements sur deux dés
$A$ = « la somme est $7$ », $B$ = « le premier dé vaut $3$ ».

$$
A = \{(1\,;6),(2\,;5),(3\,;4),(4\,;3),(5\;2),(6\,;1)\}, \qquad \mathrm{card}(A) = 6.
$$

$$
B = \{(3\,;1),(3\,;2),\dots,(3\,;6)\}, \qquad \mathrm{card}(B) = 6.
$$

$$
A \cap B = \{(3\,;4)\}, \qquad \mathrm{card}(A \cap B) = 1.
$$
:::

## Équiprobabilité

:::formule Axiomes des probabilités
Pour tout événement $A$ d'un univers fini $E$ :

$$
0 \leq \mathbb{P}(A) \leq 1, \qquad \mathbb{P}(E) = 1, \qquad \mathbb{P}(\varnothing) = 0
$$

$$
\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)
$$
:::

:::formule Probabilité dans le cas équiprobable
Si toutes les issues de $E$ ont la **même probabilité** ($\mathrm{card}(E)$ issues équiprobables), alors pour tout événement $A$ :

$$
\boxed{\;\mathbb{P}(A) = \frac{\mathrm{card}(A)}{\mathrm{card}(E)}\;}
$$
:::

:::methode Calculer une probabilité en 4 étapes
1. **Définir** l'univers $E$ et le justifier (issues mutuellement exclusives et exhaustives).
2. **Dire** que les issues sont équiprobables (préciser pourquoi : tirage au hasard, dés non truqués…).
3. **Compter** $\mathrm{card}(A)$ avec le dénombrement (tableau, inclusion-exclusion).
4. **Calculer** $\mathbb{P}(A) = \dfrac{\mathrm{card}(A)}{\mathrm{card}(E)}$ et vérifier que la valeur est entre $0$ et $1$.
:::

:::exemple Tirage d'une carte
Dans un jeu de $52$ cartes, la probabilité de tirer un as est

$$
\mathbb{P}(\text{as}) = \frac{4}{52} = \frac{1}{13} \approx 0,077.
$$

La probabilité de tirer un pique **ou** un as :

$$
\mathbb{P}(\text{pique} \cup \text{as}) = \frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13},
$$

car l'intersection est l'as de pique ($1$ carte).
:::

:::remarque Fractions irréductibles et décimales
Au BAC, on donne toujours la probabilité sous forme de **fraction irréductible** ; la forme décimale peut suivre. $\mathbb{P} = 0{,}25$ est accepté si la fraction est aussi donnée.
:::

## Non-équiprobabilité : cas simples

:::definition Issues non équiprobables
Lorsque les issues n'ont pas la même probabilité, on ne peut plus utiliser $\dfrac{\mathrm{card}(A)}{\mathrm{card}(E)}$. On **pondère** : chaque issue $i$ reçoit une probabilité $\mathbb{P}(\{i\})$, et la somme de toutes vaut $1$.
:::

:::methode Méthode des issues pondérées
1. Lister les issues $i_1, \dots, i_n$ avec leur probabilité individuelle.
2. Vérifier que la somme des probabilités vaut $1$.
3. $\mathbb{P}(A) = $ somme des probabilités des issues de $A$.
:::

:::exemple Une urne à couleurs différentes
Une urne contient $3$ boules rouges, $5$ boules bleues et $2$ boules vertes ($10$ au total). On tire une boule au hasard. Les issues ne sont pas équiprobables si on ne regarde que la couleur :

$$
\mathbb{P}(\text{rouge}) = \frac{3}{10}, \qquad \mathbb{P}(\text{bleue}) = \frac{5}{10} = \frac{1}{2}, \qquad \mathbb{P}(\text{verte}) = \frac{2}{10} = \frac{1}{5}.
$$

$$
\mathbb{P}(\text{rouge ou verte}) = \frac{3}{10} + \frac{2}{10} = \frac{1}{2}.
$$

Vérification : $\dfrac{3}{10} + \dfrac{5}{10} + \dfrac{2}{10} = 1$. ✓
:::

:::piege Pondérer au lieu de compter
Dans cette urne, dire que $\mathbb{P}(\text{rouge}) = \dfrac{1}{3}$ (une couleur sur trois) est **faux** : il y a autant de boules rouges que de bleues ou de vertes, mais pas le même nombre de boules. On compte les **boules**, pas les couleurs.
:::

## Combinaison des cas : répartition en deux groupes

:::methode Problème du choix d'un élève
Quand l'univers est « tirer une personne au hasard dans un groupe », la probabilité d'un événement est le **quotient** :

$$
\mathbb{P}(A) = \frac{\text{nombre de personnes de } A}{\text{nombre total de personnes}}
$$

Si l'énoncé donne des **proportions** (« $40\,\%$ des filles… »), on construit un tableau de nombres fictifs cohérents (ou on multiplie les proportions).
:::

:::exemple Élèves et filles
Dans une classe, $40\,\%$ des élèves sont des filles et $60\,\%$ des garçons. $30\,\%$ des filles et $20\,\%$ des garçons portent des lunettes. Quelle est la probabilité qu'un élève tiré au hasard porte des lunettes ?

$$
\mathbb{P}(\text{lunettes}) = 0{,}4 \times 0{,}3 + 0{,}6 \times 0{,}2 = 0{,}12 + 0{,}12 = 0{,}24.
$$

Il y a donc $24\,\%$ de chance que l'élève tiré porte des lunettes.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de **définir** l'univers $E$ avant tout calcul : la question « Quel est l'univers ? » vaut souvent $1$ point.
2. Utiliser $\dfrac{\mathrm{card}(A)}{\mathrm{card}(E)}$ sans avoir vérifié l'**équiprobabilité**.
3. Ne pas ajouter l'intersection dans une réunion : $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$.
4. Oublier que $\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)$ (complémentaire) est souvent plus rapide.
:::

## Ce qu'il faut retenir

- Expérience aléatoire : décrire **tous** les résultats possibles dans un univers fini $E$.
- Événement = partie de $E$ ; réunion = « ou », intersection = « et », complémentaire = « pas ».
- Si les issues sont équiprobables : $\mathbb{P}(A) = \dfrac{\mathrm{card}(A)}{\mathrm{card}(E)}$.
- $\mathbb{P}(E) = 1$, $\mathbb{P}(\varnothing) = 0$, $\mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A)$.
- Si les issues ne sont **pas** équiprobables : pondérer et vérifier que les probabilités somment à $1$.
- Toujours rédiger : univers $\to$ équiprobabilité $\to$ comptage $\to$ fraction irréductible.
