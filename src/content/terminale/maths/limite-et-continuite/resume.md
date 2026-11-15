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

## L'essentiel du chapitre

:::formule Définition de la limite
$$
\lim_{x \to a} f(x) = L
$$

signifie que $f(x)$ se rapproche de $L$ quand $x$ se rapproche de $a$ **sans valoir $a$**. La valeur $f(a)$ n'intervient pas.
:::

:::formule Limites usuelles
$$
\lim_{x \to a} P(x) = P(a) \;\text{ (}P\text{ polynôme)}
\qquad
\lim_{x \to +\infty} \frac{1}{x} = 0
$$

$$
\lim_{x \to a} \frac{x^n - a^n}{x - a} = n a^{n-1}
\qquad
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$
:::

:::formule Formes indéterminées
$$
\frac{0}{0}, \qquad \infty - \infty, \qquad \frac{\infty}{\infty}, \qquad 0 \times \infty
$$

Ne **jamais** substituer : factoriser ($\frac{0}{0}$), mettre sur un même dénominateur ($\infty-\infty$), diviser par la puissance dominante ($\frac{\infty}{\infty}$).
:::

:::formule Limites unilatérales
$$
\lim_{x \to a} f(x) \text{ existe } \iff
\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)
$$
:::

:::formule Continuité en un point
$$
f \text{ continue en } a \iff a \in D_f \;\text{ et }\; \lim_{x \to a} f(x) = f(a)
$$

Trois vérifications : **existence** de $f(a)$, **existence** de la limite, **égalité** des deux.
:::

:::formule Fonctions continues
| Fonction | Continue sur |
| --- | --- |
| polynôme $P(x)$ | $\mathbb{R}$ |
| rationnelle $\dfrac{P}{Q}$ | tout intervalle évitant les zéros de $Q$ |
| $\sqrt{x}$ | $[0\,;\,+\infty[$ |
| $\ln x$ | $]0\,;\,+\infty[$ |
| $\sin x$, $\cos x$ | $\mathbb{R}$ |
:::

## Méthode express

1. **Essayer la substitution** : remplacer $x$ par $a$ (ou faire tendre $x$ vers $+\infty$).
2. **Si la forme est interdite** ($\frac{0}{0}$, $\infty-\infty$, $\frac{\infty}{\infty}$) : factoriser (ex. $x^2-a^2 = (x-a)(x+a)$) ou diviser par la puissance dominante.
3. **Simplifier** en rappelant $x \neq a$ (ou $x$ grand), puis calculer la limite.
4. **Continuité** : calculer $\lim_{x \to a} f(x)$, calculer $f(a)$, comparer.
5. **Conclure** avec la phrase attendue : « donc $f$ est continue (ou discontinue) en $a$ car … ».

:::erreur Les erreurs qui coûtent des points
1. Substituer dans une forme $\frac{0}{0}$ et écrire « $\frac{0}{0} = 1$ ».
2. Oublier de calculer $f(a)$ avant de conclure sur la continuité.
3. Utiliser $f(a)$ pendant le calcul de la limite : on ne remplace $x$ par $a$ qu'une fois la simplification faite.
4. Annoncer « limite nulle » sans montrer le passage (factorisation ou division).
5. Oublier les limites à gauche et à droite pour une fonction en escalier ou avec une valeur absolue.
:::

## Vocabulaire

- **Limite** : valeur vers laquelle tend une fonction au voisinage d'un point.
- **Forme indéterminée** : expression ($\frac{0}{0}$…) qui ne suffit pas à déterminer la limite.
- **Limite à gauche** ($x \to a^-$) / **à droite** ($x \to a^+$) : approche par un seul côté.
- **Continuité en $a$** : $\lim_{x \to a} f(x) = f(a)$.
- **Discontinuité évitable** : la limite existe et $f(a)$ existe mais diffèrent (on « bouche le trou »).
- **Discontinuité saut** : les limites à gauche et à droite diffèrent.
- **Encadrement** : si $g \leq f \leq h$ et $\lim g = \lim h$, alors $\lim f$ aussi.
- **Théorème des valeurs intermédiaires** : une fonction continue prend toutes les valeurs intermédiaires ; il garantit l'existence d'une solution de $f(x) = k$.
