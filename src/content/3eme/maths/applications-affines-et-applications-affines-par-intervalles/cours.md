---
titre: Applications affines et applications affines par intervalles
accroche: Programme officiel — Activités numériques.
ordre: 2
duree: 90
demo: false
objectifs:
  - Reconnaître et écrire une application affine y = ax + b
  - Construire le graphe d’une application affine et lire son sens de variation
  - Déterminer images et antécédents sur un intervalle
  - Résoudre un problème par une application affine
---

:::remarque À quoi ça sert au BFEM ?
Les applications affines servent à modéliser la vie courante : prix d’une course de taxi, salaire avec commission, température, échelle d’une carte. Le BFEM demande de reconnaître $y = ax+b$, de lire un graphe (sens de variation, image, antécédent), puis de résoudre un problème en quelques lignes. C’est un exercice noté et très accessible : il suffit d’identifier $a$ et $b$.
:::

## Reconnaître une application affine

:::definition Application affine
Une **application affine** associe à tout nombre $x$ un nombre $y$ de la forme
$$
y = ax + b
$$
où $a$ et $b$ sont deux nombres fixés. On appelle $a$ le **coefficient directeur** et $b$ le **terme constant** (ordonnée à l’origine).
:::

:::exemple Reconnaître la forme $y = ax+b$
- $y = 3x + 2$ : affine avec $a = 3$ et $b = 2$.
- $y = -2x + 5$ : affine avec $a = -2$ et $b = 5$ (le coefficient directeur peut être négatif).
- $y = 100x$ : affine avec $a = 100$ et $b = 0$ (c’est un cas particulier : proportionnalité).
- $y = x^2 + 1$ : **pas affine**, car $x$ est élevé au carré.
:::

:::erreur Attention à la forme
La variable $x$ ne doit être multipliée que par un nombre et non par un carré ou un produit de deux inconnues. Seules les expressions $ax+b$ (et $ax$) sont affines. Vérifie aussi que $b$ est bien **ajouté** : dans $y = 4(x+3)$, on développe d’abord : $y = 4x + 12$, affine avec $a = 4$ et $b = 12$.
:::

## Table de valeurs

:::methode Remplir une table de valeurs
1. Choisir des valeurs de $x$ (souvent $-2$, $-1$, $0$, $1$, $2$ ou les bornes de l’intervalle donné).
2. Pour chaque valeur, calculer $ax + b$.
3. Aligner les résultats : un calcul faux dans la table fausse tout le graphe.
:::

:::exemple Table de $y = 2x - 1$
| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- |
| $y$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Détail : pour $x = -2$, $y = 2 \times (-2) - 1 = -4 - 1 = -5$ ; pour $x = 3$, $y = 2 \times 3 - 1 = 5$.
:::

## Le graphe d’une application affine

:::definition Géométrie du graphe
Le graphe d’une application affine est une **droite**. Deux suffisent à la tracer : on utilise presque toujours les points d’abscisse $0$ (l’ordonnée à l’origine $y = b$) et $1$ (l’image $y = a+b$).
:::

:::methode Construire le graphe
1. Établir la table de valeurs sur l’intervalle donné.
2. Reporter les points $M_i(x_i\,; y_i)$ dans un repère.
3. Tracer la droite passant par les points (ou le segment si l’application n’est définie que sur un intervalle).
4. Écrire l’équation $y = ax+b$ à côté de la droite.
:::

:::exemple Tracer $y = 2x - 1$
Points à reporter : $A(0\,; -1)$, $B(1\,; 1)$, $C(2\,; 3)$, $D(-1\,; -3)$.

La droite passe par $A(0\,; -1)$, donc $b = -1$. Elle monte vers la droite puisqu’à chaque fois que $x$ augmente de $1$, $y$ augmente de $2$ : c’est le coefficient directeur $a = 2$.
:::

