## Définition

:::formule Barycentre de points pondérés
$G = (m_1 A_1 + \dots + m_n A_n)$ est l'unique point tel que

$$
m_1 \overrightarrow{GA_1} + \dots + m_n \overrightarrow{GA_n} = \vec{0}
$$

si $M = m_1 + \dots + m_n \neq 0$.
:::

:::formule Coordonnées
$$
x_G = \frac{m_1 x_1 + \dots + m_n x_n}{m_1 + \dots + m_n}, \qquad
y_G = \frac{m_1 y_1 + \dots + m_n y_n}{m_1 + \dots + m_n}
$$
:::

:::formule Vecteurs
$$
\overrightarrow{OG} = \frac{m_1 \overrightarrow{OA_1} + \dots + m_n \overrightarrow{OA_n}}{\sum m_i}
\qquad (\forall O)
$$

$$
\forall I:\quad \sum m_i \overrightarrow{IA_i} = \Big(\sum m_i\Big) \overrightarrow{IG}
$$
:::

## Cas particuliers

:::formule Points remarquables
| Point | Écriture | Masses |
| --- | --- | --- |
| Milieu de $[AB]$ | $\dfrac{A + B}{2}$ | $1\,;\,1$ |
| Point $M$, $\overrightarrow{AM} = \dfrac{1}{3}\overrightarrow{AB}$ | $\dfrac{2}{3}A + \dfrac{1}{3}B$ | $2\,;\,1$ |
| Centroïde du triangle $ABC$ | $\dfrac{A + B + C}{3}$ | $1\,;\,1\,;\,1$ |
| Milieu de $[AB]$ vu comme $I$ | $I = \left(\dfrac{1}{2}A + \dfrac{1}{2}B\right)$ | $\dfrac{1}{2}\,;\,\dfrac{1}{2}$ |
:::

:::remarque Combinaison affine
Si les coefficients **somment à $1$**, l'écriture $m_1 A_1 + \dots + m_n A_n$ est déjà le point (aucune division). Exemple : $\dfrac{1}{4}A + \dfrac{1}{2}B + \dfrac{1}{4}C$.
:::

## Propriétés

:::formule Associativité
$$
m_1 A + m_2 B + m_3 C = \big((m_1+m_2)\,G_{AB} + m_3\,C\big), \qquad G_{AB} = \frac{m_1 A + m_2 B}{m_1 + m_2}
$$

On regroupe les points en lots, on additionne les **masses totales** de chaque lot.
:::

:::formule Centroïde du triangle
$G = \left(\dfrac{A+B+C}{3}\right)$ est le point de concours des médianes ; sur chaque médiane,

$$
\overrightarrow{IG} = \frac{1}{3} \overrightarrow{IC} \qquad (I = \text{milieu de } [AB])
$$

soit $CG = 2 \times GI$ (rapport $2:1$ depuis le sommet).
:::

:::formule Existence
$$
\sum m_i \neq 0 \;\Longrightarrow\; \text{barycentre existe et est unique}
$$

Si $\sum m_i = 0$ avec des points non « équilibrés », pas de barycentre.
:::

## Applications affines

:::formule Définition
$f$ est **affine** si

$$
f(\lambda A + \mu B) = \lambda f(A) + \mu f(B) \qquad \text{pour tout } \lambda + \mu = 1
$$

(dans un repère : $f(x) = ax + b$).
:::

:::formule Conservation des barycentres
$$
f\left(\frac{\sum m_i A_i}{\sum m_i}\right) = \frac{\sum m_i f(A_i)}{\sum m_i}
$$

$f$ affine et $G$ barycentre de $(A_i\,;\,m_i)$ $\Rightarrow$ $f(G)$ barycentre des $(f(A_i)\,;\,m_i)$ avec les **mêmes masses**.
:::

:::remarque Exemples d'applications affines
Translations, homothéties, symétries centrales et axiales, rotations, projections sur une droite, affinités. Elles conservent milieux, centroïdes, alignements et rapports de division.
:::

## Passage d'une relation vectorielle à un barycentre

:::formule Formule clé
$$
\overrightarrow{AM} = \lambda \overrightarrow{AB} + \mu \overrightarrow{AC}
\;\Longrightarrow\;
\overrightarrow{OM} = (1-\lambda-\mu)\overrightarrow{OA} + \lambda \overrightarrow{OB} + \mu \overrightarrow{OC}
$$

$M$ est donc le barycentre de $(A\,;\,1-\lambda-\mu)$, $(B\,;\,\lambda)$, $(C\,;\,\mu)$.
:::

:::remarque Méthode
Réécrire tous les vecteurs depuis le **même** point $O$, isoler $\overrightarrow{OM}$, vérifier que les coefficients somment à $1$, puis conclure par unicité du barycentre.
:::
