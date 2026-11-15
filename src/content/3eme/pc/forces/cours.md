---
titre: P3. Forces
accroche: Effets d’une force, le newton · Représentation par un vecteur · Poids, tension d’un fil, réaction d’un support · Équilibre d’un solide soumis à deux forces
ordre: 3
duree: 30
demo: false
objectifs:
  - Effets d’une force, le newton
  - Représentation par un vecteur
  - Poids, tension d’un fil, réaction d’un support
  - Équilibre d’un solide soumis à deux forces
---

:::remarque À quoi ça sert au BFEM ?
Les questions de mécanique reviennent presque chaque année au BFEM : calculer un poids avec $P = m \cdot g$, tracer un vecteur force à une échelle donnée, justifier l’équilibre d’un solide. Savoir reconnaître les forces en jeu (poids, tension, réaction) et appliquer les conditions d’équilibre permet de gagner des points rapides et sûrs dans presque tous les sujets de physique.
:::

## Effets d’une force et le newton

:::definition Force
Une **force** est une action (poussée ou traction) exercée par un corps sur un autre corps. Elle se caractérise par son **point d’application**, sa **direction**, son **sens** et son **intensité**.
:::

Trois effets possibles d’une force :

- **déformer** les corps (un ressort étiré, une caisse qui s’écrase) ;
- **mettre en mouvement** un corps au repos ou **modifier son mouvement** (accélérer, freiner, dévier) ;
- **maintenir** un corps en équilibre.

:::formule L’unité de la force : le newton
La force se mesure en **newtons** (symbole $\mathrm{N}$), unité du Système international :

$$
1\ \mathrm{N} \approx \text{poids d’un paquet de 100 g posé sur Terre}
$$

car $P = 0{,}1\ \mathrm{kg} \times 9{,}8\ \mathrm{N/kg} = 0{,}98\ \mathrm{N} \approx 1\ \mathrm{N}$.
:::

:::remarque Masse et force, deux grandeurs différentes
La **masse** se mesure en kilogrammes ($\mathrm{kg}$) : c’est la quantité de matière d’un corps. La **force** se mesure en newtons ($\mathrm{N}$). Le poids est la force avec laquelle la Terre attire un corps : il s’exprime donc en newtons.
:::

## Représentation d’une force par un vecteur

Une force se représente par un **vecteur** (une flèche) qui porte quatre informations :

- le **point d’application** : le point où la force agit (le départ de la flèche) ;
- la **direction** : la droite suivant laquelle la force s’exerce ;
- le **sens** : le côté de cette droite, indiqué par la flèche ;
- l’**intensité** : la longueur de la flèche, proportionnelle à la force grâce à une **échelle**.

:::methode Tracer un vecteur force
1. Choisir une échelle, par exemple $1\ \mathrm{cm} \leftrightarrow 10\ \mathrm{N}$.
2. Marquer le point d’application A.
3. Tracer la droite de direction de la force.
4. Reporter, dans le bon sens, une longueur égale à intensité ÷ valeur de l’échelle.
5. Terminer la flèche et écrire la force à côté ($F = 40\ \mathrm{N}$).
:::

:::exemple Construire un vecteur
Force $F = 40\ \mathrm{N}$ horizontale appliquée en A, échelle $1\ \mathrm{cm} = 10\ \mathrm{N}$ :

longueur $= 40 \div 10 = 4\ \mathrm{cm}$. On trace une flèche de $4\ \mathrm{cm}$ partant de A, dirigée horizontalement dans le sens indiqué. Si on change d’échelle ($1\ \mathrm{cm} = 20\ \mathrm{N}$), la même force ne mesure plus que $2\ \mathrm{cm}$ : le tracé reste correct, l’échelle doit seulement être rappelée.
:::

:::piege Les pièges du tracé
1. Oublier d’écrire l’échelle : le correcteur ne peut plus valider la longueur du vecteur.
2. Changer d’échelle en cours de tracé.
3. Oublier le point d’application : une force sans point d’application n’a aucun sens physique.
4. Confondre direction et sens : deux forces opposées ont la **même direction** mais des **sens différents**.
:::

