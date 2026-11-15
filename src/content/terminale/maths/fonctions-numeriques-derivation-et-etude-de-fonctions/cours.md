---
titre: "Fonctions numériques : dérivation et étude de fonctions"
accroche: Dérivée d’une composée et d’une réciproque · Accroissements finis · Fonctions rationnelles, irrationnelles, trigonométriques
series: S1, S3
ordre: 21
duree: 45
demo: false
statut: publie
objectifs:
  - Dérivée d’une composée et d’une réciproque
  - Accroissements finis
  - Fonctions rationnelles, irrationnelles, trigonométriques
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

:::remarque À quoi ça sert au BAC ?
Ce chapitre regroupe les trois outils qui font gagner des points dans les questions d'étude de fonction : la règle de dérivation des **fonctions composées** (partout où il y a une parenthèse, une racine ou un logarithme), le **théorème des accroissements finis** (pour borner une différence $f(b)-f(a)$ sans calculer $f$) et la dérivation de la **réciproque**. Ils servent aussi de méthode aux exercices de probabilités et de suites.
:::

## Rappels : nombre dérivé et tangente

:::formule Nombre dérivé
$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

Quand cette limite existe, $f$ est **dérivable** en $a$ : elle y est continue, et $f'(a)$ est le **coefficient directeur de la tangente** en $A(a\,;\,f(a))$ :

$$
y = f'(a)(x - a) + f(a).
$$
:::

:::formule Dérivées usuelles
| $f(x)$ | $f'(x)$ |
| --- | --- |
| $x^n$ | $n x^{n-1}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $e^x$ | $e^x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
:::

:::formule Règles d'opération
$$
(u+v)' = u' + v', \qquad
(uv)' = u'v + uv', \qquad
\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \;(v \neq 0)
$$
:::

## Dérivée d'une fonction composée

:::formule Règle de la chaîne
Si $v \circ u$ est composée de $u$ (intérieure) et $v$ (extérieure), toutes deux dérivables :

$$
\big(v \circ u\big)'(x) = u'(x) \times v'\big(u(x)\big).
$$
:::

:::methode Dériver une composée en 3 gestes
1. Repérer la **fonction intérieure** $u(x)$ (ce qui est entre parenthèses, sous une racine, dans un logarithme…).
2. Dériver la fonction extérieure **en laissant $u(x)$** à l'intérieur.
3. Multiplier par $u'(x)$.
:::

:::exemple Trois applications types
- $f(x) = (3x^2+1)^4$ : $f'(x) = 4(3x^2+1)^3 \times 6x = 24x(3x^2+1)^3$.
- $f(x) = \sqrt{x^2+9}$ : $f'(x) = \dfrac{2x}{2\sqrt{x^2+9}} = \dfrac{x}{\sqrt{x^2+9}}$.
- $f(x) = \ln(1+x^2)$ : $f'(x) = \dfrac{2x}{1+x^2}$.
:::

