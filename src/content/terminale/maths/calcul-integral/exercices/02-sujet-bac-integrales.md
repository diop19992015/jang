---
titre: Sujet type BAC — Intégrales et calcul d’aires
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour chaque intégrale, écris la primitive avant de remplacer les bornes.
  - Pour une aire avec changement de signe, découpe l'intégrale au point où la fonction s'annule.
  - Si une question contient un paramètre, calcule l'intégrale en fonction de ce paramètre puis résous l'équation.
---

## Énoncé

On considère la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = x^2 - 4$.

**Partie A — Intégrales définies**

1. Calculer $\displaystyle\int_0^3 (x^2 - 4)\,dx$.
2. Calculer $\displaystyle\int_0^2 (4 - x^2)\,dx$.
3. On note $F(x) = \displaystyle\int_0^x (t^2 - 4)\,dt$. Justifier que $F'(x) = x^2 - 4$ pour tout $x$, puis calculer $F(2)$ et $F(-2)$.

**Partie B — Calcul d'aires**

4. Déterminer les points d'intersection de la courbe de $f$ avec l'axe des abscisses.
5. Calculer l'aire $S_1$ du domaine compris entre la courbe de $f$ et l'axe des abscisses sur l'intervalle $[-2\,;\,2]$.
6. Calculer l'aire $S_2$ comprise entre la courbe de $f$, l'axe des abscisses et les droites $x = 0$, $x = 3$.

**Partie C — Paramètre**

7. Déterminer la valeur du réel $a$ tel que $\displaystyle\int_1^a (2x - 3)\,dx = 0$ avec $a > 1$.

## Solution

**Partie A**

**1. Calcul de $\displaystyle\int_0^3 (x^2 - 4)\,dx$.**

Une primitive de $x^2 - 4$ est $\dfrac{x^3}{3} - 4x$. Donc

$$
\int_0^3 (x^2 - 4)\,dx = \left[\frac{x^3}{3} - 4x\right]_0^3 = \left(\frac{27}{3} - 12\right) - (0 - 0) = 9 - 12 = -3.
$$

La valeur est **négative** : sur $[0\,;\,2]$, $x^2 - 4$ est négatif, et sur $]2\,;\,3]$ il est positif ; la somme signée est ici égale à $-3$. Ce n'est donc **pas** une aire : une aire ne peut pas être négative.

**2. Calcul de $\displaystyle\int_0^2 (4 - x^2)\,dx$.**

Une primitive de $4 - x^2$ est $4x - \dfrac{x^3}{3}$ :

$$
\int_0^2 (4 - x^2)\,dx = \left[4x - \frac{x^3}{3}\right]_0^2 = \left(8 - \frac{8}{3}\right) - 0 = \frac{24 - 8}{3} = \frac{16}{3}.
$$

**3. Fonction $F(x) = \displaystyle\int_0^x (t^2 - 4)\,dt$.**

Justification par la **formule de Leibniz** : si $F(x) = \int_0^x f(t)\,dt$ avec $f$ continue, alors

$$
F'(x) = f(x) = x^2 - 4 \quad \text{pour tout } x \in \mathbb{R}.
$$

