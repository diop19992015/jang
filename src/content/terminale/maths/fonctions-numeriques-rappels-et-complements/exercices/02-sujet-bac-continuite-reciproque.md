---
titre: Sujet type BAC — Continuité, réciproque et existence de solution
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour la partie A, calcule la limite en 1 après factorisation, puis donne la valeur qui rend continue la fonction.
  - Pour la partie B, étudie le signe de f' pour établir les variations, puis lis les solutions de f(x) = k dans le tableau.
  - Pour la partie C, pose φ(x) = f(x) - 2 sur un intervalle où f est monotone, calcule les valeurs aux bornes et applique le TVI.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$
f(x) = x e^{-x}.
$$

**Partie A — Continuité et prolongement**

On considère la fonction $g$ définie par :

$$
g(x) =
\begin{cases}
\dfrac{f(x) - f(1)}{x - 1} & \text{si } x \neq 1 \\[6pt]
\ell & \text{si } x = 1
\end{cases}
$$

1. Calculer $\lim\limits_{x \to 1} g(x)$ en reconnaissant une expression de nombre dérivé de $f$ en $1$.
2. Déterminer la valeur de $\ell$ pour que $g$ soit continue en $1$.

**Partie B — Variations de $f$**

3. Calculer $f'(x)$ et déterminer le signe de $f'(x)$.
4. Dresser le tableau de variations de $f$ sur $\mathbb{R}$.

**Partie C — Résolution d'équations**

5. Résoudre sur $\mathbb{R}$ l'équation $f(x) = \dfrac{1}{e}$.
6. Montrer que l'équation $f(x) = \dfrac{1}{2e}$ admet **exactement deux** solutions : une dans $]0\,;\,1[$ et l'autre dans $]2\,;\,3[$.

## Solution

**Partie A**

**1.** On reconnaît la définition du nombre dérivé de $f$ en $1$ :

$$
\lim_{x \to 1} \frac{f(x) - f(1)}{x - 1} = f'(1).
$$

On calcule $f'(x)$ (partie B) : $f'(x) = e^{-x} - x e^{-x} = e^{-x}(1 - x)$, donc

$$
f'(1) = e^{-1}(1 - 1) = 0.
$$

Ainsi $\lim\limits_{x \to 1} g(x) = 0$.

**2.** $g$ est continue en $1$ si et seulement si $g(1) = \ell$ vaut la limite :

$$
\boxed{\ell = 0}.
$$

**Partie B**

**3.** $f(x) = x e^{-x}$ est dérivable sur $\mathbb{R}$ (produit de $x \mapsto x$ et $x \mapsto e^{-x}$) :

$$
f'(x) = 1 \cdot e^{-x} + x \cdot (-e^{-x}) = e^{-x}(1 - x).
$$

$e^{-x} > 0$ pour tout $x$ : le signe de $f'(x)$ est celui de $1 - x$ :

- $f'(x) > 0$ pour $x < 1$ ;
- $f'(1) = 0$ ;
- $f'(x) < 0$ pour $x > 1$.

**4.** Tableau de variations :

| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $\dfrac{1}{e}$ | $\searrow$ | $0$ |

Limites : $\lim\limits_{x \to -\infty} x e^{-x} = -\infty$ (car $x \to -\infty$ et $e^{-x} \to +\infty$) et $\lim\limits_{x \to +\infty} x e^{-x} = 0$ (croissance comparée : l'exponentielle l'emporte sur la puissance).

Maximum global en $x = 1$ : $f(1) = \dfrac{1}{e} \approx 0{,}368$.

**Partie C**

**5.** Résolution de $f(x) = \dfrac{1}{e}$ : d'après le tableau, $f$ atteint la valeur $\dfrac{1}{e}$ en $x = 1$, et comme c'est le **maximum global**, c'est la **seule** solution :

$$
S = \{1\}.
$$

**6.** Posons $\varphi(x) = x e^{-x} - \dfrac{1}{2e}$, continue sur $\mathbb{R}$ (somme de fonctions continues). On calcule, avec $e \approx 2{,}718$ :

$$
\varphi(0) = 0 - \frac{1}{2e} < 0, \qquad
\varphi(1) = \frac{1}{e} - \frac{1}{2e} = \frac{1}{2e} > 0,
$$

$$
\varphi(2) = \frac{2}{e^2} - \frac{1}{2e} = \frac{4 - e}{2e^2} > 0 \quad (\text{car } e < 4), \qquad
\varphi(3) = \frac{3}{e^3} - \frac{1}{2e} \approx 0{,}149 - 0{,}184 < 0 .
$$

*Première solution dans $]0\,;\,1[$ :* $\varphi(0) < 0 < \varphi(1)$ et $\varphi$ est continue sur $[0\,;\,1]$ : par le **théorème des valeurs intermédiaires**, il existe $c_1 \in \,]0\,;\,1[$ tel que $\varphi(c_1) = 0$. Comme $f$ est **strictement croissante** sur $[0\,;\,1]$, cette solution est **unique** sur cet intervalle.

*Seconde solution dans $]2\,;\,3[$ :* $\varphi(1) > 0$ et $\varphi(2) > 0$ : pas de solution dans $]1\,;\,2]$ (le signe ne change pas). En revanche $\varphi(2) > 0 > \varphi(3)$ : par le TVI, il existe $c_2 \in \,]2\,;\,3[$ tel que $\varphi(c_2) = 0$, **unique** car $f$ est strictement décroissante sur $]1\,;\,+\infty[$.

*Aucune autre solution :* sur $]-\infty\,;\,0[$, $f(x) = x e^{-x} \leq 0 < \dfrac{1}{2e}$ ; sur $]3\,;\,+\infty[$, $f$ décroît de $f(3) \approx 0{,}149 < \dfrac{1}{2e}$ vers $0$, donc reste strictement inférieure à $\dfrac{1}{2e}$.

**Conclusion :** l'équation $f(x) = \dfrac{1}{2e}$ admet **exactement deux** solutions sur $\mathbb{R}$ :

$$
c_1 \in \,]0\,;\,1[ \qquad \text{et} \qquad c_2 \in \,]2\,;\,3[ .
$$

*Vérification :* $f(2) \approx 0{,}271 > 0{,}184 \approx \dfrac{1}{2e} > f(3) \approx 0{,}149$ : cohérent avec $c_2 \in \,]2\,;\,3[$ ✓.

:::methode Ce que le correcteur attend
- Question 1 : reconnaissance du nombre dérivé en $1$ (ou calcul de limite par factorisation) et résultat $0$.
- Variations : dérivée factorisée $e^{-x}(1-x)$, signe donné par $1-x$ (mention $e^{-x} > 0$), tableau avec les deux limites.
- Pour les équations : lecture dans le tableau de variations, TVI cité avec continuité et signes contraires, unicité par le sens de variation, et **vérification numérique des bornes** pour annoncer le bon intervalle.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points (2 + 1). Partie B : 3 points (1,5 + 1,5). Partie C : 4 points (1,5 + 2,5). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
