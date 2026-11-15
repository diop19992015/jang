## Définition

:::formule Réciproque de l'exponentielle
$$
x > 0 : \quad e^{ln(x)} = x
$$

$$
t \in \mathbb{R} : \quad ln(e^t) = t
$$

$ln$ est définie **uniquement** sur $]0\,;\,+\infty[$.
:::

:::formule Valeurs remarquables
$$
ln(1) = 0, \qquad ln(e) = 1, \qquad ln(e^k) = k, \qquad ln\left(\frac{1}{e}\right) = -1, \qquad ln\sqrt{e} = \frac{1}{2}
$$
:::

## Propriétés

:::formule Algèbre des logarithmes
Pour $a > 0$, $b > 0$ et $n \in \mathbb{R}$ :

$$
ln(ab) = ln(a) + ln(b)
$$

$$
ln\left(\frac{a}{b}\right) = ln(a) - ln(b)
$$

$$
ln\left(\frac{1}{a}\right) = -ln(a)
$$

$$
ln(a^n) = n\,ln(a), \qquad ln(\sqrt{a}) = \frac{1}{2}\,ln(a)
$$
:::

:::remarque Ce qui n'existe PAS
$$
ln(a + b) \neq ln(a) + ln(b)
\qquad
ln(a)\,ln(b) \neq ln(ab)
\qquad
ln(a - b) \neq ln(a) - ln(b)
$$

Aucune formule ne permet de simplifier le logarithme d'une **somme** ou d'une **différence**.
:::

:::formule Expression à simplifier (méthode)
$$
A\,ln(u) + B\,ln(v) - C\,ln(w) = ln\left(\frac{u^A \times v^B}{w^C}\right)
$$
:::

## Équations et inéquations

:::formule Passage exponentielle/logarithme
$$
ln(u) = k \iff u = e^k \quad (u > 0)
$$

$$
e^u = k \;(k > 0) \iff u = ln(k)
$$

$$
ln(u) = ln(v) \iff u = v \quad (u > 0,\; v > 0)
$$
:::

:::formule Inéquations (monotonie)
$ln$ est strictement **croissante** :

$$
ln(u) < ln(v) \iff u < v \quad (u > 0,\; v > 0)
$$

$$
ln(u) \geq k \iff u \geq e^k
$$

**Toujours** rappeler les conditions de positivité avant de résoudre.
:::

:::remarque Vérification obligatoire
Après avoir trouvé une solution, vérifier qu'elle respecte l'interdit : ex. $ln(x - 1)$ impose $x > 1$ ; si la solution trouvée est $x = 0$, elle est **rejetée**.
:::

## Étude de la fonction $ln$

:::formule Définition et variations
| | |
| --- | --- |
| Domaine | $D = \,]0\,;\,+\infty[$ |
| $f(1)$ | $0$ : la courbe passe par $A(1\,;\,0)$ |
| Dérivée | $(ln\,x)' = \dfrac{1}{x} > 0$ sur $]0\,;\,+\infty[$ |
| Variations | strictement croissante |
| Asymptote verticale | $x = 0$ (axe des ordonnées) |
| Limites | $ln(x) \to -\infty$ en $0^+$ ; $ln(x) \to +\infty$ en $+\infty$ |
:::

:::formule Dérivées composées
$$
\big(ln(u(x))\big)' = \frac{u'(x)}{u(x)} \qquad (u(x) > 0)
$$

Exemple :

$$
\left(ln(x^2 + 1)\right)' = \frac{2x}{x^2 + 1}, \qquad
\left(ln(3x - 1)\right)' = \frac{3}{3x - 1}
$$
:::

## Limites

:::formule Croissance comparée
$$
\lim_{x \to +\infty} \frac{ln\,x}{x^n} = 0 \;\;(n > 0)
\qquad
\lim_{x \to +\infty} \frac{e^x}{ln\,x} = +\infty
$$

$$
\lim_{x \to +\infty} \frac{x^n}{e^x} = 0 \;\;(n \in \mathbb{R})
$$

Ordre de grandeur en $+\infty$ : $\;ln\,x \;\ll\; x^n \;\ll\; e^x$.
:::

:::formule Limite en $0^+$
$$
\lim_{x \to 0^+} x^n\,ln\,x = 0 \;\;(n > 0)
\qquad
\lim_{x \to 0^+} ln(x) = -\infty
$$

Forme $0 \times (-\infty)$ : la puissance $x^n$ « l'emporte » sur le logarithme.
:::

:::formule Limite remarquable en $1$
$$
\lim_{x \to 1} \frac{ln\,x}{x - 1} = 1
$$

(forme $\dfrac{0}{0}$ ; c'est $(ln\,x)'$ évalué en $1$)
:::

## Représentation graphique

:::formule Courbe de $ln$
1. Courbe **entièrement à droite** de l'axe des ordonnées ($x > 0$).
2. Passage par $A(1\,;\,0)$.
3. Axe des ordonnées = **asymptote verticale** (la courbe descend vers $-\infty$ en $0^+$).
4. Croissante : au-dessus de l'axe pour $x > 1$, en dessous pour $0 < x < 1$.
5. Symétrique de $x \mapsto e^x$ par rapport à $y = x$.
:::

## À mémoriser absolument

- $ln$ définie sur $]0\,;\,+\infty[$ ; $e^{ln\,x} = x$ et $ln(e^t) = t$.
- $ln(ab) = ln\,a + ln\,b$, $ln(a/b) = ln\,a - ln\,b$, $ln(a^n) = n\,ln\,a$.
- Aucune formule sur $ln(a+b)$.
- $(ln\,x)' = 1/x$ ; $ln$ strictement croissante.
- $ln(u) = k \iff u = e^k$ (avec $u > 0$).
- $\lim_{+\infty} \dfrac{ln\,x}{x} = 0$, $\lim_{0^+} x\,ln\,x = 0$, $\lim_{+\infty} \dfrac{e^x}{ln\,x} = +\infty$.
