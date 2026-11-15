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

:::remarque À quoi ça sert au BAC ?
L'ajustement linéaire est le cœur du sujet de **statistiques** : on donne un tableau de $n$ couples $(x_i\,;\,y_i)$, on demande le coefficient de corrélation, l'équation de la droite de régression, puis une **prévision**. Ce sont $4$ à $6$ points du BAC L, toujours avec la même procédure : calculs guidés par la calculatrice, puis rédaction justifiée.
:::

## Statistiques descriptives : rappels

:::formule Moyenne et écart-type
Pour $n$ valeurs $x_1, \dots, x_n$ :

$$
\overline{x} = \frac{1}{n} \sum_{i=1}^{n} x_i, \qquad
\sigma_x = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (x_i - \overline{x})^2}
$$
:::

:::remarque Ce que demande l'énoncé
Le sujet donne presque toujours le tableau **augmenté** : $n$, $\sum x_i$, $\sum y_i$, $\sum x_i^2$, $\sum y_i^2$, $\sum x_i y_i$, $\sigma_x$, $\sigma_y$. Le travail consiste à **utiliser** ces valeurs, pas à les recalculer : lis bien les en-têtes de colonnes.
:::

## Coefficient de corrélation

:::formule Coefficient de corrélation linéaire (Pearson)
$$
r_{xy} = \frac{1}{n} \sum_{i=1}^{n} \frac{(x_i - \overline{x})(y_i - \overline{y})}{\sigma_x \sigma_y}
\qquad \text{soit aussi} \qquad
r_{xy} = \frac{s_{xy}}{\sigma_x \sigma_y}
$$

où $s_{xy} = \dfrac{1}{n}\sum (x_i - \overline{x})(y_i - \overline{y})$ est la **covariance**.
:::

:::formule Propriétés de $r_{xy}$
$$
-1 \leq r_{xy} \leq 1
$$

- $r_{xy} > 0$ : corrélation **positive** ($y$ tend à augmenter avec $x$) ;
- $r_{xy} < 0$ : corrélation **négative** ($y$ tend à diminuer quand $x$ augmente) ;
- $r_{xy}$ **proche de $\pm 1$** : nuage de points proche d'une droite ;
- $r_{xy}$ **proche de $0$** : pas de relation linéaire.
:::

:::methode Calculer $r_{xy}$ en 3 lignes
1. Lire $\overline{x}$, $\overline{y}$, $\sigma_x$, $\sigma_y$ et $s_{xy}$ (ou $\sum (x_i-\overline{x})(y_i-\overline{y})$) dans l'énoncé.
2. Appliquer $r_{xy} = \dfrac{s_{xy}}{\sigma_x \sigma_y}$ (calculatrice).
3. **Interpréter** : signe, proximité de $\pm 1$, puis conclure en phrase (« le lien est fortement positif »).
:::

:::exemple Interprétation
$r_{xy} = 0{,}96$ : le lien entre $x$ et $y$ est **très fortement positif** : les points sont alignés et $y$ croît avec $x$.

$r_{xy} = -0{,}35$ : lien négatif **faible** : le nuage est dispersé autour d'une droite à pente légèrement négative.

