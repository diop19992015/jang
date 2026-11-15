---
titre: Sujet type BAC — Dénombrement et tableau de sondage
difficulte: 3
type: bac
annee: 2023
indices:
  - Traduis chaque phrase de l'énoncé en équation de cardinaux avant tout calcul.
  - Utilise le tableau 2 × 2 pour la partie 1 : les marges sont connues.
  - Pour « au moins un », pense au principe d'inclusion-exclusion ou au complémentaire.
---

## Énoncé

Lors d'un sondage mené auprès de $250$ lycéens de Dakar, on recueille les informations suivantes :

- $140$ lycéens possèdent un smartphone ($S$) ;
- $90$ possèdent une calculatrice scientifique ($C$) ;
- $60$ possèdent un ordinateur portable ($O$) ;
- $50$ possèdent à la fois un smartphone et une calculatrice ;
- $30$ possèdent à la fois un smartphone et un ordinateur ;
- $20$ possèdent à la fois une calculatrice et un ordinateur ;
- $10$ possèdent les trois appareils.

**Partie A — Relevé**

1. Compléter le diagramme de Venn à trois ensembles : donner le cardinal de chacune des sept zones.
2. Calculer le nombre de lycéens qui possèdent **au moins un** des trois appareils.
3. Combien de lycéens ne possèdent **aucun** des trois appareils ?

**Partie B — Tableau**

4. Construire le tableau 2 × 2 croisant « possède un smartphone » et « possède une calculatrice », et le compléter.

**Partie C — Interprétation**

5. Combien de lycéens possèdent **exactement un** des trois appareils ?
6. Un lycéen est tiré au hasard. Calculer la proportion des lycéens qui possèdent un smartphone mais pas d'ordinateur.

## Solution

**Partie A**

**1. Les sept zones du diagramme.**

Les zones se remplissent du centre vers l'extérieur :

- Les trois appareils : $S \cap C \cap O = 10$.
- Smartphone et calculatrice **seulement** : $50 - 10 = 40$.
- Smartphone et ordinateur **seulement** : $30 - 10 = 20$.
- Calculatrice et ordinateur **seulement** : $20 - 10 = 10$.
- Smartphone **seul** : $140 - (40 + 20 + 10) = 140 - 80 = 60$.
- Calculatrice **seule** : $90 - (40 + 10 + 10) = 90 - 60 = 30$.
- Ordinateur **seul** : $60 - (20 + 10 + 10) = 60 - 40 = 20$.

Somme des sept zones : $60 + 30 + 20 + 40 + 20 + 10 + 10 = 190$.

**2. Au moins un appareil.**

Par le principe d'inclusion-exclusion à trois ensembles :

$$
\mathrm{card}(S \cup C \cup O) = 140 + 90 + 60 - 50 - 30 - 20 + 10 = 190.
$$

$190$ lycéens possèdent au moins un appareil.

**3. Aucun appareil.**

$$
\mathrm{card}(\overline{S \cup C \cup O}) = 250 - 190 = 60.
$$

$60$ lycéens ne possèdent aucun des trois appareils.

**Partie B**

**4. Tableau croisé smartphone / calculatrice.**

- $S \cap C = 50$.
- $S$ mais pas $C$ : $140 - 50 = 90$.
- $C$ mais pas $S$ : $90 - 50 = 40$.
- Ni $S$ ni $C$ : $250 - (50 + 90 + 40) = 70$.

| | Calculatrice $C$ | Pas de $C$ | **Total** |
| --- | --- | --- | --- |
| Smartphone $S$ | $50$ | $90$ | $140$ |
| Pas de $S$ | $40$ | $70$ | $110$ |
| **Total** | $90$ | $160$ | $250$ |

Contrôle : $50 + 90 + 40 + 70 = 250$. ✓

**Partie C**

**5. Exactement un appareil.**

Ce sont les trois zones « seul » :

$$
60 + 30 + 20 = 110.
$$

$110$ lycéens possèdent exactement un appareil.

*Vérification par le complémentaire :* au moins un $= 190$ ; au moins deux $= 40 + 20 + 10 + 10 = 80$ ; donc exactement un $= 190 - 80 = 110$. ✓

**6. Smartphone sans ordinateur.**

Ce sont les éléments de $S \cap \overline{O}$ : les zones « smartphone seul » et « smartphone + calculatrice seulement » :

$$
60 + 40 = 100.
$$

La proportion demandée vaut

$$
\frac{100}{250} = 0,4 \quad (40\,\%).
$$

:::methode Ce que le correcteur attend
- Les zones nommées ($S \cap C$, $\overline{O}$…) et non seulement le chiffre.
- L'inclusion-exclusion écrite avec **tous** les termes, y compris le $+10$ final.
- Le tableau avec marges et contrôle de total.
- La proportion réduite ou donnée en pourcentage, avec le dénominateur $250$ justifié (tous les lycéens).
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points (2 + 1 + 1). Partie B : 3 points. Partie C : 3 points (1,5 + 1,5). Un diagramme non rempli mais une inclusion-exclusion correcte conserve les points de la question 2.
:::
