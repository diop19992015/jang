---
titre: Sujet type BAC — Dérivation, tangente et Rolle
difficulte: 3
type: bac
annee: 2023
indices:
  - Sépare bien les questions : calcul par la définition, puis théorèmes, puis étude.
  - Écris toujours « f est dérivable donc continue » quand une question le demande.
  - Pour Rolle, cite les trois hypothèses avant de conclure : sans f(a) = f(b), Rolle ne s'applique pas.
---

## Énoncé

On considère la fonction $g$ définie sur $\mathbb{R}$ par

$$
g(x) = \frac{1}{3}x^3 - \frac{3}{2}x^2 + 2.
$$

**Partie A — Nombre dérivé et tangente**

1. Par la définition, calculer $g'(2)$.
2. Déterminer l'équation de la tangente $T$ à la courbe de $g$ au point d'abscisse $2$.

**Partie B — Théorèmes**

3. Justifier que $g$ est continue en $2$.
4. Calculer $g(0)$ et $g(3)$. Le théorème de Rolle s'applique-t-il sur $[0\,;\,3]$ ? Justifier. Dans le cas contraire, déterminer un intervalle $[a\,;\,b]$ sur lequel Rolle s'applique et donner le ou les points $c$ garantis.

**Partie C — Utilisation de la dérivée**

5. Calculer $g'(x)$, puis étudier le signe de $g'(x)$ sur $\mathbb{R}$.
6. Dresser le tableau de variations de $g$ et en déduire le nombre de solutions de l'équation $g(x) = 0$.
7. Relier la question 4 à la question 6 : quelle propriété de $g'$ illustre le théorème de Rolle ?

## Solution

**Partie A**

**1. Calcul de $g'(2)$ par la définition.**

$$
g'(2) = \lim_{h \to 0} \frac{g(2+h) - g(2)}{h}.
$$

Calculons $g(2)$ :

$$
g(2) = \frac{8}{3} - \frac{3}{2} \times 4 + 2 = \frac{8}{3} - 6 + 2 = \frac{8}{3} - 4 = -\frac{4}{3}.
$$

Puis, en développant $g(2+h)$ :

$$
g(2+h) = \frac{(2+h)^3}{3} - \frac{3}{2}(2+h)^2 + 2
= \frac{8 + 12h + 6h^2 + h^3}{3} - \frac{3}{2}(4 + 4h + h^2) + 2
$$

$$
= \frac{8}{3} + 4h + 2h^2 + \frac{h^3}{3} - 6 - 6h - \frac{3}{2}h^2 + 2.
$$

Les termes constants forment exactement $g(2) = \dfrac{8}{3} - 4$, donc

$$
g(2+h) - g(2) = -2h + \frac{1}{2}h^2 + \frac{h^3}{3}.
$$

Pour $h \neq 0$ :

$$
\frac{g(2+h) - g(2)}{h} = -2 + \frac{h}{2} + \frac{h^2}{3} \xrightarrow[h \to 0]{} -2.
$$

$$
g'(2) = -2.
$$

*(Contrôle par la formule usuelle : $g'(x) = x^2 - 3x$, donc $g'(2) = 4 - 6 = -2$. ✓)*

**2. Tangente en $2$.**

$$
y = g'(2)(x - 2) + g(2) = -2(x-2) - \frac{4}{3} = -2x + 4 - \frac{4}{3} = -2x + \frac{8}{3}.
$$

$$
T: y = -2x + \frac{8}{3}.
$$

Vérification : pour $x = 2$, $y = -4 + \dfrac{8}{3} = \dfrac{-12 + 8}{3} = -\dfrac{4}{3} = g(2)$. ✓

**Partie B**

**3. Continuité en $2$.**

$g$ est un **polynôme** (somme de puissances entières de $x$ à coefficients réels) : les polynômes sont dérivables sur $\mathbb{R}$, donc $g$ est dérivable en $2$. D'après le théorème « dérivable $\Rightarrow$ continue », $g$ est continue en $2$ (et en tout réel).

**4. Rolle sur $[0\,;\,3]$.**

$$
g(0) = 0 - 0 + 2 = 2, \qquad
g(3) = \frac{27}{3} - \frac{3}{2} \times 9 + 2 = 9 - \frac{27}{2} + 2 = 11 - 13{,}5 = -\frac{5}{2}.
$$

