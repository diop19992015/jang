---
titre: Type BFEM — Tarifs, graphique et problèmes
difficulte: 3
type: bfem
annee: 2023
indices:
  - L’équation d’une droite s’obtient à partir de deux points : $b$ est l’ordonnée à l’origine, $a = \dfrac{y_2 - y_1}{x_2 - x_1}$.
  - Pour l’antécédent, résous $ax + b = y_0$ ; pour l’image, remplace simplement $x$.
  - Dans un tarif par tranches, identifie d’abord la tranche dans laquelle se trouve la quantité demandée.
---

## Énoncé

Le sujet suivant reprend le format des épreuves de mathématiques du BFEM.

On considère un taxi de Dakar dont le prix $y$ (en FCFA) d’une course dépend de la distance $x$ (en km). Le graphe de cette application affine est une droite $(d)$ qui passe par les points $A(0\,; 500)$ et $B(10\,; 1500)$.

**Partie A.** (4 points)

1. Lire sur le graphe l’ordonnée à l’origine de la droite $(d)$ et l’interpréter dans le contexte. (1 point)
2. Déterminer le coefficient directeur de $(d)$, puis donner son équation sous la forme $y = ax+b$. (1,5 point)
3. Calculer le prix d’une course de $12$ km. (1,5 point)

**Partie B.** (3 points)

4. Dire si cette application est croissante ou décroissante, et justifier. (1 point)
5. Déterminer l’antécédent de $2000$. (1 point)
6. Déterminer l’image de l’intervalle $[0\,; 8]$. (1 point)

**Partie C.** (3 points)

Un coursier de Dakar propose ce tarif pour transporter un colis : $500$ FCFA pour les $2$ premiers kilogrammes, puis $300$ FCFA par kilogramme supplémentaire. On note $P$ le prix payé (en FCFA) pour un colis de $x$ kg.

7. Déterminer l’expression de $P(x)$ en fonction de $x$ selon les deux tranches. (1,5 point)
8. Quel est le prix d’un colis de $5$ kg ? (1,5 point)

## Solution

**1. Ordonnée à l’origine.**

Le point $A(0\,; 500)$ appartient à la droite : l’ordonnée à l’origine est donc $b = 500$.
Interprétation : c’est le prix payé **avant même de parcourir un kilomètre**, c’est-à-dire la **prise en charge** du taxi, qui vaut $500$ FCFA.

**2. Coefficient directeur et équation.**

La droite passe par $A(0\,; 500)$ et $B(10\,; 1500)$. Le coefficient directeur est :
$$
a = \frac{y_B - y_A}{x_B - x_A} = \frac{1500 - 500}{10 - 0} = \frac{1000}{10} = 100
$$
Interprétation : chaque kilomètre coûte $100$ FCFA. L’équation de la droite est donc :
$$
y = 100x + 500
$$

**3. Prix d’une course de $12$ km.**

On remplace $x$ par $12$ dans l’équation :
$$
y = 100 \times 12 + 500 = 1200 + 500 = 1700
$$
La course de $12$ km coûte **1700 FCFA**.

**4. Sens de variation.**

Le coefficient directeur $a = 100$ est **positif**, donc l’application affine est **croissante** : plus la distance est grande, plus le prix est élevé. Le graphique confirme : la droite $(d)$ monte de gauche à droite.

**5. Antécédent de $2000$.**

On résout $y = 2000$ :
$$
100x + 500 = 2000 \implies 100x = 1500 \implies x = 15
$$
L’antécédent de $2000$ est $x = 15$ : une course à $15$ km coûte exactement $2000$ FCFA.

**6. Image de $[0\,; 8]$.**

L’application est croissante, donc l’image de $[0\,; 8]$ est $[f(0)\,; f(8)]$ avec :
$$
f(0) = 500 \qquad f(8) = 100 \times 8 + 500 = 1300
$$
L’image de $[0\,; 8]$ est donc l’intervalle $[500\,; 1300]$ : pour des trajets de $0$ à $8$ km, le prix va de $500$ FCFA à $1300$ FCFA.

**7. Expressions de $P(x)$.**

- Première tranche ($0 \leqslant x \leqslant 2$) : prix fixe, l’application est constante :
$$
P(x) = 500
$$
- Seconde tranche ($x > 2$) : on ajoute $300$ FCFA pour chaque kilogramme au-delà de $2$ kg :
$$
P(x) = 500 + 300(x - 2)
$$
On peut développer : $P(x) = 300x - 100$ pour $x > 2$.

**8. Prix d’un colis de $5$ kg.**

$5$ kg appartient à la seconde tranche ($5 > 2$), donc on utilise la seconde expression :
$$
P(5) = 500 + 300 \times (5 - 2) = 500 + 300 \times 3 = 500 + 900 = 1400
$$
Le colis de $5$ kg coûte **1400 FCFA**.

:::erreur Pièges de l’épreuve
1. Utiliser $P(x) = 500x$ pour la seconde tranche : les $2$ premiers kg sont déjà payés au forfait.
2. Oublier la prise en charge $b = 500$ en lisant l’équation de la droite.
3. Donner l’image ou l’antécédent sans l’unité (FCFA), ce qui coûte le point de conclusion.
:::