:::erreur Les erreurs qui coûtent des points
1. Oublier le facteur $u'(x)$ : $\big(\sqrt{u}\big)' = \dfrac{u'}{2\sqrt{u}}$, **jamais** $\dfrac{1}{2\sqrt{u}}$.
2. Dériver l'intérieur avant l'extérieur : dans $(3x^2+1)^4$, on dérive d'abord la puissance.
3. Écrire $(\ln u)' = \dfrac{1}{x}$ : c'est $\dfrac{u'}{u}$.
:::

## Dérivée de la fonction réciproque

:::formule Théorème de la réciproque
Soit $f$ strictement monotone et dérivable sur un intervalle $I$, $f'(a) \neq 0$ pour $a \in I$. Alors $f^{-1}$ est dérivable en $b = f(a)$ et :

$$
\big(f^{-1}\big)'(b) = \frac{1}{f'(a)} = \frac{1}{f'\big(f^{-1}(b)\big)}.
$$
:::

:::exemple Calcul avec $f(x) = x^3 + 2x$
$f'(x) = 3x^2 + 2$ est toujours $\geq 2 > 0$ : $f$ est strictement croissante sur $\mathbb{R}$, donc inversible.

En $a = 1$ : $b = f(1) = 3$, $f'(1) = 5$, donc

$$
(f^{-1})'(3) = \frac{1}{5}.
$$

**Interprétation géométrique** : la courbe de $f^{-1}$ est le symétrique de celle de $f$ par la droite $y = x$ ; la tangente en $(3\,;\,1)$ pour $f^{-1}$ a pour pente l'**inverse** de celle de la tangente en $(1\,;\,3)$ pour $f$.
:::

:::piege Attention à l'endroit de l'évaluation
Dans $(f^{-1})'(b) = \dfrac{1}{f'(a)}$, le numérateur se calcule en $a = f^{-1}(b)$, pas en $b$. Confondre $a$ et $b$ est l'erreur la plus fréquente.
:::

## Accroissements finis

:::formule Théorème des accroissements finis
Soit $f$ **continue** sur $[a\,;\,b]$ et **dérivable** sur $]a\,;\,b[$. Alors il existe au moins un réel $\xi \in \,]a\,;\,b[$ tel que :

$$
f(b) - f(a) = f'(\xi)\,(b - a).
$$
:::

:::methode Utiliser le théorème pour borner une différence
1. Vérifier la continuité sur $[a\,;\,b]$ et la dérivabilité sur $]a\,;\,b[$.
2. Écrire l'égalité avec le $\xi$ inconnu.
3. Encadrer $f'(\xi)$ : $m \leq f'(\xi) \leq M$.
4. Multiplier par $(b-a) > 0$ :

$$
m(b-a) \leq f(b) - f(a) \leq M(b-a).
$$
:::

:::exemple Borner $\ln 1{,}1$
Posons $f(x) = \ln x$ sur $[1\,;\,1{,}1]$, continue et dérivable avec $f'(x) = \dfrac{1}{x}$.

Sur $[1\,;\,1{,}1]$, $f'$ est décroissante, donc $\dfrac{1}{1{,}1} \leq f'(\xi) \leq 1$. En multipliant par $0{,}1$ :

$$
\frac{0{,}1}{1{,}1} \leq \ln 1{,}1 - \ln 1 \leq 0{,}1, \qquad \text{soit} \qquad 0{,}09 \leq \ln 1{,}1 \leq 0{,}1 .
$$

Le résultat est cohérent : $\ln 1{,}1 \approx 0{,}095$.
:::

:::erreur Théorème mal appliqué
L'égalité contient un $\xi$ **inconnu** : on ne peut pas le remplacer par une valeur choisie. On **encadre** $f'(\xi)$ sur tout l'intervalle, on ne le calcule pas.
:::

## Étude d'une fonction rationnelle, irrationnelle ou trigonométrique

:::methode Méthode complète en 6 étapes
1. **Domaine** : exclusions (dénominateur nul, racine négative, logarithme non positif).
2. **Dérivée** : calculer puis **factoriser** pour étudier le signe.
3. **Signe de $f'$** : tableau de signes, variations de $f$.
4. **Limites** : aux bornes du domaine et à l'infini (asymptotes).
5. **Points remarquables** : tangentes horizontales, points d'intersection avec les axes, asymptotes.
6. **Conclusion** : tableau récapitulatif, allure de la courbe, nombre de solutions de $f(x) = k$.
:::

:::exemple Étude de $f(x) = \dfrac{x}{1+x^2}$
**Domaine** : $\mathbb{R}$ (le dénominateur $1+x^2 \geq 1$ ne s'annule jamais).

**Dérivée** :

$$
f'(x) = \frac{(1+x^2) - x(2x)}{(1+x^2)^2} = \frac{1 - x^2}{(1+x^2)^2} = \frac{(1-x)(1+x)}{(1+x^2)^2}.
$$

Le dénominateur est toujours positif : le signe de $f'$ est celui de $(1-x)(1+x)$.

| $x$ | $-\infty$ | $-1$ | | $1$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | $0^-$ | $-\dfrac{1}{2}$ $\nearrow$ | | $\dfrac{1}{2}$ $\searrow$ | | $0^+$ |

**Limites** : $\lim\limits_{x \to \pm\infty} f(x) = 0$ (le dénominateur est de degré supérieur) : asymptote horizontale $y = 0$.

**Conclusion** : maximum local $f(1) = \dfrac{1}{2}$, minimum local $f(-1) = -\dfrac{1}{2}$, courbe en forme de « vallée montagne » symétrique (fonction impaire).
:::

:::exemple Étude rapide d'une fonction trigonométrique : $g(x) = \sin x - x$ sur $[0\,;\,\pi]$
$g'(x) = \cos x - 1 \leq 0$ car $\cos x \leq 1$ : $g$ est **décroissante** sur $[0\,;\,\pi]$.

$g(0) = 0$ et $g(\pi) = -\pi < 0$. Donc $g(x) < 0$ pour tout $x \in \,]0\,;\,\pi]$, c'est-à-dire $\sin x < x$ sur cet intervalle : inégalité classique, très utile pour des comparaisons de suites ou de limites.
:::

:::piege Rester sur l'intervalle donné
Un énoncé qui restreint $D$ à $[0\,;\,\pi]$ n'autorise pas à conclure sur $\mathbb{R}$ : $\sin x - x$ change de comportement ailleurs. Toujours **rester dans l'intervalle du sujet** et le mentionner dans la conclusion.
:::

## Ce qu'il faut retenir

- Règle de la chaîne : $(v \circ u)' = u' \times (v' \circ u)$ — dériver l'extérieur **en gardant** l'intérieur, puis multiplier par la dérivée de l'intérieur.
- Réciproque : $(f^{-1})'(b) = \dfrac{1}{f'(a)}$ avec $a = f^{-1}(b)$.
- **Accroissements finis** : $f(b) - f(a) = f'(\xi)(b-a)$, puis **encadrement** de $f'$ sur l'intervalle.
- Étude de fonction : domaine → dérivée factorisée → signe → variations → limites/asymptotes → points remarquables.
- Les fonctions $\dfrac{x}{1+x^2}$, $\sqrt{x^2+1}$, $\sin x - x$, $\ln(1+x^2)$ reviennent chaque année : maîtriser leurs dérivées.
- Restreindre ses conclusions à l'intervalle donné dans l'énoncé.
