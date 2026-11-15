---
titre: Suites numériques
accroche: Suites arithmétiques et géométriques · Convergence d’une suite géométrique · Sens de variation
series: L, S1, S3, S2, S4, S5
ordre: 12
duree: 45
demo: false
statut: publie
objectifs:
  - Suites arithmétiques et géométriques
  - Convergence d’une suite géométrique
  - Sens de variation
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Suite arithmétique
Raison $q$ tel que $u_{n+1} = u_n + q$ :

$$
u_n = u_0 + n\,q, \qquad
S = \frac{N\,(u_0 + u_{N-1})}{2}
$$
:::

:::formule Suite géométrique
Raison $q$ tel que $u_{n+1} = q\,u_n$ :

$$
u_n = u_0 \times q^n, \qquad
S = u_0 \times \frac{1 - q^N}{1 - q} \;\;(q \neq 1), \qquad
S = N \times u_0 \;\;(q = 1)
$$
:::

:::formule Convergence d'une géométrique
$$
|q| < 1 \Rightarrow \lim_{n \to +\infty} u_n = 0
$$

$$
|q| > 1 \Rightarrow \text{divergence}, \qquad q = -1 \Rightarrow \text{oscillation (divergence)}
$$

$q = 1$ : suite constante $u_n = u_0$ (convergence vers $u_0$).
:::

:::formule Sens de variation
$$
u_{n+1} - u_n \geq 0 \;\forall n \Rightarrow (u_n) \text{ croissante}
\qquad
u_{n+1} - u_n \leq 0 \;\forall n \Rightarrow (u_n) \text{ décroissante}
$$

Pour une suite à termes positifs : $u_{n+1}/u_n \geq 1 \Rightarrow$ croissante.
:::

:::formule Théorème de convergence monotone
- $(u_n)$ **croissante et majorée** $\Rightarrow$ converge.
- $(u_n)$ **décroissante et minorée** $\Rightarrow$ converge.

Pour une récurrence $u_{n+1} = f(u_n)$ : trouver la limite $\ell$ en résolvant $\ell = f(\ell)$ **après** avoir prouvé convergence.
:::

## Méthode express

1. **Identifier** la suite : calculer $u_{n+1} - u_n$ (arithmétique si constante) ou $u_{n+1}/u_n$ (géométrique si constant).
2. **Terme général** : $u_0 + nq$ ou $u_0 q^n$ ; sinon itérer la récurrence quelques termes.
3. **Somme** : vérifier le nombre de termes $N$ et la condition $q \neq 1$.
4. **Variation** : calculer $u_{n+1} - u_n$, factoriser, résoudre le signe en fonction de $n$.
5. **Convergence (géométrique)** : comparer $|q|$ à $1$ ; ne pas oublier le cas $q < 0$ (oscillations mais convergence si $|q| < 1$).
6. **Récurrence** : montrer monotonie + borne, conclure la convergence, puis passer à la limite dans la relation.

:::erreur Les erreurs qui coûtent des points
1. Confondre raison $q$ et terme général : $u_n = u_0 q^n$ (pas $u_0 + nq$).
2. Écrire la somme géométrique avec $q = 1$ (dénominateur nul).
3. Compter mal le nombre de termes ($u_0$ à $u_{99}$ = 100 termes).
4. Dire que $q = -0{,}5$ diverge : $|q| < 1$, elle converge vers $0$.
5. Passer à la limite dans une récurrence **sans** avoir prouvé la convergence : le théorème l'exige.
6. Conclure « croissante » avec le signe de $u_{n+1} - u_n$ dépendant de $n$ sans discuter.
:::

## Vocabulaire

- **Suite numérique** : application de $\mathbb{N}$ dans $\mathbb{R}$, notée $(u_n)$.
- **Terme général** : formule donnant $u_n$ pour tout $n$.
- **Relation de récurrence** : $u_0$ donné, $u_{n+1}$ en fonction de $u_n$.
- **Raison** d'une arithmétique ($q$) / d'une géométrique ($q$) : différence ou quotient constant.
- **Convergence** : la suite tend vers une limite finie quand $n \to +\infty$.
- **Divergence** : pas de limite finie (tend vers $\pm\infty$ ou oscille).
- **Croissante / décroissante** : $u_{n+1} \geq u_n$ / $u_{n+1} \leq u_n$ pour tout $n$.
- **Majorée / minorée** : bornée au-dessus / au-dessous par un réel.
