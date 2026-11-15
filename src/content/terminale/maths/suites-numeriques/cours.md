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

:::remarque À quoi ça sert au BAC ?
Les suites tombent presque à chaque session : reconnaître une suite arithmétique ou géométrique, calculer un terme, étudier le sens de variation (souvent avec $u_{n+1} - u_n$ ou le quotient $u_{n+1}/u_n$), et conclure sur la convergence d'une suite géométrique. Ce sont des points **mécaniques** à condition de maîtriser les trois formules : terme général, somme, limite.
:::

## Définitions

:::definition Suite numérique
Une **suite numérique** $(u_n)$ associe à chaque entier naturel $n$ un réel $u_n$. Elle est donnée par :

- son **terme général** $u_n = f(n)$ ; ou
- sa **relation de récurrence** : $u_0$ (ou $u_1$) est donné, puis $u_{n+1}$ s'exprime en fonction de $u_n$.
:::

:::methode Calculer un terme d'une suite récurrente
1. Calculer $u_1$ à partir de $u_0$.
2. Calculer $u_2$ à partir de $u_1$, puis $u_3$...
3. Pour un terme « loin », chercher un **terme général** (suite arithmétique ou géométrique) plutôt que de tout calculer.
:::

:::exemple Récurrence
$u_0 = 3$ et $u_{n+1} = 2u_n - 1$ :

$$
u_1 = 2 \times 3 - 1 = 5, \qquad u_2 = 2 \times 5 - 1 = 9, \qquad u_3 = 2 \times 9 - 1 = 17.
$$
:::

## Suites arithmétiques

:::formule Définition et terme général
$(u_n)$ est **arithmétique** de **raison** $q$ si

$$
u_{n+1} = u_n + q \quad \text{pour tout } n.
$$

Terme général :

$$
\boxed{\;u_n = u_0 + n\,q \;}
$$

ou $u_n = u_p + (n-p)\,q$ entre deux indices $p$ et $n$.
:::

:::formule Somme des $N$ premiers termes
$$
\boxed{\;S = u_0 + u_1 + \dots + u_{N-1} = \frac{N\,(u_0 + u_{N-1})}{2} = N \times \frac{u_0 + u_{N-1}}{2}\;}
$$

