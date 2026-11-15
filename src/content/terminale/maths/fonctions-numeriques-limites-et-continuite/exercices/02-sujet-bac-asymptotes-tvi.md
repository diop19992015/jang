---
titre: Sujet type BAC — Étude de fonction, asymptotes et existence de solution
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour la partie A, factorise le numérateur (x² - 4) avant de conclure.
  - Pour la partie B, traite trois cas : limite finie en 2, comportement à l'infini, puis quotient f(x)/x pour l'asymptote oblique.
  - Pour la partie C, pose φ(x) = f(x) - 5, calcule φ(2,5) et φ(3), puis applique le TVI ; la dérivée donnera l'unicité.
---

## Énoncé

On considère la fonction $f$ définie sur $D = \,]2\,;\,+\infty[$ par

$$
f(x) = \frac{x^2 - 4}{x - 2} + \frac{1}{x}.
$$

**Partie A — Étude algébrique**

1. Simplifier l'expression de $f$ sur $D$.
2. Calculer $\lim\limits_{x \to 2^+} f(x)$.
3. Calculer $\lim\limits_{x \to +\infty} f(x)$.

**Partie B — Asymptotes**

4. Justifier qu'il n'y a **pas** d'asymptote verticale à gauche de $D$, ni d'asymptote horizontale.
5. Calculer $\lim\limits_{x \to +\infty} \dfrac{f(x)}{x}$ puis $\lim\limits_{x \to +\infty} \big(f(x) - x\big)$, et en déduire l'équation de l'asymptote oblique de $\mathcal{C}_f$ en $+\infty$.

**Partie C — Résolution d'une équation**

6. Montrer que l'équation $f(x) = 5$ admet une solution dans $]2{,}5\,;\,3[$.
7. Justifier que cette solution est **unique** sur $D$.

## Solution

**Partie A**

**1.** Pour tout $x \in D$, $x \neq 2$, donc on peut factoriser :

$$
\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2 .
$$

D'où

$$
f(x) = x + 2 + \frac{1}{x}, \qquad x > 2 .
$$

**2.** Les fonctions $x \mapsto x+2$ et $x \mapsto \dfrac{1}{x}$ sont continues en $2$ ($x > 2$), donc :

$$
\lim_{x \to 2^+} f(x) = 2 + 2 + \frac{1}{2} = \frac{9}{2}.
$$

**3.** Quand $x \to +\infty$, $x + 2 \to +\infty$ et $\dfrac{1}{x} \to 0$, donc

$$
\lim_{x \to +\infty} f(x) = +\infty .
$$

**Partie B**

**4.** Le domaine est $D = \,]2\,;\,+\infty[$ : la seule valeur d'exclusion est $x = 2$, et la limite en $2^+$ vaut $\dfrac{9}{2} \in \mathbb{R}$ : la courbe est **bornée** en $2$, donc $x = 2$ n'est pas une asymptote verticale (c'est une borne ouverte de la courbe).

De plus $\lim\limits_{x \to +\infty} f(x) = +\infty$ n'est pas fini : il n'y a **pas** d'asymptote horizontale.

**5.**

$$
\frac{f(x)}{x} = \frac{x + 2 + \frac{1}{x}}{x} = 1 + \frac{2}{x} + \frac{1}{x^2} \xrightarrow[x \to +\infty]{} 1 .
$$

Donc $m = 1 \neq 0$. Ensuite :

$$
f(x) - x = 2 + \frac{1}{x} \xrightarrow[x \to +\infty]{} 2 .
$$

Ainsi $b = 2$ et l'asymptote oblique de $\mathcal{C}_f$ en $+\infty$ a pour équation

$$
y = x + 2 .
$$

**Partie C**

**6.** On pose $\varphi(x) = f(x) - 5 = x + \dfrac{1}{x} - 3$ sur $D$.

$\varphi$ est somme de fonctions continues sur $]2\,;\,+\infty$ : elle est **continue** sur $D$.

Calculs :

$$
\varphi(2{,}5) = 2{,}5 + \frac{1}{2{,}5} - 3 = 2{,}5 + 0{,}4 - 3 = -0{,}1 < 0 ,
$$

$$
\varphi(3) = 3 + \frac{1}{3} - 3 = \frac{1}{3} > 0 .
$$

Les valeurs $\varphi(2{,}5)$ et $\varphi(3)$ sont de signes contraires et $\varphi$ est continue sur $[2{,}5\,;\,3] \subset D$ : par le **théorème des valeurs intermédiaires**, il existe $c \in \,]2{,}5\,;\,3[$ tel que $\varphi(c) = 0$, c'est-à-dire $f(c) = 5$.

**7.** On dérive $\varphi$ :

$$
\varphi'(x) = 1 - \frac{1}{x^2} = \frac{x^2 - 1}{x^2}.
$$

Pour $x > 2$ : $x^2 > 4 > 1$, donc $x^2 - 1 > 0$ et $\varphi'(x) > 0$. La fonction $\varphi$ est donc **strictement croissante** sur $]2\,;\,+\infty[$ : elle s'annule au plus une fois.

L'équation $f(x) = 5$ admet donc **une unique** solution sur $D$.

*Vérification numérique :* $f(x) = 5$ équivaut à $x^2 - 3x + 1 = 0$, dont les racines sont $x = \dfrac{3 \pm \sqrt{5}}{2}$. Seule $x = \dfrac{3 + \sqrt{5}}{2} \approx 2{,}62$ appartient à $D$, bien dans $]2{,}5\,;\,3[$. ✓

:::methode Ce que le correcteur attend
- La simplification $x + 2$ **avec** la mention $x \neq 2$.
- Trois limites calculées et deux « non-asymptotes » justifiées (limites finies ou infinies).
- L'asymptote oblique obtenue par **deux** limites : $\dfrac{f(x)}{x}$ puis $f(x) - mx$.
- TVI cité avec ses hypotheses (continuité sur l'intervalle, signes contraires) puis unicité par le signe de $\varphi'$.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points (1 + 1 + 1). Partie B : 3 points (1 + 2). Partie C : 4 points (2 + 2). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
