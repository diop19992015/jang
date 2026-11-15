---
titre: Sujet type BFEM — Trigonométrie et hauteurs
difficulte: 3
type: bfem
annee: 2023
indices:
  - Repère d'abord le triangle rectangle et nomme les trois côtés pour chaque angle utilisé.
  - Utilise le tableau des valeurs remarquables pour la partie A avant la calculatrice.
  - Pour la hauteur de la tour, applique la tangente : hauteur = distance × tan(angle).
---

## Énoncé

L'unité de longueur est le mètre. Tu peux utiliser une calculatrice.

$ABC$ est un triangle rectangle en $A$ tel que $AB = 12$ m et $AC = 5$ m. L'angle $B$ est aigu.

**Partie A.** (3 points)
1. Calculer $BC$.
2. Calculer $\tan B$ et $\cos B$.
3. Calculer la mesure de l'angle $B$ à $0{,}1°$ près.

**Partie B.** (3 points)

On donne $BC = 13$ m dans un triangle $A'BC$ rectangle en $A'$ avec $A'B = 5$ m.

4. Calculer $\sin C$ dans ce triangle.
5. En déduire la mesure de l'angle $C$.

**Partie C.** (4 points)

Au marché de Sandaga à Dakar, Fatou observe le sommet d'un mât éclairé depuis un point $M$ situé à $60$ m du pied du mât. Elle mesure un angle d'élévation de $60°$ (figure : le mât est perpendiculaire au sol).

6. Tracer la figure et indiquer le triangle rectangle.
7. Calculer la hauteur $h$ du mât (donnée : $\tan 60° = \sqrt{3} \approx 1{,}73$).
8. Le mât mesure en réalité $105$ m ; proposer une explication à l'écart entre la hauteur calculée et la hauteur réelle.

## Solution

**1. Calcul de $BC$ (Pythagore).**

Le triangle $ABC$ est rectangle en $A$, donc l'hypoténuse est $[BC]$ :
$$
BC^2 = AB^2 + AC^2 = 12^2 + 5^2 = 144 + 25 = 169.
$$
$$
BC = \sqrt{169} = 13 \text{ m}.
$$

**2. Calcul de $\tan B$ et $\cos B$.**

Pour l'angle $B$ : côté adjacent = $AB = 12$, côté opposé = $AC = 5$, hypoténuse = $BC = 13$.
$$
\tan B = \frac{AC}{AB} = \frac{5}{12} \approx 0{,}42
$$
$$
\cos B = \frac{AB}{BC} = \frac{12}{13} \approx 0{,}92
$$

**3. Mesure de l'angle $B$.**

$$
B = \tan^{-1}\left(\frac{5}{12}\right) \approx \tan^{-1}(0{,}417) \approx 22{,}6°
$$

Vérification avec le cosinus : $B = \cos^{-1}(0{,}923) \approx 22{,}6°$. ✓

*(Barème : 1 point Pythagore + 0,5 point chaque rapport + 1 point pour la mesure de l'angle.)*

**4. Calcul de $\sin C$.**

Dans le triangle $A'BC$ rectangle en $A'$, l'hypoténuse est $[BC]=13$ et le côté opposé à $C$ est $A'B = 5$ :
$$
\sin C = \frac{A'B}{BC} = \frac{5}{13} \approx 0{,}38.
$$

**5. Mesure de l'angle $C$.**

$$
C = \sin^{-1}\left(\frac{5}{13}\right) \approx \sin^{-1}(0{,}385) \approx 22{,}6°.
$$

Remarque : dans un triangle rectangle, les deux angles aigus sont complémentaires. On trouve $C \approx 67{,}4°$ et $22{,}6° + 67{,}4° = 90°$, ce qui confirme le calcul.

*(Barème : 1 point pour le rapport + 1 point pour l'angle.)*

**6. Figure.**

On trace le sol horizontal, le mât vertical $[PS]$ (le mât est perpendiculaire au sol, donc l'angle en $P$ est droit), le point $M$ situé à $60$ m du pied $P$, et la ligne de visée $[MS]$ vers le sommet. Le triangle $MPS$ est rectangle en $P$, avec l'angle d'élévation $\widehat{SMP} = 60°$.

**7. Calcul de la hauteur $h$.**

Le côté adjacent à $60°$ est la distance au sol ($60$ m), l'opposé est la hauteur $h$ :
$$
\tan 60° = \frac{h}{60}
$$
$$
h = 60 \times \tan 60° = 60 \times \sqrt{3} \approx 60 \times 1{,}73 = 103{,}8 \text{ m}.
$$

La hauteur calculée est donc environ $104$ m.

**8. Explication de l'écart.**

Le calcul donne $103{,}8$ m alors que le mât mesure $105$ m : l'écart d'environ $1$ m s'explique par les approximations utilisées ($\sqrt{3} \approx 1{,}73$ au lieu de $1{,}7320\ldots$ donne $103{,}92$ m), par l'angle relevé « à l'œil » avec un rapporteur (une erreur de $1°$ suffit à décaler le résultat de plus d'un mètre) et par le fait que la distance est mesurée depuis les yeux de Fatou et non depuis le pied exact du mât. La précision d'une mesure terrain est toujours limitée : ce genre de remarque est attendu par le correcteur.

*(Barème Partie C : 1 point figure + 2 points calcul + 1 point interprétation.)*

:::methode Ce que le correcteur attend
- La rédaction de Pythagore avec le calcul des carrés.
- Les rapports trigonométriques **accompagnés de l'angle** ($\tan B = \dots$) et des côtés nommés (adjacent, opposé, hypoténuse).
- L'usage des touches inverses avec la calculatrice en degrés.
- Une réponse interprétative en phrase complète pour la question ouverte.
:::

:::erreur Piège classique de ce sujet
L'angle d'élévation se mesure entre l'horizontale et la ligne de visée : la hauteur s'obtient avec la **tangente** ($h = d \times \tan \alpha$), pas avec la tangente inversée. Si l'on écrit $h = \dfrac{60}{\tan 60°}$, on trouve environ $34{,}6$ m : ce résultat est faux, mais il passe « inaperçu » si l'on ne vérifie pas l'ordre de grandeur (la hauteur se rapproche toujours du côté de l'angle aigu le plus grand, et l'objet vertical est en face de l'angle) !
:::