:::remarque Ce que donne $a$ et $b$ sur le graphe
- $b$ : le point où la droite coupe l’axe des ordonnées, le point d’abscisse $0$.
- $a$ : la **pente**. Si $x$ avance de $1$, $y$ avance de $a$. Si $a = 2$, on monte de $2$ unités à chaque pas.
:::

## Sens de variation

:::formule Sens de variation d’une application affine
- Si $a > 0$, l’application est **croissante** : quand $x$ augmente, $y$ augmente.
- Si $a < 0$, l’application est **décroissante** : quand $x$ augmente, $y$ diminue.
- Si $a = 0$, l’application est **constante** ($y = b$).
:::

:::exemple Lire la variation
Pour $y = -2x + 5$ : le coefficient directeur $a = -2$ est négatif, donc l’application est **décroissante**. Sur la table, $x$ valant $0$, $1$, $2$ donne $y = 5$, $3$, $1$ : bien décroissant.
:::

:::piege Ne pas se tromper de signe
Dans $y = -2x + 5$, le $5$ ne joue aucun rôle dans la variation : seule la valeur de $a$ compte. Une droite qui descend de gauche à droite correspond toujours à un coefficient directeur négatif.
:::

## Images et antécédents

:::definition Image et antécédent
- L’**image** de $c$ est le nombre $y$ obtenu en posant $x = c$ : $y = ac + b$.
- Un nombre $d$ est l’**antécédent** de $y_0$ si $ad + b = y_0$.
:::

:::methode Calculer une image et un antécédent
1. Image de $c$ : remplacer $x$ par $c$ dans $ax+b$, puis calculer.
2. Antécédent de $y_0$ : résoudre l’équation $ax + b = y_0$, soit $x = \dfrac{y_0 - b}{a}$.
:::

:::exemple Application affine $y = 3x + 2$
- Image de $4$ : $y = 3 \times 4 + 2 = 14$.
- Image de $-1$ : $y = 3 \times (-1) + 2 = -1$.
- Antécédent de $14$ : $3x + 2 = 14$, donc $3x = 12$, soit $x = 4$.
- Antécédent de $-7$ : $3x + 2 = -7$, donc $3x = -9$, soit $x = -3$.
:::

:::erreur Image et antécédent se confondent facilement
Si on te demande l’image de $4$, tu **remplaces $x$**. Si on te demande l’antécédent de $14$, tu **résous une équation**. Relis bien la question : « image » = calcul direct, « antécédent » = équation à résoudre.
:::

:::remarque Sur un intervalle
Si $a > 0$ et $x$ parcourt $[c\,; d]$, alors $y$ parcourt l’intervalle $[f(c)\,; f(d)]$.
Si $a < 0$, l’image de $[c\,; d]$ est $[f(d)\,; f(c)]$ : les bornes sont inversées, car l’application est décroissante.
:::

:::exemple Image d’un intervalle
Pour $y = 2x - 1$ avec $x \in [0\,; 3]$ : comme $a = 2 > 0$, l’image est
$$
[2 \times 0 - 1\,;\ 2 \times 3 - 1] = [-1\,;\ 5]
$$
Tout nombre compris entre $-1$ et $5$ a donc au moins un antécédent dans $[0\,; 3]$.
:::

## Applications affines par intervalles

:::definition Application affine par intervalles
Une application affine par intervalles donne **une expression différente selon la valeur de $x$**. Chaque expression est affine sur son propre intervalle.
:::

:::exemple Tarif d’une station-service à Dakar
On vend l’essence $750$ FCFA le litre pour les $20$ premiers litres, puis $700$ FCFA le litre au-delà. Le prix $P$ (en FCFA) pour $x$ litres vaut :
$$
P(x) = 750x \quad \text{si} \quad 0 \leqslant x \leqslant 20
$$
$$
P(x) = 15000 + 700(x - 20) \quad \text{si} \quad x > 20
$$

