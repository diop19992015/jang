---
titre: P5. Électrisation par frottement, le courant électrique
accroche: Électrisation par frottement, contact, influence · Charge élémentaire, conducteurs et isolants · Relations I = q/t et q = n·e
ordre: 5
duree: 40
demo: false
objectifs:
  - Électrisation par frottement, contact, influence
  - Charge élémentaire, conducteurs et isolants
  - Relations I = q/t et q = n·e
---

:::remarque À quoi ça sert au BFEM ?
Au BFEM, l'électricité fait toujours gagner des points : reconnaître une électrisation, distinguer un conducteur d'un isolant, calculer une intensité avec $I = q/t$ ou une charge avec $q = n \cdot e$. Ces questions sont rapides à traiter dès que les formules et les unités du SI sont maîtrisées.
:::

## L'électrisation par frottement

Un corps est **électrisé** lorsqu'il a perdu ou gagné des charges électriques. L'électrisation la plus simple à réaliser au laboratoire est l'**électrisation par frottement** : on frotte un corps isolant contre un autre corps isolant.

***Exemple.*** Si l'on frotte une balle de tennis dans les cheveux, ou une règle en caoutchouc sur un morceau de laine, la balle ou la règle devient électrisée : elle attire de petits morceaux de papier.

Les corps électrisés possèdent deux sortes de charges électriques :

:::formule Les deux sortes de charges
| Charge | Signe | Symbole |
| --- | --- | --- |
| Charge positive | $+$ | $+$ |
| Charge négative | $-$ | $-$ |
:::

:::remarque Loi fondamentale de l'électrostatique
- Deux charges **de même signe** se **repoussent** (deux $+$ ou deux $-$).
- Deux charges de **signes différents** s'**attirent** (un $+$ et un $-$).

Dans un corps neutre, le nombre de charges positives est égal au nombre de charges négatives : le corps n'éprouve aucune force.
:::

:::methode Observer qu'un corps est électrisé
1. Rapprocher du corps de petits morceaux de papier ou de laine : ils sont attirés.
2. Approcher successivement une balle de liège suspendue par un fil : elle est attirée, puis repoussée (le contact lui a transféré une charge de même signe).
3. Conclure : le corps est électrisé et porte une charge, soit positive, soit négative.
:::

:::erreur Attention
Un corps métallique frotté avec de la laine ne reste **pas** électrisé : les charges circulent dans le métal et repartent vers la main. Seuls les **isolants** gardent l'électrisation obtenue par frottement.
:::

## L'électrisation par contact

L'**électrisation par contact** consiste à mettre un corps électrisé en contact avec un autre corps : les charges se répartissent sur les deux corps.

***Exemple.*** On électrise une balle de liège en la touchant avec une règle en caoutchouc électrisée. La balle devient électrisée de **même signe** que la règle : elle repousse alors la règle.

## L'électrisation par influence

L'**électrisation par influence** (ou par induction) permet d'électriser un corps **sans le toucher**.

