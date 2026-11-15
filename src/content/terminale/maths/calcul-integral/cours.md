---
titre: Calcul intégral
accroche: "Primitives des fonctions usuelles · Intégrale : définition et propriétés · Calcul d’aires"
series: L, S1, S3, S2, S4, S5
ordre: 13
duree: 45
demo: false
statut: publie
objectifs:
  - Primitives des fonctions usuelles
  - "Intégrale : définition et propriétés"
  - Calcul d’aires
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Le calcul intégral est le **cœur de l'analyse** : calculer des aires avec la fonction primitive, utiliser les propriétés de l'intégrale (linéarité, décomposition d'intervalle), résoudre une équation du type $\int_0^x f = F$ ou démontrer une inégalité intégrale. Il apparaît chaque année, en question longue comme dans les questions courtes de la partie « probabilités » (loi uniforme).
:::

## Primitives

:::definition Primitive
Soit $f$ définie sur un intervalle $I$. Une **primitive** de $f$ sur $I$ est une fonction $F$ dérivable sur $I$ telle que

$$
F'(x) = f(x) \quad \text{pour tout } x \in I.
$$

Deux primitives de $f$ sur $I$ diffèrent d'une **constante** : si $F$ et $G$ sont deux primitives, alors il existe $k \in \mathbb{R}$ tel que $G(x) = F(x) + k$.
:::

:::formule Tableau des primitives usuelles
| $f(x)$ | Une primitive $F(x)$ |
| --- | --- |
| $0$ | $k$ |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac{1}{x}$ | $ln\,\|x\|$ |
| $e^x$ | $e^x$ |
| $e^{ax}$ | $\dfrac{1}{a}\,e^{ax}$ |
| $\dfrac{1}{x+a}$ | $ln\|x + a\|$ |
| $\cos x$ | $\sin x$ |
| $\sin x$ | $-\cos x$ |
| $u'(x)\,e^{u(x)}$ | $e^{u(x)}$ |
| $\dfrac{u'(x)}{u(x)}$ | $ln\|u(x)\|$ |
:::

:::methode Trouver une primitive
1. **Reconnaître** la forme de la dérivée (carré parfait, quotient, produit...).
2. Appliquer le tableau ci-dessus.
3. Ajouter la constante $k$ si l'énoncé demande « toutes les primitives » ; sinon une seule suffit (on prend souvent $k = 0$).
:::

:::erreur Les erreurs classiques
1. Oublier que la primitive de $\dfrac{1}{x}$ est $ln\|x\|$ (et non $ln\,x$ si $x$ peut être négatif).
2. Écrire la primitive de $x^5$ comme $\dfrac{x^6}{6}$ — c'est juste — mais celle de $\dfrac{1}{x^2} = x^{-2}$ comme $\dfrac{x^{-1}}{-1} = -\dfrac{1}{x}$ : vérifier $n \neq -1$.
3. Oublier le facteur $\dfrac{1}{a}$ dans la primitive de $e^{ax}$ ou de $\cos(ax)$.
4. Confondre « une primitive » et « l'ensemble des primitives » : sans $+k$, la réponse est incomplète si l'énoncé le demande.
:::

:::exemple Recherche complète
Primitives de $f(x) = 3x^2 + \dfrac{2}{x} - e^{2x}$ sur $]0\,;\,+\infty[$ :

$$
F(x) = x^3 + 2\,ln(x) - \frac{1}{2}\,e^{2x} + k.
$$

*Vérification (dérivée) :* $F'(x) = 3x^2 + \dfrac{2}{x} - e^{2x} = f(x)$. ✓
:::

## Intégrale : définition et propriétés

:::definition Intégrale
Si $F$ est une primitive de $f$ sur $[a\,;\,b]$, on définit

$$
\boxed{\;\int_a^b f(x)\,dx = F(b) - F(a) = \Big[F(x)\Big]_a^b\;}
$$

C'est le **théorème fondamental du calcul intégral**.
:::

:::formule Propriétés
Pour $f$ et $g$ intégrables sur $[a\,;\,b]$ et $\lambda$, $\mu$ réels :

$$
\int_a^b \big(\lambda f + \mu g\big) = \lambda \int_a^b f + \mu \int_a^b g \quad (\text{linéarité})
$$

$$
\int_a^a f = 0, \qquad
\int_a^b f = -\int_b^a f, \qquad
\int_a^c f + \int_c^b f = \int_a^b f
$$

$$
\left(\int_a^x f(t)\,dt\right)' = f(x) \quad (\text{formule de Leibniz})
$$
:::

:::formule Inégalités intégrales
Si $f(x) \leq g(x)$ pour tout $x \in [a\,;\,b]$ :

$$
\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx
$$

Si $m \leq f(x) \leq M$ sur $[a\,;\,b]$ :

$$
m\,(b - a) \leq \int_a^b f(x)\,dx \leq M\,(b - a)
$$
:::

:::methode Calculer une intégrale en 3 étapes
1. **Primitives** : trouver une primitive $F$ de l'intégrande (reconnaissance de forme).
2. **Évaluation** : calculer $F(b) - F(a)$ en montrant les remplacements.
3. **Vérification** : redériver $F$ mentalement ; contrôler le signe si l'intégrande est positif.
:::

:::exemple Calcul type
$$
\int_1^2 \left(3x^2 + \frac{1}{x}\right)dx = \Big[x^3 + ln\|x\|\Big]_1^2 = (8 + ln\,2) - (1 + ln\,1) = 7 + ln\,2.
$$
:::

:::erreur Piège des bornes
Écrire $F(b) + F(a)$ ou oublier de **soustraire** la valeur en la borne inférieure : c'est l'erreur la plus fréquente. Et $\int_a^b$ n'est **pas** l'aire si $f$ change de signe (voir ci-dessous).
:::

## Calcul d'aires

:::formule Aire sous une courbe
Si $f(x) \geq 0$ sur $[a\,;\,b]$, l'aire $S$ comprise entre la courbe de $f$, l'axe des abscisses et les droites $x = a$, $x = b$ est

$$
\boxed{\;S = \int_a^b f(x)\,dx\;}
$$
:::

:::formule Aire entre deux courbes
Si $f(x) \geq g(x)$ sur $[a\,;\,b]$ :

$$
\boxed{\;S = \int_a^b \big(f(x) - g(x)\big)\,dx\;}
$$

Si l'ordre des courbes n'est pas connu, on intègre $|f - g|$ en séparant les intervalles où le signe change.
:::

:::formule Fonction signe et aire totale
Si $f$ change de signe sur $[a\,;\,b]$ en $c$ :

$$
S = \int_a^c f(x)\,dx - \int_c^b f(x)\,dx \quad (\text{si } f \leq 0 \text{ sur } [c\,;\,b])
$$

On **prend la valeur absolue de chaque morceau** : une aire est toujours positive.
:::

:::methode Protocole « calcul d'aire »
1. **Tracer** (ou décrire) la situation : courbes, intersections, axes.
2. **Trouver les points d'intersection** (résolution d'équation $f = g$) : ce sont les bornes d'intégration.
3. **Déterminer le signe** de $f$ (ou $f - g$) sur chaque intervalle.
4. **Écrire l'intégrale** (ou la somme d'intégrales si le signe change).
5. **Calculer** par une primitive et conclure avec l'unité (« unités carrées »).
:::

