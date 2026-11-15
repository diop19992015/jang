## Continuité

:::formule Définition
$$
f \text{ continue en } a \iff a \in D_f \text{ et } \lim_{x \to a} f(x) = f(a)
$$

$f$ est continue sur un intervalle $I$ si elle l'est en tout point de $I$ (au sens où les bornes sont prises du côté de $I$).
:::

:::formule Domaines de continuité des usuelles
| Fonction | Ensemble de continuité |
| --- | --- |
| Polynôme $P$ | $\mathbb{R}$ |
| $\dfrac{1}{x^n}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $[0\,;\,+\infty[$ |
| $\ln x$ | $]0\,;\,+\infty[$ |
| $e^x$, $\sin x$, $\cos x$ | $\mathbb{R}$ |
:::

:::formule Opérations
Si $f$ et $g$ sont continues en $a$ :

$$
f \pm g, \quad f \times g \ \text{continues}, \qquad
\frac{f}{g} \ \text{continue si } g(a) \neq 0, \qquad
g \circ f \ \text{continue si } g \text{ continue en } f(a)
$$
:::

:::remarque Fonction morceau par morceau
Au point de jonction $a$ : calculer $\lim\limits_{x \to a} f(x)$ (simplifier d'abord si $\frac{0}{0}$) ; la fonction est continue en $a$ si et seulement si cette limite vaut $f(a)$. C'est ainsi qu'on détermine une constante inconnue.
:::

## Théorème des valeurs intermédiaires

:::formule TVI
$$
f \text{ continue sur } [a\,;\,b] \ \text{et} \ k \text{ entre } f(a) \text{ et } f(b)
\;\Longrightarrow\;
\exists\, c \in [a\,;\,b] : f(c) = k
$$
:::

:::formule Cas des zéros
$$
f \text{ continue sur } [a\,;\,b] \ \text{et} \ f(a) \times f(b) < 0
\;\Longrightarrow\;
\exists\, c \in \,]a\,;\,b[ : f(c) = 0
$$
:::

:::formule Weierstrass
Une fonction continue sur $[a\,;\,b]$ y admet un **minimum** et un **maximum** (atteints).
:::

:::remarque Rédaction attendue
Trois étapes obligatoires : (1) « $f$ est continue sur $[a\,;\,b]$ », (2) « $f(a) < 0 < f(b)$ », (3) « donc par le théorème des valeurs intermédiaires, il existe $c \in [a\,;\,b]$ tel que $f(c) = 0$ ». Puis, si $f$ est monotone, ajouter l'unicité.
:::

## Fonction réciproque

:::formule Existence
$$
f \text{ strictement monotone sur } I \;\Longrightarrow\; f^{-1} \text{ existe sur } f(I)
$$
:::

:::formule Propriétés
$$
f^{-1}(f(x)) = x \ (x \in I), \qquad
f(f^{-1}(y)) = y \ (y \in f(I))
$$

- $f$ croissante $\iff f^{-1}$ croissante ; $f$ décroissante $\iff f^{-1}$ décroissante.
- $f(x) = k \iff x = f^{-1}(k)$, pour $k \in f(I)$.
- Tableau de variations de $f^{-1}$ : permuter les **lignes** (valeurs et abscisses) de celui de $f$.
:::

:::remarque Points d'attention
- Le domaine de $f^{-1}$ est $f(I)$, **pas** $\mathbb{R}$ : vérifier $k \in f(I)$ avant de résoudre.
- $f^{-1}$ n'existe que si $f$ est injective : la monotonie stricte le garantit.
- Notation : $(f^{-1})'(b) = \dfrac{1}{f'(a)}$ avec $a = f^{-1}(b)$ (voir chapitre dérivation).
:::

## Prolongement par continuité

:::formule Définition
$a$ valeur d'exclusion du domaine et $\lim\limits_{x \to a} f(x) = \ell$ (limite finie) : poser

$$
f(a) = \ell
$$

prolonge $f$ par continuité en $a$. Le prolongement est **unique**.
:::

:::formule Limites remarquables
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{e^x - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1
$$

$$
\lim_{x \to 0} (1+x)^{1/x} = e, \qquad
\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e
$$
:::

:::remarque Méthode
1. Simplifier l'expression (factorisation, conjugué) si la limite est une forme indéterminée.
2. Calculer la limite $\ell$.
3. Définir $f(a) = \ell$, conclure : « $f$ est continue en $a$ puisque $\lim\limits_{x \to a} f(x) = f(a) = \ell$ ».
:::
