---
titre: Calculer des primitives et déterminer une primitive particulière
difficulte: 1
type: entrainement
indices:
  - Utilise le tableau des primitives usuelles (x^n, 1/x, e^{kx}, sin, cos).
  - Pour les composées, cherche u' comme facteur et ajoute le facteur manquant.
  - Pour la condition initiale, détermine K après avoir écrit la générale.
---

## Énoncé

1. Calculer les primitives suivantes sur $\mathbb{R}$ (sauf restriction) :
   - $\displaystyle\int (5x^4 - 3x^2 + 2)\, dx$ ;
   - $\displaystyle\int \frac{4}{x}\, dx$ sur $]0\,;\\,+\infty[$ ;
   - $\displaystyle\int \sin\!\left(\frac{x}{2}\right) dx$ ;
   - $\displaystyle\int \frac{x}{1 + x^2}\, dx$.

2. Soit $f(x) = 4x^3 + 1$. Déterminer la primitive $F$ de $f$ telle que $F(1) = 3$.

3. Soit $g(x) = 2x\, e^{x^2}$. Déterminer une primitive de $g$ en posant $u = x^2$, puis vérifier par dérivation.

4. Encadrer $\displaystyle\int_0^1 e^{-x}\, dx$ en utilisant $0 \leq x \leq 1 \Rightarrow e^{-1} \leq e^{-x} \leq 1$.

## Solution

**1. Calculs de primitives.**

- $\displaystyle\int (5x^4 - 3x^2 + 2)\, dx$ : on dérive terme à terme, en utilisant $\displaystyle\int x^n = \dfrac{x^{n+1}}{n+1}$ :

$$
\int (5x^4 - 3x^2 + 2)\, dx = 5 \cdot \frac{x^5}{5} - 3 \cdot \frac{x^3}{3} + 2x + K = x^5 - x^3 + 2x + K.
$$

Vérification : $(x^5 - x^3 + 2x + K)' = 5x^4 - 3x^2 + 2$ ✓.

- $\displaystyle\int \frac{4}{x}\, dx$ sur $]0\,;\\,+\infty[$ : la primitive de $\dfrac{1}{x}$ est $\ln x$ (ici $x > 0$, la valeur absolue est inutile) :

$$
\int \frac{4}{x}\, dx = 4 \ln x + K.
$$

- $\displaystyle\int \sin\!\left(\dfrac{x}{2}\right) dx$ : on cherche $u = \dfrac{x}{2}$, $u' = \dfrac{1}{2}$. Il manque ce facteur :

$$
\int \sin\!\left(\frac{x}{2}\right) dx = -2 \cos\!\left(\frac{x}{2}\right) + K.
$$

Vérification : $\left(-2 \cos \dfrac{x}{2}\right)' = -2 \cdot \left(-\sin \dfrac{x}{2}\right) \cdot \dfrac{1}{2} = \sin \dfrac{x}{2}$ ✓.

- $\displaystyle\int \frac{x}{1 + x^2}\, dx$ : le numérateur est (proportionnel à) la dérivée du dénominateur : $(1+x^2)' = 2x$, donc il manque $\dfrac{1}{2}$ :

$$
\int \frac{x}{1 + x^2}\, dx = \frac{1}{2} \ln(1 + x^2) + K.
$$

(Le dénominateur est toujours positif : pas de valeur absolue nécessaire.)

**2. Primitive avec condition initiale.**

Générale :

$$
F(x) = \int (4x^3 + 1)\, dx = x^4 + x + K.
$$

Condition $F(1) = 3$ :

$$
1^4 + 1 + K = 3 \iff 2 + K = 3 \iff K = 1.
$$

$$
F(x) = x^4 + x + 1.
$$

**Vérification :** $F'(x) = 4x^3 + 1 = f(x)$ ✓ et $F(1) = 1 + 1 + 1 = 3$ ✓.

**3. Primitive de $g(x) = 2x\, e^{x^2}$.**

Posons $u = x^2$ : $u' = 2x$, donc $g(x) = e^u \cdot u'$. D'après la règle composée :

$$
\int 2x\, e^{x^2}\, dx = e^{x^2} + K.
$$

**Vérification :** $(e^{x^2})' = e^{x^2} \cdot 2x = 2x\, e^{x^2} = g(x)$ ✓.

**4. Encadrement d'une aire.**

Sur $[0\,;\,1]$ : $x \geq 0$ donc $-x \leq 0$ et $e^{-x} \leq e^0 = 1$ ; de plus $e^{-x} \geq e^{-1}$ (fonction décroissante). Donc $e^{-1} \leq e^{-x} \leq 1$ sur $[0\,;\,1]$.

En multipliant par la longueur $1 - 0 = 1$ :

$$
\frac{1}{e} \times 1 \leq \int_0^1 e^{-x}\, dx \leq 1 \times 1,
$$

soit

$$
\frac{1}{e} \leq \int_0^1 e^{-x}\, dx \leq 1.
$$

*Contrôle par le calcul exact :* une primitive de $e^{-x}$ est $-e^{-x}$, donc

$$
\int_0^1 e^{-x}\, dx = \big[-e^{-x}\big]_0^1 = -e^{-1} + 1 = 1 - \frac{1}{e} \approx 0{,}632,
$$

bien entre $\dfrac{1}{e} \approx 0{,}368$ et $1$ ✓.

:::remarque Réflexe
Trois gestes : reconnaître le tableau, repérer $u'$ comme facteur (ajouter ce qui manque), puis **toujours vérifier en dérivant** — c'est gratuit et cela élimine les fautes de signe.
:::
