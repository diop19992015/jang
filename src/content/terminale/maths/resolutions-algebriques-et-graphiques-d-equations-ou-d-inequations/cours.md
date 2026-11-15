---
titre: Résolutions algébriques et graphiques d’équations ou d’inéquations
accroche: Programme officiel — Analyse.
series: L
ordre: 9
duree: 45
demo: false
statut: publie
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Résoudre une équation ou une inéquation se présente dans presque tous les sujets : factoriser une équation polynomiale, utiliser le signe d'un produit ou d'un quotient, résoudre une équation rationnelle, puis **lire les solutions d'une inéquation sur un tableau de signes ou sur un graphique**. Ce sont des points accessibles à condition de toujours passer par le tableau : deviner « sur la figure » sans justification fait perdre la question.
:::

## Équations polynomiales

:::methode Résoudre une équation polynomiale
1. Mener tous les termes d'un **même côté** pour obtenir $P(x) = 0$.
2. **Factoriser** $P$ (terme en facteur commun, identités remarquables, trinôme du second degré via le discriminant).
3. Un produit de facteurs est nul **si et seulement si** l'un des facteurs est nul : égaler chaque facteur à $0$.
4. Lister l'ensemble des solutions.
:::

:::formule Trinôme du second degré
$$
ax^2 + bx + c = 0 \qquad \Delta = b^2 - 4ac
$$

$$
\Delta < 0 : \varnothing, \qquad
\Delta = 0 : x = -\frac{b}{2a}, \qquad
\Delta > 0 : x = \frac{-b \pm \sqrt{\Delta}}{2a}
$$
:::

:::exemple Équation factorisée
Résolvons $(x-2)(x+5) = 0$ : un produit est nul si un des facteurs l'est, donc

$$
x - 2 = 0 \;\Rightarrow\; x = 2, \qquad x + 5 = 0 \;\Rightarrow\; x = -5.
$$

$$
S = \{-5\,;\,2\}
$$
:::

