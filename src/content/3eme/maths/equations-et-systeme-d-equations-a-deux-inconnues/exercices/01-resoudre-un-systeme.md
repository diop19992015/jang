---
titre: Résoudre un système d’équations à deux inconnues
difficulte: 1
type: entrainement
indices:
  - Pour le premier système, exprime $y$ dans la première équation puis remplace dans la seconde.
  - Pour le second, résous chaque équation pour $y$ : tu pourras comparer les deux expressions.
  - N’oublie jamais de vérifier ton couple dans les deux équations.
---

## Énoncé

**1.** Résoudre le système $(S_1)$ suivant par la méthode **par substitution** :

$$
(S_1) : \left\{
\begin{aligned}
y &= 2x + 1 \\
3x + y &= 11
\end{aligned}
\right.
$$

**2.** Résoudre le système $(S_2)$ suivant par la méthode **par comparaison** :

$$
(S_2) : \left\{
\begin{aligned}
x + 2y &= 12 \\
3x - 2y &= 4
\end{aligned}
\right.
$$

**3.** Vérifier que le couple obtenu dans $(S_2)$ est bien solution de $(S_2)$.

**4.** Problème. Au marché de Sandaga, Aminata achète $2$ kg de riz et $1$ kg de sucre et elle paie $3500$ F. Moussa achète $1$ kg de riz et $1$ kg de sucre et il paie $2000$ F. Quel est le prix d’un kilogramme de riz et le prix d’un kilogramme de sucre ?

## Solution

**1. Résolution de $(S_1)$ par substitution.**

La première équation donne déjà $y$ en fonction de $x$ :
$$
y = 2x + 1
$$

On remplace cette expression de $y$ dans la seconde équation $3x + y = 11$ :
$$
3x + (2x + 1) = 11
$$
$$
3x + 2x + 1 = 11
$$
$$
5x = 11 - 1 = 10
$$
$$
x = \frac{10}{5} = 2
$$

On remplace $x = 2$ dans $y = 2x + 1$ :
$$
y = 2 \times 2 + 1 = 5
$$

**Solution :** $(x, y) = (2, 5)$.

**2. Résolution de $(S_2)$ par comparaison.**

Dans la première équation $x + 2y = 12$ :
$$
x = 12 - 2y
$$

On remplace dans la seconde $3x - 2y = 4$ :
$$
3(12 - 2y) - 2y = 4
$$
$$
36 - 6y - 2y = 4
$$
$$
36 - 8y = 4 \implies 8y = 32 \implies y = 4
$$

Puis $x = 12 - 2 \times 4 = 12 - 8 = 4$.

**Solution :** $(x, y) = (4, 4)$.

**3. Vérification.**

- Première équation : $x + 2y = 4 + 2 \times 4 = 4 + 8 = 12$ ✓
- Seconde équation : $3x - 2y = 3 \times 4 - 2 \times 4 = 12 - 8 = 4$ ✓

Le couple $(4, 4)$ vérifie les deux équations : c’est bien la solution du système.

**4. Mise en équations et résolution.**

Soient $r$ le prix d’un kilogramme de riz (en FCFA) et $s$ le prix d’un kilogramme de sucre (en FCFA).

D’après l’énoncé :
$$
\left\{
\begin{aligned}
2r + s &= 3500 \quad &(1)\\
r + s &= 2000 \quad &(2)
\end{aligned}
\right.
$$

Par substitution : dans $(2)$, $s = 2000 - r$. On remplace dans $(1)$ :
$$
2r + (2000 - r) = 3500
$$
$$
r + 2000 = 3500 \implies r = 1500
$$

Donc $s = 2000 - 1500 = 500$.

**Réponse :** un kilogramme de riz coûte $1500$ F et un kilogramme de sucre coûte $500$ F.

**Vérification :** $2 \times 1500 + 500 = 3500$ F ✓ et $1500 + 500 = 2000$ F ✓.
