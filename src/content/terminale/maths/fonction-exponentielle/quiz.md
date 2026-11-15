---
titre: Quiz — Fonction exponentielle
demo: false
---

## Question

Simplifier $e^3 \times e^{-5}$ :

- [ ] $e^{15}$
- [x] $e^{-2}$
- [ ] $e^{-2/15}$
- [ ] $1$

> On additionne les exposants (produit de même base) : $e^3 \times e^{-5} = e^{3 + (-5)} = e^{-2}$. On peut aussi écrire $e^{-2} = \dfrac{1}{e^2}$.

## Question

Combien de solutions a l'équation $e^{2x} = -4$ ?

- [ ] Une : $x = ln(-4)$
- [ ] Deux
- [x] Aucune
- [ ] Infinité

> Pour tout réel $x$, $e^{2x} > 0$ : l'exponentielle ne peut jamais valoir un nombre négatif. L'équation n'admet donc aucune solution (et $ln(-4)$ n'est pas défini).

## Question

Quelle est la limite de $\dfrac{x^2}{e^x}$ quand $x \to +\infty$ ?

- [ ] $+\infty$
- [ ] $1$
- [x] $0$
- [ ] $e^2$

> Croissance comparée : en $+\infty$, $e^x$ croît plus vite que toute puissance de $x$, donc $x^2/e^x$ tend vers $0$. (On peut aussi appliquer deux fois la règle de l'Hôpital ou factoriser par $e^x$.)

## Question

$f(x) = x\,e^x$. Où $f$ admet-elle un extremum local ?

- [ ] En $x = 0$
- [ ] En $x = 1$
- [x] En $x = -1$ (minimum valant $-1/e$)
- [ ] Nulle part, $f$ est toujours croissante

> $f'(x) = (x+1)e^x$ ; comme $e^x > 0$, le signe de $f'$ est celui de $x+1$. $f$ décroît sur $]-\infty\,;\,-1[$ puis croît sur $]-1\,;\,+\infty[$ : minimum local en $x = -1$, avec $f(-1) = -e^{-1} = -\dfrac{1}{e}$.
