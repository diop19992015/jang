## Courbes paramétrées

:::formule Vecteurs caractéristiques
$$
\begin{cases}
x = f(t) \\
y = g(t)
\end{cases}
\qquad
\vec{v}(t) = \big(f'(t)\,;\,g'(t)\big), \qquad
\vec{a}(t) = \big(f''(t)\,;\,g''(t)\big)
$$

- $\vec{v}(t)$ : tangent à la courbe, sens de parcours, module = vitesse instantanée.
- $\vec{a}(t)$ : variation de la vitesse.
- Point singulier : $f'(t) = 0$ **et** $g'(t) = 0$.
:::

:::formule Passer du paramétrique au cartésien
Exprimer $t$ en fonction de $x$ (ou utiliser $\cos^2 t + \sin^2 t = 1$), reporter dans $y$, puis **restreindre** au domaine de $t$.
:::

:::formule Cercle
$$
\begin{cases}
x = a + R\cos t \\
y = b + R\sin t
\end{cases}
\;\Longrightarrow\;
(x-a)^2 + (y-b)^2 = R^2
$$

$\vec{v} = (-R\sin t\,;\,R\cos t)$, $\|\vec{v}\| = R$ : mouvement uniforme.
:::

:::remarque Sens de parcours
Le signe de $f'(t)$ donne le sens de $x$ (croissant/décroissant), celui de $g'(t)$ le sens de $y$. En $t = 0$ sur le cercle : le point va vers le haut si $R > 0$ (sens direct).
:::

## Coniques — définition

:::formule Foyer et directrice
$$
\frac{MF}{d(M\,;\,\Delta)} = e \qquad
\begin{cases}
e = 0 & \text{cercle} \\
0 < e < 1 & \text{ellipse} \\
e = 1 & \text{parabole} \\
e > 1 & \text{hyperbole}
\end{cases}
$$
:::

## Ellipse

:::formule Forme standard
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \qquad (a > b > 0)
$$

$$
c = \sqrt{a^2 - b^2}, \qquad e = \frac{c}{a} < 1, \qquad \frac{b}{a} = \sqrt{1 - e^2}
$$
:::

:::formule Éléments
- Foyers : $F(-c\,;\,0)$ et $F'(c\,;\,0)$.
- Directrices : $x = \dfrac{a}{e} = \dfrac{a^2}{c}$ et $x = -\dfrac{a^2}{c}$.
- Sommets : $(\pm a\,;\,0)$ et $(0\,;\,\pm b)$.
- **Propriété** : $MF + MF' = 2a$.
:::

:::formule Tangente
Tangente à l'ellipse au point $M(x_0\,;\,y_0)$ :

$$
\frac{x_0 x}{a^2} + \frac{y_0 y}{b^2} = 1
$$
:::

:::remarque Cas du cercle
Cercle de centre $(a\,;\,b)$ et de rayon $r$ : $e = 0$, directrice « à l'infini », foyers confondus au centre. Équation : $(x-a)^2 + (y-b)^2 = r^2$ (compléter les carrés pour en reconnaître un).
:::

## Hyperbole

:::formule Forme standard
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
$$

$$
c = \sqrt{a^2 + b^2}, \qquad e = \frac{c}{a} > 1
$$
:::

:::formule Éléments
- Foyers : $(\pm c\,;\,0)$.
- Directrices : $x = \pm\dfrac{a}{e} = \pm\dfrac{a^2}{c}$.
- Asymptotes : $y = \pm\dfrac{b}{a}x$.
- **Propriété** : $|MF - MF'| = 2a$.
:::

:::remarque Branche transverse
Les sommets $(\pm a\,;\,0)$ sont sur la branche transverse (celle qui contient les foyers). L'hyperbole équilatère ($a = b$) a pour asymptotes les bissectrices des axes.
:::

## Parabole

:::formule Forme standard
$$
y^2 = 2px \qquad (p > 0, \text{ paramètre focal})
$$

- Sommet : $(0\,;\,0)$ ; axe : l'axe des $x$.
- Foyer : $F\left(\dfrac{p}{2}\,;\,0\right)$ ; directrice : $x = -\dfrac{p}{2}$.
- **Propriété** : $MF = d(M\,;\,\Delta)$.
:::

:::remarque Autres orientations
$x^2 = 2py$ : axe des $y$, foyer $(0\,;\,p/2)$. Changer de sens (parabole tournée vers la gauche ou vers le bas) change les signes. Toujours identifier l'**axe de symétrie** avant de lire $p$.
:::

## Méthodes

:::remarque Reconnaître une équation du second degré
$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ :

- $B = 0$ et $A$, $C$ de même signe → ellipse (ou cercle si $|A| = |C|$) ;
- $B = 0$ et $A$, $C$ de signes contraires → hyperbole ;
- un seul terme du second degré ($A = 0$ ou $C = 0$) → parabole ;
- compléter les carrés pour ramener à la forme standard et lire $a$, $b$ (ou $p$).
:::

:::remarque Astuce des trois formules à ne pas confondre
$$
\text{Ellipse: } c^2 = a^2 - b^2, \qquad
\text{Hyperbole: } c^2 = a^2 + b^2, \qquad
\text{Ellipse: } e = \frac{c}{a} < 1
$$
:::