$g$ est continue sur $[0\,;\,3]$ et dérivable sur $]0\,;\,3[$, **mais** $g(0) = 2 \neq -\dfrac{5}{2} = g(3)$ : la troisième hypothèse de Rolle n'est pas remplie. On **ne peut pas** appliquer Rolle sur $[0\,;\,3]$.

Cherchons maintenant $b$ tel que $g(b) = g(0) = 2$ :

$$
g(x) = 2 \iff \frac{1}{3}x^3 - \frac{3}{2}x^2 = 0 \iff x^2\left(\frac{x}{3} - \frac{3}{2}\right) = 0 \iff x = 0 \;\text{ ou }\; x = \frac{9}{2}.
$$

Sur l'intervalle $\left[0\,;\,\dfrac{9}{2}\right]$ : $g$ est continue (polynôme), dérivable sur $\left]0\,;\,\dfrac{9}{2}\right[$, et

$$
g(0) = 2 = g\left(\frac{9}{2}\right).
$$

Les hypothèses de Rolle sont réunies : il existe $c \in \left]0\,;\,\dfrac{9}{2}\right[$ tel que $g'(c) = 0$.

Or $g'(x) = x(x-3)$ s'annule en $0$ et $3$ ; seul $3$ appartient à $\left]0\,;\,\dfrac{9}{2}\right[$ :

$$
c = 3.
$$

**Partie C**

**5. Dérivée et signe de $g'$.**

$$
g'(x) = 3 \times \frac{1}{3}x^2 - \frac{3}{2} \times 2x = x^2 - 3x = x(x - 3).
$$

Le signe de $g'(x)$ (produit de deux facteurs qui s'annulent en $0$ et $3$) :

| $x$ | $-\infty$ | $0$ | $3$ | $+\infty$ |
| --- | --- | --- | --- | --- |
| $x$ | $-$ | $0$ | $+$ | $+$ |
| $x - 3$ | $-$ | $-$ | $0$ | $+$ |
| $g'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |

- $g'(x) > 0$ sur $]-\infty\,;\,0[$ et $]3\,;\,+\infty[$ ;
- $g'(x) = 0$ en $0$ et $3$ ;
- $g'(x) < 0$ sur $]0\,;\,3[$.

**6. Tableau de variations et nombre de solutions de $g(x) = 0$.**

| $x$ | $-\infty$ | $0$ | $3$ | $+\infty$ |
| --- | --- | --- | --- | --- |
| $g'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $g(x)$ | $-\infty$ | $\nearrow$ | $2$ | $\searrow$ | $-\frac{5}{2}$ | $\nearrow$ | $+\infty$ |

Valeurs : $g(0) = 2$ et $g(3) = -\dfrac{5}{2}$ ; limites : $g(x) \to -\infty$ en $-\infty$ et $g(x) \to +\infty$ en $+\infty$ (degré impair, coefficient positif).

Nombre de solutions de $g(x) = 0$ :

- sur $]-\infty\,;\,0[$ : $g$ croît de $-\infty$ à $2$ : **une** solution (par exemple $g(-1) = -\dfrac{1}{3} - \dfrac{3}{2} + 2 = \dfrac{1}{6} > 0$ et $g(-2) < 0$ : elle est dans $]-2\,;\,-1[$) ;
- sur $]0\,;\,3[$ : $g$ décroît de $2$ à $-\dfrac{5}{2}$ : **une** solution (dans $]1\,;\,2[$ car $g(1) = \dfrac{5}{6} > 0$ et $g(2) = -\dfrac{4}{3} < 0$) ;
- sur $]3\,;\,+\infty[$ : $g$ croît de $-\dfrac{5}{2}$ à $+\infty$ : **une** solution (dans $]4\,;\,5[$).

$$
\boxed{\text{$g(x) = 0$ admet exactement 3 solutions réelles.}}
$$

**7. Lien avec Rolle.**

Le théorème de Rolle garantit un point $c$ où $g'(c) = 0$ entre deux points d'abscisses différentes d'égale ordonnée : ici $g(0) = g\left(\dfrac{9}{2}\right) = 2$ fournit $c = 3$. Graphiquement, c'est exactement ce que montre le tableau de variations : $g$ part de $2$ en $0$, redescend, puis remonte jusqu'à $2$ en $\dfrac{9}{2}$ : elle doit nécessairement posséder un extremum (et donc une tangente horizontale) entre les deux. C'est la traduction analytique de la phrase « entre deux points de même altitude, il y a un point où la tangente est horizontale ».

:::methode Ce que le correcteur attend
- Le calcul par la définition montré **ligne à ligne**, avec le rappel « $h \neq 0$ » avant la simplification.
- La tangente avec $g(2)$ **et** $g'(2)$, puis l'équation développée et vérifiée.
- La phrase « $g$ est dérivable donc continue » (polynôme).
- L'application de Rolle avec la **vérification des trois hypothèses** : ici on attend explicitement « $g(0) \neq g(3)$, Rolle ne s'applique pas sur $[0\,;\,3]$ ».
- Un tableau de variations complet et une conclusion en nombre de solutions.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points ($2 + 2$). Partie B : 3 points ($1 + 2$). Partie C : 3 points ($1 + 1{,}5 + 0{,}5$). L'absence de tableau de signes de $g'$ coûte la moitié des points de la question 5.
:::
