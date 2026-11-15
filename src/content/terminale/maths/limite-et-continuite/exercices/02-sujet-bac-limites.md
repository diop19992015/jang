---
titre: Sujet type BAC — Limites, continuité et encadrement
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour chaque limite, dis d'abord quelle forme tu obtiens par substitution (0/0, ∞/∞…).
  - Rédige la continuité en trois temps : f(a) existe, la limite existe, elles sont égales.
  - Pour l'encadrement, calcule les valeurs aux bornes et vérifie qu'elles ont des signes contraires.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R} \setminus \{1\}$ par

$$
f(x) = \frac{x^3 - 1}{x - 1}.
$$

**Partie A — Limites**

1. Calculer $\lim\limits_{x \to 1} f(x)$, en justifiant la méthode employée.
2. Calculer $\lim\limits_{x \to +\infty} f(x)$.
3. Calculer $\lim\limits_{x \to -\infty} \dfrac{f(x)}{x^2}$.

**Partie B — Continuité**

4. Soit $g$ la fonction définie sur $\mathbb{R}$ par $g(x) = f(x)$ si $x \neq 1$ et $g(1) = 3$. Montrer que $g$ est continue en $1$.
5. Soit $h$ la fonction définie sur $\mathbb{R}$ par $h(x) = f(x)$ si $x \neq 1$ et $h(1) = 0$. Justifier que $h$ est discontinue en $1$.

**Partie C — Existence de solution**

6. Montrer que la fonction $\varphi$ définie sur $[0\,;\,1]$ par $\varphi(x) = g(x) - 4x$ est continue sur $[0\,;\,1]$.
7. Justifier que l'équation $f(x) = 4x$ admet au moins une solution dans $[0\,;\,1]$.

## Solution

**Partie A**

**1. $\lim\limits_{x \to 1} f(x)$.**

En substituant $x = 1$ : $\dfrac{1 - 1}{1 - 1} = \dfrac{0}{0}$ : forme indéterminée, substitution interdite.

On factorise le numérateur (identité remarquable $a^3 - b^3$) :

$$
x^3 - 1 = (x - 1)(x^2 + x + 1).
$$

Donc, pour $x \neq 1$ :

$$
f(x) = \frac{(x-1)(x^2 + x + 1)}{x - 1} = x^2 + x + 1.
$$

Puisque $x \neq 1$ quand $x$ tend vers $1$ :

$$
\lim_{x \to 1} f(x) = 1^2 + 1 + 1 = 3.
$$

**2. $\lim\limits_{x \to +\infty} f(x)$.**

Pour $x \neq 1$, $f(x) = x^2 + x + 1$ : polynôme de degré $2$ dont le coefficient dominant $1$ est positif, donc

$$
\lim_{x \to +\infty} f(x) = +\infty.
$$

**3. $\lim\limits_{x \to -\infty} \dfrac{f(x)}{x^2}$.**

$$
\frac{f(x)}{x^2} = \frac{x^2 + x + 1}{x^2} = 1 + \frac{1}{x} + \frac{1}{x^2}.
$$

Quand $x \to -\infty$, $\dfrac{1}{x} \to 0$ et $\dfrac{1}{x^2} \to 0$, donc par algèbre des limites :

$$
\lim_{x \to -\infty} \frac{f(x)}{x^2} = 1 + 0 + 0 = 1.
$$

**Partie B**

**4. Continuité de $g$ en $1$.**

1. $1$ appartient au domaine de $g$ et $g(1) = 3$ : la valeur existe.
2. La limite existe : $\lim\limits_{x \to 1} g(x) = \lim\limits_{x \to 1} f(x) = 3$ (question 1).
3. $\lim\limits_{x \to 1} g(x) = 3 = g(1)$ : la condition de continuité est remplie.

Donc $g$ est **continue en $1$** (c'est le prolongement naturel de $f$ : il « bouche le trou »).

**5. Discontinuité de $h$ en $1$.**

1. $h(1) = 0$ existe.
2. $\lim\limits_{x \to 1} h(x) = \lim\limits_{x \to 1} f(x) = 3$ (la fonction coïncide avec $f$ en dehors de $1$).
3. $3 \neq 0 = h(1)$ : la condition $\lim_{x \to 1} h(x) = h(1)$ échoue.

$h$ est donc **discontinue en $1$** : c'est une discontinuité évitable, car la limite existe mais diffère de la valeur en $1$.

**Partie C**

**6. Continuité de $\varphi$ sur $[0\,;\,1]$.**

- Sur $]0\,;\,1[$ : $\varphi(x) = g(x) - 4x = x^2 + x + 1 - 4x = x^2 - 3x + 1$, qui est un polynôme : continue.
- En $x = 0$ : $g(0) = f(0) = \dfrac{0 - 1}{0 - 1} = 1$, donc $\varphi(0) = 1 - 0 = 1$. La fonction $g$ étant un polynôme en $0$ (elle vaut $x^2+x+1$ au voisinage de $0$), elle y est continue.
- En $x = 1$ : $\varphi(1) = g(1) - 4 = 3 - 4 = -1$ ; d'après la question 4, $g$ est continue en $1$ et $x \mapsto 4x$ est continue : la différence est continue en $1$.

Une somme, une différence ou un produit de fonctions continues est continue : $\varphi$ est continue en chaque point de $[0\,;\,1]$, donc **continue sur $[0\,;\,1]$**.

**7. Existence d'une solution de $f(x) = 4x$ dans $[0\,;\,1]$.**

Calculons $\varphi$ aux bornes de l'intervalle :

$$
\varphi(0) = g(0) - 0 = 1 > 0
$$

$$
\varphi(1) = g(1) - 4 = 3 - 4 = -1 < 0.
$$

$\varphi$ est continue sur $[0\,;\,1]$ et $0$ est compris entre $\varphi(0) = 1$ et $\varphi(1) = -1$ (valeurs de signes contraires). Par le **théorème des valeurs intermédiaires**, il existe $c \in \,]0\,;\,1[$ tel que

$$
\varphi(c) = 0, \qquad \text{c'est-à-dire} \qquad g(c) = 4c.
$$

Comme $c \neq 1$, on a $g(c) = f(c)$, donc l'équation $f(x) = 4x$ admet au moins une solution $c$ dans $]0\,;\,1[$, donc dans $[0\,;\,1]$.

*(Remarque : $f(x) = 4x$ devient $x^2 + x + 1 = 4x$, soit $x^2 - 3x + 1 = 0$, dont le discriminant $9 - 4 = 5 > 0$ donne $x = \dfrac{3 \pm \sqrt{5}}{2}$. La solution $\dfrac{3 - \sqrt{5}}{2} \approx 0{,}38$ est bien dans $]0\,;\,1[$ : le résultat est confirmé.)*

:::methode Ce que le correcteur attend
- Chaque forme indéterminée **nommée** avant la méthode (factorisation ou division par la puissance dominante).
- La continuité rédigée en **trois** points : existence de la valeur, existence de la limite, égalité des deux.
- Le théorème des valeurs intermédiaires cité avec ses hypothèses : fonction continue sur un intervalle fermé, valeurs aux bornes de signes contraires.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points ($2 + 1 + 1$). Partie B : 3 points ($1{,}5 + 1{,}5$). Partie C : 3 points ($1 + 2$). Une limite juste sans factorisation montrée perd la moitié des points de la question 1.
:::
