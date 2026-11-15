---
titre: Calculs, équations et dérivées avec l'exponentielle
difficulte: 1
type: entrainement
indices:
  - Pour simplifier, mets tous les termes sous la forme e^(quelque chose) puis ajoute les exposants.
  - Dans une équation e^u = e^v, égalise les exposants ; si e^x = k, vérifie k > 0 puis prends ln.
  - Pour dériver, rappelle (u·eˣ)' = (u' + u)·eˣ et factorise par eˣ pour le signe.
---

## Énoncé

1. Simplifier dans $\mathbb{R}$ : $A = \dfrac{e^{2x} \times e^{-x}}{e^3}$, puis $B = e^{x+1} - e^{x-1}$.
2. Résoudre dans $\mathbb{R}$ les équations :
   a. $e^{3x} = e^{x+4}$ ;
   b. $e^{2x} - 5e^x + 6 = 0$ ;
   c. $e^x = -2$.
3. Résoudre dans $\mathbb{R}$ l'inéquation $e^{2x-1} \leq e^5$.
4. Soit $f(x) = (x^2 - 2)\,e^x$. Calculer $f'(x)$, puis étudier le signe de $f'(x)$.
5. Calculer $\lim\limits_{x \to +\infty} \dfrac{x}{e^x}$ et $\lim\limits_{x \to -\infty} x^2\,e^x$.

## Solution

**1. Simplifications.**

*Pour $A$ :* on additionne les exposants (même base $e$) :

$$
A = \frac{e^{2x + (-x)}}{e^3} = \frac{e^{x}}{e^3} = e^{x - 3}.
$$

*Pour $B$ :* on met $e^x$ en facteur commun :

$$
B = e^{x+1} - e^{x-1} = e^x \times e^1 - e^x \times e^{-1} = e^x\left(e - \frac{1}{e}\right).
$$

Comme $e - \dfrac{1}{e} = \dfrac{e^2 - 1}{e}$, on peut aussi écrire $B = e^{x-1}(e^2 - 1)$. Les deux écritures sont correctes.

**2. Équations.**

*a. $e^{3x} = e^{x+4}$ :* les deux membres sont des exponentielles de même base, donc

$$
3x = x + 4 \iff 2x = 4 \iff x = 2.
$$

*b. $e^{2x} - 5e^x + 6 = 0$ :* c'est un trinôme en $e^x$. Posons $X = e^x$ (avec $X > 0$) :

$$
X^2 - 5X + 6 = (X-2)(X-3) = 0 \iff X = 2 \;\text{ ou }\; X = 3.
$$

Les deux valeurs sont strictement positives : pas d'interdit.

$$
e^x = 2 \Rightarrow x = ln(2), \qquad e^x = 3 \Rightarrow x = ln(3).
$$

$$
S = \{\,ln(2)\,;\,ln(3)\,\}
$$

*c. $e^x = -2$ :* or $e^x > 0$ pour tout réel $x$, donc l'égalité est impossible.

$$
S = \varnothing
$$

**3. Inéquation $e^{2x-1} \leq e^5$.**

L'exponentielle étant strictement croissante, on peut comparer les exposants **en conservant le sens** :

$$
2x - 1 \leq 5 \iff 2x \leq 6 \iff x \leq 3.
$$

$$
S = \,]-\infty\,;\,3]
$$

*Vérification :* $x = 3$ donne $e^{5} \leq e^{5}$ ✓ ; $x = 4$ donne $e^{7} \leq e^{5}$, faux ✓.

**4. Dérivée de $f(x) = (x^2 - 2)\,e^x$.**

On utilise $(u\,e^x)' = (u' + u)\,e^x$ avec $u(x) = x^2 - 2$ et $u'(x) = 2x$ :

$$
f'(x) = (2x + x^2 - 2)\,e^x = (x^2 + 2x - 2)\,e^x.
$$

*Signe :* $e^x > 0$ pour tout $x$ : le signe de $f'(x)$ est celui du trinôme $x^2 + 2x - 2$.

Discriminant : $\Delta = 4 + 8 = 12$, donc $\sqrt{\Delta} = 2\sqrt{3}$ et les racines sont

$$
x_1 = \frac{-2 - 2\sqrt{3}}{2} = -1 - \sqrt{3} \approx -2{,}73, \qquad
x_2 = \frac{-2 + 2\sqrt{3}}{2} = -1 + \sqrt{3} \approx 0{,}73.
$$

Le trinôme est du second degré à coefficient positif :

- $f'(x) > 0$ sur $]-\infty\,;\,-1-\sqrt{3}[$ et sur $]-1+\sqrt{3}\,;\,+\infty[$ ;
- $f'(x) = 0$ en $x = -1-\sqrt{3}$ et $x = -1+\sqrt{3}$ ;
- $f'(x) < 0$ sur $]-1-\sqrt{3}\,;\,-1+\sqrt{3}[$.

**5. Limites.**

$\lim\limits_{x \to +\infty} \dfrac{x}{e^x}$ : forme $\dfrac{\infty}{\infty}$ ; par croissance comparée (ou deux règles de l'Hôpital), $e^x$ domine $x$ :

$$
\lim_{x \to +\infty} \frac{x}{e^x} = 0.
$$

$\lim\limits_{x \to -\infty} x^2\,e^x$ : forme $(+\infty) \times 0$ puisque $x^2 \to +\infty$ et $e^x \to 0$. On pose $t = -x$ avec $t \to +\infty$ :

$$
x^2\,e^x = t^2\,e^{-t} = \frac{t^2}{e^t} \xrightarrow[t \to +\infty]{} 0
$$

par croissance comparée. Donc

$$
\lim_{x \to -\infty} x^2\,e^x = 0.
$$

:::remarque Leçon de l'exercice
Dans toute étude contenant $e^x$, la première phrase utile est « $e^x > 0$ donc il ne modifie pas les signes » : elle justifie la lecture du signe de la dérivée sans tableau supplémentaire.
:::