- Pour $x = 12$ L : $P = 750 \times 12 = 9000$ FCFA.
- Pour $x = 25$ L : $P = 15000 + 700 \times 5 = 18500$ FCFA.
:::

:::methode Résoudre avec une application par intervalles
1. Déterminer **dans quel intervalle** se place la valeur demandée.
2. Appliquer **l’expression correspondante** uniquement.
3. Vérifier que le résultat obtenu est bien cohérent avec l’intervalle choisi.
:::

:::piege Choisir la mauvaise expression
Pour $x = 25$ litres, il faut utiliser la seconde expression : utiliser $750 \times 25 = 18750$ FCFA est faux, car les $20$ premiers litres ne coûtent pas au même prix que les suivants.
:::

## Résoudre un problème par une application affine

:::methode Méthode en cinq étapes
1. Choisir les deux variables : $x$ (ce qu’on connaît) et $y$ (ce qu’on cherche).
2. Écrire la forme $y = ax+b$.
3. Déterminer $a$ et $b$ à partir de deux situations données (ou d’un graphique).
4. Remplacer $x$ par la valeur demandée, ou résoudre $ax+b = y$.
5. Écrire la réponse finale **avec son unité**.
:::

:::exemple Problème de course (transport)
À Dakar, un taxi facture une prise en charge de $500$ FCFA, puis $100$ FCFA par kilomètre. Quelle est la course pour $12$ km ?

1. $x$ = distance en km, $y$ = prix en FCFA.
2. $y = ax + b$ avec $b = 500$ (prise en charge) et $a = 100$ (prix par km) :
$$
y = 100x + 500
$$
3. Pour $x = 12$ :
$$
y = 100 \times 12 + 500 = 1200 + 500 = 1700
$$
Réponse : la course coûte **1700 FCFA**.
:::

:::exemple Problème de thermomètre
Dans un thermomètre, la colonne mesure $10$ mm à $0\,°$C et augmente de $2$ mm par degré. Notons $y$ la longueur en mm et $x$ la température en degrés.

- Relation : $y = 2x + 10$.
- Température quand $y = 52$ mm :
$$
2x + 10 = 52 \implies 2x = 42 \implies x = 21
$$
Réponse : il fait $21\,°$C.
:::

:::exemple Échelle d’une carte
Sur une carte du Sénégal au $1 : 2\,500\,000$, $1$ cm de carte représente $25$ km. La distance réelle $D$ (en km) et la longueur sur la carte $x$ (en cm) vérissent :
$$
D = 25x
$$
Si la distance Dakar–Thiès mesure $7$ cm sur la carte :
$$
D = 25 \times 7 = 175 \text{ km}
$$
:::

:::erreur Les trois erreurs classiques du problème
1. Oublier le terme constant $b$ (la prise en charge, le fixe, l’ordonnée à l’origine).
2. Donner un résultat sans unité (FCFA, mm, km, cm).
3. Oublier de répondre à la question posée : si on demande « quand paie-t-on moins de 2000 FCFA ? », il faut résoudre $100x + 500 \leqslant 2000$ et conclure avec une phrase.
:::

## Ce qu’il faut retenir

- Une application affine s’écrit $y = ax + b$ : $a$ est le coefficient directeur, $b$ le terme constant.
- Le graphe est une **droite** : deux points suffisent pour la tracer.
- $a > 0$ : croissante ; $a < 0$ : décroissante ; $b$ : point d’intersection avec l’axe des ordonnées.
- **Image** de $c$ : on remplace $x$ par $c$. **Antécédent** de $y_0$ : on résout $ax+b = y_0$.
- Sur un intervalle, l’image s’obtient en calculant $y$ aux deux bornes (dans le bon ordre selon le signe de $a$).
- Une application par intervalles : choisir **la bonne expression** selon la tranche où se trouve $x$.
- Problème : écrire $y = ax+b$, trouver $a$ et $b$, calculer, conclure **avec l’unité**.
