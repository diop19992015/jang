---
titre: Propriétés de ln et étude de la fonction
difficulte: 1
type: entrainement
indices:
  - Écris toujours la condition de positivité de l'argument avant de manipuler un ln.
  - Utilise ln(aⁿ) = n·ln(a) pour sortir les exposants, puis ln(u) + ln(v) = ln(uv).
  - Pour résoudre ln(u) = k, repasse à l'exponentielle : u = eᵏ.
---

## Énoncé

On considère les fonctions suivantes :

$$
f(x) = ln(x^2 - 4), \qquad g(x) = 2\,ln(x+1), \qquad h(x) = \frac{ln\,x}{x}.
$$

1. Déterminer le domaine de définition de $f$.
2. Simplifier $A = 2\,ln(3) + ln(4) - ln(6)$.
3. Résoudre dans $\mathbb{R}$ l'équation $ln(x) = 3$, puis l'équation $g(x) = ln(5)$.
4. Calculer $f'(x)$ puis $g'(x)$.
5. Étudier les variations de $h$ et donner $\lim\limits_{x \to +\infty} h(x)$.

## Solution

**1. Domaine de $f$.**

L'argument du logarithme doit être strictement positif :

$$
x^2 - 4 > 0 \iff (x-2)(x+2) > 0 \iff x < -2 \;\text{ ou }\; x > 2.
$$

$$
D_f = \,]-\infty\,;\,-2[ \;\cup\; \,]2\,;\,+\infty[
$$

**2. Simplification de $A$.**

On sort d'abord l'exposant avec $2\,ln(3) = ln(3^2) = ln(9)$ :

$$
A = ln(9) + ln(4) - ln(6) = ln\left(\frac{9 \times 4}{6}\right) = ln\left(\frac{36}{6}\right) = ln(6).
$$

$$
A = ln(6)
$$

**3. Équations logarithmiques.**

*$ln(x) = 3$ :* l'interdit $x > 0$ est vérifié par toute solution. En passant à l'exponentielle ($e^{ln\,x} = x$) :

$$
x = e^3 \quad (\approx 20{,}09).
$$

*$g(x) = ln(5)$, c'est-à-dire $2\,ln(x+1) = ln(5)$ :* il faut $x + 1 > 0$, soit $x > -1$.

On simplifie le membre de gauche : $2\,ln(x+1) = ln\big((x+1)^2\big)$. L'équation devient

$$
ln\big((x+1)^2\big) = ln(5) \iff (x+1)^2 = 5 \iff x + 1 = \pm\sqrt{5}.
$$

Donc $x = -1 + \sqrt{5} \approx 1{,}24$ ou $x = -1 - \sqrt{5} \approx -3{,}24$.

La seconde valeur vérifie-t-elle l'interdit $x > -1$ ? Non : $-1 - \sqrt{5} < -1$. On l'élimine (le calcul $(x+1)^2 = 5$ « oublie » la condition de positivité de l'argument de $g$).

$$
S = \{-1 + \sqrt{5}\}
$$

*Vérification :* $g(-1+\sqrt{5}) = 2\,ln(\sqrt{5}) = ln\big((\sqrt{5})^2\big) = ln(5)$. ✓

**4. Dérivées de $f$ et $g$.**

Pour $f(x) = ln(x^2 - 4)$, on utilise la dérivée composée $(ln\,u)' = \dfrac{u'}{u}$ avec $u(x) = x^2 - 4$ :

$$
f'(x) = \frac{2x}{x^2 - 4}.
$$

Pour $g(x) = 2\,ln(x+1)$ :

$$
g'(x) = 2 \times \frac{1}{x+1} = \frac{2}{x+1}.
$$

**5. Étude de $h(x) = \dfrac{ln\,x}{x}$.**

*Domaine :* $x > 0$, car $ln\,x$ impose $x > 0$ (et le dénominateur $x$ est alors automatiquement non nul).

*Dérivée (formule du quotient) :*

$$
h'(x) = \frac{\dfrac{1}{x} \times x - ln\,x \times 1}{x^2} = \frac{1 - ln\,x}{x^2}.
$$

Le dénominateur $x^2$ est strictement positif : le signe de $h'$ est celui de $1 - ln\,x$.

- $h'(x) = 0 \iff ln\,x = 1 \iff x = e$ ;
- $h'(x) > 0 \iff ln\,x < 1 \iff 0 < x < e$ (car $ln$ est croissante) ;
- $h'(x) < 0 \iff ln\,x > 1 \iff x > e$.

| $x$ | $0$ | $e$ | $+\infty$ |
| --- | --- | --- | --- |
| $h'(x)$ | $+$ | $0$ | $-$ |
| $h(x)$ | $-\infty$ | $\nearrow$ | $\dfrac{1}{e}$ | $\searrow$ | $0$ |

$h$ est **strictement croissante** sur $]0\,;\,e[$, **strictement décroissante** sur $]e\,;\,+\infty[$ : elle admet un **maximum local** en $x = e$, valant

$$
h(e) = \frac{ln\,e}{e} = \frac{1}{e} \approx 0{,}37.
$$

*Limite en $+\infty$ :* croissance comparée, $ln\,x$ est dominée par $x$ :

$$
\lim_{x \to +\infty} \frac{ln\,x}{x} = 0.
$$

La droite $y = 0$ est donc asymptote horizontale de la courbe de $h$ à droite (la courbe descend depuis $+\infty$ vers $0$ après son maximum).

:::remarque Contrôle de l'ensemble
Dans la question 3, la solution rejetée ($-1 - \sqrt{5}$) annulerait l'argument $x+1$ : elle rendrait $g$ inexistante. Toujours **revérifier les interdits** après résolution.
:::
