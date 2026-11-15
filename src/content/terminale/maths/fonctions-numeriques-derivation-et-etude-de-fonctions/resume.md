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

## L'essentiel du chapitre

:::formule Règle de la chaîne (fonction composée)
$$
\big(v(u(x))\big)' = u'(x) \times v'\big(u(x)\big)
$$

Exemples : $\big((3x^2+1)^4\big)' = 24x(3x^2+1)^3$, $\big(\sqrt{u}\big)' = \dfrac{u'}{2\sqrt{u}}$, $\big(\ln u\big)' = \dfrac{u'}{u}$, $\big(e^{u}\big)' = u' e^{u}$.
:::

:::formule Dérivée de la réciproque
$$
\big(f^{-1}\big)'(b) = \frac{1}{f'(a)}, \qquad \text{avec } a = f^{-1}(b)
$$

Condition : $f$ dérivable, strictement monotone, $f'(a) \neq 0$.
:::

:::formule Théorème des accroissements finis
$f$ continue sur $[a\,;\,b]$ et dérivable sur $]a\,;\,b[$ $\Rightarrow$ $\exists\, \xi \in \,]a\,;\,b[$ tel que

$$
f(b) - f(a) = f'(\xi)\,(b-a)
$$

Conséquence (encadrement) : si $m \leq f'(x) \leq M$ sur $[a\,;\,b]$, alors

$$
m(b-a) \leq f(b) - f(a) \leq M(b-a).
$$
:::

:::formule Tangente en $a$
$$
y = f'(a)(x - a) + f(a)
$$
:::

:::formule Dérivées des usuelles composées
| $f(x)$ | $f'(x)$ |
| --- | --- |
| $(ax+b)^n$ | $n a (ax+b)^{n-1}$ |
| $\sqrt{ax+b}$ | $\dfrac{a}{2\sqrt{ax+b}}$ |
| $\ln(ax+b)$ | $\dfrac{a}{ax+b}$ |
| $e^{ax+b}$ | $a e^{ax+b}$ |
| $\sin(ax+b)$ | $a \cos(ax+b)$ |
| $\cos(ax+b)$ | $-a \sin(ax+b)$ |
:::

## Méthode express

1. **Dériver une composée** : repérer l'intérieur $u$, dériver l'extérieur en gardant $u$, multiplier par $u'$.
2. **Dériver une réciproque** : calculer $f^{-1}(b) = a$, puis $(f^{-1})'(b) = \dfrac{1}{f'(a)}$.
3. **Borner une différence $f(b)-f(a)$** : appliquer les accroissements finis, encadrer $f'$ sur l'intervalle, multiplier par $(b-a)$.
4. **Étudier une fonction** : domaine → $f'$ factorisée → signe et variations → limites aux bornes et à l'infini → tangentes et asymptotes.
5. **Comparer deux grandeurs** : poser $h = f - g$ et étudier le signe de $h$ via $h'$.
6. **Résoudre $f(x) = k$** : s'appuyer sur le tableau de variations pour dire combien de solutions il y a et où elles se situent.

:::erreur Les erreurs qui coûtent des points
1. Oublier $u'(x)$ dans la règle de la chaîne.
2. Dans $(f^{-1})'(b) = 1/f'(a)$, évaluer $f'$ en $b$ au lieu de $a$.
3. Remplacer $\xi$ par une valeur choisie dans un encadrement d'accroissements finis.
4. Dérer un quotient en dérivant numérateur et dénominateur séparément (faux !).
5. Conclure hors de l'intervalle donné par l'énoncé.
:::

## Vocabulaire

- **Fonction composée** : $v(u(x))$, avec fonction intérieure $u$ et extérieure $v$.
- **Réciproque** : $f^{-1}$, qui annule l'effet de $f$ (si $f$ est strictement monotone).
- **Accroissements finis** : égalité $f(b)-f(a) = f'(\xi)(b-a)$ avec $\xi$ inconnu.
- **Encadrement** : inégalité $m(b-a) \leq f(b)-f(a) \leq M(b-a)$ qui borne une différence.
- **Fonction rationnelle** : quotient de deux polynômes.
- **Fonction irrationnelle** : contient une racine ($\sqrt{u}$).
- **Variations** : intervalles où la fonction croît ($\nearrow$) ou décroît ($\searrow$).
- **Asymptote** : droite approchée indéfiniment par la courbe.
