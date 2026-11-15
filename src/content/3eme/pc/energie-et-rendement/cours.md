---
titre: P7. Énergie et rendement
accroche: Énergies cinétique, potentielle et mécanique · Énergie électrique et effet Joule · Transformations d’énergie et rendement · Pollution liée à l’énergie
ordre: 7
duree: 20
demo: false
objectifs:
  - Énergies cinétique, potentielle et mécanique
  - Énergie électrique et effet Joule
  - Transformations d’énergie et rendement
  - Pollution liée à l’énergie
---

:::remarque À quoi ça sert au BFEM ?
L’énergie est la notion physique la plus transversale du programme : elle relie la mécanique (cinétique, potentielle), l’électricité (effet Joule) et la chimie (combustions). Au BFEM, on vous demande presque toujours de reconnaître des transformations d’énergie, de calculer une énergie ou un rendement, puis de commenter un document sur la pollution. Trois exercices sur les quatre tombent ici : c’est un point à ne pas perdre.
:::

## Qu’est-ce que l’énergie ?

:::definition Énergie
L’**énergie** est la capacité d’un corps à produire un travail, à se déplacer, à se déformer ou à provoquer une transformation. Elle ne se voit pas directement : on la mesure par ses **effets** (mouvement, chaleur, lumière…).
:::

L’unité d’énergie dans le Système international est le **joule**, de symbole $J$.

:::formule Les unités d’énergie
| Unité | Symbole | Conversion |
| --- | --- | --- |
| Joule | $J$ | unité de base |
| kilojoule | $kJ$ | $1\ kJ = 1000\ J$ |
| watt-heure | $Wh$ | $1\ Wh = 3600\ J$ |
| kilowatt-heure | $kWh$ | $1\ kWh = 3{,}6 \times 10^6\ J$ (facture d’EDM) |
:::

:::erreur Attention à l’unité
Tout calcul d’énergie doit se terminer par une **unité**. Le $kWh$ est une unité d’énergie (et non de puissance) : c’est celle que lit le compteur électrique de la maison.
:::

## Les formes d’énergie

L’énergie existe sous de nombreuses formes, qui peuvent se transformer les unes dans les autres.

:::formule Les formes d’énergie à connaître
| Forme | Ce qu’elle permet | Exemple |
| --- | --- | --- |
| Cinétique | le mouvement d’un corps | voiture en marche |
| Potentielle | position dans un champ (pesanteur) | eau retenue dans un barrage |
| Interne | agitation des molécules (chaleur) | eau chaude, braises |
| Électricité | transporter l’énergie sur de longues distances | secteur, batterie |
| Chimique | stockée dans les liaisons des corps | gaz butane, essence |
| Lumineuse | émission de lumière | Soleil, lampe |
| Sonore | vibration de l’air | musique |
:::

:::remarque Une règle d’or : la conservation
L’énergie ne se crée pas et ne disparaît pas : elle **se transforme**. Dans toute transformation, l’énergie totale reste égale. On parle de **bilan d’énergie** : énergie d’entrée = énergie de sortie + pertes.
:::

## Énergie cinétique et énergie potentielle

:::definition Énergie cinétique
L’**énergie cinétique** $E_c$ est l’énergie possédée par un corps du fait de son mouvement. Elle dépend de la masse et du carré de la vitesse.
:::

:::formule Énergie cinétique
$$
E_c = \frac{1}{2} \times m \times v^2
$$

- $m$ : masse en kilogrammes ($kg$) ;
- $v$ : vitesse en mètres par seconde ($m/s$) ;
- $E_c$ : en joules ($J$).
:::

:::formule Énergie potentielle de pesanteur
$$
E_p = m \times g \times h
$$

- $g = 10\ N/kg$ (champ gravitationnel terrestre) ;
- $h$ : hauteur en mètres ($m$) ;
- $E_p$ : en joules ($J$).
:::

