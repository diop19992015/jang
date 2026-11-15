---
titre: Sujet type BAC — Optimisation d'une aire
difficulte: 3
type: bac
annee: 2024
demo: true
indices:
  - Exprime l'aire du rectangle en fonction de la position du point sur l'axe.
  - Utilise le théorème de Thalès ou une équation de droite pour relier les deux dimensions.
  - Cherche le maximum d'une fonction polynôme du second degré, ou dérive.
---

## Énoncé

Dans un repère orthonormé $(O\,;\vec{i},\vec{j})$, on considère le triangle $OAB$ avec $O(0\,;\,0)$, $A(6\,;\,0)$ et $B(0\,;\,4)$.

Pour tout réel $x \in [0\,;\,6]$, on place le point $M(x\,;\,0)$ sur le segment $[OA]$. La parallèle à $(OB)$ passant par $M$ coupe $(AB)$ en $N$. On note $P$ le point de coordonnées $(x\,;\,y_N)$ et on construit le rectangle $OMPN$ (dont un sommet est $O$, un côté porté par $[OA]$).

**Partie A — Mise en équation**

1. Déterminer une équation de la droite $(AB)$.
2. Justifier que $N$ a pour coordonnées $\left(x\,;\,4-\dfrac{2}{3}x\right)$.
3. En déduire que l'aire du rectangle $OMPN$ s'écrit
$$
A(x)=4x-\frac{2}{3}x^2, \quad 0 \leq x \leq 6.
$$

**Partie B — Optimisation**

4. Calculer $A'(x)$ et étudier son signe sur $[0\,;\,6]$.
5. Dresser le tableau de variations de $A$ et déterminer la valeur de $x$ qui rend l'aire maximale.
6. Calculer l'aire maximale et préciser les dimensions du rectangle correspondant.

## Solution

**Partie A**

**1.** La droite $(AB)$ passe par $A(6\,;\,0)$ et $B(0\,;\,4)$. Son coefficient directeur vaut
$$
m=\frac{4-0}{0-6}=-\frac{2}{3}.
$$
Avec l'ordonnée à l'origine $4$ (point $B$), une équation est
$$
y=-\frac{2}{3}x+4.
$$

**2.** Le point $N$ est sur $(AB)$ et a la même abscisse que $M$, c'est-à-dire $x$. Son ordonnée est donc
$$
y_N=-\frac{2}{3}x+4 = 4-\frac{2}{3}x.
$$
On vérifie que pour $x=0$, $N=B(0\,;\,4)$, et pour $x=6$, $N=A(6\,;\,0)$.

**3.** Le rectangle $OMPN$ a pour largeur $OM=x$ et pour hauteur $MP=y_N=4-\dfrac{2}{3}x$. Son aire est donc
$$
A(x)=x\left(4-\frac{2}{3}x\right)=4x-\frac{2}{3}x^2.
$$
Pour $x\in[0\,;\,6]$, on a bien $y_N \geq 0$, donc l'aire est positive.

**Partie B**

**4.** $A$ est une fonction polynôme du second degré, dérivable sur $[0\,;\,6]$ :
$$
A'(x)=4-\frac{4}{3}x = \frac{4}{3}(3-x).
$$
Sur $[0\,;\,6]$ :
- $A'(x)>0$ pour $x<3$ ;
- $A'(x)=0$ pour $x=3$ ;
- $A'(x)<0$ pour $x>3$.

**5.** Tableau de variations :

| $x$ | $0$ | | $3$ | | $6$ |
| --- | --- | --- | --- | --- | --- |
| $A'(x)$ | | $+$ | $0$ | $-$ | |
| $A(x)$ | $0$ | $\nearrow$ | $6$ | $\searrow$ | $0$ |

Calculs : $A(0)=0$, $A(3)=12-\dfrac{2}{3}\times 9=12-6=6$, $A(6)=24-\dfrac{2}{3}\times 36=24-24=0$.

L'aire est donc **maximale pour $x=3$**.

**6.** L'aire maximale vaut $A(3)=6$ unités d'aire. Les dimensions du rectangle sont alors :
- largeur $OM=3$ ;
- hauteur $MP=4-\dfrac{2}{3}\times 3=4-2=2$.

Le rectangle optimal mesure $3$ sur $2$, soit une aire de $6$ unités d'aire. On peut vérifier que $N$ est alors le milieu de $[AB]$, puisque $N(3\,;\,2)$ et que $\frac{A+B}{2}=(3\,;\,2)$.

:::methode Ce que le correcteur attend
- Une équation de droite justifiée par le calcul du coefficient directeur.
- L'expression de l'aire avec l'intervalle de validité.
- La dérivée, son signe, le tableau complet avec les valeurs aux bornes.
- Une conclusion rédigée en lien avec le contexte géométrique.
:::
