---
titre: Quiz — Probabilités
demo: false
---

## Question

Une urne contient $5$ rouges ($R$) et $5$ bleues ($B$). On tire deux boules **avec remise**. Que vaut la probabilité que les deux boules soient rouges ?

- [ ] $\dfrac{5}{10} = \dfrac{1}{2}$
- [x] $\dfrac{1}{4}$
- [ ] $\dfrac{1}{5}$
- [ ] $\dfrac{1}{10}$

> Avec remise, les tirages sont indépendants : $\mathbb{P}(R_1 \cap R_2) = \mathbb{P}(R_1) \times \mathbb{P}(R_2) = \dfrac{1}{2} \times \dfrac{1}{2} = \dfrac{1}{4}$ (soit aussi $\dfrac{5}{10} \times \dfrac{5}{10} = \dfrac{25}{100}$). La réponse $\dfrac{1}{2}$ correspond à la probabilité que la **première** boule soit rouge, sans condition sur la seconde.

## Question

$\mathbb{P}(A) = 0{,}4$, $\mathbb{P}(B) = 0{,}5$ et $\mathbb{P}(A \cap B) = 0{,}2$. $A$ et $B$ sont-ils indépendants ?

- [ ] Oui, car $\mathbb{P}(A \cap B) > 0$
- [ ] Non, car $0{,}2 < 0{,}4$
- [x] Oui, car $\mathbb{P}(A) \times \mathbb{P}(B) = 0{,}4 \times 0{,}5 = 0{,}2 = \mathbb{P}(A \cap B)$
- [ ] Non, car $\mathbb{P}(A \mid B) = 0{,}2 \neq \mathbb{P}(A)$

> Le critère est $\mathbb{P}(A \cap B) = \mathbb{P}(A)\,\mathbb{P}(B)$ : ici $0{,}4 \times 0{,}5 = 0{,}2$, l'égalité est vérifiée donc les événements sont indépendants. (Vérification : $\mathbb{P}(A \mid B) = 0{,}2/0{,}5 = 0{,}4 = \mathbb{P}(A)$ ✓.)

## Question

Un événement $B$ a pour probabilité $0{,}2$ et $\mathbb{P}(A \cap B) = 0{,}06$. Que vaut $\mathbb{P}(A \mid B)$ ?

- [ ] $0{,}012$
- [ ] $0{,}26$
- [x] $0{,}3$
- [ ] $0{,}6$

> Formule : $\mathbb{P}(A \mid B) = \dfrac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \dfrac{0{,}06}{0{,}2} = 0{,}3$. Le dénominateur est la probabilité de l'événement **donné** ($B$).

## Question

$2\,\%$ des objets produits par l'usine $U_1$ sont défectueux, $5\,\%$ ceux de $U_2$ ; $U_1$ fabrique $60\,\%$ des objets, $U_2$ les $40\,\%$ restants. Quelle formule donne la probabilité qu'un objet tiré au hasard soit défectueux ?

- [ ] $0{,}02 \times 0{,}05$
- [x] $0{,}6 \times 0{,}02 + 0{,}4 \times 0{,}05$
- [ ] $0{,}02 + 0{,}05$
- [ ] $\dfrac{0{,}02 + 0{,}05}{2}$

> C'est la **formule des probabilités totales** avec la partition $\{U_1\,;\,U_2\}$ : $\mathbb{P}(D) = \mathbb{P}(U_1)\,\mathbb{P}(D \mid U_1) + \mathbb{P}(U_2)\,\mathbb{P}(D \mid U_2) = 0{,}6 \times 0{,}02 + 0{,}4 \times 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032$.
