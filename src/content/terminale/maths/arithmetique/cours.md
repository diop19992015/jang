---
titre: Arithmétique
accroche: Diviseurs, nombres premiers, PGCD et PPCM · Théorème de Gauss, identité de Bezout · Systèmes de numération · Congruences
series: S1, S3
ordre: 18
duree: 45
demo: false
statut: publie
objectifs:
  - Diviseurs, nombres premiers, PGCD et PPCM
  - Théorème de Gauss, identité de Bezout
  - Systèmes de numération
  - Congruences
partie: Algèbre
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
L'arithmétique apparaît chaque année dans une question « courte » : décomposer un nombre en facteurs premiers, calculer un PGCD ou un PPCM, justifier une divisibilité avec le théorème de Gauss ou Bézout, convertir un nombre d'une base à une autre, résoudre une congruence. Ce sont des points **rapides et sûrs** : on ne peut pas les rater quand on connaît les propriétés par cœur.
:::

## Diviseurs et décomposition en facteurs premiers

:::definition Diviseur
Soient $a$ et $b$ deux entiers. On dit que $b$ **divise** $a$, et on note $b \mid a$, s'il existe un entier $k$ tel que $a = b \times k$. Le nombre $k$ est le **quotient** de $a$ par $b$.
:::

:::exemple Diviseurs de 36
$36 = 1 \times 36 = 2 \times 18 = 3 \times 12 = 4 \times 9 = 6 \times 6$.

Les diviseurs positifs de $36$ sont : $1, 2, 3, 4, 6, 9, 12, 18, 36$. Il y en a $9$.
:::

:::formule Décomposition en facteurs premiers (théorème fondamental)
Tout entier supérieur à $1$ s'écrit de **façon unique** (à l'ordre près) comme produit de facteurs premiers :

$$
n = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \dots \times p_k^{\alpha_k}
$$

où $p_1 < p_2 < \dots < p_k$ sont des nombres premiers et $\alpha_i \geq 1$.
:::

:::methode Décomposer un nombre
1. Diviser par le plus petit facteur premier possible ($2$, puis $3$, puis $5$, $7$…).
2. Recommencer avec le quotient tant qu'il est supérieur à $1$.
3. Écrire le résultat en puissances.

Exemple : $360 = 36 \times 10 = (2^2 \times 3^2) \times (2 \times 5) = 2^3 \times 3^2 \times 5$.
:::

:::erreur Attention
$1$ n'est **pas** un nombre premier : il n'a qu'un seul diviseur. Un nombre premier exactement deux diviseurs : $1$ et lui-même.
:::

## Nombres premiers

:::definition Nombre premier
Un entier $p \geq 2$ est **premier** s'il n'a comme diviseurs que $1$ et $p$.

Les premiers nombres premiers sont : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, \dots$
:::

:::remarque Un seul pair
$2$ est le **seul** nombre premier pair : tout nombre pair supérieur à $2$ est divisible par $2$, donc composé.
:::

:::methode Crible d'Ératosthène (tester si $n$ est premier)
1. Si $n$ est pair et $n \neq 2$ : composé.
2. Sinon, on teste la divisibilité par tous les nombres premiers $p$ tels que $p^2 \leq n$.
3. Si aucun ne divise $n$, alors $n$ est premier.

Justification : si $n = a \times b$ avec $a \leq b$, alors $a^2 \leq a \times b = n$, donc $a \leq \sqrt{n}$. Il suffit donc de tester jusqu'à $\sqrt{n}$.
:::

:::exemple $97$ est-il premier ?
$\sqrt{97} \approx 8{,}8$. On teste $2$ (97 impair), $3$ (somme des chiffres $=17$, pas divisible par $3$), $5$ (ne finit pas par $0$ ou $5$), $7$ ($97 = 7 \times 13 + 6$). Aucun diviseur : $97$ est premier.
:::

## PGCD et PPCM

:::definition PGCD et PPCM
Le **PGCD** (plus grand commun diviseur) de $a$ et $b$ est le plus grand entier qui divise $a$ et $b$.
Le **PPCM** (plus petit commun multiple) de $a$ et $b$ est le plus petit entier non nul divisible à la fois par $a$ et $b$.
:::

:::formule Calcul par décomposition
Soit $n = p_1^{\alpha_1} \cdots p_k^{\alpha_k}$ et $m = p_1^{\beta_1} \cdots p_k^{\beta_k}$ (même facteurs, exposants nuls admis). Alors :

$$
\mathrm{PGCD}(n\,;\,m) = p_1^{\min(\alpha_1\,;\,\beta_1)} \times \dots \times p_k^{\min(\alpha_k\,;\,\beta_k)}
$$

$$
\mathrm{PPCM}(n\,;\,m) = p_1^{\max(\alpha_1\,;\,\beta_1)} \times \dots \times p_k^{\max(\alpha_k\,;\,\beta_k)}
$$

