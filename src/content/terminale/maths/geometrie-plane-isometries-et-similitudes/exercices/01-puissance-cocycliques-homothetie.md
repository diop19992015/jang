---
titre: Cocycliques, puissance d'un point et homothétie
difficulte: 1
type: entrainement
indices:
  - Pour la cocyclicité, calcule les deux angles inscrits soutenant la même corde.
  - Pour la puissance, applique MA × MB = MC × MD sur les deux sécantes.
  - Pour l'homothétie, multiplie les coordonnées des points par le rapport k.
---

## Énoncé

On considère un cercle $\mathcal{C}$ de centre $O(0\,;\,0)$ et de rayon $R = 5$.

1. Le point $M(8\,;\,0)$ est-il extérieur, sur ou intérieur à $\mathcal{C}$ ? Calculer sa puissance $p(M)$.
2. Une sécante issue de $M$ coupe $\mathcal{C}$ en $A$ puis en $B$ avec $MA = 3$. Calculer $MB$.
3. Soient les points $A(3\,;\,4)$, $B(-3\,;\,4)$, $C(0\,;\,5)$ et $D(0\,;\,1)$ du plan. Vérifier que les points $A$, $B$, $C$, $D$ appartiennent tous au cercle de centre $O$ et de rayon $5$, puis conclure sur leur cocyclicité.
4. Soit $h$ l'homothétie de centre $O$ et de rapport $k = 2$. Calculer les coordonnées de $h(C)$ et $h(D)$, puis la longueur $h(C)h(D)$.

## Solution

**1. Puissance de $M$.**

La distance $OM$ vaut :

$$
OM = \sqrt{8^2 + 0^2} = 8 > 5 = R.
$$

Donc $M$ est **extérieur** au cercle. Sa puissance est :

$$
p(M) = OM^2 - R^2 = 64 - 25 = 39.
$$

**2. Longueur $MB$.**

Pour une sécante issue du point extérieur $M$ coupant le cercle en $A$ et $B$, la puissance s'écrit $MA \times MB = p(M)$ :

$$
3 \times MB = 39 \qquad \text{d'où} \qquad MB = 13.
$$

$MB > MA$ est cohérent : $B$ est plus loin que $A$ puisque $A$ est le premier point de la sécante.

**3. Cocyclicité de $A$, $B$, $C$, $D$.**

Calculons les distances à l'origine :

$$
OA = \sqrt{3^2 + 4^2} = \sqrt{25} = 5, \qquad
OB = \sqrt{(-3)^2 + 4^2} = 5,
$$

$$
OC = \sqrt{0^2 + 5^2} = 5, \qquad
OD = \sqrt{0^2 + 1^2} = 1.
$$

$A$, $B$ et $C$ sont à distance $5$ de $O$ : ils appartiennent au cercle $\mathcal{C}$. En revanche $OD = 1 \neq 5$ : le point $D$ **n'appartient pas** à $\mathcal{C}$.

**Conclusion :** $A$, $B$, $C$, $D$ ne sont **pas cocycliques** — il faudrait un cercle passant par $D$ et par $A$, $B$, $C$, mais trois points non alignés déterminent un seul cercle, celui de centre $O$ et de rayon $5$, qui ne passe pas par $D$. (Si $D$ avait été $(0\,;\,-5)$, les quatre points auraient été cocycliques.)

**4. Homothétie de rapport $2$.**

$h$ multiplie les vecteurs $\overrightarrow{OA}$ par $2$ :

$$
h(C) = (2 \times 0\,;\, 2 \times 5) = (0\,;\,10), \qquad
h(D) = (2 \times 0\,;\, 2 \times 1) = (0\,;\,2).
$$

La longueur $CD$ vaut $|5 - 1| = 4$ ; l'homothétie multiplie les longueurs par $|k| = 2$ :

$$
h(C)h(D) = 2 \times 4 = 8,
$$

ce qu'on vérifie directement : $|10 - 2| = 8$. ✓

:::remarque Réflexe
Vérifier l'appartenance à un cercle revient à calculer la distance au centre. Et la puissance d'un point se traduit toujours par un **produit de longueurs**, jamais par une somme.
:::
