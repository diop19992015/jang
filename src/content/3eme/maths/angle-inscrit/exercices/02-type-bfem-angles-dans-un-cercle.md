---
titre: Sujet type BFEM — Angles dans un cercle
difficulte: 3
type: bfem
annee: 2023
indices:
  - Vérifie d’abord que la somme des arcs donnés et de l’arc inconnu fait 360° (ou 180° sur un demi-cercle).
  - Pour chaque angle, applique « arc ÷ 2 » si le sommet est sur le cercle, et l’arc tel quel si le sommet est au centre.
  - Repère les demi-cercles : un angle inscrit dans un demi-cercle est droit, ce qui déclenche Pythagore pour les longueurs.
---

## Énoncé

L'unité de longueur est le centimètre.

$(C)$ est un cercle de centre $O$. Les points $A$, $B$, $C$ appartiennent au cercle ; les arcs $AB$ et $BC$ sont adjacents ($B$ est situé entre $A$ et $C$ sur le cercle) et l'on donne :
$$
m(\text{arc } AB) = 110° \qquad m(\text{arc } BC) = 70°
$$

**Partie A.** (3 points)
1. Calculer la mesure de l'arc $AC$ qui ne contient pas le point $B$.
2. Calculer la mesure de l'angle inscrit $\widehat{ACB}$.
3. Calculer la mesure de l'angle inscrit $\widehat{BAC}$.

**Partie B.** (4 points)

On donne de plus $AB = 6$ cm et $BC = 8$ cm.

4. Démontrer que le triangle $ABC$ est rectangle en $B$.
5. Calculer la longueur $AC$.
6. Calculer le rayon du cercle $(C)$.

**Partie C.** (3 points)

Un point $D$ appartient au cercle et se trouve sur l'arc $AC$ qui ne contient pas $B$.

7. Calculer la mesure de l'angle inscrit $\widehat{ADB}$.
8. Calculer la mesure de l'angle inscrit $\widehat{CDB}$ et vérifier que la somme $m(\widehat{ADB}) + m(\widehat{CDB})$ correspond à $m(\widehat{ADC})$.

## Solution

**1. Mesure de l'arc $AC$.**

Les trois arcs constituent le cercle entier, qui mesure $360°$ :
$$
m(\text{arc } AC) = 360° - 110° - 70° = 180°.
$$

*(0,5 pt)*

**2. Mesure de l'angle inscrit $\widehat{ACB}$.**

L'angle $\widehat{ACB}$ a son sommet $C$ sur le cercle ; il intercepte l'arc $AB$ :
$$
m(\widehat{ACB}) = \frac{m(\text{arc } AB)}{2} = \frac{110°}{2} = 55°.
$$

*(1 pt)*

**3. Mesure de l'angle inscrit $\widehat{BAC}$.**

L'angle $\widehat{BAC}$ a son sommet $A$ sur le cercle ; il intercepte l'arc $BC$ :
$$
m(\widehat{BAC}) = \frac{m(\text{arc } BC)}{2} = \frac{70°}{2} = 35°.
$$

*(1 pt)*

**4. Le triangle $ABC$ est rectangle en $B$.**

D'après la question 1, l'arc $AC$ qui ne contient pas $B$ mesure $180°$ : c'est donc un **demi-cercle**, et $[AC]$ est un diamètre du cercle.

L'angle $\widehat{ABC}$ est un angle inscrit qui intercepte ce demi-cercle, donc :
$$
m(\widehat{ABC}) = \frac{180°}{2} = 90°.
$$

Le triangle $ABC$ possède un angle droit en $B$ : il est **rectangle en $B$**.

*Autre rédaction possible* : additionner les angles calculés en A2 et A3, puis utiliser la somme des angles d'un triangle :
$$
m(\widehat{ABC}) = 180° - 55° - 35° = 90°.
$$

*(1 pt pour l'arc de 180° / le diamètre + 1 pt pour la conclusion rectangle)*

**5. Calcul de $AC$.**

Le triangle $ABC$ est rectangle en $B$ : d'après le théorème de Pythagore, l'hypoténuse est $[AC]$ et :
$$
AC^2 = AB^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100.
$$
$$
AC = \sqrt{100} = 10 \text{ cm}.
$$

*(1,5 pt)*

**6. Rayon du cercle.**

$[AC]$ est un diamètre de longueur $10$ cm ; le rayon vaut la moitié :
$$
r = \frac{AC}{2} = \frac{10}{2} = 5 \text{ cm}.
$$

Le centre $O$ est le milieu de $[AC]$ et $OA = OB = OC = 5$ cm : ces trois segments sont des rayons du cercle, ce qui confirme le résultat.

*(1 pt)*

**7. Mesure de l'angle inscrit $\widehat{ADB}$.**

L'angle $\widehat{ADB}$ a son sommet $D$ sur le cercle et il intercepte l'arc $AB$ (celui qui ne contient pas $D$) :
$$
m(\widehat{ADB}) = \frac{110°}{2} = 55°.
$$

On retrouve la mesure de $\widehat{ACB}$ : ce sont deux angles inscrits de **même arc** $AB$, ils sont égaux, conformément au cours.

*(1 pt)*

**8. Mesure de l'angle $\widehat{CDB}$ et vérification.**

L'angle $\widehat{CDB}$ intercepte l'arc $BC$ :
$$
m(\widehat{CDB}) = \frac{70°}{2} = 35°.
$$

Donc :
$$
m(\widehat{ADB}) + m(\widehat{CDB}) = 55° + 35° = 90°.
$$

Or, l'angle $\widehat{ADC}$ intercepte l'arc $ABC = 110° + 70° = 180°$, donc $m(\widehat{ADC}) = 90°$. La somme est bien égale à $m(\widehat{ADC})$ : le rayon $[DB]$ partage l'angle droit en $D$. ✓

*(1 pt)*

:::remarque Lien avec Thalès
Le résultat des questions 4 à 6 est au cœur du **théorème de Thalès** : dans un triangle rectangle, le milieu de l'hypoténuse est le centre du cercle qui passe par les trois sommets. C'est pourquoi les sujets de BFEM associent si souvent angle inscrit, Pythagore et Thalès.
:::

:::methode Ce que le correcteur attend
- La chaîne d'arcs $360°$ (ou $180°$ pour le demi-cercle) écrite avant tout calcul d'angle.
- Chaque angle justifié par l'arc intercepté : « $\widehat{ACB}$ intercepte l'arc $AB$, donc… ».
- La démonstration du triangle rectangle fondée sur le demi-cercle de $180°$.
- Les étapes de Pythagore avec les carrés, et l'unité cm.
:::

:::erreur Piège classique de ce sujet
Écrire $m(\widehat{ACB}) = 110°$ en prenant l'arc pour l'angle inscrit : la division par $2$ est **systématique** pour un angle inscrit. L'angle au centre, lui, n'est jamais divisé — c'est précisément deux fois l'angle inscrit de même arc.
:::
