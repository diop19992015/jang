---
titre: Factorisation des polynômes
accroche: Méthode de Horner · Division par x − a · Signe d’un polynôme, d’une fonction rationnelle
series: L
ordre: 2
duree: 45
demo: false
statut: publie
objectifs:
  - Méthode de Horner
  - Division par x − a
  - Signe d’un polynôme, d’une fonction rationnelle
partie: Algèbre
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
La factorisation est l'outil de base pour résoudre $P(x) = 0$, étudier le signe de $P$ ou d'une fonction rationnelle, et dénombrer les solutions d'une équation. Au BAC L, la division par $x-a$, la méthode de Horner et les tableaux de signes rapportent des points **faciles** : ce sont des questions de procédure, à ne jamais laisser de côté.
:::

## Rappels : polynôme, degré, évaluation

:::definition Polynôme
Un **polynôme** $P$ de degré $n$ est une expression de la forme

$$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0, \qquad a_n \neq 0.
$$

Les réels $a_i$ sont les **coefficients** de $P$, et $a_0 = P(0)$ est le **terme indépendant**.
:::

:::remarque Rédaction attendue
Au BAC, on écrit toujours « $P$ est un polynôme de degré $2$ à coefficients réels » avant de l'utiliser. Un polynôme de degré $2$ est un **trinôme du second degré** : c'est lui qu'on sait résoudre avec le discriminant.
:::

## Division par $x - a$

:::formule Théorème de la division euclidienne
Pour tout polynôme $P$ et tout réel $a$, il existe un unique couple $(Q\,;\,r)$ de polynômes tel que

$$
P(x) = (x-a)\,Q(x) + r,
$$

où $r$ est un réel (le **reste**) et $Q$ a pour degré $\deg P - 1$.
:::

:::formule Relation avec l'évaluation
En posant $x = a$ dans $P(x) = (x-a)Q(x) + r$, on obtient :

$$
\boxed{P(a) = r}
$$

Le reste de la division par $x-a$ est donc la valeur de $P$ en $a$.
:::

