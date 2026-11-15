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

:::remarque À quoi ça sert au BFEM ?
La loi d'Ohm et les associations de résistances sont les exercices de calculs les plus fréquents de l'électricité au BFEM. Une bonne maîtrise de $U = R \cdot I$, de la lecture du graphique $U = f(I)$ et des formules de série/parallèle permet de traiter en quelques minutes tout le volet « électricité » d'un sujet.
:::

## Rappel : tension, intensité et circuit

Rappelons les grandeurs déjà vues :

- l'**intensité** $I$ se mesure en ampères ($\text{A}$) avec un **ampèremètre** placé en série ;
- la **tension** $U$ se mesure en volts ($\text{V}$) avec un **voltmètre** placé en dérivation (en parallèle) ;
- la **résistance** $R$ se mesure en ohms ($\Omega$) avec un ohmmètre.

Un **conducteur ohmique** (fil de cuivre, résistance, ampoule métallique) est un conducteur pour lequel la tension à ses bornes est proportionnelle à l'intensité qui le traverse.

## La loi d'Ohm

:::formule Loi d'Ohm
$$
U = R \cdot I
$$

- $U$ : tension aux bornes du conducteur, en **volts** ($\text{V}$) ;
- $R$ : résistance du conducteur, en **ohms** ($\Omega$) ;
- $I$ : intensité du courant, en **ampères** ($\text{A}$).
:::

On en déduit deux formules équivalentes, obtenues par passage à l'opposé :

$$
I = \frac{U}{R} \qquad \qquad R = \frac{U}{I}
$$

:::exemple Appliquer la loi d'Ohm
Une résistance de $R = 24\ \Omega$ est parcourue par un courant de $I = 0{,}5\ \text{A}$. Calculer la tension à ses bornes :

$$
U = R \cdot I = 24 \times 0{,}5 = 12\ \text{V}
$$

Réciproquement, si $U = 12\ \text{V}$ et $I = 0{,}5\ \text{A}$, alors $R = U/I = 12/0{,}5 = 24\ \Omega$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de convertir les unités avant de calculer : $2\ \text{k}\Omega = 2000\ \Omega$ et $50\ \text{mA} = 0{,}05\ \text{A}$.
2. Utiliser la mauvaise formule : $R = U/I$ (et non $R = U \cdot I$), $I = U/R$ (et non $I = U \cdot R$).
3. Écrire le résultat sans unité : $U = 12$ est incomplet, il faut $U = 12\ \text{V}$.
:::

## La caractéristique U = f(I)

:::definition Caractéristique d'un conducteur ohmique
La **caractéristique** $U = f(I)$ est le graphique qui donne la tension $U$ à la borne d'un conducteur en fonction de l'intensité $I$ qui le traverse. Pour un conducteur ohmique, c'est une **droite passant par l'origine** : $U$ est proportionnel à $I$.
:::

