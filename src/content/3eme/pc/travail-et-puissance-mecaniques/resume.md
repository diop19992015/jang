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

## L’essentiel du chapitre

:::formule Travail d’une force
$$
W = F \cdot d \cdot \cos \alpha
$$

- $F$ en $\mathrm{N}$, $d$ en $\mathrm{m}$, $W$ en **joules** ($\mathrm{J}$) ; $1\ \mathrm{J} = 1\ \mathrm{N \cdot m}$.
- $\alpha$ = angle entre la force et le déplacement.
:::

:::formule Travail moteur, résistant ou nul
| $\alpha$ | Signe de $W$ | Caractère |
| --- | --- | --- |
| $\alpha < 90°$ | $W > 0$ | **moteur** (la force aide le mouvement) |
| $\alpha = 90°$ | $W = 0$ | **nul** (force perpendiculaire ou $d = 0$) |
| $\alpha > 90°$ | $W < 0$ | **résistant** (la force s’oppose au mouvement) |
:::

:::formule Travail du poids
$$
W_P = \pm\, m \cdot g \cdot h
$$

- **Montée** : $W_P = -m \cdot g \cdot h$ (résistant, $\alpha = 180°$).
- **Descente** : $W_P = +m \cdot g \cdot h$ (moteur, $\alpha = 0°$).
- **Horizontal** : $W_P = 0$ ($\alpha = 90°$).
:::

:::formule Puissance
$$
P = \frac{W}{t}
$$

- $W$ en $\mathrm{J}$, $t$ en $\mathrm{s}$, $P$ en **watts** ($\mathrm{W}$).
- $1\ \mathrm{W} = 1\ \mathrm{J/s}$ ; $1\ \mathrm{kW} = 1000\ \mathrm{W}$ ; $1\ \mathrm{CV} = 736\ \mathrm{W}$.
:::

:::formule Puissance moteur et rendement
$$
\eta = \frac{P_u}{P_m} \times 100\,\%
$$

- $P_m$ : puissance **moteur** (absorbée par le moteur), $P_u$ : puissance **utile** (délivrée).
- $\eta < 100\,\%$ : il y a toujours des pertes (frottements, chaleur).
:::

## Méthode express

1. Convertir en unités SI : $\mathrm{cm} \to \mathrm{m}$, $\mathrm{min} \to \mathrm{s}$, $\mathrm{km} \to 1000\ \mathrm{m}$.
2. Identifier l’angle $\alpha$ entre la force et le déplacement : $0°$, $90°$ ou $180°$ dans la plupart des sujets.
3. Calculer le travail : $W = F \cdot d \cdot \cos \alpha$ ; pour le poids, $W_P = \pm\, m \cdot g \cdot h$.
4. Donner le **caractère** : moteur ($W > 0$), nul ($W = 0$) ou résistant ($W < 0$).
5. Calculer la puissance : $P = W/t$ (le temps en secondes !).
6. Convertir si demandé : $\div 1000$ en kW, $\div 736$ en CV ; rendement : $\eta = P_u / P_m \times 100\,\%$.
7. Écrire chaque résultat **avec son unité**.

:::erreur Les erreurs qui coûtent des points
1. Oublier $\cos \alpha$ : $W = F \cdot d$ ne vaut que pour $\alpha = 0°$ (même sens).
2. Écrire $P = W \cdot t$ : la puissance, c’est $W/t$.
3. Laisser le temps en minutes ou heures ($2\ \mathrm{min} = 120\ \mathrm{s}$).
4. Oublier le signe du travail du poids en montée : $W_P = -mgh$ (résistant).
5. Inverser le rendement : $\eta = P_u / P_m$ (utile sur moteur), toujours $< 100\,\%$.
6. Résultat sans unité : $W = 150$ ou $P = 200$ ne valent rien sans $\mathrm{J}$ ou $\mathrm{W}$.
:::

## Vocabulaire

- **Travail mécanique $W$** : $F \cdot d \cdot \cos \alpha$, en joules ($\mathrm{J}$).
- **Joule ($\mathrm{J}$)** : $1\ \mathrm{J} = 1\ \mathrm{N \cdot m}$, travail d’une force de $1\ \mathrm{N}$ déplaçant de $1\ \mathrm{m}$ dans son sens.
- **Travail moteur** : $W > 0$, la force aide le mouvement (elle fournit de l’énergie).
- **Travail résistant** : $W < 0$, la force s’oppose au mouvement (elle prélève de l’énergie).
- **Travail nul** : $W = 0$, force perpendiculaire au déplacement ou corps immobile.
- **Puissance $P$** : vitesse d’accomplissement du travail, $P = W/t$, en watts ($\mathrm{W}$).
- **Watt ($\mathrm{W}$)** : $1\ \mathrm{W} = 1\ \mathrm{J/s}$.
- **Puissance moteur $P_m$** : puissance absorbée par le moteur.
- **Puissance utile $P_u$** : puissance réellement délivrée à la machine.
- **Rendement $\eta$** : rapport $P_u / P_m$ en pourcentage, toujours inférieur à $100\,\%$.
- **Cheval-vapeur ($\mathrm{CV}$)** : $1\ \mathrm{CV} = 736\ \mathrm{W}$.
