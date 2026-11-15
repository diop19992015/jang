---
titre: Courbes paramétrées et coniques
accroche: "Vecteur vitesse, vecteur accélération · Coniques : foyer et directrice · Ellipse et hyperbole"
series: S1, S3
ordre: 30
duree: 45
demo: false
statut: publie
objectifs:
  - Vecteur vitesse, vecteur accélération
  - "Coniques : foyer et directrice"
  - Ellipse et hyperbole
partie: Courbes planes
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Courbe paramétrée
$$
\begin{cases}
x = f(t) \\
y = g(t)
\end{cases}
\qquad
\vec{v}(t) = \big(f'(t)\,;\,g'(t)\big), \qquad
\vec{a}(t) = \big(f''(t)\,;\,g''(t)\big)
$$

$\vec{v}$ est tangent à la courbe et donne le sens de parcours ; $\vec{v} = \vec{0}$ (les deux composantes nulles) signale un point singulier.
:::

:::formule Cercle paramétré
$$
\begin{cases}
x = a + R\cos t \\
y = b + R\sin t
\end{cases}
\quad\Longrightarrow\quad
(x-a)^2 + (y-b)^2 = R^2
$$

Vitesse $\vec{v} = (-R\sin t\,;\,R\cos t)$ de module constant $R$ : mouvement **uniforme**.
:::

:::formule Définition d'une conique
$$
\frac{MF}{d(M\,;\,\Delta)} = e \quad (\text{excentricité})
$$

| $e$ | $e = 0$ | $0 < e < 1$ | $e = 1$ | $e > 1$ |
| --- | --- | --- | --- | --- |
| Conique | cercle | ellipse | parabole | hyperbole |
:::

:::formule Ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ ($a > b > 0$)
$$
c = \sqrt{a^2 - b^2}, \qquad e = \frac{c}{a} < 1, \qquad MF + MF' = 2a
$$

Foyers $(\pm c\,;\,0)$ ; directrices $x = \pm\dfrac{a^2}{c}$ ; tangente en $(x_0; y_0)$ : $\dfrac{x_0 x}{a^2} + \dfrac{y_0 y}{b^2} = 1$.
:::

:::formule Hyperbole $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$
$$
c = \sqrt{a^2 + b^2}, \qquad e = \frac{c}{a} > 1, \qquad |MF - MF'| = 2a
$$

Foyers $(\pm c\,;\,0)$ ; asymptotes $y = \pm\dfrac{b}{a}x$ ; directrices $x = \pm\dfrac{a}{e}$.
:::

:::formule Parabole $y^2 = 2px$ ($p > 0$)
$$
\text{foyer } F\Big(\frac{p}{2}\,;\,0\Big), \qquad \text{directrice } x = -\frac{p}{2}, \qquad MF = d(M\,;\,\Delta)
$$
:::

## Méthode express

1. **Étudier une courbe paramétrée** : domaine de $t$ → $\vec{v} = (f'\,;\,g')$ → points singuliers ($\vec{v} = \vec{0}$) → sens de parcours → points remarquables → équation cartésienne.
2. **Éliminer le paramètre** : exprimer $t$ en fonction de $x$ (ou utiliser $\cos^2 + \sin^2 = 1$), reporter dans $y$, puis **restreindre** l'équation au domaine.
3. **Reconnaître une conique** : équation du second degré → signes des coefficients du second degré (même signe : ellipse ; contraires : hyperbole ; un seul : parabole) → compléter les carrés.
4. **Lire les éléments** : $a$, $b$ (ou $p$) → $c$ ($\sqrt{a^2 - b^2}$ ou $\sqrt{a^2 + b^2}$) → $e = c/a$ → foyers et directrices.
5. **Utiliser les propriétés** : $MF + MF' = 2a$ (ellipse), $|MF - MF'| = 2a$ (hyperbole), $MF = d(M\,;\,\Delta)$ (parabole) pour des calculs de distances sans coordonnées.
6. **Tangente** : appliquer $\dfrac{x_0 x}{a^2} + \dfrac{y_0 y}{b^2} = 1$ (ellipse) après avoir vérifié que le point est bien sur la conique.

:::erreur Les erreurs qui coûtent des points
1. Confondre $c = \sqrt{a^2 - b^2}$ (ellipse) et $c = \sqrt{a^2 + b^2}$ (hyperbole).
2. Oublier les restrictions de domaine après élimination du paramètre.
3. Poser $\vec{v} = \vec{0}$ en annulant une seule composante.
4. Écrire $e = a/c$ au lieu de $e = c/a$.
5. Dans une équation $Ax^2 + Cy^2 + \dots = 0$, conclure « ellipse » sans vérifier que $A$ et $C$ sont de **même signe** après mise sous forme standard.
:::

## Vocabulaire

- **Paramètre** : réel $t$ qui fait varier le point le long de la courbe.
- **Vecteur vitesse** : $(f'\,;\,g')$, tangent à la trajectoire.
- **Vecteur accélération** : $(f''\,;\,g'')$.
- **Point singulier** : point où $\vec{v} = \vec{0}$.
- **Conique** : courbe définie par un rapport de distances constant foyer/directrice.
- **Foyer** : point fixe $F$ de la définition ; **directrice** : droite fixe $\Delta$.
- **Excentricité** $e$ : rapport $MF / d(M\,;\,\Delta)$, qui classe la conique.
- **Sommets** : points d'intersection de la conique avec son axe principal.
- **Asymptotes** : droites approchées par l'hyperbole à l'infini.
- **Tangente** : droite « touchant » la conique, donnée par la formule du miroir.
