---
titre: Résoudre des équations différentielles simples
difficulte: 1
type: entrainement
indices:
  - Repère l'ordre de l'équation et si le second membre est nul.
  - Pour le premier ordre, utilise y = K e^{-ax} si l'homogène est à coefficients constants.
  - Pour le second ordre, écris l'équation caractéristique et calcule Δ avant de choisir la forme de la solution.
---

## Énoncé

Résoudre chaque équation différentielle suivante, puis vérifier la solution trouvée.

1. $y' - 4y = 0$, avec la condition initiale $y(0) = 2$.

2. $y'' - 9y = 0$ (équation homogène du second ordre).

3. $y'' + 2y' + y = 0$.

4. $y'' + 4y = 0$, avec les conditions $y(0) = 1$ et $y'(0) = 0$.

5. $y' + y = 4$ (second membre constant non nul).

## Solution

**1. $y' - 4y = 0$, $y(0) = 2$.**

L'équation s'écrit $y' = 4y$, qui est homogène du premier ordre à coefficients constants avec $a = -4$. Solution générale :

$$
y(x) = K\, e^{4x}.
$$

Condition initiale : $y(0) = K e^{0} = K = 2$, donc

$$
y(x) = 2 e^{4x}.
$$

**Vérification :** $y'(x) = 8 e^{4x}$ et $4y(x) = 8 e^{4x}$ : l'équation est vérifiée, et $y(0) = 2$ ✓.

**2. $y'' - 9y = 0$.**

Équation caractéristique :

$$
r^2 - 9 = 0 \iff (r - 3)(r + 3) = 0 \iff r_1 = 3,\; r_2 = -3 .
$$

Le discriminant vaut $\Delta = 0 - 4 \times (-9) = 36 > 0$ : deux racines réelles distinctes. Solution générale :

$$
y(x) = \alpha e^{3x} + \beta e^{-3x}.
$$

**Vérification :** $y'' = 9\alpha e^{3x} + 9\beta e^{-3x} = 9y$ donc $y'' - 9y = 0$ ✓.

**3. $y'' + 2y' + y = 0$.**

Équation caractéristique :

$$
r^2 + 2r + 1 = (r + 1)^2 = 0 \iff r = -1 \text{ (racine double)}.
$$

$\Delta = 4 - 4 = 0$ : on utilise la forme avec le facteur $x$ :

$$
y(x) = (\alpha + \beta x)\, e^{-x}.
$$

**Vérification :** $y' = (\beta - \alpha - \beta x) e^{-x}$, $y'' = (\alpha - 2\beta + \beta x) e^{-x}$, donc

$$
y'' + 2y' + y = \big[(\alpha - 2\beta + \beta x) + 2(\beta - \alpha - \beta x) + (\alpha + \beta x)\big] e^{-x} = 0 \cdot e^{-x} = 0 \;\checkmark
$$

**4. $y'' + 4y = 0$, $y(0) = 1$, $y'(0) = 0$.**

Équation caractéristique : $r^2 + 4 = 0$, donc $r^2 = -4$ et $r = \pm 2i$.

$\Delta = 0 - 16 = -16 < 0$ : racines complexes $r = 0 \pm 2i$, soit $\mu = 0$ et $\omega = 2$. Solution générale :

$$
y(x) = \alpha \cos 2x + \beta \sin 2x .
$$

Dérivée : $y'(x) = -2\alpha \sin 2x + 2\beta \cos 2x$.

Conditions initiales :

- $y(0) = \alpha \times 1 + \beta \times 0 = \alpha = 1$ ;
- $y'(0) = -2\alpha \times 0 + 2\beta \times 1 = 2\beta = 0$, donc $\beta = 0$.

$$
y(x) = \cos 2x .
$$

**Vérification :** $y'' = -4\cos 2x = -4y$, donc $y'' + 4y = 0$ ✓, et $y(0) = 1$, $y'(0) = -2\sin 0 = 0$ ✓.

**5. $y' + y = 4$.**

C'est une équation du premier ordre **non homogène** à coefficients constants : $a = 1$ et $b = 4$.

- Solution de l'homogène ($y' + y = 0$) : $y_h = K e^{-x}$.
- Solution particulière : on cherche un **constant** $y_p = c$ ; en substituant : $0 + c = 4$, donc $c = 4$.

Solution générale :

$$
y(x) = K e^{-x} + 4 .
$$

**Vérification :** $y' = -K e^{-x}$, donc $y' + y = -Ke^{-x} + Ke^{-x} + 4 = 4$ ✓.

:::remarque Réflexe
Commence toujours par identifier l'**ordre** et le **second membre** : c'est cela qui décide de la méthode (homogène du premier ordre, caractéristique du second ordre, ou homogène + particulière avec second membre).
:::
