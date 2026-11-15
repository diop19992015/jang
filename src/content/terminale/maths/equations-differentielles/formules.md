## Vocabulaire

:::formule Définitions
- **Ordre** : rang de la dérivée la plus élevée ($y''$ → ordre $2$).
- **Homogène** : second membre nul.
- **Solution générale** : solutions contenant autant de constantes que l'ordre.
- **Condition initiale** : valeur de $y$ (et de ses dérivées) en un point, qui fixe les constantes.
:::

## Premier ordre

:::formule Équation homogène
$$
y' + a(x)\, y = 0 \;\Longrightarrow\; y(x) = K\, e^{-A(x)}
$$

avec $A$ une primitive de $x \mapsto a(x)$.

Cas constant : $y' + a y = 0 \Rightarrow y(x) = K e^{-ax}$.
:::

:::formule Séparation des variables
$$
y' = f(x)\, g(y) \;\Longrightarrow\; \int \frac{dy}{g(y)} = \int f(x)\, dx
$$

Exemple : $y' = ky \Rightarrow \ln|y| = kx + c \Rightarrow y = K e^{kx}$.
:::

:::formule Avec second membre constant
$$
y' + a y = b \;(a \neq 0) \;\Longrightarrow\;
y(x) = K e^{-ax} + \frac{b}{a}
$$
:::

:::remarque Méthode des deux morceaux
Solution générale = solution de l'**homogène** ($K e^{-ax}$) + une **solution particulière** (ici $b/a$, constante qui vérifie l'équation complète). Cette méthode se généralise au second ordre.
:::

## Second ordre homogène

:::formule Équation et caractéristique
$$
y'' + a y' + b y = 0 \quad\longrightarrow\quad r^2 + a r + b = 0, \qquad \Delta = a^2 - 4b
$$
:::

:::formule Trois cas
$$
\Delta > 0:\; r_1 \neq r_2 \;\Rightarrow\; y = \alpha e^{r_1 x} + \beta e^{r_2 x}
$$

$$
\Delta = 0:\; r \text{ double} \;\Rightarrow\; y = (\alpha + \beta x) e^{rx}
$$

$$
\Delta < 0:\; r = \mu \pm i\omega \;\Rightarrow\; y = e^{\mu x}\big(\alpha \cos \omega x + \beta \sin \omega x\big)
$$
:::

:::remarque Racines d'un trinôme du second degré
$$
r = \frac{-a \pm \sqrt{\Delta}}{2}
$$

Pour $r^2 + 1 = 0$ : $r = \pm i$ donc $y = \alpha \cos x + \beta \sin x$.
Pour $r^2 + 4 = 0$ : $r = \pm 2i$ donc $y = \alpha \cos 2x + \beta \sin 2x$.
:::

## Second ordre avec second membre

:::formule Solution générale complète
$$
y(x) = y_h(x) + y_p(x)
$$

| Second membre $f(x)$ | Solution particulière $y_p$ |
| --- | --- |
| $k$ (constante), $b \neq 0$ | $y_p = \dfrac{k}{b}$ |
| $k e^{\lambda x}$, $\lambda$ pas racine | $y_p = c e^{\lambda x}$, $c = \dfrac{k}{\lambda^2 + a\lambda + b}$ |
:::

:::remarque Exemple
$y'' - 3y' + 2y = 6$ : homogène $\alpha e^x + \beta e^{2x}$, particulière $y_p = 3$ (car $2 \times 3 = 6$), donc $y = \alpha e^x + \beta e^{2x} + 3$.
:::

## Conditions initiales

:::formule Détermination des constantes
Ordre $1$ : une condition, une constantes. Ordre $2$ : deux conditions ($y(x_0)$ et $y'(x_0)$), deux constantes.

Exemple : $y = \alpha \cos x + \beta \sin x$ avec $y(0) = 1$, $y'(0) = 0$ donne $\alpha = 1$, $\beta = 0$, donc $y = \cos x$.
:::

:::remarque Protocole
1. Résoudre l'homogène. 2. Ajouter $y_p$ si second membre. 3. Écrire la solution générale complète. 4. Appliquer les conditions. 5. **Vérifier** en dérivant et en substituant.
:::
