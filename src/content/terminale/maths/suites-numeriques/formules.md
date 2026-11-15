## Suites arithmétiques

:::formule Définition et terme général
$$
u_{n+1} = u_n + q \quad (\text{raison } q \text{ constante})
$$

$$
\boxed{\;u_n = u_0 + n\,q = u_p + (n-p)\,q\;}
$$
:::

:::formule Somme
De $u_0$ à $u_{N-1}$ ($N$ termes) :

$$
\boxed{\;S = \frac{N\,(u_0 + u_{N-1})}{2} = N \times u_{\text{milieu}}\;}
$$

Nombre de termes de $u_p$ à $u_r$ : $r - p + 1$.
:::

:::remarque Comment la reconnaître
$u_{n+1} - u_n = q$ **ne dépend pas de $n$**. Exemple : $u_{n+1} = u_n + 3$ avec $u_0 = 2$ donne $u_n = 2 + 3n$.
:::

## Suites géométriques

:::formule Définition et terme général
$$
u_{n+1} = q\,u_n \quad (\text{raison } q \text{ constante})
$$

$$
\boxed{\;u_n = u_0 \times q^n = u_p \times q^{\,n-p}\;}
$$
:::

:::formule Somme
Pour $q \neq 1$ :

$$
\boxed{\;S = u_0 + u_1 + \dots + u_{N-1} = u_0 \times \frac{1 - q^N}{1 - q} = u_0 \times \frac{q^N - 1}{q - 1}\;}
$$

Pour $q = 1$ : $S = N \times u_0$.
:::

:::formule Somme infinie (quand $|q| < 1$)
$$
S_{\infty} = u_0 + u_1 + u_2 + \dots = \frac{u_0}{1 - q} \qquad (|q| < 1)
$$
:::

:::remarque Comment la reconnaître
$\dfrac{u_{n+1}}{u_n} = q$ **ne dépend pas de $n$** (et $u_n \neq 0$). Exemple : $u_{n+1} = \dfrac{1}{2}u_n$ avec $u_0 = 5$ donne $u_n = 5 \times \left(\dfrac{1}{2}\right)^n$.
:::

## Convergence

:::formule Théorème des géométriques
| Raison $q$ | Comportement de $(u_n)$ |
| --- | --- |
| $\|q\| < 1$ | converge : $u_n \to 0$ |
| $q = -1$ | oscille entre $u_0$ et $-u_0$ : divergente |
| $q = 1$ | constante : converge vers $u_0$ |
| $\|q\| > 1$ | diverge (sauf $u_0 = 0$ : suite nulle) |
:::

:::remarque Cas $q$ négatif
Si $-1 < q < 0$ : la suite **oscille** (signes alternés) tout en tendant vers $0$. Osciller ne veut pas dire diverger.
:::

:::formule Limites utiles
$$
|q| < 1 \Rightarrow q^n \to 0, \qquad
u_n = u_0 q^n \to 0
$$

$$
q > 1 \Rightarrow q^n \to +\infty, \qquad
-1 < q < 0 \Rightarrow q^n \to 0 \text{ (en oscillant)}
$$
:::

## Sens de variation

:::formule Critère de la différence
$$
\forall n,\; u_{n+1} - u_n \geq 0 \Rightarrow (u_n) \text{ croissante}
$$

$$
\forall n,\; u_{n+1} - u_n \leq 0 \Rightarrow (u_n) \text{ décroissante}
$$

Si le signe dépend de $n$ : préciser « croissante à partir du rang $n_0$ » avec $n_0$ calculé.
:::

:::formule Critère du quotient (termes positifs)
Si $u_n > 0$ pour tout $n$ :

$$
\frac{u_{n+1}}{u_n} \geq 1 \Rightarrow \text{croissante}, \qquad
\frac{u_{n+1}}{u_n} \leq 1 \Rightarrow \text{décroissante}
$$
:::

:::formule Méthode
1. Calculer $u_{n+1} - u_n$ (en utilisant la récurrence ou le terme général).
2. **Factoriser** l'expression.
3. Résoudre le signe en fonction de $n$.
4. Conclure sur tout $\mathbb{N}$ (ou à partir d'un rang).
:::

:::exemple Type bac
$$
u_n = \frac{n}{n+1} : \quad u_{n+1} - u_n = \frac{1}{(n+1)(n+2)} > 0 \;\forall n \Rightarrow \text{strictement croissante}
$$
:::

## Suites récurrentes

:::formule Convergence monotone
- croissante **et** majorée $\Rightarrow$ converge ;
- décroissante **et** minorée $\Rightarrow$ converge.

Démonstration type : montrer $u_{n+1} - u_n$ de signe connu, puis $u_n \leq L$ (ou $\geq m$) par récurrence.
:::

:::formule Passage à la limite
Si $(u_n)$ converge vers $\ell$ et $u_{n+1} = f(u_n)$ avec $f$ continue :

$$
\ell = f(\ell)
$$

Résoudre cette équation donne la/les limite(s) candidate(s), ensuite justifiée(s) par la convergence.
:::

:::remarque Équations du point fixe
Exemple : $u_{n+1} = \dfrac{u_n + 2}{2} \Rightarrow \ell = \dfrac{\ell + 2}{2} \Rightarrow \ell = 2$.

La vérification « $u_n < 2$ » sert à la fois à la **majoration** et à la **croissance** ($u_{n+1} - u_n = (2-u_n)/2 > 0$).
:::

## À mémoriser absolument

- Arithmétique : $u_n = u_0 + nq$ ; $S = \dfrac{N(u_0 + u_{N-1})}{2}$.
- Géométrique : $u_n = u_0 q^n$ ; $S = u_0\dfrac{1-q^N}{1-q}$ ($q \neq 1$).
- $|q| < 1 \Rightarrow u_n \to 0$ ; $|q| > 1 \Rightarrow$ divergence ; $q = -1 \Rightarrow$ oscillation.
- Variation : signe de $u_{n+1} - u_n$ (factorisé) ou quotient si termes positifs.
- Monotonie + borne $\Rightarrow$ convergence ; puis $\ell = f(\ell)$.
- Nombre de termes $= r - p + 1$.
