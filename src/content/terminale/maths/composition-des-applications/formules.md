## Définition

:::formule Composition de deux applications
$$
(g \circ f)(x) = g\big(f(x)\big)
$$

On applique $f$ en premier, puis $g$.
:::

:::formule Chaîne de flèches
$$
x \xrightarrow{\;f\;} f(x) \xrightarrow{\;g\;} g\big(f(x)\big)
$$
:::

## Domaine

:::formule Ensemble de définition de $g \circ f$
$$
\mathrm{Dom}(g \circ f) = \{\, x \in D_f \;\;/\;\; f(x) \in D_g \,\}
$$
:::

| Situation | Condition à résoudre |
| --- | --- |
| $g(t) = \sqrt{t}$ | $f(x) \geq 0$ |
| $g(t) = \dfrac{1}{t}$ | $f(x) \neq 0$ |
| $g(t) = \ln t$ | $f(x) > 0$ |
| $g(t) = \dfrac{1}{\sqrt{t}}$ | $f(x) > 0$ |

:::remarque Réflexe du BAC
Un énonce qui demande « l'ensemble de définition de $g \circ f$ » attend **deux justifications** : « $x \in D_f$ » et « $f(x) \in D_g$ ». Une réponse sans justification ne rapporte qu'une partie des points.
:::

## Propriétés

:::formule Associativité et identité
$$
(h \circ g) \circ f = h \circ (g \circ f) \qquad \mathrm{id} \circ f = f \circ \mathrm{id} = f
$$
:::

:::formule Non commutativité
$$
g \circ f \;\neq\; f \circ g \quad \text{en général}
$$
:::

:::formule Réciproque
Si $f$ est bijective :
$$
f^{-1} \circ f = \mathrm{id} \qquad f \circ f^{-1} = \mathrm{id}
$$
:::

## Variations

:::formule Sens de variation de $g \circ f$
| $f$ | $g$ | $g \circ f$ |
| --- | --- | --- |
| $\nearrow$ | $\nearrow$ | $\nearrow$ |
| $\searrow$ | $\searrow$ | $\nearrow$ |
| $\nearrow$ | $\searrow$ | $\searrow$ |
| $\searrow$ | $\nearrow$ | $\searrow$ |

Règle : nombre **pair** de décroissances $\Rightarrow$ croissante.
:::

## Applications affines

:::formule Composition d'affines
Si $f(x) = ax + b$ et $g(x) = a'x + b'$ :
$$
(g \circ f)(x) = (a'a)x + (a'b + b')
$$
:::

:::remarque Lecture graphique
La pente de $g \circ f$ est le **produit** des pentes de $f$ et de $g$ : si $f$ relève d'un facteur $2$ et que $g$ change le sens ($-1$), la composition relève de $-2$.
:::

## Résolution d'une équation composée

:::formule Méthode de substitution
$$
(g \circ f)(x) = k \;\Longrightarrow\; \text{poser } u = f(x), \;\text{résoudre } g(u) = k, \;\text{puis } f(x) = u
$$
:::

:::formule Puissances
$$
\big(f(x)\big)^2 = k \;(k \geq 0) \iff f(x) = \sqrt{k} \;\text{ ou }\; f(x) = -\sqrt{k}
$$
:::

## À mémoriser absolument

- $(g \circ f)(x) = g(f(x))$ : $f$ d'abord, $g$ ensuite.
- Le domaine est **plus petit ou égal** à $D_f$.
- Composition associative, **non commutative**.
- Affines : pente de la composition = produit des pentes.
- Toujours vérifier les solutions trouvées par rapport au domaine.
