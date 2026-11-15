---
titre: Croisement monohybride chez le maïs
difficulte: 1
type: entrainement
demo: true
indices:
  - Commence par identifier l'allèle dominant à partir des résultats de $F_1$.
  - Un échiquier à deux lignes et deux colonnes suffit pour $F_2$.
  - Vérifie que la somme des proportions vaut bien $1$.
---

## Énoncé

On croise deux lignées pures de maïs : une lignée à grains lisses et une lignée à grains ridés. Tous les individus de la génération $F_1$ ont des grains lisses.

On croise ensuite entre eux deux individus de $F_1$. On obtient en $F_2$ : $547$ plants à grains lisses et $183$ plants à grains ridés.

1. Quel est l'allèle dominant ? Justifier.
2. Écrire les génotypes des parents de la génération $P$ et des individus de $F_1$.
3. Construire l'échiquier du croisement $F_1 \times F_1$ et donner les proportions génotypiques et phénotypiques attendues en $F_2$.
4. Les résultats observés sont-ils conformes à la théorie ? Commenter.

## Solution

**1. Allèle dominant.**

La génération $F_1$ est uniforme et présente le caractère « grains lisses ». D'après la première loi de Mendel (uniformité des hybrides), le caractère qui s'exprime chez tous les hybrides est le caractère **dominant**.

Donc l'allèle **lisse** est dominant. On le note $L$, et l'allèle ridé récessif $l$.

**2. Génotypes.**

Les lignées pures sont homozygotes :
- parent à grains lisses : $L//L$ ;
- parent à grains ridés : $l//l$.

Tous les individus $F_1$ reçoivent un allèle $L$ d'un parent et un allèle $l$ de l'autre : ils sont **hétérozygotes $L//l$**, et leur phénotype est lisse puisque $L$ est dominant.

**3. Échiquier $F_1 \times F_1$.**

Chaque parent $L//l$ produit $50\,\%$ de gamètes $L$ et $50\,\%$ de gamètes $l$.

| | $L$ | $l$ |
| --- | --- | --- |
| **$L$** | $L//L$ | $L//l$ |
| **$l$** | $L//l$ | $l//l$ |

Proportions génotypiques :
$$
1/4 \; L//L \quad ; \quad 1/2 \; L//l \quad ; \quad 1/4 \; l//l
$$

Proportions phénotypiques :
- grains lisses : $1/4 + 1/2 = 3/4$ ;
- grains ridés : $1/4$.

Soit un rapport théorique $3:1$.

**4. Conformité des résultats.**

Effectif total : $547+183=730$.

Proportions observées :
- lisses : $\dfrac{547}{730} \approx 0{,}749$, soit environ $74{,}9\,\%$ ;
- ridés : $\dfrac{183}{730} \approx 0{,}251$, soit environ $25{,}1\,\%$.

Ces valeurs sont très proches des proportions théoriques $75\,\%$ et $25\,\%$. Les résultats sont donc **conformes** à l'hypothèse d'un gène à deux allèles avec dominance simple, et l'écart observé est négligeable sur un effectif de $730$ plants.

:::remarque Conclusion à retenir
Un rapport voisin de $3:1$ en $F_2$ est la signature d'un **monohybridisme avec dominance simple**. C'est le premier réflexe à avoir face à ce type de résultats.
:::
