---
titre: Racine carrée
accroche: Définition et notation · Propriétés · Calcul sur les radicaux
ordre: 1
duree: 90
demo: false
objectifs:
  - Définition et notation
  - Propriétés
  - Calcul sur les radicaux
---

:::remarque À quoi ça sert au BFEM ?
La racine carrée tombe presque chaque année au BFEM : dans les questions de Pythagore, les équations du type $x^2 = a$, les calculs sur les radicaux et les problèmes de surface. Maîtriser la notation, les propriétés et la simplification des radicaux fait gagner des points sûrs, souvent dès la première question.
:::

## Définition et notation

:::definition Racine carrée
Soit $a$ un nombre réel **positif ou nul**. La **racine carrée** de $a$, notée $\sqrt{a}$, est le **nombre positif ou nul** dont le carré vaut $a$.
:::

Autrement dit, pour $a \geqslant 0$ :
$$
x = \sqrt{a} \iff x \geqslant 0 \text{ et } x^2 = a
$$

:::exemple Vérifications immédiates
- $\sqrt{49} = 7$ car $7 \geqslant 0$ et $7^2 = 49$.
- $\sqrt{\dfrac{9}{25}} = \dfrac{3}{5}$ car $\left(\dfrac{3}{5}\right)^2 = \dfrac{9}{25}$.
- $\sqrt{0} = 0$ car $0^2 = 0$.
- $\sqrt{2,25} = 1,5$ car $1,5^2 = 2,25$.
:::

:::erreur Attention : la racine carrée est toujours positive
$9$ possède deux racines carrées opposées : $3$ et $-3$, car $3^2 = 9$ et $(-3)^2 = 9$. Mais la notation $\sqrt{9}$ désigne **uniquement** le nombre positif ou nul :
$$
\sqrt{9} = 3 \quad \text{et} \quad \sqrt{9} \neq -3
$$
:::

:::remarque Les carrés parfaits à connaître par cœur
| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 |

Les suivants valent $13^2 = 169$, $14^2 = 196$, $15^2 = 225$, $20^2 = 400$, $25^2 = 625$, $30^2 = 900$, $40^2 = 1600$, $50^2 = 2500$.
:::

:::methode Calculer une racine carrée
1. Chercher dans la table le carré parfait le plus proche de $a$.
2. Si $a$ est un carré parfait, écrire sa racine positive.
3. Sinon, décomposer $a$ en produits : $a = b^2 \times c$ avec $b$ grand carré parfait, puis $\sqrt{a} = b\sqrt{c}$.
:::

## Les propriétés fondamentales

:::formule Les quatre propriétés à connaître
Pour $a \geqslant 0$ et $b \geqslant 0$ :
$$
(\sqrt{a})^2 = a
$$
$$
\sqrt{a^2} = |a|
$$
$$
\sqrt{a} \times \sqrt{b} = \sqrt{a \times b}
$$
$$
\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \quad (b > 0)
$$
:::

:::piege $\sqrt{a^2} = |a|$ et non $a$
La racine carrée renvoie **toujours** un nombre positif ou nul. Si $a$ est négatif, $\sqrt{a^2} = -a$.
- $\sqrt{7^2} = 7$
- $\sqrt{(-7)^2} = |-7| = 7$
- Si on te demande $\sqrt{x^2}$ sans précision sur $x$, la bonne réponse est $|x|$.
:::

:::exemple Utiliser les propriétés
- $(\sqrt{15})^2 = 15$.
- $\sqrt{5^2} = 5$ et $\sqrt{(-5)^2} = 5$.
- $\sqrt{3} \times \sqrt{12} = \sqrt{36} = 6$.
- $\dfrac{\sqrt{50}}{\sqrt{2}} = \sqrt{\dfrac{50}{2}} = \sqrt{25} = 5$.
:::

## Équations du type $x^2 = a$

:::definition Équation du second degré pure
Une équation du type
$$
x^2 = a \qquad (a \geqslant 0)
$$
admet **deux solutions opposées** :
$$
x = \sqrt{a} \quad \text{ou} \quad x = -\sqrt{a}
$$
:::

:::methode Résoudre $x^2 = a$
1. Vérifier le signe de $a$ : si $a < 0$, **aucune solution** (un carré ne peut pas être négatif).
2. Calculer $\sqrt{a}$.
3. Donner les deux solutions opposées, en écrivant « ou » entre elles.
:::

:::exemple Résoudre $x^2 = 144$
$$
x^2 = 144 \iff x = \sqrt{144} \text{ ou } x = -\sqrt{144}
$$
donc
$$
x = 12 \quad \text{ou} \quad x = -12
$$
Vérification : $12^2 = 144$ et $(-12)^2 = 144$.
:::

:::erreur Les deux solutions sont obligatoires
Si tu écris seulement $x = 12$, tu perds la moitié des points : l’équation $x^2 = 144$ a bien **deux** solutions, $12$ et $-12$. Et si l’équation est $x^2 = -9$, écris « **aucune solution** » : aucun carré n’est négatif.
:::

:::exemple Équation ramenée à la forme $x^2 = a$
Résoudre $x^2 - 50 = 0$.
On passe $-50$ de l’autre côté :
$$
x^2 = 50
$$
Or $50 = 25 \times 2$, donc $\sqrt{50} = 5\sqrt{2}$ :
$$
x = 5\sqrt{2} \quad \text{ou} \quad x = -5\sqrt{2}
$$
:::

## Calculs sur les radicaux

### Simplifier un radical

