---
titre: Limite et continuité
accroche: Calcul sur les limites · Continuité en un point et sur un intervalle
series: L
ordre: 6
duree: 45
demo: false
statut: publie
objectifs:
  - Calcul sur les limites
  - Continuité en un point et sur un intervalle
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
La limite est le langage de toute l'analyse : elle sert à calculer des dérivées (nombre dérivé est une limite), à discuter le comportement d'une fonction en ses bornes et à justifier la résolution d'équations (méthode de l'encadrement). Les questions « calculer une limite » et « montrer que $f$ est continue en $a$ » apparaissent presque chaque année, y compris en L.
:::

## Rappel : la notion de limite

:::definition Limite finie
On dit que $f(x)$ tend vers $L$ quand $x$ tend vers $a$, et on note

$$
\lim_{x \to a} f(x) = L,
$$

si $f(x)$ peut être rendu aussi proche que l'on veut de $L$ en prenant $x$ assez proche de $a$ (**sans jamais valoir $a$**).

On dit aussi que $L$ est la **limite** de $f$ en $a$.
:::

:::remarque Ce que « $x \to a$ » veut dire
$x$ s'approche de $a$ des deux côtés ($x < a$ puis $x > a$) mais $x \neq a$. La valeur $f(a)$, si elle existe, **ne joue aucun rôle** dans le calcul de la limite. Deux fonctions peuvent avoir la même limite en $a$ sans avoir la même valeur en $a$.
:::

:::formule Limites à connaître par cœur
$$
\lim_{x \to +\infty} \frac{1}{x} = 0, \qquad
\lim_{x \to -\infty} \frac{1}{x} = 0
$$

$$
\lim_{x \to a} c = c \quad (c \text{ constante}), \qquad
\lim_{x \to a} x = a
$$

$$
\text{si } P \text{ est un polynôme : } \lim_{x \to a} P(x) = P(a)
$$
:::

:::remarque Limites en $+\infty$ d'un polynôme ou d'un quotient
Pour un quotient de polynômes, on divise numérateur et dénominateur par la **plus haute puissance** de $x$ :

$$
\lim_{x \to +\infty} \frac{3x^2 + 1}{x^2 - 5} = \lim_{x \to +\infty} \frac{3 + \dfrac{1}{x^2}}{1 - \dfrac{5}{x^2}} = \frac{3 + 0}{1 - 0} = 3.
$$
:::

## Calcul sur les limites

:::formule Opérations sur les limites (cas des limites finies)
Si $\lim f(x) = L$ et $\lim g(x) = M$ sont **finies**, alors :

$$
\lim \big(f + g\big) = L + M, \qquad
\lim (f \times g) = L \times M, \qquad
\lim \left(\frac{f}{g}\right) = \frac{L}{M} \;\text{ si } M \neq 0
$$

$$
\lim_{x \to a} f(x)^n = L^n \quad (n \in \mathbb{N}^*)
$$
:::

:::methode Calculer une limite en 3 étapes
1. **Remplacer** : essayer de substituer $x = a$ dans l'expression.
2. Si la forme n'est **pas indéterminée** (on obtient un réel), la limite est ce réel.
3. Si la forme est **indéterminée** ($\dfrac{0}{0}$, $\infty - \infty$, $0 \times \infty$), alors factoriser, factoriser encore, ou diviser par la puissance de $x$ dominante.
:::

:::erreur Les formes indéterminées interdisent la substitution
- $\dfrac{0}{0}$ : la substitution ne donne aucune information, il faut **simplifier**.
- $\infty - \infty$ : mettre sur **le même dénominateur**.
- $\dfrac{\infty}{\infty}$ : diviser par la plus haute puissance de $x$.

Écrire « $\dfrac{0}{0} = 1$ » est une faute : $\dfrac{0}{0}$ n'est pas un nombre.
:::

:::exemple Limite en un point, forme $\dfrac{0}{0}$
Calculons $\lim\limits_{x \to 3} \dfrac{x^2 - 9}{x - 3}$.

Pour $x = 3$ : $\dfrac{0}{0}$, forme indéterminée. On factorise :

$$
\frac{x^2 - 9}{x - 3} = \frac{(x-3)(x+3)}{x-3} = x + 3 \quad \text{pour } x \neq 3.
$$

Or $x \neq 3$ quand $x \to 3$ :

$$
\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} (x+3) = 6.
$$
:::

:::exemple Limite en $+\infty$, forme $\dfrac{\infty}{\infty}$
$$
\lim_{x \to +\infty} \frac{2x^3 - x}{4x^3 + 5} = \lim_{x \to +\infty} \frac{2 - \dfrac{1}{x^2}}{4 + \dfrac{5}{x^3}} = \frac{2 - 0}{4 + 0} = \frac{1}{2}.
$$

On divise tous les termes par $x^3$ (la plus haute puissance présente).
:::