Le facteur $N$ est le **nombre de termes** (attention au nombre d'indices : de $0$ à $N-1$, il y a $N$ termes).
:::

:::methode Reconnaître une suite arithmétique
Calculer la **différence** $u_{n+1} - u_n$ : si elle ne dépend pas de $n$ (constante $q$), la suite est arithmétique de raison $q$.
:::

:::exemple Arithmétique
$(u_n)$ avec $u_0 = 2$ et $u_{n+1} = u_n + 3$ : arithmétique de raison $3$, donc $u_n = 2 + 3n$.

Somme des $100$ premiers termes : $S = \dfrac{100 \times (u_0 + u_{99})}{2} = \dfrac{100 \times (2 + 299)}{2} = 15\,050$.
:::

:::erreur Piège du nombre de termes
De $u_0$ à $u_{99}$ : il y a **100** termes. De $u_1$ à $u_{50}$ : **50** termes. Compter les termes : $n_{\text{fin}} - n_{\text{début}} + 1$.
:::

## Suites géométriques

:::formule Définition et terme général
$(u_n)$ est **géométrique** de **raison** $q$ si

$$
u_{n+1} = q \, u_n \quad \text{pour tout } n.
$$

Terme général :

$$
\boxed{\;u_n = u_0 \times q^n\;}
$$
:::

:::formule Somme des $N$ premiers termes
Pour $q \neq 1$ :

$$
\boxed{\;S = u_0 + u_1 + \dots + u_{N-1} = u_0 \times \frac{1 - q^N}{1 - q}\;}
$$

Pour $q = 1$ : tous les termes valent $u_0$, donc $S = N \times u_0$.
:::

:::methode Reconnaître une suite géométrique
Calculer le **quotient** $q_n = \dfrac{u_{n+1}}{u_n}$ (en supposant $u_n \neq 0$) : s'il ne dépend pas de $n$, la suite est géométrique de raison $q$.
:::

:::exemple Géométrique
$(u_n)$ avec $u_0 = 5$ et $u_{n+1} = \dfrac{1}{2}u_n$ : géométrique de raison $\dfrac{1}{2}$, donc $u_n = 5 \times \left(\dfrac{1}{2}\right)^n$.

Somme des $10$ premiers termes :

$$
S = 5 \times \frac{1 - \left(\frac{1}{2}\right)^{10}}{1 - \frac{1}{2}} = 10 \times \left(1 - \frac{1}{1024}\right) = \frac{5115}{512} \approx 9{,}99.
$$
:::

## Convergence des suites géométriques

:::formule Théorème de convergence
Soit $(u_n)$ géométrique de raison $q$ :

$$
\boxed{\;
\begin{cases}
|q| < 1 : & (u_n) \text{ converge, et } \lim\limits_{n \to +\infty} u_n = 0\\[4pt]
|q| > 1 : & (u_n) \text{ diverge}\\[4pt]
q = 1 : & u_n = u_0 \text{ constante (convergence vers } u_0)\\[4pt]
q = -1 : & (u_n) \text{ oscillante, divergente}
\end{cases}\;}
$$

Plus précisément, si $|q| < 1$ et $u_0 \neq 0$, alors $u_n \to 0$ ; si $-1 < q < 0$, la suite **oscille** en tendant vers $0$ (signes alternés).
:::

:::methode Étudier la convergence d'une suite géométrique
1. Vérifier que la suite est bien géométrique (calculer $q = u_{n+1}/u_n$).
2. Comparer $|q|$ à $1$.
3. Conclure : convergence (vers $0$ si $|q|<1$) ou divergence.
:::

:::erreur Erreurs fréquentes
1. Dire que $q = -\dfrac{1}{2}$ implique la divergence : **faux**, $|q| = \dfrac{1}{2} < 1$ : elle converge vers $0$ (en oscillant).
2. Confondre raison et terme général : $q$ est le **rapport**, $u_0$ la première valeur.
3. Appliquer la formule de somme avec $q = 1$ : dénominateur nul ! Dans ce cas $S = N \times u_0$.
:::

## Sens de variation

:::formule Critère par différence
Pour une suite $(u_n)$ définie sur $\mathbb{N}$ :

$$
u_{n+1} - u_n \geq 0 \;\;\text{pour tout } n \;\Longrightarrow\; (u_n) \text{ est croissante}
$$

$$
u_{n+1} - u_n \leq 0 \;\;\text{pour tout } n \;\Longrightarrow\; (u_n) \text{ est décroissante}
$$

Si le signe de $u_{n+1} - u_n$ **dépend de $n$**, on détermine les valeurs de $n$ pour lesquelles il est positif ou négatif.
:::

:::formule Critère par quotient (suites positives)
Si $u_n > 0$ pour tout $n$ :

$$
\frac{u_{n+1}}{u_n} \geq 1 \;\Longrightarrow\; (u_n) \text{ croissante}, \qquad
\frac{u_{n+1}}{u_n} \leq 1 \;\Longrightarrow\; (u_n) \text{ décroissante}
$$
:::

:::methode Étudier le sens de variation
1. Calculer $u_{n+1} - u_n$ (ou $u_{n+1}/u_n$ si tous les termes sont positifs).
2. Factoriser l'expression (produit ou quotient de facteurs).
3. Résoudre « signe $> 0$ » et « signe $< 0$ » en fonction de $n$.
4. Conclure : croissante sur $\mathbb{N}$, décroissante, ou « croissante à partir d'un rang $n_0$ ».
:::

:::exemple Étude complète
$u_n = \dfrac{n}{n+1}$ (pour $n \geq 0$, $u_n \neq 1$) :

$$
u_{n+1} - u_n = \frac{n+1}{n+2} - \frac{n}{n+1} = \frac{(n+1)^2 - n(n+2)}{(n+1)(n+2)} = \frac{1}{(n+1)(n+2)} > 0
$$

pour tout $n$ : la suite est **strictement croissante**.

Autre méthode (quotient) : $\dfrac{u_{n+1}}{u_n} = \dfrac{n+1}{n+2} \times \dfrac{n+1}{n} = \dfrac{(n+1)^2}{n(n+2)} = \dfrac{n^2+2n+1}{n^2+2n} > 1$ : croissante. ✓
:::

:::formule Comparaison de suites (utile)
Pour tout $n$ :

$$
\frac{1}{n+1} < \ln\left(\frac{n+1}{n}\right) < \frac{1}{n} \quad (\text{si vu en Terminale})
$$

Et surtout : toute suite **croissante et majorée** converge ; toute suite **décroissante et minorée** converge (théorème de la convergence monotone).
:::

## Application : suites définies par récurrence

:::methode Convergence par encadrement
1. **Montrer** que la suite est croissante (ou décroissante) : calcul de $u_{n+1} - u_n$ **avec** la récurrence.
2. **Montrer** qu'elle est majorée (ou minorée) : souvent « $u_n < L$ » pour une valeur $L$ à deviner (point fixe : $u = f(u)$).
3. **Conclure** : suite monotone majorée → converge ; puis calculer la limite $L$ en passant à la limite dans la récurrence.
:::

:::exemple Passage à la limite
$u_0 = 1$ et $u_{n+1} = \dfrac{u_n + 2}{2}$. Supposons $(u_n)$ croissante et majorée par $L$ : si $u_n \to \ell$, alors $\ell = \dfrac{\ell + 2}{2}$, soit $2\ell = \ell + 2$ donc $\ell = 2$.

Vérifications : $u_n < 2 \Rightarrow u_{n+1} = \dfrac{u_n + 2}{2} < \dfrac{2+2}{2} = 2$ (majoration conservée) ; $u_{n+1} - u_n = \dfrac{2 - u_n}{2} > 0$ si $u_n < 2$ (croissance). La suite converge donc vers $2$.
:::

## Ce qu'il faut retenir

- **Arithmétique** : $u_{n+1} = u_n + q$ ; $u_n = u_0 + nq$ ; somme $= \dfrac{N(u_0 + u_{N-1})}{2}$.
- **Géométrique** : $u_{n+1} = q\,u_n$ ; $u_n = u_0\,q^n$ ; somme $= u_0\dfrac{1 - q^N}{1 - q}$ ($q \neq 1$).
- **Convergence géométrique** : $|q| < 1 \Rightarrow u_n \to 0$ ; $|q| > 1$ (ou $q = -1$) $\Rightarrow$ divergence.
- **Variation** : étudier le signe de $u_{n+1} - u_n$ (ou $u_{n+1}/u_n$ pour des termes positifs), en factorisant.
- **Monotonie + borne** : croissante et majorée $\Rightarrow$ converge (utile pour les récurrences).
- Attention au **nombre de termes** dans les sommes et à la condition $q \neq 1$.
