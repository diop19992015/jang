---
titre: Théorème de Thalès et applications
accroche: Configurations de Thalès, calcul de longueurs, réciproque et agrandissement-réduction.
ordre: 1
duree: 45
coefficient: 3
demo: true
objectifs:
  - Reconnaître une configuration de Thalès (droites parallèles et sécantes).
  - Calculer des longueurs avec le théorème de Thalès.
  - Utiliser la réciproque pour démontrer que deux droites sont parallèles.
  - Appliquer le coefficient d'agrandissement ou de réduction.
prerequis:
  - Théorème de Pythagore.
  - Proportionnalité et produit en croix.
  - Notion de droites parallèles et sécantes.
---

:::remarque Un théorème très présent au BFEM
Le théorème de Thalès tombe presque chaque année au BFEM, souvent combiné avec Pythagore. Savoir reconnaître la bonne configuration et poser correctement les rapports de longueurs fait gagner beaucoup de points.
:::

## La configuration de Thalès

On a deux droites $(d)$ et $(d')$ **sécantes en $A$**. Deux droites parallèles coupent ces deux sécantes :
- la parallèle passant par $B$ coupe $(d')$ en $M$ ;
- la parallèle passant par $C$ coupe $(d')$ en $N$.

Autrement dit, on a $(BM) \parallel (CN)$.

:::remarque Deux configurations possibles
- **Configuration « triangle »** : les points $B$ et $C$ sont du même côté de $A$, et $M$, $N$ aussi. Les droites parallèles sont à l'intérieur du triangle $ABC$ ou à l'extérieur.
- **Configuration « papillon »** : les points sont de part et d'autre de $A$. Les rapports restent valables mais attention aux signes et à l'ordre des points.
:::

## Le théorème de Thalès

:::formule Énoncé
Si $A$, $B$, $C$ sont alignés, $A$, $M$, $N$ sont alignés, et si $(BM) \parallel (CN)$, alors :
$$
\frac{AM}{AC} = \frac{AN}{AB} = \frac{MN}{BC}
$$
:::

:::erreur Attention à l'ordre des lettres !
Le rapport s'écrit toujours en partant du point d'intersection $A$ :
$$
\frac{\text{petit côté}}{\text{grand côté}} = \frac{\text{petit côté}}{\text{grand côté}} = \frac{\text{parallèle}}{\text{parallèle}}
$$

Une erreur d'ordre des lettres fausse tout le calcul. Écris les rapports **avant** de remplacer par les nombres.
:::

:::methode Utiliser Thalès pour calculer une longueur
1. Identifier le point d'intersection des deux sécantes (souvent $A$).
2. Vérifier que les droites sont bien parallèles (donnée ou démonstration).
3. Écrire les trois rapports égaux dans le bon ordre.
4. Remplacer par les longueurs connues.
5. Faire un produit en croix pour trouver l'inconnue.
:::

:::exemple Calcul direct
Dans un triangle $ABC$, $M \in [AB]$ et $N \in [AC]$ avec $(MN) \parallel (BC)$.
On donne $AM=3$ cm, $AB=7{,}5$ cm et $BC=10$ cm. Calculer $MN$.

On écrit :
$$
\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}
$$

On utilise la paire qui contient l'inconnue :
$$
\frac{3}{7{,}5} = \frac{MN}{10}
$$

Produit en croix :
$$
MN = \frac{3 \times 10}{7{,}5} = \frac{30}{7{,}5} = 4 \text{ cm}.
$$
:::

## La réciproque du théorème de Thalès

La réciproque sert à **démontrer** que deux droites sont parallèles.

:::formule Réciproque
Si $A$, $B$, $M$ sont alignés dans cet ordre, $A$, $C$, $N$ sont alignés dans cet ordre, et si
$$
\frac{AM}{AB} = \frac{AN}{AC}
$$
alors les droites $(MN)$ et $(BC)$ sont parallèles.
:::

:::remarque L'ordre des points est essentiel
La réciproque exige que les points soient alignés **dans le même ordre** sur les deux droites. Si les rapports sont égaux mais que l'ordre est différent, on ne peut pas conclure au parallélisme.
:::

:::exemple Démontrer un parallélisme
On donne $AM=2$ cm, $AB=5$ cm, $AN=2{,}4$ cm et $AC=6$ cm, avec $M \in [AB]$ et $N \in [AC]$.

On calcule séparément :
$$
\frac{AM}{AB} = \frac{2}{5} = 0{,}4 \qquad \frac{AN}{AC} = \frac{2{,}4}{6} = 0{,}4
$$

Les deux rapports sont égaux et les points sont alignés dans le même ordre, donc d'après la réciproque du théorème de Thalès, $(MN) \parallel (BC)$.
:::

:::erreur Ne pas confondre théorème et réciproque
- Le **théorème** part du parallélisme et conclut à l'égalité des rapports.
- La **réciproque** part de l'égalité des rapports et conclut au parallélisme.

Dans une démonstration, précise toujours laquelle tu utilises.
:::

## Agrandissement et réduction

Lorsque deux figures sont obtenues par agrandissement ou réduction, les longueurs sont multipliées par un même nombre $k$, appelé **coefficient** ou **rapport** d'agrandissement.

:::formule Effet du coefficient $k$
- Longueurs : multipliées par $k$.
- Aires : multipliées par $k^2$.
- Volumes : multipliés par $k^3$.
:::

:::exemple Coefficient et aire
Un triangle a une aire de $12$ cm². On l'agrandit avec un coefficient $k=3$.

Les longueurs sont multipliées par $3$, et l'aire par $k^2=9$ :
$$
12 \times 9 = 108 \text{ cm}^2.
$$
:::

## Thalès et Pythagore combinés

De nombreux exercices du BFEM demandent d'utiliser les deux théorèmes dans le même problème.

:::methode Stratégie combinée
1. Repérer les triangles rectangles pour Pythagore.
2. Repérer les droites parallèles pour Thalès.
3. Calculer d'abord la longueur manquante dans le triangle rectangle.
4. Utiliser ensuite Thalès pour passer à l'autre configuration.
:::

:::exemple Problème complet
$ABC$ est un triangle rectangle en $A$ avec $AB=6$ cm et $AC=8$ cm. $M$ est le milieu de $[AB]$ et la parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$.

**Calcul de $BC$** (Pythagore) :
$$
BC^2 = AB^2+AC^2 = 36+64 = 100 \implies BC = 10 \text{ cm}.
$$

**Calcul de $MN$** (Thalès) : comme $M$ est le milieu de $[AB]$, on a $\dfrac{AM}{AB}=\dfrac{1}{2}$, donc
$$
\frac{MN}{BC} = \frac{1}{2} \implies MN = 5 \text{ cm}.
$$
:::

## Ce qu'il faut retenir

- Thalès : deux sécantes coupées par deux parallèles donnent des rapports égaux.
- Toujours écrire les rapports en partant du point d'intersection.
- La réciproque démontre le parallélisme à partir de l'égalité des rapports.
- Un agrandissement de coefficient $k$ multiplie les aires par $k^2$ et les volumes par $k^3$.
- Thalès et Pythagore se combinent souvent dans les sujets de BFEM.
