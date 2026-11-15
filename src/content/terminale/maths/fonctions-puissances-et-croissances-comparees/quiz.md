---
titre: Quiz — Fonctions puissances et croissances comparées
demo: false
---

## Question

Quel est le sens de variation de $x \mapsto \left(\dfrac{1}{3}\right)^x$ sur $\mathbb{R}$ ?

- [ ] Strictement croissante
- [x] Strictement décroissante
- [ ] Constante
- [ ] Ni croissante ni décroissante

> La base vérifie $0 < \dfrac{1}{3} < 1$ : l'exponentielle est alors strictement **décroissante**. Par exemple $\left(\dfrac{1}{3}\right)^1 = \dfrac{1}{3} > \dfrac{1}{9} = \left(\dfrac{1}{3}\right)^2$.

## Question

Quelle est la valeur de $\log_2 8$ ?

- [ ] $16$
- [x] $3$
- [ ] $4$
- [ ] $\dfrac{8}{2} = 4$

> $\log_2 8 = y$ signifie $2^y = 8$. Comme $2^3 = 8$, on a $y = 3$. Avec le changement de base : $\log_2 8 = \dfrac{\ln 8}{\ln 2} = \dfrac{3 \ln 2}{\ln 2} = 3$.

## Question

Que vaut $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x^2}$ ?

- [ ] $+\infty$
- [ ] $1$
- [x] $0$
- [ ] La limite n'existe pas

> Croissances comparées : le logarithme croît moins vite que toute puissance $x^{\alpha}$ avec $\alpha > 0$. Ici $\alpha = 2$, donc $\dfrac{\ln x}{x^2} \to 0$.

## Question

Résoudre $\left(\dfrac{1}{2}\right)^{x+1} = 8$.

- [ ] $x = 3$
- [x] $x = -4$
- [ ] $x = 2$
- [ ] Aucune solution

> On passe à la base $2$ : $\left(\dfrac{1}{2}\right)^{x+1} = 2^{-(x+1)}$ et $8 = 2^3$. Donc $-(x+1) = 3$, soit $x + 1 = -3$ et $x = -4$. Vérification : $\left(\dfrac{1}{2}\right)^{-3} = 8$. ✓
