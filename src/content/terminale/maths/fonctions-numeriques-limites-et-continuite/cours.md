---
titre: "Fonctions numériques : limites et continuité"
accroche: Courbes asymptotes · Limite d’une fonction composée · Théorème des valeurs intermédiaires
series: S1, S3
ordre: 20
duree: 45
demo: false
statut: publie
objectifs:
  - Courbes asymptotes
  - Limite d’une fonction composée
  - Théorème des valeurs intermédiaires
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Les limites et la continuité sont le socle de toute question d'étude de fonction : elles permettent de justifier les asymptotes, de résoudre les formes indéterminées, de conclure à l'existence d'une solution d'une équation grâce au théorème des valeurs intermédiaires et de construire le prolongement d'une fonction. Une question sur deux d'énoncé long en contient un morceau.
:::

## Rappels sur la limite d'une fonction

:::definition Limite en un point
On dit que $f$ admet la limite $\ell$ en $a$, et on écrit $\lim\limits_{x \to a} f(x) = \ell$, lorsque la valeur de $f(x)$ se rapproche indéfiniment de $\ell$ quand $x$ se rapproche de $a$ (sans prendre la valeur $a$).
:::

:::formule Propriétés algébriques
Si $\lim\limits_{x \to a} f(x) = \ell$ et $\lim\limits_{x \to a} g(x) = m$ (limites finies), alors :

- $\lim\limits_{x \to a} \big(f \pm g\big)(x) = \ell \pm m$ ;
- $\lim\limits_{x \to a} \big(f \times g\big)(x) = \ell \times m$ ;
- $\lim\limits_{x \to a} \left(\dfrac{f}{g}\right)(x) = \dfrac{\ell}{m}$ si $m \neq 0$ ;
- $\lim\limits_{x \to a} \big(f^n\big)(x) = \ell^n$.
:::

:::remarque Limites à l'infini
Les mêmes propriétés valent quand $x \to +\infty$ ou $x \to -\infty$. Pour un quotient de polynômes, on compare les **degrés** :

$$
\lim_{x \to +\infty} \frac{a_n x^n + \dots}{b_p x^p + \dots} =
\begin{cases}
0 & \text{si } n < p \\
\dfrac{a_n}{b_p} & \text{si } n = p \\
\pm \infty & \text{si } n > p
\end{cases}
$$
:::

## Résoudre une forme indéterminée

:::definition Forme indéterminée
Une expression qui, telle quelle, ne permet pas de conclure : $\dfrac{0}{0}$, $\infty - \infty$, $0 \times \infty$. Le cas central au BAC est $\dfrac{0}{0}$ quand $x \to a$.
:::

:::methode Méthode face à $\dfrac{0}{0}$
1. Vérifier que le numérateur et le dénominateur s'annulent bien en $a$.
2. **Factoriser** le numérateur et le dénominateur par le facteur qui s'annule (ou **multiplier par le conjugué** s'il y a une racine).
3. Simplifier par ce facteur (qui n'est pas nul puisque $x \neq a$).
4. Calculer la limite de l'expression simplifiée.
:::

:::exemple Limite par factorisation
$$
\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} \frac{(x-3)(x+3)}{x-3} = \lim_{x \to 3} (x+3) = 6.
$$

Pour $x \neq 3$, le facteur $x-3$ se simplifie : c'est le point essentiel, $x$ n'atteint jamais $3$ dans la limite.
:::

:::exemple Limite par conjugué
$$
\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \lim_{x \to 0} \frac{(x+4)-4}{x\big(\sqrt{x+4}+2\big)} = \lim_{x \to 0} \frac{x}{x\big(\sqrt{x+4}+2\big)} = \frac{1}{4}.
$$
:::

:::erreur Les erreurs qui coûtent des points
1. Calculer directement en remplaçant $x$ par $a$ dans une forme $\dfrac{0}{0}$ et écrire « $= 0$ » ou « $= 1$ » sans factoriser.
2. Simplifier par $x-3$ sans préciser que $x \neq 3$ (la limite ne concerne jamais la valeur en $a$).
3. Oublier de **développer** ou de **factoriser** avant de conclure : l'algèbre passe toujours avant la limite.
:::

## Courbes asymptotes

:::definition Asymptote verticale
La droite $x = a$ est asymptote verticale de $\mathcal{C}_f$ si

$$
\lim_{x \to a^-} f(x) = \pm\infty \quad \text{ou} \quad \lim_{x \to a^+} f(x) = \pm\infty .
$$