:::exemple Deux calculs typiques
1. Une voiture de $m = 1000\ kg$ roule à $v = 20\ m/s$ :
$$
E_c = \frac{1}{2} \times 1000 \times 20^2 = 200\,000\ J = 200\ kJ
$$

2. Un sac de $m = 50\ kg$ posé à $h = 10\ m$ au-dessus du sol :
$$
E_p = 50 \times 10 \times 10 = 5\,000\ J
$$
:::

:::piege Le carré de la vitesse
On oublie souvent le **carré** dans $E_c$ : une voiture qui double de vitesse possède **quatre** fois plus d’énergie cinétique, pas deux. Vérifie toujours l’unité : $(m/s)^2 \times kg = J$.
:::

### L’énergie mécanique

:::formule Énergie mécanique
$$
E_m = E_c + E_p
$$

L’énergie mécanique d’un corps est la somme de son énergie cinétique et de son énergie potentielle. Lors d’une chute libre (sans frottement), $E_m$ reste constant : $E_p$ diminue quand $E_c$ augmente.
:::

:::exemple Bille qui tombe
Au sommet ($v = 0$) : $E_c = 0$ et $E_p = mgh$, donc $E_m = E_p$. Au sol ($h = 0$) : $E_p = 0$ et toute l’énergie mécanique est devenue énergie cinétique.
:::

## L’énergie électrique et l’effet Joule

Un récepteur électrique transforme l’énergie électrique en une autre forme d’énergie.

:::formule Puissance et énergie électrique
$$
P = U \times I
$$

$$
W = P \times t = U \times I \times t
$$

- $P$ : puissance en watts ($W$) ;
- $U$ : tension en volts ($V$) ;
- $I$ : intensité en ampères ($A$) ;
- $t$ : durée en secondes ($s$) ;
- $W$ : énergie électrique consommée en joules ($J$).
:::

:::definition L’effet Joule
L’**effet Joule** est la transformation de l’énergie électrique en **énergie thermique** (chaleur) lors du passage d’un courant dans un conducteur. C’est ce qui chauffe le grille-pain, le fer à repasser et les fils trop parcourus par le courant.
:::

:::exemple Consommation d’une lampe
Une lampe de $P = 100\ W$ reste allumée $t = 2\ h = 7200\ s$ :
$$
W = P \times t = 100 \times 7200 = 720\,000\ J = 0{,}2\ kWh
$$

Chaîne : énergie électrique → lumière (utile) + chaleur (perte).
:::

:::methode Analyser un récepteur électrique
1. Identifier l’énergie d’entrée (ici électrique) et l’énergie utile recherchée.
2. Citer l’énergie secondaire obtenue (lumière, chaleur, mouvement…).
3. Calculer $P = U \times I$ puis $W = P \times t$ si on demande une consommation.
4. Exprimer la transformation sous forme : électrique → utile + pertes.
:::

## Transformations d’énergie et bilan

Dans tout appareil, l’énergie d’entrée se répartit entre l’**énergie utile** et les **pertes** (souvent de la chaleur).

:::formule Bilan d’énergie
$$
E_{\text{fournie}} = E_{\text{utile}} + E_{\text{pertes}}
$$
:::

:::exemple Chaîne d’une voiture
Gaz (énergie chimique) → moteur (énergie mécanique) → roues (mouvement). Pertes : chaleur du moteur, frottement des pneus, bruit.
:::

## Le rendement

:::definition Rendement
Le **rendement** $\eta$ (lettre grecque « èta ») d’un appareil est le rapport entre l’énergie utile réellement utilisée et l’énergie totale fournie.
:::

:::formule Rendement
$$
\eta = \frac{E_{\text{utile}}}{E_{\text{fournie}}}
$$

- $\eta$ est un nombre sans unité, toujours **inférieur ou égal à 1** ;
- on l’exprime souvent en pourcentage : $\eta\ (\%) = \eta \times 100$.
:::

