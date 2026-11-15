---
titre: Relations trigonométriques dans un triangle rectangle
accroche: Programme officiel — Activités géométriques.
ordre: 8
duree: 70
demo: false
objectifs:
  - Définir cosinus, sinus et tangente dans un triangle rectangle
  - Calculer un côté ou un angle aigu avec les relations trigonométriques
  - Utiliser les valeurs remarquables de 30°, 45° et 60°
---

:::remarque À quoi ça sert au BFEM ?
Calculer la hauteur d'une tour, d'un arbre ou la longueur d'une ombre à partir d'un angle donné tombe presque chaque année au BFEM, souvent dans la dernière partie du sujet. Les relations trigonométriques font le lien entre un angle et deux longueurs d'un triangle rectangle. Là où Pythagore utilise trois longueurs, la trigonométrie permet de passer d'un angle à une longueur — et inversement.
:::

## Le triangle rectangle et le repérage des côtés

:::definition Triangle rectangle et angles aigus
Un triangle rectangle contient un angle droit ($90°$). Ses deux autres angles sont **aigus** (inférieurs à $90°$) et leur somme vaut $90°$ : ce sont des angles **complémentaires**.
:::

Le côté opposé à l'angle droit est l'**hypoténuse** : c'est le plus long côté du triangle.

Quand on travaille avec un angle aigu $A$, les trois côtés se nomment ainsi :

| Côté | Nom | Question à se poser |
| --- | --- | --- |
| Opposé à l'angle droit | **Hypoténuse** | Quel côté est en face du $90°$ ? |
| Opposé à $A$ | **Côté opposé** | Quel côté est en face de $A$ ? |
| Adjacent à $A$ | **Côté adjacent** | Quel côté touche $A$, sans être l'hypoténuse ? |

:::exemple Repérer les trois côtés
$ABC$ est rectangle en $A$.

- Hypoténuse : $[BC]$, car c'est le côté opposé à l'angle droit $A$.
- Pour l'angle $B$ : côté opposé = $[AC]$ (en face de $B$), côté adjacent = $[AB]$.
- Pour l'angle $C$ : côté opposé = $[AB]$ (en face de $C$), côté adjacent = $[AC]$.

Le même triangle donne donc deux jeux de côtés, selon l'angle choisi.
:::

:::erreur Attention au rôle des côtés
L'hypoténuse ne change jamais : c'est toujours le côté opposé à l'angle droit. En revanche, les côtés opposé et adjacent **s'inversent** quand on change d'angle. Avant tout calcul, redessine le triangle et nomme les trois côtés par rapport à l'angle étudié.
:::

## Les trois relations trigonométriques

:::formule Cosinus, sinus et tangente
Pour tout angle aigu $A$ d'un triangle rectangle :
$$
\cos A = \frac{\text{côté adjacent à } A}{\text{hypoténuse}}
$$
$$
\sin A = \frac{\text{côté opposé à } A}{\text{hypoténuse}}
$$
$$
\tan A = \frac{\text{côté opposé à } A}{\text{côté adjacent à } A}
$$
:::

Dans le triangle $ABC$ rectangle en $A$, les rapports s'écrivent :

| Angle | Cosinus | Sinus | Tangente |
| --- | --- | --- | --- |
| $B$ | $\cos B = \dfrac{AB}{BC}$ | $\sin B = \dfrac{AC}{BC}$ | $\tan B = \dfrac{AC}{AB}$ |
| $C$ | $\cos C = \dfrac{AC}{BC}$ | $\sin C = \dfrac{AB}{BC}$ | $\tan C = \dfrac{AB}{AC}$ |

:::remarque Comment bien choisir le rapport
Trois réflexes :
- tu connais l'**hypoténuse** → tu utilises $\cos$ ou $\sin$ ;
- tu ne connais ni l'hypoténuse, ni un rapport avec elle, mais bien l'**adjacent** et l'**opposé** → tu utilises $\tan$ ;
- rappelle-toi aussi que la tangente relie toujours les deux côtés qui ne sont pas l'hypoténuse.

On retient également la relation :
$$
\tan A = \frac{\sin A}{\cos A}
$$
:::

## Calculer un côté avec un angle donné

