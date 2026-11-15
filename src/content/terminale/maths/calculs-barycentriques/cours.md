---
titre: Calculs barycentriques
accroche: Fonctions associées à des points pondérés · Applications affines et conservation du barycentre
series: S1, S3
ordre: 27
duree: 45
demo: false
statut: publie
objectifs:
  - Fonctions associées à des points pondérés
  - Applications affines et conservation du barycentre
partie: Géométrie
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Le barycentre est l'outil qui **calcule** sans calculatrice les points remarquables d'un triangle (centre de gravité, milieu, points de division), démontre des alignements et des concourances, et simplifie les questions de type « $M$ tel que $\overrightarrow{AM} = \lambda \overrightarrow{AB} + \mu \overrightarrow{AC}$ ». Les propriétés d'associativité et de conservation par applications affines font gagner des lignes entières de démonstration.
:::

## Barycentre de points pondérés

:::definition Barycentre
Soient $n$ points $A_1, \dots, A_n$ d'un plan muni d'un repère, et $n$ réels $m_1, \dots, m_n$ appelés **masses**. Le **barycentre** $G$ de ces points pondérés est défini (quand la somme des masses n'est pas nulle) par la relation vectorielle :

$$
m_1 \overrightarrow{GA_1} + m_2 \overrightarrow{GA_2} + \dots + m_n \overrightarrow{GA_n} = \vec{0}.
$$

On le note $G = (m_1 A_1 + \dots + m_n A_n)$.
:::

:::formule Existence et unicité
Si $M = m_1 + \dots + m_n \neq 0$, le barycentre existe et est **unique**, et ses coordonnées sont :

$$
x_G = \frac{m_1 x_1 + \dots + m_n x_n}{M}, \qquad
y_G = \frac{m_1 y_1 + \dots + m_n y_n}{M}.
$$

Si $M = 0$ et que les points ne sont pas « équilibrés », il n'existe pas de barycentre.
:::

:::formule Écriture avec un point de référence
Pour tout point $O$ :

$$
\overrightarrow{OG} = \frac{m_1 \overrightarrow{OA_1} + \dots + m_n \overrightarrow{OA_n}}{m_1 + \dots + m_n}.
$$
:::

:::exemple Cas particuliers
- **Milieu** de $[AB]$ : $M = \left(\dfrac{1}{2}A + \dfrac{1}{2}B\right)$, masses égales $1$ et $1$.
- **Point de division** : si $\overrightarrow{AM} = \dfrac{1}{3}\overrightarrow{AB}$, alors $M = \dfrac{2}{3}A + \dfrac{1}{3}B$.
- **Centroïde** du triangle $ABC$ : $G = \left(\dfrac{1}{3}A + \dfrac{1}{3}B + \dfrac{1}{3}C\right)$, aussi noté $\left(A + B + C\right)$ avec masses égales.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de **diviser** par la somme des masses : les coordonnées de $G$ sont des moyennes pondérées.
2. Écrire $G = (A + B + C)$ sans préciser qu'il faut **diviser par $3$** : $A+B+C$ désigne les vecteurs $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}$ rapportés à un point $O$.
3. Confondre masses et coefficients dans une combinaison affine : voir la remarque ci-dessous.
:::

:::remarque Combinaison affine
Si $m_1 + \dots + m_n = 1$, le point $G = (m_1 A_1 + \dots + m_n A_n)$ est défini **sans division** : c'est une combinaison affine. Exemple : $\dfrac{1}{4}A + \dfrac{3}{4}B$ est déjà le point cherché (les masses somment à $1$).
:::

## Propriétés fondamentales

:::formule Propriété de regroupement (associativité)
Si $G$ est le barycentre de $(A_1, m_1), \dots, (A_n, m_n)$, et si l'on regroupe les points en deux lots de masses totales $\mu_1$ et $\mu_2$ (barycentres partiels $G_1$ et $G_2$), alors :

$$
G = (\mu_1 G_1 + \mu_2 G_2).
$$

Autrement dit : le barycentre d'un ensemble est aussi le barycentre des **barycentres partiels**, avec les masses totales de chaque lot.
:::

:::formule Regroupement sur trois points
Le barycentre de trois points se construit aussi par étapes :

$$
m_1 A + m_2 B + m_3 C = \big((m_1 + m_2)\,G_{AB} + m_3\,C\big), \qquad G_{AB} = \frac{m_1 A + m_2 B}{m_1 + m_2}.
$$
:::

:::formule Relations vectorielles utiles
$G$ barycentre de $(A_1, m_1), \dots, (A_n, m_n)$ avec $\sum m_i = M$ :

$$
\forall I:\quad m_1 \overrightarrow{IA_1} + \dots + m_n \overrightarrow{IA_n} = M \cdot \overrightarrow{IG}
$$

En prenant $I = G$ : $\sum m_i \overrightarrow{GA_i} = \vec{0}$.
:::

:::exemple Centroïde du triangle
$G$ barycentre de $(A, 1), (B, 1), (C, 1)$. Regroupons $A$ et $B$ : leur barycentre est le milieu $I$ de $[AB]$ (masses $1 + 1 = 2$). Donc

$$
G = (2I + 1C), \qquad \overrightarrow{IG} = \frac{1}{3}\overrightarrow{IC}.
$$

Cela signifie que $G$ est sur la **médiane** $[CI]$ à $\dfrac{1}{3}$ de $I$ : les trois médianes concourent en $G$, qui divise chaque médiane dans le rapport $2:1$ (depuis le sommet).
:::

## Applications affines et conservation du barycentre

:::formule Théorème
Soit $f$ une **application affine** du plan (c'est-à-dire $f(\lambda A + \mu B) = \lambda f(A) + \mu f(B)$ dès que $\lambda + \mu = 1$ ; dans un repère, $f(x) = ax + b$). Si $G$ est le barycentre des points $A_1, \dots, A_n$ de masses $m_1, \dots, m_n$, alors $f(G)$ est le barycentre des points $f(A_1), \dots, f(A_n)$ avec les **mêmes masses** :

$$
f\left(\frac{\sum m_i A_i}{\sum m_i}\right) = \frac{\sum m_i f(A_i)}{\sum m_i}.
$$
:::

:::definition Application affine
Une application $f$ du plan est **affine** si elle vérifie

$$
f(\lambda A + \mu B) = \lambda f(A) + \mu f(B) \qquad \text{dès que } \lambda + \mu = 1,
$$

ce qui, dans un repère, revient à $f(x) = ax + b$ (ou $f(x_1\,;\,x_2) = (ax_1 + bx_2 + c\,;\, dx_1 + ex_2 + f)$).
:::

:::remarque Transformations affines usuelles
Sont affines, et **conservent donc les barycentres** : les translations, homothéties, symétries centrales et axiales, rotations, projections sur une droite, affinités. En revanche, une application comme $x \mapsto x^2$ ou $x \mapsto e^x$ n'est pas affine : elle ne préserve pas les barycentres.
:::

:::exemple Conservation par une homothétie
Soit $h$ d'centre $O$ et de rapport $k$: $h$ est affine. Si $G$ est le barycentre de $(A, 2)$ et $(B, 1)$, alors $h(G)$ est le barycentre de $(h(A), 2)$ et $(h(B), 1)$.

Exemple numérique : $A(0\,;\,0)$, $B(6\,;\,0)$, masses $2$ et $1$ :

$$
G = \left(\frac{2 \times 0 + 1 \times 6}{3}\,;\,0\right) = (2\,;\,0).
$$

Avec $h$ homothétie de centre $O(0\,;\,0)$ et de rapport $3$ : $h(G) = (6\,;\,0)$, et bien $h(G)$ est le barycentre de $h(A)(0\,;\,0)$ et $h(B)(18\,;\,0)$ avec masses $2, 1$ : $\dfrac{0 + 18}{3} = 6$ ✓.
:::

:::methode Démontrer un alignement ou un point remarquable
1. Écrire le point cherché sous forme de barycentre (masses à trouver).
2. Utiliser l'associativité pour regrouper.
3. Comparer avec une expression donnée dans l'énoncé : si les deux écritures coïncident, les points sont identiques (**unicité** du barycentre).
:::

:::exemple Vérifier un point milieu
Montrer que le point $M$ défini par $\overrightarrow{OM} = \dfrac{\overrightarrow{OA} + \overrightarrow{OB}}{2}$ est le milieu de $[AB]$.

L'expression $\dfrac{1}{2}A + \dfrac{1}{2}B$ est une combinaison affine (masses sommant à $1$) : $M$ est le barycentre de $(A, 1)$ et $(B, 1)$, c'est-à-dire le **milieu** de $[AB]$ (unicité du barycentre).
:::

:::piege Attention au point de référence
$\overrightarrow{OG} = \dfrac{m_1\overrightarrow{OA_1} + \dots}{M}$ : la formule est valable pour **tout** point $O$, mais $O$ doit être le même dans tous les vecteurs. Mélanger deux points de référence est l'erreur classique.
:::

## Mise en équation vectorielle

:::methode Passer de $\overrightarrow{AM} = \lambda \overrightarrow{AB} + \mu \overrightarrow{AC}$ au barycentre
1. Écrire tout en vecteurs **depuis le même origine** $A$ : $\overrightarrow{AM} = \lambda(\overrightarrow{AB}) + \mu(\overrightarrow{AC})$.
2. Ramener à $O$ : $\overrightarrow{OM} - \overrightarrow{OA} = \lambda(\overrightarrow{OB} - \overrightarrow{OA}) + \mu(\overrightarrow{OC} - \overrightarrow{OA})$.
3. Isoler $\overrightarrow{OM}$ : $\overrightarrow{OM} = (1 - \lambda - \mu)\overrightarrow{OA} + \lambda \overrightarrow{OB} + \mu \overrightarrow{OC}$.
4. Si $1 - \lambda - \mu + \lambda + \mu = 1$ (toujours vrai ici), les coefficients **somment à $1$** : $M$ est le barycentre de $(A, 1-\lambda-\mu)$, $(B, \lambda)$, $(C, \mu)$.
:::

:::exemple Application
$\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB} + \dfrac{1}{4}\overrightarrow{AC}$ donne

$$
\overrightarrow{OM} = \left(1 - \frac{1}{2} - \frac{1}{4}\right)\overrightarrow{OA} + \frac{1}{2}\overrightarrow{OB} + \frac{1}{4}\overrightarrow{OC}
= \frac{1}{4}\overrightarrow{OA} + \frac{1}{2}\overrightarrow{OB} + \frac{1}{4}\overrightarrow{OC}.
$$

$M$ est le barycentre de $(A, 1), (B, 2), (C, 1)$ (masses divisées par la somme $4$).
:::

## Ce qu'il faut retenir

- $G = (m_1 A_1 + \dots + m_n A_n)$ exige $\sum m_i \neq 0$ ; les coordonnées se divisent par $\sum m_i$.
- Relation vectorielle caractéristique : $\sum m_i \overrightarrow{GA_i} = \vec{0}$, et pour tout point $I$ : $\sum m_i \overrightarrow{IA_i} = (\sum m_i) \overrightarrow{IG}$.
- **Associativité** : regrouper les points, additionner les masses.
- Combinaison affine : coefficients sommant à $1$ → aucune division (milieu : $\dfrac{A+B}{2}$).
- Centroïde : barycentre de $(A, 1), (B, 1), (C, 1)$ ; sur chaque médiane à $\dfrac{1}{3}$ du milieu du côté.
- **Applications affines** (translations, homothéties, projections) : $f(G) = $ barycentre des $f(A_i)$ avec les mêmes masses.
- Tout vecteur $\overrightarrow{AM} = \lambda \overrightarrow{AB} + \mu \overrightarrow{AC}$ traduit un barycentre de $A$, $B$, $C$ avec les coefficients $1 - \lambda - \mu$, $\lambda$, $\mu$.
