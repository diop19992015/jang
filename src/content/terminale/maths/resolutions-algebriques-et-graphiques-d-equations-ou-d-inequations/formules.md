## Équations polynomiales

:::formule Second degré
$$
ax^2 + bx + c = 0, \qquad \Delta = b^2 - 4ac
$$

$$
\Delta < 0 : \varnothing, \qquad
\Delta = 0 : x = -\frac{b}{2a}, \qquad
\Delta > 0 : x = \frac{-b \pm \sqrt{\Delta}}{2a}
$$
:::

:::formule Décomposition du trinôme (quand $\Delta > 0$)
$$
ax^2 + bx + c = a(x - \alpha)(x - \beta)
$$

où $\alpha$ et $\beta$ sont les deux racines.
:::

:::formule Identités remarquables utiles
$$
x^2 - a^2 = (x-a)(x+a)
$$

$$
x^2 + (a+b)x + ab = (x+a)(x+b)
$$

$$
a^3 - b^3 = (a-b)(a^2 + ab + b^2), \qquad
a^3 + b^3 = (a+b)(a^2 - ab + b^2)
$$
:::

:::remarque Règle d'or
Dans une équation ou une inéquation, on **factorise** ; on ne divise jamais par une expression contenant l'inconnue, sous peine de perdre des solutions.
:::

## Produits et quotients

:::formule Signe d'un produit
$$
u \times v > 0 \iff \begin{cases} u > 0 \text{ et } v > 0 \\ \text{ou} \\ u < 0 \text{ et } v < 0 \end{cases}
$$

$$
u \times v < 0 \iff \begin{cases} u > 0 \text{ et } v < 0 \\ \text{ou} \\ u < 0 \text{ et } v > 0 \end{cases}
$$
:::

:::formule Signe d'un quotient
$$
\frac{u}{v} > 0 \iff u \text{ et } v \text{ de même signe} \quad (v \neq 0)
$$

$$
\frac{u}{v} < 0 \iff u \text{ et } v \text{ de signes contraires} \quad (v \neq 0)
$$

**Le dénominateur est toujours exclu**, même quand le quotient est nul ou positif.
:::

:::formule Inéquation à deux facteurs
$$
(x-a)(x-b) \leq 0 \;\Longrightarrow\; x \in [\min(a\,;\,b)\,;\,\max(a\,;\,b)]
$$

$$
(x-a)(x-b) \geq 0 \;\Longrightarrow\; x \in \,]-\infty\,;\,\min(a\,;\,b)] \;\cup\; [\max(a\,;\,b)\,;\,+\infty[
$$
:::

:::remarque Bornes
| Inéquation | Bornes |
| --- | --- |
| $\leq$ ou $\geq$ | intervalles **fermés** (bornes incluses) |
| $<$ ou $>$ | intervalles **ouverts** (bornes exclues) |
| dénominateur | **toujours exclu** |
:::

## Équations rationnelles

:::formule Méthode
$$
\frac{P(x)}{Q(x)} = k \;\Longrightarrow\; \frac{P(x) - k\,Q(x)}{Q(x)} = 0 \;\Longrightarrow\; \begin{cases} P(x) - k\,Q(x) = 0 \\ Q(x) \neq 0 \end{cases}
$$

On met tout sur un **même dénominateur** avant de conclure.
:::

:::formule Cas particulier
$$
\frac{P(x)}{Q(x)} = 0 \iff P(x) = 0 \;\text{ et }\; Q(x) \neq 0
$$
:::

## Résolution graphique

:::formule Équation $f(x) = k$
Solutions = **abscisses** des points d'intersection de $\mathcal{C}_f$ avec la droite horizontale $y = k$.
:::

:::formule Inéquation $f(x) \geq k$
Solutions = abscisses pour lesquelles la courbe est **au-dessus ou au contact** de $y = k$ (les points de contact comptent).

Pour $f(x) > k$ : la courbe est **strictement au-dessus** (les points de contact sont exclus).
:::

:::remarque Nombre de solutions selon $k$
Pour une fonction avec un minimum $m$ et un maximum $M$ (local) :

- $k < m$ ou $k > M$ : parfois **zéro** solution ;
- $k = m$ ou $k = M$ : solutions aux points de contact ;
- $m < k < M$ : **plusieurs** solutions (à lire sur le graphique).
:::

## Protocole complet

:::formule Les 6 étapes
1. Interdits ($Q(x) \neq 0$).
2. Mener tous les termes d'un même côté $= 0$ (ou comparer à $k$).
3. Factoriser.
4. Points de passage sur une droite.
5. Tableau de signes.
6. Lecture + vérification d'une solution dans l'équation de départ.
:::

## À mémoriser absolument

- Produit nul $\iff$ un facteur nul.
- $\Delta = b^2 - 4ac$ et les trois cas du second degré.
- Ne jamais diviser par une expression de l'inconnue.
- Dénominateur toujours exclu.
- $\leq$ : bornes fermées ; $<$ : bornes ouvertes.
- Graphique : solutions = abscisses des intersections avec $y = k$.
