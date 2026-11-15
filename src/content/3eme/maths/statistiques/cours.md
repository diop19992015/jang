---
titre: Statistiques
accroche: Programme officiel — Activités numériques.
ordre: 6
duree: 80
demo: false
objectifs:
  - Construire un tableau et un diagramme à partir d’une série statistique
  - Calculer effectifs, fréquences, moyenne et médiane
  - Interpréter et comparer des représentations graphiques
---

:::remarque À quoi ça sert au BFEM ?
Les statistiques sont au programme chaque année au BFEM : tableau à compléter, calcul de fréquence, de moyenne ou de médiane, diagramme circulaire à lire ou à construire, comparaison de deux classes. Ce sont des points « mécaniques » : avec une méthode rigoureuse, on les gagne tous.
:::

## Une série statistique

:::definition Les mots de base
- **Population** : l’ensemble des individus étudiés (les élèves de 3ème d’un collège).
- **Individu** : un membre de la population (un élève).
- **Variable** : la caractéristique étudiée (la note, l’âge, le moyen de transport).
- **Modalité** : une valeur possible de la variable (la note $12$, le bus).
- **Effectif $n_i$** : le nombre d’individus ayant la modalité $n_i$.
- **Effectif total $n$** : la somme des effectifs.
:::

:::formule Effectif total
$$
n = n_1 + n_2 + \dots + n_k
$$
:::

:::exemple Série des notes de 20 élèves de 3ème
| Note | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Effectif | 2 | 3 | 4 | 5 | 3 | 2 | 1 |

Effectif total :
$$
n = 2 + 3 + 4 + 5 + 3 + 2 + 1 = 20
$$
:::

:::methode Construire un tableau statistique
1. Lister les modalités dans l’ordre croissant.
2. Compter les effectifs (une coche par individu, pour ne rien oublier).
3. Additionner : la somme doit être égale à $n$.
4. Calculer les fréquences, puis les fréquences cumulées.
:::

## Effectifs et fréquences

:::formule Fréquence relative
$$
f_i = \frac{n_i}{n}
$$
:::

:::formule Fréquence en pourcentage
$$
\text{fréquence en \%} = \frac{n_i}{n} \times 100
$$
:::

:::remarque Contrôle indispensable
$$
f_1 + f_2 + \dots + f_k = 1 \qquad \text{et} \qquad \text{somme des pourcentages} = 100\,\%
$$
Si la somme n’est pas $1$ (ou $100\,\%$), il y a une erreur de calcul.
:::

:::exemple Tableau complet de la série des notes
| Note | Effectif | Fréquence | Fréquence cumulée |
| --- | --- | --- | --- |
| 8 | 2 | $2/20 = 0{,}10$ | 0,10 |
| 9 | 3 | $3/20 = 0{,}15$ | 0,25 |
| 10 | 4 | $4/20 = 0{,}20$ | 0,45 |
| 11 | 5 | $5/20 = 0{,}25$ | 0,70 |
| 12 | 3 | $3/20 = 0{,}15$ | 0,85 |
| 13 | 2 | $2/20 = 0{,}10$ | 0,95 |
| 14 | 1 | $1/20 = 0{,}05$ | 1,00 |
| **Total** | **20** | **1,00** | — |

La **fréquence cumulée** s’obtient en ajoutant successivement les fréquences : elle indique la part des individus dont la modalité est **inférieure ou égale** à la modalité considérée.
:::

## La moyenne

:::formule Moyenne d’une série
$$
\bar{x} = \frac{n_1 x_1 + n_2 x_2 + \dots + n_k x_k}{n}
$$
:::

:::methode Calculer la moyenne
1. Multiplier chaque modalité par son effectif.
2. Additionner tous les produits.
3. Diviser par l’effectif total $n$.
4. Vérifier : la moyenne doit être comprise entre la plus petite et la plus grande modalité.
:::

:::exemple Calcul de la moyenne des notes
$$
\bar{x} = \frac{8 \times 2 + 9 \times 3 + 10 \times 4 + 11 \times 5 + 12 \times 3 + 13 \times 2 + 14 \times 1}{20}
$$
$$
\bar{x} = \frac{16 + 27 + 40 + 55 + 36 + 26 + 14}{20} = \frac{214}{20} = 10{,}7
$$

La moyenne de la classe est $10,7$. Elle est bien comprise entre $8$ et $14$. ✓
:::

## La médiane

:::definition Médiane
La **médiane** est la valeur qui partage la série en deux groupes d’effectifs égaux : la moitié des individus a une note **inférieure ou égale** à la médiane, l’autre moitié une note **supérieure ou égale**.
:::

:::methode Calculer la médiane
1. Vérifier l’effectif total $n$ et construire l’effectif cumulé.
2. Si $n$ est **impair** : la médiane est la valeur d’ordre $\dfrac{n+1}{2}$.
3. Si $n$ est **pair** : la médiane est la moyenne des valeurs d’ordre $\dfrac{n}{2}$ et $\dfrac{n}{2} + 1$.
:::

:::exemple Médiane de la série des notes
Ici $n = 20$ (pair) : on cherche les valeurs d’ordre $10$ et $11$.