*(Vérification directe : $F(x) = \dfrac{x^3}{3} - 4x$, donc $F'(x) = x^2 - 4$. ✓)*

$$
F(2) = \frac{8}{3} - 8 = \frac{8 - 24}{3} = -\frac{16}{3}, \qquad
F(-2) = -\frac{8}{3} + 8 = \frac{-8 + 24}{3} = \frac{16}{3}.
$$

Remarque : $F(-2) = -F(2)$, ce qui se comprend car $f$ est **paire** : $F$ est donc impaire.

**Partie B**

**4. Intersections avec l'axe des abscisses.**

$$
f(x) = 0 \iff x^2 - 4 = 0 \iff (x-2)(x+2) = 0 \iff x = -2 \;\text{ ou }\; x = 2.
$$

Les points d'intersection sont $A(-2\,;\,0)$ et $B(2\,;\,0)$.

**5. Aire $S_1$ sur $[-2\,;\,2]$.**

Sur $[-2\,;\,2]$, on a $x^2 \leq 4$, donc $f(x) = x^2 - 4 \leq 0$ : la courbe est **sous** l'axe des abscisses. L'aire vaut l'intégrale de $-f$, soit $4 - x^2$ :

$$
S_1 = \int_{-2}^{2} (4 - x^2)\,dx.
$$

$4 - x^2$ est une fonction **paire**, donc on peut utiliser la symétrie :

$$
S_1 = 2 \int_0^2 (4 - x^2)\,dx = 2 \times \frac{16}{3} = \frac{32}{3} \approx 10{,}67.
$$

(On retrouve le résultat de la question 2 multiplié par $2$.)

$$
S_1 = \frac{32}{3} \;\text{unités carrées}
$$

**6. Aire $S_2$ sur $[0\,;\,3]$.**

Sur $[0\,;\,3]$, la fonction change de signe en $x = 2$ :

- $f(x) \leq 0$ sur $[0\,;\,2]$ : aire $= \displaystyle\int_0^2 (4 - x^2)\,dx = \dfrac{16}{3}$ (question 2) ;
- $f(x) \geq 0$ sur $[2\,;\,3]$ : aire $= \displaystyle\int_2^3 (x^2 - 4)\,dx$.

Calculons ce second morceau :

$$
\int_2^3 (x^2 - 4)\,dx = \left[\frac{x^3}{3} - 4x\right]_2^3 = (9 - 12) - \left(\frac{8}{3} - 8\right) = -3 - \left(-\frac{16}{3}\right) = -3 + \frac{16}{3} = \frac{7}{3}.
$$

$$
S_2 = \frac{16}{3} + \frac{7}{3} = \frac{23}{3} \approx 7{,}67 \;\text{unités carrées}
$$

*Contrôle :* $S_2 > 0$ ✓ et l'intégrale signée $\int_0^3 (x^2-4)\,dx = -3$ correspond bien à $\dfrac{16}{3} \times (-1) + \dfrac{7}{3} = -\dfrac{16}{3} + \dfrac{7}{3} = -3$ ✓.

**Partie C**

**7. Paramètre $a$ avec $\displaystyle\int_1^a (2x - 3)\,dx = 0$.**

Une primitive de $2x - 3$ est $x^2 - 3x$ :

$$
\int_1^a (2x - 3)\,dx = \left[x^2 - 3x\right]_1^a = (a^2 - 3a) - (1 - 3) = a^2 - 3a + 2.
$$

L'équation devient

$$
a^2 - 3a + 2 = 0 \iff (a - 1)(a - 2) = 0 \iff a = 1 \;\text{ ou }\; a = 2.
$$

La condition $a > 1$ élimine $a = 1$ :

$$
\boxed{a = 2}
$$

*Interprétation :* sur $[1\,;\,2]$, la fonction $2x - 3$ est négative (l'intégrale vaut $-2$), et sur $[2\,;\,a]$ elle est positive. Avec $a = 2$ : $\int_1^2 (2x-3)\,dx = (4 - 6) - (1 - 3) = -2 + 2 = 0$ ✓ — l'équation $a^2 - 3a + 2 = 0$ admet bien $a = 2$ comme unique solution $> 1$.

:::methode Ce que le correcteur attend
- Chaque primitive **écrite** avant le remplacement des bornes.
- La distinction explicite entre **intégrale signée** et **aire** (« $f \leq 0$ donc on intègre $4 - x^2$ »).
- Le découpage aux changements de signe avec les deux intégrales calculées séparément.
- La formule de Leibniz citée pour justifier $F'(x) = f(x)$.
- La condition $a > 1$ utilisée pour éliminer une racine.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3,5 points ($1 + 1 + 1{,}5$). Partie B : 4 points ($1 + 1{,}5 + 1{,}5$). Partie C : 2,5 points ($1 + 1{,}5$). Présenter $\int_0^3 (x^2-4)\,dx$ comme « une aire de $-3$ » fait perdre le point de la question 1.
:::
