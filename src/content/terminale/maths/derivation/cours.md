## Introduction : d'une pente à une fonction

En classe de Première, tu as appris à calculer le coefficient directeur d'une droite passant par deux points. La dérivation généralise cette idée : au lieu de mesurer une pente entre deux points fixes, on la mesure en un point, en faisant tendre l'écart vers zéro. C'est l'outil central de l'analyse au programme de Terminale S1 et S2.

:::remarque Pourquoi c'est utile
La dérivée mesure la **vitesse de variation** d'une grandeur. En physique, la dérivée de la position par rapport au temps est la vitesse ; en économie, la dérivée du coût est le coût marginal. En maths, elle donne les variations, les extremums et les tangentes.
:::

## Nombre dérivé et taux d'accroissement

Soit $f$ une fonction définie sur un intervalle $I$ et $a \in I$. Pour $h \neq 0$ tel que $a+h \in I$, on appelle **taux d'accroissement** de $f$ entre $a$ et $a+h$ le réel :

$$
\tau(h) = \frac{f(a+h)-f(a)}{h}
$$

:::formule Définition
$f$ est **dérivable en $a$** si le quotient $\dfrac{f(a+h)-f(a)}{h}$ admet une limite finie quand $h$ tend vers $0$. Cette limite est le **nombre dérivé** de $f$ en $a$, noté $f'(a)$ :

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}
$$
:::

Si $f$ est dérivable en $a$, alors $f$ est continue en $a$. La réciproque est fausse : la fonction $x \mapsto |x|$ est continue en $0$ mais n'est pas dérivable en $0$ (les taux d'accroissement à gauche et à droite valent $-1$ et $1$).

:::exemple Calcul avec la définition
Montrer que $f(x)=x^2$ est dérivable en $3$ et calculer $f'(3)$.

Pour $h \neq 0$ :
$$
\frac{f(3+h)-f(3)}{h} = \frac{(3+h)^2-9}{h} = \frac{9+6h+h^2-9}{h} = 6+h.
$$

Quand $h \to 0$, ce quotient tend vers $6$. Donc $f$ est dérivable en $3$ et $f'(3)=6$.
:::

## Interprétation géométrique : la tangente

La droite $(AM)$ où $M\big(a+h\,;\,f(a+h)\big)$ a pour coefficient directeur $\tau(h)$. Quand $h \to 0$, le point $M$ se rapproche de $A$ et la droite $(AM)$ tend vers une position limite : la **tangente** à la courbe en $A$.

:::formule Équation de la tangente
Si $f$ est dérivable en $a$, la tangente à $\mathcal{C}_f$ au point $A\big(a\,;\,f(a)\big)$ a pour équation :

$$
y = f'(a)(x-a) + f(a)
$$
:::

:::erreur Erreur fréquente
Écrire $y = f'(a)x + f(a)$. Il manque le terme $-f'(a)a$ : la tangente ne passe pas forcément par l'origine !
:::

## Fonction dérivée et dérivées usuelles

Lorsque $f$ est dérivable sur un intervalle $I$, la fonction qui à tout $x \in I$ associe $f'(x)$ est la **fonction dérivée** de $f$.

:::formule Tableau des dérivées usuelles
| $f(x)$ | $f'(x)$ | Dérivable sur |
| --- | --- | --- |
| $k$ (constante) | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $x^n$ ($n \in \mathbb{N}^*$) | $n x^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x^n}$ ($n \in \mathbb{N}^*$) | $-\dfrac{n}{x^{n+1}}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0\,;\,+\infty[$ |
| $\ln x$ | $\dfrac{1}{x}$ | $]0\,;\,+\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
:::

:::remarque Dérivée de $\sqrt{u}$
La formule générale est $\left(\sqrt{u}\right)' = \dfrac{u'}{2\sqrt{u}}$, valable là où $u>0$. Elle sera très utilisée dans les exercices d'optimisation.
:::

## Opérations sur les fonctions dérivables

Soient $u$ et $v$ deux fonctions dérivables sur un intervalle $I$, et $k$ un réel.

