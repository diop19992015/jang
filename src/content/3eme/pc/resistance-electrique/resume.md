---
titre: P6. Résistance électrique
accroche: Loi d’Ohm et caractéristique U = f(I) · Résistance d’un fil · Association en série et en parallèle
ordre: 6
duree: 60
demo: false
objectifs:
  - Loi d’Ohm et caractéristique U = f(I)
  - Résistance d’un fil
  - Association en série et en parallèle
---

## L'essentiel du chapitre

:::formule Loi d'Ohm
$$
U = R \cdot I
$$

- $U$ : tension en **volts** ($\text{V}$), $I$ : intensité en **ampères** ($\text{A}$), $R$ : résistance en **ohms** ($\Omega$).
- Formules équivalentes : $I = \dfrac{U}{R}$ et $R = \dfrac{U}{I}$.
:::

:::formule Caractéristique U = f(I)
Pour un conducteur ohmique, $U$ est proportionnelle à $I$ : le graphique est une **droite passant par l'origine**.

$$
R = \frac{\Delta U}{\Delta I} \quad (\text{la pente de la droite})
$$
:::

:::formule Résistance d'un fil
$$
R = \rho \cdot \frac{L}{S}
$$

- $\rho$ : résistivité en $\Omega \cdot \text{m}$ (cuivre : $1{,}7 \times 10^{-8}$) ;
- $L$ : longueur en $\text{m}$ ; $S$ : section en $\text{m}^2$ ($1\ \text{mm}^2 = 10^{-6}\ \text{m}^2$).
:::

:::formule Association en série
$$
R_{\text{éq}} = R_1 + R_2 + \ldots
$$

- $I = I_1 = I_2$ (intensité commune)
- $U = U_1 + U_2$ (tensions qui s'additionnent)
:::

:::formule Association en parallèle
$$
\frac{1}{R_{\text{éq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots
$$

- $U = U_1 = U_2$ (tension commune)
- $I = I_1 + I_2$ (intensités qui s'additionnent)
:::

:::formule Règle des mailles et des nœuds
- **Maille** (boucle) : $U = U_1 + U_2$ (les tensions utilisées équivalent à la tension fournie).
- **Nœud** : $I = I_1 + I_2$ (ce qui arrive repart).
:::

## Méthode express

1. Noter les données avec leurs unités : convertir $\text{k}\Omega$ en $\Omega$ ($\times 1000$) et $\text{mA}$ en $\text{A}$ ($\div 1000$).
2. Choisir la relation : $U = R \cdot I$, $I = U/R$ ou $R = U/I$.
3. Sur un graphique : prendre un point lisible et calculer $R = U/I$.
4. Associer les résistances : **série → addition** ; **parallèle → inverses**, puis **retourner** la fraction.
5. Circuit complet : $R_{\text{éq}}$ → $I = U/R_{\text{éq}}$ → répartition avec mailles et nœuds.
6. Toujours écrire l'unité du résultat ($\text{V}$, $\text{A}$, $\Omega$).

:::erreur Les erreurs qui coûtent des points
1. Additionner les résistances en **parallèle** : c'est les inverses qui s'additionnent.
2. Oublier de **retourner** : $1/R_{\text{éq}} = 1/3$ donne $R_{\text{éq}} = 3\ \Omega$ (pas $1/3\ \Omega$).
3. Oublier la conversion d'unités : $0{,}5\ \text{A}$, pas $0{,}5\ \text{mA}$ ; $470\ \Omega$, pas $470\ \text{k}\Omega$.
4. Confondre les lois : en série c'est $I$ qui est commun, en parallèle c'est $U$.
5. Utiliser $R = \rho L/S$ avec la section en $\text{mm}^2$ sans la convertir en $\text{m}^2$.
:::

## Vocabulaire

- **Résistance $R$** : grandeur qui s'oppose au passage du courant, en ohms ($\Omega$).
- **Loi d'Ohm** : relation $U = R \cdot I$ entre tension, résistance et intensité.
- **Conducteur ohmique** : conducteur dont la tension est proportionnelle à l'intensité ($U = f(I)$ droite).
- **Résistivité $\rho$** : propriété du matériau, en $\Omega \cdot \text{m}$.
- **Résistance équivalente $R_{\text{éq}}$** : résistance unique égale à l'ensemble du montage.
- **Série** : montage à un seul chemin pour le courant ($R_{\text{éq}} = R_1 + R_2$).
- **Parallèle** : montage à plusieurs chemins ($1/R_{\text{éq}} = 1/R_1 + 1/R_2$).
- **Maille** : boucle fermée d'un circuit (loi des tensions).
- **Nœud** : point de branchement d'un circuit (loi des intensités).
- **Ampèremètre** : appareil qui mesure l'intensité, monté en **série**.
- **Voltmètre** : appareil qui mesure la tension, monté en **dérivation** (parallèle).
