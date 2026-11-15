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

:::remarque À quoi ça sert au BAC ?
L'étude de fonction est **la** question longue du sujet : $8$ à $10$ points sur $20$, toujours avec le même canevas (domaine, dérivée, variations, limites, parité, asymptotes, courbe). Savoir suivre la procédure étape par étape et rédiger chaque justification fait gagner plus de points que les calculs eux-mêmes.
:::

## Étape 1 : domaine et éléments de symétrie

:::formule Domaine de définition
Résoudre les interdits :

- dénominateur $\neq 0$ ;
- argument de $\ln$ $> 0$ ;
- argument de $\sqrt{\;}$ $\geq 0$.

Le domaine s'écrit sous forme d'**intervalles**.
:::

:::formule Parité
$f$ est **paire** si $D_f$ est symétrique et $f(-x) = f(x)$ pour tout $x \in D_f$ ;
$f$ est **impaire** si $D_f$ est symétrique et $f(-x) = -f(x)$ pour tout $x \in D_f$.

Une fonction paire admet une courbe **symétrique par rapport à l'axe des ordonnées** ; une fonction impaire, une courbe **symétrique par rapport à l'origine**.
:::

:::methode Tester la parité
1. Vérifier que $D_f$ est stable par opposé ($x \in D_f \Rightarrow -x \in D_f$). Si ce n'est pas le cas, $f$ n'est ni paire ni impaire.
2. Calculer $f(-x)$.
3. Comparer à $f(x)$ et à $-f(x)$ : ni l'un ni l'autre $\Rightarrow$ fonction **ni paire ni impaire** (c'est le cas le plus fréquent).
:::

:::exemple Parité de $f(x) = \dfrac{x}{1+x^2}$
$D_f = \mathbb{R}$, qui est symétrique. Pour tout $x$ :

$$
f(-x) = \frac{-x}{1+(-x)^2} = \frac{-x}{1+x^2} = -f(x).
$$

Donc $f$ est **impaire** : sa courbe est symétrique par rapport à l'origine.
:::

:::formule Autres éléments de symétrie
- Si $f(x + p) = f(x)$ pour tout $x$, alors $f$ est **périodique** de période $p$ (ex. $\sin x$, période $2\pi$).
- Si $f(a + x) = f(a - x)$ pour tout $x$, la courbe est symétrique par rapport à la **droite $x = a$**.
:::

## Étape 2 : limites aux bornes et asymptotes

:::formule Limites et comportement
Pour chaque borne $a$ du domaine (zéro de dénominateur, $0$, $\pm\infty$), calculer $\lim_{x \to a} f(x)$, avec le signe $+$ ou $-$ selon le côté étudié.
:::

:::formule Asymptotes verticales
Si $\lim\limits_{x \to a^-} f(x) = \pm\infty$ ou $\lim\limits_{x \to a^+} f(x) = \pm\infty$, alors la droite d'équation $x = a$ est une **asymptote verticale**.

En pratique : les racines du dénominateur (qui annulent aussi le numérateur ou non) sont des candidats naturels.
:::

:::formule Asymptotes horizontales
$$
\lim_{x \to +\infty} f(x) = L \Rightarrow y = L \text{ est asymptote horizontale à droite}
$$

$$
\lim_{x \to -\infty} f(x) = L' \Rightarrow y = L' \text{ est asymptote horizontale à gauche}
$$
:::

:::formule Asymptotes obliques
Si $\lim\limits_{x \to \pm\infty} \dfrac{f(x)}{x} = m \neq 0$ et que $\lim\limits_{x \to \pm\infty} \big(f(x) - m x\big) = p$, alors $y = mx + p$ est une **asymptote oblique**.

Les fonctions de la forme $f(x) = \dfrac{P(x)}{Q(x)}$ avec $\deg P = \deg Q + 1$ en admettent une.
:::

:::exemple Asymptotes de $f(x) = \dfrac{2x+1}{x-1}$
- $x = 1$ : $\lim\limits_{x \to 1^+} f(x) = +\infty$ et $\lim\limits_{x \to 1^-} f(x) = -\infty$ → asymptote verticale $x = 1$.
- En $+\infty$ : en divisant par $x$, $f(x) = \dfrac{2 + 1/x}{1 - 1/x} \to 2$ → asymptote horizontale $y = 2$.

Le même calcul en $-\infty$ donne aussi $y = 2$.
:::

:::remarque Comment trouver les asymptotes rapidement
1. **Verticales** : résoudre « dénominateur $= 0$ » puis calculer les limites (avec signe).
2. **Horizontales** : limite en $\pm\infty$ d'un quotient de polynômes de même degré = rapport des coefficients dominants.
3. **Obliques** : degré du numérateur = degré du dénominateur $+ 1$ : division euclidienne.
:::

## Étape 3 : dérivée, variations, branches paraboliques

:::formule Dérivée et variations
Calculer $f'(x)$, le factoriser, dresser le tableau de signes de $f'$, puis le **tableau de variations** avec les valeurs aux points critiques et les limites aux bornes.
:::

:::formule Branches paraboliques (degré 2 en $x$)
Pour $x \to \pm\infty$, on compare $f(x)$ à une **parabole de référence** $y = ax^2 + bx + c$ :

- si $\lim_{x \to \pm\infty} \big(f(x) - (ax^2 + bx + c)\big) = 0$, alors la courbe de $f$ admet la parabole $y = ax^2 + bx + c$ comme **branche parabolique** : la courbe s'en approche indéfiniment.
:::

:::methode Branches paraboliques d'un quotient
Pour $f(x) = \dfrac{a_n x^n + \dots}{b_m x^m + \dots}$ avec $n = m + 2$ :

1. Effectuer la **division euclidienne** du numérateur par le dénominateur : $P = D \times Q + R$.
2. $f(x) = Q(x) + \dfrac{R(x)}{D(x)}$ avec $\dfrac{R}{D} \to 0$ : la parabole de référence est $y = Q(x)$ (de degré $2$).
:::

:::exemple Branche parabolique
$$
f(x) = \frac{x^4 + 1}{x^2} = x^2 + \frac{1}{x^2} \xrightarrow[x \to \pm\infty]{} x^2 \;\text{(au sens } f(x) - x^2 = \frac{1}{x^2} \to 0).
$$

La parabole $y = x^2$ est la branche parabolique de $\mathcal{C}_f$ : au voisinage de $\pm\infty$, la courbe suit $y = x^2$.
:::

:::erreur Piège sur les branches
Une asymptote est une **droite** ; une branche parabolique est une **courbe**. Ne dis jamais « la parabole est une asymptote » : écris « $y = x^2$ est la branche parabolique de la courbe de $f$ ».
:::

## Étape 4 : représentation graphique

:::methode Construire la courbe au BAC
1. Tracer les **asymptotes** en tirets (verticales puis horizontales/obliques).
2. Placer les **points particuliers** : intersections aux axes, extremums, points dont la tangente est horizontale.
3. Reporter les **limites** : ce que fait la courbe aux bornes et en $\pm\infty$.
4. Relier en respectant le sens de variation de chaque morceau et la symétrie (parité).
5. Vérifier la cohérence : la courbe ne doit pas couper ses asymptotes au voisinage (sauf asymptote verticale, jamais atteinte).
:::

:::exemple Étude complète — $f(x) = \dfrac{x^2}{x-1}$
- **Domaine** : $\mathbb{R} \setminus \{1\}$.
- **Parité** : $D_f$ n'est pas symétrique ($1 \in D_f$ mais $-1 \notin$) → ni paire ni impaire.
- **Asymptotes** : $x = 1$ (verticale) ; division : $\dfrac{x^2}{x-1} = x + 1 + \dfrac{1}{x-1}$, donc asymptote oblique $y = x + 1$ ; pas d'asymptote horizontale.
- **Dérivée** : $f'(x) = \dfrac{2x(x-1) - x^2}{(x-1)^2} = \dfrac{x(x-2)}{(x-1)^2}$ : nulle en $0$ et $2$.
- **Variations** : maximum local en $0$ : $f(0) = 0$ ; minimum local en $2$ : $f(2) = 4$.
- **Branches** : $f(x) - (x+1) = \dfrac{1}{x-1} \to 0$ : la droite $y = x+1$ est asymptote oblique (pas une branche parabolique, le quotient des degrés vaut $1$).

La courbe passe par $(0\,;\,0)$ et $(2\,;\,4)$, est symétrique de la droite $y = x + 1$ à la fois par rapport à $x = 1$… (en réalité par rapport au point $(1\,;\,2)$, centre de symétrie du quotient partiel).
:::

## Méthode générale de l'étude complète

:::methode Les 8 questions types du BAC (dans l'ordre)
1. Domaine de définition.
2. Limites aux bornes et asymptotes.
3. Dérivée et signe.
4. Tableau de variations et extremums.
5. Parité (et période).
6. Équations et inéquations : $f(x) = k$, $f(x) \leq k$ (lecture du tableau).
7. Représentation graphique (asymptotes en tirets, points particuliers).
8. Branches paraboliques ou centre de symétrie (si demandé).
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier les **limites aux bornes du domaine** (signe $+$ ou $-$ selon le côté).
2. Écrire une asymptote verticale sans calculer la limite.
3. Représenter la courbe **à la main libre** sans avoir tracé les asymptotes en tirets ni placé les points particuliers.
4. Conclure sur la parité sans vérifier d'abord la **symétrie du domaine**.
5. Confondre asymptote (droite) et branche parabolique (courbe).
:::

## Ce qu'il faut retenir

- Procédure en 4 temps : **domaine $\to$ limites/asymptotes $\to$ dérivée/variations $\to$ graphique**.
- Parité : domaine symétrique **puis** $f(-x) = \pm f(x)$ ; sinon « ni paire ni impaire ».
- Asymptote verticale $x = a$ si limite infinie ; horizontale $y = L$ si limite finie en $\pm\infty$ ; oblique $y = mx + p$ si $f(x)/x \to m \neq 0$.
- Branche parabolique : quotient où $\deg P = \deg Q + 2$, obtenue par division euclidienne.
- Le tableau de variations doit mentionner **valeurs aux points critiques + limites aux bornes**.
- Sur le graphique : asymptotes en tirets, points particuliers, respect des limites.
