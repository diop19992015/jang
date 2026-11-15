## Division euclidienne

:::formule Division par $x - a$
$$
P(x) = (x-a)\,Q(x) + r \qquad \text{avec } r = P(a)
$$
:::

:::formule Théorème des restes successifs
En notant $Q_0 = P$ et $r_0 = P(a)$, puis en divisant $Q_0$ par $x-a$ :

$$
P(x) = (x-a)^2 Q_2(x) + (x-a)\,r_1 + r_0, \qquad r_1 = Q_0(a)
$$
:::

:::formule Réciproque
$$
P(a) = 0 \iff (x-a) \text{ divise } P \iff P(x) = (x-a)\,Q(x)
$$
:::

## Méthode de Horner

:::formule Schéma
Pour $P(x) = a_n x^n + \dots + a_1 x + a_0$ et la valeur $a$ :

| Coefficients | $a_n$ | $a_{n-1}$ | $\dots$ | $a_0$ |
| --- | --- | --- | --- | --- |
| Résultats | $a_n$ | $a_n a + a_{n-1}$ | $\dots$ | $P(a)$ |

Chaque colonne : multiplier le résultat précédent par $a$, puis **ajouter** le coefficient.
:::

:::remarque Lecture du schéma
Le dernier nombre est $P(a)$ ; les nombres intermédiaires sont les coefficients de $Q$ (le quotient), écrits du plus haut degré au terme indépendant.
:::

## Identités remarquables

:::formule Cinq identités
$$
(a+b)^2 = a^2 + 2ab + b^2
$$

$$
(a-b)^2 = a^2 - 2ab + b^2
$$

$$
a^2 - b^2 = (a-b)(a+b)
$$

$$
a^3 + b^3 = (a+b)(a^2 - ab + b^2)
$$

$$
a^3 - b^3 = (a-b)(a^2 + ab + b^2)
$$
:::

:::formule Facteur commun
$$
pa + pb = p(a+b) \qquad ax^2 + bx = x(ax+b)
$$
:::

## Polynômes du second degré

:::formule Discriminant et factorisation
$$
\Delta = b^2 - 4ac
$$

| $\Delta$ | Racines | Forme factorisée |
| --- | --- | --- |
| $> 0$ | $x_1, x_2 = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ | $a(x-x_1)(x-x_2)$ |
| $= 0$ | $x_0 = -\dfrac{b}{2a}$ | $a(x-x_0)^2$ |
| $< 0$ | aucune racine réelle | irréductible sur $\mathbb{R}$ |
:::

:::formule Résolution de $ax^2+bx+c = 0$
$$
\Delta < 0 : \varnothing \qquad \Delta = 0 : \left\{-\frac{b}{2a}\right\} \qquad \Delta > 0 : \left\{\frac{-b-\sqrt{\Delta}}{2a}\,;\,\frac{-b+\sqrt{\Delta}}{2a}\right\}
$$
:::

## Tableaux de signes

:::formule Polynôme produit de facteurs du premier degré
Chaque facteur $x - \alpha$ vaut $0$ en $\alpha$ et change de signe en $\alpha$ ; le signe de $P$ est le **produit** des signes.
:::

:::formule Quotient de polynômes
$$
f(x) = \frac{N(x)}{D(x)} \qquad
\begin{cases}
N(x) = 0 & \Rightarrow \text{zéro, } f \text{ change de signe ou s'annule}\\
D(x) = 0 & \Rightarrow \text{pôle, } f \text{ non définie (tiret)}\\
\end{cases}
$$

Même signe de $N$ et $D$ $\Rightarrow f(x) > 0$ ; signes contraires $\Rightarrow f(x) < 0$.
:::

:::remarque Convention d'écriture
Dans les tableaux de signes, on note $+$, $-$ et $0$ ; aux pôles on écrit une barre verticale $|$ et on rappelle que $f$ n'y est pas définie. Les inéquations se résolvent en **intervalles**.
:::

## À mémoriser absolument

- Reste de la division par $x-a$ : $r = P(a)$.
- $P(a)=0$ donne le facteur $(x-a)$.
- Horner : multiplier par $a$, puis additionner.
- $\Delta = b^2 - 4ac$ et les trois cas de factorisation.
- Quotient : mêmes signes $\Rightarrow$ positif.
- Solutions d'inéquation en intervalles, jamais en simple liste de valeurs.
