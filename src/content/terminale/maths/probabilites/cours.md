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

:::remarque À quoi ça sert au BAC ?
La probabilité conditionnelle et l'indépendance sont le socle de la **dernière grande question** du sujet : $6$ à $8$ points sur $20$. La formule des probabilités totales permet de décomposer un événement complexe en cas simples (loi totale), et l'indépendance simplifie les calculs. Chaque étape est notée : définir l'univers, écrire la formule, remplacer les nombres, conclure.
:::

## Rappels sur les événements

:::formule Opérations sur les événements
Pour des événements $A$ et $B$ d'un univers $E$ :

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

:::formule Inclusion
$$
A \subset B \;\Rightarrow\; \mathbb{P}(A) \leq \mathbb{P}(B)
$$

$$
\mathbb{P}(A) = \mathbb{P}(A \cap B) + \mathbb{P}(A \cap \overline{B})
$$
:::

## Probabilité conditionnelle

:::definition Probabilité conditionnelle
Soient $A$ et $B$ deux événements tels que $\mathbb{P}(B) > 0$. La **probabilité de $A$ sachant $B$**, notée $\mathbb{P}(A \mid B)$, est définie par

$$
\boxed{\;\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}\;}
$$

Intuitivement : on **restreint** l'univers à $B$ (l'événement $B$ est réalisé), puis on compte la part de $A$ dans ce nouvel univers.
:::

:::formule Formule de multiplication
$$
\boxed{\;\mathbb{P}(A \cap B) = \mathbb{P}(B) \times \mathbb{P}(A \mid B) = \mathbb{P}(A) \times \mathbb{P}(B \mid A)\;}
$$

On peut écrire $\mathbb{P}(A \cap B)$ de deux manières : c'est la base du raisonnement par étapes (premier tirage, second tirage...).
:::

:::methode Calculer une probabilité conditionnelle
1. Identifier le **conditionnement** : l'événement donné, $B$ (« sachant que... »).
2. Restreindre l'univers à $B$ (par exemple ne compter que les issues de $B$).
3. Compter les issues de $B$ qui vérifient aussi $A$ : $\mathrm{card}(A \cap B)$ (si équiprobable).
4. Calculer $\dfrac{\mathrm{card}(A \cap B)}{\mathrm{card}(B)}$ **ou** $\dfrac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}$.
:::

:::exemple Tirage sans remise
Une urne contient $4$ boules rouges et $6$ boules bleues ($10$ en tout). On tire deux boules **l'une après l'autre sans remise**.

$\mathbb{P}(\text{rouge}_2 \mid \text{rouge}_1)$ : sachant que la première est rouge, il reste $3$ rouges sur $9$ :

$$
\mathbb{P}(\text{rouge}_2 \mid \text{rouge}_1) = \frac{3}{9} = \frac{1}{3}.
$$

$\mathbb{P}(\text{rouge}_1 \cap \text{rouge}_2) = \mathbb{P}(\text{rouge}_1) \times \mathbb{P}(\text{rouge}_2 \mid \text{rouge}_1) = \dfrac{4}{10} \times \dfrac{3}{9} = \dfrac{12}{90} = \dfrac{2}{15}$.
:::

:::erreur Erreur classique
Confondre $\mathbb{P}(A \mid B)$ avec $\mathbb{P}(B \mid A)$ : les deux sont **différents** (sauf cas particuliers). Le tableau croisé suivant aide à ne pas se tromper :

$$
\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}, \qquad
\mathbb{P}(B \mid A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}.
$$
:::

## Indépendance

:::definition Événements indépendants
Deux événements $A$ et $B$ (de probabilités non nulles) sont **indépendants** si et seulement si

$$
\boxed{\;\mathbb{P}(A \cap B) = \mathbb{P}(A) \times \mathbb{P}(B)\;}
$$

ce qui est équivalent à $\mathbb{P}(A \mid B) = \mathbb{P}(A)$ et à $\mathbb{P}(B \mid A) = \mathbb{P}(B)$.
:::

