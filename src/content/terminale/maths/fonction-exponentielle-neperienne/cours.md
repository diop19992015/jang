---
titre: Fonction exponentielle népérienne
accroche: Programme officiel — Analyse.
series: S1, S3
ordre: 23
duree: 45
demo: false
statut: publie
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
L'exponentielle $e^x$ est la fonction qui revient dans **toutes** les études de fonction (signe de dérivées comme $(x-1)e^x$), les équations du second degré exponentielles, les lois de décroissance radioactive ou de désintérêt composé, et les limites (croissance comparée). Savoir la dériver, la comparer aux puissances et résoudre $e^u = k$ fait gagner des points immédiats.
:::

## Définition et propriétés algébriques

:::definition Nombre $e$ et fonction exponentielle
Le nombre $e$ (constante de Néper) est défini par

$$
e = \lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n \approx 2{,}71828.
$$

La fonction **exponentielle** est la fonction définie sur $\mathbb{R}$ par $x \mapsto e^x$.
:::

:::formule Propriétés algébriques
Pour tous réels $x$ et $y$ :

$$
e^x \times e^y = e^{x+y}, \qquad
\frac{e^x}{e^y} = e^{x-y}, \qquad
\big(e^x\big)^y = e^{xy}, \qquad
e^{-x} = \frac{1}{e^x}
$$

Cas particuliers : $e^0 = 1$, $e^1 = e$, $\dfrac{1}{e^x} = e^{-x}$.
:::

:::erreur Attention
$\big(e^x\big)^y = e^{xy}$ (on **multiplie** les exposants), tandis que $e^x \times e^y = e^{x+y}$ (on **additionne**). Confondre addition et multiplication d'exposants est l'erreur la plus fréquente.
:::

:::exemple Calculs classiques
- $e^2 \times e^{-5} = e^{2-5} = e^{-3} = \dfrac{1}{e^3}$.
- $\dfrac{e^4}{e} = e^{4-1} = e^3$.
- $\big(e^{-2}\big)^3 = e^{-6}$.
:::

## Courbe et propriétés de variation