:::methode Les trois étapes de l'électrisation par influence
1. Approcher un corps électrisé (une règle négative) d'un conducteur isolé.
2. Séparer les deux corps **toujours dans cet ordre** (retirer d'abord la règle).
3. Le conducteur est électrisé : une extrémité porte des charges de signe opposé à la règle, l'autre extrémité des charges de même signe.
:::

:::remarque Pourquoi séparer dans cet ordre ?
Si l'on retire d'abord la règle, les charges séparées se neutralisent et le conducteur redevient neutre. L'ordre des manipulations est souvent demandé au BFEM : **approcher, séparer, éloigner**.
:::

## Conducteurs et isolants

:::formule Corps conducteurs et corps isolants
| Corps conducteurs | Corps isolants (isolants) |
| --- | --- |
| tous les **métaux** (cuivre, aluminium, fer) | caoutchouc, plastique, gomme |
| l'eau impure, le corps humain | verre, bois sec, papier |
| la terre | l'air sec, la porcelaine |
| les solutions acides ou salées | la paraffine, le silicone |
:::

- Un **conducteur** laisse circuler les charges électriques : les charges peuvent s'y déplacer librement.
- Un **isolant** retient les charges : elles restent au lieu où on les a apportées.

:::remarque Cas particuliers à connaître
L'eau **distillée** est isolante, mais l'eau du robinet (qui contient des sels) est conductrice : c'est pourquoi on ne doit jamais toucher un appareil électrique avec les mains mouillées. Le corps humain est lui-même un conducteur : c'est la raison des dangers d'électrocution.
:::

:::erreur Sécurité électrique
Une installation domestique est sous $220\ \text{V}$ (réseau SENELEC). Tous les appareils métalliques d'un lave-linge ou d'un réfrigérateur doivent être **mis à la terre**. Ne jamais toucher un fil dénudé, surtout avec les mains mouillées.
:::

## La charge élémentaire

Les charges électriques existent en **paquets indivisibles** : ce sont les électrons, qui portent la charge élémentaire.

:::formule Charge élémentaire
$$
e = 1{,}6 \times 10^{-19}\ \text{C}
$$

Une charge électrique totale $q$ est toujours un multiple entier de $e$ :
$$
q = n \cdot e
$$

où $n$ est le **nombre d'électrons** échangés (en positif si le corps a perdu des électrons).
:::

:::exemple Calculer une charge
Un corps reçoit $n = 5 \times 10^{10}$ électrons. Quelle charge porte-t-il ?

$$
q = n \cdot e = 5 \times 10^{10} \times 1{,}6 \times 10^{-19} = 8 \times 10^{-9}\ \text{C}
$$

Le corps porte une charge négative de $8 \times 10^{-9}\ \text{C}$, soit $8\ \text{nC}$.
:::

:::erreur Les erreurs d'exposant coûtent des points
- Ne jamais écrire $e = 1{,}6 \times 10^{-19}$ **sans unité** : la coulomb (C) est obligatoire.
- En multipliant des puissances de $10$, on **ajoute les exposants** : $10^{10} \times 10^{-19} = 10^{-9}$ (et non $10^{-110}$).
:::

## Le courant électrique

:::definition Courant électrique
Un **courant électrique** est un **déplacement ordonné de charges électriques** dans un conducteur. Dans un métal, ce sont les électrons qui se déplacent.
:::

L'**intensité** du courant mesure la quantité de charge qui traverse une section du conducteur en unité de temps :

:::formule Intensité du courant
$$
I = \frac{q}{t}
$$

- $q$ : quantité de charge, en **coulombs** ($\text{C}$) ;
- $t$ : durée, en **secondes** ($\text{s}$) ;
- $I$ : intensité, en **ampères** ($\text{A}$).
:::

:::exemple Calcul d'intensité
1. Un courant transporte $q = 60\ \text{C}$ en $t = 30\ \text{s}$ :
$$
I = \frac{q}{t} = \frac{60}{30} = 2\ \text{A}
$$

2. Conversion d'unités : $0{,}5\ \text{A} = 0{,}5 \times 1000 = 500\ \text{mA}$, car $1\ \text{A} = 1000\ \text{mA}$.
:::

:::remarque Le sens conventionnel du courant
Par convention, le courant circule du **pôle positif $+$** vers le **pôle négatif $-$** à l'extérieur du générateur, et du $-$ vers le $+$ à l'intérieur du générateur. Les électrons, eux, se déplacent dans l'autre sens : c'est le **sens conventionnel** qui est utilisé dans tous les schémas du programme.
:::

## Le circuit électrique

Un circuit électrique se compose toujours de trois éléments :

- un **générateur** (pile $1{,}5\ \text{V}$ ou $9\ \text{V}$, secteur $220\ \text{V}$, panneau solaire) qui fournit la tension ;
- des **conducteurs** (fils de cuivre) qui assurent la circulation du courant ;
- des **récepteurs** (lampe, moteur, sonnerie) qui transforment l'énergie électrique.

:::methode Résoudre un problème d'électricité
1. Lire l'énoncé et noter les données avec leur **unité** ($q$ en C, $t$ en s, $I$ en A).
2. Choisir la formule qui relie les inconnues : $I = q/t$ ou $q = I \cdot t$ ou $t = q/I$.
3. Remplacer les valeurs **en SI** et calculer.
4. Écrire le résultat avec son **unité** et, si nécessaire, donner l'ordre de grandeur.
:::

:::piege Le piège du temps
Au BFEM, la durée est parfois donnée en **minutes** : il faut la convertir en secondes avant tout calcul. $2\ \text{min} = 120\ \text{s}$ et non $2\ \text{s}$.
:::

## Les effets du courant électrique

:::formule Les quatre effets du courant
| Effet | Principe | Exemple |
| --- | --- | --- |
| **Chimique** | transformation chimique (électrolyse) | purification du cuivre, décomposition de l'eau |
| **Magnétique** | production d'un champ magnétique (électroaimant) | sonnerie, relais, appareils de levage |
| **Thermique** | production de chaleur (effet Joule) | grille-pain, bouilloire, chauffe-eau |
| **Lumineux** | production de lumière | ampoule, lampe de lampe torche |
:::

:::remarque Le courant est utile… et dangereux
Le courant produit aussi des **effets involontaires** sur le corps humain : à partir de quelques dizaines de milliampères, il provoque des contractions musculaires ; il peut arrêter le cœur. La règle est simple : **ne jamais manipuler un conducteur sous tension**, surtout avec les mains mouillées.
:::

## Ce qu'il faut retenir

- Frotter deux corps isolants les **électrise** : charges $+$ et $-$ ; même signe → répulsion, signes différents → attraction.
- Trois modes d'électrisation : **par frottement**, **par contact**, **par influence**.
- Les **conducteurs** (métaux, eau impure, corps humain) laissent circuler les charges ; les **isolants** (caoutchouc, verre, plastique) les retiennent.
- Charge élémentaire : $e = 1{,}6 \times 10^{-19}\ \text{C}$ et $q = n \cdot e$.
- Intensité : $I = q/t$, en ampères ($\text{A}$), avec $q$ en coulombs et $t$ en secondes.
- Un circuit comprend un **générateur**, des **conducteurs** et des **récepteurs** ; le courant conventionnel circule du $+$ au $-$ à l'extérieur du générateur.
- Le courant produit quatre effets : **chimique, magnétique, thermique, lumineux**.
