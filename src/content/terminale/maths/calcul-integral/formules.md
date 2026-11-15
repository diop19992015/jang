## Primitives usuelles

:::formule Tableau de base
| $f(x)$ | $\int f(x)\,dx$ |
| --- | --- |
| $0$ | $k$ |
| $1$ | $x + k$ |
| $x^n \;(n \neq -1)$ | $\dfrac{x^{n+1}}{n+1} + k$ |
| $\dfrac{1}{x}$ | $ln\|x\| + k$ |
| $e^x$ | $e^x + k$ |
| $\cos x$ | $\sin x + k$ |
| $\sin x$ | $-\cos x + k$ |
| $\dfrac{1}{1+x^2}$ | $\arctan(x) + k$ (si vu) |
:::

:::formule Avec un paramètre $a \neq 0$
$$
\int e^{ax}\,dx = \frac{1}{a}\,e^{ax} + k
$$

$$
\int \cos(ax)\,dx = \frac{1}{a}\,\sin(ax) + k
$$

$$
\int \sin(ax)\,dx = -\frac{1}{a}\,\cos(ax) + k
$$

$$
\int \frac{1}{x + a}\,dx = ln\|x + a\| + k
$$
:::

:::formule Primitive composée
$$
\int u'(x)\,e^{u(x)}\,dx = e^{u(x)} + k
$$

$$
\int \frac{u'(x)}{u(x)}\,dx = ln\|u(x)\| + k
$$

$$
\int u'(x)\,u(x)^n\,dx = \frac{u(x)^{n+1}}{n+1} + k \;(n \neq -1)
$$
:::

:::remarque Méthode de reconnaissance
Chercher dans l'intégrande un couple **fonction / sa dérivée** : $\dfrac{1}{x}$ avec $\dfrac{1}{x^2}$... non : chercher $u'$ face à $u$. Exemple : $\dfrac{2x}{x^2+1}$ : le numérateur est la dérivée du dénominateur → $ln\|x^2+1\|$.
:::

## Intégrale définie

:::formule Théorème fondamental
$$
\int_a^b f(x)\,dx = F(b) - F(a) = \Big[F(x)\Big]_a^b
$$
:::

:::formule Propriétés
$$
\int_a^b \big(\lambda f + \mu g\big) = \lambda \int_a^b f + \mu \int_a^b g
$$

$$
\int_a^a f = 0, \qquad \int_a^b f = -\int_b^a f
$$

$$
\int_a^c f + \int_c^b f = \int_a^b f \quad (\text{décomposition d'intervalle})
$$
:::

:::formule Formule de Leibniz
$$
F(x) = \int_a^x f(t)\,dt \;\Longrightarrow\; F'(x) = f(x) \quad \text{et} \quad F(a) = 0
$$
:::

:::formule Inégalités
$$
0 \leq f \leq g \text{ sur } [a\,;\,b] \;\Longrightarrow\; 0 \leq \int_a^b f \leq \int_a^b g
$$

$$
m \leq f(x) \leq M \;\Longrightarrow\; m\,(b-a) \leq \int_a^b f(x)\,dx \leq M\,(b-a)
$$
:::

:::remarque Contrôle de signe
Si $f(x) \geq 0$ sur $[a\,;\,b]$ avec $a < b$, alors $\displaystyle\int_a^b f(x)\,dx \geq 0$. Une valeur négative doit alerter (erreur de calcul ou intégrande négative).
:::

## Aires

:::formule Aire sous une courbe
$$
f \geq 0 \text{ sur } [a\,;\,b] \;\Longrightarrow\; S = \int_a^b f(x)\,dx
$$
:::

:::formule Aire entre deux courbes
$$
f \geq g \text{ sur } [a\,;\,b] \;\Longrightarrow\; S = \int_a^b \big(f(x) - g(x)\big)\,dx
$$
:::

:::formule Si le signe change
En $c$ : $f \geq 0$ sur $[a\,;\,c]$ et $f \leq 0$ sur $[c\,;\,b]$ :

$$
S = \int_a^c f(x)\,dx - \int_c^b f(x)\,dx = \int_a^c f + \left|\int_c^b f\right|
$$

L'aire géométrique est **toujours positive** : on additionne les morceaux positifs.
:::

:::formule Protocole
1. Tracer et trouver les **intersections** ($f = g$, $f = 0$) : bornes d'intégration.
2. Déterminer le **signe** de l'intégrande sur chaque intervalle.
3. Écrire l'intégrale (somme d'intégrales si nécessaire).
4. Calculer par une primitive, conclure avec l'**unité**.
:::

:::remarque Aire d'une forme connue (contrôle rapide)
- Triangle d'aire $\dfrac{\text{base} \times \text{hauteur}}{2}$ ;
- Trapèze ; demi-cercle de rayon $r$ : $\dfrac{\pi r^2}{2}$.

Comparer le résultat de l'intégrale à la forme géométrique : si ça colle, le calcul est juste.
:::

## À mémoriser absolument

- $x^n \to \dfrac{x^{n+1}}{n+1}$ ($n \neq -1$) ; $\dfrac{1}{x} \to ln\|x\|$ ; $e^x \to e^x$ ; $\cos \to \sin$ ; $\sin \to -\cos$.
- $\int_a^b f = F(b) - F(a)$.
- Linéarité, $\int_a^b = -\int_b^a$, décomposition d'intervalle, $(\int_a^x f)' = f(x)$.
- Aire $= \int f$ (positif) ; entre courbes $= \int (f - g)$ ; sinon découper.
- Intersections $\to$ bornes ; signe $\to$ méthode ; unité $\to$ conclusion.
