## Définitions

:::formule Nombre dérivé
$$
f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}
$$
:::

:::formule Taux d'accroissement
$$
\tau(h) = \frac{f(a+h)-f(a)}{h}
$$
:::

:::formule Tangente en $a$
$$
y = f'(a)(x-a) + f(a)
$$
:::

## Dérivées usuelles

| $f(x)$ | $f'(x)$ | Domaine de dérivabilité |
| --- | --- | --- |
| $k$ | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $x^n$ | $n x^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $\mathbb{R}^*$ |
| $\dfrac{1}{x^n}$ | $-\dfrac{n}{x^{n+1}}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0\,;\,+\infty[$ |
| $\ln x$ | $\dfrac{1}{x}$ | $]0\,;\,+\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |

## Règles d'opération

:::formule Somme et multiple
$$
(u+v)' = u'+v' \qquad (k\,u)' = k\,u'
$$
:::

:::formule Produit
$$
(uv)' = u'v + uv'
$$
:::

:::formule Quotient
$$
\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2} \quad (v \neq 0)
$$
:::

:::formule Composée
$$
\big(v \circ u\big)'(x) = u'(x)\,v'\big(u(x)\big)
$$
:::

:::formule Puissance d'une fonction
$$
\left(u^n\right)' = n\,u^{n-1}\,u'
$$
:::

:::formule Racine et inverse d'une fonction
$$
\left(\sqrt{u}\right)' = \frac{u'}{2\sqrt{u}} \qquad \left(\frac{1}{u}\right)' = -\frac{u'}{u^2}
$$
:::

:::formule Exponentielle et logarithme composés
$$
\left(e^{u}\right)' = u'\,e^{u} \qquad \left(\ln u\right)' = \frac{u'}{u} \quad (u>0)
$$
:::

## Variations et extremums

:::formule Signe de la dérivée
- $f' \geq 0$ sur $I$ $\Longrightarrow$ $f$ croissante sur $I$.
- $f' \leq 0$ sur $I$ $\Longrightarrow$ $f$ décroissante sur $I$.
- $f' = 0$ sur $I$ $\Longrightarrow$ $f$ constante sur $I$.
:::

:::formule Extremum local
Si $f$ est dérivable en $a$ et présente un extremum local en $a$, alors $f'(a)=0$.
:::

:::formule Dérivée seconde
Si $f'$ est dérivable, sa dérivée $f''$ donne la **concavité** : $f'' \geq 0$ sur un intervalle signifie que $f$ y est convexe.
:::

## À mémoriser absolument

- $(x^n)' = nx^{n-1}$ : l'exposant descend et diminue de $1$.
- $(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$, jamais $\dfrac{1}{\sqrt{x}}$.
- La dérivée d'un produit n'est **pas** le produit des dérivées.
- La dérivée d'un quotient n'est **pas** le quotient des dérivées.
- Toujours donner le domaine avant de dériver.
