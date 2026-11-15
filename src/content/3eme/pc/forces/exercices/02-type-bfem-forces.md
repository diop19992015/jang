---
titre: Sujet type BFEM — Forces et équilibre d’une caisse au port de Dakar
difficulte: 3
type: bfem
annee: 2023
indices:
  - Écris d’abord le poids avec P = m·g et g = 9,8 N/kg, unité N obligatoire.
  - Pour l’équilibre du solide à deux forces, cite les quatre conditions : point d’application, direction, intensité, sens.
  - Pour le triangle des forces, choisis une échelle et construis les vecteurs bout à bout.
---

## Énoncé

**Contexte.** Au port de Dakar, une grue doit déplacer une caisse de masse $m = 200\ \mathrm{kg}$. Le câble de la grue maintient la caisse en suspension, immobile, à quelques mètres du sol. On prend $g = 9{,}8\ \mathrm{N/kg}$.

**Partie A — Le poids de la caisse** (3 points)

1. Calculer le poids $P$ de la caisse. (2 pts)
2. Donner le point d’application, la direction et le sens du vecteur poids. (1 pt)

**Partie B — Équilibre sous deux forces** (4 points)

3. Citer les deux forces qui s’appliquent sur la caisse suspendue, pour chacune donner la direction et le sens. (1,5 pt)
4. Calculer l’intensité de la tension $T$ du câble, puis justifier l’équilibre de la caisse en rappelant les conditions d’un solide soumis à deux forces. (2,5 pts)

**Partie C — Représentation et triangle des forces** (3 points)

5. Avec l’échelle $1\ \mathrm{cm} = 50\ \mathrm{N}$, donner la longueur du vecteur qui représente le poids de la caisse, puis décrire ce tracé (point d’application, direction, sens). (1,5 pts)
6. Sur le port, un point O est sollicité par trois forces concourantes en équilibre : $\vec{F_1} = 30\ \mathrm{N}$ dirigée vers l’est, $\vec{F_2} = 40\ \mathrm{N}$ dirigée vers le nord, et $\vec{F_3}$ de sens inconnu. Calculer l’intensité de $F_3$ et préciser dans quel sens elle doit agir. Justifier le fait que les trois forces forment un triangle fermé. (1,5 pts)

## Solution

**1. Poids de la caisse.**

Données : $m = 200\ \mathrm{kg}$, $g = 9{,}8\ \mathrm{N/kg}$.

Formule : $P = m \cdot g$

$$P = 200 \times 9{,}8 = 1960\ \mathrm{N}$$

Le poids de la caisse est $P = 1960\ \mathrm{N}$, soit $1{,}96\ \mathrm{kN}$.

**2. Caractéristiques du vecteur poids.**

- **Point d’application** : le centre de gravité de la caisse.
- **Direction** : la verticale.
- **Sens** : vers le bas (vers le centre de la Terre).

**3. Les deux forces sur la caisse suspendue.**

- Le **poids** $P$ de la caisse : direction verticale, sens **vers le bas**, intensité $1960\ \mathrm{N}$.
- La **tension** $T$ du câble : direction **le long du câble** (verticale ici), sens **vers le haut** (elle tire la caisse vers la grue).

**4. Tension du câble et justification de l’équilibre.**

La caisse est immobile : elle est en équilibre sous l’action de ces deux forces, qui ont :

1. le **même point d’application** (la caisse, en son centre de gravité) ;
2. la **même direction** (la verticale) ;
3. des **sens opposés** (poids vers le bas, tension vers le haut) ;
4. des intensités égales pour que la résultante soit nulle : $\vec{T} + \vec{P} = \vec{0}$.

Donc :

$$T = P = 1960\ \mathrm{N}$$

Le câble doit donc supporter une traction de $1960\ \mathrm{N}$ : c’est un solide à deux forces, exactement comme une pince qui maintient un objet.

**5. Représentation du poids à l’échelle 1 cm = 50 N.**

Longueur du vecteur :

$$L = \frac{1960\ \mathrm{N}}{50\ \mathrm{N/cm}} = 39{,}2\ \mathrm{cm}$$

Description du tracé : on marque le point d’application (centre de gravité de la caisse), on trace une flèche **verticale de $39{,}2\ \mathrm{cm}$**, dirigée **vers le bas**, et on indique l’échelle $1\ \mathrm{cm} = 50\ \mathrm{N}$ ainsi que la valeur $P = 1960\ \mathrm{N}$.

**6. Le triangle des forces.**

$\vec{F_1}$ et $\vec{F_2}$ étant perpendiculaires, leur résultante se calcule par le théorème de Pythagoras :

$$R = \sqrt{F_1^2 + F_2^2} = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = \sqrt{2500} = 50\ \mathrm{N}$$

Pour l’équilibre du point O, la troisième force doit être égale et opposée à cette résultante :

$$F_3 = 50\ \mathrm{N} \quad \text{dirigée vers le sud-ouest}$$

(en sens inverse de la résultante, qui pointe vers le nord-est). Tracées bout à bout à une échelle donnée, $\vec{F_1}$ (30), $\vec{F_2}$ (40) et $\vec{F_3}$ (50) forment un **triangle rectangle fermé** : la pointe du dernier vecteur retombe sur le point de départ, ce qui traduit $\vec{F_1} + \vec{F_2} + \vec{F_3} = \vec{0}$.

:::methode Ce que le correcteur attend
- Les **formules numérotées** et le **remplacement** des valeurs avec leurs unités : $P = m \cdot g = 200 \times 9{,}8 = 1960\ \mathrm{N}$.
- Le vocabulaire exact : centre de gravité, verticale, vers le bas, le long du câble, perpendiculaire, sens opposés, triangle fermé.
- Les **quatre conditions** de l’équilibre de deux forces citées dans le bon ordre.
- Le résultat arrondi avec son unité ($\mathrm{N}$, $\mathrm{cm}$).
:::

:::erreur Pièges classiques du sujet
1. Écrire $P = 200 \times 9{,}8 = 196\ \mathrm{N}$ : une erreur de calcul (c’est $1960\ \mathrm{N}$).
2. Oublier l’unité ou confondre masse ($\mathrm{kg}$) et poids ($\mathrm{N}$) : « la caisse pèse $200\ \mathrm{kg}$ » est fautif.
3. Dire que la tension est horizontale ou oblique : ici le câble est vertical, la tension suit le câble.
4. Calculer $30 + 40 + 50$ au lieu de construire le triangle : les forces s’ajoutent **géométriquement** (bout à bout), pas algébriquement.
:::
