---
titre: "Fonctions numériques : rappels et compléments"
accroche: Continuité, théorème des valeurs intermédiaires · Fonction réciproque · Prolongement par continuité
series: S2, S4, S5
ordre: 31
duree: 45
demo: false
statut: publie
objectifs:
  - Continuité, théorème des valeurs intermédiaires
  - Fonction réciproque
  - Prolongement par continuité
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Ce chapitre regroupe trois acquis indispensables pour les séries S2, S4 et S5 : la **continuité** et le théorème des valeurs intermédiaires (prouver l'existence d'une solution), la **fonction réciproque** (résoudre $f(x) = k$ grâce aux variations) et le **prolongement par continuité** (combler un trou d'expression). Ce sont des questions à points faciles quand la rédaction est correcte.
:::

## Rappels sur la continuité

:::definition Continuité en un point
$f$ est **continue en $a$** si $a$ appartient au domaine de $f$ et

$$
\lim_{x \to a} f(x) = f(a).
$$

Autrement dit : calculer la limite en $a$ revient à calculer la valeur en $a$ — on peut « remplacer » $x$ par $a$.
:::

:::formule Continuité sur un intervalle
$f$ est continue sur un intervalle $I$ si elle est continue en tout point de $I$ (avec la continuité aux bornes prise du côté de $I$).

Fonctions usuelles continues sur tout leur domaine :

| Fonction | Ensemble de continuité |
| --- | --- |
| Polynôme $P$ | $\mathbb{R}$ |
| $\dfrac{1}{x^n}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $[0\,;\,+\infty[$ |
| $\ln x$ | $]0\,;\,+\infty[$ |
| $e^x$, $\sin x$, $\cos x$ | $\mathbb{R}$ |
:::

:::formule Opérations qui conservent la continuité
Si $f$ et $g$ sont continues en $a$, alors :

- $f \pm g$ et $f \times g$ sont continues en $a$ ;
- $\dfrac{f}{g}$ est continue en $a$ si $g(a) \neq 0$ ;
- $g \circ f$ est continue en $a$ si $f(a)$ appartient au domaine de $g$ (et $g$ est continue en $f(a)$).
:::

:::methode Prouver qu'une fonction rationnelle est continue
1. Déterminer le domaine $D$ (exclure les racines et les zéros du dénominateur).
2. Pour tout $a \in D$ : écrire $\lim\limits_{x \to a} f(x)$, puis remplacer $x$ par $a$ (licite, le dénominateur ne s'annule pas).
3. Conclure : $\lim\limits_{x \to a} f(x) = f(a)$, donc $f$ est continue en $a$, donc continue sur $D$.
:::

:::exemple Fonction morceau par morceau
$$
f(x) =
\begin{cases}
\dfrac{x^2 - 1}{x - 1} & \text{si } x \neq 1 \\[6pt]
k & \text{si } x = 1
\end{cases}
$$

Pour $x \neq 1$ : $f(x) = \dfrac{(x-1)(x+1)}{x-1} = x + 1$, donc $\lim\limits_{x \to 1} f(x) = 2$.

La fonction est continue en $1$ si et seulement si $f(1) = k = 2$.
:::

:::erreur Les erreurs qui coûtent des points
1. Remplacer $x$ par $a$ dans une forme $\dfrac{0}{0}$ sans simplifier d'abord.
2. Oublier de préciser le **domaine** dans la conclusion (« continue sur $\mathbb{R}$ » alors qu'un dénominateur s'annule).
3. Conclure à la continuité d'un quotient sans vérifier que le dénominateur ne s'annule pas en $a$.
:::

## Théorème des valeurs intermédiaires

:::formule TVI
Soit $f$ **continue** sur l'intervalle $[a\,;\,b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c \in [a\,;\,b]$ tel que

$$
f(c) = k.
$$
:::

:::formule Cas des zéros (corollaire)
$$
f \text{ continue sur } [a\,;\,b] \quad \text{et} \quad f(a) \times f(b) < 0
\;\Longrightarrow\;
\exists\, c \in \,]a\,;\,b[ : f(c) = 0.
$$
:::

:::methode Rédiger une démonstration d'existence
1. Construire une fonction $f$ **continue** sur un intervalle $[a\,;\,b]$ (le dire, le justifier : somme, produit, quotient de continues…).
2. Calculer $f(a)$ et $f(b)$ : signes contraires (pour $f(c) = 0$) ou encadrement de $k$.
3. Citer le **théorème des valeurs intermédiaires** : il existe $c \in [a\,;\,b]$ tel que $f(c) = 0$ (ou $f(c) = k$).
4. Si $f$ est strictement monotone sur $[a\,;\,b]$, ajouter : la solution est **unique**.
:::

:::exemple Existence et unicité
Montrer que $x^3 + x - 1 = 0$ admet une unique solution dans $[0\,;\,1]$.

Posons $f(x) = x^3 + x - 1$ : polynôme, donc continue sur $\mathbb{R}$.

- $f(0) = -1 < 0$ et $f(1) = 1 > 0$ : signes contraires → par le TVI, il existe $c \in \,]0\,;\,1[$ tel que $f(c) = 0$.
- $f'(x) = 3x^2 + 1 > 0$ : $f$ est strictement croissante sur $\mathbb{R}$ → la solution est **unique**.
:::

:::piege Le TVI exige la continuité
Écrire « $f(0) < 0 < f(1)$ donc il y a une solution » **sans** avoir vérifié la continuité est une faute. Un fonction discontinue peut sauter la valeur $0$ sans jamais l'atteindre.
:::

## Fonction réciproque

:::formule Existence de la réciproque
Si $f$ est **strictement monotone** sur un intervalle $I$ (strictement croissante ou strictement décroissante), elle est injective sur $I$ : elle admet une **réciproque** $f^{-1}$ définie sur $f(I)$, strictement monotone de même sens.
:::

:::formule Propriétés de $f^{-1}$
- $f^{-1}(f(x)) = x$ et $f(f^{-1}(y)) = y$ ;
- $f$ croissante $\iff$ $f^{-1}$ croissante ; $f$ décroissante $\iff$ $f^{-1}$ décroissante ;
- $f$ et $f^{-1}$ ont des **variations « en miroir »** : tableau de $f^{-1}$ obtenu en permutant les lignes de celui de $f$ ;
- L'équation $f(x) = k$ a les mêmes solutions que $x = f^{-1}(k)$.
:::

:::methode Utiliser la réciproque pour résoudre $f(x) = k$
1. Vérifier que $f$ est strictement monotone sur l'intervalle donné (via $f'$).
2. Résoudre $y = f^{-1}(k)$ : cela revient à changer de ligne dans le tableau de variations — la valeur $k$ se lit en colonne, la solution $x$ en ligne.
3. Vérifier que la solution appartient au domaine.
:::

:::exemple Résolution par le tableau
Soit $f(x) = x^3 - 3x$ sur $[0\,;\,2]$. On calcule $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$ : sur $[0\,;\,2]$, $f'$ est négatif sur $]0\,;\,1[$ et positif sur $]1\,;\,2[$.

Résoudre $f(x) = -2$ : $f(0) = 0$, $f(1) = -2$ : la solution est $x = 1$ (lue directement dans le tableau). Résoudre $f(x) = 0$ sur $]0\,;\,2[$ : $f(0) = 0$ et $f(2) = 2$, $f$ décroît puis croît : $x = 0$ (borne) et une autre valeur entre $1$ et $2$ — ici $x = \sqrt{3} \approx 1{,}73$.
:::

:::erreur Attention au domaine de $f^{-1}$
$f^{-1}$ est définie sur **$f(I)$**, l'image de $I$ par $f$, pas nécessairement sur $\mathbb{R}$. Résoudre $f(x) = 25$ n'a de sens que si $25 \in f(I)$ : toujours vérifier l'appartenance de $k$ à l'image.
:::

## Prolongement par continuité

:::definition Prolongement par continuité
Soit $f$ définie sur $D$, et $a$ une valeur d'exclusion de $D$. Si $\lim\limits_{x \to a} f(x)$ existe et vaut $\ell$, on peut **prolonger** $f$ en $a$ en posant

$$
f(a) = \ell = \lim_{x \to a} f(x).
$$

La nouvelle fonction est alors **continue en $a$**.
:::

:::methode Compléter une fonction pour la rendre continue
1. Calculer $\lim\limits_{x \to a} f(x)$ pour $x \neq a$ (simplifier l'expression si forme $\dfrac{0}{0}$).
2. Poser $f(a) = $ cette limite.
3. Vérifier : $\lim\limits_{x \to a} f(x) = f(a)$ ✓.
:::

:::exemple Deux prolongements classiques
- $f(x) = \dfrac{\sin 3x}{x}$ pour $x \neq 0$ : $\lim\limits_{x \to 0} \dfrac{\sin 3x}{x} = 3$ (en posant $u = 3x$, $\dfrac{\sin 3x}{3x} \times 3 \to 1 \times 3$). Prolongement : $f(0) = 3$.
- $f(x) = \dfrac{e^x - 1}{x}$ pour $x \neq 0$ : $\lim\limits_{x \to 0} = 1$. Prolongement : $f(0) = 1$.
:::

:::remarque Limites remarquables utiles au prolongement
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{e^x - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1.
$$

Pour $f(x) = (1+x)^{1/x}$ : $\lim\limits_{x \to 0} f(x) = e$ ; prolongement en $0$ valant $e$.
:::

:::erreur Un prolongement n'est pas une « approximation »
On ne dit pas « $f(0) \approx 3$ » : on **définit** $f(0) = 3$ exactement, et c'est ce qui rend la fonction continue. Le prolongement est unique (deux fonctions continues égales hors de $a$ sont égales en $a$ aussi).
:::

## Ce qu'il faut retenir

- **Continuité en $a$** : $a \in D_f$ et $\lim\limits_{x \to a} f(x) = f(a)$ ; somme, produit, quotient (dénominateur non nul) et composée de continues restent continues.
- **TVI** : $f$ continue sur $[a\,;\,b]$ et $k$ entre $f(a)$ et $f(b)$ $\Rightarrow$ $\exists\, c \in [a\,;\,b]$ tel que $f(c) = k$ ; signes contraires aux bornes pour $f(c) = 0$ ; la monotonie donne l'unicité.
- **Réciproque** : $f$ strictement monotone sur $I$ $\Rightarrow$ $f^{-1}$ existe sur $f(I)$, de même sens de variation ; $f(x) = k \iff x = f^{-1}(k)$.
- **Prolongement par continuité** en $a$ : poser $f(a) = \lim\limits_{x \to a} f(x)$ ; limites remarquables $\dfrac{\sin x}{x}$, $\dfrac{e^x-1}{x}$, $\dfrac{\ln(1+x)}{x}$ en $0$.
- Rédaction BAC : toujours citer la continuité, l'intervalle, les valeurs aux bornes, puis le théorème.
