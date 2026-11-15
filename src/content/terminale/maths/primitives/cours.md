---
titre: Primitives
accroche: Programme officiel — Analyse.
series: S2, S4, S5
ordre: 33
duree: 45
demo: false
statut: publie
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
La primitive d'une fonction est l'outil qui permet de « dériver à l'envers » : calculer des aires avec le calcul intégral, résoudre des équations différentielles simples, passer d'une vitesse à une position, et obtenir des inégalités par encadrement. C'est un chapitre à points **faciles** : les formules se mémorisent et la vérification par dérivée garantit le point.
:::

## Définition d'une primitive

:::definition Primitive
Soit $f$ une fonction définie sur un intervalle $I$. Une **primitive** de $f$ sur $I$ est toute fonction $F$ dérivable sur $I$ telle que :

$$
\forall x \in I: \quad F'(x) = f(x).
$$
:::

:::formule Existence et unicité à une constante près
Si $f$ est continue sur $I$, elle admet au moins une primitive. Deux primitives de $f$ sur $I$ diffèrent par une **constante** : si $F$ et $G$ sont deux primitives, alors $G = F + K$ avec $K \in \mathbb{R}$.

On note $\displaystyle\int f(x)\, dx$ l'ensemble des primitives de $f$ :

$$
\int f(x)\, dx = F(x) + K, \qquad K \in \mathbb{R}.
$$
:::

:::exemple Retrouver une primitive
$f(x) = 2x$ : dérivant $x \mapsto x^2$ on obtient $2x$, donc $\displaystyle\int 2x\, dx = x^2 + K$.

Vérification : $(x^2 + K)' = 2x$ ✓. Avec la condition $F(0) = 3$ : $K = 3$ et $F(x) = x^2 + 3$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier la **constante** $K$ : « $\displaystyle\int 2x\, dx = x^2$ » est incomplet (il manque $+ K$).
2. Ne pas **vérifier** en dérivant : la vérification vaut un point au correcteur.
3. Confondre $f$ et sa primitive $F$ dans une condition initiale ($F(0) = 3$ porte sur la primitive, pas sur $f$).
:::

## Tableau des primitives usuelles

:::formule Primitives de base
Pour $x > 0$ (sauf mention contraire) :

| $f(x)$ | $F(x)$ (une primitive) |
| --- | --- |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac{1}{x}$ | $\ln\|x\|$ |
| $e^x$ | $e^x$ |
| $e^{kx}$ | $\dfrac{1}{k} e^{kx}$ |
| $\sin x$ | $-\cos x$ |
| $\cos x$ | $\sin x$ |
| $\dfrac{1}{1+x^2}$ | $\arctan x$ (ou $\tan^{-1} x$) |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x$ (ou $\sin^{-1} x$) |
:::

:::formule Propriétés algébriques des primitives
Si $F$ est une primitive de $f$ et $G$ une primitive de $g$ sur $I$ :

$$
\int \big(\lambda f + \mu g\big)(x)\, dx = \lambda \int f(x)\, dx + \mu \int g(x)\, dx
$$

- $(\lambda f)$ : on met le facteur $\lambda$ **en facteur** ;
- $f \pm g$ : la primitive d'une somme est la somme des primitives ;
- constante multiplicative : $\displaystyle\int c\, dx = c x + K$.
:::

