---
titre: Calcul de longueurs avec Thalès
difficulte: 1
type: entrainement
demo: true
indices:
  - Écris d'abord les trois rapports de Thalès.
  - Choisis la paire de rapports qui contient la longueur cherchée.
  - Fais un produit en croix et vérifie l'unité.
---

## Énoncé

$ABC$ est un triangle tel que $AB=8$ cm et $AC=12$ cm.

Le point $M$ appartient au segment $[AB]$ avec $AM=3$ cm. La droite parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$.

1. Faire une figure à main levée.
2. Calculer la longueur $AN$.
3. On donne $BC=16$ cm. Calculer la longueur $MN$.
4. Calculer le rapport $\dfrac{AM}{AB}$ et en déduire le coefficient de réduction qui transforme le triangle $ABC$ en triangle $AMN$.

## Solution

**1. Figure.**

On trace le triangle $ABC$, on place $M$ sur $[AB]$ à $3$ cm de $A$, puis on trace la parallèle à $(BC)$ passant par $M$ ; elle coupe $[AC]$ en $N$.

**2. Calcul de $AN$.**

Comme $M \in [AB]$, $N \in [AC]$ et $(MN) \parallel (BC)$, on applique le théorème de Thalès :
$$
\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}.
$$

On utilise la paire $\dfrac{AM}{AB}=\dfrac{AN}{AC}$ :
$$
\frac{3}{8} = \frac{AN}{12}.
$$

Produit en croix :
$$
AN = \frac{3 \times 12}{8} = \frac{36}{8} = 4{,}5 \text{ cm}.
$$

**3. Calcul de $MN$.**

On utilise maintenant :
$$
\frac{AM}{AB} = \frac{MN}{BC}
$$
$$
\frac{3}{8} = \frac{MN}{16}
$$

Donc :
$$
MN = \frac{3 \times 16}{8} = \frac{48}{8} = 6 \text{ cm}.
$$

**4. Coefficient de réduction.**

$$
\frac{AM}{AB} = \frac{3}{8} = 0{,}375.
$$

Le triangle $AMN$ est donc une réduction du triangle $ABC$ de coefficient $k=\dfrac{3}{8}=0{,}375$.

On peut vérifier la cohérence : $AN = 0{,}375 \times 12 = 4{,}5$ cm et $MN = 0{,}375 \times 16 = 6$ cm. Les deux résultats sont confirmés.

:::remarque Vérification rapide
Toutes les longueurs du petit triangle doivent être égales à celles du grand multipliées par $0{,}375$. Cette vérification permet de détecter immédiatement une erreur de calcul.
:::