:::remarque Lien avec le tirage
- **Avec remise** : les tirages successifs sont indépendants (le premier ne change pas le second).
- **Sans remise** : les tirages sont généralement **dépendants** (composition de l'urne modifiée). Sauf cas particulier (tirage avec remise ou effectifs égaux...).
:::

:::methode Vérifier l'indépendance
1. Calculer $\mathbb{P}(A)$, $\mathbb{P}(B)$ et $\mathbb{P}(A \cap B)$.
2. Comparer $\mathbb{P}(A \cap B)$ au produit $\mathbb{P}(A) \times \mathbb{P}(B)$.
3. Si égalité : indépendants ; sinon : **dépendants**.
:::

:::erreur Piège de l'interdisjonction
$A \cap B = \varnothing$ (événements incompatibles) n'implique **pas** l'indépendance : au contraire, si $\mathbb{P}(A) > 0$ et $\mathbb{P}(B) > 0$, alors $\mathbb{P}(A \cap B) = 0 \neq \mathbb{P}(A)\mathbb{P}(B)$ : les événements sont **dépendants**. Ils sont même « antagonistes » : réaliser l'un interdit l'autre.
:::

## Formule des probabilités totales

:::formule Loi totale
Soit $(B_1\,;\,B_2\,;\,\dots\,;\,B_n)$ une **partition** de l'univers $E$ (événements mutuellement exclusifs et exhaustifs). Alors, pour tout événement $A$ :

$$
\boxed{\;\mathbb{P}(A) = \sum_{i=1}^{n} \mathbb{P}(B_i) \times \mathbb{P}(A \mid B_i)\;}
$$

Autrement dit : on décompose $A$ selon les cas $B_i$ (qui « coupent » $A$ en morceaux $A \cap B_i$), et on additionne.
:::

:::formule Formule bayésienne (réciproque)
Sous les mêmes hypothèses, pour tout $j$ :

$$
\boxed{\;\mathbb{P}(B_j \mid A) = \frac{\mathbb{P}(B_j) \times \mathbb{P}(A \mid B_j)}{\displaystyle\sum_{i=1}^{n} \mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)}\;}
$$

Elle sert à « retourner » la condition : « sachant $A$, quelle est la probabilité du cas $B_j$ ? » (dépistage, défectuosité, origine d'un événement...).
:::

:::methode Appliquer la loi totale en 4 étapes
1. **Choisir la partition** $(B_i)$ : les cas exclusifs qui couvrent toutes les situations (ex. les trois usines qui produisent les objets).
2. **Donner** $\mathbb{P}(B_i)$ (souvent des proportions de production).
3. **Donner** $\mathbb{P}(A \mid B_i)$ (taux dans chaque cas).
4. **Calculer** la somme $\sum \mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)$.
:::

:::exemple Dépistage (type BAC)
Un test détecte une maladie avec une sensibilité de $99\,\%$ : $\mathbb{P}(\text{test}^+ \mid \text{malade}) = 0{,}99$. La maladie touche $1\,\%$ de la population : $\mathbb{P}(\text{malade}) = 0{,}01$. Le test donne $1\,\%$ de faux positifs : $\mathbb{P}(\text{test}^+ \mid \text{sain}) = 0{,}01$.

Partition : $\{\text{malade}\,;\,\text{sain}\}$. Loi totale :

$$
\mathbb{P}(\text{test}^+) = 0{,}01 \times 0{,}99 + 0{,}99 \times 0{,}01 = 0{,}0099 + 0{,}0099 = 0{,}0198.
$$

Probabilité d'être malade sachant un test positif (formule bayésienne) :

$$
\mathbb{P}(\text{malade} \mid \text{test}^+) = \frac{0{,}01 \times 0{,}99}{0{,}0198} = \frac{0{,}0099}{0{,}0198} = 0{,}5 = 50\,\%.
$$

**Leçon :** malgré un test très fiable, un test positif ne signifie qu'une chance sur deux d'être malade, car la maladie est rare : ce résultat contre-intuitif est attendu au BAC.
:::

## Rédaction attendue

:::methode Le paragraphe type
1. **Définir** les événements : « On note $A$ : «...», $B$ : «...» ».
2. **Donner** les données numériques de l'énoncé en probabilités.
3. **Écrire la formule** avant tout calcul (conditionnelle, multiplication, loi totale...).
4. **Remplacer** les nombres et calculer (fraction ou décimale).
5. **Conclure** en phrase dans le contexte : « La probabilité que... est de... ».
:::

## Ce qu'il faut retenir

- $\mathbb{P}(A \mid B) = \dfrac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}$ : on **restreint** l'univers à $B$.
- $\mathbb{P}(A \cap B) = \mathbb{P}(B)\,\mathbb{P}(A \mid B)$ : sert à enchaîner les tirages (avec ou sans remise).
- $A$ et $B$ indépendants $\iff \mathbb{P}(A \cap B) = \mathbb{P}(A)\,\mathbb{P}(B) \iff \mathbb{P}(A \mid B) = \mathbb{P}(A)$.
- Tirage **avec remise** : indépendants ; **sans remise** : dépendants.
- $A \cap B = \varnothing$ avec $\mathbb{P}(A), \mathbb{P}(B) > 0$ : **dépendants**, pas indépendants.
- Loi totale : $\mathbb{P}(A) = \sum_i \mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)$ avec $(B_i)$ partition de $E$.
- Formule bayésienne pour retourner le conditionnement.