:::formule Primitives composées (règle de la chaîne à l'envers)
$$
\int f\big(u(x)\big)\, u'(x)\, dx = F\big(u(x)\big) + K
$$

où $F$ est une primitive de $f$.

Cas particuliers :

$$
\int u^n u'\, dx = \frac{u^{n+1}}{n+1} + K \ (n \neq -1), \qquad
\int \frac{u'}{u}\, dx = \ln|u| + K, \qquad
\int e^u u'\, dx = e^u + K
$$
:::

:::exemple Trois calculs types
- $\displaystyle\int 3x^2\, dx = x^3 + K$ (car $(x^3)' = 3x^2$).
- $\displaystyle\int \frac{2x}{1+x^2}\, dx = \ln|1+x^2| + K = \ln(1+x^2) + K$ (le dénominateur est positif).
- $\display\int x e^{x^2}\, dx = \frac{1}{2} e^{x^2} + K$ (on pose $u = x^2$, $u' = 2x$, il manque un facteur $\dfrac{1}{2}$).
:::

:::piege Les deux pièges classiques
1. $\displaystyle\int \dfrac{1}{x}\, dx = \ln|x| + K$ (valeur absolue obligatoire si le domaine peut contenir des négatifs).
2. Dans $\displaystyle\int e^{kx}\, dx$, ne pas oublier le facteur $\dfrac{1}{k}$ : la dérivée de $e^{kx}$ est $k e^{kx}$.
:::

## Détermination d'une primitive particulière

:::methode Résoudre $F'(x) = f(x)$ avec une condition
1. Calculer la **générale** : $\displaystyle\int f(x)\, dx = F_0(x) + K$.
2. Injecter la condition $F(a) = b$ : $F_0(a) + K = b$, d'où $K = b - F_0(a)$.
3. Écrire la réponse complète et la **vérifier** en dérivant.
:::

:::exemple Condition initiale
Déterminer $F$ telle que $F'(x) = 3x^2 + 2$ et $F(1) = 4$.

Générale : $F(x) = x^3 + 2x + K$.

Condition : $F(1) = 1 + 2 + K = 4$, donc $K = 1$.

$$
F(x) = x^3 + 2x + 1.
$$

Vérification : $F'(x) = 3x^2 + 2$ ✓ et $F(1) = 4$ ✓.
:::

## Utilisation : encadrement et aire

:::methode Encadrer une aire par les primitives
Si $f \geq 0$ sur $[a\,;\,b]$ et $F$ est une primitive de $f$, l'aire sous la courbe vaut $F(b) - F(a)$ (calcul intégral). Pour **encadrer sans calcul exact** :

1. Trouver des constantes $m$ et $M$ telles que $m \leq f(x) \leq M$ sur $[a\,;\,b]$ ;
2. Multiplier par la longueur $b - a$ :

$$
m(b-a) \leq \int_a^b f(x)\, dx \leq M(b-a).
$$
:::

:::exemple Encadrer une aire
Sur $[0\,;\,1]$ : $0 \leq x^2 \leq x$ (car $x \in [0\,;\,1]$ implique $x^2 \leq x$), donc

$$
\int_0^1 x^2\, dx \leq \int_0^1 x\, dx, \qquad \text{c'est-à-dire} \qquad \frac{1}{3} \leq \frac{1}{2}.
$$

C'est cohérent. Autre exemple : sur $[0\,;\,1]$, $1 \leq e^x \leq e$, donc $1 \leq \int_0^1 e^x\, dx = e - 1 \leq e$ ✓ ($e - 1 \approx 1{,}72$).
:::

:::erreur Attention au sens de l'inégalité
Multiplier une inégalité par $b - a > 0$ **conserve** le sens. En revanche, si $f \leq 0$, l'aire « signée » $\int_a^b f$ est négative : bien préciser ce que l'on calcule (aire géométrique = valeur absolue).
:::

## Ce qu'il faut retenir

- **Primitive** : $F'(x) = f(x)$ ; l'ensemble des primitives s'écrit $F(x) + K$ ; deux primitives diffèrent d'une constante.
- Primitives usuelles : $\dfrac{x^{n+1}}{n+1}$, $\ln|x|$, $e^x$, $-\cos x$, $\sin x$, $\arctan x$, $\arcsin x$ — plus $\displaystyle\int e^{kx} = \dfrac{e^{kx}}{k}$ et $\displaystyle\int \dfrac{u'}{u} = \ln|u|$.
- **Linéarité** : $\displaystyle\int (\lambda f + \mu g) = \lambda \int f + \mu \int g$.
- **Condition initiale** : fixer $K$ ; toujours vérifier par dérivée.
- **Encadrement** : $m \leq f \leq M$ sur $[a\,;\,b]$ $\Rightarrow$ $m(b-a) \leq \int_a^b f \leq M(b-a)$.
