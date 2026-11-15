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

:::remarque À quoi ça sert au BAC ?
Les courbes paramétrées décrivent le mouvement d'un point dans le plan : le **vecteur vitesse** donne la direction et le sens de la trajectoire, l'**accélération** décrit les forces (physique et mécanique). Les **coniques** (cercle, ellipse, hyperbole, parabole) reviennent dans les questions de géométrie analytique : foyer, directrice, excentricité, équation générale du second degré.
:::

## Courbes paramétrées

:::definition Courbe paramétrée
Une courbe du plan est donnée par un système :

$$
\begin{cases}
x = f(t) \\
y = g(t)
\end{cases}
\qquad t \in I \subset \mathbb{R}.
$$

Le réel $t$ est le **paramètre** (souvent le temps), le point $M(t) = (f(t)\,;\,g(t))$ décrit la courbe quand $t$ parcourt $I$.
:::

:::formule Vecteur vitesse et vecteur accélération
$$
\vec{v}(t) = \big(f'(t)\,;\,g'(t)\big), \qquad
\vec{a}(t) = \big(f''(t)\,;\,g''(t)\big).
$$

- $\vec{v}(t)$ est **tangent** à la courbe en $M(t)$ et donne le **sens** de parcours ;
- $\|\vec{v}(t)\|$ est la **vitesse** instantanée (module) ;
- $\vec{a}(t)$ décrit la variation de $\vec{v}$ : accélération, décélération, virage.
:::

:::formule Équation cartésienne (passage paramétrique → cartésien)
Éliminer le paramètre $t$ : exprimer $t$ en fonction de $x$ dans la première équation, puis reporter dans la seconde.

Exemple : $x = t + 1$, $y = t^2$ donne $t = x - 1$ donc $y = (x-1)^2$.
:::

:::methode Étudier une courbe paramétrée
1. **Domaine** du paramètre (valeurs admissibles de $t$).
2. **Vecteur vitesse** : calculer $f'$ et $g'$, résoudre $\vec{v} = \vec{0}$ (points singuliers, changement de sens).
3. **Sens de parcours** : signe de $f'(t)$ et $g'(t)$ pour savoir si $x$ et $y$ augmentent.
4. **Points remarquables** : intersections avec les axes ($t$ tel que $x = 0$ ou $y = 0$), extrémités si $t$ est borné.
5. **Équation cartésienne** si elle existe (attention : elle peut être incomplète, certains points de la courbe manquant).
:::

:::exemple La cycloïde simple
$$
\begin{cases}
x = t - \sin t \\
y = 1 - \cos t
\end{cases}
\qquad t \in \mathbb{R}.
$$

Vecteur vitesse : $\vec{v}(t) = (1 - \cos t\,;\,\sin t)$.

$\vec{v}(t) = \vec{0}$ exige $\cos t = 1$ et $\sin t = 0$, soit $t = 2k\pi$ : à ces instants, le point est immobile (points remarquables de la cycloïde). En $t = \pi$ : $\vec{v}(\pi) = (2\,;\,0)$ : le point va vers la droite à pleine vitesse.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier de préciser le **domaine** du paramètre : deux courbes de même équation cartésienne mais de domaines différents sont différentes.
2. Confondre vecteur vitesse $(f'; g')$ et vecteur accélération $(f''; g'')$.
3. Poser $\vec{v} = \vec{0}$ en annulant un seul composant (il faut les **deux** nuls simultanément).
4. Éliminer $t$ et oublier les **restrictions** de domaine sur $x$ ou $y$.
:::

