---
titre: Calculs de limites et continuité en un point
difficulte: 1
type: entrainement
indices:
  - Essaie d'abord la substitution : si tu obtiens 0/0, ne conclus rien et factorise.
  - Pour une limite en +∞, divise tous les termes par la plus haute puissance de x.
  - Pour la continuité, compares la limite calculée et la valeur f(a) : les deux sont nécessaires.
---

## Énoncé

On considère les fonctions suivantes :

$$
f(x) = \frac{x^2 - 4}{x - 2} \;\;(x \neq 2), \qquad
g(x) = \frac{3x^2 + 2x}{x^2 - 1}, \qquad
h(x) = \frac{|x|}{x} \;\;(x \neq 0).
$$

1. Calculer $\lim\limits_{x \to 2} f(x)$.
2. Calculer $\lim\limits_{x \to +\infty} g(x)$.
3. Calculer $\lim\limits_{x \to 0^-} h(x)$ et $\lim\limits_{x \to 0^+} h(x)$, puis en déduire l'existence (ou non) de $\lim\limits_{x \to 0} h(x)$.
4. On prolonge $f$ par $f(2) = 1$. Cette fonction est-elle continue en $2$ ? Justifier.
5. On prolonge $f$ par $f(2) = 4$. Que devient la réponse à la question 4 ?

## Solution

**1. Limite de $f$ en $2$.**

Pour $x = 2$, on obtient la forme $\dfrac{0}{0}$ : la substitution est interdite. On factorise le numérateur (différence de carrés) :

$$
f(x) = \frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2}.
$$

Comme $x \neq 2$ quand $x$ tend vers $2$, on simplifie :

$$
\lim_{x \to 2} f(x) = \lim_{x \to 2} (x + 2) = 4.
$$

**2. Limite de $g$ en $+\infty$.**

La forme est $\dfrac{\infty}{\infty}$ : on divise tous les termes par $x^2$, la plus haute puissance présente :

$$
g(x) = \frac{3x^2 + 2x}{x^2 - 1} = \frac{3 + \dfrac{2}{x}}{1 - \dfrac{1}{x^2}}.
$$

Or $\lim\limits_{x \to +\infty} \dfrac{2}{x} = 0$ et $\lim\limits_{x \to +\infty} \dfrac{1}{x^2} = 0$, donc par algèbre des limites :

$$
\lim_{x \to +\infty} g(x) = \frac{3 + 0}{1 - 0} = 3.
$$

**3. Limites unilatérales de $h$.**

Rappel : $|x| = -x$ si $x < 0$ et $|x| = x$ si $x > 0$.

- Pour $x < 0$ : $h(x) = \dfrac{-x}{x} = -1$, donc $\lim\limits_{x \to 0^-} h(x) = -1$.
- Pour $x > 0$ : $h(x) = \dfrac{x}{x} = 1$, donc $\lim\limits_{x \to 0^+} h(x) = +1$.

Les deux limites unilatérales existent mais sont **différentes** : $\lim\limits_{x \to 0} h(x)$ **n'existe pas**.

**4. Continuité de $f$ prolongée par $f(2) = 1$.**

Les trois vérifications :

1. $2$ appartient au domaine : $f(2) = 1$ est défini. ✓
2. La limite existe : $\lim\limits_{x \to 2} f(x) = 4$ (question 1). ✓
3. Comparaison : $4 \neq 1 = f(2)$ : la condition $\lim_{x \to 2} f(x) = f(2)$ n'est **pas** remplie.

Donc la fonction prolongée est **discontinue en $2$** (discontinuité évitable : la limite existe, mais elle n'est pas égale à la valeur).

**5. Prolongement par $f(2) = 4$.**

Les deux premières vérifications sont inchangées, et cette fois

$$
\lim_{x \to 2} f(x) = 4 = f(2).
$$

La condition de continuité est donc remplie : la fonction prolongée est **continue en $2$**. On dit que le prolongement « bouche le trou » de la fonction initiale.

:::remarque Leçon de cet exercice
Le prolongement d'une fonction rationnelle en un point annulé du numérateur et du dénominateur est **toujours** possible et rend la fonction continue : on remplace la valeur arbitraire par la limite, qui vaut alors $\dfrac{P'(a)}{Q'(a)}$ quand les deux dérivées ne s'annulent pas.
:::
