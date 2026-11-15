---
titre: Équations différentielles
accroche: Équations homogènes du premier et du second ordre · Équation caractéristique · Exemples avec second membre
series: S1, S3
ordre: 26
duree: 45
demo: false
statut: publie
objectifs:
  - Équations homogènes du premier et du second ordre
  - Équation caractéristique
  - Exemples avec second membre
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Premier ordre homogène
$$
y' + a(x)\, y = 0 \;\Longrightarrow\; y(x) = K\, e^{-A(x)}, \quad A' = a
$$

Cas constant : $y' + a y = 0 \Rightarrow y = K e^{-ax}$.
:::

:::formule Premier ordre avec second membre constant
$$
y' + a y = b \;(a \neq 0) \;\Longrightarrow\; y(x) = K e^{-ax} + \frac{b}{a}
$$
:::

:::formule Second ordre homogène : équation caractéristique
$$
y'' + a y' + b y = 0 \;\longrightarrow\; r^2 + a r + b = 0
$$

| $\Delta$ | Solution générale |
| --- | --- |
| $\Delta > 0$ : $r_1 \neq r_2$ | $y = \alpha e^{r_1 x} + \beta e^{r_2 x}$ |
| $\Delta = 0$ : $r$ double | $y = (\alpha + \beta x) e^{rx}$ |
| $\Delta < 0$ : $r = \mu \pm i\omega$ | $y = e^{\mu x}(\alpha \cos \omega x + \beta \sin \omega x)$ |
:::

:::formule Second ordre avec second membre
$$
y'' + a y' + b y = f(x) \;\Longrightarrow\; y = y_h + y_p
$$

- $f(x) = k$ et $b \neq 0$ : $y_p = \dfrac{k}{b}$ (constante).
- $f(x) = k e^{\lambda x}$, $\lambda$ pas racine : $y_p = c e^{\lambda x}$ avec $c = \dfrac{k}{\lambda^2 + a\lambda + b}$.
:::

:::formule Conditions initiales
Pour une équation d'ordre $n$ : $n$ constantes, $n$ conditions initiales ($y(x_0)$, $y'(x_0)$…). Exemple : $y(0)$ et $y'(0)$ pour l'ordre $2$.
:::

## Méthode express

1. **Classer l'équation** : ordre ? homogène (second membre nul) ou non ? coefficients constants ?
2. **Premier ordre homogène** : écrire $y = K e^{-A(x)}$ (ou séparer les variables $\dfrac{dy}{y} = a(x)dx$).
3. **Second ordre homogène** : écrire l'équation caractéristique, calculer $\Delta$, choisir le bon tableau, écrire $y_h$ avec $\alpha, \beta$.
4. **Second membre non nul** : ajouter une solution particulière $y_p$ (constante si $f$ constant ; $ce^{\lambda x}$ si $f$ exponentiel), puis $y = y_h + y_p$.
5. **Conditions initiales** : dériver si besoin, remplacer, résoudre le système (autant d'équations que de constantes).
6. **Vérifier** : dériver la solution trouvée et la substituer dans l'équation.

:::erreur Les erreurs qui coûtent des points
1. Oublier le facteur $\beta x$ dans le cas de racine double.
2. Confondre $\mu$ (partie réelle → $e^{\mu x}$) et $\omega$ (partie imaginaire → $\cos \omega x$, $\sin \omega x$).
3. Prendre pour solution générale la seule solution de l'homogène alors que le second membre est non nul.
4. Ne pas donner **autant de constantes que l'ordre** de l'équation.
5. Appliquer les conditions initiales avant d'avoir écrit la solution générale complète.
6. Oublier de vérifier la solution dans l'équation (point souvent demandé).
:::

## Vocabulaire

- **Équation différentielle** : relation entre une fonction inconnue et ses dérivées.
- **Ordre** : rang de la dérivée de plus haut ordre.
- **Homogène** : second membre égal à zéro.
- **Solution générale** : ensemble des solutions avec autant de constantes que l'ordre.
- **Solution particulière** : une solution sans constante arbitraire (souvent utilisée pour le second membre).
- **Équation caractéristique** : $r^2 + ar + b = 0$ associée à $y'' + ay' + by = 0$.
- **Discriminant** : $\Delta = a^2 - 4b$ ; il détermine le type des racines et la forme de la solution.
- **Condition initiale** : valeur imposée à $y$ (et à ses dérivées) en un point, qui fixe les constantes.
