---
titre: Composition des applications
accroche: Reconnaître et calculer g∘f(x)
series: L
ordre: 1
duree: 45
demo: false
statut: publie
objectifs:
  - Reconnaître et calculer g∘f(x)
partie: Algèbre
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
La composition d'applications intervient dès qu'un énonce demande « donner l'ensemble de définition de $g \circ f$ », « calculer $(g \circ f)(x)$ » ou « écrire $h$ sous la forme $g \circ f$ ». C'est aussi la porte d'entrée de la règle de dérivation des fonctions composées, qui rapporte souvent des points dans les questions d'étude de fonction.
:::

## Composition de deux applications

:::definition Composition
Soient $f$ une application de $E$ dans $F$ et $g$ une application de $F$ dans $G$. La **composition** $g \circ f$ est l'application de $E$ dans $G$ définie par :

$$
(g \circ f)(x) = g\big(f(x)\big) \quad \text{pour tout } x \in E.
$$
:::

:::remarque Comment lire et écrire
On lit « $g$ o $f$ ». On applique **d'abord $f$** (celle écrite **à droite**), puis **$g$** :

$$
x \xrightarrow{\;f\;} f(x) \xrightarrow{\;g\;} g\big(f(x)\big).
$$

Les notations $g \circ f(x)$ et $(g \circ f)(x)$ sont équivalentes.
:::

:::exemple Calcul de base
Soient $f(x) = 2x + 1$ et $g(x) = x^2 - 3$.

$$
(g \circ f)(x) = g\big(2x+1\big) = (2x+1)^2 - 3 = 4x^2 + 4x + 1 - 3 = 4x^2 + 4x - 2.
$$

À l'inverse :

$$
(f \circ g)(x) = f\big(x^2-3\big) = 2(x^2-3) + 1 = 2x^2 - 5.
$$

Les deux résultats sont différents : la composition n'est pas commutative.
:::

## Domaine de la composition

:::methode Domaine de $g \circ f$ en 3 étapes
1. Déterminer $D_f$, l'ensemble de définition de $f$.
2. Déterminer $D_g$, l'ensemble de définition de $g$ (souvent $g$ n'est pas définie partout : $\sqrt{\cdot}$, $\ln(\cdot)$, $1/\cdot$).
3. Le domaine de $g \circ f$ est l'ensemble des $x \in D_f$ tels que $f(x) \in D_g$ :

$$
\mathrm{Dom}(g \circ f) = \{\, x \in D_f \;\;/\;\; f(x) \in D_g \,\}.
$$
:::

