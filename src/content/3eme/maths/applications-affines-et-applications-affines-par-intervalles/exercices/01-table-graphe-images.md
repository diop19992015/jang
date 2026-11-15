---
titre: Table de valeurs, graphe et images
difficulte: 1
type: entrainement
indices:
  - Pour la table, calcule $ax+b$ pour chaque valeur de $x$ : un seul calcul faux fausse tout le tableau.
  - Le sens de variation dépend uniquement du signe de $a$.
  - « Image » = remplacer $x$ ; « antécédent » = résoudre $ax + b = y_0$.
---

## Énoncé

Soit l’application affine $f$ définie par $y = 3x - 4$.

1. Donner le coefficient directeur et le terme constant de $f$.
2. Compléter le tableau de valeurs de $f$ :

| $x$ | $-1$ | $0$ | $1$ | $2$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $y$ | ... | ... | ... | ... | ... |

3. Dire si $f$ est croissante ou décroissante, et justifier.
4. Calculer :
   - l’image de $-1$ ;
   - l’image de $4$ ;
   - l’antécédent de $5$ ;
   - l’antécédent de $-1$.
5. Déterminer l’image de l’intervalle $[0\,; 3]$.
6. Un coursier facture $y = 50x + 300$ FCFA pour livrer un colis à $x$ km. Quel est le prix d’une livraison de $6$ km ?

## Solution

**1. Lecture de la forme $y = ax+b$.**

On a $y = 3x - 4$, donc le coefficient directeur est $a = 3$ et le terme constant est $b = -4$.

**2. Tableau de valeurs.**

On calcule $3x - 4$ pour chaque $x$ :

| $x$ | $-1$ | $0$ | $1$ | $2$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $y$ | $-7$ | $-4$ | $-1$ | $2$ | $8$ |

Détails : $3 \times (-1) - 4 = -3 - 4 = -7$ ; $3 \times 0 - 4 = -4$ ; $3 \times 1 - 4 = -1$ ; $3 \times 2 - 4 = 2$ ; $3 \times 4 - 4 = 12 - 4 = 8$.

**3. Sens de variation.**

Le coefficient directeur $a = 3$ est **positif**, donc l’application $f$ est **croissante** : quand $x$ augmente, $y$ augmente (la colonne $-7,\ -4,\ -1,\ 2,\ 8$ monte bien).

**4. Images et antécédents.**

- Image de $-1$ : $y = 3 \times (-1) - 4 = -7$.
- Image de $4$ : $y = 3 \times 4 - 4 = 8$.
- Antécédent de $5$ : $3x - 4 = 5$, donc $3x = 9$, soit $x = 3$.
  Vérification : $f(3) = 3 \times 3 - 4 = 5$. ✔
- Antécédent de $-1$ : $3x - 4 = -1$, donc $3x = 3$, soit $x = 1$.

**5. Image de $[0\,; 3]$.**

Comme $f$ est croissante ($a = 3 > 0$), l’image de $[0\,; 3]$ est $[f(0)\,; f(3)]$ :
$$
f(0) = -4 \qquad f(3) = 3 \times 3 - 4 = 5
$$
Donc l’image de $[0\,; 3]$ est l’intervalle $[-4\,; 5]$.

**6. Prix de la livraison.**

On utilise $y = 50x + 300$ avec $x = 6$ :
$$
y = 50 \times 6 + 300 = 300 + 300 = 600
$$
La livraison coûte **600 FCFA**.

:::remarque Contrôle
Relis le tableau : si les images montent toutes, tu as $a > 0$ ; si elles descendent, $a < 0$. Si ce n’est pas le cas, c’est la table qui est fausse, pas la règle.
:::
