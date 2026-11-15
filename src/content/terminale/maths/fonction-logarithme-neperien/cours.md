---
titre: Fonction logarithme népérien
accroche: Définition et propriétés · Étude de la fonction ln
series: L, S1, S3, S2, S4, S5
ordre: 10
duree: 45
demo: false
statut: publie
objectifs:
  - Définition et propriétés
  - Étude de la fonction ln
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Le logarithme népérien est la fonction la plus utilisée après l'exponentielle : étude de fonction (limites en $0^+$, dérivée, asymptote horizontale), calculs de limites, démonstration d'inégalités, optimisation. Les propriétés $ln(ab) = ln(a) + ln(b)$ et $ln(a^n) = n\,ln(a)$ servent dans presque tous les sujets, y compris en questions courtes.
:::

## Définition

:::definition Fonction logarithme népérien
La fonction $ln$ (ou $\log$) est définie sur $]0\,;\,+\infty[$. Pour tout réel $x > 0$, $ln(x)$ est le **unique** réel $y$ tel que

$$
e^y = x.
$$

Autrement dit, $ln$ est la **fonction réciproque** de l'exponentielle restreite à $\mathbb{R}$ :

$$
x > 0 \;\Longrightarrow\; e^{ln(x)} = x, \qquad
t \in \mathbb{R} \;\Longrightarrow\; ln(e^t) = t.
$$
:::

:::remarque Domaine obligatoire
$ln(x)$ n'a de sens que si $x > 0$. Toute expression contenant $ln$ impose immédiatement une **condition** : $ln(0)$ et $ln(-1)$ n'existent pas. C'est la première chose à écrire quand on étudie une fonction contenant un logarithme.
:::

:::exemple Calculs simples
$$
ln(1) = 0 \;\;(\text{car } e^0 = 1), \qquad
ln(e) = 1 \;\;(\text{car } e^1 = e), \qquad
ln(e^3) = 3.
$$

$$
ln\left(\frac{1}{e}\right) = ln(e^{-1}) = -1.
$$
:::

## Propriétés algébriques

:::formule Propriétés fondamentales
Pour tous réels $a > 0$, $b > 0$ et tout réel $n$ :

$$
\boxed{\;ln(ab) = ln(a) + ln(b)\;}
$$

$$
\boxed{\;ln\left(\frac{a}{b}\right) = ln(a) - ln(b)\;}
$$

$$
\boxed{\;ln(a^n) = n\,ln(a)\;}
$$
:::

:::erreur Les erreurs classiques
1. $ln(a + b) = ln(a) + ln(b)$ : **FAUX**. Il n'existe aucune formule pour le logarithme d'une somme.
2. $ln(a) \times ln(b) = ln(ab)$ : **FAUX** aussi, le produit des logarithmes ne se simplifie pas.
3. $ln(a^2) = (ln\,a)^2$ : **FAUX**, c'est $ln(a^2) = 2\,ln(a)$ (pour $a > 0$).
:::

:::methode Simplifier une expression logarithmique
1. Écrire toutes les puissances sous la forme $a^n$.
2. Appliquer $ln(a^n) = n\,ln(a)$ pour **sortir** les exposants.
3. Regrouper en utilisant $ln(a) + ln(b) = ln(ab)$ et $ln(a) - ln(b) = ln(a/b)$.
4. Si possible, reconnaître $ln(e^k) = k$ pour annuler des termes.
:::

:::exemple Simplification
$$
2\,ln(3) + ln(4) - ln(6) = ln(3^2) + ln(4) - ln(6) = ln\left(\frac{9 \times 4}{6}\right) = ln(6).
$$
:::

:::formule Équations et inéquations logarithmiques
$$
ln(u) = ln(v) \iff u = v \;\;(u > 0 \text{ et } v > 0)
$$

$$
ln(u) < ln(v) \iff u < v \;\;(u > 0 \text{ et } v > 0)
$$

$ln$ est **strictement croissante** : on peut « enlever » les logarithmes en conservant le sens de l'inégalité.
:::

:::exemple Résolution d'une équation
$$
ln(x) = 2 \iff x = e^2 \quad (\text{car } e^{ln(x)} = x).
$$

$$
ln(x-1) = 0 \iff x - 1 = e^0 = 1 \iff x = 2 \quad (\text{et } 2 > 1 : \text{interdit respecté}).
$$
:::

## Étude de la fonction $ln$

:::formule Tableau de définition et de variations
| | |
| --- | --- |
| Domaine | $D = \,]0\,;\,+\infty[$ |
| $ln(1)$ | $0$ |
| Dérivée | $(ln\,x)' = \dfrac{1}{x} > 0$ pour $x > 0$ |
| Variations | **strictement croissante** sur $]0\,;\,+\infty[$ |
| Limites | $\lim\limits_{x \to 0^+} ln(x) = -\infty$ ; $\lim\limits_{x \to +\infty} ln(x) = +\infty$ |
| Représentation | courbe passant par $(1\,;\,0)$, croissante, au-dessus de $0$ pour $x > 1$, en dessous pour $0 < x < 1$ |
:::

:::remarque Comparaison en $+\infty$
La fonction $ln(x)$ croît, mais **très lentement** : pour tout réel $a > 0$,

$$
\lim_{x \to +\infty} \frac{ln(x)}{x} = 0, \qquad \lim_{x \to +\infty} ln(x) = +\infty.
$$

Ainsi $ln(x) < x$ pour $x$ grand (et même pour tout $x > 0$). Un logarithme fini reste toujours dominé par une puissance positive de $x$.
:::

:::erreur Une conséquence fréquente
Dans un calcul de limite, $ln(x) \to +\infty$ quand $x \to +\infty$, mais **lentement** : $\lim \dfrac{ln\,x}{x} = 0$. Écrire « $+\infty/+ \infty$ » sans préciser la méthode (croissance comparée) fait perdre le point.
:::

## Représentation graphique

:::methode Tracer la courbe de $ln$
1. Domaine : uniquement $x > 0$ : la courbe est **entièrement à droite** de l'axe des ordonnées.
2. Point particulier : $A(1\,;\,0)$ (intersection avec l'axe des abscisses).
3. Asymptote : l'axe des ordonnées ($x = 0$) est **asymptote verticale** car $ln(x) \to -\infty$ en $0^+$.
4. Variations : toujours croissante ; passe au-dessus de l'axe pour $x > 1$, dessous pour $0 < x < 1$.
:::

:::formule Réciproque graphique
La courbe de $ln$ est le **symétrique** de la courbe de $x \mapsto e^x$ par rapport à la droite $y = x$ (fonctions réciproques).
:::

:::exemple Limites graphiques
$$
\lim_{x \to 0^+} ln(x) = -\infty, \qquad
\lim_{x \to 0^+} x\,ln(x) = 0, \qquad
\lim_{x \to +\infty} \frac{ln(x)}{x} = 0.
$$

La limite $\lim\limits_{x \to 0^+} x\,ln(x) = 0$ (forme $0 \times -\infty$) est un classique : le facteur $x$ « gagne ».
:::

## Applications au BAC

:::methode Démontrer une inéquation avec $ln$
1. Poser $f(x) = $ expression contenant $ln$, préciser son domaine.
2. Calculer $f'(x)$ et montrer qu'il est positif (fonction croissante).
3. Utiliser $f$ croissante : $f(x) \geq f(a) \iff x \geq a$.
:::

:::exemple Démonstration type
Montrons que $ln(x) \leq x - 1$ pour tout $x > 0$.

Posons $f(x) = x - 1 - ln(x)$ sur $]0\,;\,+\infty[$ :

$$
f'(x) = 1 - \frac{1}{x} = \frac{x-1}{x}.
$$

$f'(x) < 0$ sur $]0\,;\,1[$, $f'(1) = 0$, $f'(x) > 0$ sur $]1\,;\,+\infty[$ : donc $f$ admet son **minimum** en $x = 1$, avec $f(1) = 1 - 1 - 0 = 0$.

Ainsi $f(x) \geq 0$ pour tout $x > 0$, c'est-à-dire $ln(x) \leq x - 1$. ✓
:::

:::methode Limites avec $ln$ : les 4 classiques
1. $\lim\limits_{x \to +\infty} \dfrac{ln\,x}{x^n} = 0$ pour tout $n > 0$ (croissance comparée).
2. $\lim\limits_{x \to 0^+} x^n\,ln\,x = 0$ pour tout $n > 0$.
3. $\lim\limits_{x \to +\infty} \dfrac{e^x}{ln\,x} = +\infty$ (l'exponentielle domine tout).
4. $\lim\limits_{x \to 1} \dfrac{ln\,x}{x-1} = 1$ (c'est la dérivée de $ln$ en $1$ : forme $\dfrac{0}{0}$).
:::

## Ce qu'il faut retenir

- $ln$ est définie sur $]0\,;\,+\infty)$ : **condition $x > 0$ toujours à écrire**.
- $ln(ab) = ln\,a + ln\,b$, $\ln(a/b) = ln\,a - ln\,b$, $ln(a^n) = n\,ln\,a$ — jamais de formule sur une somme.
- $e^{ln\,x} = x$ ($x > 0$) et $ln(e^t) = t$ : sert à résoudre $ln(u) = k \iff u = e^k$.
- $ln$ est **strictement croissante** : inégalités conservées ; dérivée $(ln\,x)' = 1/x$.
- Limites : $ln(x) \to -\infty$ en $0^+$, $\dfrac{ln\,x}{x} \to 0$ en $+\infty$, $x\,ln\,x \to 0$ en $0^+$.
- Courbe : à droite de l'axe des ordonnées, passe par $(1\,;\,0)$, axe des ordonnées = asymptote verticale.