:::methode Trouver une longueur avec la trigonométrie
1. Repérer l'angle connu, puis nommer l'hypoténuse, le côté opposé et le côté adjacent.
2. Identifier ce qui est **connu** et ce qui est **cherché**.
3. Choisir le rapport ($\cos$, $\sin$ ou $\tan$) qui fait le lien entre ces deux éléments.
4. Remplacer les valeurs, puis résoudre (produit en croix si l'inconnue est au dénominateur).
:::

:::exemple Calculer deux côtés
$ABC$ est rectangle en $A$, avec $AB=7$ cm et l'angle $B=50°$. Calculer $BC$ et $AC$.

L'angle connu est $B$ ; l'hypoténuse $[BC]$ est inconnue et le côté adjacent $AB=7$ cm est connu : on utilise le cosinus.
$$
\cos B = \frac{AB}{BC}
$$
$$
\cos 50° = \frac{7}{BC}
$$
Donc :
$$
BC = \frac{7}{\cos 50°} \approx \frac{7}{0{,}643} \approx 10{,}9 \text{ cm}.
$$

Pour $AC$, le côté opposé à $B$, on utilise la tangente :
$$
\tan B = \frac{AC}{AB} \implies AC = 7 \times \tan 50° \approx 7 \times 1{,}192 \approx 8{,}3 \text{ cm}.
$$
:::

:::remarque Vérification avec Pythagore
Une fois les trois côtés connus, on peut vérifier : $7^2 + 8{,}3^2 \approx 49 + 68{,}9 = 117{,}9$ et $10{,}9^2 \approx 118{,}1$. Les valeurs sont cohérentes : les petites différences viennent des arrondis.
:::

## Calculer un angle aigu

Quand les deux longueurs sont connues, on calcule d'abord la valeur du rapport, puis on utilise les **touches inverses** de la calculatrice ($\cos^{-1}$, $\sin^{-1}$, $\tan^{-1}$).

:::methode Retrouver un angle aigu
1. Choisir le rapport qui relie les deux longueurs connues.
2. Calculer la valeur numérique du rapport (nombre décimal entre $0$ et $1$ pour $\cos$ et $\sin$).
3. Appuyer sur la touche inverse : $\cos^{-1}$, $\sin^{-1}$ ou $\tan^{-1}$.
4. Vérifier que l'angle obtenu est aigu (entre $0°$ et $90°$) et arrondir au degré près.
:::

:::exemple Calculer un angle
$ABC$ est rectangle en $A$ avec $AB=9$ cm et $BC=15$ cm. Calculer l'angle $B$.

Ici $AB$ est le côté adjacent à $B$ et $BC$ est l'hypoténuse :
$$
\cos B = \frac{9}{15} = 0{,}6
$$
$$
B = \cos^{-1}(0{,}6) \approx 53{,}1°.
$$
:::

:::erreur Trois pièges classiques
1. Appuyer sur $\cos$ au lieu de $\cos^{-1}$ (ou l'inverse) : on obtiendrait un nombre en degrés à la place d'un rapport, ou l'inverse.
2. Utiliser $\sin$ ou $\tan$ alors que le côté connu est l'adjacent et que l'hypoténuse est en jeu : c'est $\cos$ qu'il faut.
3. Oublier d'inverser la fraction : si $\cos B = \dfrac{7}{BC}$, alors $BC = \dfrac{7}{\cos B}$ et surtout **pas** $7 \times \cos B$.
:::

## Les valeurs remarquables de 30°, 45° et 60°

:::formule Le tableau à connaître absolument
| Angle | Cosinus | Sinus | Tangente |
| --- | --- | --- | --- |
| $30°$ | $\dfrac{\sqrt{3}}{2} \approx 0{,}87$ | $\dfrac{1}{2} = 0{,}5$ | $\dfrac{\sqrt{3}}{3} \approx 0{,}58$ |
| $45°$ | $\dfrac{\sqrt{2}}{2} \approx 0{,}71$ | $\dfrac{\sqrt{2}}{2} \approx 0{,}71$ | $1$ |
| $60°$ | $\dfrac{1}{2} = 0{,}5$ | $\dfrac{\sqrt{3}}{2} \approx 0{,}87$ | $\sqrt{3} \approx 1{,}73$ |
:::

:::methode Retrouver la table sans l'apprendre par cœur
1. **Cas $45°$** : prends un triangle rectangle isocèle de côtés $1$ et $1$ ; Pythagore donne l'hypoténuse $\sqrt{2}$. Alors $\cos 45° = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$ et $\tan 45° = \dfrac{1}{1} = 1$.
2. **Cas $30°$ et $60°$** : prends un triangle équilatéral de côté $2$ et coupe-le en deux par la hauteur : tu obtiens un triangle rectangle de côtés $1$, $\sqrt{3}$ et $2$. L'angle de $60°$ est à la base, celui de $30°$ au sommet.

Astuce : $\cos 30° = \sin 60°$ et $\cos 60° = \sin 30°$, car $30°$ et $60°$ sont complémentaires.
:::

:::exemple Utiliser une valeur remarquable
$ABC$ est rectangle en $A$, $BC=10$ cm et l'angle $B=30°$. Calculer $AC$ et $AB$.

Le côté opposé à $30°$ vaut la moitié de l'hypoténuse :
$$
AC = BC \times \sin 30° = 10 \times \frac{1}{2} = 5 \text{ cm}.
$$
Le côté adjacent :
$$
AB = BC \times \cos 30° = 10 \times \frac{\sqrt{3}}{2} = 5\sqrt{3} \approx 8{,}7 \text{ cm}.
$$
:::

## Applications : hauteurs et ombres

:::methode Mesurer une hauteur inaccessible
1. Dessine la scène : l'objet (arbre, tour, mât) est **perpendiculaire au sol**, donc le triangle formé est rectangle.
2. Repère l'angle donné : angle d'élévation (on lève la tête vers le sommet) ou angle des rayons du soleil avec le sol.
3. Note la distance mesurée au sol : c'est le côté adjacent.
4. Applique la tangente (tu cherches l'opposé, la hauteur), puis arrondis au dixième.
:::

:::exemple La tour de la Renaissance
Moussa se place à $180$ m du pied de la tour de la Renaissance à Dakar et mesure un angle d'élévation de $30°$ vers le sommet. Quelle est la hauteur $h$ de la tour ?

Le triangle formé est rectangle : la tour est perpendiculaire au sol. L'angle connu est $30°$, l'adjacent est $180$ m et l'opposé est la hauteur $h$ :
$$
\tan 30° = \frac{h}{180}
$$
$$
h = 180 \times \frac{\sqrt{3}}{3} = 60\sqrt{3} \approx 103{,}9 \text{ m}.
$$

La tour mesure environ $104$ mètres.
:::

:::exemple L'ombre d'un mât au marché de Sandaga
Au marché de Sandaga, l'ombre d'un mât planté à la verticale mesure $12$ m, et l'angle des rayons du soleil avec le sol est $45°$. Quelle est la hauteur $h$ du mât ?

$$
\tan 45° = \frac{h}{12} \implies h = 12 \times \tan 45° = 12 \times 1 = 12 \text{ m}.
$$

Avec un angle de $45°$, hauteur et ombre sont toujours égales.
:::

:::piege Depuis où la mesure est-elle faite ?
Au BFEM, la distance est presque toujours donnée depuis le **pied** de l'objet. Si la mesure est faite depuis les yeux de l'observateur, il faut ajouter la hauteur de celui-ci à la hauteur calculée. Lis bien l'énoncé avant de poser ta relation.
:::

## Trigonométrie, Pythagore et Thalès : quel outil choisir ?

:::remarque Les trois outils du triangle
- Trois longueurs connues, un angle droit → **Pythagore**.
- Deux triangles avec des droites parallèles → **Thalès**.
- Un angle connu et des longueurs (ou l'inverse) → **trigonométrie**.

Dans les sujets de BFEM, ces outils se combinent souvent : on calcule d'abord une longueur avec la trigonométrie, puis on utilise Thalès ou Pythagore dans une autre partie de la figure.
:::

:::erreur Les erreurs qui coûtent des points
1. Utiliser un rapport sans préciser l'angle : écris toujours $\cos B = \dots$, jamais un rapport tout seul.
2. Oublier l'unité (cm, m) ou la garder au mauvais endroit dans la chaîne de calcul.
3. Donner un angle en radians : vérifie que ta calculatrice est en **degrés**.
4. Arrondir trop tôt : garde les valeurs exactes ($\sqrt{3}$) jusqu'au dernier calcul, puis arrondis au dixième.
:::

## Ce qu'il faut retenir

- Dans un triangle rectangle : $\cos = \dfrac{\text{adjacent}}{\text{hypoténuse}}$, $\sin = \dfrac{\text{opposé}}{\text{hypoténuse}}$, $\tan = \dfrac{\text{opposé}}{\text{adjacent}}$.
- L'hypoténuse est toujours le côté opposé à l'angle droit ; les côtés opposé et adjacent dépendent de l'angle étudié.
- Pour trouver un angle : on calcule la valeur du rapport, puis on utilise $\cos^{-1}$, $\sin^{-1}$ ou $\tan^{-1}$.
- Valeurs remarquables : $\cos 30° = \dfrac{\sqrt{3}}{2}$, $\sin 30° = \dfrac{1}{2}$, $\tan 45° = 1$, $\cos 60° = \dfrac{1}{2}$, $\sin 60° = \dfrac{\sqrt{3}}{2}$, $\tan 60° = \sqrt{3}$.
- Pour les hauteurs et les ombres : l'objet et le sol forment un triangle rectangle, on utilise le plus souvent la tangente.
