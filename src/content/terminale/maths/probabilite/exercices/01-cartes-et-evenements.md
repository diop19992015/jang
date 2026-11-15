---
titre: Univers, événements et probabilités
difficulte: 1
type: entrainement
indices:
  - Commence par définir l'événement A et compter card(A) et card(E).
  - Vérifie que les issues sont équiprobables avant d'utiliser card(A)/card(E).
  - Utilise le complémentaire quand l'événement « au moins un » est difficile à compter directement.
---

## Énoncé

On tire au hasard une carte dans un jeu de $52$ cartes (quatre couleurs de $13$ cartes, dont $4$ as).

1. Définir l'univers $E$ de cette expérience et donner $\mathrm{card}(E)$.
2. Calculer la probabilité de tirer un as ($A$), puis la probabilité de tirer un pique ($P$).
3. Calculer la probabilité de tirer un as **ou** un pique ($A \cup P$).
4. Calculer la probabilité de ne tirer ni as ni pique, par deux méthodes.
5. On tire désormais deux cartes l'une après l'autre **avec remise**. Calculer la probabilité d'obtenir deux as.

## Solution

**1. Univers.**

$E$ est l'ensemble des $52$ cartes du jeu : $\mathrm{card}(E) = 52$. Les issues (chaque carte) sont équiprobables car le tirage est fait au hasard, chaque carte ayant la même chance d'être tirée.

**2. Probabilité d'un as et d'un pique.**

Il y a $4$ as dans le jeu :

$$
\mathbb{P}(A) = \frac{\mathrm{card}(A)}{\mathrm{card}(E)} = \frac{4}{52} = \frac{1}{13}.
$$

Il y a $13$ cartes de pique :

$$
\mathbb{P}(P) = \frac{13}{52} = \frac{1}{4}.
$$

**3. Probabilité d'un as ou d'un pique.**

On utilise la formule de la réunion :

$$
\mathbb{P}(A \cup P) = \mathbb{P}(A) + \mathbb{P}(P) - \mathbb{P}(A \cap P).
$$

L'intersection $A \cap P$ est l'**as de pique** : une seule carte, donc $\mathbb{P}(A \cap P) = \dfrac{1}{52}$.

$$
\mathbb{P}(A \cup P) = \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}.
$$

**4. Probabilité de ne tirer ni as ni pique (deux méthodes).**

*Méthode 1 — Complémentaire :*

$$
\mathbb{P}(\overline{A \cup P}) = 1 - \mathbb{P}(A \cup P) = 1 - \frac{4}{13} = \frac{9}{13}.
$$

*Méthode 2 — Comptage direct :* les cartes qui ne sont ni as ni de pique sont les $39$ cartes non pique, moins les $3$ as de carreau, de cœur et de trèfle : $39 - 3 = 36$ cartes.

$$
\mathbb{P} = \frac{36}{52} = \frac{9}{13}.
$$

Les deux méthodes donnent le même résultat. ✓

**5. Deux as avec remise.**

Le tirage avec remise rend les deux tirages **indépendants** : la probabilité d'un as reste $\dfrac{1}{13}$ au second tirage.

$$
\mathbb{P}(\text{deux as}) = \frac{1}{13} \times \frac{1}{13} = \frac{1}{169}.
$$

:::remarque Vérification
$\dfrac{9}{13} \approx 0{,}69$ est bien compris entre $0$ et $1$, et $\mathbb{P}(A \cup P) + \mathbb{P}(\overline{A \cup P}) = \dfrac{4}{13} + \dfrac{9}{13} = 1$. ✓
:::
