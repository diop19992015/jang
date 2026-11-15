## L'essentiel du chapitre

:::formule Définition du nombre dérivé
Soit $f$ une fonction définie sur un intervalle contenant $a$. Le nombre dérivé de $f$ en $a$ est, lorsqu'il existe :

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

Ce quotient est le **taux d'accroissement** entre $a$ et $a+h$.
:::

**Interprétation géométrique.** $f'(a)$ est le coefficient directeur de la tangente à la courbe $\mathcal{C}_f$ au point $A(a\,;\,f(a))$. Son équation est :

$$
y = f'(a)(x-a) + f(a)
$$

:::formule Dérivées usuelles
| Fonction $f(x)$ | Dérivée $f'(x)$ | Ensemble de dérivabilité |
| --- | --- | --- |
| $x^n$ ($n \in \mathbb{N}^*$) | $n x^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0\,;\,+\infty[$ |
| $\ln x$ | $\dfrac{1}{x}$ | $]0\,;\,+\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
:::

:::formule Opérations sur les dérivées
- Somme : $(u+v)' = u' + v'$ et $(k u)' = k u'$.
- Produit : $(uv)' = u'v + uv'$.
- Quotient : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ avec $v \neq 0$.
- Composée : $(v \circ u)' = u' \times (v' \circ u)$.
- Puissance : $(u^n)' = n\,u^{n-1}\,u'$.
:::

**Dérivée et sens de variation.** Sur un intervalle :

- si $f' \geq 0$, alors $f$ est croissante ;
- si $f' \leq 0$, alors $f$ est décroissante ;
- si $f'$ s'annule en changeant de signe en $a$, alors $f$ admet un extremum local en $a$.

:::methode Étudier une fonction en 4 étapes
1. Déterminer l'ensemble de définition et calculer la dérivée.
2. Étudier le signe de la dérivée (souvent en factorisant).
3. Dresser le tableau de variations avec les limites aux bornes.
4. Conclure : extrema, tangentes remarquables, nombre de solutions d'une équation.
:::

:::erreur Erreur fréquente
Oublier le domaine de dérivabilité. Par exemple $\sqrt{x}$ n'est pas dérivable en $0$, et $\ln x$ n'est défini que pour $x>0$. Une étude sans domaine est incomplète.
:::
