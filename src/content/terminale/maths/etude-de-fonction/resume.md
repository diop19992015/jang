---
titre: Étude de fonction
accroche: Parité et éléments de symétrie · Asymptotes et branches paraboliques · Étude et représentation graphique
series: L
ordre: 8
duree: 45
demo: false
statut: publie
objectifs:
  - Parité et éléments de symétrie
  - Asymptotes et branches paraboliques
  - Étude et représentation graphique
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Parité
$$
f \text{ paire} \iff D_f \text{ symétrique et } f(-x) = f(x)
$$

$$
f \text{ impaire} \iff D_f \text{ symétrique et } f(-x) = -f(x)
$$

Courbe paire : symétrie par rapport à l'**axe des ordonnées** ; impaire : par rapport à l'**origine**.
:::

:::formule Asymptotes
| Type | Condition | Écriture |
| --- | --- | --- |
| Verticale $x = a$ | $\lim_{x \to a^\pm} f(x) = \pm\infty$ | tiret vertical |
| Horizontale $y = L$ | $\lim_{x \to \pm\infty} f(x) = L$ | $y = L$ |
| Oblique $y = mx + p$ | $\lim \dfrac{f(x)}{x} = m \neq 0$ et $\lim (f(x) - mx) = p$ | $y = mx + p$ |
:::

:::formule Branches paraboliques
Si $\deg P = \deg Q + 2$ dans $f = \dfrac{P}{Q}$, la division euclidienne $P = Q \times S + R$ donne $f(x) = S(x) + \dfrac{R(x)}{Q(x)}$ avec $\dfrac{R}{Q} \to 0$ : la parabole $y = S(x)$ est la **branche parabolique** de $\mathcal{C}_f$.
:::

:::formule Tableau de variations complet
Le tableau comporte trois lignes : $x$ (avec $\pm\infty$ et les points critiques), $f'(x)$ ($+$, $0$, $-$) et $f(x)$ (valeurs aux points critiques, limites aux bornes, flèches).
:::

:::formule Lecture graphique d'équations
- $f(x) = k$ : abscisses des intersections avec l'horizontale $y = k$.
- $f(x) \leq k$ : abscisses où la courbe est **sous** l'horizontale.
- Tangente horizontale : $f'(a) = 0$.
:::

## Méthode express

1. **Domaine** : interdits (dénominateur, $\ln$, $\sqrt{\;}$), écrit en intervalles.
2. **Symétrie** : domaine symétrique ? puis $f(-x)$ vs $f(x)$ et $-f(x)$ ; sinon « ni paire ni impaire ».
3. **Limites** : à chaque borne (zéros du dénominateur, $0$, $\pm\infty$) avec le signe du côté.
4. **Asymptotes** : verticales (limites infinies), horizontales (limites en $\pm\infty$), obliques (quotient $f/x$), branches paraboliques (division euclidienne si $\Delta$ degrés $= 2$).
5. **Dérivée** : calcul, factorisation, tableau de signes, tableau de variations (valeurs + limites).
6. **Représentation** : asymptotes en tirets $\to$ points particuliers $\to$ limites $\to$ variations $\to$ symétrie.
7. **Lecture** : nombre de solutions de $f(x) = k$ selon la position de l'horizontale.

:::erreur Les erreurs qui coûtent des points
1. Oublier la limite en $0^-$ / $0^+$ quand le domaine est de la forme $]0\,;\,a[$.
2. Annoncer une asymptote sans calcul de limite, ou donner $x = a$ sans dire « verticale ».
3. Tracer la courbe sans asymptotes en tirets ni points particuliers.
4. Confondre asymptote (droite) et branche parabolique (courbe).
5. Dire « $f$ n'est pas paire » sans tester la symétrie du domaine en premier.
:::

## Vocabulaire

- **Domaine de définition** : ensemble des abscisses où l'expression a un sens.
- **Parité** : comportement de $f(-x)$ par rapport à $f(x)$.
- **Période** : répétition d'une courbe ($f(x+p) = f(x)$).
- **Asymptote** : droite que la courbe s'approche indéfiniment.
- **Branche parabolique** : courbe de degré $2$ suivie par la courbe en $\pm\infty$.
- **Point critique** : abscisse où $f'(a) = 0$ (ou n'existe pas).
- **Extremum local** : maximum ou minimum au voisinage d'un point.
- **Représentation graphique** : courbe avec asymptotes, points particuliers et variations.
