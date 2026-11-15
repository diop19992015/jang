---
titre: Sujet type BFEM — Ascenseur : travail, puissance et rendement
difficulte: 3
type: bfem
annee: 2023
indices:
  - Convertis d’abord les longueurs en mètres et les durées en secondes.
  - Calcule d’abord le poids P = m·g, puis le travail du poids W = ± m·g·h.
  - Attention au signe : pendant la montée, le travail du poids est résistant (négatif).
  - Le rendement est η = Pu/Pm, toujours inférieur à 100 %.
---

## Énoncé

**Contexte.** L’ascenseur d’un immeuble de Guédiawaye soulève une charge totale de masse $m = 600\ \mathrm{kg}$ d’un étage à l’autre, sur une hauteur $h = 12\ \mathrm{m}$, en une durée $t = 20\ \mathrm{s}$ (montée régulière). On prend $g = 9{,}8\ \mathrm{N/kg}$. On admet que la force de traction du câble est égale au poids de la charge.

**Partie A — Travail et puissance** (5 points)

1. Calculer le poids $P$ de la charge et donner sa direction. (1 pt)
2. Calculer le travail $W$ de la force de traction du câble pendant la montée. Préciser si ce travail est moteur ou résistant et justifier. (2 pts)
3. Calculer la puissance moyenne $P_{moy}$ développée par le câble pendant la montée, en watts puis en kilowatts. (2 pts)

**Partie B — Le poids comme force résistante ou motrice** (2 points)

4. Calculer le travail du poids pendant cette montée, puis pendant une descente de la même hauteur. Préciser le caractère de chacun des deux travaux. (2 pts)

**Partie C — Rendement et unités** (3 points)

5. Le moteur de l’ascenseur **absorbe** une puissance $P_m = 4410\ \mathrm{W}$ alors que la puissance utile délivrée est $P_u = 3528\ \mathrm{W}$. Calculer le rendement $\eta$ du moteur en pourcentage. (1,5 pt)
6. Exprimer la puissance utile en chevaux-vapeur, sachant que $1\ \mathrm{CV} = 736\ \mathrm{W}$. (1,5 pt)

## Solution

**1. Poids de la charge.**

Données : $m = 600\ \mathrm{kg}$, $g = 9{,}8\ \mathrm{N/kg}$.

$$P = m \cdot g = 600 \times 9{,}8 = 5880\ \mathrm{N}$$

Le poids vaut $P = 5880\ \mathrm{N}$ et sa direction est **verticale**, son sens **vers le bas**.

**2. Travail de la traction du câble.**

La traction $T$ a la même intensité que le poids ($T = P = 5880\ \mathrm{N}$), elle est verticale **vers le haut**, comme le déplacement ($h = 12\ \mathrm{m}$ vers le haut) : $\alpha = 0°$.

$$W = T \cdot h = 5880 \times 12 = 70\,560\ \mathrm{J}$$

Soit $W \approx 70{,}6\ \mathrm{kJ}$. Ce travail est **positif** : c’est un travail **moteur**, car la force de traction est dans le sens du déplacement et fournit de l’énergie à la charge.

**3. Puissance moyenne du câble.**

Données : $W = 70\,560\ \mathrm{J}$, $t = 20\ \mathrm{s}$.

$$P_{moy} = \frac{W}{t} = \frac{70\,560}{20} = 3528\ \mathrm{W}$$

En kilowatts : $P_{moy} = 3528 \div 1000 = 3{,}528\ \mathrm{kW}$.

La puissance moyenne développée par le câble est donc $3528\ \mathrm{W}$, soit environ $3{,}5\ \mathrm{kW}$.

**4. Travail du poids pendant la montée et pendant la descente.**

- **Montée** : le poids ($5880\ \mathrm{N}$ vers le bas) et le déplacement ($12\ \mathrm{m}$ vers le haut) sont de sens inverse : $\alpha = 180°$.

$$W_P = -m \cdot g \cdot h = -600 \times 9{,}8 \times 12 = -70\,560\ \mathrm{J}$$

Le travail du poids est **résistant** : le poids s’oppose à la montée, c’est le câble qui fournit l’énergie.

- **Descente** : le poids et le déplacement ($12\ \mathrm{m}$ vers le bas) sont de même sens : $\alpha = 0°$.

$$W_P = +m \cdot g \cdot h = +70\,560\ \mathrm{J}$$

Le travail du poids est maintenant **moteur** : il aide la descente, c’est lui qui fait descendre la charge (le moteur doit alors seulement la freiner).

**5. Rendement du moteur.**

$$\eta = \frac{P_u}{P_m} \times 100\,\% = \frac{3528}{4410} \times 100\,\% = 0{,}8 \times 100\,\% = 80\,\%$$

Le rendement du moteur est $\eta = 80\,\%$ : $20\,\%$ de l’énergie absorbée est perdue sous forme de frottements et de chaleur. Le rendement reste toujours inférieur à $100\,\%$.

**6. Puissance utile en chevaux-vapeur.**

$$P_u = \frac{3528}{736} = 4{,}8\ \mathrm{CV}$$

La puissance utile de l’ascenseur vaut $4{,}8\ \mathrm{CV}$ (soit $3{,}528\ \mathrm{kW}$).

:::methode Ce que le correcteur attend
- Les **formules numérotées** et le **remplacement** des valeurs avec leurs unités : $P = m \cdot g = 600 \times 9{,}8 = 5880\ \mathrm{N}$, $W = T \cdot h = \dots = 70\,560\ \mathrm{J}$.
- Le **signe** du travail du poids justifié par l’angle ($180°$ en montée, $0°$ en descente) et le vocabulaire exact : moteur, résistant, nul.
- La durée convertie en secondes (déjà donnée) et la puissance en watts puis en kW.
- Le rendement $\eta = P_u / P_m$ en pourcentage, avec la mention que $\eta < 100\,\%$.
- Le résultat arrondi avec son unité : $\mathrm{N}$, $\mathrm{J}$, $\mathrm{W}$, $\mathrm{kW}$, $\mathrm{CV}$, $\%$.
:::

:::erreur Pièges classiques du sujet
1. Oublier le signe : pendant la montée, le travail du poids est **$-70\,560\ \mathrm{J}$** (résistant), pas $+70\,560\ \mathrm{J}$.
2. Calculer $P = W \cdot t$ au lieu de $P = W/t$ : on divise par la durée.
3. Utiliser des minutes au lieu des secondes (ici $20\ \mathrm{s}$ est déjà en secondes, mais vérifie toujours).
4. Inverser le rendement : $\eta = P_u / P_m = 3528/4410 = 80\,\%$ et non $4410/3528$ (ce qui donnerait $125\,\%$, impossible).
5. Confondre masse et poids : $m = 600\ \mathrm{kg}$ mais $P = 5880\ \mathrm{N}$.
:::
