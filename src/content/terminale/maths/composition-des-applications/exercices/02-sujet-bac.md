---
titre: Sujet type BAC — Fonctions composées, domaine et variations
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour la composition, commence par calculer (g∘f)(x) avant toute étude.
  - Le domaine se traite en deux temps : domaine de f, puis f(x) ∈ D_g.
  - Pour les variations, appuie-toi sur le tableau « deux sens identiques ou contraires ».
---

## Énoncé

On considère les fonctions $f$ et $g$ définies par

$$
f(x) = \sqrt{x+4} \qquad \text{et} \qquad g(x) = \frac{2}{x}.
$$

**Partie A — Composition et domaine**

1. Déterminer l'ensemble de définition $D_f$ de $f$ puis l'ensemble de définition $D_g$ de $g$.
2. Déterminer l'ensemble de définition $D$ de $h = g \circ f$ et calculer $h(x)$.
3. Calculer $h(5)$.

**Partie B — Étude de $h$**

4. Montrer que $h$ est strictement décroissante sur $D$.
5. Résoudre sur $D$ l'équation $h(x) = \dfrac{1}{2}$.

**Partie C — Rédaction**

6. Déterminer deux applications $u$ et $v$ telles que $h = u \circ v$ avec $v(x) = x + 4$.

## Solution

**Partie A**

**1. Domaines de $f$ et $g$.**

$f$ est définie là où la racine existe, c'est-à-dire $x + 4 \geq 0$ :

$$
D_f = [-4\,;\,+\infty[.
$$

$g$ est définie là où le dénominateur est non nul :

$$
D_g = \mathbb{R} \setminus \{0\}.
$$

**2. Domaine et expression de $h = g \circ f$.**

Il faut $x \in D_f$ et $f(x) \in D_g$, c'est-à-dire :

$$
x \geq -4 \quad \text{et} \quad \sqrt{x+4} \neq 0 \iff x \neq -4.
$$

Donc

$$
D = \,]-4\,;\,+\infty[.
$$

Sur $D$ :

$$
h(x) = g\big(f(x)\big) = \frac{2}{\sqrt{x+4}}.
$$

**3. Calcul de $h(5)$.**

$$
h(5) = \frac{2}{\sqrt{5+4}} = \frac{2}{\sqrt{9}} = \frac{2}{3}.
$$

**Partie B**

**4. Variations de $h$.**

Sur $D = \,]-4\,;\,+\infty[$, la fonction $x \mapsto x+4$ est strictement croissante, donc $x \mapsto \sqrt{x+4}$ est strictement croissante (la racine carrée est croissante sur $[0\,;\,+\infty[$), et elle est strictement positive sur $D$.

La fonction $t \mapsto \dfrac{2}{t}$ est strictement décroissante sur $]0\,;\,+\infty[$.

Comme $f$ est croissante et $g$ est décroissante (sens **contraires**), la composition $h = g \circ f$ est **strictement décroissante** sur $D$.

*Justification alternative par la dérivée :*

$$
h(x) = 2(x+4)^{-1/2} \implies h'(x) = -\frac{1}{(x+4)^{3/2}}.
$$

Pour $x > -4$, $(x+4)^{3/2} > 0$ donc $h'(x) < 0$ : $h$ est strictement décroissante sur $D$.

**5. Résolution de $h(x) = \dfrac{1}{2}$ sur $D$.**

$$
\frac{2}{\sqrt{x+4}} = \frac{1}{2} \iff \sqrt{x+4} = 4 \iff x + 4 = 16 \iff x = 12.
$$

La solution $x = 12$ appartient bien à $D = \,]-4\,;\,+\infty[$.

$$
S = \{12\}.
$$

Comme $h$ est strictement décroissante sur $D$, cette solution est **unique** : on peut l'affirmer sans même résoudre (théorème d'unicité d'une solution pour une fonction strictement monotone).

**Partie C**

**6. Décomposition avec $v(x) = x+4$.**

On cherche $h = u \circ v$, c'est-à-dire $h(x) = u(x+4)$.

Or $h(x) = \dfrac{2}{\sqrt{x+4}}$. En posant $t = x+4$, on reconnaît $u(t) = \dfrac{2}{\sqrt{t}}$, définie sur $]0\,;\,+\infty[$.

Donc :

$$
u(t) = \frac{2}{\sqrt{t}} \quad (t > 0), \qquad v(x) = x + 4.
$$

**Vérification :** $(u \circ v)(x) = u(x+4) = \dfrac{2}{\sqrt{x+4}} = h(x)$. ✓

:::methode Ce que le correcteur attend
- Le domaine justifié par **deux** conditions ($x \in D_f$ et $f(x) \in D_g$), avec l'exclusion du point $-4$ explicitée.
- Une variation de $h$ démontrée (composition de sens contraires **ou** signe de $h'$).
- Une résolution d'équation avec vérification de l'appartenance au domaine.
- Une décomposition $u \circ v$ **vérifiée** par recalcul.
:::

:::remarque Barème indicatif (10 points)
Partie A : 4 points (1 + 2 + 1). Partie B : 4 points (2 + 2). Partie C : 2 points. Une réponse justifiée sans calcul d'erreur partielle mérite la moitié des points de la question.
:::
