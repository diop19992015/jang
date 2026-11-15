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

:::remarque À quoi ça sert au BAC ?
L'équation différentielle est le seul chapitre où l'on **construit** une fonction à partir d'une relation entre elle et sa dérivée. Elle apparaît dans les sujets de physique (chute libre, radioactivité, circuit RC), dans les questions de suites ($u_{n+1} = \alpha u_n + \beta$ vient d'une équation du premier ordre) et dans les études de fonctions où l'on doit résoudre $y' = ky$.
:::

## Vocabulaire et définitions

:::definition Équation différentielle
Une **équation différentielle** est une équation faisant apparaître une fonction inconnue $y$ et ses dérivées $y'$, $y''$, … :

- son **ordre** est celui de la dérivée de plus haut rang ;
- une **solution** est une fonction vérifiant l'équation sur un intervalle ;
- l'ensemble des solutions est la **solution générale**, qui contient autant de constantes que l'ordre ;
- une **condition initiale** ($y(x_0) = y_0$) fixe ces constantes : on obtient la **solution particulière**.
:::

:::exemple Lire une équation
- $y' + 3y = 0$ : ordre $1$, homogène (second membre nul).
- $y'' - 4y' + 4y = e^x$ : ordre $2$, **non homogène** (second membre $e^x \neq 0$).
- $y'' + y = 0$ : ordre $2$, homogène.
:::

:::erreur Attention
Le mot « homogène » signifie ici **second membre nul**. Une équation du second ordre peut aussi être dite « à coefficients constants » : ce sont deux propriétés différentes qu'on cite souvent ensemble.
:::

## Équations du premier ordre

### Équations à variables séparables

:::formule Cas $y' = f(x)\, g(y)$
Si l'équation s'écrit $y' = f(x) g(y)$, on **sépare les variables** :