:::remarque Cas particulier : le cercle
$$
\begin{cases}
x = a + R \cos t \\
y = b + R \sin t
\end{cases}
\qquad t \in [0\,;\,2\pi[
$$

est le cercle de centre $(a\,;\,b)$ et de rayon $R$ : on retrouve $(x-a)^2 + (y-b)^2 = R^2$ en éliminant $t$ avec $\cos^2 t + \sin^2 t = 1$. La vitesse $\vec{v}(t) = (-R\sin t\,;\,R\cos t)$ a pour module constant $R$ : le mouvement est **uniforme**.
:::

## Coniques : éléments géométriques

:::definition Conique
Une **conique** est l'ensemble des points $M$ du plan dont le **rapport des distances** à un point fixe $F$ (le **foyer**) et à une droite fixe $\Delta$ (la **directrice**), non passant par $F$, est constant :

$$
\frac{FM}{d(M\,;\,\Delta)} = e \qquad (e = \text{excentricité}).
$$
:::

:::formule Classification par l'excentricité
| Excentricité $e$ | Conique |
| --- | --- |
| $e = 0$ | **Cercle** (cas limite : directrice à l'infini) |
| $0 < e < 1$ | **Ellipse** |
| $e = 1$ | **Parabole** |
| $e > 1$ | **Hyperbole** |
:::

:::formule Foyer et directrice de l'ellipse
Ellipse de centre $O$, de sommets $A(-a\,;\,0)$ et $A'(a\,;\,0)$ ($a > b > 0$) :

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad c = \sqrt{a^2 - b^2}, \qquad e = \frac{c}{a} < 1.
$$

Foyers : $F(-c\,;\,0)$ et $F'(c\,;\,0)$ ; directrices : $x = \pm\dfrac{a}{e} = \pm\dfrac{a^2}{c}$.

Propriété : $MF + MF' = 2a$ (somme des distances aux foyers constante).
:::

:::formule Hyperbole
Hyperbole de centre $O$, de sommets $A(-a\,;\,0)$ et $A'(a\,;\,0)$ :

$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c = \sqrt{a^2 + b^2}, \qquad e = \frac{c}{a} > 1.
$$

Foyers : $F(-c\,;\,0)$, $F'(c\,;\,0)$ ; directrices : $x = \pm\dfrac{a}{e}$ ; asymptotes : $y = \pm\dfrac{b}{a}x$.

Propriété : $|MF - MF'| = 2a$ (différence des distances aux foyers constante).
:::

:::formule Parabole
Parabole de sommet à l'origine, axe des $x$ :

$$
y^2 = 2px \quad (p > 0).
$$

Foyer : $F\left(\dfrac{p}{2}\,;\,0\right)$ ; directrice : $x = -\dfrac{p}{2}$.

Propriété : $MF = d(M\,;\,\Delta)$ (distance au foyer = distance à la directrice).
:::

:::methode Reconnaître une conique à son équation
1. Équation du second degré $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$.
2. Sans terme $xy$ : regarder les signes de $A$ et $C$ :
   - même signe → ellipse (ou cercle si $A = C$) ;
   - signes contraires → hyperbole ;
   - un seul terme du second degré → parabole.
3. **Compléter les carrés** pour ramener à la forme standard et lire $a$, $b$ (ou $p$).
4. Calculer $c$ puis $e$ : $c = \sqrt{|a^2 - b^2|}$ pour l'ellipse, $c = \sqrt{a^2 + b^2}$ pour l'hyperbole.
:::

:::exemple Reconnaître $4x^2 + 9y^2 = 36$
On divise par $36$ :

$$
\frac{x^2}{9} + \frac{y^2}{4} = 1.
$$

Mêmes signes → **ellipse** avec $a^2 = 9$, $b^2 = 4$ donc $a = 3$, $b = 2$ et $c = \sqrt{9 - 4} = \sqrt{5}$.

Excentricité : $e = \dfrac{\sqrt{5}}{3} \approx 0{,}75 < 1$ ✓ ; foyers $(\pm\sqrt{5}\,;\,0)$.
:::

:::piege Attention aux formes piégées
- $x^2 + y^2 + 4x - 6y + 9 = 0$ : compléter les carrés donne $(x+2)^2 + (y-3)^2 = 4$ : c'est un **cercle** de centre $(-2\,;\,3)$ et de rayon $2$.
- $y = x^2$ est une parabole (axe vertical), mais $y^2 = x$ en est une aussi (axe horizontal) : ne pas confondre le rôle de $x$ et $y$.
- Une équation du second degré **déterminante** (delta nul) peut dégénérer en deux droites : vérifier le discriminant.
:::

## Géométrie et propriétés remarquables

:::formule Tangente à une ellipse
Pour l'ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$, la tangente au point $M(x_0\,;\,y_0)$ de l'ellipse a pour équation :

$$
\frac{x_0 x}{a^2} + \frac{y_0 y}{b^2} = 1.
$$

Même « règle du miroir » pour l'hyperbole avec un signe $-$.
:::

:::remarque Propriétés optiques (souvent rappelées au BAC)
- Sur une ellipse, les rayons issus d'un foyer se réfléchissent vers l'autre foyer.
- Sur une hyperbole, la différence des distances aux foyers est constante.
- Sur une parabole, tout rayon parallèle à l'axe se réfléchit vers le foyer (antennes paraboliques).
:::

:::methode Résoudre « conique passant par des points »
1. Poser l'équation générale (trois cas : ellipse $A x^2 + C y^2 + \dots = 0$ avec $A$, $C$ de même signe, etc.).
2. Injecter les coordonnées des points pour obtenir un système.
3. Résoudre, éliminer les solutions dégénérées (aire nulle, droites).
4. Vérifier que la conique obtenue a bien l'excentricité demandée.
:::

## Ce qu'il faut retenir

- **Courbe paramétrée** : $x = f(t)$, $y = g(t)$ ; vecteur vitesse $\vec{v} = (f'\,;\,g')$ tangent à la courbe, sens de parcours donné par le signe des composantes.
- **Accélération** $\vec{a} = (f''\,;\,g'')$ ; points singuliers : $\vec{v} = \vec{0}$ (**les deux** composantes nulles).
- **Équation cartésienne** : éliminer $t$ et reporter les **restrictions de domaine**.
- **Conique** : $\dfrac{MF}{d(M\,;\,\Delta)} = e$ ; $e = 0$ cercle, $0 < e < 1$ ellipse, $e = 1$ parabole, $e > 1$ hyperbole.
- **Ellipse** $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ : $c = \sqrt{a^2 - b^2}$, $e = \dfrac{c}{a}$, $MF + MF' = 2a$.
- **Hyperbole** $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ : $c = \sqrt{a^2 + b^2}$, $e = \dfrac{c}{a} > 1$, $|MF - MF'| = 2a$, asymptotes $y = \pm\dfrac{b}{a}x$.
- **Parabole** $y^2 = 2px$ : foyer $\left(\dfrac{p}{2}\,;\,0\right)$, directrice $x = -\dfrac{p}{2}$, $MF = d(M\,;\,\Delta)$.
- **Tangente** à l'ellipse en $(x_0\,;\,y_0)$ : $\dfrac{x_0 x}{a^2} + \dfrac{y_0 y}{b^2} = 1$.
