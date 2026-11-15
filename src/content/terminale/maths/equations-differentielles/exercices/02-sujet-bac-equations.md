---
titre: Sujet type BAC — Équations différentielles du second ordre
difficulte: 3
type: bac
annee: 2023
indices:
  - Écris l'équation caractéristique r² - 4r + 3 = 0 et calcule Δ avant toute chose.
  - Applique les deux conditions initiales après avoir écrit la solution générale complète.
  - Pour y'' - 4y' + 3y = 6, cherche une solution particulière constante c telle que 3c = 6.
  - Pour la dernière équation du premier ordre, utilise la forme K e^{-x} + y_p avec y_p = c e^{2x}.
---

## Énoncé

On considère l'équation différentielle

$$
(\mathcal{E}_1) \qquad y'' - 4y' + 3y = 0 .
$$

**Partie A — Équation homogène**

1. Écrire l'équation caractéristique associée à $(\mathcal{E}_1)$ et déterminer ses racines.
2. En déduire la solution générale $y_h$ de $(\mathcal{E}_1)$.
3. Déterminer la solution de $(\mathcal{E}_1)$ qui vérifie $y(0) = 1$ et $y'(0) = 0$.

**Partie B — Second membre constant**

4. On considère maintenant

$$
(\mathcal{E}_2) \qquad y'' - 4y' + 3y = 6 .
$$

Chercher une solution particulière de $(\mathcal{E}_2)$ sous la forme d'une constante.
5. Donner la solution générale de $(\mathcal{E}_2)$, puis la solution vérifiant $y(0) = 3$ et $y'(0) = 6$.

**Partie C — Équation du premier ordre**

6. Résoudre sur $\mathbb{R}$ l'équation différentielle

$$
(\mathcal{E}_3) \qquad y' + y = 3 e^{2x},
$$

puis déterminer la solution vérifiant $y(0) = 0$.

## Solution

**Partie A**

**1.** L'équation caractéristique de $y'' - 4y' + 3y = 0$ s'obtient en remplaçant $y''$ par $r^2$, $y'$ par $r$ et $y$ par $1$ :

$$
r^2 - 4r + 3 = 0 .
$$

Discriminant : $\Delta = 16 - 12 = 4 > 0$, donc

$$
r = \frac{4 \pm \sqrt{4}}{2} = \frac{4 \pm 2}{2}, \qquad r_1 = 1 \;\text{et}\; r_2 = 3 .
$$

**2.** Les racines sont réelles et distinctes ($\Delta > 0$) : la solution générale de $(\mathcal{E}_1)$ est

$$
y_h(x) = \alpha e^{x} + \beta e^{3x}.
$$

**3.** Condition initiale en $0$ : $y_h(0) = \alpha + \beta = 1$.

Dérivée : $y_h'(x) = \alpha e^{x} + 3\beta e^{3x}$, donc $y_h'(0) = \alpha + 3\beta = 0$.

Système :

$$
\begin{cases}
\alpha + \beta = 1 \\
\alpha + 3\beta = 0
\end{cases}
\;\Longrightarrow\; \text{soustraction : } 2\beta = -1, \text{ donc } \beta = -\frac{1}{2} \text{ et } \alpha = \frac{3}{2}.
$$

$$
y(x) = \frac{3}{2}\, e^{x} - \frac{1}{2}\, e^{3x}.
$$

**Vérification :** $y(0) = \dfrac{3}{2} - \dfrac{1}{2} = 1$ ✓ et $y'(0) = \dfrac{3}{2} - \dfrac{3}{2} = 0$ ✓.

**Partie B**

**4.** On cherche une solution **constante** $y_p = c$ : alors $y_p' = 0$ et $y_p'' = 0$, donc en substituant dans $(\mathcal{E}_2)$ :

$$
0 - 0 + 3c = 6 \iff c = 2 .
$$

Une solution particulière est $y_p(x) = 2$.

**5.** Solution générale de $(\mathcal{E}_2)$ : homogène + particulière,

$$
y(x) = \alpha e^{x} + \beta e^{3x} + 2 .
$$

Conditions : $y(0) = \alpha + \beta + 2 = 3$, soit $\alpha + \beta = 1$.

Dérivée : $y'(x) = \alpha e^{x} + 3\beta e^{3x}$, donc $y'(0) = \alpha + 3\beta = 6$.

Système : $\alpha + \beta = 1$ et $\alpha + 3\beta = 6$. Par soustraction : $2\beta = 5$, donc $\beta = \dfrac{5}{2}$ et $\alpha = 1 - \dfrac{5}{2} = -\dfrac{3}{2}$.

$$
y(x) = -\frac{3}{2}\, e^{x} + \frac{5}{2}\, e^{3x} + 2 .
$$

**Vérification :** $y(0) = -\dfrac{3}{2} + \dfrac{5}{2} + 2 = 1 + 2 = 3$ ✓ ; $y'(0) = -\dfrac{3}{2} + \dfrac{15}{2} = 6$ ✓.

**Partie C**

**6.** $(\mathcal{E}_3)$ est du premier ordre avec second membre : $a = 1$.

- Solution de l'homogène $y' + y = 0$ : $y_h = K e^{-x}$.
- Solution particulière : comme le second membre est $3e^{2x}$ et que $2$ n'est pas racine de $r + 1 = 0$, on cherche $y_p = c e^{2x}$. Alors $y_p' = 2c e^{2x}$ et

$$
2c e^{2x} + c e^{2x} = 3 e^{2x} \iff 3c = 3 \iff c = 1 .
$$

Solution générale :

$$
y(x) = K e^{-x} + e^{2x}.
$$

Condition $y(0) = 0$ : $K + 1 = 0$, donc $K = -1$ :

$$
y(x) = e^{2x} - e^{-x}.
$$

**Vérification :** $y' = 2e^{2x} + e^{-x}$, donc $y' + y = 2e^{2x} + e^{-x} + e^{2x} - e^{-x} = 3e^{2x}$ ✓ et $y(0) = 1 - 1 = 0$ ✓.

:::methode Ce que le correcteur attend
- Équation caractéristique écrite et discriminant calculé avant de conclure sur la forme de la solution.
- Solution générale **complète** (toutes les constantes) avant l'application des conditions initiales.
- Système résolu proprement, solution vérifiée dans l'équation et par rapport aux conditions.
- Partie B : la solution particulière **justifiée** (substitution d'une constante), pas simplement affirmée.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points (1,5 + 1 + 1,5). Partie B : 3 points (1 + 2). Partie C : 3 points (2 + 1). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
