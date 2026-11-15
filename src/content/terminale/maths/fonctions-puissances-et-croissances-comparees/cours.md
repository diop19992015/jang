---
titre: Fonctions puissances et croissances comparées
accroche: Logarithme et exponentielle de base a
series: S1, S3
ordre: 24
duree: 45
demo: false
statut: publie
objectifs:
  - Logarithme et exponentielle de base a
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Ce chapitre traite deux familles de fonctions qui sortent du lot : l'exponentielle $a^x$ et le logarithme $\ln_a x$ pour une base $a$ quelconque, puis la **croissance comparée** qui permet de comparer $a^x$, $x^n$ et $\ln x$ à l'infini. Ces comparaisons servent à résoudre des limites, à classer des valeurs sans calculatrice et à résoudre des équations de type $a^x = k$ ou $x^2 = \ln x$.
:::

## Exponentielle de base $a$

:::definition Exponentielle de base $a$
Soit $a$ un réel **strictement positif** différent de $1$. La fonction **exponentielle de base $a$** est définie sur $\mathbb{R}$ par $x \mapsto a^x$.

Pour un exposant rationnel : $a^{p/q} = \sqrt[q]{a^p}$ ; pour un exposant réel, on définit $a^x = e^{x \ln a}$.
:::

:::formule Propriétés algébriques
Pour $a > 0$ et tous réels $x$, $y$ :

$$
a^x \times a^y = a^{x+y}, \qquad
\frac{a^x}{a^y} = a^{x-y}, \qquad
\big(a^x\big)^y = a^{xy}, \qquad
a^0 = 1, \qquad
\frac{1}{a^x} = a^{-x}
$$
:::

:::formule Sens de variation
| Base $a$ | Variation | Limite en $-\infty$ | Limite en $+\infty$ |
| --- | --- | --- | --- |
| $a > 1$ | strictement **croissante** | $0$ | $+\infty$ |
| $0 < a < 1$ | strictement **décroissante** | $+\infty$ | $0$ |

Dans les deux cas : $a^x > 0$ pour tout $x$, et la courbe passe par $(0\,;\,1)$ avec pour asymptote la droite $y = 0$.
:::

:::exemple Comparer sans calculatrice
$2^{30}$ et $3^{20}$ : comme $2^3 = 8 < 9 = 3^2$, on a $2^{30} = (2^3)^{10} < (3^2)^{10} = 3^{20}$.

$\left(\dfrac{1}{2}\right)^{-5}$ : base $\dfrac{1}{2} < 1$ et exposant négatif, donc $\left(\dfrac{1}{2}\right)^{-5} = 2^5 = 32$.
:::

:::erreur Erreurs fréquentes
1. Écrire $a^x$ pour $a \leq 0$ : la fonction n'est pas définie (interdit de mettre un négatif à puissance réelle).
2. Calculer $(-2)^{1/2}$ ou dire que $(-8)^{1/3}$ « n'existe pas » : pour un exposant rationnel non entier, on exige $a > 0$.
3. Confondre les sens de variation : $a > 1$ ⟹ croissance, $0 < a < 1$ ⟹ décroissance.
:::

## Logarithme de base $a$

:::definition Logarithme de base $a$
Soit $a > 0$, $a \neq 1$. La fonction $\ln_a$ est la **réciproque** de $x \mapsto a^x$ : elle est définie sur $]0\,;\,+\infty[$ et

$$
\ln_a x = y \iff a^y = x.
$$

Le logarithme **népérien** est le cas particulier $\ln = \ln_e$ avec $e \approx 2{,}718$.
:::

:::formule Propriétés algébriques
Pour $a > 0$, $a \neq 1$, $x > 0$, $y > 0$ :

$$
\ln_a (xy) = \ln_a x + \ln_a y, \qquad
\ln_a\!\left(\frac{x}{y}\right) = \ln_a x - \ln_a y, \qquad
\ln_a (x^k) = k \ln_a x
$$

$$
a^{\ln_a x} = x, \qquad
\ln_a (a^x) = x, \qquad
\ln_a 1 = 0, \qquad
\ln_a a = 1
$$
:::

:::formule Sens de variation et limites
| Base $a$ | Variation sur $]0\,;\,+\infty[$ | Limite en $0^+$ | Limite en $+\infty$ |
| --- | --- | --- | --- |
| $a > 1$ | strictement **croissante** | $-\infty$ | $+\infty$ |
| $0 < a < 1$ | strictement **décroissante** | $+\infty$ | $-\infty$ |

Dans les deux cas : $\ln_a x < 0$ pour $0 < x < 1$ et $\ln_a x > 0$ pour $x > 1$ ; asymptote verticale $x = 0$.
:::

:::formule Passer d'une base à une autre (changement de base)
$$
\ln_a x = \frac{\ln x}{\ln a}, \qquad \text{en particulier} \qquad \ln_a x = \frac{\log x}{\log a}
$$

Exemple : $\log_2 8 = \dfrac{\ln 8}{\ln 2} = \dfrac{3 \ln 2}{\ln 2} = 3$.
:::

:::methode Résoudre $a^{u(x)} = k$
1. Si $k \leq 0$ : aucune solution (car $a^x > 0$).
2. Si $k > 0$ : comme $x \mapsto a^x$ est injective, $a^{u} = a^{v} \iff u = v$ ; si $k$ n'est pas une puissance simple de $a$, écrire $u(x) = \log_a k = \dfrac{\ln k}{\ln a}$.
:::

:::exemple Résolutions typiques
- $2^{3x - 1} = 2^5 \iff 3x - 1 = 5 \iff x = 2$.
- $\left(\dfrac{1}{3}\right)^x = 9 \iff 3^{-x} = 3^2 \iff -x = 2 \iff x = -2$.
- $\log_2 x = 4 \iff x = 2^4 = 16$.
- $\ln x = -1 \iff x = e^{-1} = \dfrac{1}{e}$.
:::

## Croissances comparées

:::formule Théorème des croissances comparées
Quand $x \to +\infty$ :

$$
\ln x \ll x^{\alpha} \ll a^x \qquad (\forall \alpha > 0,\; \forall a > 1)
$$

c'est-à-dire :

$$
\lim_{x \to +\infty} \frac{\ln x}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^x} = 0, \qquad
\lim_{x \to +\infty} \frac{a^x}{x^{\alpha}} = +\infty .
$$

