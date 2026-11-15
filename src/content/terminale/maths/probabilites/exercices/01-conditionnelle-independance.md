---
titre: Probabilité conditionnelle et indépendance
difficulte: 1
type: entrainement
indices:
  - Écris toujours la formule avant de remplacer : P(A ∩ B) = P(B) × P(A | B).
  - Pour l'indépendance, compare P(A ∩ B) au produit P(A) × P(B).
  - Dans un tirage avec remise, les événements sont indépendants : les probabilités ne changent pas.
---

## Énoncé

Une classe comprend $20$ garçons et $30$ filles. On tire un élève au hasard. On note $G$ : « l'élève tiré est un garçon » et $L$ : « l'élève tiré aime le sport ». On sait que :

$$
\mathbb{P}(L \mid G) = 0{,}6, \qquad \mathbb{P}(L \mid \overline{G}) = 0{,}8.
$$

1. Calculer $\mathbb{P}(G)$ et $\mathbb{P}(\overline{G})$.
2. Calculer $\mathbb{P}(L \cap G)$.
3. Calculer $\mathbb{P}(L)$ en utilisant la formule des probabilités totales (partition $\{G\,;\,\overline{G}\}$).
4. Calculer $\mathbb{P}(\overline{G} \mid L)$ (probabilité que l'élève soit une fille sachant qu'il aime le sport).
5. On tire désormais deux élèves **avec remise**. Calculer la probabilité que les deux soient des garçons qui n'aiment pas le sport.

## Solution

**1. Probabilités de $G$ et $\overline{G}$.**

$50$ élèves au total, dont $20$ garçons :

$$
\mathbb{P}(G) = \frac{20}{50} = \frac{2}{5} = 0{,}4, \qquad
\mathbb{P}(\overline{G}) = 1 - 0{,}4 = 0{,}6.
$$

**2. Calcul de $\mathbb{P}(L \cap G)$.**

Par la formule de multiplication :

$$
\mathbb{P}(L \cap G) = \mathbb{P}(G) \times \mathbb{P}(L \mid G) = 0{,}4 \times 0{,}6 = 0{,}24.
$$

**3. Calcul de $\mathbb{P}(L)$ (loi totale).**

$\{G\,;\,\overline{G}\}$ est une partition de l'univers (un élève est garçon ou fille) :

$$
\mathbb{P}(L) = \mathbb{P}(G)\,\mathbb{P}(L \mid G) + \mathbb{P}(\overline{G})\,\mathbb{P}(L \mid \overline{G})
$$

$$
\mathbb{P}(L) = 0{,}4 \times 0{,}6 + 0{,}6 \times 0{,}8 = 0{,}24 + 0{,}48 = 0{,}72.
$$

$72\,\%$ des élèves de la classe aiment le sport.

**4. Calcul de $\mathbb{P}(\overline{G} \mid L)$.**

On retourne le conditionnement (formule bayésienne à deux cas) :

$$
\mathbb{P}(\overline{G} \mid L) = \frac{\mathbb{P}(\overline{G} \cap L)}{\mathbb{P}(L)} = \frac{\mathbb{P}(\overline{G}) \times \mathbb{P}(L \mid \overline{G})}{\mathbb{P}(L)}.
$$

$$
\mathbb{P}(\overline{G} \mid L) = \frac{0{,}6 \times 0{,}8}{0{,}72} = \frac{0{,}48}{0{,}72} = \frac{48}{72} = \frac{2}{3} \approx 0{,}667.
$$

Donc, **sachant** que l'élève aime le sport, il y a une probabilité $\dfrac{2}{3}$ qu'il soit une fille.

*Vérification :* $\mathbb{P}(G \mid L) = \dfrac{0{,}24}{0{,}72} = \dfrac{1}{3}$, et $\dfrac{1}{3} + \dfrac{2}{3} = 1$. ✓

**5. Deux tirages avec remise : garçons qui n'aiment pas le sport.**

D'abord, la probabilité qu'un élève tiré au hasard soit garçon **et** n'aime pas le sport :

$$
\mathbb{P}(\overline{G} \cap \overline{L}) = \mathbb{P}(G) \times \mathbb{P}(\overline{L} \mid G) = 0{,}4 \times (1 - 0{,}6) = 0{,}4 \times 0{,}4 = 0{,}16.
$$

On note $C = G \cap \overline{L}$ (« garçon qui n'aime pas le sport ») : $\mathbb{P}(C) = 0{,}16$.

Les tirages étant **avec remise**, les deux tirages sont indépendants :

$$
\mathbb{P}(C_1 \cap C_2) = \mathbb{P}(C)^2 = 0{,}16^2 = 0{,}0256 = \frac{16}{625}.
$$

La probabilité est de $2{,}56\,\%$.

:::remarque Pourquoi la loi totale ?
L'événement $L$ « traverse » la partition $\{G\,;\,\overline{G}\}$ : $\mathbb{P}(L) = \mathbb{P}(L \cap G) + \mathbb{P}(L \cap \overline{G})$, et chaque terme se factorise avec une probabilité conditionnelle. C'est exactement la formule des probabilités totales.
:::