$$
\frac{y'}{g(y)} = f(x), \qquad \text{puis intégrer :} \qquad \int \frac{dy}{g(y)} = \int f(x)\, dx.
$$
:::

:::formule Cas $y' + a(x)\, y = 0$ (homogène du premier ordre)
Toutes les solutions sont

$$
y(x) = K\, e^{-A(x)}, \qquad \text{avec } A'(x) = a(x) \text{ (une primitive de } a).
$$

Cas à coefficients constants : $y' + a y = 0$ donne $y(x) = K\, e^{-ax}$.
:::

:::exemple Résolution complète
Résoudre $y' - 2y = 0$.

Méthode 1 (séparation) : $y' = 2y$ donc $\dfrac{dy}{y} = 2\,dx$, d'où $\ln|y| = 2x + c$, soit $y = K e^{2x}$ avec $K = \pm e^{c}$.

Méthode 2 (forme canonique) : $a = -2$, donc $y = K\, e^{2x}$.

**Condition initiale** $y(0) = 3$ : $K e^0 = 3$ donc $K = 3$ et $y(x) = 3 e^{2x}$.
:::

:::remarque Vérification systématique
Une fois $y$ trouvée, **dérivez-la** et remplacez dans l'équation : c'est un point que le correcteur attend souvent. $y = 3e^{2x} \Rightarrow y' = 6e^{2x} = 2y$ ✓.
:::

### Équations du premier ordre avec second membre constant

:::formule Cas $y' + a y = b$ ($a \neq 0$, $b$ constante)
La solution générale s'écrit

$$
y(x) = y_h(x) + y_p, \qquad \text{avec } y_h = K e^{-ax} \text{ et } y_p = \frac{b}{a}.
$$

Autrement dit : **solution de l'homogène + solution particulière constante** $y_p$ (on cherche $y$ constant : $a y = b$).
:::

:::exemple Résoudre $y' + 2y = 6$
- Homogène : $y_h = K e^{-2x}$.
- Particulière constante : poser $y = c$ dans l'équation : $0 + 2c = 6$, donc $c = 3$.
- Solution générale : $y(x) = K e^{-2x} + 3$.
- Avec $y(0) = 1$ : $K + 3 = 1$, donc $K = -2$ et $y(x) = 3 - 2 e^{-2x}$.
:::

## Équations du second ordre homogènes à coefficients constants

:::formule Forme et équation caractéristique
$$
y'' + a y' + b y = 0, \qquad a, b \in \mathbb{R}
$$

On associe l'**équation caractéristique** :

$$
r^2 + a r + b = 0 .
$$

Ses deux racines $r_1$ et $r_2$ (réelles ou complexes) donnent les solutions.
:::

:::formule Les trois cas
| Discriminant $\Delta = a^2 - 4b$ | Racines | Solution générale |
| --- | --- | --- |
| $\Delta > 0$ | $r_1 \neq r_2$ réelles | $y(x) = \alpha e^{r_1 x} + \beta e^{r_2 x}$ |
| $\Delta = 0$ | $r_1 = r_2 = r$ | $y(x) = (\alpha + \beta x)\, e^{r x}$ |
| $\Delta < 0$ | $r = \mu \pm i\omega$ | $y(x) = e^{\mu x}(\alpha \cos \omega x + \beta \sin \omega x)$ |

$\alpha$ et $\beta$ sont deux constantes réelles déterminées par les conditions initiales.
:::

:::exemple Cas $\Delta > 0$
$y'' - 5y' + 6y = 0$ : équation caractéristique $r^2 - 5r + 6 = (r-2)(r-3) = 0$, donc $r_1 = 2$ et $r_2 = 3$.

$$
y(x) = \alpha e^{2x} + \beta e^{3x}.
$$

Avec $y(0) = 1$ et $y'(0) = 0$ : $\alpha + \beta = 1$ et $2\alpha + 3\beta = 0$, d'où $\beta = -2$ et $\alpha = 3$, soit $y(x) = 3e^{2x} - 2e^{3x}$.
:::

:::exemple Cas $\Delta = 0$
$y'' + 4y' + 4y = 0$ : $r^2 + 4r + 4 = (r+2)^2 = 0$, racine double $r = -2$.

$$
y(x) = (\alpha + \beta x)\, e^{-2x}.
$$

Ne pas écrire $\alpha e^{-2x} + \beta e^{-2x} = (\alpha+\beta)e^{-2x}$ : ce ne serait qu'**une** constante, la solution ne serait pas générale.
:::

:::exemple Cas $\Delta < 0$ (racines complexes)
$y'' + y = 0$ : $r^2 + 1 = 0$ donc $r = \pm i$ (soit $\mu = 0$, $\omega = 1$).

$$
y(x) = \alpha \cos x + \beta \sin x .
$$

Cas $y'' - 2y' + 5y = 0$ : $r^2 - 2r + 5 = 0$ a pour racines $r = \dfrac{2 \pm \sqrt{4-20}}{2} = 1 \pm 2i$, donc

$$
y(x) = e^{x}\big(\alpha \cos 2x + \beta \sin 2x\big).
$$
:::

:::piege Les deux pièges du second ordre
1. Oublier la racine **double** : le facteur $x$ (ou $\beta x$) est obligatoire.
2. Identifier mal $\mu$ et $\omega$ : dans $r = 1 \pm 2i$, la partie réelle $1$ donne $e^{x}$, la partie imaginaire $2$ donne $\cos 2x$ et $\sin 2x$.
:::

## Équations avec second membre (exemples)

:::formule Méthode : homogène + particulière
Pour $y'' + a y' + b y = f(x)$, la solution générale est

$$
y(x) = \underbrace{\alpha e^{r_1 x} + \beta e^{r_2 x}}_{\text{solution de l'homogène}} + \underbrace{y_p(x)}_{\text{une solution particulière}} .
$$

Deux cas fréquents au BAC :
- $f(x) = k$ (constante) : on cherche $y_p = c$ constant, d'où $b c = k$, soit $c = \dfrac{k}{b}$ (si $b \neq 0$).
- $f(x) = k e^{\lambda x}$ avec $\lambda$ **pas racine** de l'équation caractéristique : on cherche $y_p = c e^{\lambda x}$, d'où $c = \dfrac{k}{\lambda^2 + a\lambda + b}$.
:::

:::exemple Avec second membre constant
Résoudre $y'' - 3y' + 2y = 6$.

1. **Homogène** : $r^2 - 3r + 2 = (r-1)(r-2) = 0$, donc $y_h = \alpha e^{x} + \beta e^{2x}$.
2. **Particulière** : $y_p = c$ constant : $0 - 0 + 2c = 6$, donc $c = 3$.
3. Solution générale :

$$
y(x) = \alpha e^{x} + \beta e^{2x} + 3 .
$$

Vérification : $y'' - 3y' + 2y = (\alpha e^x + 4\beta e^{2x}) - 3(\alpha e^x + 2\beta e^{2x}) + 2(\alpha e^x + \beta e^{2x} + 3) = 6$ ✓.
:::

:::exemple Avec second membre exponentiel
Résoudre $y' + y = 5 e^{2x}$.

- Homogène : $y_h = K e^{-x}$.
- Particulière : $y_p = c e^{2x}$ ($2$ n'est pas racine de $r + 1 = 0$) : $2c e^{2x} + c e^{2x} = 5 e^{2x}$, donc $3c = 5$ et $c = \dfrac{5}{3}$.

$$
y(x) = K e^{-x} + \frac{5}{3} e^{2x}.
$$
:::

:::erreur Second membre traité à la va-vite
On n'ajoute **jamais** le second membre dans l'expression de l'homogène : $y_h$ est la solution de l'équation **sans** second membre. Il faut construire séparément une solution particulière $y_p$, puis écrire $y = y_h + y_p$.
:::

## Conditions initiales et détermination des constantes

:::methode Protocole complet
1. Identifier l'ordre et le second membre (homogène ou non).
2. Résoudre l'homogène (équation caractéristique pour le second ordre).
3. Construire une solution particulière si le second membre n'est pas nul.
4. Écrire la solution générale avec toutes les constantes.
5. Appliquer les conditions initiales : autant d'équations que de constantes.
6. **Vérifier** la solution dans l'équation.
:::

:::exemple Condition initiale au second ordre
$y'' + y = 0$, $y(0) = 1$, $y'(0) = 0$.

Solution générale : $y = \alpha \cos x + \beta \sin x$, donc $y' = -\alpha \sin x + \beta \cos x$.

- $y(0) = \alpha = 1$ ;
- $y'(0) = \beta = 0$.

Donc $y(x) = \cos x$.
:::

## Ce qu'il faut retenir

- Ordre, solution générale ($=$ autant de constantes que d'ordre), solution particulière : donner la **forme complète** avant d'appliquer les conditions initiales.
- Premier ordre homogène : $y' + a(x) y = 0 \Rightarrow y = K e^{-A(x)}$ ; avec second membre constant : $y = K e^{-ax} + \dfrac{b}{a}$.
- Second ordre homogène à coefficients constants : équation caractéristique $r^2 + ar + b = 0$ et les **trois cas** ($\Delta > 0$, $\Delta = 0$ avec facteur $x$, $\Delta < 0$ avec $e^{\mu x}(\alpha \cos \omega x + \beta \sin \omega x)$).
- Avec second membre : solution générale = homogène + **solution particulière** (constante ou exponentielle).
- Toujours vérifier la solution et justifier chaque étape (racines, conditions initiales).
