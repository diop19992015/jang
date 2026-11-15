---
titre: Fonction exponentielle népérienne
accroche: Programme officiel — Analyse.
series: S1, S3
ordre: 23
duree: 45
demo: false
statut: publie
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Propriétés algébriques
$$
e^x \cdot e^y = e^{x+y}, \qquad
\frac{e^x}{e^y} = e^{x-y}, \qquad
\big(e^x\big)^y = e^{xy}, \qquad
e^{-x} = \frac{1}{e^x}, \qquad e^0 = 1
$$
:::

:::formule Propriétés de variation et limites
- $e^x > 0$ pour tout $x$ ; $e^0 = 1$ ; $x \mapsto e^x$ est **strictement croissante** sur $\mathbb{R}$.

$$
\lim_{x \to -\infty} e^x = 0, \qquad
\lim_{x \to +\infty} e^x = +\infty
$$

Asymptote horizontale : $y = 0$ à $-\infty$.
:::

:::formule Dérivée
$$
\big(e^x\big)' = e^x, \qquad
\big(e^{u(x)}\big)' = u'(x)\, e^{u(x)}
$$

Convexité : $(e^x)'' = e^x > 0$ donc $e^x \geq 1 + x$ pour tout $x$ (égalité en $0$).
:::

:::formule Équations et inéquations
$$
e^{u} = e^{v} \iff u = v, \qquad
e^{u} = k > 0 \iff u = \ln k, \qquad
k \leq 0 : \text{ aucune solution}
$$

$$
e^{u} < e^{v} \iff u < v \quad (\text{car } x \mapsto e^x \text{ est croissante})
$$
:::

## Méthode express

1. **Simplifier une expression** : regrouper les exposants (addition au numérateur, soustraction au quotient), transformer $1/e^x$ en $e^{-x}$.
2. **Résoudre $e^{u(x)} = e^{v(x)}$** : égaler les exposants, puis résoudre l'équation algébrique.
3. **Résoudre $e^{u(x)} = k$** : si $k \leq 0$, pas de solution ; sinon poser $u(x) = \ln k$.
4. **Résoudre une inéquation** : lever l'exponentielle en comparant les exposants (fonction croissante).
5. **Étudier $f(x) = P(x)e^x$** : dérivée produit, factoriser par $e^x$, signe = signe de $P$ modifié… puis limites à $\pm\infty$ et tableau.
6. **Limites** : en $-\infty$, $e^x$ « gagne » toujours face à une puissance ($x^n e^x \to 0$) ; en $+\infty$, $e^x$ diverge plus vite que tout polynôme.

:::erreur Les erreurs qui coûtent des points
1. $(e^x)^y = e^{x+y}$ au lieu de $e^{xy}$.
2. Annuler $e^x$ dans un tableau de signes (il n'est **jamais** nul, seulement toujours positif).
3. Résoudre $e^{3x-1} = 5$ en écrivant « $3x - 1 = 5$ » : il faut $3x - 1 = \ln 5$.
4. Oublier la limite en $-\infty$ (asymptote $y = 0$) dans une étude de fonction.
5. Conclure « $e^x = 0$ n'a pas de solution » **sans** rappeler que $e^x > 0$.
:::

## Vocabulaire

- **Nombre $e$** : $e = \lim\limits_{n \to +\infty} \left(1 + \dfrac{1}{n}\right)^n \approx 2{,}718$.
- **Exponentielle népérienne** : la fonction $x \mapsto e^x$, définie sur $\mathbb{R}$.
- **Logarithme népérien** : réciproque de l'exponentielle, noté $\ln$ (chapitre dédié).
- **Croissante stricte** : $x < y \Rightarrow f(x) < f(y)$ ; permet de « lever » l'exponentielle.
- **Convexité** : courbe au-dessus de ses tangentes ; $e^x \geq 1 + x$.
- **Asymptote horizontale** : ici $y = 0$ à $-\infty$.
- **Équation exponentielle** : équation où l'inconnue figure dans un exposant.
