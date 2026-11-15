---
titre: Continuité, TVI et prolongement
difficulte: 1
type: entrainement
indices:
  - Pour la continuité en 0, calcule la limite de g en 0 avec la limite remarquable (e^x - 1)/x.
  - Pour l'existence de solution, construis une fonction continue sur [0 ; 1] et calcule ses valeurs aux bornes.
  - Pour le prolongement, élimine d'abord le facteur qui s'annule.
---

## Énoncé

On considère la fonction $g$ définie par :

$$
g(x) =
\begin{cases}
\dfrac{e^x - 1}{x} & \text{si } x \neq 0 \\[6pt]
k & \text{si } x = 0
\end{cases}
$$

1. Calculer $\lim\limits_{x \to 0} g(x)$ et déterminer la valeur de $k$ pour que $g$ soit continue en $0$.

2. Montrer que l'équation $x^3 + x - 1 = 0$ admet au moins une solution dans $[0\,;\,1]$.

3. Soit $h(x) = \ln(1 + x) - x$ sur $[0\,;\,1]$.
   - Calculer $h'(x)$ et déterminer le sens de variation de $h$.
   - En déduire le nombre de solutions de l'équation $\ln(1+x) = x$ dans $[0\,;\,1]$.

4. Soit $u(x) = \dfrac{x^2 - 1}{x - 1}$ pour $x \neq 1$. Donner un prolongement de $u$ par continuité en $1$.

## Solution

**1. Continuité de $g$ en $0$.**

Pour $x \neq 0$, $g(x) = \dfrac{e^x - 1}{x}$. C'est une forme $\dfrac{0}{0}$ en $0$ ; on utilise la limite remarquable :

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = 1.
$$

Donc $\lim\limits_{x \to 0} g(x) = 1$, et $g$ est continue en $0$ si et seulement si $g(0) = k = 1$ :

$$
\boxed{k = 1}.
$$

**2. Existence d'une solution dans $[0\,;\,1]$.**

Posons $f(x) = x^3 + x - 1$ : $f$ est un polynôme, donc **continue sur $\mathbb{R}$**, en particulier sur $[0\,;\,1]$.

$$
f(0) = 0 + 0 - 1 = -1 < 0, \qquad
f(1) = 1 + 1 - 1 = 1 > 0.
$$

$f(0)$ et $f(1)$ ont des **signes contraires** et $f$ est continue sur $[0\,;\,1]$ : par le **théorème des valeurs intermédiaires**, il existe $c \in \,]0\,;\,1[$ tel que $f(c) = 0$, c'est-à-dire

$$
c^3 + c - 1 = 0.
$$

(Unicité : $f'(x) = 3x^2 + 1 > 0$ donc $f$ est strictement croissante — la solution est unique.)

**3. Étude de $h(x) = \ln(1+x) - x$.**

- **Dérivée :** $h$ est dérivable sur $]-1\,;\,+\infty[$ avec

$$
h'(x) = \frac{1}{1 + x} - 1 = \frac{1 - (1 + x)}{1 + x} = \frac{-x}{1 + x}.
$$

- **Signe sur $[0\,;\,1]$ :** pour $x \in [0\,;\,1]$, $1 + x > 0$ et $-x \leq 0$, donc $h'(x) \leq 0$ avec égalité seulement en $x = 0$. La fonction $h$ est donc **strictement décroissante** sur $[0\,;\,1]$.

- **Nombre de solutions :** $h(0) = \ln 1 - 0 = 0$ : $x = 0$ est une solution. Comme $h$ est strictement décroissante, elle s'annule **au plus une fois** : l'équation $\ln(1+x) = x$ admet **exactement une** solution dans $[0\,;\,1]$, à savoir $x = 0$.

**4. Prolongement de $u$.**

Pour $x \neq 1$ :

$$
u(x) = \frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1.
$$

Donc

$$
\lim_{x \to 1} u(x) = 1 + 1 = 2.
$$

Le prolongement par continuité en $1$ consiste à poser $u(1) = 2$ :

$$
\bar{u}(x) = x + 1 \quad \text{pour tout } x \in \mathbb{R}.
$$

:::remarque Réflexe
Trois gestes qui reviennent : calculer une **limite** pour la continuité, citer le **TVI** (avec continuité + signes contraires) pour l'existence, et **dériver** pour le nombre de solutions.
:::
