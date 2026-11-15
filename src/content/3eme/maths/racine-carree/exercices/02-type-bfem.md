---
titre: Type BFEM — Racine carrée, Pythagore et problème
difficulte: 3
type: bfem
annee: 2023
indices:
  - Décompose d’abord chaque nombre sous le radical en facteurs, en cherchant les carrés parfaits.
  - Pour l’équation, mets tout sous le même côté puis applique $x^2 = a$ en donnant les deux solutions.
  - En problématique, choisis la formule : surface d’un carré → racine, triangle rectangle → Pythagore.
---

## Énoncé

Le sujet suivant reprend le format des épreuves de mathématiques du BFEM.

**Partie A.** (4 points)

Calculer et donner le résultat sous sa forme la plus simple :

1. $A = \sqrt{75} + \sqrt{48}$
2. $B = \sqrt{8} \times \sqrt{18} - \sqrt{144}$
3. $C = \dfrac{\sqrt{50}}{\sqrt{2}}$

**Partie B.** (3 points)

Résoudre les équations suivantes :

4. $x^2 = 196$
5. $x^2 - 75 = 0$

**Partie C.** (3 points)

Un terrain carré du marché de Sandaga a une surface de $1764$ m².

6. Calculer la longueur du côté de ce terrain. (1,5 point)
7. Un allumeur relie deux bornes de ce terrain par la diagonale. Calculer la longueur de cette diagonale, arrondie à $0,1$ m près, en prenant $\sqrt{2} \approx 1,41$. (1,5 point)

## Solution

**1. Calcul de $A$.**

On simplifie chaque radical :
$$
\sqrt{75} = \sqrt{25 \times 3} = 5\sqrt{3}
$$
$$
\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}
$$
Les radicaux sont semblables, donc :
$$
A = 5\sqrt{3} + 4\sqrt{3} = 9\sqrt{3}
$$

**2. Calcul de $B$.**

$$
\sqrt{8} \times \sqrt{18} = \sqrt{8 \times 18} = \sqrt{144} = 12
$$
Donc :
$$
B = 12 - \sqrt{144} = 12 - 12 = 0
$$

**3. Calcul de $C$.**

$$
C = \frac{\sqrt{50}}{\sqrt{2}} = \sqrt{\frac{50}{2}} = \sqrt{25} = 5
$$

**4. Équation $x^2 = 196$.**

$196 = 14^2$, donc $\sqrt{196} = 14$. L’équation admet deux solutions opposées :
$$
x = 14 \quad \text{ou} \quad x = -14
$$

**5. Équation $x^2 - 75 = 0$.**

On passe $-75$ de l’autre côté :
$$
x^2 = 75
$$
Or $75 = 25 \times 3$, donc $\sqrt{75} = 5\sqrt{3}$, d’où :
$$
x = 5\sqrt{3} \quad \text{ou} \quad x = -5\sqrt{3}
$$

**6. Côté du terrain.**

Le côté $a$ d’un carré de surface $S$ vérifie $a^2 = S$, donc $a = \sqrt{S}$ :
$$
a = \sqrt{1764}
$$
On cherche le carré parfait proche de $1764$ : $40^2 = 1600$, $42^2 = 1764$. Donc :
$$
a = 42 \text{ m}
$$
Vérification : $42 \times 42 = 1764$.

**7. Diagonale du terrain.**

La diagonale d’un carré de côté $a$ est $d = a\sqrt{2}$. Ici $a = 42$ m, donc :
$$
d = 42\sqrt{2} \approx 42 \times 1{,}41 = 59{,}22
$$
Arrondie à $0,1$ m près :
$$
d \approx 59{,}2 \text{ m}
$$

On pouvait aussi calculer $d = \sqrt{42^2+42^2} = \sqrt{3528} \approx 59{,}2$ m.

:::erreur Pièges de l’épreuve
1. Oublier une solution dans la Partie B : chaque équation $x^2 = a$ attend **deux** solutions.
2. Écrire $\sqrt{144} = -12$ ou donner un côté négatif : toute longueur est positive.
3. Additionner sous le radical : $\sqrt{75}+\sqrt{48} \neq \sqrt{123}$.
:::