Et la relation fondamentale :

$$
\mathrm{PGCD}(n\,;\,m) \times \mathrm{PPCM}(n\,;\,m) = n \times m
$$
:::

:::exemple Calcul de $\mathrm{PGCD}(360\,;\,294)$
$360 = 2^3 \times 3^2 \times 5$ et $294 = 2 \times 3 \times 7^2$.

$\mathrm{PGCD} = 2^1 \times 3^1 = 6$.

Par la relation : $\mathrm{PPCM} = \dfrac{360 \times 294}{6} = 60 \times 294 = 17\,640$.
:::

:::remarque Propriétés
- $\mathrm{PGCD}(a\,;\,b) = \mathrm{PGCD}(a-b\,;\,b)$ : on peut remplacer un nombre par sa différence.
- $\mathrm{PGCD}(k \times a\,;\,k \times b) = k \times \mathrm{PGCD}(a\,;\,b)$.
- $a$ et $b$ sont **premiers entre eux** si $\mathrm{PGCD}(a\,;\,b) = 1$.
:::

## Divisibilité : le théorème de Gauss

:::formule Théorème de Gauss
Soient $a$, $b$, $c$ trois entiers tels que :

- $a$ divise $b \times c$ **et** $a$ est premier avec $b$ (c'est-à-dire $\mathrm{PGCD}(a\,;\,b)=1$),

alors $a$ divise $c$.

Symétriquement, si $a \mid b \times c$ et $\mathrm{PGCD}(a\,;\,c)=1$, alors $a \mid b$.
:::

:::exemple Application
Montrer que $15$ divise $8 \times 45$ ? Ici $a = 15$, $b = 8$, $c = 45$ : $\mathrm{PGCD}(15\,;\,8) = 1$ et $15 \mid 8 \times 45$. Donc $15 \mid 45$, ce qui est vrai ($45 = 15 \times 3$).

Cas typique du BAC : $n^2$ est divisible par $3$ $\Rightarrow$ $n$ est divisible par $3$ (car $3$ premier divise $n^2 = n \times n$, donc $3 \mid n$).
:::

:::erreur Erreur fréquente
Le théorème de Gauss **exige** l'hypothèse de premier entre eux. Sans elle, c'est faux : $6$ divise $4 \times 9 = 36$ mais $6$ ne divise ni $4$ ni $9$.
:::

## Identité de Bézout

:::formule Identité de Bézout
Soient $a$ et $b$ deux entiers non nuls. Il existe deux entiers $u$ et $v$ tels que :

$$
a \times u + b \times v = \mathrm{PGCD}(a\,;\,b)
$$

En particulier, si $a$ et $b$ sont premiers entre eux, il existe $u$ et $v$ tels que $a u + b v = 1$.
:::

:::methode Trouver $u$ et $v$ (algorithme d'Euclide étendu)
1. Écrire $\mathrm{PGCD}$ par divisions euclidiennes successives (algorithme d'Euclide).
2. Remonter en substituant : chaque reste s'exprime comme combinaison linéaire de $a$ et $b$.
3. Simplifier par le PGCD si nécessaire.

Exemple : $17u + 5v = 1$. On a $17 = 3 \times 5 + 2$, puis $5 = 2 \times 2 + 1$. Donc $1 = 5 - 2 \times 2 = 5 - 2 \times (17 - 3 \times 5) = 7 \times 5 - 2 \times 17$. Ainsi $u = -2$ et $v = 7$.
:::

:::remarque Utilité au BAC
Bézout sert à justifier qu'une équation $au + bv = 1$ admet une solution, à démontrer des équations diophantiennes, et à construire l'inverse d'un modulo dans les congruences.
:::

## Congruences

:::definition Congruence modulo $n$
Soient $a$, $b$ et $n \geq 2$ des entiers. On dit que $a$ est **congru** à $b$ modulo $n$, et on note $a \equiv b \pmod{n}$, si $n$ divise $a - b$, c'est-à-dire s'il existe $k$ tel que :

$$
a = b + k \times n
$$

Autrement dit : $a$ et $b$ ont le **même reste** dans la division euclidienne par $n$.
:::

:::exemple Congruences de base
- $17 \equiv 2 \pmod{5}$ car $17 - 2 = 15 = 3 \times 5$.
- $-3 \equiv 4 \pmod{7}$ car $-3 - 4 = -7$.
- Tout entier est congru à $0$, $1$, $2$, $3$ ou $4$ modulo $5$.
:::

:::formule Propriétés des congruences
Si $a \equiv b \pmod{n}$ et $c \equiv d \pmod{n}$, alors :

- $a + c \equiv b + d \pmod{n}$ ;
- $a \times c \equiv b \times d \pmod{n}$ ;
- $a^k \equiv b^k \pmod{n}$ pour tout entier $k \geq 1$.

La congruence se « transporte » dans les opérations : on peut remplacer un nombre par un congru dans tout calcul.
:::

:::methode Résoudre $a x \equiv b \pmod{n}$
1. Simplifier la congruence en divisant tous les termes **et** le modulo par un même facteur commun (en faisant attention : on ne peut diviser le modulo que si ce facteur divise aussi $b$).
2. Chercher un nombre $u$ tel que $a \times u \equiv 1 \pmod{n}$ (inverse de $a$ modulo $n$) : c'est Bézout qui le fournit, $a u + n v = 1$.
3. Multiplier la congruence par $u$ : $x \equiv b \times u \pmod{n}$.
:::

:::exemple Résoudre $5x \equiv 3 \pmod{7}$
On cherche $u$ tel que $5u \equiv 1 \pmod{7}$ : $5 \times 3 = 15 \equiv 1 \pmod{7}$, donc $u = 3$.

$x \equiv 3 \times 3 \equiv 9 \equiv 2 \pmod{7}$.

L'ensemble des solutions est $\{\, 2 + 7k \,/\, k \in \mathbb{Z} \,\}$, soit $\dots, -5, 2, 9, 16, \dots$
:::

:::piege Confondre reste et congruence
$-3 \equiv 4 \pmod{7}$ : le reste de $-3$ dans la division par $7$ est bien $4$ (car $-3 = (-1) \times 7 + 4$). On garde toujours un reste compris entre $0$ et $n-1$.
:::

## Systèmes de numération

:::definition Écriture en base $b$
Tout entier $N \geq 0$ s'écrit de façon **unique** sous la forme :

$$
N = d_k b^k + d_{k-1} b^{k-1} + \dots + d_1 b + d_0
$$

avec $0 \leq d_i \leq b-1$ et $d_k \neq 0$. On note $N = (d_k d_{k-1} \dots d_0)_b$.
:::

:::methode Convertir en base $b$ (décomposition successive)
1. Diviser $N$ par $b$ : le reste est le **chiffre des unités** $d_0$.
2. Diviser le quotient par $b$ : le reste donne $d_1$, et ainsi de suite.
3. S'arrêter quand le quotient vaut $0$ ; lire les restes **de l'unité vers les plus hauts rangs**.

Exemple : $45$ en base $2$ : $45 = 2 \times 22 + 1$, $22 = 2 \times 11 + 0$, $11 = 2 \times 5 + 1$, $5 = 2 \times 2 + 1$, $2 = 2 \times 1 + 0$, $1 = 2 \times 0 + 1$.

Donc $45 = (101101)_2$.
:::

:::methode Lire une écriture en base $b$
Développer : $(101101)_2 = 32 + 8 + 4 + 1 = 45$.

En base $16$ : les chiffres vont de $0$ à $9$ puis $A = 10$, $B = 11$, $C = 12$, $D = 13$, $E = 14$, $F = 15$.
:::

:::exemple Conversions croisées
- $(1011)_2 = 8 + 2 + 1 = 11$ en base $10$.
- $100$ en base $10$ en base $2$ : $100 = 2 \times 50 + 0$, $50 = 2 \times 25 + 0$, $25 = 2 \times 12 + 1$, $12 = 2 \times 6 + 0$, $6 = 2 \times 3 + 0$, $3 = 2 \times 1 + 1$. Donc $100 = (1100100)_2$.
- $(2F)_{16} = 2 \times 16 + 15 = 47$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier que la conversion s'écrit **dans l'autre sens** : les restes se lisent de l'unité vers la gauche.
2. Utiliser un chiffre $\geq b$ dans une écriture en base $b$ (par exemple le chiffre $2$ en base $2$).
3. Appliquer le théorème de Gauss sans vérifier $\mathrm{PGCD}(a\,;\,b) = 1$.
4. Diviser une congruence sans diviser aussi le modulo, ou diviser le modulo sans que le facteur divise le second membre.
:::

## Ce qu'il faut retenir

- Décomposition **unique** en facteurs premiers : $n = p_1^{\alpha_1} \cdots p_k^{\alpha_k}$.
- $\mathrm{PGCD}$ = exposants **minimaux**, $\mathrm{PPCM}$ = exposants **maximaux**, et $\mathrm{PGCD} \times \mathrm{PPCM} = a \times b$.
- $a$ premier jusqu'à $\sqrt{n}$ suffit pour tester la primalité.
- **Gauss** : $a \mid bc$ avec $\mathrm{PGCD}(a\,;\,b) = 1$ $\Rightarrow$ $a \mid c$.
- **Bézout** : $au + bv = \mathrm{PGCD}(a\,;\,b)$ ; cas particulier $au + bv = 1$ si premiers entre eux.
- $a \equiv b \pmod{n}$ signifie $n \mid (a-b)$ ; les congruences se conservent par addition et multiplication.
- Conversion en base $b$ : divisions successives, restes lus de l'unité vers les plus hauts rangs.
