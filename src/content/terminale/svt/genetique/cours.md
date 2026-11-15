---
titre: Génétique et transmission des caractères
accroche: Lois de Mendel, brassage génétique, croisements tests et hérédité humaine liée au sexe.
series: S1, S2
ordre: 1
duree: 50
coefficient: 4
demo: true
objectifs:
  - Distinguer génotype et phénotype, homozygote et hétérozygote.
  - Énoncer et appliquer les trois lois de Mendel.
  - Interpréter un croisement test et un échiquier de croisement.
  - Expliquer le brassage interchromosomique et le brassage intrachromosomique.
  - Analyser une transmission liée au sexe (daltonisme, hémophilie).
prerequis:
  - Structure de l'ADN et notion de gène et d'allèle.
  - Division cellulaire : mitose et méiose.
  - Notion de chromosomes homologues.
---

:::remarque Pourquoi la génétique est centrale en S1
La génétique représente une part importante de l'épreuve de SVT au BAC S1. Les exercices demandent presque toujours la même démarche : analyser des résultats de croisements, formuler des hypothèses, puis les valider par un échiquier ou un test statistique. Ce chapitre t'apprend cette démarche pas à pas.
:::

## Vocabulaire de base

La génétique étudie la transmission des caractères héréditaires d'une génération à la suivante.