:::formule Réciproque (factorisation)
$$
P(a) = 0 \iff (x-a) \text{ divise } P, \quad \text{c'est-à-dire } P(x) = (x-a)\,Q(x).
$$

Un réel $a$ tel que $P(a)=0$ s'appelle une **racine** de $P$.
:::

:::methode Diviser $P$ par $x-a$ (procédure)
1. Écrire les coefficients de $P$ **du plus haut degré au terme indépendant**.
2. Appliquer la division euclidienne : la division s'écrit $P = (x-a)Q + r$.
3. Vérifier immédiatement : si $P(a) = r$, la division est juste.
:::

:::exemple Division de $P(x) = x^3 - 2x^2 + 5x - 6$ par $x-2$
On calcule d'abord $P(2) = 8 - 8 + 10 - 6 = 4$.

Division :

| | $x^3$ | $x^2$ | $x$ | $1$ |
| --- | --- | --- | --- | --- |
| Coefficients | $1$ | $-2$ | $5$ | $-6$ |
| $\times\,2$ | | $2$ | $0$ | $10$ |
| **Somme** | $1$ | $0$ | $5$ | $4$ |

Les coefficients obtenus $1\,;\,0\,;\,5$ donnent $Q(x) = x^2 + 0x + 5 = x^2+5$ et le reste vaut $4$.

Donc $P(x) = (x-2)(x^2+5) + 4$, et on vérifie que le reste vaut bien $P(2) = 4$. ✓
:::

## Méthode de Horner

:::definition Horner
La méthode de Horner calcule à la fois la valeur $P(a)$ et le quotient de la division par $x-a$ avec une seule ligne d'additions.
:::

:::methode Schéma de Horner pour $P(a)$
1. Écrire les coefficients de $P$ sur une ligne.
2. Sous le **premier coefficient**, écrire un tiret : on recopie ce coefficient.
3. Multiplier ce nombre par $a$ et écrire le résultat sous le coefficient suivant.
4. Additionner : c'est le nouveau nombre. Recommencer jusqu'au terme indépendant.
5. Le dernier nombre obtenu est $P(a)$ ; les nombres précédents forment les coefficients de $Q$.
:::

:::exemple Calcul de $P(3)$ pour $P(x) = 2x^3 - 5x^2 + x - 4$
Coefficients : $2\,;\,-5\,;\,1\,;\,-4$.

| Étape | $x^3$ | $x^2$ | $x$ | $1$ |
| --- | --- | --- | --- | --- |
| Coefficients | $2$ | $-5$ | $1$ | $-4$ |
| Résultats | $2$ | $2 \times 3 - 5 = 1$ | $1 \times 3 + 1 = 4$ | $4 \times 3 - 4 = 8$ |

Donc $P(3) = 8$ et le quotient est $Q(x) = 2x^2 + x + 4$ :

$$
2x^3 - 5x^2 + x - 4 = (x-3)(2x^2 + x + 4) + 8.
$$

Vérification : $Q(x)$ a pour degré $2$, comme prévu ($3-1$). ✓
:::

:::remarque Avantage de Horner
En une ligne, on obtient **à la fois** la valeur de $P$ en $a$ et le quotient. C'est la méthode la plus rapide et la plus sûre : elle évite les erreurs de signe des développements.
:::

:::erreur Erreur fréquente
Oublier de multiplier **le résultat précédent** par $a$ (et non par le coefficient suivant), ou oublier d'additionner au lieu de multiplier. Repère : on multiplie toujours par $a$, puis on **additionne** les coefficients colonne par colonne.
:::

## Identités remarquables

:::formule Les cinq identités à connaître
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

:::methode Factoriser un polynôme du second degré
1. Repérer le **facteur commun** : $2x^2 + 6x = 2x(x+3)$.
2. Repérer l'**identité remarquable** (différence de carrés, carré parfait).
3. Sinon, calculer le discriminant $\Delta = b^2 - 4ac$ :
   - $\Delta > 0$ : $P(x) = a(x - x_1)(x - x_2)$ avec $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ ;
   - $\Delta = 0$ : $P(x) = a(x - x_1)^2$ ;
   - $\Delta < 0$ : $P$ ne se factorise pas en facteurs réels du premier degré.
:::

:::exemple Factorisation complète
$$
P(x) = x^3 - 4x = x(x^2-4) = x(x-2)(x+2).
$$

Facteur commun $x$, puis différence de carrés : $x^2 - 4 = (x-2)(x+2)$. Les racines sont $-2$, $0$ et $2$.
:::

:::piege Le facteur commun est souvent oublié
Avant toute technique, cherche **toujours** un facteur commun. Dans $3x^3 - 12x$, écrire directement $3x(x^2-4)$ puis $3x(x-2)(x+2)$ évite une minute de calcul inutile et une erreur de signe.
:::

## Signe d'un polynôme

:::methode Tableau de signes d'un polynôme
1. Factoriser $P$ complètement en facteurs du **premier degré** (et carrés de trinômes).
2. Déterminer le signe de chaque facteur (un facteur $x - \alpha$ change de signe en $\alpha$).
3. Lire le signe de $P$ = produit des signes, colonne par colonne.
4. Lire les variations ou le signe : $P \geq 0$ ou $P \leq 0$.
:::

:::exemple Tableau de signes de $P(x) = (x-1)(x+2)$
| $x$ | $-\infty$ | $-2$ | $1$ | $+\infty$ |
| --- | --- | --- | --- | --- |
| $x + 2$ | $-$ | $0$ | $+$ | $+$ |
| $x - 1$ | $-$ | $-$ | $0$ | $+$ |
| $P(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |

Donc $P(x) \geq 0$ sur $]-\infty\,;\,-2] \cup [1\,;\,+\infty[$ et $P(x) \leq 0$ sur $[-2\,;\,1]$.
:::

## Signe d'une fonction rationnelle

:::definition Fonction rationnelle
Une **fonction rationnelle** est le quotient de deux polynômes :

$$
f(x) = \frac{N(x)}{D(x)}.
$$

Elle est définie là où $D(x) \neq 0$. Ses **zéros** sont les racines de $N$ et ses **pôles** (ou singularités) sont les racines de $D$.
:::

:::methode Tableau de signes d'un quotient
1. Résoudre $N(x) = 0$ : ce sont les **zéros** (le graphe traverse l'axe).
2. Résoudre $D(x) = 0$ : ce sont les **pôles** (le graphe est interrompu, on écrit un tiret $|$).
3. Déterminer le signe de $N$ et de $D$ séparément.
4. Composer les signes (un quotient est positif si numérateur et dénominateur ont le **même** signe).
5. Signaler que $f$ n'est **pas définie** aux pôles.
:::

:::exemple Étude de $f(x) = \dfrac{x-2}{x+1}$
$N(x) = x-2$ s'annule en $2$ et change de signe ; $D(x) = x+1$ s'annule en $-1$.

| $x$ | $-\infty$ | $-1$ | | $2$ | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $x - 2$ | $-$ | $-$ | | $0$ | $+$ |
| $x + 1$ | $-$ | $|$ | $+$ | $+$ | $+$ |
| $f(x)$ | $+$ | — | $-$ | $0$ | $+$ |

Donc $f(x) \geq 0$ sur $]-\infty\,;\,-1[\, \cup\, [2\,;\,+\infty[$ et $f(x) \leq 0$ sur $]-1\,;\,2]$.
:::

:::erreur Trois pièges sur les fonctions rationnelles
1. Oublier d'exclure les racines du dénominateur : le signe y est **indéfini**, on écrit un tiret, pas $0$.
2. Oublier de factoriser le numérateur avant de résoudre $N(x)=0$.
3. Confondre un **zéro** ($N=0$) et un **pôle** ($D=0$) dans le tableau : le premier donne un point sur l'axe, le second une coupure verticale.
:::

## Résolution d'équations et d'inéquations

:::methode Méthode générale
1. Mettre tout d'un même côté : $P(x) \geq 0$ ou $Q(x) = 0$ avec un seul membre nul.
2. Factoriser complètement.
3. Résoudre $P(x) = 0$ (racines) puis lire le tableau de signes pour l'inéquation.
4. Écrire la solution sous forme d'**intervalles** ou d'**ensembles**, jamais sous forme d'inégalités seules.
:::

:::exemple Résoudre $\dfrac{x^2 - 4}{x} \leq 0$
Factorisons : $\dfrac{(x-2)(x+2)}{x} \leq 0$. Points remarquables : $-2$, $0$ (pôle), $2$.

Le quotient est nul en $-2$ et $2$, négatif sur $]-\infty\,;\,-2[$ (signe $+$/$+$?), vérifions : pour $x = -3$, $((-)(-))/(-) = (+)/(-) = -$ ; sur $]-2\,;\,0[$ avec $x=-1$ : $((-)(+))/(-) = (-)/(-) = +$ ; sur $]0\,;\,2[$ avec $x=1$ : $((-)(+))/(+) = -$ ; sur $]2\,;\,+\infty[$ : $+$.

Solution : $S = \,]-\infty\,;\,-2] \cup \,]0\,;\,2]$.
:::

## Ce qu'il faut retenir

- Division par $x-a$ : $P(x) = (x-a)Q(x) + r$ avec $r = P(a)$.
- Réciproque : $P(a) = 0 \iff (x-a)$ divise $P$.
- La méthode de Horner donne en une ligne $P(a)$ et le quotient $Q$.
- Maîtriser les cinq identités remarquables et le facteur commun.
- Signe d'un polynôme : **factoriser** puis tableau de signes.
- Signe d'un quotient : zéros du numérateur, **pôles** du dénominateur, même signe $\Rightarrow$ quotient positif.
- Écrire toujours la solution d'une inéquation sous forme d'intervalles.
