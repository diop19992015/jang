---
titre: Équations et inéquations à une inconnue
accroche: Programme officiel — Activités numériques.
ordre: 3
duree: 90
demo: false
objectifs:
  - Résoudre une équation du premier degré à une inconnue
  - Établir une équation à partir d’un énoncé
  - Résoudre une inéquation et représenter sa solution sur une droite
---

:::remarque À quoi ça sert au BFEM ?
La résolution d'équations est le cœur des exercices d'arithmétique et de problèmes du BFEM. On la retrouve aussi dans les questions sur les inéquations et la représentation sur une droite numérique. Savoir poser une équation à partir d'un énoncé fait gagner des points faciles, à condition de suivre les étapes dans l'ordre et de conclure par une phrase.
:::

## Vocabulaire

:::definition Équation à une inconnue
Une **équation** est une égalité contenant une lettre (l'**inconnue**, souvent $x$) dont on cherche la valeur. **Résoudre** une équation, c'est trouver toutes les valeurs de $x$ qui rendent l'égalité vraie. Chacune de ces valeurs s'appelle une **solution**.
:::

:::definition Inéquation
Une **inéquation** est une inégalité contenant une lettre, par exemple $3x - 5 \leqslant 10$. La **solution** est l'ensemble des valeurs de $x$ qui vérifient l'inégalité. On la note souvent $S$.
:::

:::remarque Équation et inéquation se traitent de la même façon
Les étapes sont identiques : développer, regrouper, réduire. La seule différence tient au sens de l'inégalité lorsqu'on multiplie ou qu'on divise par un nombre négatif.
:::

## Résoudre une équation du premier degré

:::formule Les deux propriétés essentielles
Pour toute équation $A = B$ et tout nombre $k$ :
$$
A = B \implies A + k = B + k \qquad \text{(on peut ajouter le même nombre des deux côtés)}
$$
$$
A = B \ \text{et} \ k \neq 0 \implies \frac{A}{k} = \frac{B}{k} \qquad \text{(on peut diviser par un même nombre non nul)}
$$
:::

:::methode Les cinq étapes de la résolution
1. **Développer** et supprimer les parenthèses (aider avec la distributivité).
2. **Rassembler** : les termes contenant $x$ d'un côté, les nombres de l'autre (en changeant de côté, on **change de signe**).
3. **Réduire** de chaque côté : obtenir $ax = b$.
4. **Diviser** les deux membres par $a$ (si $a \neq 0$) : $x = \dfrac{b}{a}$.
5. **Vérifier** en remplaçant $x$ par la valeur trouvée dans l'équation de départ.
:::

:::exemple Équation simple
Résoudre $3x + 5 = 20$.

- On retire $5$ des deux côtés :
$$
3x = 20 - 5 = 15
$$
- On divise par $3$ :
$$
x = \frac{15}{3} = 5
$$
Vérification : $3 \times 5 + 5 = 15 + 5 = 20$. ✔

L'ensemble des solutions est $S = \{5\}$.
:::

:::exemple Équation avec $x$ des deux côtés
Résoudre $4x - 7 = 2x + 3$.

- On passe les $x$ à gauche et les nombres à droite :
$$
4x - 2x = 3 + 7
$$
- On réduit :
$$
2x = 10
$$
- On divise par $2$ :
$$
x = 5
$$
Vérification : $4 \times 5 - 7 = 13$ et $2 \times 5 + 3 = 13$. ✔
:::

:::exemple Équation avec parenthèses
Résoudre $5(x - 2) = 2x + 4$.

- On développe à gauche :
$$
5x - 10 = 2x + 4
$$
- On regroupe :
$$
5x - 2x = 4 + 10
$$
$$
3x = 14
$$
- On divise par $3$ :
$$
x = \frac{14}{3}
$$
Vérification : $5\left(\dfrac{14}{3} - 2\right) = 5 \times \dfrac{8}{3} = \dfrac{40}{3}$ et $2 \times \dfrac{14}{3} + 4 = \dfrac{28}{3} + \dfrac{12}{3} = \dfrac{40}{3}$. ✔
:::

:::erreur Les erreurs les plus fréquentes
1. **Oublier de changer de signe** quand un terme change de côté : dans $4x - 7 = 2x + 3$, passer $-7$ à droite donne $+7$.
2. **Multiplier un nombre par un seul terme** : dans $5(x-2)$, on écrit $5x - 10$, pas $5x - 2$.
3. **Diviser sans simplifier** : dans $2x = 10$, on divise par $2$ (le coefficient de $x$), pas par $10$.
4. **Oublier la vérification** : elle prend dix secondes et sauve le point.
:::

## L'équation-produit

:::formule Théorème des facteurs nuls
Un produit est nul **si et seulement si** l'un de ses facteurs est nul :
$$
A \times B = 0 \iff A = 0 \ \text{ou} \ B = 0
$$
:::

:::methode Résoudre une équation-produit
1. Développer et faire apparaître la forme $A \times B = 0$ (factoriser si besoin).
2. Poser chaque facteur égal à $0$.
3. Résoudre chaque équation simple et réunir les solutions.
:::

:::exemple Équation-produit
Résoudre $(x - 3)(x + 5) = 0$.

- $x - 3 = 0$ donne $x = 3$ ;
- $x + 5 = 0$ donne $x = -5$.

Donc $S = \{-5\,;\ 3\}$.

Autre exemple : $x^2 - 16 = 0$. On factorise :
$$
(x - 4)(x + 4) = 0
$$
donc $x = 4$ ou $x = -4$, soit $S = \{-4\,;\ 4\}$.
:::

:::piege Attention à l'autre sens
Si $A \times B = 6$ (et non $0$), on **ne peut pas** dire que $A = 6$ ou $B = 6$ : la règle ne vaut que pour un produit **nul**.
:::

## Établir une équation à partir d'un énoncé

:::methode Traduire un problème en équation
1. Choisir l'inconnue et l'écrire (« soit $x$ le nombre cherché »).
2. Traduire chaque phrase en équation en utilisant le vocabulaire :
   - « le double de $x$ » → $2x$
   - « la moitié de $x$ » → $\dfrac{x}{2}$
   - « $x$ diminué de 5 » → $x - 5$
   - « $x$ augmenté de 5 » → $x + 5$
   - « le carré de $x$ » → $x^2$
   - « trois fois $x$, auquel on ajoute 7 » → $3x + 7$
3. Poser l'égalité demandée, résoudre, puis **répondre à la question posée** avec une phrase et l'unité.
:::

:::exemple Problème d'achat au marché de Sandaga
Moussa achète $3$ cahiers identiques et un stylo à $250$ FCFA. Il paie $1750$ FCFA. Quel est le prix d'un cahier ?

Soit $x$ le prix d'un cahier en FCFA :
$$
3x + 250 = 1750
$$
$$
3x = 1750 - 250 = 1500
$$
$$
x = \frac{1500}{3} = 500
$$
Réponse : un cahier coûte **500 FCFA**.
:::

:::exemple Problème d'âge
La somme des âges de Moussa et d'Aminata est de $48$ ans, et Aminata a $3$ fois l'âge de Moussa. Quel âge a Moussa ?

Soit $x$ l'âge de Moussa ; celui d'Aminata est $3x$ :
$$
x + 3x = 48
$$
$$
4x = 48 \implies x = 12
$$
Moussa a **12 ans** (et Aminata $3 \times 12 = 36$ ans ; vérification : $12 + 36 = 48$). ✔
:::

:::erreur Ne pas répondre à la question
Si l'inconnue est « l'âge de Moussa » et que la question demande « quel âge aura-t-il dans 5 ans ? », il faut encore calculer $12 + 5 = 17$ ans. La solution de l'équation n'est pas toujours la réponse finale.
:::

## Résoudre une inéquation

:::formule Sens de l'inégalité
- On peut **ajouter ou retirer** le même nombre des deux côtés : le sens **ne change pas**.
- On peut **multiplier ou diviser** les deux côtés par un nombre **strictement positif** : le sens **ne change pas**.
- On **multiplie ou divise** par un nombre **strictement négatif** : le sens **s'inverse** ($<$ devient $>$, $\leqslant$ devient $\geqslant$).
:::

:::methode Les étapes d'une inéquation
1. Développer et regrouper comme pour une équation.
2. Isoler le terme en $x$ d'un côté, les nombres de l'autre.
3. Diviser par le coefficient de $x$ : si ce coefficient est négatif, **inverser le sens**.
4. Écrire l'ensemble des solutions $S$, puis le **représenter sur une droite**.
:::

:::exemple Inéquation à coefficient positif
Résoudre $3x - 5 \leqslant 10$.
$$
3x \leqslant 10 + 5 = 15
$$
On divise par $3$ (positif), le sens ne change pas :
$$
x \leqslant 5
$$
Donc $S = ]-\infty\,;\ 5]$ : toutes les valeurs de $x$ plus petites ou égales à $5$.
:::

