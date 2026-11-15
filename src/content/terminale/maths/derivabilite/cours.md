---
titre: Dérivabilité
accroche: Nombre dérivé et interprétation géométrique · Théorèmes sur les dérivées · Utilisations de la dérivée
series: L
ordre: 7
duree: 45
demo: false
statut: publie
objectifs:
  - Nombre dérivé et interprétation géométrique
  - Théorèmes sur les dérivées
  - Utilisations de la dérivée
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
En série L, la dérivation tombe presque toujours sous forme de questions **structurées** : calculer un nombre dérivé par la définition, donner l'équation de la tangente, justifier qu'une fonction est continue parce qu'elle est dérivable, puis utiliser le signe de la dérivée pour étudier des variations. Chaque étape est notée séparément : la rédaction rigoureuse fait gagner la totalité des points.
:::

## Nombre dérivé : la définition

:::formule Taux d'accroissement
Soit $f$ définie sur un intervalle $I$ et $a \in I$. Pour tout $h \neq 0$ tel que $a + h \in I$, le **taux d'accroissement** de $f$ entre $a$ et $a+h$ est

$$
\tau(h) = \frac{f(a+h) - f(a)}{h}.
$$
:::

:::formule Nombre dérivé
$f$ est **dérivable en $a$** si la limite suivante existe et est finie :

$$
\boxed{\;f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}\;}
$$

Cette limite est le **nombre dérivé** de $f$ en $a$.
:::

:::methode Calculer $f'(a)$ par la définition
1. Écrire le quotient $\dfrac{f(a+h) - f(a)}{h}$.
2. Développer et **factoriser** $f(a+h) - f(a)$ par $h$ (c'est toujours possible : l'expression est nulle pour $h = 0$).
3. Simplifier par $h$ (car $h \neq 0$).
4. Faire tendre $h$ vers $0$ : la limite existe, c'est $f'(a)$.
:::

:::exemple Démonstration complète
Montrons que $f(x) = x^2$ est dérivable en $a = 3$ et calculons $f'(3)$.

Pour $h \neq 0$ :

$$
\frac{f(3+h) - f(3)}{h} = \frac{(3+h)^2 - 9}{h} = \frac{9 + 6h + h^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h.
$$

Quand $h \to 0$, $6 + h \to 6$. Donc $f$ est dérivable en $3$ et $f'(3) = 6$.
:::

:::remarque Dérivabilité sur un intervalle
$f$ est dérivable sur $I$ si elle est dérivable en **chaque point** de $I$ (aux bornes, on ne considère que la dérivée unilatère). La fonction dérivée $f'$ associe à chaque $x \in I$ le réel $f'(x)$.
:::

## Interprétation géométrique : la tangente

:::formule Pente de la tangente
Si $f$ est dérivable en $a$, alors $f'(a)$ est le **coefficient directeur de la tangente** à la courbe $\mathcal{C}_f$ au point $A(a\,;\,f(a))$.
:::

:::formule Équation de la tangente
$$
\boxed{\;y = f'(a)\,(x - a) + f(a)\;}
$$
:::

:::erreur L'erreur qui coûte un point
Écrire $y = f'(a)\,x + f(a)$ : c'est **faux**. La tangente ne passe pas forcément par l'origine. La forme correcte est $y = f'(a)(x-a) + f(a)$, qui peut se développer en $y = f'(a)\,x + \big(f(a) - a f'(a)\big)$.
:::

:::exemple Tangente d'un polynôme
$f(x) = x^3 - 3x$ en $a = 1$ : $f(1) = 1 - 3 = -2$ et $f'(x) = 3x^2 - 3$, donc $f'(1) = 0$.

La tangente est **horizontale** : $y = 0 \times (x-1) + (-2)$, soit $y = -2$.
:::

:::remarque Lien entre pente et variations
- $f'(a) > 0$ : la tangente monte, $f$ croît localement en $a$ ;
- $f'(a) < 0$ : la tangente descend, $f$ décroît localement ;
- $f'(a) = 0$ : tangente horizontale (point remarquable possible).
:::

## Théorèmes sur les dérivées

:::formule Théorème fondamental : dérivable implique continue
Si $f$ est **dérivable en $a$**, alors $f$ est **continue en $a$**.

La réciproque est **fausse** : $x \mapsto |x|$ est continue en $0$ mais pas dérivable en $0$ (pente $-1$ à gauche, $+1$ à droite).
:::

:::formule Opérations sur les dérivées
Si $u$ et $v$ sont dérivables sur un intervalle $I$ :

$$
(u + v)' = u' + v'
\qquad
(k\,u)' = k\,u'
\qquad
(uv)' = u'v + uv'
$$

$$
\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \;\;(v \neq 0)
\qquad
\big(v \circ u\big)'(x) = u'(x)\, v'(u(x))
$$
:::

:::formule Théorème de la constante
Si $f'(x) = 0$ pour **tout** $x$ d'un intervalle $I$, alors $f$ est constante sur $I$ : il existe un réel $k$ tel que $f(x) = k$ pour tout $x \in I$.

Conséquence utile : si $f'$ et $g'$ coïncident sur $I$, alors $f - g$ est constante sur $I$.
:::

:::formule Théorème de Rolle
Soit $f$ continue sur $[a\,;\,b]$, dérivable sur $]a\,;\,b[$, et telle que $f(a) = f(b)$. Alors il existe $c \in \,]a\,;\,b[$ tel que

$$
f'(c) = 0.
$$

En termes géométriques : il existe une tangente **horizontale** entre les deux extrémités.
:::

:::exemple Application de Rolle
$f(x) = x^2 - 2x$ est polynôme (continue sur $\mathbb{R}$, dérivable sur $\mathbb{R}$) et $f(0) = 0 = f(2)$. Rolle garantit un $c \in \,]0\,;\,2[$ avec $f'(c) = 0$. Effectivement $f'(x) = 2x - 2$ s'annule en $c = 1 \in \,]0\,;\,2[$. ✓
:::

:::erreur Piège du « dérivée nulle »
$f'(a) = 0$ en **un point** ne suffit pas à conclure sur les variations : c'est le signe de $f'$ sur tout un intervalle qui compte. La fonction $x \mapsto x^3$ vérifie $f'(0) = 0$ mais est croissante sur $\mathbb{R}$.
:::

## Utilisations de la dérivée

:::methode Étudier les variations en 4 étapes
1. **Domaine** et dérivabilité : écrire l'ensemble de définition.
2. **Calculer** $f'(x)$, puis le **factoriser**.
3. **Signe** de $f'$ : tableau de signes (les racines de $f'$ sont les points critiques).
4. **Tableau de variations** avec les valeurs aux points critiques et les limites aux bornes.
:::

