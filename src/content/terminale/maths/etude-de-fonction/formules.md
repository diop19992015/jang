## Parité et symétries

:::formule Parité
$$
f(-x) = f(x) \;\Rightarrow\; f \text{ paire (symétrie axe des ordonnées)}
$$

$$
f(-x) = -f(x) \;\Rightarrow\; f \text{ impaire (symétrie par rapport à l'origine)}
$$

Préalable : $D_f$ doit être **stable par opposé**.
:::

:::formule Symétrie par rapport à $x = a$ et périodicité
$$
f(a+x) = f(a-x) \;\Rightarrow\; \text{symétrie par rapport à } x = a
$$

$$
f(x + p) = f(x) \;\Rightarrow\; f \text{ périodique de période } p
$$
:::

:::remarque Exemples
$x^2$, $|x|$, $\cos x$ : **paires**. $x$, $x^3$, $\sin x$ : **impaaires**. $\dfrac{x}{1+x^2}$ : impaire. $\dfrac{1}{x-1}$ : ni paire ni impaire ($D_f$ non symétrique).
:::

## Limites et asymptotes

:::formule Asymptote verticale
$$
\lim_{x \to a^-} f(x) = \pm\infty \;\text{ ou }\; \lim_{x \to a^+} f(x) = \pm\infty \;\Rightarrow\; x = a \text{ est asymptote verticale}
$$
:::

:::formule Asymptote horizontale
$$
\lim_{x \to +\infty} f(x) = L \Rightarrow y = L \text{ (à droite)}
\qquad
\lim_{x \to -\infty} f(x) = L' \Rightarrow y = L' \text{ (à gauche)}
$$
:::

:::formule Asymptote oblique
$$
\lim_{x \to \pm\infty} \frac{f(x)}{x} = m \neq 0
\quad \text{et} \quad
\lim_{x \to \pm\infty} \big(f(x) - m x\big) = p
\;\Rightarrow\; y = mx + p
$$
:::

:::formule Limites en $\pm\infty$ d'un quotient de polynômes
$$
\frac{a_n x^n + \dots}{b_m x^m + \dots} :
\begin{cases}
n < m : 0\\
n = m : \dfrac{a_n}{b_m}\\
n = m + 1 : \text{asymptote oblique (division euclidienne)}\\
n = m + 2 : \text{branche parabolique (division euclidienne)}
\end{cases}
$$
:::

## Branches paraboliques

:::formule Division euclidienne
$$
P(x) = Q(x)\,S(x) + R(x) \;\Rightarrow\; f(x) = S(x) + \frac{R(x)}{Q(x)}
$$

Comme $\dfrac{R(x)}{Q(x)} \to 0$ en $\pm\infty$, la courbe de $f$ admet la parabole $y = S(x)$ comme branche parabolique.
:::

:::exemple
$$
f(x) = \frac{x^4 + 1}{x^2} = x^2 + \frac{1}{x^2} \;\Rightarrow\; y = x^2 \text{ est la branche parabolique}
$$

La distance verticale $f(x) - x^2 = \dfrac{1}{x^2}$ tend vers $0$.
:::

:::remarque Asymptote ≠ branche parabolique
L'asymptote est une **droite** ; la branche parabolique est une **courbe**. On ne dit jamais « la parabole est une asymptote ».
:::

## Dérivée et tableau de variations

:::formule Protocole
1. $D_f$ (intervalles).
2. $f'(x)$, factorisé.
3. Tableau de signes de $f'$ (points critiques).
4. Tableau de variations : $\pm\infty$, points critiques, **valeurs** de $f$ et **limites aux bornes**.
:::

:::formule Lecture du tableau
| Lecture | Question |
| --- | --- |
| Nombre de solutions de $f(x) = k$ | intersections avec $y = k$ |
| $f(x) \leq k$ | abscisses où la courbe est sous $y = k$ |
| Extremum | $f'$ change de signe |
| Tangente horizontale | abscisse où $f'(x) = 0$ |
:::

## Protocole graphique

:::formule Étapes du tracé
1. Asymptotes en **tirets** (verticales, horizontales, obliques).
2. Points particuliers : intersections aux axes, extremums, $f(a)$ demandées.
3. Limites : flèches vers $\pm\infty$ ou vers les asymptotes.
4. Variations : relier en respectant les croissances/décroissances.
5. Symétrie : appliquer la parité si elle existe.
:::

:::remarque Vérification finale
La courbe ne doit **jamais** traverser ses asymptotes verticales ; elle doit s'en approcher. Les valeurs du tableau de variations doivent se retrouver sur la courbe.
:::

## À mémoriser absolument

- Parité : domaine symétrique **puis** $f(-x) = \pm f(x)$.
- Asymptote verticale : limite infinie en un point du domaine.
- $\lim_{x \to \pm\infty} \dfrac{P}{Q}$ : comparer les degrés ($0$, rapport des coeffs, oblique, branche parabolique).
- Division euclidienne pour les asymptotes obliques et branches paraboliques.
- Tableau de variations complet : valeurs aux points critiques **et** limites aux bornes.
- Courbe : asymptotes en tirets + points particuliers + respect des limites.