:::piege Ne pas confondre limite et valeur
$\lim\limits_{x \to 0} \dfrac{\sin x}{x} = 1$ alors que la fonction n'est pas définie en $0$ : la limite existe sans que la fonction existe en $0$. Le nombre $f(a)$ n'intervient **jamais** dans « $x \to a$ ».
:::

## Limites à gauche et à droite

:::formule Limites unilatérales
$$
\lim_{x \to a^-} f(x) = L_1 \quad (\text{en venant de la gauche}), \qquad
\lim_{x \to a^+} f(x) = L_2 \quad (\text{en venant de la droite})
$$

$$
\lim_{x \to a} f(x) \text{ existe } \iff L_1 = L_2 = L
$$
:::

:::exemple Fonction en escalier
Soit $f(x) = \dfrac{|x|}{x}$ pour $x \neq 0$.

$$
\lim_{x \to 0^-} f(x) = -1, \qquad \lim_{x \to 0^+} f(x) = 1.
$$

Les deux limites unilatérales diffèrent : $\lim\limits_{x \to 0} f(x)$ **n'existe pas**.
:::

## Continuité

:::formule Définition de la continuité en un point
$f$ est **continue en $a$** si $a$ appartient au domaine de $f$ **et**

$$
\boxed{\;\lim_{x \to a} f(x) = f(a)\;}
$$

Trois conditions sont donc nécessaires : $f(a)$ existe, la limite existe, et elles sont **égales**.
:::

:::formule Continuité sur un intervalle
$f$ est continue sur l'intervalle $I$ si elle est continue **en chaque point** de $I$.

- Une fonction polynôme est continue sur $\mathbb{R}$.
- Une fonction rationnelle est continue sur tout intervalle qui évite ses pôles.
- $\sqrt{x}$ est continue sur $[0\,;\,+\infty[$, $\ln x$ sur $]0\,;\,+\infty[$.
:::

:::methode Montrer qu'une fonction est continue en $a$
1. Vérifier que $a$ appartient au domaine de $f$ et calculer $f(a)$.
2. Calculer $\lim\limits_{x \to a} f(x)$ (par factorisation ou forme indéterminée résolue).
3. Comparer : si la limite **égale** $f(a)$, la fonction est continue en $a$ ; sinon elle est **discontinue**.
:::

:::exemple Démonstration complète
Montrons que $f(x) = \dfrac{x^2 - 4}{x - 2}$ en $x \neq 2$ et $f(2) = 5$ est discontinue en $2$.

- $2$ est dans le domaine : $f(2) = 5$ existe.
- Pour $x \neq 2$ : $f(x) = \dfrac{(x-2)(x+2)}{x-2} = x+2$, donc $\lim\limits_{x \to 2} f(x) = 4$.
- Or $4 \neq 5 = f(2)$ : la condition $\lim_{x \to 2} f(x) = f(2)$ n'est pas remplie, $f$ est **discontinue en $2$**.

Si au contraire on avait posé $f(2) = 4$, la fonction serait devenue continue : c'est une **discontinuité évitable**.
:::

:::erreur Erreurs fréquentes
1. Oublier de calculer $f(a)$ : dire « la limite existe donc $f$ est continue » est incomplet.
2. Utiliser $f(a)$ dans le calcul de la limite : on ne remplace jamais $x$ par $a$ **avant** d'avoir traité la forme indéterminée.
3. Conclure « $f$ est continue » en un seul point à partir du **graphique** : la démonstration exige limite + valeur.
:::

## Applications : encadrement et théorème des valeurs intermédiaires

:::methode Méthode de l'encadrement
Si $g(x) \leq f(x) \leq h(x)$ au voisinage de $a$ et que $\lim g = \lim h = L$, alors $\lim f = L$ (théorème d'encadrement).

S'applique notamment pour les fonctions bornées : $-1 \leq \sin x \leq 1$.
:::

:::remarque Théorème des valeurs intermédiaires
Si $f$ est continue sur $[a\,;\,b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, alors il existe $c \in \,]a\,;\,b[$ tel que $f(c) = k$.

C'est la **justification théorique** de la résolution graphique : « l'équation $f(x) = k$ admet au moins une solution dans l'intervalle ». Au BAC, on l'écrit toujours quand on raisonne sur l'existence d'une solution.
:::

## Ce qu'il faut retenir

- $\lim_{x \to a} f(x)$ ne dépend **jamais** de $f(a)$.
- Pour un polynôme : la limite en $a$ vaut $P(a)$ ; pour un quotient en $+\infty$ : diviser par la plus haute puissance.
- Formes indéterminées $\dfrac{0}{0}$, $\infty - \infty$, $\dfrac{\infty}{\infty}$ : ne jamais substituer, toujours **simplifier**.
- $\lim_{x \to a} f(x)$ existe $\iff$ limites à gauche et à droite existent et sont **égales**.
- Continuité en $a$ : $a \in D_f$ **et** $\lim_{x \to a} f(x) = f(a)$ (trois vérifications).
- Limites à gauche/droite différentes $\Rightarrow$ discontinue (et parfois limite n'existe pas).
