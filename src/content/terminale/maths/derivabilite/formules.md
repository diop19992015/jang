## Définitions

:::formule Taux d'accroissement
$$
\tau(h) = \frac{f(a+h) - f(a)}{h} \qquad (h \neq 0)
$$
:::

:::formule Nombre dérivé
$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$
:::

:::formule Dérivée en $x$ (fonction dérivée)
$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$
:::

## Géométrie

:::formule Tangente en $A(a\,;\,f(a))$
$$
y = f'(a)(x - a) + f(a)
$$

Développée : $y = f'(a)\,x + \big(f(a) - a\,f'(a)\big)$.
:::

:::remarque Lecture de la pente
- $f'(a) > 0$ : tangente montante, $f$ croît en $a$.
- $f'(a) < 0$ : tangente descendante, $f$ décroît en $a$.
- $f'(a) = 0$ : tangente horizontale (point remarquable possible).
:::

## Dérivées usuelles

:::formule Tableau à connaître
| $f(x)$ | $f'(x)$ | Domaine |
| --- | --- | --- |
| $k$ | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $x^n$ | $n x^{n-1}$ | $\mathbb{R}$ (ou $x>0$ si $n$ non entier) |
| $\dfrac{1}{x^n}$ | $-\dfrac{n}{x^{n+1}}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0\,;\,+\infty[$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $\ln x$ | $\dfrac{1}{x}$ | $]0\,;\,+\infty[$ |
:::

:::formule Règles d'opération
$$
(u+v)' = u'+v'
\qquad
(ku)' = k u'
\qquad
(uv)' = u'v + uv'
$$

$$
\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}
\qquad
(v \circ u)'(x) = u'(x)\,v'(u(x))
\qquad
(u^n)' = n u^{n-1} u'
$$
:::

## Théorèmes

:::formule Dérivable implique continue
$$
f \text{ dérivable en } a \;\Longrightarrow\; f \text{ continue en } a
$$

Réciproque **fausse** : $x \mapsto |x|$ est continue en $0$, pas dérivable.
:::

:::formule Théorème de la constante
$$
f'(x) = 0 \;\;\forall x \in I \;\Longrightarrow\; f \text{ constante sur } I
$$
:::

:::formule Théorème de Rolle
$f$ continue sur $[a\,;\,b]$, dérivable sur $]a\,;\,b[$ et $f(a) = f(b)$ :

$$
\exists\, c \in \,]a\,;\,b[ \;\text{ tel que }\; f'(c) = 0
$$
:::

:::formule Condition d'extremum local
$f$ dérivable en $a$ avec extremum local en $a$ :

$$
f'(a) = 0
$$

**Nécessaire seulement** : $f'(a) = 0$ ne prouve pas l'extremum ($x^3$ en $0$).
:::

## Utilisations

:::formule Sens de variation
$$
f' \geq 0 \text{ sur } I \Rightarrow f \text{ croissante sur } I
\qquad
f' \leq 0 \text{ sur } I \Rightarrow f \text{ décroissante sur } I
$$
:::

:::formule Tableau de variations type
| $x$ | $-\infty$ | $x_1$ | $x_2$ | $+\infty$ |
| --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $\cdots$ | $\nearrow$ | $\text{max}$ | $\searrow$ | $\text{min}$ | $\nearrow$ | $\cdots$ |
:::

:::formule Équation de la tangente (procédure)
1. $f(a)$ : la valeur.
2. $f'(a)$ : la pente.
3. $y = f'(a)(x-a) + f(a)$, puis développement.
:::

:::remarque Optimisation
Grandeur $G(x)$ sur un **intervalle de validité** : $G'(x) \to$ signe $\to$ extremum $\to$ conclusion en phrases avec unités. Toujours vérifier que l'extremum tombe dans l'intervalle.
:::

## À mémoriser absolument

- $f'(a) = \lim_{h \to 0} \dfrac{f(a+h)-f(a)}{h}$.
- Tangente : $y = f'(a)(x-a) + f(a)$.
- Dérivable $\Rightarrow$ continue (et pas l'inverse).
- Rolle : hypothèses complètes avant $f'(c) = 0$.
- $f'(a) = 0$ = condition nécessaire, pas suffisante, d'extremum.
- Signe de $f'$ = variations ; changement de signe = extremum local.