:::formule Règles de calcul
- **Somme** : $(u+v)' = u'+v'$ et $(k\,u)' = k\,u'$.
- **Produit** : $(uv)' = u'v + uv'$.
- **Quotient** : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$, avec $v(x) \neq 0$ sur $I$.
- **Composée** : $\big(v \circ u\big)' = u' \times (v' \circ u)$, c'est-à-dire $\big(v(u(x))\big)' = u'(x)\,v'(u(x))$.
- **Puissance** : $\left(u^n\right)' = n\,u^{n-1}\,u'$.
:::

:::methode Dériver une fonction composée
1. Identifier la fonction « extérieure » $v$ et la fonction « intérieure » $u$.
2. Dériver $v$ en laissant $u(x)$ à l'intérieur.
3. Multiplier par $u'(x)$.

Exemple : $f(x)=\left(3x^2+1\right)^4$. Ici $u(x)=3x^2+1$ et $v(t)=t^4$.
$$
f'(x) = 4\left(3x^2+1\right)^3 \times 6x = 24x\left(3x^2+1\right)^3.
$$
:::

:::exemple Dérivée d'un quotient
$f(x)=\dfrac{2x+1}{x-3}$ sur $]3\,;\,+\infty[$.

On pose $u(x)=2x+1$ et $v(x)=x-3$, donc $u'(x)=2$ et $v'(x)=1$.
$$
f'(x) = \frac{2(x-3)-(2x+1)\times 1}{(x-3)^2} = \frac{2x-6-2x-1}{(x-3)^2} = \frac{-7}{(x-3)^2}.
$$

La dérivée est toujours strictement négative : $f$ est strictement décroissante sur chaque intervalle de son domaine.
:::

## Signe de la dérivée et variations

:::formule Théorème fondamental
Soit $f$ dérivable sur un intervalle $I$.
- Si $f'(x) \geq 0$ pour tout $x \in I$, alors $f$ est croissante sur $I$.
- Si $f'(x) \leq 0$ pour tout $x \in I$, alors $f$ est décroissante sur $I$.
- Si $f'(x) = 0$ pour tout $x \in I$, alors $f$ est constante sur $I$.
:::

:::formule Condition d'extremum local
Si $f$ est dérivable sur un intervalle ouvert contenant $a$ et si $f$ admet un extremum local en $a$, alors $f'(a)=0$.

Attention : $f'(a)=0$ ne suffit pas. La fonction $x \mapsto x^3$ vérifie $f'(0)=0$ mais n'a pas d'extremum en $0$.
:::

Le signe de $f'$ se déduit souvent d'une factorisation. On étudie alors le signe de chaque facteur dans un tableau de signes, puis on en déduit les variations de $f$.

## Étude complète d'une fonction polynôme

:::methode Méthode en 5 étapes
1. **Domaine** : préciser l'ensemble de définition et de dérivabilité.
2. **Dérivée** : calculer $f'(x)$ puis factoriser.
3. **Signe** : étudier le signe de $f'(x)$ (tableau de signes).
4. **Variations** : dresser le tableau avec les valeurs des extremums et les limites aux bornes.
5. **Lecture** : tangentes horizontales, nombre de solutions de $f(x)=k$, allure de la courbe.
:::

:::exemple Étude de $f(x)=x^3-3x+1$
$f$ est dérivable sur $\mathbb{R}$ et $f'(x)=3x^2-3=3(x-1)(x+1)$.

$f'(x)>0$ sur $]-\infty\,;\,-1[$, $f'(x)<0$ sur $]-1\,;\,1[$, $f'(x)>0$ sur $]1\,;\,+\infty[$.

| $x$ | $-\infty$ | $-1$ | $1$ | $+\infty$ |
| --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $-\infty$ | $\nearrow$ | $3$ | $\searrow$ | $-1$ | $\nearrow$ | $+\infty$ |

$f$ admet un maximum local $f(-1)=3$ et un minimum local $f(1)=-1$. Les limites sont $\lim_{x\to-\infty}f(x)=-\infty$ et $\lim_{x\to+\infty}f(x)=+\infty$.

:::erreur Ne pas confondre extremum et maximum global
Un extremum local ne décrit le comportement de $f$ que **au voisinage** du point. Ici $3$ est un maximum local mais pas un maximum global, puisque $f(x) \to +\infty$ quand $x \to +\infty$.
:::

## Applications à l'optimisation

De nombreux problèmes de BAC se ramènent à maximiser ou minimiser une grandeur (aire, volume, coût). La démarche est toujours la même :

1. Choisir une variable $x$ et exprimer la grandeur à optimiser en fonction de $x$.
2. Déterminer l'intervalle de validité (longueurs positives, contraintes géométriques).
3. Dériver, étudier le signe, conclure sur l'extremum.
4. Vérifier que l'extremum est atteint dans l'intervalle et interpréter concrètement.

:::exemple Boîte sans couvercle
On découpe des carrés de côté $x$ aux quatre coins d'une feuille carrée de $20$ cm de côté, puis on plie pour former une boîte. Le volume est
$$
V(x)=x(20-2x)^2, \quad 0<x<10.
$$

On développe : $V(x)=4x^3-80x^2+400x$, donc $V'(x)=12x^2-160x+400=4(3x^2-40x+100)$.

Le discriminant vaut $1600-1200=400$, d'où les racines $x=\dfrac{40\pm 20}{6}$, soit $x=\dfrac{10}{3}$ ou $x=10$. Sur $]0\,;\,10[$, $V'$ s'annule seulement en $\dfrac{10}{3}$ et change de signe $+ \to -$ : le volume est maximal pour $x=\dfrac{10}{3}$ cm, avec $V_{\max}=\dfrac{10}{3}\left(20-\dfrac{20}{3}\right)^2=\dfrac{16000}{27}\approx 593$ cm³.
:::

## Ce qu'il faut retenir

- $f'(a)$ est la limite du taux d'accroissement : c'est aussi la pente de la tangente.
- La tangente en $a$ a pour équation $y=f'(a)(x-a)+f(a)$.
- Maîtriser le tableau des dérivées usuelles et les règles produit, quotient, composée.
- Le signe de $f'$ donne les variations ; $f'$ qui s'annule en changeant de signe donne un extremum.
- Toujours vérifier le domaine avant de dériver.
