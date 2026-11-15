## Limites usuelles

:::formule En un point (fonctions continues)
$$
\lim_{x \to a} c = c
\qquad
\lim_{x \to a} x = a
\qquad
\lim_{x \to a} P(x) = P(a)
$$
:::

:::formule En $+\infty$
$$
\lim_{x \to +\infty} \frac{1}{x^n} = 0 \;\;(n > 0)
\qquad
\lim_{x \to -\infty} \frac{1}{x^n} = 0 \;\;(n > 0)
$$

$$
\lim_{x \to +\infty} \frac{a_n x^n + \dots}{b_m x^m + \dots} =
\begin{cases}
\dfrac{a_n}{b_m} & \text{si } n = m\\[6pt]
0 & \text{si } n < m\\[4pt]
\text{n'existe pas (} \pm \infty\text{)} & \text{si } n > m
\end{cases}
$$
:::

:::formule Cas remarquables
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
\qquad
\lim_{x \to a} \frac{x^n - a^n}{x - a} = n a^{n-1}
$$

$$
\lim_{x \to 0^+} \ln x = -\infty
\qquad
\lim_{x \to +\infty} e^x = +\infty
$$
:::

## Opérations

:::formule Algèbre des limites (cas finis)
Si $\lim f = L$ et $\lim g = M$ (réels) :

$$
\lim (f + g) = L + M
\qquad
\lim (f \cdot g) = L \cdot M
\qquad
\lim \frac{f}{g} = \frac{L}{M} \;\;(M \neq 0)
$$

$$
\lim (f^n) = L^n
\qquad
\lim (\sqrt{f}) = \sqrt{L} \;\;(L \geq 0)
$$
:::

:::formule Encadrement
$$
g(x) \leq f(x) \leq h(x) \text{ et } \lim g = \lim h = L \;\Longrightarrow\; \lim f = L
$$
:::

:::remarque Substitution interdite
La substitution $x = a$ n'est licite que si l'expression reste **valable** et **non indéterminée**. Dans $\frac{0}{0}$ ou $\infty - \infty$, il faut d'abord simplifier.
:::

## Limites unilatérales

:::formule Existence
$$
\lim_{x \to a} f(x) = L \iff
\begin{cases}
\lim_{x \to a^-} f(x) = L\\
\lim_{x \to a^+} f(x) = L
\end{cases}
$$
:::

:::formule Valeur absolue (à connaître)
$$
\lim_{x \to 0^-} \frac{|x|}{x} = -1
\qquad
\lim_{x \to 0^+} \frac{|x|}{x} = +1
$$

La limite en $0$ n'existe pas.
:::

## Continuité

:::formule Critère complet
$$
f \text{ continue en } a \iff
\begin{cases}
a \in D_f\\
\lim_{x \to a} f(x) \text{ existe}\\
\lim_{x \to a} f(x) = f(a)
\end{cases}
$$
:::

:::formule Limites à gauche et à droite et nature de la discontinuité
| Situation | Conclusion |
| --- | --- |
| $\lim_{x \to a^-} \neq \lim_{x \to a^+}$ | discontinue (saut) |
| limites égales mais $\neq f(a)$ | discontinue (trou évitable) |
| $a \notin D_f$ mais limite existe | discontinue (trou) |
| $\lim = f(a)$ | **continue** |
:::

:::formule Théorème des valeurs intermédiaires
$f$ continue sur $[a\,;\,b]$ et $k$ entre $f(a)$ et $f(b)$ $\Rightarrow$ il existe $c \in \,]a\,;\,b[$ tel que $f(c) = k$.

Sert à **justifier l'existence** d'une solution de $f(x) = k$.
:::

## Méthodes types

:::formule Traitement de $\dfrac{0}{0}$
$$
\lim_{x \to a} \frac{P(x)}{Q(x)}, \;\; P(a) = Q(a) = 0
\;\Longrightarrow\;
\text{factoriser } P \text{ et } Q \text{ par } (x - a), \text{ simplifier, calculer}
$$
:::

:::formule Traitement de $\dfrac{\infty}{\infty}$ (quotient de polynômes)
Diviser tous les termes par la **plus haute puissance** de $x$ présente, puis utiliser $\lim \frac{1}{x^n} = 0$.
:::

## À mémoriser absolument

- La limite en $a$ ignore $f(a)$.
- Polynôme : substitution ; quotient en $+\infty$ : puissance dominante ; $\frac{0}{0}$ : factorisation.
- Continuité : limite $=$ valeur (après avoir vérifié l'existence des deux).
- Limites à gauche et à droite doivent être égales pour que la limite existe.
- $\lim \frac{x^n - a^n}{x-a} = na^{n-1}$ et $\lim_{x \to 0} \frac{\sin x}{x} = 1$.