:::methode Calculer un rendement
1. Identifier $E_{\text{fournie}}$ (ce qui entre dans l’appareil) et $E_{\text{utile}}$ (ce qui sert réellement).
2. Écrire la formule $\eta = E_{\text{utile}} / E_{\text{fournie}}$.
3. Calculer le quotient (résultat en dessous de 1).
4. Multiplier par 100 pour avoir un pourcentage, et conclure en phrase.
:::

:::exemple Trois rendements du quotidien
1. **Moteur** : $E_{\text{fournie}} = 10\ kJ$, $E_{\text{utile}} = 6\ kJ$ :
$$
\eta = \frac{6}{10} = 0{,}6 = 60\ \%
$$

2. **Lampe** : $E_{\text{fournie}} = 1000\ J$, lumière utile $= 100\ J$ :
$$
\eta = \frac{100}{1000} = 0{,}1 = 10\ \%
$$

3. **Panneau solaire** : $1000\ J$ de rayonnement reçus, $150\ J$ d’électricité :
$$
\eta = \frac{150}{1000} = 0{,}15 = 15\ \%
$$
:::

:::erreur Les deux pièges du rendement
1. Confondre pertes et utile : les pertes sont $E_{\text{fournie}} - E_{\text{utile}}$, elles **n’entrent pas** au numérateur.
2. Oublier le $\times 100$ : dire « $\eta = 0{,}7$ » sans unité est admis, mais « 0,7 % » est faux : c’est $70\ \%$.
:::

Un appareil moderne a un rendement d’autant plus élevé qu’il perd peu par chaleur, frottement ou bruit. Un rendement faible signifie une surconsommation… et plus de pollution.

## De l’énergie à la pollution

La plupart de l’énergie utilisée au Sénégal vient de combustibles fossiles (fioul, gaz, charbon) importés ou produits par la **raffinerie de Dakar**. Leur combustion rejette du dioxyde de carbone $CO_2$, des suies et, si elle est incomplète, du monoxyde de carbone $CO$ toxique.

:::formule Les énergies au Sénégal
| Énergie | Type | Exemple sénégalais |
| --- | --- | --- |
| Pétrole, gaz | fossile | raffinerie de Dakar, GPL des cuisinières |
| Fioul, charbon | fossile | centrales thermiques |
| Solaire | renouvelable | panneaux dans les régions hors réseau |
| Hydraulique | renouvelable | barrages (Manantali, Kaolack) |
:::

:::remarque Pourquoi favoriser le solaire ?
Le Sénégal reçoit un ensoleillement exceptionnel toute l’année. Les panneaux solaires transforment l’énergie lumineuse en énergie électrique **sans combustion**, donc sans rejet de $CO_2$ ni de $CO$. Le solaire est au cœur des projets d’électrification des villages et des toits de Dakar.
:::

:::methode Réduire sa empreinte énergétique
1. Éteindre les appareils veillés et les lumières inutiles.
2. Choisir des ampoules basse consommation (meilleur rendement).
3. Privilégier les énergies renouvelables (solaire).
4. Aérer les appareils à combustion (protection contre le $CO$).
:::

## Ce qu’il faut retenir

- L’énergie se transforme mais ne se crée pas ni ne disparaît : **bilan d’énergie**.
- Unité de l’énergie : le **joule** ($J$) ; sur la facture : le $kWh$.
- $E_c = \frac{1}{2}mv^2$ (mouvement), $E_p = mgh$ (position), $E_m = E_c + E_p$.
- Énergie électrique : $P = U \times I$ et $W = P \times t$ ; l’effet Joule transforme l’électricité en chaleur.
- Rendement : $\eta = E_{\text{utile}} / E_{\text{fournie}} \leq 1$, souvent exprimé en pourcentage.
- Pertes = chaleur, frottement, bruit ; énergies fossiles = pollution ($CO_2$, $CO$), énergies renouvelables = solaire pour le Sénégal.