:::exemple Aire d'un triangle (contrôle)
L'aire sous $f(x) = x$ sur $[0\,;\,2]$ vaut $\displaystyle\int_0^2 x\,dx = \Big[\frac{x^2}{2}\Big]_0^2 = 2$, ce qui correspond au triangle de base $2$ et hauteur $2$ : $\dfrac{2 \times 2}{2} = 2$. ✓
:::

:::piege L'intégrale n'est pas toujours une aire
$\int_{-1}^{1} x\,dx = 0$ alors que la courbe décrit deux triangles d'aire $1/2$ de part et d'autre : les deux morceaux se **compensent**. L'aire géométrique totale vaut $1$. Toujours vérifier le signe de l'intégrande avant d'annoncer « l'aire est... ».
:::

## Calculs utiles et méthodes

:::remarque Intégrales de fonctions par morceaux
Sur un intervalle où $f$ est définie par plusieurs expressions (valeur absolue, min/max), on **découpe** l'intégrale aux points de changement :

$$
\int_{-2}^{2} |x|\,dx = \int_{-2}^{0} (-x)\,dx + \int_{0}^{2} x\,dx = 2 + 2 = 4.
$$
:::

:::methode Intégrale contenant un paramètre (type BAC)
On donne souvent $I(a) = \int_0^1 (ax + 1)\,dx = 3$ : on calcule $I(a)$ en fonction de $a$ (ici $\dfrac{a}{2} + 1$), puis on résout l'équation $\dfrac{a}{2} + 1 = 3$ pour trouver $a = 4$.
:::

:::methode Formule de Leibniz au BAC
Si $F(x) = \int_a^x f(t)\,dt$ :

- $F(a) = 0$ ;
- $F'(x) = f(x)$ (on dérive « en faisant varier la borne supérieure ») ;
- $F$ est une primitive de $f$ sur l'intervalle.
:::

:::exemple Leibniz
Soit $F(x) = \int_0^x (t^2 + 1)\,dt$. Alors $F'(x) = x^2 + 1$ et $F(x) = \dfrac{x^3}{3} + x$.
:::

## Ce qu'il faut retenir

- Primitive : $F' = f$ ; deux primitives diffèrent d'une **constante**.
- Tableau à connaître : $x^n \to \dfrac{x^{n+1}}{n+1}$ ($n \neq -1$), $\dfrac{1}{x} \to ln\|x\|$, $e^x \to e^x$, $\cos \to \sin$, $\sin \to -\cos$.
- $\displaystyle\int_a^b f = F(b) - F(a)$ : toujours **soustraire** la valeur en $a$.
- Propriétés : linéarité, $\int_a^b = -\int_b^a$, $\int_a^c + \int_c^b$, $(\int_a^x f)' = f(x)$.
- Aire $= \int f$ si $f \geq 0$ ; entre deux courbes $= \int (f - g)$ si $f \geq g$ ; sinon découper aux changements de signe.
- Points d'intersection = bornes d'intégration ; tracer avant de calculer.