## Le poids d’un corps

:::formule Poids et masse
$$
P = m \cdot g
$$

- $m$ : masse du corps, en kilogrammes ($\mathrm{kg}$) ;
- $g$ : constante de la pesanteur, $g = 9{,}8\ \mathrm{N/kg}$ ;
- $P$ : poids du corps, en newtons ($\mathrm{N}$).
:::

Le vecteur poids se reconnaît à trois caractéristiques :

- **point d’application** : le **centre de gravité** du corps ;
- **direction** : la **verticale** ;
- **sens** : **vers le bas** (vers le centre de la Terre).

:::exemple Calculer un poids
- Bidon d’eau de masse $m = 5\ \mathrm{kg}$ : $P = 5 \times 9{,}8 = 49\ \mathrm{N}$.
- Élève de masse $m = 50\ \mathrm{kg}$ : $P = 50 \times 9{,}8 = 490\ \mathrm{N}$.
- Paquet de $2\ \mathrm{kg}$ : $P = 2 \times 9{,}8 = 19{,}6\ \mathrm{N}$.
:::

:::erreur Les erreurs qui coûtent des points
1. Écrire « ce corps pèse 5 kg » : la masse est en kg, le poids est en newtons ($P = 49\ \mathrm{N}$).
2. Utiliser une autre valeur que $g = 9{,}8\ \mathrm{N/kg}$ (surtout pas $g = 9{,}8\ \mathrm{N}$ !).
3. Oublier l’unité du résultat : $P = 49$ est incomplet, il faut $P = 49\ \mathrm{N}$.
:::

## Tension d’un fil et réaction d’un support

:::definition Tension d’un fil
La **tension** est la force d’traction exercée par un fil, un câble ou une corde sur le corps auquel il est relié. Sa direction est le **long du fil** ; son sens tire le corps **vers le fil**.
:::

:::definition Réaction d’un support
Quand un corps est posé sur un support (table, sol, mur), le support exerce sur lui une force appelée **réaction du support** (force normale). Sa direction est **perpendiculaire au support** et son sens est **vers le corps**.
:::

:::exemple Identifier les forces en jeu
1. Un sac de masse $m = 3\ \mathrm{kg}$ est suspendu à une corde, immobile : le poids $P = 3 \times 9{,}8 = 29{,}4\ \mathrm{N}$ tire vers le bas ; la tension $T$ de la corde tire vers le haut, le long de la corde. L’équilibre vertical impose $T = P = 29{,}4\ \mathrm{N}$.
2. Une caisse de masse $m = 20\ \mathrm{kg}$ repose sur une table : $P = 20 \times 9{,}8 = 196\ \mathrm{N}$ vers le bas ; la réaction $R$ de la table est verticale (perpendiculaire à la table) vers le haut, avec $R = P = 196\ \mathrm{N}$.
:::

:::erreur Deux confusions fréquentes
1. La réaction d’un support horizontal n’est pas horizontale : elle est **verticale, vers le haut**, perpendiculaire au support.
2. La tension n’a pas la direction du poids : elle suit **le fil**, qui peut être oblique ou horizontal.
:::

## Équilibre d’un solide

:::definition Équilibre
Un solide est en **équilibre** quand il est immobile par rapport au référentiel du sol. Cela suppose que la **résultante** des forces qui s’appliquent sur lui est nulle :

$$
\vec{F_1} + \vec{F_2} + \ldots + \vec{F_n} = \vec{0}
$$
:::

### Le cas d’un solide soumis à deux forces

:::formule Condition d’équilibre de deux forces
Un solide soumis à **deux forces** est en équilibre **si et seulement si** ces deux forces :

1. ont le **même point d’application** ;
2. ont la **même direction** (elles sont alignées) ;
3. ont la **même intensité** ;
4. sont de **sens opposés**.
:::