:::formule Sens de variation et extremums
$$
f' \geq 0 \text{ sur } I \Rightarrow f \text{ croissante sur } I
\qquad
f' \leq 0 \text{ sur } I \Rightarrow f \text{ décroissante sur } I
$$

Si $f$ est dérivable en $a$ et admet un extremum **local** en $a$, alors $f'(a) = 0$ (condition **nécessaire**).
:::

:::exemple Étude complète
$f(x) = \dfrac{1}{3}x^3 - x$ sur $\mathbb{R}$ :

- $f'(x) = x^2 - 1 = (x-1)(x+1)$ ;
- $f'(x) > 0$ sur $]-\infty\,;\,-1[$ et $]1\,;\,+\infty[$, $f'(x) < 0$ sur $]-1\,;\,1[$ ;
- maximum local en $x = -1$ : $f(-1) = \dfrac{2}{3}$ ; minimum local en $x = 1$ : $f(1) = -\dfrac{2}{3}$.

| $x$ | $-\infty$ | $-1$ | $1$ | $+\infty$ |
| --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $-\infty$ | $\nearrow$ | $\frac{2}{3}$ | $\searrow$ | $-\frac{2}{3}$ | $\nearrow$ | $+\infty$ |
:::

:::methode Autres utilisations au BAC
- **Tangente** : écrire $y = f'(a)(x-a) + f(a)$.
- **Nombre de solutions de $f(x) = k$** : lire les intersections de la courbe avec l'horizontale $y = k$ grâce au tableau de variations.
- **Optimisation** : exprimer la grandeur à maximiser $G(x)$, déterminer son intervalle de validité, dériver, conclure en phrases avec les unités.
- **Justifier une inégalité** : montrer que $f$ est croissante puis comparer $f(x)$ à $f(b)$.
:::

:::piege Oublier l'intervalle de validité dans un problème
Dans « maximiser l'aire d'un rectangle de périmètre $40$ », si $x$ est la longueur d'un côté, alors $x > 0$ **et** $20 - x > 0$, donc $x \in \,]0\,;\,20[$. Un extremum trouvé hors de cet intervalle n'a aucun sens physique : vérifie toujours les bornes avant de conclure.
:::

## Ce qu'il faut retenir

- $f'(a) = \lim\limits_{h \to 0} \dfrac{f(a+h)-f(a)}{h}$ : calcul par la définition = développement, factorisation par $h$, simplification, limite.
- $f'(a)$ est la **pente de la tangente** en $a$ : $y = f'(a)(x-a) + f(a)$.
- **Dérivable $\Rightarrow$ continue** (la réciproque est fausse : $|x|$).
- $f' = 0$ sur tout un intervalle $\Rightarrow$ $f$ constante sur cet intervalle.
- **Rolle** : $f$ continue sur $[a\,;\,b]$, dérivable sur $]a\,;\,b[$, $f(a) = f(b)$ $\Rightarrow$ $\exists\, c$ avec $f'(c) = 0$.
- Variations par le signe de $f'$ ; extremum local $\Rightarrow$ $f'(a) = 0$ (condition nécessaire, pas suffisante).
