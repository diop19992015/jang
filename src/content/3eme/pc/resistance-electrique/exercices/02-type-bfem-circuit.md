---
titre: Sujet type BFEM — Résistance électrique et montage d'un circuit
difficulte: 3
type: bfem
annee: 2023
indices:
  - Lis d'abord le graphique U = f(I) : prends un point lisible et calcule R = U/I.
  - Pour le fil de cuivre, convertis la section en mm² en m² avant d'utiliser R = ρL/S.
  - Traite d'abord le montage (série ou parallèle) avant de calculer les intensités et les tensions.
---

## Énoncé

**Contexte.** Dans un laboratoire du collège de Ziguinchor, un élève réalise un circuit comportant un générateur de tension $U = 9\ \text{V}$, un interrupteur, deux résistances $R_1 = 6\ \Omega$ et $R_2 = 3\ \Omega$ montées **en parallèle**, et un ampèremètre qui mesure l'intensité totale.

**Partie A.** (3 points)
1. On donne ci-dessous la caractéristique $U = f(I)$ d'une résistance ohmique, obtenue au banc de mesure : elle est une droite passant par l'origine qui traverse le point $I = 0{,}5\ \text{A}$ pour $U = 4\ \text{V}$. Calculer la résistance de cette résistance. (2 pts)
2. Justifier, à partir du graphique, pourquoi cette résistance est dite *ohmique*. (1 pt)

**Partie B.** (3 points)
3. Un câble de cuivre de longueur $L = 250\ \text{m}$ et de section $S = 2\ \text{mm}^2$ relie le laboratoire au tableau électrique. Calculer la résistance de ce câble, sachant que la résistivité du cuivre est $\rho = 1{,}7 \times 10^{-8}\ \Omega \cdot \text{m}$. (2 pts)
4. Que deviendrait cette résistance si le câble avait $500\ \text{m}$ de long, à section identique ? Justifier. (1 pt)

**Partie C.** (4 points)
5. Calculer la résistance équivalente $R_{\text{éq}}$ du montage en parallèle de $R_1$ et $R_2$. (1,5 pt)
6. Calculer l'intensité totale $I$ délivrée par le générateur et l'intensité $I_1$ qui traverse $R_1$. (1,5 pt)
7. Quelle est la tension aux bornes de $R_2$ ? Justifier par la règle des nœuds ou la règle des mailles. (1 pt)

## Solution

**1. Résistance lue sur la caractéristique.**

Sur la droite, le point $I = 0{,}5\ \text{A}$ correspond à $U = 4\ \text{V}$. La loi d'Ohm donne :

$$
R = \frac{U}{I} = \frac{4}{0{,}5} = 8\ \Omega
$$

La résistance vaut $8\ \Omega$.

**2. Pourquoi la résistance est ohmique.**

La caractéristique $U = f(I)$ est une **droite passant par l'origine** : la tension est donc **proportionnelle** à l'intensité. C'est exactement la définition d'un conducteur **ohmique**, et la pente de cette droite donne la valeur de $R$.

**3. Résistance du câble de cuivre.**

Données : $\rho = 1{,}7 \times 10^{-8}\ \Omega \cdot \text{m}$, $L = 250\ \text{m}$, $S = 2\ \text{mm}^2$.

Conversion de la section : $S = 2\ \text{mm}^2 = 2 \times 10^{-6}\ \text{m}^2$.

Formule : $R = \rho \cdot \dfrac{L}{S}$

$$
R = 1{,}7 \times 10^{-8} \times \frac{250}{2 \times 10^{-6}}
= 1{,}7 \times 10^{-8} \times 125 \times 10^{6}
$$

$$
R = 1{,}7 \times 125 \times 10^{-2} = 212{,}5 \times 10^{-2} = 2{,}125\ \Omega
$$

La résistance du câble est $R \approx 2{,}1\ \Omega$.

**4. Câble deux fois plus long.**

$R = \rho L/S$ : la résistance est **proportionnelle à la longueur**. Si $L$ est doublé ($500\ \text{m}$), $R$ est aussi doublé :

$$
R' = 2 \times 2{,}125 = 4{,}25\ \Omega
$$

C'est pourquoi, pour de longues distances, on augmente la section $S$ (celle-ci fait le dénominateur) afin de garder une faible résistance et de limiter les pertes par effet Joule.

**5. Résistance équivalente du montage en parallèle.**

$$
\frac{1}{R_{\text{éq}}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{6} + \frac{1}{3} = \frac{1}{6} + \frac{2}{6} = \frac{3}{6} = \frac{1}{2}
$$

En retournant : $R_{\text{éq}} = 2\ \Omega$.

Contrôle : $2\ \Omega$ est bien inférieur à la plus petite résistance ($3\ \Omega$) : le résultat est cohérent.

**6. Intensité totale et intensité dans $R_1$.**

Intensité totale délivrée par le générateur :

$$
I = \frac{U}{R_{\text{éq}}} = \frac{9}{2} = 4{,}5\ \text{A}
$$

En parallèle, la tension aux bornes de chaque résistance vaut $9\ \text{V}$, donc pour $R_1$ :

$$
I_1 = \frac{U}{R_1} = \frac{9}{6} = 1{,}5\ \text{A}
$$

(On peut vérifier avec la règle des nœuds : $I_2 = U/R_2 = 9/3 = 3\ \text{A}$ et $I_1 + I_2 = 1{,}5 + 3 = 4{,}5\ \text{A} = I$ ✓)

**7. Tension aux bornes de $R_2$.**

Les deux résistances sont branchées aux **mêmes deux points** du circuit : en parallèle, la tension est commune. La règle des mailles (ou la définition du parallèle) donne :

$$
U = U_1 = U_2 = 9\ \text{V}
$$

La tension aux bornes de $R_2$ est donc **$9\ \text{V}$**, c'est-à-dire exactement la tension du générateur.

:::methode Ce que le correcteur attend
- Les **formules numérotées** et le **remplacement** des valeurs avec leurs unités.
- Les conversions obligatoires : $\text{mm}^2 \to \text{m}^2$ (facteur $10^{-6}$) et fraction retournée en parallèle.
- Le vocabulaire exact : « droite passant par l'origine », « proportionnel », « tension commune », « règle des nœuds ».
- Le résultat arrondi avec son unité ($\Omega$, $\text{A}$, $\text{V}$).
:::
