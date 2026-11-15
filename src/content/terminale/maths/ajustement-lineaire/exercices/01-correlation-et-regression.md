---
titre: Corrélation et droite de régression
difficulte: 1
type: entrainement
indices:
  - Utilise les valeurs données dans le tableau : ne recalcule pas ce qui est fourni.
  - Le coefficient de corrélation se calcule par r = sxy / (σx × σy).
  - Pour la droite, calcule d'abord la pente a puis l'ordonnée à l'origine b = ȳ − a·x̄.
---

## Énoncé

On étudie le lien entre la durée d'étude quotidienne $x$ (en heures) et la note obtenue à un contrôle $y$ (sur $20$) pour $5$ élèves. On donne :

$$
\overline{x} = 2, \qquad \overline{y} = 10, \qquad \sigma_x = 1, \qquad \sigma_y = 4, \qquad s_{xy} = 3{,}6.
$$

1. Calculer le coefficient de corrélation $r_{xy}$ et l'interpréter.
2. Calculer la pente $a$ de la droite de régression de $Y$ en $X$.
3. Calculer l'ordonnée à l'origine $b$ et écrire l'équation de cette droite.
4. Vérifier que le point $(\overline{x}\,;\,\overline{y})$ appartient à la droite.
5. Quelle note est prévue pour un élève qui étudie $3$ heures par jour ? Interpréter.

## Solution

**1. Coefficient de corrélation.**

$$
r_{xy} = \frac{s_{xy}}{\sigma_x \times \sigma_y} = \frac{3{,}6}{1 \times 4} = \frac{3{,}6}{4} = 0{,}9.
$$

**Interprétation :** $r_{xy} = 0{,}9$ est positif et proche de $1$ : il existe un lien linéaire **positif fort** entre la durée d'étude et la note ; les points du nuage sont proches d'une droite croissante, c'est-à-dire que plus un élève étudie, plus sa note a tendance à être élevée.

**2. Pente de la droite de régression.**

$$
a = \frac{s_{xy}}{\sigma_x^2} = \frac{3{,}6}{1^2} = 3{,}6.
$$

Autre écriture (contrôle) : $a = r_{xy} \times \dfrac{\sigma_y}{\sigma_x} = 0{,}9 \times \dfrac{4}{1} = 3{,}6$. ✓

La pente vaut donc $3{,}6$ : chaque heure d'étude supplémentaire correspond, en moyenne, à une progression de $3{,}6$ points.

**3. Ordonnée à l'origine et équation.**

$$
b = \overline{y} - a\,\overline{x} = 10 - 3{,}6 \times 2 = 10 - 7{,}2 = 2{,}8.
$$

La droite de régression de $Y$ en $X$ a pour équation

$$
\mathcal{D}: y = 3{,}6\,x + 2{,}8.
$$

**4. Vérification du point moyen.**

$$
3{,}6 \times \overline{x} + b = 3{,}6 \times 2 + 2{,}8 = 7{,}2 + 2{,}8 = 10 = \overline{y}.
$$

Le point $(2\,;\,10)$, centre du nuage, appartient bien à la droite. ✓

**5. Prévision pour $x = 3$.**

$$
\hat{y} = 3{,}6 \times 3 + 2{,}8 = 10{,}8 + 2{,}8 = 13{,}6.
$$

**Interprétation :** pour un élève qui étudie $3$ heures par jour, la note **prévue** est $13{,}6$ sur $20$. La valeur $3$ est proche des valeurs de $x$ du tableau (autour de $\overline{x} = 2$) : la prévision est donc raisonnable.

:::remarque Limites de la méthode
Une droite de régression donne une **tendance moyenne**, pas une égalité : un élève qui étudie $3$ heures n'obtiendra pas nécessairement exactement $13{,}6$. Le coefficient $r_{xy} = 0{,}9$ indique que la droite décrit bien le nuage, mais quelques points restent dispersés.
:::