- Un **caractère** est une particularité observable d'un individu (couleur des yeux, groupe sanguin).
- Un **gène** est une portion d'ADN portant l'information pour un caractère. Il occupe un **locus** précis sur un chromosome.
- Un **allèle** est une version d'un gène. Pour un gène donné, un individu possède deux allèles, un sur chaque chromosome homologue.
- Le **génotype** est la composition allélique d'un individu (par exemple $A//a$).
- Le **phénotype** est l'aspect observable (par exemple « fleur rouge »).
- Un individu est **homozygote** si ses deux allèles sont identiques ($A//A$ ou $a//a$), **hétérozygote** s'ils sont différents ($A//a$).
- Un allèle est **dominant** s'il s'exprime chez l'hétérozygote ; il est **récessif** s'il ne s'exprime qu'à l'état homozygote.

:::remarque Écriture des génotypes
On note les génotypes avec deux barres obliques entre les allèles, par exemple $A//a$. Les allèles dominants s'écrivent en majuscule, les récessifs en minuscule. Cette notation rappelle que les deux allèles sont portés par deux chromosomes homologues.
:::

## Les trois lois de Mendel

Gregor Mendel, en étudiant le pois cultivé, a établi les lois fondamentales de l'hérédité.

### Première loi : uniformité des hybrides

Si on croise deux lignées pures différant par un seul caractère (croisement **monohybride**), tous les individus de la première génération $F_1$ sont identiques et présentent le caractère dominant.

Exemple : $A//A$ (fleur rouge) × $a//a$ (fleur blanche) donne $100\,\%$ de $A//a$, tous à fleurs rouges si $A$ est dominant.

### Deuxième loi : ségrégation indépendante des allèles

Lors de la formation des gamètes (méiose), les deux allèles d'un gène se séparent : chaque gamète ne reçoit qu'un seul allèle.

Autrement dit, un hétérozygote $A//a$ produit $50\,\%$ de gamètes $A$ et $50\,\%$ de gamètes $a$.

:::formule Croisement de deux hétérozygotes
Le croisement $A//a \times A//a$ donne, en $F_2$, les proportions phénotypiques :
$$
3/4 \text{ dominant} \quad ; \quad 1/4 \text{ récessif}
$$
soit un rapport $3:1$.
:::

Échiquier de croisement :

| | $A$ | $a$ |
| --- | --- | --- |
| **$A$** | $A//A$ | $A//a$ |
| **$a$** | $A//a$ | $a//a$ |

Les génotypes apparaissent dans les proportions $1/4$ $A//A$, $1/2$ $A//a$, $1/4$ $a//a$.

### Troisième loi : brassage indépendant des caractères

Si on croise des individus différant par deux caractères (croisement **dihybride**), les allèles de gènes situés sur des chromosomes **différents** se répartissent indépendamment lors de la méiose.

:::formule Croisement dihybride $AaBb \times AaBb$
Si les deux gènes sont indépendants, les proportions phénotypiques en $F_2$ sont :
$$
9/16 : 3/16 : 3/16 : 1/16
$$
(soit $9:3:3:1$), correspondant aux quatre combinaisons de caractères.
:::

:::methode Construire un échiquier à deux gènes
1. Écrire les génotypes des parents.
2. Déterminer tous les types de gamètes possibles (avec leurs proportions).
3. Placer les gamètes d'un parent en ligne, ceux de l'autre en colonne.
4. Remplir les cases en combinant les allèles.
5. Compter les phénotypes et vérifier que le total correspond au nombre de cases.
:::

## Le croisement test

Le **croisement test** (ou test-cross) consiste à croiser un individu de phénotype dominant mais de génotype inconnu avec un individu homozygote récessif.

- Si l'individu est homozygote dominant ($A//A$), tous les descendants sont dominants.
- Si l'individu est hétérozygote ($A//a$), on obtient $50\,\%$ de dominants et $50\,\%$ de récessifs.

:::exemple Test-cross
Un cobaye à poil noir (dominant) est croisé avec un cobaye à poil blanc (récessif $b//b$). On obtient $12$ descendants noirs et $11$ descendants blancs.

Les proportions sont proches de $1:1$, ce qui est caractéristique d'un parent hétérozygote $B//b$. Si le parent avait été $B//B$, tous les petits auraient été noirs. Le parent testé est donc hétérozygote.
:::

:::erreur Attention aux effectifs
En génétique, les proportions théoriques ne se retrouvent exactement que sur de grands effectifs. Avec $23$ descendants, un écart à la théorie est normal. On parle de **conformité statistique** : on peut utiliser un test du khi-deux pour valider une hypothèse.
:::

## Brassage interchromosomique

Lors de la méiose, les chromosomes homologues se séparent en anaphase I, et les chromosomes non homologues se répartissent **indépendamment** les uns des autres. C'est le **brassage interchromosomique**.

Pour $n$ paires de chromosomes, le nombre de combinaisons possibles de gamètes est $2^n$. Chez l'être humain, $n=23$, soit plus de $8$ millions de gamètes différents possibles pour un seul individu.

## Brassage intrachromosomique

Lors de la prophase I de méiose, les chromosomes homologues s'apparient et échangent des segments : c'est le **crossing-over**. Il crée de nouvelles combinaisons d'allèles sur un même chromosome.

:::formule Gènes liés
Lorsque deux gènes sont situés sur le **même chromosome**, ils sont dits **liés**. Les combinaisons parentales sont alors majoritaires, et les combinaisons recombinées (issues du crossing-over) sont minoritaires.

La distance entre les gènes, exprimée en **centimorgans** (cM), est proportionnelle à la fréquence des recombinants.
:::

:::exemple Gènes liés ou indépendants ?
Un croisement test donne quatre phénotypes dans les proportions :
$$
42\,\% \quad ; \quad 41\,\% \quad ; \quad 9\,\% \quad ; \quad 8\,\%
$$

Les proportions ne sont pas $25\,\%$ chacune : les gènes ne sont donc **pas indépendants**. Les deux classes majoritaires correspondent aux combinaisons parentales, les deux classes minoritaires aux recombinants. La fréquence de recombinaison est $9+8=17\,\%$, soit une distance de $17$ cM.
:::

## Génétique humaine

Chez l'être humain, on ne peut pas réaliser de croisements expérimentaux. On utilise donc des **arbres généalogiques** (pedigrees) pour déterminer le mode de transmission d'un caractère.

### Hérédité autosomale

Le gène est porté par une paire de chromosomes non sexuels (autosomes).

- **Autosomale dominante** : le caractère apparaît à chaque génération, un seul allèle suffit. Un individu atteint a au moins un parent atteint.
- **Autosomale récessive** : le caractère peut sauter des générations. Les parents peuvent être sains mais porteurs (hétérozygotes).

### Hérédité liée au sexe

Le gène est porté par le chromosome $X$ (ou $Y$). Les hommes ($XY$) et les femmes ($XX$) ne sont pas égaux face à ces caractères.

:::formule Daltonisme et hémophilie
Ces deux anomalies sont liées à des allèles **récessifs portés par le chromosome $X$**.

- Une femme n'est atteinte que si elle possède l'allèle sur ses **deux** chromosomes $X$ ($X^d//X^d$).
- Un homme est atteint dès qu'il possède l'allèle sur son unique $X$ ($X^d//Y$).
:::

Conséquence : ces maladies touchent beaucoup plus souvent les hommes. Une mère porteuse $X^D//X^d$ transmet l'allèle à la moitié de ses fils, qui sont alors atteints.

:::exemple Arbre généalogique
Dans une famille, une femme non daltonienne a un père daltonien. Elle épouse un homme non daltonien.

- La femme est nécessairement porteuse $X^D//X^d$, car elle a reçu $X^d$ de son père.
- Ses fils ont une chance sur deux d'être daltoniens ($X^d//Y$).
- Ses filles ne sont jamais daltoniennes (elles reçoivent $X^D$ de leur père), mais une fille sur deux est porteuse.
:::

## Groupes sanguins : un cas de codominance

Le groupe sanguin ABO est déterminé par un gène à trois allèles : $A$, $B$ et $O$. Les allèles $A$ et $B$ sont **codominants**, et $O$ est récessif.

| Génotypes | Groupe |
| --- | --- |
| $A//A$ ou $A//O$ | A |
| $B//B$ ou $B//O$ | B |
| $A//B$ | AB |
| $O//O$ | O |

Le groupe AB illustre la codominance : les deux allèles s'expriment simultanément, sans dominance de l'un sur l'autre.

## Ce qu'il faut retenir

- Génotype = composition allélique ; phénotype = aspect observable.
- Loi 1 : uniformité des hybrides $F_1$.
- Loi 2 : ségrégation des allèles en $50/50$ chez l'hétérozygote.
- Loi 3 : brassage indépendant pour des gènes non liés ($9:3:3:1$).
- Test-cross : révèle le génotype d'un individu dominant.
- Gènes liés : combinaisons parentales majoritaires, recombinants minoritaires.
- Hérédité liée à l'$X$ : les hommes sont plus souvent atteints par les maladies récessives.