- L’effectif cumulé de la note $10$ vaut $9$ : les élèves de rangs $1$ à $9$ ont au plus $10$.
- L’effectif cumulé de la note $11$ vaut $14$ : les élèves de rangs $10$ à $14$ ont la note $11$.

Donc la $10^{\text{e}}$ et la $11^{\text{e}}$ valeurs valent toutes les deux $11$ :
$$
\text{médiane} = \frac{11 + 11}{2} = 11
$$
:::

:::remarque Moyenne et médiane racontent deux histoires
La moyenne est influencée par les valeurs extrêmes ; la médiane, non. Si un élève obtient $20$ alors que la classe est autour de $10$, la moyenne monte fortement, la médiane presque pas. Au BFEM, on te demande souvent de « calculer les deux » : ne les confonds pas.
:::

## Les diagrammes

### Le diagramme en bâtons

Chaque modalité est représentée par un bâton dont la hauteur est proportionnelle à l’effectif (ou à la fréquence).

:::methode Construire un diagramme en bâtons
1. Tracer les axes : axe horizontal pour les modalités, axe vertical pour les effectifs.
2. Choisir une graduation adaptée (par exemple $1$ cm pour $1$ élève).
3. Dessiner un bâton de la hauteur indiquée pour chaque modalité.
4. Titre du graphique et unités sont obligatoires.
:::

### Le diagramme circulaire

Chaque modalité est un secteur angulaire dont l’angle est proportionnel à sa fréquence.

:::formule Angle d’un secteur
$$
\alpha_i = 360° \times \frac{n_i}{n}
$$
:::

:::exemple Les moyens de transport des élèves d’une classe
| Transport | Bus | Marche | Taxi | Vélo |
| --- | --- | --- | --- | --- |
| Fréquence | 0,40 | 0,30 | 0,20 | 0,10 |
| Angle | $360 \times 0{,}40 = 144°$ | $360 \times 0{,}30 = 108°$ | $360 \times 0{,}20 = 72°$ | $360 \times 0{,}10 = 36°$ |

Contrôle : $144 + 108 + 72 + 36 = 360°$ ✓.
:::

:::methode Construire un diagramme circulaire
1. Calculer la fréquence de chaque modalité.
2. Multiplier chaque fréquence par $360°$ (à la calculatrice).
3. Reporter les angles avec un rapporteur au centre du disque.
4. Couler chaque secteur et légender avec le nom et le pourcentage.
:::

:::piege Trois nombres à ne pas confondre
Pour une modalité, on te demande tour à tour l’**effectif** (un nombre d’individus), la **fréquence** (entre $0$ et $1$ ou en %) et l’**angle** (en degrés, entre $0°$ et $360°$). Un angle s’écrit toujours avec le symbole $°$ : écrire « $40$ » pour « $40\,\%$ » coûte un point.
:::

## Interpréter et comparer deux populations

:::methode Comparer deux séries
1. Calculer la moyenne (et si besoin la médiane) de chaque série.
2. Comparer les pourcentages ou les hauteurs de bâtons.
3. Conclure par une phrase **chiffrée** : « La moyenne des filles est supérieure de $2$ points à celle des garçons. »
:::

:::exemple Comparer garçons et filles de 3ème
Série des garçons (10 élèves) : moyenne $10{,}5$.  
Série des filles (10 élèves) : moyenne $12{,}5$.

Écart :
$$
12{,}5 - 10{,}5 = 2 \text{ points}
$$

**Interprétation :** les filles ont une moyenne supérieure de $2$ points à celle des garçons.

La moyenne de la classe entière (20 élèves) est :
$$
\frac{10 \times 10{,}5 + 10 \times 12{,}5}{20} = \frac{105 + 125}{20} = \frac{230}{20} = 11{,}5
$$
:::

:::erreur Les erreurs qui coûtent des points
1. Diviser la somme par le nombre de **modalités** au lieu de l’effectif total $n$.
2. Oublier de vérifier que la somme des effectifs vaut bien $n$.
3. Confondre effectif et fréquence, ou oublier le $\times 100$ pour le pourcentage.
4. Prendre la médiane sans construire l’effectif cumulé (surtout quand $n$ est pair).
5. Écrire un angle sans le signe $°$, ou donner une fréquence quand on demande un angle.
:::

:::piege Le tableau avant tout
Ne jamais calculer « de tête » : recopie le tableau avec ses colonnes (modalité, effectif, fréquence, fréquence cumulée). Presque toutes les erreurs viennent d’une ligne sautée ou d’un effectif mal reporté.
:::

## Ce qu’il faut retenir

- Une série statistique se lit dans un **tableau** : modalités, effectifs, fréquences, fréquences cumulées.
- La somme des effectifs vaut $n$ ; la somme des fréquences vaut $1$ (ou $100\,\%$).
- **Moyenne** : somme des (effectif × modalité) divisée par $n$.
- **Médiane** : valeur qui coupe la série en deux ; pour $n$ pair, moyenne des deux valeurs centrales.
- **Diagramme en bâtons** : hauteur ∝ effectif. **Diagramme circulaire** : $\alpha = 360° \times$ fréquence, et les angles totalisent $360°$.
- Comparer deux populations, c’est comparer leurs moyennes (ou fréquences) et conclure avec des chiffres.