**L'exponentielle l'emporte sur toute puissance, qui l'emporte sur le logarithme.**
:::

:::remarque Cas utiles pour les limites
$$
\lim_{x \to +\infty} \frac{e^x}{x^{10}} = +\infty, \qquad
\lim_{x \to +\infty} \frac{\ln x}{x} = 0, \qquad
\lim_{x \to +\infty} x^2 e^{-x} = 0
$$

$$
\lim_{x \to 0^+} x \ln x = 0, \qquad
\lim_{x \to 0^+} x^{\alpha} \ln x = 0 \;(\forall \alpha > 0)
$$
:::

:::methode Classer des valeurs sans calculatrice
Pour classer $\left(\dfrac{1}{2}\right)^{-3}$, $\ln(e^2)$ et $e^0$ :

1. Calculer ou reconnaître chaque valeur : $\left(\dfrac{1}{2}\right)^{-3} = 2^3 = 8$, $\ln(e^2) = 2$, $e^0 = 1$.
2. Comparer : $1 < 2 < 8$.

Pour classer des valeurs qu'on **ne peut pas** calculer exactement (ex. $\ln 3$, $2^{0{,}1}$, $\sqrt{2}$) :

1. Comparer chacune à $0$ et à $1$ (grâce aux variations et aux valeurs remarquables : $\ln 3 > 0$, $2^{0{,}1} > 1$, $0{,}5^3 < 1$…).
2. Affiner avec les croissances comparées ou des inégalités connues : $\ln 3 < 3$, $2^{0{,}1} < 1{,}1$ car $1{,}1^{10} \approx 2{,}59 > 2$…
3. Ne jamais affirmer un ordre non justifié : mieux vaut donner un encadrement que des « valeurs au doigt mouillé ».
:::

:::piege « Plus vite » ne veut pas dire « plus grand »
Les croissances comparées décrivent un **comportement à l'infini** : $e^x > x^{100}$ finit par être vrai, mais pas pour tous les $x$ (pour $x = 1$, $e \approx 2{,}7 < 1 = 1^{100}$ est faux). Dans un exercice, préciser l'intervalle de validité d'une inégalité.
:::

## Équations mixtes puissance / logarithme

:::methode Résoudre $f(x) = g(x)$ avec $f$ croissante et $g$ décroissante
Si $f$ est strictement croissante et $g$ strictement décroissante sur un intervalle $I$, alors $h = f - g$ est strictement croissante : l'équation $f(x) = g(x)$ admet **au plus une** solution. On cherche alors un intervalle $[a\,;\,b]$ où $h$ change de signe et on applique le **théorème des valeurs intermédiaires**.
:::

:::exemple Équation $x^2 = \ln x$ ? Et $x + \ln x = 2$ ?
- $x^2 = \ln x$ : sur $]0\,;\,+\infty[$, $x^2 \geq 0$ et $\ln x < 0$ pour $x < 1$. Pour $x \geq 1$ : $h(x) = x^2 - \ln x$ a pour dérivée $2x - \dfrac{1}{x} > 0$ sur $]1\,;\,+\infty[$ (car $2x > 2 > \dfrac{1}{x}$), donc $h$ croît et $h(1) = 1 > 0$ : **aucune solution**.
- $x + \ln x = 2$ : poser $h(x) = x + \ln x - 2$, dérivable sur $]0\,;\,+\infty[$ avec $h'(x) = 1 + \dfrac{1}{x} > 0$ : $h$ est strictement croissante. $h(1) = -1 < 0$ et $h(2) = \ln 2 > 0$ : il existe une solution **unique** dans $]1\,;\,2[$ (c'est $x = 1{,}556\ldots$, valeur qu'on approche par un tableau de valeurs).
:::

## Ce qu'il faut retenir

- $a^x$ est définie pour $a > 0$, $a \neq 1$ ; toujours $a^x > 0$, passage par $(0\,;\,1)$, asymptote $y = 0$.
- Variation : $a > 1$ ⟹ $a^x$ croissante et $\ln_a x$ croissante ; $0 < a < 1$ ⟹ toutes deux décroissantes.
- Propriétés du logarithme : produit → somme, quotient → différence, puissance → produit par l'exposant ; $\ln_a a = 1$, $\ln_a 1 = 0$.
- Changement de base : $\ln_a x = \dfrac{\ln x}{\ln a}$.
- **Croissances comparées** : $\ln x \ll x^{\alpha} \ll a^x$ (et $x^{\alpha} e^{-x} \to 0$, $x \ln x \to 0$).
- Résoudre $a^{u} = a^{v} \iff u = v$ ; résoudre $u + \ln u = k$ : monotone + TVI + unicité.