$r_{xy} = 0{,}02$ : aucun lien **linéaire** (cela n'exclut pas un autre type de relation).
:::

:::erreur Erreur d'interprétation
Dire « $r_{xy} = 0{,}9$ signifie que $y$ vaut $0{,}9$ fois $x$ » : faux. Le coefficient mesure la **qualité de l'alignement** des points, pas une égalité. Et $r_{xy}$ proche de $0$ ne prouve pas l'indépendance, seulement l'absence de lien **linéaire**.
:::

## Droite de régression de $Y$ en $X$

:::formule Équation de la droite de régression
La **droite de régression de $Y$ en $X$** est la droite $\mathcal{D}: y = a x + b$ qui minimise la somme des carrés des distances verticales aux points (méthode des **moindres carrés**) :

$$
\boxed{\;a = \frac{s_{xy}}{\sigma_x^2} = r_{xy} \times \frac{\sigma_y}{\sigma_x}\;}
$$

$$
b = \overline{y} - a \,\overline{x}
$$
:::

:::remarque Pourquoi « de $Y$ en $X$ »
La droite sert à **prédire $y$** à partir de $x$ : c'est $y$ qui est exprimé en fonction de $x$. Si l'on prévoyait $x$ à partir de $y$, la droite serait différente ($x = a'y + b'$ avec $a' = s_{xy}/\sigma_y^2$) : attention à l'ordre demandé dans l'énoncé.
:::

:::methode Calculer la droite de régression
1. Calculer $a = \dfrac{s_{xy}}{\sigma_x^2}$ (ou $a = r_{xy} \cdot \dfrac{\sigma_y}{\sigma_x}$).
2. Calculer $b = \overline{y} - a\,\overline{x}$.
3. Vérification : remplacer $(\overline{x}\,;\,\overline{y})$ dans $y = ax+b$ : le centre du nuage est **toujours** sur la droite.
4. Écrire l'équation complète : $\mathcal{D}: y = a x + b$.
:::

:::exemple Calcul type
On a $\overline{x} = 5$, $\overline{y} = 12$, $\sigma_x = 2$, $\sigma_y = 3$ et $r_{xy} = 0{,}8$.

$$
a = r_{xy} \times \frac{\sigma_y}{\sigma_x} = 0{,}8 \times \frac{3}{2} = 1{,}2
$$

$$
b = \overline{y} - a\,\overline{x} = 12 - 1{,}2 \times 5 = 12 - 6 = 6.
$$

La droite de régression est $y = 1{,}2\,x + 6$. Vérification : $1{,}2 \times 5 + 6 = 12 = \overline{y}$. ✓
:::

:::erreur Deux pièges classiques
1. Calculer $b = \overline{x} - a\,\overline{y}$ : les rôles de $\overline{x}$ et $\overline{y}$ sont inversés. Formule correcte : $b = \overline{y} - a\,\overline{x}$.
2. Oublier de dire que $(\overline{x}\,;\,\overline{y})$ appartient à la droite : c'est la vérification gratuite qui rassure le correcteur.
:::

## Prévisions

:::methode Faire une prévision
1. S'assurer que la **droite de réression** est bien $y = ax + b$ (et pas l'autre).
2. Remplacer $x$ par la valeur donnée : $\hat{y} = a x_0 + b$.
3. Interpréter **dans le contexte** (unités, phrases) : « pour $x = 7$ kg, on prévoit $y = 14{,}4$ cm ».
4. Si la valeur de $x_0$ est **proche** des $x_i$ du tableau, la prévision est fiable ; si elle est très éloignée, c'est une **extrapolation** : préciser que la fiabilité diminue.
:::

:::exemple Prévision
Avec $y = 1{,}2\,x + 6$, prévoir $y$ pour $x = 8$ :

$$
\hat{y} = 1{,}2 \times 8 + 6 = 9{,}6 + 6 = 15{,}6.
$$

Interprétation : lorsque $x$ vaut $8$, la valeur prévue de $y$ est $15{,}6$ (même unité que les $y_i$).
:::

:::piege Une prévision hors nuage n'a pas de sens statistique
Si le tableau contient des $x_i$ allant de $0$ à $10$ et qu'on demande $y$ pour $x = 100$, la droite donne bien un nombre, mais la relation n'a été validée que sur $[0\,;\,10]$. Signale-le : le correcteur attend cette réserve de méthode.
:::

## Rédaction complète d'un exercice d'ajustement

:::methode La marche à suivre au BAC
1. Recopier les données utiles ($\overline{x}$, $\overline{y}$, $\sigma_x$, $\sigma_y$, $s_{xy}$ ou $r_{xy}$).
2. Calculer $r_{xy}$ si on ne l'a pas, et **interpréter** en une phrase.
3. Calculer $a$ puis $b$ avec les formules, en montrant les remplacements numériques.
4. Écrire l'équation de $\mathcal{D}$ avec l'unité des variables.
5. Effectuer la prévision demandée et conclure en phrase dans le contexte.
:::

## Ce qu'il faut retenir

- $r_{xy} = \dfrac{s_{xy}}{\sigma_x \sigma_y}$, entre $-1$ et $+1$ : signe du lien, proximité de $\pm 1$ pour l'intensité.
- Droite de régression **de $Y$ en $X$** : $y = ax + b$ avec $a = \dfrac{s_{xy}}{\sigma_x^2} = r_{xy}\dfrac{\sigma_y}{\sigma_x}$ et $b = \overline{y} - a\,\overline{x}$.
- Le point $(\overline{x}\,;\,\overline{y})$ est **toujours** sur la droite : vérification obligatoire.
- Prévision : remplacer $x$ par $x_0$ dans l'équation, puis interpréter avec les unités.
- Prévision lointaine = extrapolation : signaler la limite de fiabilité.