En pratique : $a$ est une valeur d'exclusion du domaine où $f$ diverge (dénominateur qui s'annule).
:::

:::definition Asymptote horizontale
La droite $y = \ell$ est asymptote horizontale si $\lim\limits_{x \to +\infty} f(x) = \ell$ ou $\lim\limits_{x \to -\infty} f(x) = \ell$ (avec $\ell$ fini).
:::

:::definition Asymptote oblique
Si

$$
\lim_{x \to +\infty} \frac{f(x)}{x} = m \neq 0 \qquad \text{et} \qquad \lim_{x \to +\infty} \big(f(x) - m x\big) = b,
$$

alors la droite $y = m x + b$ est asymptote oblique de $\mathcal{C}_f$ en $+\infty$.
:::

:::methode Rechercher toutes les asymptotes de $f(x) = \dfrac{2x^2+1}{x-1}$
1. **Verticales** : le dénominateur s'annule en $x=1$ ; $f(x) \to \pm\infty$ quand $x \to 1$, donc $x=1$ est asymptote verticale.
2. **À $+\infty$** : $\dfrac{f(x)}{x} \to 2 \neq 0$ et $f(x) - 2x = \dfrac{2x^2+1-2x(x-1)}{x-1} = \dfrac{2x+1}{x-1} \to 2$, donc $y = 2x+2$ est asymptote oblique.
3. **À $-\infty$** : même calcul, $y = 2x+2$.
:::

:::piege Confondre asymptote et limite finie
Si $\lim\limits_{x \to +\infty} f(x) = 5$, l'asymptote est la droite **horizontale** $y = 5$, jamais « $x = 5$ ». L'asymptote verticale s'écrit toujours $x = a$.
:::

## Limite d'une fonction composée

:::formule Théorème d'acheminement
Soit $f$ une fonction telle que $\lim\limits_{x \to a} f(x) = L$, et $g$ une fonction **continue en $L$**. Alors :

$$
\lim_{x \to a} g\big(f(x)\big) = g\Big(\lim_{x \to a} f(x)\Big) = g(L).
$$
:::

:::remarque Cas des limites à l'infini
Si $\lim\limits_{x \to a} f(x) = +\infty$ et que $g$ est définie sur un voisinage de $+\infty$, on regarde le comportement de $g$ en $+\infty$ :

$$
\lim_{x \to 0^+} \frac{1}{\sqrt{x}} = +\infty, \qquad
\lim_{x \to +\infty} e^{-x} = 0.
$$
:::

:::exemple Appliquer le théorème
Calculer $\lim\limits_{x \to 0} \ln(1+x^2)$.

La fonction $u \mapsto \ln u$ est continue en $1$ et $\lim\limits_{x \to 0} (1+x^2) = 1$. Donc

$$
\lim_{x \to 0} \ln(1+x^2) = \ln(1) = 0.
$$

Calculer $\lim\limits_{x \to +\infty} \dfrac{e^x}{x}$ : $e^x \to +\infty$ et $x \to +\infty$ ; on ne peut pas conclure avec le quotient (forme $\dfrac{\infty}{\infty}$) : ici $e^x$ croît bien plus vite que $x$, la limite vaut $+\infty$ (croissance comparée, chapitre suivant).
:::

:::erreur Composée mal maîtrisée
$\lim\limits_{x \to 0} \sin\!\left(\dfrac{1}{x}\right)$ **n'existe pas** : $\dfrac{1}{x}$ oscille sans fin entre $-\infty$ et $+\infty$, la composée oscille entre $-1$ et $1$. Le théorème d'acheminement exige une limite $L$ **finie** et une fonction $g$ continue en $L$.
:::

## Continuité

:::definition Continuité en un point
$f$ est **continue en $a$** si $a$ appartient au domaine de $f$ et :

$$
\lim_{x \to a} f(x) = f(a).
$$

Autrement dit : calculer la limite revient à calculer la valeur.
:::

:::formule Continuité sur un intervalle
$f$ est continue sur $I$ si elle est continue en tout point intérieur de $I$ et continue « aux bornes » du côté de $I$.

