---
titre: Quiz — Équations différentielles
demo: false
---

## Question

Quelle est la solution générale de $y' - 3y = 0$ ?

- [ ] $y = K e^{-3x}$
- [x] $y = K e^{3x}$
- [ ] $y = 3x + K$
- [ ] $y = K \cdot 3^x$

> L'équation s'écrit $y' = 3y$, soit $\dfrac{dy}{y} = 3\,dx$ d'où $\ln|y| = 3x + c$ et $y = K e^{3x}$. On peut aussi reconnaître la forme $y' + ay = 0$ avec $a = -3$ : $y = K e^{-ax} = K e^{3x}$.

## Question

Combien de constantes contient la solution générale d'une équation différentielle du second ordre ?

- [ ] Une seule
- [x] Deux
- [ ] Trois
- [ ] Autant que l'ordre moins un

> L'ordre est $2$ : la solution générale doit contenir **deux** constantes ($\alpha$ et $\beta$), déterminées par deux conditions initiales ($y(x_0)$ et $y'(x_0)$).

## Question

Quelle est la solution générale de $y'' + 4y' + 4y = 0$ ?

- [ ] $y = \alpha e^{2x} + \beta e^{-2x}$
- [x] $y = (\alpha + \beta x) e^{-2x}$
- [ ] $y = \alpha \cos 2x + \beta \sin 2x$
- [ ] $y = (\alpha + \beta x) e^{2x}$

> L'équation caractéristique est $r^2 + 4r + 4 = (r+2)^2 = 0$ : racine **double** $r = -2$. On a alors $y = (\alpha + \beta x) e^{-2x}$ — le facteur $x$ est indispensable.

## Question

Quelle est la solution générale de $y'' + y = 6$ ?

- [ ] $y = \alpha \cos x + \beta \sin x$
- [x] $y = \alpha \cos x + \beta \sin x + 6$
- [ ] $y = \alpha \cos x + \beta \sin x + 3$
- [ ] $y = 6\big(\alpha \cos x + \beta \sin x\big)$

> Homogène : $r^2 + 1 = 0$ donc $y_h = \alpha \cos x + \beta \sin x$. Second membre $6$ : on cherche une solution **constante** $y_p = c$ ; en substituant dans $y'' + y = 6$ : $0 + c = 6$, donc $c = 6$. Solution générale : $y = \alpha \cos x + \beta \sin x + 6$.
