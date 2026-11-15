---
titre: Domaine, parité et asymptotes
difficulte: 1
type: entrainement
indices:
  - Liste d'abord tous les interdits (dénominateur nul, logarithme, racine) avant tout calcul.
  - Pour la parité, vérifie d'abord que le domaine est stable par opposé.
  - Pour les asymptotes verticales, calcule les limites à gauche et à droite des racines du dénominateur.
---

## Énoncé

On considère les fonctions suivantes :

$$
f(x) = \frac{1}{x(x-2)}, \qquad
g(x) = \frac{2x}{1+x^2}, \qquad
h(x) = \frac{x+1}{x-1}.
$$

1. Déterminer le domaine de définition de $f$.
2. Déterminer la parité de $g$, puis celle de $h$.
3. Déterminer les asymptotes verticales de la courbe de $f$.
4. Déterminer les asymptotes de la courbe de $h$ (verticales, horizontales ou obliques).
5. Dire si $f$ admet une asymptote horizontale en $+\infty$, en justifiant.

## Solution

**1. Domaine de $f$.**

$f$ est une fonction rationnelle : il faut que le dénominateur soit non nul.

$$
x(x-2) \neq 0 \iff x \neq 0 \;\text{ et }\; x \neq 2.
$$

$$
D_f = \mathbb{R} \setminus \{0\,;\,2\} = \;]-\infty\,;\,0[ \;\cup\; \,]0\,;\,2[ \;\cup\; \,]2\,;\,+\infty[.
$$

**2. Parité de $g$ et de $h$.**

*Fonction $g$ :* $D_g = \mathbb{R}$ car $1 + x^2 \geq 1 > 0$ pour tout réel $x$. Le domaine est symétrique par rapport à $0$. Pour tout $x$ :

$$
g(-x) = \frac{2(-x)}{1+(-x)^2} = \frac{-2x}{1+x^2} = -g(x).
$$

Donc $g$ est **impaire** : sa courbe est symétrique par rapport à l'origine.

*Fonction $h$ :* $D_h = \mathbb{R} \setminus \{1\}$. Le point $-1$ appartient au domaine, mais son opposé $1$ en est exclu : le domaine **n'est pas stable par l'opposé**. La condition préalable à la parité n'étant pas remplie, $h$ est **ni paire ni impaire**.

**3. Asymptotes verticales de $f$.**

Les candidats sont les racines du dénominateur : $x = 0$ et $x = 2$. Calculons les limites :

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{1}{x(x-2)} = \frac{1}{0^+ \times (-2)} = -\infty,
$$

car $x > 0$ petit donne $x(x-2) < 0$ et de valeur absolue petite. De même $\lim\limits_{x \to 0^-} f(x) = +\infty$.

La limite est infinie en $0$ (au moins d'un côté) : **$x = 0$ est asymptote verticale**.

En $2$ : pour $x \to 2^+$, $x(x-2) > 0$ et petit, donc $\lim\limits_{x \to 2^+} f(x) = +\infty$ ; pour $x \to 2^-$, $x(x-2) < 0$, donc $\lim\limits_{x \to 2^-} f(x) = -\infty$.

**$x = 2$ est asymptote verticale.**

**4. Asymptotes de $h$.**

*Verticale :* $D_h$ exclut $1$, et

$$
\lim_{x \to 1^+} \frac{x+1}{x-1} = \frac{2}{0^+} = +\infty, \qquad
\lim_{x \to 1^-} \frac{x+1}{x-1} = \frac{2}{0^-} = -\infty.
$$

Donc **$x = 1$ est asymptote verticale**.

*Horizontale ou oblique :* on divise numérateur et dénominateur par $x$ :

$$
h(x) = \frac{1 + \frac{1}{x}}{1 - \frac{1}{x}} \xrightarrow[x \to \pm\infty]{} \frac{1+0}{1-0} = 1.
$$

Donc $\lim\limits_{x \to +\infty} h(x) = \lim\limits_{x \to -\infty} h(x) = 1$ : **$y = 1$ est asymptote horizontale** des deux côtés. Il n'y a pas d'asymptote oblique (la limite en $\pm\infty$ est finie).

**5. Asymptotes horizontales de $f$.**

$$
f(x) = \frac{1}{x^2 - 2x}.
$$

Le numérateur est constant ($1$) et le dénominateur tend vers $+\infty$ quand $x \to \pm\infty$ :

$$
\lim_{x \to +\infty} f(x) = 0, \qquad \lim_{x \to -\infty} f(x) = 0.
$$

Donc oui : **$y = 0$ (l'axe des abscisses) est asymptote horizontale** de la courbe de $f$ en $+\infty$ (et aussi en $-\infty$).

:::remarque Méthode de contrôle
Pour chaque asymptote annoncée, la condition doit être **vérifiée par un calcul de limite** : c'est ce calcul qui est noté, pas la simple résolution « dénominateur $= 0$ ».
:::