:::formule Propriétés fondamentales
- $e^x > 0$ pour **tout** réel $x$ (la courbe est toujours au-dessus de l'axe des abscisses).
- $e^0 = 1$ : la courbe passe par $(0\,;\,1)$.
- $x \mapsto e^x$ est **strictement croissante** sur $\mathbb{R}$ : si $x < y$ alors $e^x < e^y$.
- Symétrie : le point symétrique de $(x\,;\,e^x)$ par rapport à l'axe des ordonnées est $(-x\,;\,e^{-x}) = \left(-x\,;\,\dfrac{1}{e^x}\right)$.
:::

:::formule Limites
$$
\lim_{x \to -\infty} e^x = 0, \qquad
\lim_{x \to +\infty} e^x = +\infty, \qquad
\lim_{x \to 0} e^x = 1 .
$$

La droite $y = 0$ (axe des abscisses) est **asymptote** de la courbe à $-\infty$ : l'exponentielle s'en approche sans jamais la toucher.
:::

:::remarque $e^x$ toujours positif
Comme $e^x > 0$ partout, la fonction $x \mapsto e^x$ ne s'annule **jamais** : dans un tableau de signes, la ligne de $e^x$ est toujours $+$. C'est un atout pour factoriser des dérivées.
:::

## Dérivée et tangente

:::formule Dérivée
$$
\big(e^x\big)' = e^x
$$

L'exponentielle est **sa propre dérivée** : c'est la seule (à une constante près) qui a cette propriété.

Composée : $\big(e^{u(x)}\big)' = u'(x)\, e^{u(x)}$.
:::

:::exemple Tangente et normale
Pour $f(x) = e^x$ en $x = 0$ : $f(0) = 1$ et $f'(0) = 1$, donc la tangente est $y = x + 1$.

Pour $g(x) = e^{2x}$ : $g'(x) = 2e^{2x}$, donc en $x = 0$, $g'(0) = 2$ : tangente $y = 2x + 1$.
:::

:::remarque Convexité
$f''(x) = e^x > 0$ : la fonction exponentielle est **convexe** sur $\mathbb{R}$. Sa courbe est toujours « au-dessus » de ses tangentes :

$$
e^x \geq 1 + x \quad \text{pour tout } x \in \mathbb{R}
$$

(avec égalité seulement en $x = 0$). Cette inégalité est très utile pour des comparaisons.
:::

## Équations et inéquations avec l'exponentielle

:::methode Résoudre $e^{u(x)} = k$
1. Si $k \leq 0$ : **aucune solution** (car $e^{u} > 0$ toujours).
2. Si $k > 0$ : poser $u(x) = \ln k$ (car l'exponentielle est strictement croissante, elle est injective).
3. Résoudre l'équation $u(x) = \ln k$.
:::

:::methode Résoudre une inéquation $e^{u(x)} < e^{v(x)}$
Comme $x \mapsto e^x$ est strictement croissante :

$$
e^{u} < e^{v} \iff u < v, \qquad
e^{u} \geq e^{v} \iff u \geq v .
$$

On se ramène donc à une inéquation **algébrique** classique.
:::

:::exemple Résolutions complètes
- $e^{3x-1} = e^2 \iff 3x - 1 = 2 \iff x = 1$.
- $e^{x^2 - 4} = 1 \iff x^2 - 4 = 0$ (car $1 = e^0$) $\iff x = \pm 2$.
- $e^{-x} < e^3 \iff -x < 3 \iff x > -3$.
- $e^{2x} \geq e \iff 2x \geq 1 \iff x \geq \dfrac{1}{2}$.
:::

:::erreur Résoudre « à la calculatrice »
Écrire $x = \dfrac{\ln e^2}{3}$ au lieu de comparer les exposants rallonge et fausse souvent le calcul. L'exponentielle étant strictement monotone, on **égale les exposants** directement.
:::

## Étude de fonctions avec l'exponentielle

:::methode Méthode pour $f(x) = P(x)\, e^x$ ou $\dfrac{P(x)}{e^x}$
1. Domaine : $\mathbb{R}$ (sauf restrictions du sujet).
2. Dérivée : utiliser le produit ($u = P$, $v = e^x$) ou la composée, puis **factoriser** par $e^x$ (qui est toujours positif : il n'influence pas le signe).
3. Signe de la dérivée : ne garder que le signe du facteur polynôme.
4. Limites à $\pm\infty$ (rappel : $x^n e^x \to 0$ quand $x \to -\infty$, pour tout $n$).
5. Tableau de variations et conclusion.
:::

:::exemple Étude de $f(x) = (x - 2)\, e^x$ sur $\mathbb{R}$
**Dérivée** :

$$
f'(x) = 1 \cdot e^x + (x-2)\, e^x = e^x (1 + x - 2) = e^x (x - 1).
$$

Comme $e^x > 0$ partout, le signe de $f'$ est celui de $x - 1$ :

| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $0^-$ | $\searrow$ | $-e$ | $\nearrow$ | $+\infty$ |

**Limites** : $\lim\limits_{x \to -\infty} (x-2)e^x = 0$ (l'exponentielle tend vers $0$ plus vite que $x-2$ ne diverge) : asymptote horizontale $y = 0$ à $-\infty$ ; $\lim\limits_{x \to +\infty} f(x) = +\infty$.

**Conclusion** : minimum global en $x = 1$, valeur $f(1) = -e \approx -2{,}72$. Comme $f$ tend vers $0$ à $-\infty$ et vers $+\infty$ à $+\infty$, l'équation $f(x) = 0$ a pour unique solution $x = 2$.
:::

:::piege Le facteur $e^x$ ne change jamais de signe
Dans $f'(x) = e^x(x-1)$, certains annulent $e^x$ dans le tableau de signes : c'est **interdit**, $e^x$ n'est jamais nul. On étudie le signe du seul facteur $(x-1)$ et on le note dans la ligne de $f'$.
:::

## Ce qu'il faut retenir

- $e^x > 0$ toujours, strictement croissante, $e^0 = 1$, asymptote $y = 0$ à $-\infty$.
- Limites : $e^x \to 0$ en $-\infty$, $e^x \to +\infty$ en $+\infty$.
- $\big(e^x\big)' = e^x$ et $\big(e^{u}\big)' = u' e^{u}$ : on factorise toujours par $e^x$ dans les dérivées.
- Résolution : $e^{u} = e^{v} \iff u = v$ ; $e^{u} = k > 0 \iff u = \ln k$ ; $k \leq 0$ : aucune solution.
- Convexité : $e^x \geq 1 + x$.
- Étude de $(x-a)e^x$ : dérivée factorisée, signe donné par le seul facteur polynôme, limite en $-\infty$ égale à $0$.
