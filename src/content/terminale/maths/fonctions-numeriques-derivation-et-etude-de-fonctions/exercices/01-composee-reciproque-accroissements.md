---
titre: Dérivée d'une composée et accroissements finis
difficulte: 1
type: entrainement
indices:
  - Identifie la fonction intérieure u(x) avant de dériver.
  - Pour la réciproque, cherche d'abord a tel que f(a) = 3.
  - Pour borner ln(1,1), pose f(x) = ln x et encadre 1/x sur [1 ; 1,1].
---

## Énoncé

On considère les fonctions suivantes.

1. Soit $f(x) = \ln(1 + x^2)$. Calculer $f'(x)$ puis $f'(1)$.
2. Soit $g(x) = \sqrt{4x + 1}$. Calculer $g'(x)$ et déterminer l'équation de la tangente à la courbe de $g$ au point d'abscisse $2$.
3. Soit $h(x) = x^3 + 3x$. Montrer que $h$ est strictement croissante sur $\mathbb{R}$, puis calculer $(h^{-1})'(4)$.
4. En utilisant le théorème des accroissements finis, démontrer l'inégalité

$$
\frac{0{,}1}{1{,}1} \leq \ln 1{,}1 \leq 0{,}1 .
$$

## Solution

**1. Dérivée de $f$.**

$f$ est composée de $u(x) = 1 + x^2$ (intérieur) et de $v(t) = \ln t$ (extérieur). La règle de la chaîne donne :

$$
f'(x) = u'(x) \times \frac{1}{u(x)} = \frac{2x}{1 + x^2}.
$$

En $x = 1$ :

$$
f'(1) = \frac{2 \times 1}{1 + 1^2} = \frac{2}{2} = 1.
$$

**2. Tangente à $g$ en $x = 2$.**

$g$ est composée de $u(x) = 4x+1$ et $v(t) = \sqrt{t}$, donc :

$$
g'(x) = \frac{u'(x)}{2\sqrt{u(x)}} = \frac{4}{2\sqrt{4x+1}} = \frac{2}{\sqrt{4x+1}}.
$$

En $x = 2$ :

$$
g(2) = \sqrt{4 \times 2 + 1} = \sqrt{9} = 3, \qquad
g'(2) = \frac{2}{\sqrt{9}} = \frac{2}{3}.
$$

La tangente $T$ en $(2\,;\,3)$ a pour équation :

$$
y = g'(2)(x - 2) + g(2) = \frac{2}{3}(x - 2) + 3 = \frac{2}{3}x + \frac{5}{3}.
$$

**3. Réciproque de $h$.**

$h(x) = x^3 + 3x$ est dérivable sur $\mathbb{R}$ avec :

$$
h'(x) = 3x^2 + 3 \geq 3 > 0 \quad \text{pour tout } x \in \mathbb{R}.
$$

Donc $h$ est **strictement croissante** sur $\mathbb{R}$ : elle est bijective de $\mathbb{R}$ dans $\mathbb{R}$ et admet une réciproque.

On cherche $a$ tel que $h(a) = 4$ : $a = 1$ car $1^3 + 3 \times 1 = 4$. Donc $h^{-1}(4) = 1$ et $h'(1) = 3 + 3 = 6$.

Par le théorème de la réciproque :

$$
(h^{-1})'(4) = \frac{1}{h'(1)} = \frac{1}{6}.
$$

**4. Encadrement de $\ln 1{,}1$.**

Posons $\varphi(x) = \ln x$, continue et dérivable sur $]0\,;\,+\infty[$, avec $\varphi'(x) = \dfrac{1}{x}$.

On applique le théorème des accroissements finis sur $[1\,;\,1{,}1]$ : il existe $\xi \in \,]1\,;\,1{,}1[$ tel que

$$
\varphi(1{,}1) - \varphi(1) = \varphi'(\xi) \times 0{,}1, \qquad \text{c'est-à-dire} \qquad \ln 1{,}1 = \frac{0{,}1}{\xi}.
$$

Comme $1 < \xi < 1{,}1$, la fonction $x \mapsto \dfrac{1}{x}$ est décroissante :

$$
\frac{1}{1{,}1} < \frac{1}{\xi} < 1 .
$$

En multipliant par $0{,}1 > 0$ :

$$
\frac{0{,}1}{1{,}1} < \ln 1{,}1 < 0{,}1, \qquad \text{soit environ} \qquad 0{,}09 < \ln 1{,}1 < 0{,}1 .
$$

L'inégalité non stricte demandée est donc démontrée. Vérification : $\ln 1{,}1 \approx 0{,}0953$, bien entre $0{,}0909$ et $0{,}1$. ✓

:::remarque Bon réflexe
Encadrer $\dfrac{1}{\xi}$ exige de savoir **où** est $\xi$ : ici $]1\,;\,1{,}1[$. On utilise toujours la monotonie de $f'$ sur l'intervalle, jamais une valeur précise de $\xi$.
:::
