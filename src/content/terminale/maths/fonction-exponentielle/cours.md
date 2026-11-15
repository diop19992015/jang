---
titre: Fonction exponentielle
accroche: Définition, propriétés, courbe · Équations et inéquations · Étude de fonctions avec l’exponentielle
series: L, S2, S4, S5
ordre: 11
duree: 45
demo: false
statut: publie
objectifs:
  - Définition, propriétés, courbe
  - Équations et inéquations
  - Étude de fonctions avec l’exponentielle
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
L'exponentielle est la fonction **la plus utilisée** du programme : modèles de croissance (population, intérêts), étude de fonctions du type $xe^x$ ou $\dfrac{e^x}{x}$, limites en $+\infty$, démonstrations d'inégalités et résolution d'équations $e^x = k$. Elle tombe presque à chaque session, soit en question longue, soit dans une question courte de limite ou d'équation.
:::

## Définition et propriétés

:::definition Fonction exponentielle
La fonction $x \mapsto e^x$ (notée $exp$) est définie sur $\mathbb{R}$. Elle est caractérisée par :

$$
e^0 = 1, \qquad e^{x+y} = e^x \times e^y, \qquad (e^x)' = e^x.
$$

Pour tout réel $x$ : $e^x > 0$ (**toujours strictement positif**), et la fonction est strictement croissante.
:::

:::formule Propriétés algébriques
Pour tous réels $x$, $y$ et tout réel $n$ :

$$
\boxed{\;e^{x+y} = e^x \times e^y\;}
$$

$$
\boxed{\;e^{x-y} = \frac{e^x}{e^y}\;}
$$

$$
\boxed{\;(e^x)^n = e^{nx}\;}
$$

$$
\frac{1}{e^x} = e^{-x}, \qquad e^x \times e^{-x} = 1
$$
:::

:::erreur Les erreurs classiques
1. $e^{x+y} = e^x + e^y$ : **FAUX** (l'exponentielle transforme une somme en un **produit**).
2. $e^{2x} = (e^x)^2 = (e^x)^2$... c'est juste, mais $e^{x+x} \neq 2e^x$ : $e^{2x} = (e^x)^2 \neq e^x + e^x$.
3. $e^x = 0$ : **impossible**, $e^x > 0$ toujours (une équation $e^x = -3$ n'a aucune solution).
:::

:::exemple Calculs
$$
e^2 \times e^3 = e^5, \qquad
\frac{e^5}{e^2} = e^3, \qquad
(e^3)^2 = e^6, \qquad
e^{-2} = \frac{1}{e^2}.
$$

$$
2\,e^x = e^{x+ln(2)} \quad (\text{car } 2 = e^{ln\,2}).
$$
:::

## Représentation graphique

:::formule Tableau de définition et de variations
| | |
| --- | --- |
| Domaine | $\mathbb{R}$ |
| $e^0$ | $1$ : la courbe coupe l'axe des ordonnées en $A(0\,;\,1)$ |
| Positivité | $e^x > 0$ pour tout $x$ : la courbe est **toujours au-dessus** de l'axe des abscisses |
| Dérivée | $(e^x)' = e^x > 0$ : strictement croissante sur $\mathbb{R}$ |
| Limites | $\lim\limits_{x \to -\infty} e^x = 0$ ; $\lim\limits_{x \to +\infty} e^x = +\infty$ |
| Asymptote | $y = 0$ (axe des abscisses) est asymptote **horizontale à gauche** |
| Convexité | courbe « en J », toujours au-dessus de toute tangente |
:::

:::remarque Croissance extraordinaire
En $+\infty$, $e^x$ domine toutes les puissances de $x$ :

$$
\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \;\;(n \in \mathbb{R}), \qquad
\lim_{x \to +\infty} \frac{x^n}{e^x} = 0, \qquad
\lim_{x \to -\infty} x^n\,e^x = 0.
$$

En $-\infty$, $e^x$ tend vers $0$ très vite : c'est elle qui « gagne » face à une puissance $x^n \to \pm\infty$.
:::

:::formule Réciproque : les équations exponentielles
$e^x$ est strictement croissante et bijective de $\mathbb{R}$ vers $]0\,;\,+\infty[$ :

$$
e^x = k \;\text{ admet une solution} \iff k > 0, \quad \text{et alors } x = ln(k).
$$

$$
e^u = e^v \iff u = v.
$$
:::

## Équations et inéquations

:::methode Résoudre une équation exponentielle
1. **Isoler** l'exponentielle : $e^{u(x)} = k$.
2. Si $k \leq 0$ : **aucune solution** (car $e^{\bullet} > 0$).
3. Si $k > 0$ : passer au logarithme $u(x) = ln(k)$, puis résoudre.
4. Autre cas : mettre les deux membres sous la forme $e^{\bullet}$ puis utiliser $e^u = e^v \iff u = v$.
:::

:::exemple Résolutions
*$e^{2x} = e^{x+3}$ :* $2x = x + 3$, donc $x = 3$.

*$e^x = 5$ :* $x = ln(5) \approx 1{,}61$.

*$e^{x} = -2$ :* aucune solution (impossible : $e^x > 0$).

*$e^{2x} - 3e^x + 2 = 0$ :* c'est un trinôme en $X = e^x$ :

$$
X^2 - 3X + 2 = (X-1)(X-2) = 0 \iff X = 1 \;\text{ou}\; X = 2,
$$

soit $e^x = 1 \Rightarrow x = 0$, ou $e^x = 2 \Rightarrow x = ln(2)$.
:::

:::formule Inéquations exponentielles
$e^x$ est strictement croissante, donc elle **conserve le sens** de l'inégalité :

$$
e^u < e^v \iff u < v, \qquad
e^u \leq e^v \iff u \leq v.
$$

Pour $k > 0$ : $e^x < k \iff x < ln(k)$ ; $e^x > k \iff x > ln(k)$.
:::

:::piege L'inégalité du moment
Dans $e^x \geq 0$ : **toujours vrai** pour tout réel $x$ (inégalité sans objet, aucun $x$ à trouver). Dans $e^x > 0$ : pareil. Ne pas chercher de solution quand l'inégalité est une propriété.
:::

## Étude de fonctions avec l'exponentielle

:::formule Dérivées
$$
(e^x)' = e^x
$$

$$
\big(u(x)\,e^x\big)' = \big(u'(x) + u(x)\big)\,e^x
$$

$$
\left(\frac{e^x}{u(x)}\right)' = \frac{e^x\big(u(x) - u'(x)\big)}{\big(u(x)\big)^2}
$$

