---
titre: Sujet type BAC — Barycentres dans un triangle et applications affines
difficulte: 3
type: bac
annee: 2023
indices:
  - Écris toujours la formule avec la somme des masses au dénominateur avant tout calcul numérique.
  - Pour regrouper A et B dans la question 2, calcule d'abord le barycentre partiel I puis utilise l'associativité.
  - Pour la collinéarité A, G, J, calcule les vecteurs AG et GJ et compare-les.
  - Pour la translation, applique simplement (x + 1 ; y + 2) à chaque point puis compare au barycentre des images.
---

## Énoncé

Dans un repère orthonormé $(O\,;\,\vec{i},\vec{j})$, on considère le triangle $ABC$ avec

$$
A(0\,;\,0), \qquad B(6\,;\,0), \qquad C(2\,;\,4).
$$

**Partie A — Barycentres calculés**

1. Soit $I$ le barycentre de $(A\,;\,2)$ et $(B\,;\,1)$. Calculer les coordonnées de $I$.
2. Soit $M$ le barycentre de $(A\,;\,2)$, $(B\,;\,1)$ et $(C\,;\,1)$. Calculer les coordonnées de $M$ directement, puis vérifier que

$$
M = \frac{3I + C}{4}
$$

en utilisant l'associativité du barycentre.

**Partie B — Centre de gravité et médiane**

3. Soit $G$ le barycentre de $(A\,;\,1)$, $(B\,;\,1)$, $(C\,;\,1)$ (centre de gravité du triangle). Calculer ses coordonnées.
4. Soit $J$ le milieu de $[BC]$. Calculer les coordonnées de $J$, puis montrer que les points $A$, $G$ et $J$ sont alignés et que

$$
\overrightarrow{AG} = 2\, \overrightarrow{GJ}.
$$

**Partie C — Conservation par une application affine**

5. Soit $t$ la translation de vecteur $(1\,;\,2)$. Calculer $t(G)$, puis montrer que $t(G)$ est le barycentre de $t(A)$, $t(B)$, $t(C)$ avec les masses $1$, $1$, $1$.
6. Soit $h$ l'homothétie de centre $A$ et de rapport $3$ (donc $h(x\,;\,y) = (3x\,;\,3y)$). Calculer $h(G)$ et $h(C)$, puis vérifier que $h(G)$ est le barycentre de $h(A)$, $h(B)$, $h(C)$ avec les masses $1$, $1$, $1$.

## Solution

**Partie A**

**1.** Masse totale : $2 + 1 = 3 \neq 0$.

$$
x_I = \frac{2 \times 0 + 1 \times 6}{3} = \frac{6}{3} = 2, \qquad
y_I = \frac{2 \times 0 + 1 \times 0}{3} = 0.
$$

$$
I(2\,;\,0).
$$

**2.** Masse totale : $2 + 1 + 1 = 4$.

$$
x_M = \frac{2 \times 0 + 1 \times 6 + 1 \times 2}{4} = \frac{8}{4} = 2, \qquad
y_M = \frac{2 \times 0 + 1 \times 0 + 1 \times 4}{4} = \frac{4}{4} = 1.
$$

$$
M(2\,;\,1).
$$

**Vérification par associativité :** en regroupant $A$ et $B$, leur barycentre partiel est $I$ (calculé en 1) et la masse totale du lot est $2 + 1 = 3$. Le barycentre de $I$ (masse $3$) et de $C$ (masse $1$) est donc

$$
\frac{3I + C}{4} = \left(\frac{3 \times 2 + 2}{4}\,;\,\frac{3 \times 0 + 4}{4}\right) = \left(\frac{8}{4}\,;\,\frac{4}{4}\right) = (2\,;\,1) = M. \;\checkmark
$$

Par unicité du barycentre, les deux écritures désignent bien le même point.

**Partie B**

**3.** Masse totale : $3$.

$$
x_G = \frac{0 + 6 + 2}{3} = \frac{8}{3}, \qquad
y_G = \frac{0 + 0 + 4}{3} = \frac{4}{3}.
$$

$$
G\left(\frac{8}{3}\,;\,\frac{4}{3}\right).
$$

**4.** $J$ milieu de $[BC]$ :

$$
x_J = \frac{6 + 2}{2} = 4, \qquad
y_J = \frac{0 + 4}{2} = 2, \qquad J(4\,;\,2).
$$

Vecteurs :

$$
\overrightarrow{AG} = \left(\frac{8}{3} - 0\,;\,\frac{4}{3} - 0\right) = \left(\frac{8}{3}\,;\,\frac{4}{3}\right),
$$

$$
\overrightarrow{GJ} = \left(4 - \frac{8}{3}\,;\,2 - \frac{4}{3}\right) = \left(\frac{4}{3}\,;\,\frac{2}{3}\right).
$$

Or

$$
2\, \overrightarrow{GJ} = \left(\frac{8}{3}\,;\,\frac{4}{3}\right) = \overrightarrow{AG}.
$$

Donc $\overrightarrow{AG} = 2\,\overrightarrow{GJ}$ : les vecteurs sont proportionnels avec le **même point intermédiaire** $G$, donc $A$, $G$, $J$ sont alignés, et $G$ divise le segment $[AJ]$ dans le rapport $2:1$. C'est bien la propriété des médianes (le centre de gravité divise chaque médiane dans le rapport $2:1$ depuis le sommet).

**Partie C**

**5.** $t(G) = \left(\dfrac{8}{3} + 1\,;\,\frac{4}{3} + 2\right) = \left(\dfrac{11}{3}\,;\,\dfrac{10}{3}\right)$.

Images :

$$
t(A) = (1\,;\,2), \qquad t(B) = (7\,;\,2), \qquad t(C) = (3\,;\,6).
$$

Barycentre de ces trois points (masses $1$, $1$, $1$, somme $3$) :

$$
x = \frac{1 + 7 + 3}{3} = \frac{11}{3}, \qquad
y = \frac{2 + 2 + 6}{3} = \frac{10}{3}.
$$

On retrouve exactement $t(G)$ : la translation conserve le barycentre ✓.

**6.** $h(G) = \left(3 \times \dfrac{8}{3}\,;\,3 \times \dfrac{4}{3}\right) = (8\,;\,4)$ et $h(C) = (6\,;\,12)$.

Images des sommets :

$$
h(A) = (0\,;\,0), \qquad h(B) = (18\,;\,0), \qquad h(C) = (6\,;\,12).
$$

Barycentre (masses $1$, $1$, $1$) :

$$
x = \frac{0 + 18 + 6}{3} = \frac{24}{3} = 8, \qquad
y = \frac{0 + 0 + 12}{3} = \frac{12}{3} = 4.
$$

On retrouve $h(G) = (8\,;\,4)$ ✓ : l'homothétie, application affine, conserve le barycentre.

:::methode Ce que le correcteur attend
- Formules avec la **somme des masses** écrites avant les calculs numériques.
- Associativité explicitée (lot $\{A\,;\,B\}$ avec masse totale $3$) et conclusion par **unicité** du barycentre.
- Alignement démontré par comparaison de vecteurs proportionnels **et** point commun.
- Pour les applications affines : calcul des images, puis calcul indépendant du barycentre des images, et comparaison.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points (1,5 + 1,5). Partie B : 4 points (2 + 2). Partie C : 3 points (1,5 + 1,5). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
