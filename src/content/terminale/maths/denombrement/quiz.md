---
titre: Quiz — Dénombrement
demo: false
---

## Question

Dans un groupe de $50$ personnes, $30$ connaissent le football, $25$ connaissent le basket et $15$ connaissent les deux. Combien de personnes connaissent au moins l'un des deux sports ?

- [ ] $55$
- [x] $40$
- [ ] $25$
- [ ] $15$

> $\mathrm{card}(A \cup B) = 30 + 25 - 15 = 40$. Les $15$ personnes qui connaissent les deux ont été comptées deux fois dans $30 + 25$ : on les retire une fois. Et $40 \leq 50$, ce qui est cohérent.

## Question

Sur $200$ lycéens, $90$ lisent le journal $H$, $70$ lisent le journal $F$ et $40$ lisent les deux. Combien ne lisent aucun des deux journaux ?

- [ ] $130$
- [x] $80$
- [ ] $60$
- [ ] $40$

> $\mathrm{card}(H \cup F) = 90 + 70 - 40 = 120$. Ceux qui lisent au moins un journal sont $120$ ; les autres sont $200 - 120 = 80$.

## Question

$A \cap B = \varnothing$, $\mathrm{card}(A \cup B) = 12$ et $\mathrm{card}(A) = 5$. Quel est $\mathrm{card}(B)$ ?

- [ ] $12$
- [x] $7$
- [ ] $17$
- [ ] $5$

> Les ensembles sont disjoints, donc $\mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B)$, soit $12 = 5 + \mathrm{card}(B)$ d'où $\mathrm{card}(B) = 7$.

## Question

Univers $E$ de cardinal $40$ et $A$ de cardinal $25$. Que vaut $\mathrm{card}(\overline{A})$ ?

- [ ] $40$
- [ ] $25$
- [x] $15$
- [ ] $65$

> Le complémentaire regroupe tous les éléments de $E$ qui ne sont pas dans $A$ : $\mathrm{card}(\overline{A}) = \mathrm{card}(E) - \mathrm{card}(A) = 40 - 25 = 15$.
