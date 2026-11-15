---
titre: Sujet type BFEM — Thalès et Pythagore
difficulte: 3
type: bfem
annee: 2023
demo: true
indices:
  - Commence par calculer la longueur manquante avec Pythagore.
  - Vérifie ensuite que les droites sont parallèles avec la réciproque de Thalès.
  - Pour l'aire, utilise le coefficient d'agrandissement au carré.
---

## Énoncé

L'unité de longueur est le centimètre.

$ABC$ est un triangle rectangle en $A$ tel que $AB=9$ et $AC=12$.

1. Calculer $BC$.

2. Soit $M$ le point de $[AB]$ tel que $AM=3$, et $N$ le point de $[AC]$ tel que $AN=4$.
   a. Montrer que les droites $(MN)$ et $(BC)$ sont parallèles.
   b. Calculer $MN$.

3. Calculer l'aire du triangle $AMN$, puis en déduire l'aire du triangle $ABC$ à l'aide du coefficient de réduction.

4. Soit $P$ le point de $[BC]$ tel que $BP=5$. La parallèle à $(AC)$ passant par $P$ coupe $(AB)$ en $Q$. Calculer $BQ$ et $PQ$.

## Solution

**1. Calcul de $BC$.**

Le triangle $ABC$ est rectangle en $A$, donc d'après le théorème de Pythagore :
$$
BC^2 = AB^2 + AC^2 = 9^2 + 12^2 = 81 + 144 = 225.
$$

Donc :
$$
BC = \sqrt{225} = 15.
$$

**2. Parallélisme et longueur $MN$.**

**a.** Les points $A$, $M$, $B$ sont alignés dans cet ordre, et $A$, $N$, $C$ sont alignés dans cet ordre.

On calcule séparément les rapports :
$$
\frac{AM}{AB} = \frac{3}{9} = \frac{1}{3}
$$
$$
\frac{AN}{AC} = \frac{4}{12} = \frac{1}{3}
$$

Les deux rapports sont égaux et les points sont alignés dans le même ordre. D'après la **réciproque du théorème de Thalès**, les droites $(MN)$ et $(BC)$ sont parallèles.

**b.** On applique maintenant le théorème de Thalès :
$$
\frac{AM}{AB} = \frac{MN}{BC}
$$
$$
\frac{1}{3} = \frac{MN}{15}
$$
$$
MN = \frac{15}{3} = 5.
$$

Donc $MN=5$ cm.

**3. Aires.**

Le triangle $AMN$ est rectangle en $A$ (car $M \in [AB]$ et $N \in [AC]$, donc $(AM) \perp (AN)$). Son aire vaut :
$$
\mathcal{A}_{AMN} = \frac{AM \times AN}{2} = \frac{3 \times 4}{2} = 6 \text{ cm}^2.
$$

Le triangle $ABC$ est rectangle en $A$, d'aire :
$$
\mathcal{A}_{ABC} = \frac{AB \times AC}{2} = \frac{9 \times 12}{2} = 54 \text{ cm}^2.
$$

Le coefficient de réduction est $k=\dfrac{1}{3}$. On vérifie :
$$
\mathcal{A}_{ABC} \times k^2 = 54 \times \left(\frac{1}{3}\right)^2 = 54 \times \frac{1}{9} = 6 = \mathcal{A}_{AMN}.
$$

Le résultat est cohérent : l'aire est bien multipliée par $k^2$.

**4. Calcul de $BQ$ et $PQ$.**

Le point $P$ appartient à $[BC]$ avec $BP=5$. La parallèle à $(AC)$ passant par $P$ coupe $(AB)$ en $Q$.

Les droites $(PQ)$ et $(AC)$ sont parallèles. Les points $B$, $Q$, $A$ sont alignés et $B$, $P$, $C$ sont alignés. On applique le théorème de Thalès dans le triangle $BAC$ :
$$
\frac{BQ}{BA} = \frac{BP}{BC} = \frac{QP}{CA}.
$$

On connaît $BA=9$, $BP=5$ et $BC=15$ :
$$
\frac{BQ}{9} = \frac{5}{15} = \frac{1}{3}.
$$

Donc :
$$
BQ = \frac{9}{3} = 3.
$$

Et pour $PQ$ :
$$
\frac{PQ}{12} = \frac{1}{3} \implies PQ = 4.
$$

Ainsi $BQ=3$ cm et $PQ=4$ cm.

:::remarque Vérification finale
On remarque que $BQ=3$ et $PQ=4$ : le triangle $BPQ$ est rectangle en $Q$ et $BP=5$. On retrouve le triplet pythagoricien $3$–$4$–$5$, ce qui confirme les calculs.
:::

:::methode Ce que le correcteur attend
- Le calcul de $BC$ avec la rédaction de Pythagore.
- La comparaison des rapports pour la réciproque de Thalès, avec la mention de l'ordre des points.
- Les calculs d'aires avec les unités (cm²).
- L'utilisation explicite du coefficient $k^2$ pour l'aire.
:::
