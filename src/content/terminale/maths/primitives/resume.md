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

## L'essentiel du chapitre

:::formule Définition
$$
F \text{ primitive de } f \text{ sur } I \iff F'(x) = f(x) \ \forall x \in I
$$

Deux primitives diffèrent d'une constante :

$$
\int f(x)\, dx = F(x) + K, \qquad K \in \mathbb{R}
$$
:::

:::formule Primitives usuelles
| $f(x)$ | $\int f(x)\, dx$ |
| --- | --- |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1} + K$ |
| $\dfrac{1}{x}$ | $\ln\|x\| + K$ |
| $e^{kx}$ | $\dfrac{1}{k} e^{kx} + K$ |
| $\sin x$ | $-\cos x + K$ |
| $\cos x$ | $\sin x + K$ |
| $\dfrac{1}{1+x^2}$ | $\arctan x + K$ |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x + K$ |
| $c$ (constante) | $cx + K$ |
:::

:::formule Linéarité
$$
\int \big(\lambda f + \mu g\big)(x)\, dx = \lambda \int f(x)\, dx + \mu \int g(x)\, dx
$$
:::

:::formule Primitives composées
$$
\int u^n u'\, dx = \frac{u^{n+1}}{n+1} + K, \qquad
\int \frac{u'}{u}\, dx = \ln|u| + K, \qquad
\int e^u u'\, dx = e^u + K
$$

Exemple : $\displaystyle\int 2x\, e^{x^2}\, dx = e^{x^2} + K$.
:::

:::formule Encadrement d'une aire
$$
m \leq f(x) \leq M \text{ sur } [a\,;\,b]
\;\Longrightarrow\;
m(b-a) \leq \int_a^b f(x)\, dx \leq M(b-a)
$$
:::

## Méthode express

1. **Reconnaître une primitive** : se demander « quelle fonction, en dérivant, donne $f$ ? », en commencer par les formules du tableau.
2. **Factoriser / identifier $u$** : si $f(x) = g(u(x)) \cdot u'(x)$, la primitive est $G(u(x))$ (règle de la chaîne à l'envers).
3. **Ajouter le facteur manquant** : pour $\displaystyle\int e^{2x}\, dx$, la dérivée de $e^{2x}$ est $2e^{2x}$, donc il manque $\dfrac{1}{2}$.
4. **Condition initiale** : écrire la générale $F_0(x) + K$, injecter la condition, déterminer $K$, réécrire, **vérifier par dérivée**.
5. **Encadrer une aire** : borner $f$ entre deux constantes sur l'intervalle, multiplier par la longueur de l'intervalle.
6. **Comparer deux aires** : si $0 \leq f \leq g$ sur $[a\,;\,b]$, alors $\displaystyle\int_a^b f(x)\, dx \leq \int_a^b g(x)\, dx$.

:::erreur Les erreurs qui coûtent des points
1. Oublier $+ K$ dans la réponse générale.
2. Écrire $\displaystyle\int \dfrac{1}{x}\, dx = \ln x$ sans valeur absolue (faux pour $x < 0$).
3. Oublier le facteur $\dfrac{1}{k}$ devant $e^{kx}$ ou $\dfrac{1}{2}$ devant $u^{n+1}/(n+1)$ quand $u'$ n'est pas exactement présent.
4. Utiliser la condition initiale sur $f$ au lieu de $F$.
5. Ne pas vérifier : dériver la réponse trouvée (gratuit et rassurant).
:::

## Vocabulaire

- **Primitive** : fonction dont la dérivée est $f$ ; notée $\displaystyle\int f(x)\, dx$ (sans $K$ : « une » primitive ; avec $K$ : « les » primitives).
- **Constante d'intégration** $K$ : liberté laissée par la dérivée d'une constante.
- **Condition initiale** : valeur $F(a) = b$ qui fixe $K$.
- **Linéarité** : passage de la primitive d'une combinaison linéaire à la combinaison des primitives.
- **Primitive composée** : reconnaître $u'$ comme facteur de $u^n$, $\dfrac{1}{u}$ ou $e^u$.
- **Calcul intégral** (suite du chapitre) : $\displaystyle\int_a^b f(x)\, dx = F(b) - F(a)$, aire signée sous la courbe.
- **Encadrement** : placer une intégrale entre deux valeurs calculables grâce à des minorantes et majorantes.
