---
titre: Sujet type BAC — Plan, distances et volume dans l'espace
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour l'équation du plan, calcule d'abord deux vecteurs du plan puis leur produit vectoriel comme normale.
  - Pour le parallélisme, compare la normale du plan au vecteur directeur de la droite.
  - Pour le volume, utilise le produit mixte des trois vecteurs issus d'un même sommet divisé par 6.
  - Pour la dernière question, calcule le produit mixte après avoir substitué l'inconnue.
---

## Énoncé

On considère les points $A(1\,;\,0\,;\,2)$, $B(2\,;\,1\,;\,0)$ et $C(0\,;\,2\,;\,1)$.

**Partie A — Équation d'un plan**

1. Calculer les vecteurs $\vec{AB}$ et $\vec{AC}$, puis un vecteur normal $\vec{n}$ au plan $(ABC)$.
2. Donner une équation cartésienne du plan $(ABC)$.

**Partie B — Position relative d'une droite**

3. Soit $(\Delta)$ la droite passant par $D(1\,;\,1\,;\,2)$ de vecteur directeur $\vec{d} = (1\,;\,-1\,;\,0)$. Montrer que $(\Delta)$ est **parallèle** au plan $(ABC)$.

**Partie C — Volumes**

4. On considère le point $E(1\,;\,1\,;\,3)$. Calculer le volume du tétraèdre $ABCE$.
5. Déterminer la valeur du réel $k$ pour laquelle le point $F(k\,;\,0\,;\,0)$ appartient au plan $(ABC)$.

## Solution

**Partie A**

**1.** Vecteurs du plan :

$$
\vec{AB} = (2 - 1\,;\, 1 - 0\,;\, 0 - 2) = (1\,;\,1\,;\,-2),
$$

$$
\vec{AC} = (0 - 1\,;\, 2 - 0\,;\, 1 - 2) = (-1\,;\,2\,;\,-1).
$$

Vecteur normal par produit vectoriel :

$$
\vec{n} = \vec{AB} \wedge \vec{AC} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
1 & 1 & -2 \\
-1 & 2 & -1
\end{vmatrix}.
$$

Calcul :

$$
\vec{n} = (1 \times (-1) - (-2) \times 2)\,\vec{i} - (1 \times (-1) - (-2) \times (-1))\,\vec{j} + (1 \times 2 - 1 \times (-1))\,\vec{k}
$$

$$
\vec{n} = (-1 + 4)\,\vec{i} - (-1 - 2)\,\vec{j} + (2 + 1)\,\vec{k} = (3\,;\,3\,;\,3).
$$

On peut simplifier : $\vec{n} = (1\,;\,1\,;\,1)$ est aussi normal au plan.

**Vérification :** $(1\,;\,1\,;\,1) \cdot (1\,;\,1\,;\,-2) = 1 + 1 - 2 = 0$ ✓ et $(1\,;\,1\,;\,1) \cdot (-1\,;\,2\,;\,-1) = -1 + 2 - 1 = 0$ ✓.

**2.** Le plan passe par $A(1\,;\,0\,;\,2)$ et a pour normale $\vec{n} = (1\,;\,1\,;\,1)$ :

$$
1(x - 1) + 1(y - 0) + 1(z - 2) = 0,
$$

soit

$$
x + y + z - 3 = 0, \qquad \text{c'est-à-dire} \qquad x + y + z = 3.
$$

**Vérification avec $B$ :** $2 + 1 + 0 = 3$ ✓ ; avec $C$ : $0 + 2 + 1 = 3$ ✓.

**Partie B**

**3.** La droite $(\Delta)$ est parallèle au plan $(ABC)$ si son vecteur directeur est **orthogonal à la normale** du plan, et si le point $D$ n'appartient pas au plan (sinon la droite serait contenue dans le plan).

*Premier point :*

$$
\vec{d} \cdot \vec{n} = (1\,;\,-1\,;\,0) \cdot (1\,;\,1\,;\,1) = 1 - 1 + 0 = 0.
$$

Donc $\vec{d} \perp \vec{n}$ : la droite est **parallèle au plan** ou **contenue** dans le plan.

*Second point :* $D$ vérifie-t-il l'équation $x + y + z = 3$ ?

$$
1 + 1 + 2 = 4 \neq 3,
$$

donc $D \notin (ABC)$. La droite, de vecteur directeur orthogonal à la normale et passant par un point hors du plan, lui est **strictement parallèle** :

$$
(\Delta) \parallel (ABC).
$$

**Partie C**

**4.** Vecteurs issus de $A$ :

$$
\vec{AB} = (1\,;\,1\,;\,-2), \qquad
\vec{AC} = (-1\,;\,2\,;\,-1), \qquad
\vec{AE} = (1 - 1\,;\,1 - 0\,;\,3 - 2) = (0\,;\,1\,;\,1).
$$

Produit mixte :

$$
[\vec{AB}, \vec{AC}, \vec{AE}] =
\begin{vmatrix}
1 & 1 & -2 \\
-1 & 2 & -1 \\
0 & 1 & 1
\end{vmatrix}.
$$

Développement selon la première ligne :

$$
= 1 \times \begin{vmatrix} 2 & -1 \\ 1 & 1 \end{vmatrix}
- 1 \times \begin{vmatrix} -1 & -1 \\ 0 & 1 \end{vmatrix}
+ (-2) \times \begin{vmatrix} -1 & 2 \\ 0 & 1 \end{vmatrix}
$$

$$
= 1 \times (2 + 1) - 1 \times (-1 - 0) - 2 \times (-1 - 0) = 3 + 1 + 2 = 6.
$$

Volume du tétraèdre :

$$
V_{ABCE} = \frac{|6|}{6} = 1.
$$

**5.** $F(k\,;\,0\,;\,0)$ appartient au plan $(ABC)$ d'équation $x + y + z = 3$ si et seulement si :

$$
k + 0 + 0 = 3, \qquad \text{c'est-à-dire} \qquad k = 3.
$$

Donc $F(3\,;\,0\,;\,0)$.

:::methode Ce que le correcteur attend
- Deux vecteurs du plan calculés, puis un produit vectoriel **vérifié** (produits scalaires nuls) avant de l'utiliser comme normale.
- Équation obtenue avec un point du plan, puis **vérification** avec un second point.
- Position relative justifiée par le produit scalaire $\vec{d} \cdot \vec{n}$ (parallèle $\iff$ nul) et, si besoin, l'appartenance du point.
- Volume : produit mixte des vecteurs issus d'un **même** sommet, divisé par $6$.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points (2 + 2). Partie B : 2 points. Partie C : 4 points (3 + 1). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
