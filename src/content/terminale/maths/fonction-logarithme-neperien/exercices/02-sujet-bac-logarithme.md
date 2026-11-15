---
titre: Sujet type BAC — Étude de fonction logarithmique
difficulte: 3
type: bac
annee: 2023
indices:
  - Écris le domaine (positivité de l'argument) avant toute autre étape.
  - Pour la dérivée, applique (ln u)' = u'/u puis étudie le signe par un tableau.
  - Utilise les limites en 0+ et en +∞ pour compléter le tableau de variations.
---

## Énoncé

On considère la fonction $f$ définie sur $]1\,;\,+\infty[$ par

$$
f(x) = ln(x) - \frac{x - 1}{x}.
$$

**Partie A — Domaine et valeurs**

1. Justifier que le domaine de $f$ est $D = \,]1\,;\,+\infty[$.
2. Calculer $f(2)$ et $f(e)$.

**Partie B — Dérivée et variations**

3. Calculer $f'(x)$ et simplifier l'expression.
4. Étudier le signe de $f'(x)$ sur $]1\,;\,+\infty[$.
5. Dresser le tableau de variations de $f$ sur $]1\,;\,+\infty[$, en calculant $\lim\limits_{x \to 1^+} f(x)$ et $\lim\limits_{x \to +\infty} f(x)$.

**Partie C — Limites et inéquation**

6. Calculer $\lim\limits_{x \to +\infty} \dfrac{ln\,x}{x}$ et en déduire $\lim\limits_{x \to +\infty} f(x)$.
7. Résoudre dans $]1\,;\,+\infty[$ l'inéquation $ln(x) > \dfrac{x-1}{x}$.

**Partie D — Représentation graphique**

8. Représenter la courbe de $f$ en justifiant le comportement aux bornes du domaine.

## Solution

**Partie A**

**1. Domaine.**

$f$ est définie là où les deux termes ont un sens :

- $ln(x)$ impose $x > 0$ ;
- $\dfrac{x-1}{x}$ impose $x \neq 0$.

L'intersection de ces conditions est $x > 0$. L'énoncé restreint par ailleurs la fonction à l'intervalle $]1\,;\,+\infty[$, sur lequel les deux conditions sont satisfaites. Donc

$$
D = \,]1\,;\,+\infty[.
$$

*(Si l'on partait de la seule expression : le domaine naturel est $]0\,;\,+\infty[$.)*

**2. Calcul de $f(2)$ et $f(e)$.**

$$
f(2) = ln(2) - \frac{2-1}{2} = ln(2) - \frac{1}{2} \approx 0{,}693 - 0{,}5 = 0{,}193.
$$

$$
f(e) = ln(e) - \frac{e - 1}{e} = 1 - \left(1 - \frac{1}{e}\right) = \frac{1}{e} \approx 0{,}368.
$$

**Partie B**

**3. Dérivée de $f$.**

On réécrit d'abord le second terme : $\dfrac{x-1}{x} = 1 - \dfrac{1}{x}$, donc

$$
f(x) = ln(x) - 1 + \frac{1}{x}.
$$

On dérive terme à terme, avec $(ln\,x)' = \dfrac{1}{x}$ et $\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$ :

$$
f'(x) = \frac{1}{x} - \frac{1}{x^2} = \frac{x - 1}{x^2}.
$$

**4. Signe de $f'(x)$ sur $]1\,;\,+\infty[$.**

Pour $x > 1$ : $x - 1 > 0$ et $x^2 > 0$, donc

$$
f'(x) > 0 \quad \text{pour tout } x \in \,]1\,;\,+\infty[.
$$

(À l'origine $x = 1$, $f'(1) = 0$ : c'est le point de départ du domaine, hors du domaine ouvert $]1\,;\,+\infty[$.)

**5. Tableau de variations.**

Calcul des limites aux bornes :

$$
\lim_{x \to 1^+} f(x) = ln(1) - \frac{1-1}{1} = 0 - 0 = 0.
$$

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left(ln(x) - 1 + \frac{1}{x}\right) = +\infty - 1 + 0 = +\infty.
$$

(Le terme $ln(x) \to +\infty$ l'emporte ; $\dfrac{1}{x} \to 0$.)

| $x$ | $1$ | $+\infty$ |
| --- | --- | --- |
| $f'(x)$ | $+$ | $+$ |
| $f(x)$ | $0$ | $\nearrow$ | $+\infty$ |

$f$ est strictement croissante sur $]1\,;\,+\infty[$, de $0$ (non atteint, limite en $1^+$) à $+\infty$.

**Partie C**

**6. Limite de $\dfrac{ln\,x}{x}$ et de $f$.**

Par croissance comparée (la puissance $x$ domine le logarithme) :

$$
\lim_{x \to +\infty} \frac{ln\,x}{x} = 0.
$$

Pour la limite de $f$, on utilise l'algèbre des limites (en séparant les deux termes, les deux limites étant bien définies au sens $\pm\infty$) :

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} ln(x) - \lim_{x \to +\infty} 1 + \lim_{x \to +\infty} \frac{1}{x} = +\infty - 1 + 0 = +\infty.
$$

$$
\lim_{x \to +\infty} f(x) = +\infty.
$$

**7. Résolution de $ln(x) > \dfrac{x-1}{x}$ dans $]1\,;\,+\infty[$.**

L'inéquation s'écrit $f(x) > 0$. D'après le tableau de variations :

- $\lim\limits_{x \to 1^+} f(x) = 0$ et $f$ est strictement croissante sur $]1\,;\,+\infty[$ ;
- donc $f(x) > 0$ pour **tout** $x > 1$ (toute valeur strictement supérieure à la limite initiale $0$).

$$
S = \,]1\,;\,+\infty[
$$

Autrement dit, $ln(x) > \dfrac{x-1}{x}$ est vérifié pour tout réel $x$ strictement supérieur à $1$.

*Remarque :* l'inégalité $ln(x) \leq x - 1$ (valable pour tout $x > 0$) est différente de celle-ci : ici le second membre est $\dfrac{x-1}{x} < x - 1$ pour $x > 1$.

**Partie D**

**8. Représentation graphique.**

Éléments du tracé :

1. **Domaine** : la courbe existe seulement pour $x > 1$ : on trace un tiret vertical en $x = 1$ (limite du domaine).
2. **Comportement aux bornes** : en $1^+$, la courbe part du point $(1\,;\,0)$ (non atteint : point creux) ; en $+\infty$, elle monte indéfiniment vers $+\infty$.
3. **Variations** : strictement croissante sur tout l'intervalle, sans extremum.
4. **Points particuliers** : $P\left(e\,;\,\dfrac{1}{e}\right) \approx (2{,}72\,;\,0{,}37)$ et $Q(2\,;\,ln\,2 - 0{,}5) \approx (2\,;\,0{,}19)$.
5. La courbe reste **au-dessus de l'axe des abscisses** sur $]1\,;\,+\infty[$ (car $f(x) > 0$ d'après la question 7), en s'approchant de l'origine du domaine sans l'atteindre.

:::methode Ce que le correcteur attend
- Le domaine justifié par les **conditions de positivité** (argument de $ln$ strictement positif).
- La dérivée obtenue après **réécriture** de $\dfrac{x-1}{x}$ (ou par la formule du quotient) et simplifiée.
- Le tableau de variations avec les **limites aux bornes** calculées.
- La croissance comparée citée pour justifier les limites en $+\infty$.
- La conclusion de l'inéquation **liée** au tableau (« $f$ croissante de $0$ à $+\infty$ donc $f > 0$ »).
:::

:::remarque Barème indicatif (10 points)
Partie A : 2 points ($1 + 1$). Partie B : 3,5 points ($1 + 1 + 1{,}5$). Partie C : 2,5 points ($1 + 1{,}5$). Partie D : 2 points (limites : 1 ; comportement et points particuliers : 1).
:::
