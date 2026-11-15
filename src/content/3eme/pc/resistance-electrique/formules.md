## Formules à mémoriser

:::formule Loi d'Ohm
$$
U = R \cdot I
$$

Formules équivalentes :
$$
I = \frac{U}{R}
$$

$$
R = \frac{U}{I}
$$

- $U$ : tension en **volts** ($\text{V}$)
- $R$ : résistance en **ohms** ($\Omega$)
- $I$ : intensité en **ampères** ($\text{A}$)
:::

:::formule Résistance d'un fil
$$
R = \rho \cdot \frac{L}{S}
$$

- $\rho$ : résistivité du matériau en $\Omega \cdot \text{m}$
- $L$ : longueur en mètres ($\text{m}$)
- $S$ : section en mètres carrés ($\text{m}^2$)
:::

:::formule Association en série
$$
R_{\text{éq}} = R_1 + R_2 + \ldots + R_n
$$
:::

:::formule Association en parallèle
$$
\frac{1}{R_{\text{éq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}
$$

Cas particulier de **deux** résistances en parallèle :
$$
R_{\text{éq}} = \frac{R_1 \cdot R_2}{R_1 + R_2}
$$

Cas de $n$ résistances **identiques** de valeur $R$ en parallèle :
$$
R_{\text{éq}} = \frac{R}{n}
$$
:::

## Tableau des lois des circuits

| Grandeur | Montage en série | Montage en parallèle |
| --- | --- | --- |
| Intensité | $I = I_1 = I_2$ | $I = I_1 + I_2$ |
| Tension | $U = U_1 + U_2$ | $U = U_1 = U_2$ |
| Résistance équivalente | $R_{\text{éq}} = R_1 + R_2$ | $\dfrac{1}{R_{\text{éq}}} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ |
| Règle applicable | règle des **mailles** | règle des **nœuds** |

:::remarque Mailles et nœuds
- **Règle des mailles** : dans une boucle fermée, la tension fournie par le générateur est partagée entre les composants en série : $U = U_1 + U_2$.
- **Règle des nœuds** : en un point de branchement, l'intensité qui arrive se répartit : $I = I_1 + I_2$.
:::

## Tableau des résistivités (à $20\ ^\circ\text{C}$)

| Matériau | $\rho$ ($\Omega \cdot \text{m}$) | Usage |
| --- | --- | --- |
| Argent | $1{,}6 \times 10^{-8}$ | contacts, câbles de précision |
| Cuivre | $1{,}7 \times 10^{-8}$ | fils et câbles électriques |
| Aluminium | $2{,}8 \times 10^{-8}$ | lignes de transport (SENELEC) |
| Fer | $10 \times 10^{-8}$ | structures, aciers |

## Conversions d'unités

| De | Vers | Opération |
| --- | --- | --- |
| $\text{k}\Omega$ | $\Omega$ | multiplier par $1000$ |
| $\Omega$ | $\text{k}\Omega$ | diviser par $1000$ |
| $\text{A}$ | $\text{mA}$ | multiplier par $1000$ |
| $\text{mA}$ | $\text{A}$ | diviser par $1000$ |
| $\text{mm}^2$ | $\text{m}^2$ | multiplier par $10^{-6}$ |
| $\text{cm}^2$ | $\text{m}^2$ | multiplier par $10^{-4}$ |

## Exemples numériques de référence

:::formule Appliquer la loi d'Ohm
$R = 24\ \Omega$ et $I = 0{,}5\ \text{A}$ :
$$
U = R \cdot I = 24 \times 0{,}5 = 12\ \text{V}
$$

$U = 12\ \text{V}$ et $R = 4\ \Omega$ :
$$
I = \frac{U}{R} = \frac{12}{4} = 3\ \text{A}
$$
:::

:::formule Résistance d'un câble de cuivre
$L = 100\ \text{m}$, $S = 1\ \text{mm}^2 = 10^{-6}\ \text{m}^2$, $\rho = 1{,}7 \times 10^{-8}\ \Omega \cdot \text{m}$ :
$$
R = 1{,}7 \times 10^{-8} \times \frac{100}{10^{-6}} = 1{,}7\ \Omega
$$
:::

:::formule Deux résistances en parallèle
$R_1 = 4\ \Omega$ et $R_2 = 12\ \Omega$ :
$$
\frac{1}{R_{\text{éq}}} = \frac{1}{4} + \frac{1}{12} = \frac{4}{12} = \frac{1}{3}
\qquad \Rightarrow \qquad R_{\text{éq}} = 3\ \Omega
$$
:::

:::remarque Repères utiles
- En série : $R_{\text{éq}}$ est **plus grande** que chaque résistance.
- En parallèle : $R_{\text{éq}}$ est **plus petite** que la plus petite des résistances.
- $R_{\text{éq}}$ en parallèle ne peut jamais être nulle tant qu'aucune branche n'est nulle.
:::

## Instruments de mesure

| Appareil | Grandeur mesurée | Branchement |
| --- | --- | --- |
| Ampèremètre | intensité $I$ (A) | en **série** (dans le fil) |
| Voltmètre | tension $U$ (V) | en **dérivation** (aux bornes) |
| Ohmmètre | résistance $R$ (Ω) | hors circuit, alimentation coupée |
