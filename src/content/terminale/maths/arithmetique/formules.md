## Divisibilité

:::formule Définition
$$
b \mid a \iff \exists\, k \in \mathbb{Z} \text{ tel que } a = b \times k
$$
:::

:::formule Propriétés de la divisibilité
- Si $a \mid b$ et $b \mid c$, alors $a \mid c$.
- Si $a \mid b$ et $a \mid c$, alors $a \mid (b + c)$ et $a \mid (b - c)$.
- Si $a \mid b$, alors pour tout $k$ : $a \mid (k \times b)$.
:::

:::formule Critères de divisibilité
| Diviseur | Critère | Exemple |
| --- | --- | --- |
| $2$ | dernier chiffre pair | $4\,518$ |
| $3$ | somme des chiffres divisible par $3$ | $2\,712 \to 12$ |
| $4$ | les deux derniers chiffres forment un multiple de $4$ | $1\,316 \to 16$ |
| $5$ | se termine par $0$ ou $5$ | $2\,035$ |
| $9$ | somme des chiffres divisible par $9$ | $6\,084 \to 18$ |
| $10$ | se termine par $0$ | $3\,450$ |
:::

## Nombres premiers

:::formule Décomposition unique (théorème fondamental)
$$
n = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \dots \times p_k^{\alpha_k}, \quad p_1 < p_2 < \dots < p_k
$$
:::

:::formule Test de primalité
Il suffit de tester les diviseurs premiers $p$ tels que $p \leq \sqrt{n}$.
:::

:::formule Nombre de diviseurs
Si $n = p_1^{\alpha_1} \cdots p_k^{\alpha_k}$, alors $n$ a exactement
$$
(\alpha_1 + 1)(\alpha_2 + 1) \dots (\alpha_k + 1)
$$
diviseurs positifs.

Exemple : $360 = 2^3 \times 3^2 \times 5$ a $(3+1)(2+1)(1+1) = 24$ diviseurs.
:::

## PGCD et PPCM

:::formule Par décomposition
$$
\mathrm{PGCD} = \prod p_i^{\min(\alpha_i\,;\,\beta_i)}, \qquad
\mathrm{PPCM} = \prod p_i^{\max(\alpha_i\,;\,\beta_i)}
$$
:::

:::formule Relation fondamentale
$$
\mathrm{PGCD}(n\,;\,m) \times \mathrm{PPCM}(n\,;\,m) = n \times m
$$
:::

:::formule Propriétés utiles
- $\mathrm{PGCD}(a\,;\,b) = \mathrm{PGCD}(a - b\,;\,b)$.
- $\mathrm{PGCD}(ka\,;\,kb) = k \times \mathrm{PGCD}(a\,;\,b)$ et $\mathrm{PPCM}(ka\,;\,kb) = k \times \mathrm{PPCM}(a\,;\,b)$.
- $\mathrm{PGCD}(a\,;\,b) = 1$ se lit « $a$ et $b$ sont **premiers entre eux** ».
:::

:::formule Algorithmes
- **Euclide** : $a = bq + r$ avec $0 \leq r < b$ ; répéter avec $(b\,;\,r)$ jusqu'à $r = 0$. Le dernier reste non nul est le PGCD.
- **Bézout** : remonter les divisions pour écrire $\mathrm{PGCD}(a\,;\,b) = au + bv$.
:::

## Théorème de Gauss

:::formule Gauss
$$
a \mid bc \;\text{ et }\; \mathrm{PGCD}(a\,;\,b) = 1 \;\Longrightarrow\; a \mid c
$$
:::

:::remarque Cas fréquent au BAC
Si un **nombre premier** $p$ divise un produit, il divise au moins un des facteurs (théorème d'Euclide). Exemple : $p \mid n^2 \Rightarrow p \mid n$.
:::

## Bézout

:::formule Identité de Bézout
$$
\exists\, u, v \in \mathbb{Z} : \quad a u + b v = \mathrm{PGCD}(a\,;\,b)
$$

Cas premiers entre eux :
$$
a u + b v = 1
$$
:::

:::remarque Conséquence
$a$ admet un inverse modulo $n$ (il existe $u$ avec $a u \equiv 1 \pmod{n}$) **si et seulement si** $\mathrm{PGCD}(a\,;\,n) = 1$.
:::

## Congruences

:::formule Définition
$$
a \equiv b \pmod{n} \iff n \mid (a - b)
$$
:::

:::formule Calcul avec les congruences
Si $a \equiv b$ et $c \equiv d$ modulo $n$, alors :
$$
a + c \equiv b + d, \qquad ac \equiv bd, \qquad a^k \equiv b^k \pmod{n}
$$
:::

:::formule Restes modulo $n$
Tout entier est congru à exactement un des restes $0, 1, \dots, n-1$ modulo $n$.

Petit théorème de Fermat : si $p$ est premier et $p \nmid a$, alors
$$
a^{p-1} \equiv 1 \pmod{p}
$$
:::

:::formule Résolution de $ax \equiv b \pmod{n}$
Trouver $u$ tel que $a u \equiv 1 \pmod{n}$ (via Bézout : $au + nv = 1$), alors $x \equiv bu \pmod{n}$.
:::

## Systèmes de numération

:::formule Base $b$ vers base $10$
$$
(d_k \dots d_1 d_0)_b = d_k b^k + \dots + d_1 b + d_0
$$
:::

:::formule Base $10$ vers base $b$
Divisions successives par $b$ : les **restes** donnent les chiffres, de l'unité vers les plus hauts rangs.
:::

:::remarque Bases utiles
Base $2$ : chiffres $0, 1$ ; rangs $1, 2, 4, 8, 16, 32, 64, \dots$
Base $16$ : chiffres $0 \dots 9, A(10), B(11), C(12), D(13), E(14), F(15)$.

Exemple : $(101101)_2 = 45$ et $(2F)_{16} = 47$.
:::
