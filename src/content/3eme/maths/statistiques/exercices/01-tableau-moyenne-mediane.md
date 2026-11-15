---
titre: Tableau, moyenne et médiane d’une série
difficulte: 1
type: entrainement
indices:
  - Additionne les effectifs pour trouver l’effectif total $n$.
  - Pour chaque fréquence, divise l’effectif par $n$ : la somme doit valoir 1.
  - Pour la médiane, cherche d’abord l’effectif cumulé puis le rang central.
---

## Énoncé

Les notes obtenues par $20$ élèves de 3ème dans une dictée sont :

| Note | 8 | 10 | 12 | 14 | 16 |
| --- | --- | --- | --- | --- | --- |
| Effectif | 4 | 6 | 5 | 3 | 2 |

**1.** Calculer l’effectif total $n$.

**2.** Compléter le tableau en calculant la fréquence puis la fréquence cumulée de chaque note.

**3.** Calculer la moyenne de cette série.

**4.** Déterminer la médiane de la série.

**5.** Quel pourcentage d’élèves ont obtenu au moins $12$ ?

## Solution

**1. Effectif total.**

$$
n = 4 + 6 + 5 + 3 + 2 = 20
$$

L’effectif total est $n = 20$ élèves.

**2. Fréquences et fréquences cumulées.**

On divise chaque effectif par $n = 20$ :

- Note 8 : $f = \dfrac{4}{20} = 0{,}20$ ; cumulée : $0{,}20$
- Note 10 : $f = \dfrac{6}{20} = 0{,}30$ ; cumulée : $0{,}20 + 0{,}30 = 0{,}50$
- Note 12 : $f = \dfrac{5}{20} = 0{,}25$ ; cumulée : $0{,}50 + 0{,}25 = 0{,}75$
- Note 14 : $f = \dfrac{3}{20} = 0{,}15$ ; cumulée : $0{,}75 + 0{,}15 = 0{,}90$
- Note 16 : $f = \dfrac{2}{20} = 0{,}10$ ; cumulée : $0{,}90 + 0{,}10 = 1{,}00$

| Note | Effectif | Fréquence | Fréquence cumulée |
| --- | --- | --- | --- |
| 8 | 4 | 0,20 | 0,20 |
| 10 | 6 | 0,30 | 0,50 |
| 12 | 5 | 0,25 | 0,75 |
| 14 | 3 | 0,15 | 0,90 |
| 16 | 2 | 0,10 | 1,00 |
| **Total** | **20** | **1,00** | — |

Contrôle : $0{,}20 + 0{,}30 + 0{,}25 + 0{,}15 + 0{,}10 = 1{,}00$ ✓

**3. Moyenne.**

$$
\bar{x} = \frac{8 \times 4 + 10 \times 6 + 12 \times 5 + 14 \times 3 + 16 \times 2}{20}
$$
$$
\bar{x} = \frac{32 + 60 + 60 + 42 + 32}{20} = \frac{226}{20} = 11{,}3
$$

La moyenne de la série est $11,3$. Elle est comprise entre $8$ et $16$ ✓.

**4. Médiane.**

$n = 20$ est pair : la médiane est la moyenne des valeurs d’ordre $\dfrac{20}{2} = 10$ et $11$.

- L’effectif cumulé de la note $10$ vaut $10$ : la $10^{\text{e}}$ valeur est donc $10$.
- L’effectif cumulé de la note $12$ vaut $15$ : la $11^{\text{e}}$ valeur est donc $12$.

$$
\text{médiane} = \frac{10 + 12}{2} = 11
$$

La médiane de la série est $11$.

**5. Pourcentage d’élèves ayant au moins 12.**

Ce sont les élèves des notes $12$, $14$ et $16$ :
$$
5 + 3 + 2 = 10 \text{ élèves}
$$
$$
\frac{10}{20} \times 100 = 50\,\%
$$

**Réponse :** $50\,\%$ des élèves ont obtenu au moins $12$ (soit $10$ élèves sur $20$).
