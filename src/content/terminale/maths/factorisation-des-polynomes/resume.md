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

## L'essentiel du chapitre

:::formule Division euclidienne par $x - a$
$$
P(x) = (x-a)\,Q(x) + r, \qquad r = P(a)
$$

Le reste est la valeur de $P$ en $a$ ; $Q$ a pour degré $\deg P - 1$.
:::

:::formule Réciproque — factorisation
$$
P(a) = 0 \iff P(x) = (x-a)\,Q(x)
$$

$a$ est une **racine** de $P$ alors que $(x-a)$ est un **facteur** de $P$.
:::

:::formule Identités remarquables
$$
(a+b)^2 = a^2+2ab+b^2 \qquad (a-b)^2 = a^2-2ab+b^2
$$

$$
a^2 - b^2 = (a-b)(a+b)
$$

$$
a^3 + b^3 = (a+b)(a^2-ab+b^2) \qquad a^3 - b^3 = (a-b)(a^2+ab+b^2)
$$
:::

:::formule Factorisation d'un trinôme du second degré
$P(x) = ax^2+bx+c$ avec $\Delta = b^2 - 4ac$ :

- $\Delta > 0$ : $P(x) = a(x-x_1)(x-x_2)$, $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ ;
- $\Delta = 0$ : $P(x) = a(x-x_1)^2$ ;
- $\Delta < 0$ : pas de facteur réel du premier degré.
:::

:::formule Zéros et pôles d'un quotient
$$
f(x) = \frac{N(x)}{D(x)} \;\Rightarrow\;
\begin{cases}
N(x)=0 & \text{zéros (signe de } f \text{ nul)}\\
D(x)=0 & \text{pôles (} f \text{ non définie, tiret dans le tableau)}
\end{cases}
$$

$f(x) \geq 0$ quand $N$ et $D$ ont le **même signe** ; $f(x) \leq 0$ quand leurs signes sont **contraires**.
:::

## Méthode express

1. **Diviser** par $x-a$ (Horner) : ligne des coefficients, multiplication par $a$, additions ; dernier nombre $= P(a)$.
2. **Vérifier** : comparer le reste obtenu au calcul direct de $P(a)$.
3. **Factoriser** : facteur commun $\to$ identités remarquables $\to$ discriminant.
4. **Tableau de signes** d'un polynôme : factoriser en facteurs du premier degré, signe de chaque facteur, produit.
5. **Tableau de signes** d'un quotient : résoudre $N(x)=0$ et $D(x)=0$, signes séparés, puis quotient.
6. **Écrire la solution** en intervalles : $]-\infty\,;\,-2] \cup \,]0\,;\,2]$.

:::erreur Les erreurs qui coûtent des points
1. Écrire « $x = -2$ ou $x = 1$ » comme solution d'une inéquation : il faut des **intervalles**.
2. Oublier d'exclure les zéros du dénominateur : ce sont des pôles, le signe y est indéfini (tiret), pas zéro.
3. Repérer une racine mais oublier d'en déduire le facteur $(x-a)$ dans la factorisation.
4. Signe d'un produit oublié : ne jamais « deviner » entre deux points remarquables, toujours remplacer par une valeur test.
5. Erreur de signe dans l'identité $(a-b)^2 = a^2 - 2ab + b^2$ (le terme central est négatif).
:::

## Vocabulaire

- **Polynôme** : somme de puissances entières de $x$ à coefficients réels.
- **Degré** : plus haute puissance de $x$ (coefficient non nul).
- **Terme indépendant** : $P(0)$.
- **Division euclidienne** : $P = D \cdot Q + r$ avec $\deg r < \deg D$.
- **Reste** : dans la division par $x-a$, il vaut $P(a)$.
- **Racine** : réel $a$ tel que $P(a) = 0$.
- **Facteur** : polynôme qui divise $P$.
- **Identité remarquable** : égalité vraie pour toutes les valeurs des lettres.
- **Discriminant** : $\Delta = b^2 - 4ac$ du trinôme $ax^2+bx+c$.
- **Fonction rationnelle** : quotient de deux polynômes.
- **Zéro** : racine du numérateur ; **pôle** : racine du dénominateur.
