---
titre: Calculer côtés et angles d'un triangle rectangle
difficulte: 1
type: entrainement
indices:
  - Dessine le triangle et nomme hypoténuse, côté opposé et côté adjacent à l'angle étudié.
  - Choisis le rapport (cos, sin ou tan) qui relie le connu à l'inconnue.
  - Pour un angle, calcule d'abord le rapport puis utilise la touche inverse (cos⁻¹, sin⁻¹ ou tan⁻¹).
---

## Énoncé

L'unité de longueur est le centimètre. Sauf mention contraire, arrondis au dixième.

1. $ABC$ est un triangle rectangle en $A$ avec $AB = 6$ cm et l'angle $B = 45°$.
   - Repérer l'hypoténuse, le côté opposé et le côté adjacent à l'angle $B$.
   - Calculer $BC$ puis $AC$.

2. $DEF$ est un triangle rectangle en $E$ avec $EF = 8$ cm et $DF = 17$ cm.
   - Calculer $\cos F$ et en déduire la mesure de l'angle $F$.
   - Calculer $DE$.

3. $LMN$ est un triangle rectangle en $N$ avec $LN = 5\sqrt{3}$ cm et $MN = 5$ cm.
   - Calculer $LM$.
   - Calculer $\sin M$ et en déduire la mesure de l'angle $M$.

4. Un arbre du jardin du collège projette une ombre de $9$ m alors que l'angle des rayons du soleil avec le sol est de $45°$. Calculer la hauteur de l'arbre.

## Solution

**1. Triangle $ABC$ rectangle en $A$, $AB=6$ cm, $\angle B = 45°$.**

- Hypoténuse : $[BC]$ (opposée à l'angle droit $A$).
- Pour l'angle $B$ : côté adjacent = $[AB]$, côté opposé = $[AC]$.

Le côté connu est l'adjacent et l'hypoténuse est cherchée : on utilise le cosinus.
$$
\cos 45° = \frac{AB}{BC} = \frac{6}{BC}
$$
$$
BC = \frac{6}{\cos 45°} = \frac{6}{\dfrac{\sqrt{2}}{2}} = \frac{12}{\sqrt{2}} = 6\sqrt{2} \approx 8{,}5 \text{ cm}.
$$

Pour $AC$, on utilise la tangente :
$$
\tan 45° = \frac{AC}{AB} \implies AC = 6 \times 1 = 6 \text{ cm}.
$$

Vérification Pythagore : $6^2 + 6^2 = 72 = (6\sqrt{2})^2$. ✓ Le triangle $ABC$ est bien isocèle rectangle, ce qui est normal pour un angle de $45°$.

**2. Triangle $DEF$ rectangle en $E$, $EF=8$ cm, $DF=17$ cm.**

$EF$ est adjacent à l'angle $F$ (car l'hypoténuse est $[DF]$, opposée à l'angle droit $E$) :
$$
\cos F = \frac{EF}{DF} = \frac{8}{17} \approx 0{,}47.
$$
$$
F = \cos^{-1}\left(\frac{8}{17}\right) \approx \cos^{-1}(0{,}47) \approx 61{,}9° \approx 62°.
$$

$DE$ est le côté opposé à $F$ : on utilise le théorème de Pythagore :
$$
DF^2 = DE^2 + EF^2 \implies 17^2 = DE^2 + 8^2
$$
$$
DE^2 = 289 - 64 = 225 \implies DE = \sqrt{225} = 15 \text{ cm}.
$$

Vérification avec le sinus : $\sin F = \dfrac{15}{17} \approx 0{,}88$ et $\sin^{-1}(0{,}88) \approx 61{,}9°$. ✓

**3. Triangle $LMN$ rectangle en $N$, $LN=5\sqrt{3}$ cm, $MN=5$ cm.**

Pythagore (l'angle droit est en $N$, donc l'hypoténuse est $[LM]$) :
$$
LM^2 = LN^2 + MN^2 = (5\sqrt{3})^2 + 5^2 = 75 + 25 = 100 \implies LM = 10 \text{ cm}.
$$

L'angle $M$ a pour côté opposé $[LN]$ et pour adjacent $[MN]$ :
$$
\sin M = \frac{LN}{LM} = \frac{5\sqrt{3}}{10} = \frac{\sqrt{3}}{2}.
$$

D'après le tableau des valeurs remarquables :
$$
M = \sin^{-1}\left(\frac{\sqrt{3}}{2}\right) = 60°.
$$

Remarque : $\tan M = \dfrac{5\sqrt{3}}{5} = \sqrt{3}$, ce qui confirme $M = 60°$.

**4. L'arbre et son ombre.**

L'arbre est perpendiculaire au sol : le triangle formé est rectangle. Le côté adjacent à l'angle de $45°$ est l'ombre ($9$ m) et l'opposé est la hauteur $h$ :
$$
\tan 45° = \frac{h}{9} \implies h = 9 \times \tan 45° = 9 \times 1 = 9 \text{ m}.
$$

Avec un angle de $45°$, la hauteur de l'arbre est exactement égale à la longueur de son ombre : $9$ m.

:::remarque Vérification générale
Après chaque calcul, pose-toi trois questions : l'angle obtenu est-il aigu ? l'unité est-elle juste ? l'ordre de grandeur est-il plausible (l'hypoténuse est toujours le plus long côté) ?
:::
