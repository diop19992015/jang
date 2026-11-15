---
titre: P4. Travail et puissance mécaniques
accroche: Travail moteur, résistant ou nul · Travail du poids · Puissance mécanique
ordre: 4
duree: 30
demo: false
objectifs:
  - Travail moteur, résistant ou nul
  - Travail du poids
  - Puissance mécanique
---

:::remarque À quoi ça sert au BFEM ?
Le calcul du travail $W = F \cdot d \cdot \cos \alpha$ et de la puissance $P = W/t$ est l’un des exercices de physique les plus fréquents au BFEM : ascenseur, grue, vélo, moteur… Savoir distinguer un travail moteur d’un travail résistant et convertir les unités (joules, watts, chevaux-vapeur) permet de traiter tout le volet « mécanique » d’un sujet en quelques minutes.
:::

## Le travail d’une force

:::definition Travail mécanique
Le **travail** d’une force est le produit de l’intensité de cette force par le déplacement du point d’application, multiplié par le cosinus de l’angle $\alpha$ entre la force et le déplacement.
:::

:::formule Travail d’une force
$$
W = F \cdot d \cdot \cos \alpha
$$

- $W$ : travail, en **joules** ($\mathrm{J}$) ;
- $F$ : intensité de la force, en **newtons** ($\mathrm{N}$) ;
- $d$ : déplacement, en **mètres** ($\mathrm{m}$) ;
- $\alpha$ : angle entre la force et le déplacement.

$$
1\ \mathrm{J} = 1\ \mathrm{N \cdot m}
$$
:::

:::remarque Pourquoi le cosinus ?
Le cosinus mesure la part de la force **utilement dirigée** le long du déplacement : $\cos 0° = 1$ (force dans le sens du déplacement), $\cos 90° = 0$ (force perpendiculaire), $\cos 180° = -1$ (force dans le sens inverse).
:::

## Travail moteur, travail résistant, travail nul

:::formule Les trois caractères du travail
| Angle $\alpha$ | $\cos \alpha$ | Signe de $W$ | Caractère | Exemple |
| --- | --- | --- | --- | --- |
| $\alpha < 90°$ | $> 0$ | $W > 0$ | **moteur** | tracter une caisse dans son sens |
| $\alpha = 90°$ | $= 0$ | $W = 0$ | **nul** | porter un sac, bras horizontal, en marchant |
| $\alpha > 90°$ | $< 0$ | $W < 0$ | **résistant** | freiner, frottement, poids pendant une montée |
:::

:::definition Travail moteur, résistant et nul
- Un travail est **moteur** quand la force **aide** le mouvement ($W > 0$) : elle fournit de l’énergie au corps.
- Il est **résistant** quand la force **s’oppose** au mouvement ($W < 0$) : elle prélève de l’énergie.
- Il est **nul** quand la force est **perpendiculaire** au déplacement ou quand le déplacement est nul ($W = 0$).
:::

:::exemple Trois cas du même trajet
Un élève parcourt $d = 100\ \mathrm{m}$ en portant un sac de $F = 50\ \mathrm{N}$ au bout du bras, bras horizontal :

- le **poids** du sac est perpendiculaire au déplacement horizontal → $W_P = 50 \times 100 \times \cos 90° = 0\ \mathrm{J}$ : travail nul ;
- la **force de son bras** (verticale, vers le haut) est aussi perpendiculaire au déplacement → $W = 0\ \mathrm{J}$ ;
- la **résistance de l’air** ($F = 10\ \mathrm{N}$, sens inverse) donne $W = 10 \times 100 \times \cos 180° = -1000\ \mathrm{J}$ : travail **résistant**.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier l’angle : $W = F \cdot d$ ne marche que si la force et le déplacement sont **dans le même sens** ($\alpha = 0°$).
2. Écrire $W = -1000\ \mathrm{J}$ sans préciser que le travail est **résistant** : le signe a un sens physique.
3. Confondre travail et force : le travail s’exprime en **joules**, jamais en newtons.
4. Oublier de convertir : $10\ \mathrm{cm} = 0{,}1\ \mathrm{m}$ et $1\ \mathrm{km} = 1000\ \mathrm{m}$ avant de calculer.
:::

## Le travail du poids

:::formule Travail du poids pendant une montée
Quand un corps de masse $m$ monte de la hauteur $h$ (montée régulière) :

$$
W_P = -m \cdot g \cdot h \quad \text{(pendant la montée)}
$$

$$
W_P = +m \cdot g \cdot h \quad \text{(pendant la descente)}
$$

Le poids étant **vertical vers le bas** : il s’oppose à la montée (travail **résistant**) et **aide** la descente (travail **moteur**). Déplacement horizontal : $\alpha = 90°$, donc $W_P = 0$.
:::

:::exemple Ascenseur : le poids pendant la montée
Un ascenseur soulève une charge de $m = 600\ \mathrm{kg}$ sur $h = 12\ \mathrm{m}$ :

$$
W_P = -m \cdot g \cdot h = -600 \times 9{,}8 \times 12 = -70\,560\ \mathrm{J}
$$

Le travail du poids est **résistant** : $-70\,560\ \mathrm{J}$ (c’est la force du câble, moteur, qui fournit $+70\,560\ \mathrm{J}$). Lorsque l’ascenseur redescend de $12\ \mathrm{m}$, le même calcul donne $+70\,560\ \mathrm{J}$ : le travail du poids devient **moteur**.
:::

