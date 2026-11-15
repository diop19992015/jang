---
titre: Sujet type BAC — Mouvement paramétré et ellipse
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour la partie A, dérive chaque composante puis étudie le signe des composantes du vecteur vitesse.
  - Pour la vitesse, calcule la norme du vecteur vitesse ; elle n'est pas constante ici.
  - Pour la partie B, identifie a et b dans l'équation standard, puis calcule c et e.
  - Pour la dernière question, utilise MF + MF' = 2a sans calculer les distances une par une.
---

## Énoncé

Un point $M$ se déplace dans le plan muni d'un repère orthonormé $(O\,;\,\vec{i},\vec{j})$ selon le système :

$$
(\mathcal{S}) \qquad
\begin{cases}
x = t^2 - 4 \\
y = 2t
\end{cases}
\qquad t \in \mathbb{R}.
$$

**Partie A — Étude du mouvement**

1. Calculer le vecteur vitesse $\vec{v}(t)$ du point $M$ à l'instant $t$.
2. Déterminer les instants auxquels la tangente à la trajectoire est **horizontale**, puis ceux où elle est **verticale**.
3. Calculer la vitesse $\|\vec{v}(t)\|$ à l'instant $t = 1$.
4. Déterminer l'équation cartésienne de la trajectoire et préciser le sens de parcours.

**Partie B — Conique**

On considère l'ellipse $\mathcal{E}$ d'équation :

$$
\frac{x^2}{25} + \frac{y^2}{9} = 1.
$$

5. Déterminer les constantes $a$, $b$ et $c$ de $\mathcal{E}$, puis son excentricité $e$.
6. Donner les coordonnées des foyers et l'équation des directrices de $\mathcal{E}$.
7. Soit $P$ un point de $\mathcal{E}$ tel que $PF = 4$ (où $F(-c\,;\,0)$ est le foyer gauche). Calculer $PF'$, où $F'$ est le foyer droit.

## Solution

**Partie A**

**1.** On dérive chaque composante par rapport à $t$ :

$$
x'(t) = 2t, \qquad y'(t) = 2.
$$

Donc

$$
\vec{v}(t) = (2t\,;\,2).
$$

**2.** La tangente est **horizontale** lorsque la composante verticale du vecteur vitesse s'annule : $y'(t) = 2 = 0$ — **jamais**. Il n'y a **aucun instant** où la tangente est horizontale.

La tangente est **verticale** lorsque la composante horizontale s'annule : $x'(t) = 2t = 0$, soit

$$
t = 0.
$$

En $t = 0$ : $M(0)\,=\,(-4\,;\,0)$ et $\vec{v}(0) = (0\,;\,2)$ : la tangente est verticale et le point monte. C'est le point le plus à gauche de la trajectoire (le « sommet » de la parabole, où la tangente est en réalité verticale car l'axe est horizontal).

**3.** En $t = 1$ :

$$
\vec{v}(1) = (2\,;\,2), \qquad \|\vec{v}(1)\| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2} \approx 2{,}83.
$$

La vitesse à l'instant $t = 1$ est $2\sqrt{2}$ unités de longueur par unité de temps.

**4.** Élimination du paramètre : de $y = 2t$ on tire $t = \dfrac{y}{2}$, donc

$$
x = \left(\frac{y}{2}\right)^2 - 4 = \frac{y^2}{4} - 4,
$$

soit

$$
y^2 = 4(x + 4).
$$

C'est l'équation d'une **parabole** de sommet $(-4\,;\,0)$, ouverte vers la droite, de paramètre $p = 2$ (foyer $(-2\,;\,0)$, directrice $x = -6$).

**Sens de parcours** : $y = 2t$ est strictement croissante : le point monte **toujours**. Pour $t < 0$, $y < 0$ : le point parcourt la **branche inférieure** de la parabole, de droite à gauche (car $x = t^2 - 4$ décroît quand $t$ va de $-\infty$ à $0$), en montant vers le sommet $(-4\,;\,0)$ atteint en $t = 0$. Pour $t > 0$ : $y > 0$ et $x$ augmente — le point parcourt la **branche supérieure**, de gauche à droite, en s'éloignant indéfiniment. En résumé : le point arrive du bas à droite, passe par le sommet $(-4\,;\,0)$ puis repart vers le haut à droite.

**Partie B**

**5.** L'équation standard de l'ellipse est $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ avec $a > b$ :

$$
a^2 = 25 \Rightarrow a = 5, \qquad b^2 = 9 \Rightarrow b = 3.
$$

$$
c = \sqrt{a^2 - b^2} = \sqrt{25 - 9} = \sqrt{16} = 4.
$$

Excentricité :

$$
e = \frac{c}{a} = \frac{4}{5} = 0{,}8 \quad (< 1 \text{ : bien une ellipse}).
$$

**6.** Foyers : $F(-4\,;\,0)$ et $F'(4\,;\,0)$.

Directrices : $x = \pm\dfrac{a}{e} = \pm\dfrac{5}{4/5} = \pm\dfrac{25}{4}$, soit

$$
x = \frac{25}{4} = 6{,}25 \qquad \text{et} \qquad x = -6{,}25.
$$

**7.** Par la définition de l'ellipse, pour tout point $P$ de $\mathcal{E}$ :

$$
PF + PF' = 2a = 10.
$$

Avec $PF = 4$ :

$$
PF' = 10 - 4 = 6.
$$

**Contrôle :** $PF + PF' = 4 + 6 = 10 = 2a$ ✓. Notons que $PF = 4 = c$ : ce point est particulier (il est sur la directrice gauche ? non : $PF = 4$ simplement admissible car $a - c = 1 \leq PF \leq a + c = 9$).

:::methode Ce que le correcteur attend
- Vecteur vitesse **complet** $(x'\,;\,y')$ et non une seule composante.
- Conditions de tangente horizontale/verticale traduites par l'annulation de la bonne composante, avec réponse explicite « aucun instant » si elle n'a pas de solution.
- Vitesse = **norme** du vecteur vitesse, calculée numériquement.
- Équation cartésienne obtenue par élimination **et** reconnaissance de la conique.
- Éléments de l'ellipse ($a$, $b$, $c$, $e$, foyers, directrices) dans le bon ordre, et propriété $PF + PF' = 2a$ invoquée explicitement.
:::

:::remarque Barème indicatif (10 points)
Partie A : 5 points (1 + 1,5 + 1 + 1,5). Partie B : 5 points (2 + 1,5 + 1,5). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
