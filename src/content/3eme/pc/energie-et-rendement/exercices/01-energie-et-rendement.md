---
titre: Calculer une énergie et un rendement
difficulte: 1
type: entrainement
indices:
  - Convertis d’abord les unités : masses en kg, hauteurs en m, durées en secondes.
  - Écris la formule avant d’installer le calcul, avec les symboles.
  - Pour le rendement, identifie bien l’énergie fournie (numérateur : l’énergie utile).
---

## Énoncé

On prend $g = 10\ N/kg$.

1. Une voiture de masse $m = 800\ kg$ roule à la vitesse $v = 15\ m/s$. Calculer son énergie cinétique $E_c$.

2. Un sac de provisions de $m = 40\ kg$ est posé sur une étagère à $h = 3\ m$ du sol. Calculer son énergie potentielle $E_p$.

3. Une lampe de puissance $P = 100\ W$ reste allumée pendant $t = 2\ h$. Calculer l’énergie électrique $W$ consommée, en joules puis en kilowatt-heures.

4. Un moteur a reçu $E_{\text{fournie}} = 5000\ J$ d’énergie chimique et a effectué un travail utile de $E_{\text{utile}} = 3500\ J$. Calculer son rendement $\eta$ en pourcentage, puis donner la valeur des pertes d’énergie.

## Solution

**1. Énergie cinétique de la voiture.**

La voiture est en mouvement : on utilise $E_c = \dfrac{1}{2} m v^2$, avec $m = 800\ kg$ et $v = 15\ m/s$ (déjà en S.I.).

$$
E_c = \frac{1}{2} \times 800 \times 15^2
$$

$$
E_c = 400 \times 225 = 90\,000\ J
$$

La voiture possède **$90\,000\ J$**, soit **$90\ kJ$**, d’énergie cinétique.

**2. Énergie potentielle du sac.**

Le sac est immobile en hauteur : $E_p = m \times g \times h$, avec $m = 40\ kg$, $g = 10\ N/kg$, $h = 3\ m$.

$$
E_p = 40 \times 10 \times 3 = 1\,200\ J
$$

Le sac possède **$1\,200\ J$** d’énergie potentielle ; cette énergie deviendrait de l’énergie cinétique s’il tombait.

**3. Énergie consommée par la lampe.**

Conversion de la durée : $t = 2\ h = 2 \times 3600 = 7200\ s$.

$$
W = P \times t = 100 \times 7200 = 720\,000\ J
$$

En kilowatt-heures : $P = 100\ W = 0{,}1\ kW$ et $t = 2\ h$, donc

$$
W = 0{,}1 \times 2 = 0{,}2\ kWh
$$

Vérification : $0{,}2 \times 3{,}6 \times 10^6 = 720\,000\ J$ ✓. La lampe consomme **$720\,000\ J$**, soit **$0{,}2\ kWh$**.

**4. Rendement et pertes du moteur.**

$$
\eta = \frac{E_{\text{utile}}}{E_{\text{fournie}}} = \frac{3500}{5000} = 0{,}7
$$

En pourcentage : $\eta = 0{,}7 \times 100 = \mathbf{70\ \%}$.

Les pertes sont la partie non utilisée :

$$
E_{\text{pertes}} = E_{\text{fournie}} - E_{\text{utile}} = 5000 - 3500 = 1\,500\ J
$$

Le moteur a un rendement de **$70\ \%$** et dissipe **$1\,500\ J$** sous forme de chaleur et de bruit.

:::remarque Contrôle de cohérence
Le rendement ($70\ \%$) est inférieur à 100 %, et $E_{\text{utile}} + E_{\text{pertes}} = 3500 + 1500 = 5000\ J = E_{\text{fournie}}$ : le bilan d’énergie est vérifié.
:::
