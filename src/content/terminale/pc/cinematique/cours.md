---
titre: Cinématique du point matériel
accroche: Vecteurs position, vitesse et accélération ; mouvements rectilignes uniformes et uniformément variés ; chute libre.
series: S1, S2
ordre: 1
duree: 45
coefficient: 3
demo: true
objectifs:
  - Définir et utiliser les vecteurs position, vitesse et accélération.
  - Distinguer mouvement rectiligne uniforme et mouvement rectiligne uniformément varié.
  - Établir et exploiter les équations horaires du mouvement.
  - Étudier la chute libre d'un corps sans frottement.
prerequis:
  - Vecteurs et repérage dans un plan.
  - Dérivation des fonctions (dérivée d'un polynôme).
  - Unités du Système international.
---

:::remarque Une seule dimension d'abord
La cinématique du programme de Terminale S1 étudie d'abord le mouvement **rectiligne**, c'est-à-dire le long d'un axe. Toutes les grandeurs vectorielles sont alors portées par cet axe, ce qui simplifie les calculs tout en gardant le vocabulaire vectoriel exigé au BAC.
:::

## Référentiel et repère

Un mouvement n'a de sens que par rapport à un **référentiel**. Un référentiel est un solide de référence auquel on associe un repère d'espace et une horloge. Au laboratoire, on utilise le **référentiel terrestre** (supposé galiléen pour les mouvements de courte durée).

Pour décrire un mouvement rectiligne, on choisit un axe $(O\,;\vec{i})$ gradué en mètres, et une origine des temps $t=0$.

## Vecteur position

La position du point mobile $M$ à l'instant $t$ est repérée par son abscisse $x(t)$ sur l'axe. Le vecteur position s'écrit :

$$
\vec{OM}(t) = x(t)\,\vec{i}
$$

La fonction $t \mapsto x(t)$ est l'**équation horaire** du mouvement. Elle contient toute l'information sur la position du mobile à chaque instant.

:::remarque Attention aux unités
Dans le Système international, $x$ s'exprime en mètres (m) et $t$ en secondes (s). Une vitesse s'exprime donc en mètres par seconde (m·s⁻¹) et une accélération en mètres par seconde au carré (m·s⁻²). Une vitesse en km·h⁻¹ se convertit en divisant par $3{,}6$ : $90$ km·h⁻¹ $= 25$ m·s⁻¹.
:::

## Vecteur vitesse

:::formule Vitesse instantanée
Le vecteur vitesse est la dérivée du vecteur position par rapport au temps :
$$
\vec{v}(t) = \frac{d\vec{OM}}{dt} = \frac{dx}{dt}(t)\,\vec{i} = v_x(t)\,\vec{i}
$$

La **vitesse instantanée** est la norme du vecteur vitesse : $v(t) = |v_x(t)|$.
:::

La vitesse moyenne entre deux instants $t_1$ et $t_2$ est :
$$
v_{\text{moy}} = \frac{x(t_2)-x(t_1)}{t_2-t_1}.
$$

:::erreur Vitesse moyenne et vitesse instantanée
La vitesse moyenne ne renseigne pas sur les variations de vitesse pendant l'intervalle. Un mobile qui fait un aller-retour peut avoir une vitesse moyenne nulle alors que sa vitesse instantanée n'a jamais été nulle. La vitesse instantanée est la dérivée, donc une notion locale.
:::

## Vecteur accélération

:::formule Accélération instantanée
Le vecteur accélération est la dérivée du vecteur vitesse :
$$
\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2x}{dt^2}(t)\,\vec{i} = a_x(t)\,\vec{i}
$$
:::

L'accélération mesure la façon dont la vitesse change. Elle peut être :
- **nulle** : le vecteur vitesse est constant ;
- **de même sens** que la vitesse : le mouvement est accéléré ;
- **de sens opposé** à la vitesse : le mouvement est retardé (décélération).

:::exemple Lecture d'un enregistrement
Un mobile se déplace sur un axe. Son équation horaire est $x(t)=2t^2+3t+1$ (en mètres, avec $t$ en secondes).

- Vitesse : $v_x(t)=4t+3$, donc $v(t)=4t+3 \geq 0$ pour $t\geq 0$.
- Accélération : $a_x(t)=4$, constante positive.

Le mouvement est donc rectiligne **uniformément accéléré** dans le sens des $x$ croissants. À $t=0$ : $x=1$ m et $v=3$ m·s⁻¹.
:::

## Mouvement rectiligne uniforme (MRU)

Un mouvement rectiligne est **uniforme** lorsque la vitesse est constante. Alors l'accélération est nulle.