$$
\big(e^{u(x)}\big)' = u'(x)\,e^{u(x)}
$$
:::

:::exemple Étude de $g(x) = x\,e^x$ sur $\mathbb{R}$
- $g'(x) = (x + 1)\,e^x$ ; comme $e^x > 0$ toujours, le signe de $g'$ est celui de $x + 1$.
- $g'(x) < 0$ sur $]-\infty\,;\,-1[$, $g'(-1) = 0$, $g'(x) > 0$ sur $]-1\,;\,+\infty[$.
- **Minimum local** en $x = -1$ : $g(-1) = -\dfrac{1}{e} \approx -0{,}37$.
- Limites : $\lim\limits_{x \to -\infty} x\,e^x = 0$ (produit $\pm\infty \times 0$ : $e^x$ l'emporte) ; $\lim\limits_{x \to +\infty} x\,e^x = +\infty$.
- L'axe des abscisses est asymptote horizontale **à gauche**.
:::

:::methode Étudier une fonction avec $e^x$ (protocole)
1. **Domaine** (souvent $\mathbb{R}^*$ si $x$ est au dénominateur).
2. **Dérivée** : utiliser les formules ci-dessus, puis **factoriser par $e^x$** (qui est toujours positif : il ne modifie pas les signes).
3. **Signe de la dérivée** : tableau ou lecture directe.
4. **Limites** : en $-\infty$, $+\infty$, et aux bornes du domaine ; pour les formes $\dfrac{\infty}{\infty}$ ou $\infty - \infty$, factoriser par $e^x$ (ex. $\lim\limits_{x \to +\infty} \dfrac{x}{e^x} = 0$).
5. **Variations**, extremum, puis représentation.
:::

:::erreur Ce que le correcteur cherche toujours
1. La factorisation par $e^x$ **écrite**, avec la remarque « $e^x > 0$ donc le signe de $f'$ est celui de l'autre facteur ».
2. Les limites en $-\infty$ **et** en $+\infty$ (beaucoup d'élèves oublient $-\infty$).
3. Dans une équation $e^x = k$ : la condition $k > 0$ avant de répondre $x = ln(k)$.
:::

## Ce qu'il faut retenir

- $e^x > 0$ pour tout $x$ ; $e^0 = 1$ ; $(e^x)' = e^x$ ; strictement croissante.
- $e^{x+y} = e^x e^y$, $e^{x-y} = \dfrac{e^x}{e^y}$, $(e^x)^n = e^{nx}$, $e^{-x} = \dfrac{1}{e^x}$ — jamais de somme.
- Limites : $e^x \to 0$ en $-\infty$ (asymptote $y = 0$ à gauche), $e^x \to +\infty$ en $+\infty$ ; $e^x$ domine toute puissance.
- $e^x = k$ : solution unique $x = ln(k)$ si $k > 0$, sinon aucune ; $e^u = e^v \iff u = v$.
- $e^u < e^v \iff u < v$ (croissance).
- Étude : dériver puis **factoriser par $e^x$** ; ne pas oublier les limites aux deux bornes.