Les fonctions usuelles sont continues sur tout leur domaine : polynômes ($\mathbb{R}$), $\dfrac{1}{x}$ ($\mathbb{R}^*$), $\sqrt{x}$ ($[0\,;\,+\infty[$), $\ln x$ ($]0\,;\,+\infty[$), $\sin$, $\cos$, $e^x$ ($\mathbb{R}$).
:::

:::formule Opérations conservent la continuité
Si $f$ et $g$ sont continues en $a$, alors $f \pm g$, $f \times g$, $\dfrac{f}{g}$ (si $g(a) \neq 0$) et $g \circ f$ (si $f(a)$ est dans le domaine de $g$) sont continues en $a$.
:::

:::methode Prouver la continuité d'une fonction rationnelle
1. Déterminer le domaine $D$ (exclure les racines et les zéros du dénominateur).
2. Pour tout $a \in D$ : écrire $\lim\limits_{x \to a} f(x)$, remplacer $x$ par $a$ (licite car le dénominateur ne s'annule pas).
3. Conclure : la limite vaut $f(a)$, donc $f$ est continue en $a$, donc sur $D$.
:::

:::exemple Fonction morceau par morceau
$$
f(x) =
\begin{cases}
\dfrac{x^2-4}{x-2} & \text{si } x \neq 2 \\[4pt]
k & \text{si } x = 2
\end{cases}
$$

Pour $x \neq 2$, $f(x) = x+2$, donc $\lim\limits_{x \to 2} f(x) = 4$. La fonction est continue en $2$ si et seulement si $k = 4$.
:::

## Théorème des valeurs intermédiaires

:::formule TVI (théorème des valeurs intermédiaires)
Soit $f$ continue sur $[a\,;\,b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c \in [a\,;\,b]$ tel que :

$$
f(c) = k .
$$
:::

:::methode Démontrer l'existence d'une solution
1. Construire une fonction $f$ **continue** sur un intervalle $[a\,;\,b]$.
2. Calculer $f(a)$ et $f(b)$ et montrer qu'ils ont des **signes contraires** (équation $f(x)=0$) ou qu'un nombre donné est entre les deux.
3. Appliquer le TVI : il existe $c$ tel que $f(c) = 0$ (ou $f(c)=k$).
4. Si $f$ est **strictement monotone**, la solution est **unique**.
:::

:::exemple Existence et unicité
Montrer que l'équation $x^3 + x - 1 = 0$ admet une unique solution dans $[0\,;\,1]$.

Posons $f(x) = x^3 + x - 1$, polynôme donc continue sur $\mathbb{R}$.

- $f(0) = -1 < 0$ et $f(1) = 1 + 1 - 1 = 1 > 0$ : signes contraires, le TVI assure l'existence d'une solution $c \in [0\,;\,1]$.
- $f'(x) = 3x^2 + 1 > 0$ : $f$ est strictement croissante sur $\mathbb{R}$, donc la solution est **unique**.
:::

:::erreur Le TVI exige la continuité
Dire « $f(0) < 0 < f(1)$ donc il y a une solution » **sans** avoir vérifié la continuité est une faute. Exemple : la fonction qui vaut $-1$ en $0$, $1$ en $1$ et $0$ ailleurs n'est pas continue et peut « sauter » la valeur $0$ sans jamais l'atteindre.
:::

:::remarque Corollaire : existence d'un extremum
Si $f$ est continue sur $[a\,;\,b]$ (compact), elle y admet un **minimum** et un **maximum** : ils sont atteints. C'est le théorème de Weierstrass, souvent invoqué pour justifier l'existence d'un extremum dans un problème d'optimisation.
:::

## Ce qu'il faut retenir

- Une limite se calcule **après** une simplification algébrique : face à $\dfrac{0}{0}$, factoriser ou conjuguer.
- À $+\infty$, pour un quotient de polynômes, comparer les **degrés**.
- **Asymptotes** : verticale $x = a$ si $f \to \pm\infty$ ; horizontale $y = \ell$ si limite finie à l'infini ; oblique $y = mx+b$ si $\dfrac{f(x)}{x} \to m \neq 0$ et $f(x) - mx \to b$.
- **Composée** : si $f \to L$ et $g$ est continue en $L$, alors $g \circ f \to g(L)$.
- **Continuité** en $a$ : $\lim\limits_{x \to a} f(x) = f(a)$ ; les sommes, produits, quotients et composées de fonctions continues restent continues.
- **TVI** : $f$ continue sur $[a\,;\,b]$ et $k$ entre $f(a)$ et $f(b)$ $\Rightarrow$ $\exists\, c \in [a\,;\,b]$ tel que $f(c) = k$ ; la monotonie donne l'unicité.
