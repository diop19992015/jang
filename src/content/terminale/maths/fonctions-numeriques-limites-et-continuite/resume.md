---
titre: "Fonctions numériques : limites et continuité"
accroche: Courbes asymptotes · Limite d’une fonction composée · Théorème des valeurs intermédiaires
series: S1, S3
ordre: 20
duree: 45
demo: false
statut: publie
objectifs:
  - Courbes asymptotes
  - Limite d’une fonction composée
  - Théorème des valeurs intermédiaires
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Propriétés de la limite
Si $f \to \ell$ et $g \to m$ (limites finies) en $a$ :

$$
(f+g) \to \ell+m, \qquad f \times g \to \ell \times m, \qquad \frac{f}{g} \to \frac{\ell}{m} \;(m \neq 0)
$$
:::

:::formule Forme $\dfrac{0}{0}$
Factoriser (ou multiplier par le conjugué), **simplifier** le facteur qui s'annule, puis calculer la limite.

$$
\lim_{x \to 3} \frac{x^2-9}{x-3} = \lim_{x \to 3} (x+3) = 6
$$
:::

:::formule Asymptotes
- **Verticale** $x = a$ : $\lim\limits_{x \to a^\pm} f(x) = \pm\infty$.
- **Horizontale** $y = \ell$ : $\lim\limits_{x \to \pm\infty} f(x) = \ell$ fini.
- **Oblique** $y = mx+b$ : $\lim \dfrac{f(x)}{x} = m \neq 0$ et $\lim \big(f(x) - mx\big) = b$.
:::

:::formule Limite d'une composée (acheminement)
Si $\lim\limits_{x \to a} f(x) = L$ et $g$ est **continue en $L$**, alors :

$$
\lim_{x \to a} g\big(f(x)\big) = g(L)
$$
:::

:::formule Continuité
$f$ est continue en $a$ si $a \in D_f$ et

$$
\lim_{x \to a} f(x) = f(a)
$$
:::

:::formule Théorème des valeurs intermédiaires
$f$ continue sur $[a\,;\,b]$ et $k$ compris entre $f(a)$ et $f(b)$ $\Rightarrow$ $\exists\, c \in [a\,;\,b]$ tel que $f(c) = k$.

Cas particulier $f(a) \times f(b) < 0$ : $\exists\, c$ tel que $f(c) = 0$.
:::

## Méthode express

1. **Calculer une limite** : essayer de remplacer $x$ par $a$ ; si on obtient $\dfrac{0}{0}$, factoriser ou conjuguer, simplifier, puis conclure.
2. **Limiter à l'infini** : comparer les degrés du numérateur et du dénominateur ; si degrés égaux, rapport des coefficients directeurs.
3. **Trouver les asymptotes** : chercher les valeurs d'exclusion où $f \to \pm\infty$ (verticales), calculer $\lim\limits_{x \to \pm\infty} f$ (horizontales), puis $\dfrac{f(x)}{x}$ et $f(x)-mx$ (obliques).
4. **Composée** : identifier la limite intérieure $L$, vérifier que la fonction extérieure est continue en $L$, remplacer.
5. **Continuité** : écrire le domaine, puis montrer $\lim\limits_{x \to a} f(x) = f(a)$ pour tout $a$ du domaine ; pour une fonction morceau par morceau, calculer la limite au point de jonction et ajuster la constante.
6. **Existence de solution** : construire $f$ continue, montrer des signes contraires aux bornes, appliquer le TVI, puis chercher la monotonie pour l'unicité.

:::erreur Les erreurs qui coûtent des points
1. Conclure sur $\dfrac{0}{0}$ sans factoriser (« $0/0 = 1$ » n'existe pas).
2. Écrire l'asymptote horizontale « $x = 5$ » au lieu de $y = 5$.
3. Appliquer l'acheminement sans vérifier la **continuité** de la fonction extérieure en $L$.
4. Invoquer le TVI sans avoir démontré la continuité sur tout l'intervalle.
5. Oublier de préciser l'intervalle $[a\,;\,b]$ et l'appartenance de $c$ à cet intervalle dans la rédaction.
:::

## Vocabulaire

- **Limite** : valeur approchée de $f(x)$ quand $x \to a$ (ou $x \to \pm\infty$).
- **Forme indéterminée** : $\dfrac{0}{0}$, $\infty-\infty$, $\dfrac{\infty}{\infty}$… qui exige un travail algébrique.
- **Asymptote** : droite dont la courbe se rapproche indéfiniment.
- **Continuité** en $a$ : la limite en $a$ existe, appartient au domaine et vaut $f(a)$.
- **Théorème des valeurs intermédiaires (TVI)** : une fonction continue prend toutes les valeurs comprises entre ses valeurs aux bornes.
- **Weierstrass** : une fonction continue sur $[a\,;\,b]$ y admet un minimum et un maximum.
- **Rupture de continuité** : point où la limite n'existe pas ou ne vaut pas $f(a)$.
