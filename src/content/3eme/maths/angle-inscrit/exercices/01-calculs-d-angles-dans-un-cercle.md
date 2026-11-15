---
titre: Calculer des angles dans un cercle
difficulte: 1
type: entrainement
indices:
  - Note d’abord tous les arcs donnés et complète avec 360° (ou 180° sur un demi-cercle).
  - Pour chaque angle, vérifie où est son sommet : sur le cercle (arc ÷ 2) ou au centre (arc en entier).
  - Trace les deux côtés de l’angle pour identifier l’arc intercepté du bon côté.
---

## Énoncé

$(C)$ est un cercle de centre $O$ et les points $A$, $B$, $C$, $D$ appartiennent à $(C)$.

1. Le petit arc $AB$ mesure $80°$ et le point $C$ est situé sur le grand arc $AB$.
   - Calculer la mesure de l'angle inscrit $\widehat{ACB}$.
   - Calculer la mesure de l'angle au centre $\widehat{AOB}$.
   - Calculer la mesure du grand arc $AB$.

2. On donne $m(\widehat{AOB}) = 140°$ et le point $D$ est situé sur le grand arc $AB$.
   - Calculer $m(\text{petit arc } AB)$.
   - Calculer $m(\widehat{ADB})$.

3. Les arcs $AC$ et $CB$ sont adjacents ($C$ est situé entre $A$ et $B$ sur le cercle) avec $m(\text{arc } AC) = 64°$ et $m(\text{arc } CB) = 36°$. Le point $D$ est situé de l'autre côté de la droite $(AB)$.
   - Calculer $m(\text{arc } AB)$.
   - Calculer $m(\widehat{ADB})$.
   - Calculer $m(\widehat{ADC})$.

4. $[AB]$ est un diamètre du cercle et $m(\text{arc } AC) = 70°$.
   - Calculer $m(\text{arc } CB)$.
   - Calculer $m(\widehat{ABC})$ et $m(\widehat{BAC})$.
   - Vérifier que la somme des angles du triangle $ABC$ vaut $180°$.

## Solution

**1. Petit arc $AB = 80°$, $C$ sur le grand arc.**

- $\widehat{ACB}$ est un angle inscrit dont le sommet $C$ est sur le cercle et dont l'arc intercepté est le petit arc $AB$ :
$$
m(\widehat{ACB}) = \frac{m(\text{petit arc } AB)}{2} = \frac{80°}{2} = 40°.
$$

- $\widehat{AOB}$ est un angle au centre : il vaut exactement l'arc intercepté :
$$
m(\widehat{AOB}) = 80°.
$$

On vérifie la propriété : $80° = 2 \times 40°$, l'angle au centre est bien le double de l'angle inscrit de même arc.

- Le grand arc $AB$ est le complément du petit arc dans le cercle :
$$
m(\text{grand arc } AB) = 360° - 80° = 280°.
$$

**2. $m(\widehat{AOB}) = 140°$, $D$ sur le grand arc.**

- L'angle au centre mesure exactement l'arc qu'il intercepte :
$$
m(\text{petit arc } AB) = 140°.
$$

- $\widehat{ADB}$ est un angle inscrit interceptant ce même petit arc $AB$ :
$$
m(\widehat{ADB}) = \frac{140°}{2} = 70°.
$$

**3. $m(\text{arc } AC) = 64°$, $m(\text{arc } CB) = 36°$, $D$ de l'autre côté de $(AB)$.**

- Les deux arcs sont adjacents, on les ajoute :
$$
m(\text{arc } AB) = 64° + 36° = 100°.
$$

- $\widehat{ADB}$ a son sommet $D$ sur le cercle et il intercepte l'arc $AB$ qui contient $C$ :
$$
m(\widehat{ADB}) = \frac{100°}{2} = 50°.
$$

- $\widehat{ADC}$ intercepte l'arc $AC$ (qui ne contient pas $D$) :
$$
m(\widehat{ADC}) = \frac{64°}{2} = 32°.
$$

Contrôle : $\widehat{CDB}$ intercepterait l'arc $CB$ et vaudrait $36° : 2 = 18°$ ; or $\widehat{ADB} = \widehat{ADC} + \widehat{CDB}$, soit $50° = 32° + 18°$. ✓

**4. $[AB]$ diamètre, $m(\text{arc } AC) = 70°$.**

- Comme $[AB]$ est un diamètre, le demi-cercle $ACB$ mesure $180°$. Donc :
$$
m(\text{arc } CB) = 180° - 70° = 110°.
$$

- $\widehat{ABC}$ (sommet $B$) intercepte l'arc $AC$ :
$$
m(\widehat{ABC}) = \frac{70°}{2} = 35°.
$$

- $\widehat{BAC}$ (sommet $A$) intercepte l'arc $CB$ :
$$
m(\widehat{BAC}) = \frac{110°}{2} = 55°.
$$

- $\widehat{BCA}$ est inscrit dans un demi-cercle ($[AB]$ est diamètre), donc il est droit :
$$
m(\widehat{BCA}) = 90°.
$$

Vérification de la somme des angles du triangle $ABC$ :
$$
35° + 55° + 90° = 180° \quad \checkmark
$$

:::remarque Contrôle rapide
Après chaque série de calculs, additionne les angles du triangle : si la somme fait $180°$, tes arcs étaient bien répartis. Si elle fait autre chose, un arc a été pris du mauvais côté de la corde.
:::