:::methode Exploiter un graphique U = f(I)
1. Vérifier que la droite passe par l'origine : si oui, le conducteur est ohmique.
2. Prendre un point de la droite lisible (éviter l'origine).
3. Calculer la pente : $R = U/I$ en prenant les coordonnées de ce point.
4. Reporter l'unité : $R$ s'exprime en ohms.
:::

:::exemple Lecture d'une caractéristique
Sur la caractéristique d'une résistance, on lit le point $I = 0{,}5\ \text{A}$ pour $U = 3\ \text{V}$ :

$$
R = \frac{U}{I} = \frac{3}{0{,}5} = 6\ \Omega
$$

La pente de la droite est donc $6\ \Omega$ : toute intensité doublée produit une tension doublée.
:::

:::remarque Ce que dit la pente
Plus la droite est **raide**, plus la résistance est **grande** : pour la même intensité, il faut une tension plus élevée. Une droite horizontale correspondrait à $R = 0$ (conducteur parfait).
:::

## La résistance d'un fil

La résistance d'un conducteur dépend de sa **nature**, de sa **longueur** et de sa **section**.

:::formule Résistance d'un fil
$$
R = \rho \cdot \frac{L}{S}
$$

- $R$ : résistance en ohms ($\Omega$) ;
- $\rho$ : **résistivité** du matériau en $\Omega \cdot \text{m}$ (constante à une température donnée) ;
- $L$ : longueur du fil en mètres ($\text{m}$) ;
- $S$ : section du fil en mètres carrés ($\text{m}^2$).
:::

:::formule Résistivités à connaître
| Matériau | $\rho$ ($\Omega \cdot \text{m}$) |
| --- | --- |
| Cuivre | $1{,}7 \times 10^{-8}$ |
| Aluminium | $2{,}8 \times 10^{-8}$ |
| Fer | $10 \times 10^{-8}$ |
| Argent | $1{,}6 \times 10^{-8}$ |
:::

:::exemple Calculer la résistance d'un câble
Un fil de cuivre de longueur $L = 100\ \text{m}$ a une section $S = 1\ \text{mm}^2$. On a $1\ \text{mm}^2 = 10^{-6}\ \text{m}^2$.

$$
R = \rho \cdot \frac{L}{S} = 1{,}7 \times 10^{-8} \times \frac{100}{10^{-6}}
$$

$$
R = 1{,}7 \times 10^{-8} \times 10^{8} = 1{,}7\ \Omega
$$

Ce câble de $100\ \text{m}$ présente donc une résistance de $1{,}7\ \Omega$, faible devant celle d'une lampe.
:::

:::piege Les pièges de la résistance d'un fil
- La section doit être en $\text{m}^2$ : $1\ \text{mm}^2 = 10^{-6}\ \text{m}^2$ et $1\ \text{cm}^2 = 10^{-4}\ \text{m}^2$.
- Plus le fil est **long** ou **fin**, plus sa résistance est **grande** : un fil long et mince est un mauvais conducteur.
:::

:::remarque Un exemple sénégalais
Les longues lignes de transport de la SENELEC relient des centrales aux villes : on choisit des câbles **en aluminium**, plus légers et moins chers que le cuivre, de section importante pour garder une résistance faible et limiter les pertes d'énergie par effet Joule.
:::

## Les résistances et leurs associations

Une **résistance** (ou résistor) est un composant qui impose une valeur de résistance précise. On la représente par le symbole $R$.

### Association en série

Les résistances sont en **série** quand le courant les parcourt **l'une après l'autre** (un seul chemin).

:::formule Association en série
$$
R_{\text{éq}} = R_1 + R_2 + R_3 + \ldots
$$

La tension se répartit : $U = U_1 + U_2$, tandis que l'intensité est la même partout : $I = I_1 = I_2$.
:::

***Exemple.*** $R_1 = 4\ \Omega$ et $R_2 = 6\ \Omega$ en série : $R_{\text{éq}} = 4 + 6 = 10\ \Omega$.

### Association en parallèle

Les résistances sont en **parallèle** quand elles sont reliées **aux mêmes deux points** : le courant se partage entre elles.

:::formule Association en parallèle
$$
\frac{1}{R_{\text{éq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots
$$

La tension est la même aux bornes de chaque résistance : $U = U_1 = U_2$, tandis que l'intensité se partage : $I = I_1 + I_2$.
:::

:::exemple Calcul en parallèle
$R_1 = 4\ \Omega$ et $R_2 = 12\ \Omega$ sont associées en parallèle :

$$
\frac{1}{R_{\text{éq}}} = \frac{1}{4} + \frac{1}{12} = \frac{3}{12} + \frac{1}{12} = \frac{4}{12} = \frac{1}{3}
$$

Donc $R_{\text{éq}} = 3\ \Omega$.

Remarque : $R_{\text{éq}}$ est **toujours plus petite** que la plus petite des résistances ($3 < 4$).
:::

:::erreur Les erreurs qui coûtent des points
1. **Additionner** les résistances en parallèle : c'est interdit, on additionne les **inverses**.
2. Inverser au dernier moment sans calculer : après avoir trouvé $1/R_{\text{éq}} = 1/3$, on écrit $R_{\text{éq}} = 3$ (et non $1/3\ \Omega$).
3. Oublier de simplifier les fractions : mettre au même dénominateur avant d'additionner.
:::

## Règle des mailles et règle des nœuds

:::formule Règle des mailles (loi des tensions)
Dans une **maille** (boucle fermée) d'un circuit, la somme des tensions **utilisées** est égale à la tension **fournie** par le générateur :

$$
U = U_1 + U_2 + \ldots \quad (\text{en série})
$$

Aux bornes d'une association en parallèle : $U = U_1 = U_2$.
:::

:::formule Règle des nœuds (loi des intensités)
En un **nœud** (point de branchement), l'intensité **arrive** est égale à la somme des intensités **qui partent** :

$$
I = I_1 + I_2 + \ldots
$$

En série : $I = I_1 = I_2$ (le courant n'a qu'un seul chemin).
:::

:::methode Méthode en tableau pour un circuit
1. Repérer les associations : en série (addition) ou en parallèle (inverses).
2. Calculer la résistance équivalente $R_{\text{éq}}$.
3. Calculer l'intensité totale : $I = U/R_{\text{éq}}$.
4. Remonter le circuit avec la règle des mailles ($U = U_1 + U_2$) et la règle des nœuds ($I = I_1 + I_2$).
:::

:::exemple Circuit complet
Un générateur de $U = 6\ \text{V}$ alimente deux résistances en série : $R_1 = 4\ \Omega$ et $R_2 = 8\ \Omega$.

1. Résistance équivalente : $R_{\text{éq}} = R_1 + R_2 = 4 + 8 = 12\ \Omega$.
2. Intensité totale : $I = U/R_{\text{éq}} = 6/12 = 0{,}5\ \text{A}$.
3. Règle des mailles : $U_1 = R_1 \cdot I = 4 \times 0{,}5 = 2\ \text{V}$ et $U_2 = R_2 \cdot I = 8 \times 0{,}5 = 4\ \text{V}$.
4. Vérification : $U_1 + U_2 = 2 + 4 = 6\ \text{V} = U$ ✓

Règle des nœuds : en série, $I_1 = I_2 = I = 0{,}5\ \text{A}$.
:::

## Montage série ou montage parallèle ?

| | En série | En parallèle |
| --- | --- | --- |
| Chemin du courant | un seul chemin | plusieurs chemins |
| Intensité | $I = I_1 = I_2$ | $I = I_1 + I_2$ |
| Tension | $U = U_1 + U_2$ | $U = U_1 = U_2$ |
| Résistance équivalente | $R_1 + R_2$ | $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ |
| Conséquence pratique | si une lampe grille, tout le circuit s'éteint | chaque appareil fonctionne de façon indépendante |

:::remarque Les lampes de la maison
Les lampes et appareils d'une maison sont montés en **parallèle** : chacun reçoit les $220\ \text{V}$ du réseau SENELEC et peut être allumé ou éteint sans couper les autres. Les lampes de Noël anciennes, elles, étaient montées en **série** : une seule grille et tout s'éteignait.
:::

## Ce qu'il faut retenir

- Loi d'Ohm : $U = R \cdot I$, avec $I = U/R$ et $R = U/I$ ; unités $\text{V}$, $\Omega$, $\text{A}$.
- La caractéristique $U = f(I)$ d'un conducteur ohmique est une **droite passant par l'origine**, dont la pente vaut $R$.
- Résistance d'un fil : $R = \rho L/S$ ; plus le fil est long ou fin, plus $R$ est grande.
- En **série** : $R_{\text{éq}} = R_1 + R_2$, $I$ commun, tensions qui s'additionnent.
- En **parallèle** : $1/R_{\text{éq}} = 1/R_1 + 1/R_2$, $U$ commun, intensités qui s'additionnent.
- Règle des **mailles** pour les tensions, règle des **nœuds** pour les intensités.
- Tous les appareils d'une maison sont montés en parallèle pour recevoir les $220\ \text{V}$ du réseau.
