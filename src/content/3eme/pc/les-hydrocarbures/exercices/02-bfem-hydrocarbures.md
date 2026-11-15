---
titre: Sujet type BFEM — Hydrocarbures, combustion et utilisation
difficulte: 3
type: bfem
annee: 2023
indices:
  - Applique la règle des séries : x = 2n+2 → alcane, x = 2n → alcène, x = 2n-2 → alcyne.
  - Écris l’équation, équilibre-la (C, puis H, puis O), puis compte les atomes des deux côtés.
  - Pour la quantité de matière : n = m/M, avec la masse en grammes et la masse molaire en g/mol.
  - Utilise les coefficients de l’équation pour passer du réactif au produit.
---

## Énoncé

**Document 1.** Quatre hydrocarbures étudiés au laboratoire :

| Corps | Formule brute | État à 20 °C | Particularité |
| --- | --- | --- | --- |
| A | $CH_4$ | gaz | brûle avec une flamme bleue |
| B | $C_4H_{10}$ | gaz | stocké en bouteille, odorisé |
| C | $C_2H_4$ | gaz | sert à fabriquer les sacs plastiques |
| D | $C_6H_{14}$ | liquide | constituant de l’essence |

**Document 2.** Extrait d’un article de presse : « Dans une cuisine de Dakar, une fuite de bouteille de gaz a provoqué un incendie. Les pompiers rappellent qu’une flamme jaune et de la suie sur les marmites signalent une combustion incomplète, qui produit du monoxyde de carbone, gaz incolore et inodore. »

On demande :

1. Classer les quatre corps du document 1 par série chimique (alcane, alcène, alcyne) en justifiant par la formule générale. *(2 points)*
2. Écrire la formule semi-développée du corps C et son nom IUPAC, puis écrire l’équation de la réaction par laquelle il donne le polyéthylène. *(2 points)*
3. Écrire l’équation-bilan **équilibrée** de la combustion complète du corps B (butane). *(2 points)*
4. On brûle $8\ g$ de méthane (corps A) dans un brûleur de laboratoire ($M(CH_4) = 16\ g/mol$, $M(CO_2) = 44\ g/mol$) :
   - calculer la quantité de matière de méthane ;
   - calculer la quantité de matière de dioxygène nécessaire à la combustion complète, puis la masse de dioxyde de carbone formée. *(2,5 points)*
5. D’après le document 2, expliquer ce qu’est une combustion incomplète, citer son danger principal et donner deux précautions à respecter dans une cuisine au gaz. *(1,5 point)*

## Solution

**1. Classement par série.**

| Corps | $n$ | $x$ (hydrogènes) | $2n+2$ | $2n$ | $2n-2$ | Série |
| --- | --- | --- | --- | --- | --- | --- |
| A $CH_4$ | 1 | 4 | 4 | 2 | 0 | **alcane** ($x = 2n+2$) |
| B $C_4H_{10}$ | 4 | 10 | 10 | 8 | 6 | **alcane** ($x = 2n+2$) |
| C $C_2H_4$ | 2 | 4 | 6 | 4 | 2 | **alcène** ($x = 2n$) |
| D $C_6H_{14}$ | 6 | 14 | 14 | 12 | 10 | **alcane** ($x = 2n+2$) |

A, B et D sont des **alcanes saturés** (formule $C_nH_{2n+2}$) ; C est un **alcène insaturé** ($C_nH_{2n}$), il possède une double liaison. *(0,5 pt par classement correct — 1 pt pour la justification par la formule générale)*

**2. Corps C : formule, nom et polymérisation.**

Formule semi-développée : $CH_2=CH_2$ (double liaison entre les deux carbones).

Nom : **éthylène** (ou éthène), car $n = 2$ (préfixe éth-) et c’est un alcène (terminaison -ène).

Réaction de polymérisation :

$$
n\,C_2H_4 \longrightarrow (C_2H_4)_n
$$

De nombreuses molécules d’éthylène s’assemblent pour former le **polyéthylène**, utilisé dans les sacs et bouteilles plastiques. *(0,5 pt formule — 0,5 pt nom — 1 pt équation de polymérisation)*

**3. Combustion complète du butane.**

$$
2\,C_4H_{10} + 13\,O_2 \longrightarrow 8\,CO_2 + 10\,H_2O
$$

Équilibrage : $4$ carbones → $4\,CO_2$ ; $10$ hydrogènes → $5\,H_2O$ ; oxygène à droite : $4 \times 2 + 5 = 13$, soit $\frac{13}{2}\,O_2$ ; on multiplie tout par $2$.

Vérification : $8$ C, $20$ H et $26$ O de chaque côté. *(1 pt pour l’équation complète — 1 pt pour l’équilibre vérifié)*

**4. Calculs stœchiométriques.**

Étape 1 — quantité de matière de méthane :

$$
n(CH_4) = \frac{m}{M} = \frac{8}{16} = 0{,}5\ mol
$$

Étape 2 — d’après l’équation $CH_4 + 2\,O_2 \longrightarrow CO_2 + 2\,H_2O$, le rapport est $1/2$ entre $CH_4$ et $O_2$ :

$$
n(O_2) = 2 \times n(CH_4) = 2 \times 0{,}5 = 1\ mol
$$

Étape 3 — le rapport $CH_4/CO_2$ est $1/1$ :

$$
n(CO_2) = n(CH_4) = 0{,}5\ mol \qquad m(CO_2) = n \times M = 0{,}5 \times 44 = 22\ g
$$

La combustion de $8\ g$ de méthane consomme **$1\ mol$** de dioxygène et forme **$22\ g$** de dioxyde de carbone. *(0,5 pt pour $n(CH_4)$ — 0,5 pt formule — 1 pt pour $n(O_2)$ et $m(CO_2)$ avec unités)*

**5. Combustion incomplète et précautions.**

La combustion incomplète se produit lorsque le **dioxygène est en quantité insuffisante** : le carbone ne forme pas seulement du $CO_2$, il donne du **monoxyde de carbone $CO$** (et de la suie), d’où la flamme jaune signalée.

Danger principal : le $CO$ est **incolore, inodore et très toxique** : il se fixe sur le sang et peut provoquer l’intoxication mortelle dans une pièce fermée.

Précautions (deux au choix) :
- **aérer** la cuisine pendant et après la cuisson ;
- vérifier l’état des durites et le robinet de la bouteille de gaz ;
- ne jamais utiliser un groupe électrogène à l’intérieur ;
- éteindre toute flamme et ne pas allumer d’allumette en cas d’odeur de gaz. *(0,5 pt explication — 0,5 pt danger — 0,5 pt par précaution justes, 2 au maximum)*

:::methode Ce que le correcteur attend
Une question d’hydrocarbures se traite toujours dans cet ordre : identifier la série avec la formule générale, nommer le corps, écrire l’équation équilibrée, puis traiter la question de calcul avec $n = m/M$ et les rapports de l’équation. Les justifications (« parce que $x = 2n+2$ », « parce que le dioxygène est insuffisant ») sont notées : écris-les toujours.
:::
