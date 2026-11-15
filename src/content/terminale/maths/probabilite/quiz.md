---
titre: Quiz — Probabilité
demo: false
---

## Question

On lance un dé non truqué une fois. Que vaut la probabilité d'obtenir un nombre premier ?

- [ ] $\dfrac{1}{3}$
- [x] $\dfrac{1}{2}$
- [ ] $\dfrac{2}{3}$
- [ ] $\dfrac{1}{6}$

> Les issues sont $\{1\,;\,2\,;\,3\,;\,4\,;\,5\,;\,6\}$, soit $6$ issues équiprobables. Les nombres premiers parmi elles sont $2$, $3$ et $5$ : $\mathrm{card}(A) = 3$. Donc $\mathbb{P}(A) = \dfrac{3}{6} = \dfrac{1}{2}$.

## Question

Deux dés sont lancés. Quelle est la probabilité que la somme soit égale à $7$ ?

- [ ] $\dfrac{1}{11}$
- [x] $\dfrac{1}{6}$
- [ ] $\dfrac{1}{36}$
- [ ] $\dfrac{6}{11}$

> L'univers est l'ensemble des $36$ couples $(d_1\,;\,d_2)$ équiprobables. Les issues donnant la somme $7$ sont $(1\,;6), (2\,;5), (3\,;4), (4\,;3), (5\,;2), (6\,;1)$ : soit $6$ issues. Donc $\mathbb{P} = \dfrac{6}{36} = \dfrac{1}{6}$.

## Question

$\mathbb{P}(A) = 0{,}3$ et $\mathbb{P}(B) = 0{,}5$, avec $A \cap B = \varnothing$. Que vaut $\mathbb{P}(A \cup B)$ ?

- [ ] $1{,}5$
- [x] $0{,}8$
- [ ] $0{,}2$
- [ ] $0{,}15$

> Les événements sont disjoints (intersection vide), donc leurs probabilités s'ajoutent : $\mathbb{P}(A \cup B) = 0{,}3 + 0{,}5 = 0{,}8$. Sans la condition $A \cap B = \varnothing$, il faudrait soustraire $\mathbb{P}(A \cap B)$.

## Question

Une urne contient $4$ boules rouges et $6$ boules bleues. On tire une boule au hasard. Que vaut la probabilité de ne pas tirer une boule rouge ?

- [ ] $\dfrac{2}{5}$
- [x] $\dfrac{3}{5}$
- [ ] $\dfrac{1}{2}$
- [ ] $\dfrac{4}{10}$

> $\mathbb{P}(\text{rouge}) = \dfrac{4}{10} = \dfrac{2}{5}$, donc $\mathbb{P}(\text{pas rouge}) = 1 - \dfrac{2}{5} = \dfrac{3}{5}$, ce qui correspond aux $6$ boules bleues : $\dfrac{6}{10} = \dfrac{3}{5}$.
