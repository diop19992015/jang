---
titre: Fonction exponentielle
accroche: Définition, propriétés, courbe · Équations et inéquations · Étude de fonctions avec l’exponentielle
series: L, S2, S4, S5
ordre: 11
duree: 45
demo: false
statut: publie
objectifs:
  - Définition, propriétés, courbe
  - Équations et inéquations
  - Étude de fonctions avec l’exponentielle
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Propriétés de l'exponentielle
$$
e^0 = 1, \qquad e^{x+y} = e^x \times e^y, \qquad e^{x-y} = \frac{e^x}{e^y}, \qquad (e^x)^n = e^{nx}
$$

$$
e^x > 0 \;\;\text{pour tout } x \in \mathbb{R}, \qquad e^{-x} = \frac{1}{e^x}
$$

**Jamais** de formule $e^{x+y} = e^x + e^y$.
:::

:::formule Étude de $x \mapsto e^x$
| | |
| --- | --- |
| Domaine | $\mathbb{R}$ |
| Dérivée | $(e^x)' = e^x > 0$ : strictement croissante |
| Valeur en $0$ | $e^0 = 1$ : passage par $A(0\,;\,1)$ |
| Limites | $\lim\limits_{x \to -\infty} e^x = 0$ ; $\lim\limits_{x \to +\infty} e^x = +\infty$ |
| Asymptote | $y = 0$ à gauche (courbe toujours $> 0$) |
:::

:::formule Croissance comparée
$$
\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty, \qquad
\lim_{x \to +\infty} \frac{x^n}{e^x} = 0, \qquad
\lim_{x \to -\infty} x^n\,e^x = 0
$$

En $+\infty$ : $e^x$ domine. En $-\infty$ : $e^x$ tend à $0$ plus vite que $x^n$ ne diverge.
:::

:::formule Équations
$$
e^x = k \;\Rightarrow\;
\begin{cases}
k \leq 0 : \varnothing\\
k > 0 : x = ln(k)
\end{cases}
$$

$$
e^{u(x)} = e^{v(x)} \iff u(x) = v(x)
$$

Forme quadratique : $a\,(e^x)^2 + b\,e^x + c = 0$ se résout en posant $X = e^x$ (avec $X > 0$).
:::

:::formule Inéquations
$$
e^u < e^v \iff u < v, \qquad
e^x < k \;(k>0) \iff x < ln(k), \qquad
e^x > k \;(k>0) \iff x > ln(k)
$$
:::

:::formule Dérivées utiles
$$
(e^x)' = e^x, \qquad (e^{u(x)})' = u'(x)\,e^{u(x)}
$$

$$
\big(u\,e^x\big)' = (u' + u)\,e^x, \qquad
\left(\frac{e^x}{u}\right)' = \frac{e^x(u - u')}{u^2}
$$
:::

## Méthode express

1. **Rappeler** $e^x > 0$ : condition toujours utile (équation impossible si $k \leq 0$).
2. **Simplifier** : $e^a \times e^b = e^{a+b}$, $e^{-a} = 1/e^a$, $(e^a)^n = e^{na}$.
3. **Équation** : isoler $e^{\bullet}$ puis $u(x) = ln(k)$ ; ou $e^u = e^v \iff u = v$ ; ou substitution $X = e^x$ pour le quadratique.
4. **Inéquation** : conserver le sens (croissance de $e^x$).
5. **Dérivation** : développer avec les formules, puis **factoriser par $e^x$** (toujours positif).
6. **Limites** : $\dfrac{e^x}{x^n} \to +\infty$ en $+\infty$ ; $x^n e^x \to 0$ en $-\infty$ ; $\dfrac{x^n}{e^x} \to 0$.
7. **Étude complète** : domaine $\to$ dérivée $\to$ variations $\to$ limites aux deux bornes $\to$ courbe (point $(0\,;\,1)$, asymptote $y = 0$ à gauche).

:::erreur Les erreurs qui coûtent des points
1. Écrire $e^{x+y} = e^x + e^y$ : faux, c'est un produit.
2. Répondre $x = ln(-3)$ à $e^x = -3$ : aucune solution, $e^x$ est toujours positif.
3. Oublier la limite en $-\infty$ dans une étude (« $e^x$ tend vers $0$ en $-\infty$ »).
4. Rester bloqué sur une forme $\infty/\infty$ sans factoriser par $e^x$.
5. Oublier $e^x > 0$ dans le signe d'un facteur : $e^x$ ne change jamais le signe d'un produit.
:::

## Vocabulaire

- **Exponentielle** $x \mapsto e^x$ : fonction définie sur $\mathbb{R}$, strictement croissante, toujours positive.
- **Nombre $e$** : $e \approx 2{,}72$, base du logarithme népérien.
- **Croissance exponentielle** : croissance plus rapide que toute puissance.
- **Forme indéterminée** : $\infty/\infty$, $0 \times \infty$... à traiter par factorisation.
- **Équation exponentielle** : équation contenant $e^{\bullet}$ ; se ramène à $ln$.
- **Trinôme en $e^x$** : équation du type $a(e^x)^2 + b\,e^x + c = 0$, résolue par $X = e^x$.