:::definition La pince, solide à deux forces
La **pince** est l’exemple type du solide à deux forces : les deux mors (ou les deux brins) exercent sur l’objet des forces d’**égale intensité**, **alignées** et de **sens opposés**. C’est ce que font une pincette, les brins d’une pince à linge ou l’étau : les deux forces se compensent et l’objet est maintenu en place.
:::

:::exemple Vérifier un équilibre
Une caisse posée sur le sol ($P = 196\ \mathrm{N}$ vers le bas) subit aussi la réaction du sol ($R = 196\ \mathrm{N}$ vers le haut) : même point d’application, même direction (verticale), même intensité, sens opposés → les deux forces se compensent, la caisse est en équilibre.

Deux forces alignées de sens opposés, l’une de $25\ \mathrm{N}$, l’autre de $30\ \mathrm{N}$ : la résultante vaut $30 - 25 = 5\ \mathrm{N}$ dans le sens de la plus grande → le solide **n’est pas en équilibre**.
:::

## Triangle et polygone des forces

:::definition Triangle des forces
Quand un point est sollicité par **trois forces concourantes en équilibre**, on peut les représenter **bout à bout** (le départ de chaque vecteur posé sur la pointe du précédent) par un **triangle fermé** : le troisième vecteur ramène exactement au point de départ.
:::

:::definition Polygone des forces
Avec **plus de trois forces** concourantes en équilibre, la même construction donne un **polygone fermé** : la somme des vecteurs forces est nulle.
:::

:::methode Construire le triangle des forces
1. Choisir une échelle et tracer $\vec{F_1}$.
2. À partir de la pointe de $\vec{F_1}$, tracer $\vec{F_2}$ avec sa direction, son sens et sa longueur d’échelle.
3. Faire de même avec $\vec{F_3}$.
4. Si les trois forces sont en équilibre, la pointe de $\vec{F_3}$ retombe sur le départ : le triangle se referme. Sinon, on relie le départ à l’arrivée : ce vecteur est la **résultante**.
:::

:::exemple Un triangle 30–40–50
Trois forces concourantes en un point O :

- $\vec{F_1} = 30\ \mathrm{N}$ dirigée vers l’est ;
- $\vec{F_2} = 40\ \mathrm{N}$ dirigée vers le nord ;
- $\vec{F_3}$ inconnue, maintenir l’équilibre.

La résultante de $\vec{F_1}$ et $\vec{F_2}$ (perpendiculaires) vaut $\sqrt{30^2 + 40^2} = \sqrt{2500} = 50\ \mathrm{N}$. Pour l’équilibre, $F_3 = 50\ \mathrm{N}$, dirigée vers le sud-ouest (sens inverse de la résultante). Tracées bout à bout, les trois forces forment un triangle rectangle de côtés $30$, $40$ et $50$ : le triangle se referme, l’équilibre est vérifié.
:::

:::remarque Une grue au port de Dakar
Le crochet d’une grue du port de Dakar soulève une caisse : la tension du câble tire vers le haut, le poids de la caisse tire vers le bas. Ces deux forces, alignées et de sens opposés, forment un solide à deux forces : quand la grue hisse à vitesse constante, $T = P$ et la caisse est en équilibre.
:::

## Ce qu’il faut retenir

- Une **force** est une poussée ou une traction caractérisée par son point d’application, sa direction, son sens et son intensité ; son unité est le **newton** ($\mathrm{N}$).
- Un vecteur force est tracé **à une échelle donnée** : sa longueur est proportionnelle à l’intensité.
- **Poids** : $P = m \cdot g$ avec $g = 9{,}8\ \mathrm{N/kg}$ ; direction verticale, sens vers le bas, point d’application au centre de gravité.
- **Tension** : le long du fil, tirant le corps vers le fil. **Réaction d’un support** : perpendiculaire au support, dirigée vers le corps.
- Un solide soumis à **deux forces** est en équilibre ssi mêmes point d’application et direction, intensités égales, sens opposés : c’est le cas de la **pince**.
- Trois forces concourantes en équilibre → **triangle des forces fermé** ; plus de trois → **polygone fermé**.
