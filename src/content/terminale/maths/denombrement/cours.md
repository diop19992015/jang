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

:::remarque À quoi ça sert au BAC ?
Le dénombrement est la partie la plus accessible des probabilités au BAC L : les questions portent sur le calcul de cardinaux à partir d'un énonce en langage naturel (« 40 élèves ont un téléphone, 25 une calculatrice… »). Un tableau ou un diagramme bien dessiné donne des points certains en quelques minutes.
:::

## Rappels : ensembles et cardinaux

:::definition Vocabulaire
- $A \cup B$ : la **réunion** (« $A$ ou $B$ »), ceux qui sont dans $A$, dans $B$, ou dans les deux.
- $A \cap B$ : l'**intersection** (« $A$ et $B$ »), ceux qui sont dans $A$ **et** dans $B$.
- $\overline{A}$ (ou $A^c$) : le **complémentaire** de $A$ dans l'univers $E$, ceux qui ne sont pas dans $A$.
- $\mathrm{card}(A)$ : le **nombre d'éléments** de $A$, noté aussi $n(A)$.
:::

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

:::formule Complémentaire
Si l'univers $E$ est fini :

$$
\mathrm{card}(\overline{A}) = \mathrm{card}(E) - \mathrm{card}(A)
$$
:::

:::remarque Pourquoi soustraire l'intersection ?
Dans $\mathrm{card}(A) + \mathrm{card}(B)$, les éléments de $A \cap B$ ont été **comptés deux fois**. On les retire une fois pour ne compter chaque élément qu'une seule fois. C'est le **principe d'inclusion-exclusion**.
:::

:::erreur L'erreur la plus fréquente
Écrire $\mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B)$ **sans** soustraire l'intersection. Ce n'est vrai que si $A \cap B = \varnothing$ (ensembles disjoints). Vérifie toujours s'il y a des éléments **communs**.
:::

## Le diagramme de Venn