:::methode Écrire $a\sqrt{b}$ avec $b$ sans grand carré parfait
1. Décomposer le nombre sous le radical en produit facteur par facteur.
2. Sortir du radical chaque facteur qui est un carré parfait ($\sqrt{4} = 2$, $\sqrt{9} = 3$, $\sqrt{25} = 5$…).
3. Laisser sous le radical ce qui reste.
:::

:::exemple Simplification
$$
\sqrt{12} = \sqrt{4 \times 3} = \sqrt{4} \times \sqrt{3} = 2\sqrt{3}
$$
$$
\sqrt{75} = \sqrt{25 \times 3} = 5\sqrt{3}
$$
$$
\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}
$$
:::

### Additions et soustractions de radicaux

:::formule Radicaux semblables
Si $a$, $b$ et $c$ sont des nombres positifs ou nuls :
$$
a\sqrt{c} + b\sqrt{c} = (a+b)\sqrt{c}
$$
$$
a\sqrt{c} - b\sqrt{c} = (a-b)\sqrt{c}
$$
:::

:::exemple Additionner
$$
\sqrt{75} + \sqrt{48} = 5\sqrt{3} + 4\sqrt{3} = 9\sqrt{3}
$$
$$
7\sqrt{5} - 2\sqrt{5} = 5\sqrt{5}
$$

En revanche, $\sqrt{3} + \sqrt{5}$ **ne se simplifie pas** : ce ne sont pas des radicaux semblables.
:::

:::piege Ne jamais additionner ce qui est sous le radical
$\sqrt{9} + \sqrt{16} = 3 + 4 = 7$, mais **$\sqrt{9+16} = \sqrt{25} = 5$** : les deux calculs sont différents !
:::

### Multiplications et divisions

:::exemple Produits et quotients
$$
\sqrt{8} \times \sqrt{18} = \sqrt{144} = 12
$$
$$
2\sqrt{3} \times 5\sqrt{3} = (2 \times 5) \times (\sqrt{3} \times \sqrt{3}) = 10 \times 3 = 30
$$
$$
\sqrt{50} \div \sqrt{2} = \sqrt{\frac{50}{2}} = \sqrt{25} = 5
$$
:::

:::remarque Produits remarquables avec des radicaux
Les identités habituelles restent valables :
$$
(a+\sqrt{b})(a-\sqrt{b}) = a^2 - b
$$
Exemple : $(5+\sqrt{3})(5-\sqrt{3}) = 25 - 3 = 22$.
:::

## Racines carrées et comparaison

:::remarque La racine carrée est une fonction croissante
Pour $0 \leqslant a \leqslant b$ :
$$
\sqrt{a} \leqslant \sqrt{b}
$$
Ainsi $\sqrt{8} < \sqrt{11}$ car $8 < 11$, et $\sqrt{17} > \sqrt{13}$ car $17 > 13$.
:::

:::remarque Les trois racines à connaître
$$
\sqrt{2} \approx 1,414 \qquad \sqrt{3} \approx 1,732 \qquad \sqrt{5} \approx 2,236
$$
Elles servent à estimer une longueur ou à vérifier une réponse de Pythagore.
:::

## Racine carrée et applications

La racine carrée intervient dans deux situations classiques du BFEM.

:::methode Surface d’un carré
Côté du carré $= a$, surface $= a^2$, donc :
$$
a = \sqrt{\text{surface}}
$$
:::

:::exemple Terrain carré du marché de Sandaga
Un terrain carré du marché de Sandaga a une surface de $1764$ m². Calculer la longueur de son côté.
$$
a = \sqrt{1764}
$$
Or $40^2 = 1600$ et $42^2 = 1764$, donc
$$
a = 42 \text{ m}.
$$
:::

:::methode Diagonale d’un carré et longueur manquante
- Diagonale d’un carré de côté $a$ : $d = a\sqrt{2}$.
- Dans un triangle rectangle : $BC^2 = AB^2 + AC^2$, donc $BC = \sqrt{AB^2 + AC^2}$.
:::

:::exemple Application de Pythagore
Un triangle rectangle a deux côtés de l’angle droit égaux à $6$ cm et $8$ cm. Longueur de l’hypoténuse :
$$
BC = \sqrt{6^2 + 8^2} = \sqrt{36+64} = \sqrt{100} = 10 \text{ cm}.
$$
:::

:::erreur Vérifier la réponse
Un résultat de racine carrée doit être **positif** : si tu trouves $-10$ cm comme longueur d’hypoténuse, c’est une erreur. Une longueur, une surface et une durée ne sont jamais négatives.
:::

## Ce qu’il faut retenir

- $\sqrt{a}$ est le **nombre positatif ou nul** dont le carré vaut $a$, pour $a \geqslant 0$.
- $(\sqrt{a})^2 = a$ et $\sqrt{a^2} = |a|$.
- $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$ et $\dfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\dfrac{a}{b}}$.
- L’équation $x^2 = a$ ($a \geqslant 0$) a **deux solutions opposées** ; si $a < 0$, pas de solution.
- Pour simplifier : $\sqrt{12} = 2\sqrt{3}$, $\sqrt{75} = 5\sqrt{3}$, $\sqrt{48} = 4\sqrt{3}$.
- On additionne uniquement des **radicaux semblables** : $\sqrt{75}+\sqrt{48} = 9\sqrt{3}$.
- En calcul, on ne met **jamais** deux opérateurs d’un coup sous le radical : $\sqrt{9}+\sqrt{16} = 7 \neq 5$.
