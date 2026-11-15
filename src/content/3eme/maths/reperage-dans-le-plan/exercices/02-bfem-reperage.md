---
titre: Sujet type BFEM — Repérage, distance et échelle
difficulte: 3
type: bfem
annee: 2023
indices:
  - Note l’unité du repère (10 km) avant tout calcul : la distance calculée est en unités, pas en kilomètres.
  - Pour la partie B, utilise la réciproque du théorème de Pythagore.
  - Pour l’échelle, établis une proportion entre la longueur sur la carte et la distance réelle.
---

## Énoncé

Sur un plan de la ville, on a posé un repère orthogonal $(O\,;\,x\,;\,y)$ dont l’unité vaut **10 km**. La gare routière de Dakar est repérée par $D(0\,;\,0)$, celle de Thiès par $T(6\,;\,2)$ et une station-service $S$ par $S(2\,;\,4)$.

**Partie A.** (3 points)
1. Calculer la distance $DT$ entre les deux gares, puis donner le résultat en kilomètres, arrondi à l’unité.
2. Donner les coordonnées du milieu $M$ du segment $[DT]$ et interpréter ce point.

**Partie B.** (4 points)
3. Calculer $DS^2$ puis $ST^2$.
4. Montrer que le triangle $DST$ est rectangle en $S$.

**Partie C.** (3 points)
5. Sur la carte, la longueur du segment $[DT]$ mesure $6{,}3$ cm. Déterminer l’échelle du plan (exprimée en 1 : …).
6. En déduire la distance réelle entre Dakar et Thiès, en kilomètres.

## Solution

**1. Calcul de $DT$.**

Les coordonnées sont $D(0\,;\,0)$ et $T(6\,;\,2)$. On applique la formule de distance :
$$
DT = \sqrt{(6 - 0)^2 + (2 - 0)^2}
$$
$$
DT = \sqrt{6^2 + 2^2} = \sqrt{36 + 4} = \sqrt{40}
$$
$$
DT \approx 6{,}32 \text{ unités}
$$

Chaque unité vaut $10$ km, donc :
$$
DT \approx 6{,}32 \times 10 = 63{,}2 \text{ km} \approx 63 \text{ km}
$$

La distance entre les deux gares est d’environ **63 km**.

**2. Milieu $M$ de $[DT]$.**

$$
x_M = \frac{0 + 6}{2} = 3 \qquad y_M = \frac{0 + 2}{2} = 1
$$

Donc $M(3\,;\,1)$. Ce point se trouve à $3$ unités à droite et $1$ unité au-dessus de $D$ : c’est le **milieu du trajet Dakar–Thiès**, à environ $31{,}5$ km de chaque gare.

**3. Calcul de $DS^2$ et $ST^2$.**

Avec $D(0\,;\,0)$ et $S(2\,;\,4)$ :
$$
DS^2 = (2 - 0)^2 + (4 - 0)^2 = 2^2 + 4^2 = 4 + 16 = 20
$$

Avec $S(2\,;\,4)$ et $T(6\,;\,2)$ :
$$
ST^2 = (6 - 2)^2 + (2 - 4)^2 = 4^2 + (-2)^2 = 16 + 4 = 20
$$

**4. Triangle $DST$ rectangle en $S$.**

On calcule de même :
$$
DT^2 = (6 - 0)^2 + (2 - 0)^2 = 36 + 4 = 40
$$

On observe que
$$
DS^2 + ST^2 = 20 + 20 = 40 = DT^2
$$

D’après la **réciproque du théorème de Pythagore**, si la somme des carrés de deux côtés du triangle $DST$ est égale au carré du troisième côté, alors le triangle est rectangle. Ici l’hypoténuse est $[DT]$ (c’est le plus grand côté), donc le triangle $DST$ est **rectangle en $S$**.

**5. Échelle du plan.**

On a trouvé $DT \approx 6{,}32$ unités, soit $63{,}2$ km, et on mesure $6{,}3$ cm sur la carte. Donc :
$$
6{,}3 \text{ cm} \longleftrightarrow 63 \text{ km}
$$

On divise les deux membres par $6{,}3$ :
$$
1 \text{ cm} \longleftrightarrow 10 \text{ km}
$$

$10$ km = $10\,000$ m = $1\,000\,000$ cm, donc l’échelle du plan est :
$$
1 : 1\,000\,000
$$

**6. Distance réelle.**

L’échelle $1:1\,000\,000$ signifie que $1$ cm sur la carte représente $10$ km dans la réalité. Le trajet mesurant $6{,}3$ cm :
$$
6{,}3 \times 10 = 63 \text{ km}
$$

La distance réelle entre Dakar et Thiès est d’environ **63 km**, ce qui confirme le résultat de la question 1.

:::methode Ce que le correcteur attend
- **Partie A (3 pts)** : formule de distance posée et résultat en unités (1 pt), conversion en km avec l’unité du repère (1 pt), coordonnées du milieu et interprétation (1 pt).
- **Partie B (4 pts)** : calcul de $DS^2$ (1 pt), calcul de $ST^2$ (1 pt), comparaison avec $DT^2$ (1 pt), conclusion citant la réciproque de Pythagore en rectangle en $S$ (1 pt).
- **Partie C (3 pts)** : proportion $6{,}3$ cm ↔ $63$ km et passage à $1$ cm (2 pts), échelle $1:1\,000\,000$ et distance de $63$ km (1 pt).
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de convertir : $\sqrt{40}$ n’est pas $63$ km, ce sont $6{,}32$ **unités** à multiplier par $10$ km.
2. Dans la partie B, écrire que le triangle est « rectangle en $O$ » au lieu de rectangle en $S$ : l’angle droit est au sommet opposé à l’hypoténuse $[DT]$.
3. Confondre l’échelle $1:1\,000\,000$ avec $1$ cm = $1$ km.
:::