:::exemple Inéquation à coefficient négatif
Résoudre $-2x + 1 > 7$.
$$
-2x > 7 - 1 = 6
$$
On divise par $-2$ : le sens **s'inverse** :
$$
x < \frac{6}{-2} \implies x < -3
$$
Donc $S = ]-\infty\,;\ -3[$.
:::

:::piege Oublier d'inverser le sens
C'est la faute qui coûte le plus de points. Exemple : dans $-2x > 6$, écrire $x > -3$ est **faux** : la bonne réponse est $x < -3$. Vérification rapide : prends $x = -4$ (qui vérifie $x < -3$) dans $-2x + 1$ : $-2 \times (-4) + 1 = 9 > 7$. ✔
:::

## Représentation sur une droite numérique

:::methode Tracer la solution
1. Repérer le nombre sur la droite graduée (ici $5$ ou $-3$).
2. Si l'inégalité est **stricte** ($<$ ou $>$) : mettre un **cercle creux** (la valeur n'est pas prise).
3. Si l'inégalité est **large** ($\leqslant$ ou $\geqslant$) : mettre un **point plein** (la valeur est prise).
4. Tracer la **flèche** du bon côté : vers la gauche pour « plus petit que », vers la droite pour « plus grand que ».
:::

:::exemple Représenter $x \leqslant 5$ et $x < -3$
- Pour $x \leqslant 5$ : point plein en $5$, flèche vers la gauche : la solution est $S = ]-\infty\,;\ 5]$.
- Pour $x < -3$ : cercle creux en $-3$, flèche vers la gauche : la solution est $S = ]-\infty\,;\ -3[$.

Attention : le sens de la flèche est donné par le **signe** et non par la position du nombre. $x < -3$ signifie « plus petit que $-3$ », donc on marque toutes les valeurs situées **à gauche** de $-3$.
:::

:::erreur La flèche dépend du signe, pas du nombre
- $x \leqslant 5$ : flèche **à gauche**, point plein en $5$.
- $x \geqslant -3$ : flèche **à droite**, point plein en $-3$.
- $x < 5$ : flèche **à gauche**, cercle **creux** en $5$.
:::

## Problèmes avec une inéquation

:::methode Problème de « au plus »
Les mots « au plus », « pas plus de », « au maximum », « au moins », « pas moins de » traduisent une **inéquation** ($\leqslant$ ou $\geqslant$). La réponse finale doit souvent être un **entier**.
:::

:::exemple Combien de livres au plus ?
Moussa dispose de $5000$ FCFA pour acheter des livres à $750$ FCFA pièce. Combien de livres peut-il acheter au plus ?

Soit $x$ le nombre de livres :
$$
750x \leqslant 5000
$$
$$
x \leqslant \frac{5000}{750} \approx 6{,}67
$$
Comme $x$ est un entier, $x \leqslant 6$. Réponse : Moussa peut acheter **6 livres au plus** (il lui restera $5000 - 4500 = 500$ FCFA).
:::

## Ce qu'il faut retenir

- Résoudre une équation : développer → regrouper → réduire ($ax = b$) → diviser → **vérifier**.
- Changer de côté, c'est **changer de signe**.
- Un produit est nul **si et seulement si** un facteur est nul : $(x-3)(x+5)=0$ donne $x = 3$ ou $x = -5$.
- Une inéquation se résout comme une équation, **sauf** qu'on **inverse le sens** en multipliant ou divisant par un nombre négatif.
- La solution d'une inéquation se représente avec un **point plein** ($\leqslant$, $\geqslant$) ou un **cercle creux** ($<$, $>$), et une flèche vers la **gauche** ($<$, $\leqslant$) ou vers la **droite** ($>$, $\geqslant$).
- Traduire un problème : « soit $x$… », écrire l'équation, résoudre, **conclure avec une phrase et l'unité**.
