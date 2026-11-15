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

## L'essentiel du chapitre

:::formule Définition du barycentre
$G = (m_1 A_1 + \dots + m_n A_n)$ est l'unique point tel que

$$
m_1 \overrightarrow{GA_1} + \dots + m_n \overrightarrow{GA_n} = \vec{0}
$$

existe si $M = \sum m_i \neq 0$, avec

$$
x_G = \frac{\sum m_i x_i}{M}, \qquad y_G = \frac{\sum m_i y_i}{M}.
$$
:::

:::formule Avec un point de référence $O$
$$
\overrightarrow{OG} = \frac{m_1 \overrightarrow{OA_1} + \dots + m_n \overrightarrow{OA_n}}{m_1 + \dots + m_n}
$$

et pour tout point $I$ : $\sum m_i \overrightarrow{IA_i} = \Big(\sum m_i\Big) \overrightarrow{IG}$.
:::

:::formule Cas particuliers
- Milieu de $[AB]$ : $M = \dfrac{A + B}{2}$ (masses $\dfrac{1}{2}, \dfrac{1}{2}$).
- Point $M$ avec $\overrightarrow{AM} = \dfrac{1}{3}\overrightarrow{AB}$ : $M = \dfrac{2}{3}A + \dfrac{1}{3}B$.
- Centroïde du triangle : $G = \dfrac{A + B + C}{3}$, sur chaque médiane à $\dfrac{1}{3}$ du milieu du côté (rapport $2:1$ depuis le sommet).
:::

:::formule Associativité (regroupement)
Barycentre de deux lots $= $ barycentre des barycentres partiels, avec les **masses totales** de chaque lot :

$$
m_1 A + m_2 B + m_3 C = \big((m_1 + m_2)\,G_{AB} + m_3\,C\big), \qquad G_{AB} = \frac{m_1 A + m_2 B}{m_1 + m_2}.
$$
:::

:::formule Conservation par une application affine
Si $f$ est affine (translation, homothétie, symétrie centrale, projection, affinité) et $G$ barycentre de $(A_i, m_i)$, alors

$$
f(G) = \big(f(A_1), m_1; \dots; f(A_n), m_n\big)
$$

c'est-à-dire $f\left(\dfrac{\sum m_i A_i}{\sum m_i}\right) = \dfrac{\sum m_i f(A_i)}{\sum m_i}$.
:::

## Méthode express

1. **Calculer un barycentre** : écrire les formules $x_G = \dfrac{\sum m_i x_i}{M}$ et $y_G = \dfrac{\sum m_i y_i}{M}$ avec $M = \sum m_i$.
2. **Reconnaître un point** : vérifier que les coefficients somment à $1$ (combinaison affine = barycentre sans division) ou diviser par la somme des masses.
3. **Regrouper** : chercher un barycentre partiel (milieu, point de division) puis appliquer l'associativité.
4. **Démontrer un alignement / une concourance** : exprimer le point de deux façons et invoquer l'**unicité** du barycentre.
5. **Transformer** : si $f$ est affine, transformer chaque point en gardant les masses (utile après une homothétie ou une translation).
6. **Passer de $\overrightarrow{AM} = \lambda \overrightarrow{AB} + \mu \overrightarrow{AC}$ au barycentre** : $\overrightarrow{OM} = (1-\lambda-\mu)\overrightarrow{OA} + \lambda\overrightarrow{OB} + \mu\overrightarrow{OC}$ → masses $(1-\lambda-\mu)$, $\lambda$, $\mu$.

:::erreur Les erreurs qui coûtent des points
1. Oublier de diviser par la somme des masses quand les coefficients ne somment pas à $1$.
2. Utiliser deux points de référence différents dans la même formule vectorielle.
3. Annuler une masse ou supposer l'existence sans vérifier $\sum m_i \neq 0$.
4. Invoquer la conservation du barycentre pour une application qui n'est pas affine (par exemple $x \mapsto x^2$ sur les coordonnées) : le théorème ne s'applique pas.
5. Oublier d'écrire « par unicité du barycentre » dans une démonstration d'égalité de points.
:::

## Vocabulaire

- **Barycentre** : point $G$ tel que $\sum m_i \overrightarrow{GA_i} = \vec{0}$.
- **Masse** : coefficient $m_i$ associé à chaque point (peut être négatif, mais $\sum m_i \neq 0$).
- **Combinaison affine** : $\sum m_i A_i$ avec $\sum m_i = 1$ (aucune division nécessaire).
- **Associativité** : regrouper les points en sous-ensembles et barycentrer les barycentres.
- **Application affine** : application $f$ vérifiant $f(\lambda A + \mu B) = \lambda f(A) + \mu f(B)$ dès que $\lambda + \mu = 1$ (dans un repère : $f(x) = ax + b$) : translations, homothéties, symétries, rotations, projections.
- **Conservation du barycentre** : $f$ affine $\Rightarrow$ $f(G)$ = barycentre des images avec les mêmes masses.
- **Centroïde** : barycentre des trois sommets d'un triangle à masses égales.
