---
titre: Vecteur vitesse et reconnaissance de coniques
difficulte: 1
type: entrainement
indices:
  - Dérive chaque composante pour obtenir le vecteur vitesse.
  - Pour éliminer le paramètre, exprime t en fonction de x puis reporte dans y.
  - Pour reconnaître la conique, mets l'équation sous forme standard en complétant les carrés.
---

## Énoncé

On considère la courbe $\mathcal{C}$ définie par :

$$
\begin{cases}
x = 2t + 1 \\
y = t^2 - 3
\end{cases}
\qquad t \in \mathbb{R}.
$$

1. Calculer le vecteur vitesse $\vec{v}(t)$ et déterminer si la courbe admet un point singulier.
2. Déterminer l'équation cartésienne de $\mathcal{C}$, puis préciser le sens de parcours lorsque $t$ augmente à partir de $t = 0$.

On considère ensuite les équations suivantes :

3. $4x^2 + 9y^2 = 36$ : reconnaître la conique, donner $a$, $b$, $c$ et l'excentricité.
4. $y^2 - 4x = 0$ : reconnaître la conique et donner son foyer.

## Solution

**1. Vecteur vitesse.**

$f(t) = 2t + 1$ donc $f'(t) = 2$ ; $g(t) = t^2 - 3$ donc $g'(t) = 2t$ :

$$
\vec{v}(t) = (2\,;\,2t).
$$

Un point singulier exigerait $2 = 0$ **et** $2t = 0$ simultanément : c'est impossible. La courbe n'admet **aucun point singulier** (le point ne s'arrête jamais).

**2. Équation cartésienne.**

De $x = 2t + 1$ on tire $t = \dfrac{x - 1}{2}$. En reportant dans $y$ :

$$
y = \left(\frac{x-1}{2}\right)^2 - 3 = \frac{(x-1)^2}{4} - 3.
$$

Soit

$$
y = \frac{(x-1)^2}{4} - 3, \qquad \text{équivalente à} \qquad (x-1)^2 = 4(y + 3).
$$

C'est la courbe d'une **parabole** de sommet $(1\,;\,-3)$ tournée vers le haut.

**Sens de parcours** : $x = 2t + 1$ est croissante en $t$ : lorsque $t$ augmente, le point va **de gauche à droite**. Le vecteur vitesse $\vec{v} = (2\,;\,2t)$ a toujours une première composante positive : le sens est bien vers la droite, avec une composante verticale négative pour $t < 0$ (descente), nulle en $t = 0$ (sommet de la parabole, tangente horizontale), positive pour $t > 0$ (montée).

**3. $4x^2 + 9y^2 = 36$.**

On divise par $36$ :

$$
\frac{x^2}{9} + \frac{y^2}{4} = 1.
$$

Les coefficients sont de **même signe** : c'est une **ellipse** avec

$$
a^2 = 9 \Rightarrow a = 3, \qquad b^2 = 4 \Rightarrow b = 2,
$$

$$
c = \sqrt{a^2 - b^2} = \sqrt{9 - 4} = \sqrt{5}, \qquad
e = \frac{c}{a} = \frac{\sqrt{5}}{3} \approx 0{,}75.
$$

Foyers : $(\pm\sqrt{5}\,;\,0)$.

**4. $y^2 - 4x = 0$.**

$$
y^2 = 4x = 2px \quad \text{avec } p = 2.
$$

Un seul terme du second degré : c'est une **parabole** ouverte vers la droite, de paramètre $p = 2$. Son foyer est :

$$
F\left(\frac{p}{2}\,;\,0\right) = F(1\,;\,0),
$$

et sa directrice a pour équation $x = -\dfrac{p}{2} = -1$.

:::remarque Réflexe
Avant tout calcul, **identifier le type** de courbe (par dérivation ou par reconnaissance d'équation) : cela dicte la méthode et les formules à utiliser. Une parabole n'a pas de centre ni d'excentricité à calculer — juste $p$.
:::
