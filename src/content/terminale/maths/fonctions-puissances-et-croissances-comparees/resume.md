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

## L'essentiel du chapitre

:::formule Exponentielle de base $a$ ($a > 0$, $a \neq 1$)
$$
a^x \times a^y = a^{x+y}, \qquad
\frac{a^x}{a^y} = a^{x-y}, \qquad
\big(a^x\big)^y = a^{xy}, \qquad
a^0 = 1, \qquad a^x > 0
$$

- $a > 1$ : $a^x$ strictement **croissante**, $\lim\limits_{x \to -\infty} a^x = 0$, $\lim\limits_{x \to +\infty} a^x = +\infty$.
- $0 < a < 1$ : strictement **décroissante**, limites inversées.

Asymptote : $y = 0$ ; passage par $(0\,;\,1)$.
:::

:::formule Logarithme de base $a$ ($\ln_a x = y \iff a^y = x$)
$$
\ln_a(xy) = \ln_a x + \ln_a y, \qquad
\ln_a\!\frac{x}{y} = \ln_a x - \ln_a y, \qquad
\ln_a(x^k) = k \ln_a x
$$

$$
\ln_a a = 1, \qquad \ln_a 1 = 0, \qquad a^{\ln_a x} = x
$$

Domaine : $]0\,;\,+\infty[$ ; asymptote verticale $x = 0$ ; sens de variation **identique** à celui de $a^x$.
:::

:::formule Changement de base
$$
\ln_a x = \frac{\ln x}{\ln a} = \frac{\log x}{\log a}
$$

Exemple : $\log_2 8 = \dfrac{\ln 8}{\ln 2} = 3$.
:::

:::formule Croissances comparées ($x \to +\infty$)
$$
\ln x \;\ll\; x^{\alpha} \;\ll\; a^x \qquad (\alpha > 0,\; a > 1)
$$

$$
\lim_{x \to +\infty} \frac{\ln x}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} x^{\alpha} e^{-x} = 0, \qquad
\lim_{x \to 0^+} x^{\alpha} \ln x = 0
$$
:::

:::formule Équations typiques
$$
a^{u(x)} = a^{v(x)} \iff u(x) = v(x), \qquad
a^{u(x)} = k > 0 \iff u(x) = \log_a k = \frac{\ln k}{\ln a}
$$

$$
\ln_a x = k \iff x = a^k
$$
:::

## Méthode express

1. **Simplifier $a^x$** : addition au produit, soustraction au quotient, multiplication au passage d'une puissance d'une puissance ; passer à la base $e$ avec $a^x = e^{x \ln a}$ si besoin.
2. **Comparer deux exponentielles** : même base → comparer les exposants ; bases différentes → passer à une puissance commune ($2^{30}$ vs $3^{20}$ : $8^{10}$ vs $9^{10}$).
3. **Résoudre $a^{u(x)} = k$** : si $k \leq 0$, pas de solution ; sinon égaler les exposants quand c'est possible, sinon $u(x) = \log_a k$.
4. **Calculer $\log_a x$** : $\dfrac{\ln x}{\ln a}$, puis simplifier (ex. $\log_2 8 = 3$).
5. **Limite « impossible »** : appliquer les croissances comparées — l'exponentielle bat la puissance, qui bat le logarithme.
6. **Équation $f(x) = g(x)$** : poser $h = f - g$, montrer que $h$ est monotone, chercher un changement de signe sur un intervalle, appliquer le TVI → existence + unicité.

:::erreur Les erreurs qui coûtent des points
1. Oublier la condition $a > 0$ et $a \neq 1$ pour définir $a^x$ et $\ln_a x$.
2. Inverser les sens de variation pour $0 < a < 1$ (cas $a = \dfrac{1}{3}$ !).
3. Écrire $\ln(xy) = \ln x \times \ln y$ ou $\ln(x+y) = \ln x + \ln y$.
4. Appliquer les croissances comparées avec une base $0 < a < 1$ sans la ramener à une base $> 1$ : par exemple $\dfrac{x}{(1/2)^x} \to +\infty$ (et non $0$) car $(1/2)^x \to 0$.
5. Affirmer une inégalité du type $e^x > x^2$ **pour tout $x$** : elle n'est vraie qu'à partir d'une certaine valeur.
:::

## Vocabulaire

- **Base $a$** : réel $a > 0$, $a \neq 1$, servant de base à $a^x$ et $\ln_a x$.
- **Exponentielle de base $a$** : la fonction $x \mapsto a^x$, strictement monotone, bijective de $\mathbb{R}$ sur $]0\,;\,+\infty[$.
- **Logarithme de base $a$** : $\ln_a x$ tel que $a^{\ln_a x} = x$.
- **Logarithme népérien** : $\ln = \ln_e$ avec $e \approx 2{,}718$.
- **Changement de base** : $\ln_a x = \dfrac{\ln x}{\ln a}$.
- **Croissances comparées** : classement des vitesses de croissance à l'infini : $\ln x \ll x^{\alpha} \ll a^x$.
- **Encadrement** : placer une valeur entre deux bornes calculables.
