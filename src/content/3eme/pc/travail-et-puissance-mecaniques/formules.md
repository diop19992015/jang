## Formules à mémoriser

:::formule Travail d’une force
$$
W = F \cdot d \cdot \cos \alpha
$$

- $W$ : travail en **joules** ($\mathrm{J}$)
- $F$ : intensité de la force en **newtons** ($\mathrm{N}$)
- $d$ : déplacement en **mètres** ($\mathrm{m}$)
- $\alpha$ : angle entre la force et le déplacement

Cas particuliers :
$$
\alpha = 0° \Rightarrow W = F \cdot d \qquad \alpha = 90° \Rightarrow W = 0 \qquad \alpha = 180° \Rightarrow W = -F \cdot d
$$
:::

:::formule Travail du poids
$$
W_P = -m \cdot g \cdot h \ \text{(montée)} \qquad W_P = +m \cdot g \cdot h \ \text{(descente)}
$$

- $m$ : masse en $\mathrm{kg}$, $g = 9{,}8\ \mathrm{N/kg}$, $h$ : hauteur en $\mathrm{m}$
- $\alpha = 90°$ lors d’un déplacement horizontal : $W_P = 0$.
:::

:::formule Puissance
$$
P = \frac{W}{t}
$$

- $W$ : travail en $\mathrm{J}$, $t$ : durée en **secondes**, $P$ : puissance en **watts** ($\mathrm{W}$)
- Formule équivalente : $W = P \cdot t$
:::

:::formule Rendement
$$
\eta = \frac{P_u}{P_m} \times 100\,\% = \frac{W_u}{W_m} \times 100\,\%
$$

- $P_u$ : puissance **utile** (délivrée), $P_m$ : puissance **moteur** (absorbée)
- $\eta < 100\,\%$ toujours : pertes par frottements et chaleur.
:::

## Caractère du travail

| Situation | Angle $\alpha$ | Signe | Caractère |
| --- | --- | --- | --- |
| La force aide le mouvement | $\alpha < 90°$ | $+$ | moteur |
| La force est perpendiculaire au déplacement | $90°$ | $0$ | nul |
| La force s’oppose au mouvement | $\alpha > 90°$ | $-$ | résistant |
| Corps immobile ($d = 0$) | quelconque | $0$ | nul |

:::remarque Trois exemples à retenir
- **Marcher avec un sac, bras horizontal** : le poids et la force du bras sont perpendiculaires au déplacement → $W = 0$.
- **Monter les escaliers avec un sac** : le poids est dans le sens inverse du déplacement vertical → travail résistant.
- **Descendre les escaliers avec un sac** : le poids va dans le sens du déplacement → travail moteur.
:::

## Unités du Système international

:::formule Les unités à connaître
| Grandeur | Unité | Symbole | Repère |
| --- | --- | --- | --- |
| Force | newton | $\mathrm{N}$ | $1\ \mathrm{N} \approx$ poids de $100\ \mathrm{g}$ |
| Déplacement | mètre | $\mathrm{m}$ | $1\ \mathrm{km} = 1000\ \mathrm{m}$ |
| Travail | joule | $\mathrm{J}$ | $1\ \mathrm{J} = 1\ \mathrm{N \cdot m}$ |
| Puissance | watt | $\mathrm{W}$ | $1\ \mathrm{W} = 1\ \mathrm{J/s}$ |
| Temps | seconde | $\mathrm{s}$ | $1\ \mathrm{min} = 60\ \mathrm{s}$ |
:::

:::formule Conversions de puissance
$$
1\ \mathrm{kW} = 1000\ \mathrm{W} \qquad 1\ \mathrm{CV} = 736\ \mathrm{W} \qquad 1\ \mathrm{kW} \approx 1{,}36\ \mathrm{CV}
$$
:::

## Exemples numériques de référence

:::formule Travail moteur d’une traction
$F = 50\ \mathrm{N}$, $d = 4\ \mathrm{m}$, force et déplacement dans le même sens ($\alpha = 0°$) :

$$
W = F \cdot d = 50 \times 4 = 200\ \mathrm{J}
$$
:::

:::formule Travail résistant d’un freinage
Force de frottement $f = 20\ \mathrm{N}$, $d = 500\ \mathrm{m}$, sens inverse ($\alpha = 180°$) :

$$
W = -f \cdot d = -20 \times 500 = -10\,000\ \mathrm{J} = -10\ \mathrm{kJ}
$$
:::

:::formule Travail du poids d’une charge soulevée par une grue
$m = 200\ \mathrm{kg}$, $h = 10\ \mathrm{m}$ :

$$
W_P = -m \cdot g \cdot h = -200 \times 9{,}8 \times 10 = -19\,600\ \mathrm{J}
$$

Le câble fournit en revanche $+19\,600\ \mathrm{J}$ (travail moteur).
:::

:::formule Puissance d’un ascenseur
$W = 70\,560\ \mathrm{J}$ en $t = 20\ \mathrm{s}$ :

$$
P = \frac{W}{t} = \frac{70\,560}{20} = 3528\ \mathrm{W} = 3{,}528\ \mathrm{kW} \approx 4{,}8\ \mathrm{CV}
$$
:::

:::formule Rendement d’un moteur
$P_m = 4410\ \mathrm{W}$, $P_u = 3528\ \mathrm{W}$ :

$$
\eta = \frac{3528}{4410} \times 100\,\% = 80\,\%
$$
:::

## Réflexes de résolution

- Toujours convertir **avant** de calculer : centimètres en mètres, minutes en secondes.
- Vérifier le **signe** du travail : positif → moteur ; négatif → résistant ; nul → perpendiculaire.
- Un travail se calcule en **joules**, une puissance en **watts** : ne jamais confondre les deux.
- Après un calcul de puissance, vérifier l’ordre de grandeur : un humain, c’est quelques cents de watts ; un moteur d’ascenseur, quelques kilowatts.
- Le rendement se donne **en pourcentage** et ne dépasse jamais $100\,\%$.

:::remarque Mémoire du cheval-vapeur
$1\ \mathrm{CV} = 736\ \mathrm{W}$ : pour passer du watt au cheval-vapeur, on divise par 736 ; pour l’inverse, on multiplie par 736. Ex. : $150\ \mathrm{W} \div 736 \approx 0{,}2\ \mathrm{CV}$.
:::
