## Les règles de résolution

:::formule Règles de base
- Ajouter ou soustraire un même nombre des deux membres : le sens **ne change pas**.
- Multiplier ou diviser par un même nombre **positif** : le sens **ne change pas**.
- Multiplier ou diviser par un même nombre **négatif** : le sens est **renversé** ($<$ $\leftrightarrow$ $>$, $\le$ $\leftrightarrow$ $\ge$).
:::

:::formule Exemple de renversement
$$
-2x \le 8 \implies x \ge -4
$$
(division par $-2$ et changement de sens)
:::

## Les formes d’une inéquation à deux inconnues

| Forme | Frontière | Appartenance de la droite |
| --- | --- | --- |
| $ax + by \le c$ | $ax + by = c$ | trait **plein**, droite incluse |
| $ax + by \ge c$ | $ax + by = c$ | trait **plein**, droite incluse |
| $ax + by < c$ | $ax + by = c$ | trait **pointillé**, droite exclue |
| $ax + by > c$ | $ax + by = c$ | trait **pointillé**, droite exclue |

:::formule Représenter la solution
$$
\text{solution} = \text{demi-plan dont la frontière est } ax + by = c
$$

Choix du demi-plan : tester l’origine $O(0, 0)$ dans l’inéquation.
- Vrai → la solution contient $O$.
- Faux → la solution est le demi-plan opposé (celui qui ne contient pas $O$).
:::

:::methode Tracer une droite frontière
1. Résoudre pour $y = 0$ : c’est le point sur l’axe des abscisses.
2. Résoudre pour $x = 0$ : c’est le point sur l’axe des ordonnées.
3. Relier ces deux points, en trait plein ou pointillé selon le tableau ci-dessus.
:::

## Système d’inéquations

:::formule Solution d’un système
$$
\text{solution du système} = \text{intersection des demi-plans solutions}
$$
:::

| Étape | Action |
| --- | --- |
| 1 | Tracer la première frontière et hachurer son demi-plan |
| 2 | Tracer la seconde frontière et hachurer son demi-plan (hachures croisées) |
| 3 | Repérer la zone hachurée deux fois |
| 4 | Lire les sommets et vérifier dans toutes les inéquations |

:::remarque Trois cas possibles
- Les demi-plans se recouvrent → une zone de solutions (parfois un triangle ou un quadrilatère).
- Les demi-plans ne se recouvrent pas → aucune solution (système impossible).
- Les frontières se croisent en un point : ce point est un **sommet** utile de la zone, obtenu en résolvant le système d’équations formé des deux frontières.
:::

## Les mots-clés des problèmes de condition

| Phrase de l’énoncé | Inéquation |
| --- | --- |
| « dépenser **au plus** $4800$ F » | $600x + 300y \le 4800$ |
| « acheter **au moins** $30$ articles » | $x + y \ge 30$ |
| « **au plus** $10$ kg en tout » | $x + y \le 10$ |
| « pas plus de $8$ unités de $x$ » | $x \le 8$ |
| quantités positives | $x \ge 0$ et $y \ge 0$ |

:::formule Simplifier avant de tracer
Diviser toute l’inéquation par un facteur commun positif n’en change pas la solution :
$$
600x + 300y \le 4800 \iff 2x + y \le 16
$$
:::

:::remarque Toujours vérifier
Choisis un point de la zone obtenue (par exemple $O(0, 0)$ ou un sommet) et remplace ses coordonnées dans **toutes** les inéquations : chaque calcul doit être vrai. C’est la seule façon d’être certain du bon côté de la hachure.
:::
