---
titre: Sujet type BAC — Ajustement linéaire et prévisions
difficulte: 3
type: bac
annee: 2023
indices:
  - Lis d'abord le tableau augmenté : n, moyennes, écarts-types et somme des produits te sont donnés.
  - Écris chaque formule avant de remplacer les nombres par les valeurs.
  - Interprète systématiquement r_xy et conclus chaque prévision dans le contexte.
---

## Énoncé

Le tableau ci-dessous donne, pour $6$ villes sénégalaises, la moyenne annuelle des températures maximales $x$ (en °C) et le nombre moyen de jours de pluie $y$ par an.

| Ville | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| --- | --- | --- | --- | --- | --- | --- |
| $x$ (température max) | $30$ | $32$ | $33$ | $34$ | $36$ | $38$ |
| $y$ (jours de pluie) | $60$ | $52$ | $48$ | $42$ | $35$ | $28$ |

On donne :

$$
\overline{x} = 33{,}83, \qquad \overline{y} = 44{,}17, \qquad \sigma_x \approx 2{,}62, \qquad \sigma_y \approx 11{,}26, \qquad s_{xy} \approx -28{,}90.
$$

**Partie A — Corrélation**

1. Calculer le coefficient de corrélation $r_{xy}$ (arrondi à deux décimales).
2. Interpréter $r_{xy}$ : sens et intensité du lien entre température et nombre de jours de pluie.

**Partie B — Droite de régression**

3. Calculer la pente $a$ de la droite de régression de $Y$ en $X$ (arrondi à deux décimales).
4. Calculer l'ordonnée à l'origine $b$ (arrondi à deux décimales) et écrire l'équation de la droite $\mathcal{D}$.
5. Vérifier que $(\overline{x}\,;\,\overline{y})$ appartient à $\mathcal{D}$.

**Partie C — Prévisions**

6. Prévoir le nombre de jours de pluie pour une ville dont la température maximale moyenne est $35$ °C. Interpréter.
7. Un climatologue affirme : « Pour $x = 45$ °C, la ville n'aurait aucun jour de pluie ». Discuter cette affirmation au regard de la méthode.

## Solution

**Partie A**

**1. Calcul de $r_{xy}$.**

$$
r_{xy} = \frac{s_{xy}}{\sigma_x \times \sigma_y} = \frac{-28{,}90}{2{,}62 \times 11{,}26} = \frac{-28{,}90}{29{,}50} \approx -0{,}98.
$$

Donc $r_{xy} \approx -0{,}98$, bien compris entre $-1$ et $+1$, comme prévu.

**2. Interprétation.**

$r_{xy}$ est **négatif** et **très proche de $-1$** : le lien linéaire entre la température maximale moyenne et le nombre de jours de pluie est **négatif et très fort**. Concrètement, plus la température est élevée, moins il pleut, et les points du nuage sont très proches d'une droite décroissante.

**Partie B**

**3. Pente.**

$$
a = \frac{s_{xy}}{\sigma_x^2} = \frac{-28{,}90}{(2{,}62)^2} = \frac{-28{,}90}{6{,}8644} \approx -4{,}21.
$$

Contrôle par l'autre formule :

$$
a = r_{xy} \times \frac{\sigma_y}{\sigma_x} \approx -0{,}98 \times \frac{11{,}26}{2{,}62} \approx -0{,}98 \times 4{,}30 \approx -4{,}21. \;\checkmark
$$

La pente est négative, ce qui est cohérent avec $r_{xy} < 0$.

**4. Ordonnée à l'origine et équation.**

$$
b = \overline{y} - a\,\overline{x} = 44{,}17 - (-4{,}21 \times 33{,}83) = 44{,}17 + 142{,}42 \approx 186{,}59.
$$

En effet $4{,}21 \times 33{,}83 = 142{,}4243 \approx 142{,}42$.

$$
\mathcal{D}: y = -4{,}21\,x + 186{,}59.
$$

**5. Vérification.**

$$
-4{,}21 \times 33{,}83 + 186{,}59 = -142{,}42 + 186{,}59 = 44{,}17 = \overline{y}.
$$

Le centre du nuage $(33{,}83\,;\,44{,}17)$ appartient bien à la droite de régression. ✓

**Partie C**

**6. Prévision pour $x = 35$.**

$$
\hat{y} = -4{,}21 \times 35 + 186{,}59 = -147{,}35 + 186{,}59 = 39{,}24.
$$

**Interprétation :** pour une ville dont la température maximale moyenne est $35$ °C, la droite prévoit environ **$39$ jours de pluie par an**. La valeur $35$ est comprise dans l'intervalle des données ($[30\,;\,38]$) : la prévision est donc fiable.

**7. Discussion de l'affirmation.**

L'affirmation est **sans valeur** pour deux raisons :

1. $x = 45$ °C est **très loin** des valeurs observées ($30$ à $38$) : c'est une **extrapolation**, or la droite n'a été validée que sur l'intervalle des données. En appliquant la droite : $\hat{y} = -4{,}21 \times 45 + 186{,}59 = -189{,}45 + 186{,}59 = -2{,}86$, ce qui donne un nombre de jours **négatif** : une absurdité physique qui montre les limites de l'extrapolation.

2. La droite de régression traduit une **tendance moyenne**, pas une loi exacte : elle ne permet pas d'affirmer qu'un événement précis se produira (« aucun jour de pluie »).

:::methode Ce que le correcteur attend
- Chaque formule **écrite** avant le remplacement numérique.
- L'interprétation de $r_{xy}$ en phrase complète (sens **et** intensité).
- La vérification $(\overline{x}\,;\,\overline{y}) \in \mathcal{D}$ montrée par le calcul.
- Dans la partie C : le mot **extrapolation** et la limite physique de la prévision.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points ($2 + 1$). Partie B : 4 points ($1 + 2 + 1$). Partie C : 3 points ($1{,}5 + 1{,}5$). Une interprétation donnée sans valeur de $r_{xy}$ perdra le point de la question 2.
:::