:::erreur L'erreur fatale
Diviser par $x$ (ou par un facteur contenant l'inconnue) **sans vérifier que ce facteur est non nul** : on perd des solutions. Exemple : $x^2 = x$ ne donne pas $x = 1$ seulement : en factorisant $x^2 - x = x(x-1) = 0$, on obtient $x = 0$ **ou** $x = 1$.
:::

## Équations et inéquations avec un produit ou un quotient

:::formule Signe d'un produit
Un produit $u \times v$ est :

- **positif** si $u$ et $v$ ont le **même signe** ;
- **négatif** si $u$ et $v$ ont des **signes contraires** ;
- **nul** si au moins un des facteurs est nul.
:::

:::formule Signe d'un quotient
$$
\frac{u}{v} > 0 \iff u \text{ et } v \text{ de même signe} \;(v \neq 0)
$$

$$
\frac{u}{v} < 0 \iff u \text{ et } v \text{ de signes contraires} \;(v \neq 0)
$$

Le dénominateur doit toujours être **strictement non nul** : c'est un interdit, pas une solution.
:::

:::methode Résoudre $u(x) \times v(x) \leq 0$ en 4 étapes
1. Résoudre $u(x) = 0$ et $v(x) = 0$ : ce sont les **points de passage** (où le signe peut changer).
2. Classer ces points sur une **droite graduée** (dans l'ordre croissant).
3. Déterminer le signe de chaque facteur sur chaque intervalle, puis le signe du produit.
4. Lire les intervalles où le produit est $\leq 0$ (ou $< 0$) : **inclus** les points pour $\leq$, **exclus** pour $<$.
:::

:::exemple Résolution d'une inéquation
Résolvons $(x-1)(x+3) \leq 0$. Points de passage : $x = -3$ et $x = 1$.

- Pour $x < -3$ : $(-)\times(-) = +$ ;
- Pour $-3 < x < 1$ : $(-)\times(+) = -$ ;
- Pour $x > 1$ : $(+)\times(+) = +$.

Le signe est négatif (ou nul aux bornes) sur $[-3\,;\,1]$ :

$$
S = [-3\,;\,1].
$$
:::

:::piege Bornes ouvertes ou fermées
Dans $(x-1)(x+3) < 0$ (strict), la réponse est $]-3\,;\,1[$ : les valeurs où le produit vaut $0$ sont **exclues**. Dans $\leq 0$, on écrit $[-3\,;\,1]$. Confondre les deux coûte systématiquement un point.
:::

## Équations rationnelles

:::methode Résoudre $\dfrac{P(x)}{Q(x)} = 0$
1. L'interdit : $Q(x) \neq 0$ (à écrire !).
2. Le quotient est nul **si et seulement si** le numérateur est nul (et le dénominateur non nul) : résoudre $P(x) = 0$.
3. Éliminer parmi les solutions celles qui annulent le dénominateur.
:::

:::exemple Équation rationnelle
Résolvons $\dfrac{x^2 - 4}{x - 2} = 3$ pour $x \neq 2$.

On ne peut pas simplifier directement avec le $3$ : on met sur un même dénominateur :

$$
\frac{x^2-4}{x-2} - 3 = 0 \iff \frac{x^2 - 4 - 3(x-2)}{x-2} = 0 \iff \frac{x^2 - 3x + 2}{x-2} = 0.
$$

Le numérateur se factorise : $x^2 - 3x + 2 = (x-1)(x-2)$. Donc

$$
\frac{(x-1)(x-2)}{x-2} = 0 \iff x - 1 = 0 \;\text{ et }\; x \neq 2,
$$

soit $x = 1$ (qui n'annule pas le dénominateur). La solution est $x = 1$ : le facteur $(x-2)$ s'annule et disparaît, mais $x = 2$ reste **interdit**.
:::

## Résolution graphique

:::methode Résoudre $f(x) = k$ sur un graphique
1. Tracer (ou repérer) l'horizontale $y = k$.
2. Les **abscisses des points d'intersection** de la courbe avec cette droite sont les solutions.
3. Compter le nombre de solutions selon la position de $k$ par rapport aux extremums.
:::

:::methode Résoudre $f(x) \geq k$ sur un graphique
1. Repérer l'horizontale $y = k$.
2. Lire les abscisses pour lesquelles la courbe est **au-dessus ou au contact** de la droite.
3. Écrire la réponse sous forme d'**intervalles**, en incluant les points de contact ($=$ inclus).
:::

:::exemple Lecture graphique
Si la courbe de $f$ a un minimum local en $(2\,;\,4)$ et croît ensuite indéfiniment, alors :

- $f(x) = 4$ admet **une** solution : $x = 2$ ;
- $f(x) = 5$ admet **deux** solutions (une de chaque côté du minimum) ;
- $f(x) \geq 4$ a pour solutions $x \in \,]a\,;\,+\infty[$ où $a$ est l'unique solution de gauche, **ou** l'ensemble des $x$ si la courbe ne descend jamais sous $4$ ailleurs.
:::

:::erreur Erreurs de rédaction sur les graphiques
1. Donner une solution « visuelle » sans jamais citer la lecture des intersections.
2. Oublier de dire que les solutions sont les **abscisses** (et non les points).
3. Écrire $x > 2$ là où la courbe touche $y = k$ : le point de contact compte pour $\geq$.
:::

## Méthode générale et rédaction

:::methode La marche à suivre au BAC
1. **Identifier** le type : équation polynomiale, produit/quotient, rationnelle, graphique.
2. **Écrire les interdits** (dénominateur non nul) quand il y en a.
3. **Factoriser** ou construire le tableau de signes.
4. **Résoudre** en distinguant soigneusement $\leq$ (fermé) et $<$ (ouvert).
5. **Vérifier** : substituer une ou deux solutions dans l'équation de départ.
:::

:::remarque Ce que le correcteur cherche
Le tableau de signes ou la factorisation **écrit** ; une réponse seule (même juste) ne vaut pas tous les points. Pour la résolution graphique, la phrase « les solutions sont les abscisses des points d'intersection avec la droite $y = k$ » est attendue.
:::

## Ce qu'il faut retenir

- Équation $= 0$ : factoriser puis « un produit est nul si un facteur est nul ».
- Ne **jamais** diviser par une expression contenant l'inconnue (risque de perdre des solutions).
- Inéquation avec un produit ou un quotient : points de passage $\to$ tableau de signes $\to$ lecture des intervalles.
- $\leq$ ou $\geq$ : bornes **incluses** ; $<$ ou $>$ : bornes **exclues** (et dénominateur toujours exclu).
- Équation rationnelle : interdit $Q(x) \neq 0$ toujours écrit, même quand le facteur se simplifie.
- Graphique : solutions = abscisses des intersections ; inéquation = partie de courbe au-dessus (ou au-dessous) de l'horizontale.