:::piege Les pièges du travail du poids
1. Oublier le signe : pendant la montée, le travail du poids est **toujours négatif**.
2. Utiliser la masse en kg sans passer par le poids : d’abord $P = m \cdot g$ (en N), puis $W = P \cdot h$.
3. Prendre la distance parcourue sur le sol au lieu de la **hauteur** verticale $h$.
:::

## La puissance mécanique

:::definition Puissance
La **puissance** est la vitesse à laquelle un travail est effectué : elle mesure la rapidité avec laquelle l’énergie est fournie ou consommée.
:::

:::formule Puissance
$$
P = \frac{W}{t}
$$

- $W$ : travail, en **joules** ($\mathrm{J}$) ;
- $t$ : durée, en **secondes** ($\mathrm{s}$) ;
- $P$ : puissance, en **watts** ($\mathrm{W}$).

$$
1\ \mathrm{W} = 1\ \mathrm{J/s} \qquad 1\ \mathrm{kW} = 1000\ \mathrm{W} \qquad 1\ \mathrm{CV} = 736\ \mathrm{W}
$$
:::

:::exemple Calculer une puissance
Un moteur soulève une caisse en effectuant $W = 19\,600\ \mathrm{J}$ en $t = 10\ \mathrm{s}$ :

$$
P = \frac{W}{t} = \frac{19\,600}{10} = 1960\ \mathrm{W} \approx 2\ \mathrm{kW}
$$

En chevaux-vapeur : $P = 1960 \div 736 \approx 2{,}7\ \mathrm{CV}$.
:::

:::methode Résoudre un problème de puissance
1. Convertir toutes les données en unités SI : $\mathrm{m}$, $\mathrm{N}$, $\mathrm{s}$.
2. Calculer le travail : $W = F \cdot d \cdot \cos \alpha$ ou $W = m \cdot g \cdot h$ (poids).
3. Calculer la puissance : $P = W/t$.
4. Convertir si besoin : $\div 1000$ pour le kW, $\div 736$ pour le CV.
5. Donner le caractère du travail (moteur, résistant ou nul) et le résultat avec son unité.
:::

## Puissance moteur, rendement et cheval-vapeur

:::definition Puissance moteur et puissance utile
- La **puissance moteur** $P_m$ est la puissance **absorbée** par le moteur (fournie par le carburant ou le réseau électrique).
- La **puissance utile** $P_u$ est la puissance **réellement délivrée** au corps que l’on veut mouvoir (soulever, tirer…).
:::

:::formule Rendement
$$
\eta = \frac{P_u}{P_m} \times 100\,\%
$$

- $\eta$ : rendement, exprimé en **pourcentage** (toujours inférieur à $100\,\%$ : il y a toujours des pertes par frottements) ;
- équivalent avec les travaux : $\eta = \dfrac{W_u}{W_m} \times 100\,\%$.
:::

:::exemple Rendement d’un ascenseur
Le moteur d’un ascenseur **absorbe** $P_m = 4410\ \mathrm{W}$ pour fournir une puissance utile de $P_u = 3528\ \mathrm{W}$ :

$$
\eta = \frac{3528}{4410} \times 100\,\% = 0{,}8 \times 100\,\% = 80\,\%
$$

$20\,\%$ de l’énergie est perdue (frottements, chaleur). En CV : $P_u = 3528 \div 736 = 4{,}8\ \mathrm{CV}$.
:::

:::remarque Le cheval-vapeur, une unité du quotidien
Le **cheval-vapeur** ($\mathrm{CV}$) est une ancienne unité encore utilisée pour les moteurs : $1\ \mathrm{CV} = 736\ \mathrm{W}$. Un vélo de course développe environ $0{,}2\ \mathrm{CV}$ ($150\ \mathrm{W}$), un scooter $5\ \mathrm{CV}$, et les moteurs de voitures se déclarent en kilowatts ou en CV.
:::

:::erreur Les erreurs qui coûtent des points
1. Écrire $P = W \cdot t$ : c’est **diviser** par le temps, pas multiplier.
2. Utiliser des minutes ou des heures sans convertir en **secondes** : $2\ \mathrm{min} = 120\ \mathrm{s}$.
3. Oublier l’unité : $P = 200$ est incomplet, il faut $P = 200\ \mathrm{W}$.
4. Confondre puissance moteur et puissance utile dans le rendement : $\eta = P_u / P_m$ (utile sur moteur), jamais l’inverse.
5. Prendre $\eta > 100\,\%$ : impossible, l’énergie ne se crée pas.
:::

## Ce qu’il faut retenir

- **Travail** : $W = F \cdot d \cdot \cos \alpha$, en joules ($\mathrm{J}$) ; $1\ \mathrm{J} = 1\ \mathrm{N \cdot m}$.
- **Moteur** ($W > 0$, $\alpha < 90°$) ; **résistant** ($W < 0$, $\alpha > 90°$) ; **nul** ($W = 0$, $\alpha = 90°$ ou $d = 0$).
- **Travail du poids** : $W_P = \pm m \cdot g \cdot h$ ; négatif en montée (résistant), positif en descente (moteur), nul à l’horizontale.
- **Puissance** : $P = W/t$, en watts ($\mathrm{W}$) ; $1\ \mathrm{W} = 1\ \mathrm{J/s}$.
- **Puissance moteur** (absorbée) et **puissance utile** (délivrée) ; **rendement** $\eta = P_u / P_m \times 100\,\% < 100\,\%$.
- **Cheval-vapeur** : $1\ \mathrm{CV} = 736\ \mathrm{W}$ ; $1\ \mathrm{kW} = 1000\ \mathrm{W}$.
