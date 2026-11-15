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

## L'essentiel du chapitre

:::formule Décomposition en facteurs premiers
Tout entier $n \geq 2$ s'écrit de façon unique (à l'ordre près) :

$$
n = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \dots \times p_k^{\alpha_k}
$$

Exemple : $360 = 2^3 \times 3^2 \times 5$.
:::

:::formule PGCD, PPCM et relation fondamentale
- $\mathrm{PGCD}$ : produit des facteurs communs avec l'exposant **le plus petit**.
- $\mathrm{PPCM}$ : produit de **tous** les facteurs avec l'exposant **le plus grand**.

$$
\mathrm{PGCD}(n\,;\,m) \times \mathrm{PPCM}(n\,;\,m) = n \times m
$$
:::

:::formule Théorème de Gauss
Si $a \mid b \times c$ et $\mathrm{PGCD}(a\,;\,b) = 1$, alors $a \mid c$.
:::

:::formule Identité de Bézout
Il existe $u, v \in \mathbb{Z}$ tels que :

$$
a \times u + b \times v = \mathrm{PGCD}(a\,;\,b)
$$

Si $\mathrm{PGCD}(a\,;\,b) = 1$ : $a u + b v = 1$.
:::

:::formule Congruence modulo $n$
$$
a \equiv b \pmod{n} \iff n \mid (a - b) \iff a = b + kn
$$

Propriétés : $a \equiv b$ et $c \equiv d$ $\Rightarrow$ $a + c \equiv b + d$ et $a c \equiv b d$ (et aussi $a^k \equiv b^k$) modulo $n$.
:::

:::formule Écriture en base $b$
$$
N = d_k b^k + d_{k-1} b^{k-1} + \dots + d_1 b + d_0, \qquad 0 \leq d_i \leq b-1
$$
:::

## Méthode express

1. **Décomposer** un nombre : diviser successivement par $2, 3, 5, 7, \dots$ puis écrire en puissances.
2. **PGCD/PPCM** : décomposer les deux nombres, prendre les exposants min puis max, ou utiliser $\mathrm{PGCD} \times \mathrm{PPCM} = n \times m$.
3. **Tester la primalité** de $n$ : ne tester que les premiers $p \leq \sqrt{n}$.
4. **Justifier une divisibilité** : écrire le nombre sous forme de produit, repérer le facteur premier et invoquer Gauss.
5. **Trouver $u$ et $v$ de Bézout** : divisions euclidiennes puis remontée en substituant.
6. **Résoudre $a x \equiv b \pmod{n}$** : trouver l'inverse $u$ de $a$ modulo $n$ (Bézout), puis $x \equiv b u \pmod{n}$.
7. **Convertir en base $b$** : divisions successives par $b$, restes lus de l'unité vers les plus hauts rangs ; pour revenir en base $10$, développer.

:::erreur Les erreurs qui coûtent des points
1. Dire que $1$ est un nombre premier.
2. Invoquer Gauss sans vérifier que $a$ et $b$ sont **premiers entre eux**.
3. Oublier la relation $\mathrm{PGCD} \times \mathrm{PPCM} = n \times m$ quand un PGCD est connu.
4. Diviser une congruence par $d$ sans diviser **le modulo** par $d$ (et sans que $d$ divise le second membre).
5. Lire les restes de la conversion dans le mauvais sens.
:::

## Vocabulaire

- **Diviseur** : $b \mid a$ si $a = b \times k$ avec $k \in \mathbb{Z}$.
- **Nombre premier** : entier $\geq 2$ n'ayant que deux diviseurs ($1$ et lui-même).
- **Premiers entre eux** : $\mathrm{PGCD}(a\,;\,b) = 1$.
- **PGCD** : plus grand commun diviseur.
- **PPCM** : plus petit commun multiple.
- **Bézout** : identité $au + bv = \mathrm{PGCD}(a\,;\,b)$.
- **Gauss** : $a \mid bc$ avec $\mathrm{PGCD}(a,b)=1 \Rightarrow a \mid c$.
- **Congruence** : $a \equiv b \pmod{n}$ signifie que $a$ et $b$ ont le même reste modulo $n$.
- **Base $b$** : système de numération où chaque rang vaut une puissance de $b$.
