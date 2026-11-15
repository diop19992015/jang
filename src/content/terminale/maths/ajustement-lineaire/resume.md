---
titre: Ajustement linéaire
accroche: Coefficient de corrélation · Droite de régression de Y en X (moindres carrés) · Prévisions
series: L
ordre: 5
duree: 45
demo: false
statut: publie
objectifs:
  - Coefficient de corrélation
  - Droite de régression de Y en X (moindres carrés)
  - Prévisions
partie: Statistique
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Coefficient de corrélation
$$
r_{xy} = \frac{s_{xy}}{\sigma_x \sigma_y}
\qquad \text{avec} \qquad
s_{xy} = \frac{1}{n} \sum_{i=1}^{n} (x_i - \overline{x})(y_i - \overline{y})
$$

$$
-1 \leq r_{xy} \leq 1
$$
:::

:::formule Interprétation de $r_{xy}$
| Valeur | Signification |
| --- | --- |
| $r_{xy} \approx 1$ | corrélation positive **forte** (points alignés, $y$ croît) |
| $r_{xy} \approx -1$ | corrélation négative **forte** (points alignés, $y$ décroît) |
| $r_{xy} \approx 0$ | **pas de lien linéaire** |
| $0 < r_{xy} < 1$ | lien positif (plus $r_{xy}$ est proche de $1$, meilleur) |
:::

:::formule Droite de régression de $Y$ en $X$
$$
\mathcal{D}: y = ax + b
$$

$$
a = \frac{s_{xy}}{\sigma_x^2} = r_{xy} \times \frac{\sigma_y}{\sigma_x}
\qquad \text{et} \qquad
b = \overline{y} - a\,\overline{x}
$$
:::

:::formule Propriété de contrôle
$$
(\overline{x}\,;\,\overline{y}) \in \mathcal{D}
\qquad \text{car} \qquad a\,\overline{x} + b = a\,\overline{x} + \overline{y} - a\,\overline{x} = \overline{y}
$$
:::

:::formule Prévision
Pour $x = x_0$ :

$$
\hat{y} = a\,x_0 + b
$$

La valeur $\hat{y}$ est une **prévision**, pas une valeur exacte.
:::

## Méthode express

1. **Lire l'énoncé** : relever $\overline{x}$, $\overline{y}$, $\sigma_x$, $\sigma_y$, $s_{xy}$ (ou $\sum x_i y_i$) et $n$.
2. **Corrélation** : $r_{xy} = \dfrac{s_{xy}}{\sigma_x \sigma_y}$ ; interpréter (signe + intensité) en une phrase.
3. **Pente** : $a = \dfrac{s_{xy}}{\sigma_x^2}$ ou $a = r_{xy}\dfrac{\sigma_y}{\sigma_x}$.
4. **Ordonnée à l'origine** : $b = \overline{y} - a\,\overline{x}$.
5. **Vérifier** : remplacer $(\overline{x}\,;\,\overline{y})$ dans $y = ax+b$.
6. **Prévoir** : $\hat{y} = a\,x_0 + b$, puis conclure dans le contexte avec les unités.

:::erreur Les erreurs qui coûtent des points
1. Inverser la formule de $b$ : c'est $b = \overline{y} - a\,\overline{x}$, jamais $\overline{x} - a\,\overline{y}$.
2. Oublier d'interpréter $r_{xy}$ : « corrélation positive forte » est une phrase **exigée**.
3. Donner une prévision sans phrase de conclusion ni unité.
4. Confondre droite de régression de $Y$ en $X$ et de $X$ en $Y$ : l'énoncé précise toujours le sens.
5. Dire que $r_{xy} = 0{,}9$ implique $y = 0{,}9x$ : faux, c'est une mesure d'alignement.
:::

## Vocabulaire

- **Nuage de points** : représentation graphique des couples $(x_i\,;\,y_i)$.
- **Corrélation linéaire** : force et sens du lien linéaire entre deux variables, mesurés par $r_{xy}$.
- **Covariance** $s_{xy}$ : mesure conjointe des variations de $x$ et $y$.
- **Droite de régression de $Y$ en $X$** : droite des moindres carrés servant à prévoir $y$ à partir de $x$.
- **Moindres carrés** : méthode qui minimise la somme des carrés des distances des points à la droite.
- **Prévision (ou valeur prévue)** $\hat{y}$ : valeur obtenue en injectant $x_0$ dans la droite.
- **Extrapolation** : prévision pour une valeur de $x$ hors de l'intervalle des données.