:::methode Dessiner un diagramme de Venn
1. Tracer le rectangle (l'univers $E$) et les disques superposés ($A$ et $B$, ou $A$, $B$, $C$).
2. Remplir **d'abord** l'intersection $A \cap B$ (le plus petit morceau).
3. Remplir ensuite les parties restantes de $A$ et de $B$.
4. Le reste du rectangle est le complémentaire $\overline{A \cup B}$.
5. Vérifier : la somme de toutes les zones doit valoir $\mathrm{card}(E)$.
:::

:::exemple Remplir un diagramme
Univers : $40$ élèves. $A$ = « aime le foot », $\mathrm{card}(A) = 25$ ; $B$ = « aime le basket », $\mathrm{card}(B) = 20$ ; $A \cap B = 8$.

- Morceau commun : $8$.
- Partie de $A$ seule : $25 - 8 = 17$.
- Partie de $B$ seule : $20 - 8 = 12$.
- Ni foot ni basket : $40 - (17 + 8 + 12) = 40 - 37 = 3$.

Vérification : $17 + 8 + 12 + 3 = 40$. ✓
:::

:::remarque Lecture rapide des résultats
- « au moins l'un des deux » $= \mathrm{card}(A \cup B)$ ;
- « les deux à la fois » $= \mathrm{card}(A \cap B)$ ;
- « ni l'un ni l'autre » $= \mathrm{card}(E) - \mathrm{card}(A \cup B)$ ;
- « au moins $A$ mais pas $B$ » $= \mathrm{card}(A) - \mathrm{card}(A \cap B)$.
:::

## La méthode du tableau

:::methode Tableau à deux entrées (2 × 2)
1. Créer un tableau dont les lignes décrivent $A$ / $\overline{A}$ et les colonnes $B$ / $\overline{B}$.
2. Remplir les cases **croisées** à partir des intersections données dans l'énoncé.
3. Calculer les totaux de lignes et de colonnes avec la règle : ligne + colonne - intersection.
4. Compléter la case « ni l'un ni l'autre » en soustrayant des totaux.
5. Vérifier que la somme des quatre cases vaut $\mathrm{card}(E)$.
:::

:::exemple Tableau d'un sondage
Sur $200$ personnes : $90$ lisent le journal $H$ (Le Soleil), $70$ lisent $F$ (Fraternité), $40$ lisent les deux.

| | Lit $F$ | Ne lit pas $F$ | **Total** |
| --- | --- | --- | --- |
| Lit $H$ | $40$ | $90 - 40 = 50$ | $90$ |
| Ne lit pas $H$ | $70 - 40 = 30$ | $200 - (40+50+30) = 80$ | $110$ |
| **Total** | $70$ | $130$ | $200$ |

Lectures : $40$ lisent les deux journaux, $80$ ne lisent ni l'un ni l'autre, $130$ lisent au moins un des deux ($90 + 70 - 40 = 130$). ✓
:::

:::methode Résoudre un problème de dénombrement
1. **Nommer** les événements : écrire « $A$ = … », « $B$ = … » avec leurs cardinaux.
2. **Traduire** chaque phrase de l'énonce en égalité ou inégalité de cardinaux.
3. **Choisir l'outil** : inclusion-exclusion, complémentaire, ou tableau.
4. **Calculer** en montrant la formule utilisée (les points vont à la rédaction).
5. **Vérifier** : somme des cases $=$ total, et réponse compatible avec l'énonce.
:::

## Problème du « au moins un »

:::methode Calculer « au moins un »
$\mathrm{card}(\text{au moins un})$ est souvent plus simple par le **complémentaire** :

$$
\mathrm{card}(\text{au moins un}) = \mathrm{card}(E) - \mathrm{card}(\text{aucun})
$$
:::

:::exemple Trois événements par le complémentaire
Dans un groupe de $50$ personnes, $30$ connaissent $A$, $25$ connaissent $B$, $20$ connaissent $C$ ; $15$ connaissent $A$ et $B$, $10$ connaissent $A$ et $C$, $8$ connaissent $B$ et $C$, $5$ connaissent les trois.

$$
\mathrm{card}(A \cup B \cup C) = 30 + 25 + 20 - 15 - 10 - 8 + 5 = 47.
$$

Donc $50 - 47 = 3$ personnes ne connaissent aucun des trois.
:::

:::piege « Au moins un » ne se décompose pas en « un seul »
$\mathrm{card}(A \cup B \cup C)$ compte ceux qui en connaissent **un**, **deux** ou **trois**. Si l'énonce demande « exactement un », il faut soustraire deux fois les zones à deux et trois éléments : dessine le diagramme plutôt que d'utiliser une formule toute faite.
:::

## Dénombrement dans un tableau de données

:::methode Tableau croisé de statistiques
1. Repérer les **lignes** (une variable) et les **colonnes** (l'autre variable).
2. Remplir les cases connues ; les totaux servent de contrôle.
3. Calculer une proportion : $\dfrac{\text{case}}{\text{total de la ligne ou du tableau}}$.
:::

:::exemple Lire un tableau
| | Garçons | Filles | **Total** |
| --- | --- | --- | --- |
| Maths | $12$ | $8$ | $20$ |
| Histoire | $6$ | $14$ | $20$ |
| **Total** | $18$ | $22$ | $40$ |

La probabilité qu'un élève choisi au hasard soit une fille qui choisit les maths vaut $\dfrac{8}{40} = 0,2$.
:::

## Ce qu'il faut retenir

- $\mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B) - \mathrm{card}(A \cap B)$ : l'intersection est **retirée une fois**.
- Trois ensembles : somme des cards simples - somme des intersections deux à deux + intersection des trois.
- $\mathrm{card}(\overline{A}) = \mathrm{card}(E) - \mathrm{card}(A)$ : outil des problèmes « au moins un » et « aucun ».
- Le diagramme de Venn et le tableau 2 × 2 se remplissent **du centre vers l'extérieur**.
- La somme de toutes les cases doit toujours valoir le total de l'univers : c'est ta vérification.
- Nommer les ensembles et écrire la formule utilisée rapporte des points même si le calcul est simple.