:::formule Équations du MRU
Si $v_x(t)=v_0$ (constante) et $x(0)=x_0$ :
$$
x(t) = v_0\,t + x_0
$$
$$
v(t) = v_0 \quad \text{et} \quad a(t)=0
$$
:::

La courbe $x(t)$ est une droite dont la pente est la vitesse. Dans un graphique $v(t)$, la vitesse est une droite horizontale.

## Mouvement rectiligne uniformément varié (MRUV)

Un mouvement rectiligne est **uniformément varié** lorsque l'accélération est constante et non nulle. Il est **uniformément accéléré** si $a$ et $v$ ont le même sens, **uniformément retardé** sinon.

:::formule Équations du MRUV
Si $a_x(t)=a$ (constante), avec $x(0)=x_0$ et $v_x(0)=v_0$ :
$$
a_x(t) = a
$$
$$
v_x(t) = a\,t + v_0
$$
$$
x(t) = \frac{1}{2}a\,t^2 + v_0\,t + x_0
$$
:::

:::formule Relation indépendante du temps
En éliminant $t$ entre les deux équations, on obtient :
$$
v_x^2 - v_0^2 = 2a\,(x-x_0)
$$
Cette relation est très utile lorsqu'on ne connaît pas la durée du mouvement.
:::

:::methode Résoudre un exercice de cinématique
1. Choisir un référentiel, un axe et une origine des temps ; préciser le sens positif.
2. Écrire les conditions initiales $x(0)$ et $v(0)$ avec leurs signes.
3. Identifier la nature du mouvement : $a=0$ (MRU) ou $a=$ constante (MRUV).
4. Appliquer les équations horaires ou la relation $v^2-v_0^2=2a(x-x_0)$.
5. Vérifier l'homogénéité des unités et le signe des résultats.
:::

## Chute libre

Un corps est en **chute libre** lorsqu'il n'est soumis qu'à son poids (frottements négligés). Son accélération est alors égale au champ de pesanteur $\vec{g}$.

Au voisinage du sol sénégalais, on prend souvent $g \approx 9{,}8$ m·s⁻² (ou $10$ m·s⁻² pour simplifier les calculs).

:::formule Chute verticale sans vitesse initiale
Avec un axe orienté vers le bas, origine au point de départ :
$$
a = g, \qquad v(t) = g\,t, \qquad z(t) = \frac{1}{2}g\,t^2
$$
La durée de chute depuis une hauteur $h$ est $t=\sqrt{\dfrac{2h}{g}}$ et la vitesse d'arrivée vaut $v=\sqrt{2gh}$.
:::

:::exemple Chute depuis 20 m
Un objet est lâché sans vitesse initiale d'une hauteur $h=20$ m. On prend $g=10$ m·s⁻².

Durée de chute : $t=\sqrt{\dfrac{2\times 20}{10}}=\sqrt{4}=2$ s.
Vitesse au sol : $v=\sqrt{2\times 10\times 20}=\sqrt{400}=20$ m·s⁻¹, soit $72$ km·h⁻¹.
:::

:::remarque Masse et chute libre
Dans le vide (ou en négligeant les frottements), tous les corps tombent avec la même accélération, quelle que soit leur masse. C'est Galilée qui l'a établi : une plume et une bille lâchées dans un tube vide arrivent ensemble au fond.
:::

## Mouvement circulaire uniforme

Lorsqu'un point décrit un cercle de rayon $R$ à vitesse constante $v$, on parle de **mouvement circulaire uniforme**. La vitesse change de direction à chaque instant, donc le mouvement est accéléré au sens vectoriel : l'accélération est centripète.

:::formule Grandeurs du mouvement circulaire
Période $T$ (durée d'un tour), fréquence $f=\dfrac{1}{T}$, vitesse angulaire $\omega=\dfrac{2\pi}{T}$ et vitesse linéaire $v=R\,\omega$.

L'accélération est centripète, dirigée vers le centre, de norme :
$$
a = \frac{v^2}{R} = R\,\omega^2
$$
:::

## Ce qu'il faut retenir

- Le vecteur vitesse est la dérivée du vecteur position, l'accélération la dérivée du vecteur vitesse.
- MRU : $a=0$, $x(t)=v_0t+x_0$.
- MRUV : $a$ constant, $v(t)=at+v_0$ et $x(t)=\frac12at^2+v_0t+x_0$ ; relation $v^2-v_0^2=2a(x-x_0)$.
- Chute libre : $a=g$, $v=gt$, $z=\frac12gt^2$ (sans vitesse initiale, axe vers le bas).
- Toujours préciser le référentiel, l'axe et le sens positif avant de calculer.