:::exemple Domaine avec racine et logarithme
Soient $f(x) = \sqrt{x-2}$ (définie sur $[2\,;\,+\infty[$) et $g(t) = \ln t$ (définie sur $]0\,;\,+\infty[$).

$$
(g \circ f)(x) = \ln\!\left(\sqrt{x-2}\right).
$$

Il faut $\sqrt{x-2} > 0$, c'est-à-dire $x - 2 > 0$, donc $x > 2$. Le domaine est $]2\,;\,+\infty[$.

Le point $x=2$ est bien exclu, même si $\sqrt{0}=0$ existe : on ne peut pas calculer $\ln 0$.
:::

:::erreur Les deux erreurs qui coûtent des points
1. Répondre « $D_f$ » sans vérifier que $f(x)$ appartient au domaine de $g$. Le domaine de $g \circ f$ est en général **plus petit** que celui de $f$.
2. Inverser l'ordre : $(g \circ f)(x) = g(f(x))$ et **pas** $f(g(x))$.
:::

## Propriétés de la composition

:::formule Propriétés essentielles
- **Associativité** : $(h \circ g) \circ f = h \circ (g \circ f)$ : les parenthèses sont inutiles, on écrit simplement $h \circ g \circ f$.
- **Identité** : si $\mathrm{id}(x) = x$, alors $\mathrm{id} \circ f = f$ et $f \circ \mathrm{id} = f$.
- **Non commutativité** : en général $g \circ f \neq f \circ g$.
:::

:::remarque Composition inversible
Si $f$ est bijective, elle admet une réciproque $f^{-1}$ et

$$
f^{-1} \circ f = \mathrm{id}, \qquad f \circ f^{-1} = \mathrm{id}.
$$

C'est la propriété qui permet de « décomposer » une équation en posant $u = f(x)$.
:::

## Composition et variations

:::formule Sens de variation de $g \circ f$
Soit $I$ un intervalle où $f$ et $g \circ f$ sont définies. Alors :

| $f$ sur $I$ | $g$ sur $f(I)$ | $g \circ f$ sur $I$ |
| --- | --- | --- |
| croissante | croissante | **croissante** |
| décroissante | décroissante | **croissante** |
| croissante | décroissante | **décroissante** |
| décroissante | croissante | **décroissante** |
:::

:::remarque Règle mnémotechnique
Deux sens de variation **identiques** (deux croissances ou deux décroissances) donnent une composition **croissante** ; deux sens **contraires** donnent une composition **décroissante**. Autrement dit : la composition est croissante si le nombre de fonctions décroissantes est **pair**.
:::

:::exemple Appliquer la règle
$f(x) = x^2 - 4x$ est décroissante sur $]-\infty\,;\,2[$ et $g(t) = e^t$ est croissante sur $\mathbb{R}$. Donc $g \circ f$ est **décroissante** sur $]-\infty\,;\,2[$, car les deux sens de variation sont contraires.
:::

## Résolution de l'équation $(g \circ f)(x) = k$

:::methode Méthode de substitution
1. Poser $u = f(x)$ et résoudre l'équation simple $g(u) = k$.
2. Pour chaque valeur trouvée $u_0$, résoudre $f(x) = u_0$.
3. Ne garder que les solutions appartenant au domaine de $g \circ f$.
:::

:::exemple Résolution complète
Soient $f(x) = 3x - 2$ et $g(t) = t^2$. Résoudre $(g \circ f)(x) = 25$ sur $\mathbb{R}$.

On a $(g \circ f)(x) = (3x-2)^2$, donc

$$
(3x-2)^2 = 25 \iff 3x-2 = 5 \;\text{ ou }\; 3x-2 = -5 \iff x = \frac{7}{3} \;\text{ ou }\; x = -1.
$$

Les deux solutions appartiennent à $\mathbb{R}$, domaine de $g \circ f$. L'ensemble des solutions est $\left\{-1\,;\,\dfrac{7}{3}\right\}$.
:::

:::piege Ne pas développer quand on peut factoriser
Dans $(3x-2)^2 = 25$, développer donne $9x^2 - 12x - 21 = 0$, ce qui rallonge les calculs. La forme « carré égal à un carré » se résout immédiatement. Choisis toujours le chemin le plus court.
:::

## Représentation graphique de $g \circ f$

:::methode Construire la courbe de $g \circ f$
1. Prendre une abscisse $a$ sur la courbe de $\mathcal{C}_f$ : lire $b = f(a)$.
2. Transporter $b$ en **abscisse** sur la courbe de $\mathcal{C}_g$ : lire $c = g(b)$.
3. Reporter le point $(a\,;\,c)$ : il appartient à la courbe de $g \circ f$.
4. Recommencer pour d'autres abscisses et joindre les points par une courbe continue.
:::

:::exemple Composition d'applications affines
Soient $f(x) = 2x+1$ et $g(x) = -x + 3$.

$$
(g \circ f)(x) = -(2x+1) + 3 = -2x + 2.
$$

La composition est encore affine : sa pente est le **produit** des pentes $2 \times (-2) = -4$ ? Non : ici $g$ a pour pente $-1$, donc la pente de $g \circ f$ vaut $2 \times (-1) = -2$, ce qui correspond bien à $-2x+2$.
:::

:::remarque Pour les fonctions affines
Si $f(x) = ax + b$ et $g(x) = a'x + b'$, alors $g \circ f(x) = a'(ax+b) + b' = (a'a)x + (a'b + b')$ : la pente de la composition est le produit des pentes.
:::

## Reconnaître une composition dans un énoncé

:::methode Décomposer une fonction $h$
1. Repérer l'opération calculée **en premier** dans l'expression de $h$ (une parenthèse, une racine, un logarithme…).
2. Poser $f(x) =$ cette partie-là : c'est la fonction **intérieure**.
3. Réécrire $h(x)$ en fonction de $f(x)$ : alors $h(x) = g(f(x))$ donne la fonction **extérieure** $g$.
:::

:::exemple Décomposition en deux écritures
$h(x) = (2x+3)^5$ :

- $f(x) = 2x+3$ et $g(t) = t^5$ : $h = g \circ f$.
- On peut aussi écrire $f(x) = x^5$ et $g(t) = (2t+3)^5$ : $h = g \circ f$ encore, mais l'ordre des opérations guide la première décomposition, la plus utile au BAC.
:::

:::erreur Décomposer dans le mauvais sens
Dans $h(x) = \sqrt{4x+1}$, la fonction intérieure est $f(x) = 4x+1$ et la fonction extérieure est $g(t) = \sqrt{t}$. Écrire $f(x)=\sqrt{x}$ puis $g(t)=4t+1$ conduit à $g \circ f(x) = 4\sqrt{x}+1 \neq h(x)$ : le résultat est faux et la vérification « je calcule $g(f(x))$ » aurait immédiatement montré l'erreur.
:::

## Ce qu'il faut retenir

- $(g \circ f)(x) = g\big(f(x)\big)$ : on applique **$f$ en premier** (à droite), puis $g$.
- Le domaine de $g \circ f$ est $\{x \in D_f \,/\, f(x) \in D_g\}$ : toujours vérifier la **double condition**.
- La composition est **associative** mais **non commutative**.
- Variations : deux sens **identiques** $\Rightarrow$ composition croissante ; sens **contraires** $\Rightarrow$ composition décroissante.
- Pour résoudre $(g \circ f)(x) = k$ : poser $u = f(x)$, résoudre $g(u)=k$ puis $f(x)=u$.
- Pour décomposer $h$ : repérer ce qui se calcule en premier = fonction intérieure.
