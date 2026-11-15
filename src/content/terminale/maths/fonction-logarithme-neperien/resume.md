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

## L'essentiel du chapitre

:::formule Définition
$x > 0$ et $e^y = x$ $\Rightarrow$ $y = ln(x)$. $ln$ est la réciproque de $e^x$.

$$
e^{ln(x)} = x \;\;(x > 0), \qquad ln(e^t) = t \;\;(t \in \mathbb{R})
$$
:::

:::formule Propriétés
Pour $a > 0$, $b > 0$ et $n \in \mathbb{R}$ :

$$
ln(ab) = ln(a) + ln(b)
$$

$$
ln\left(\frac{a}{b}\right) = ln(a) - ln(b)
$$

$$
ln(a^n) = n\,ln(a)
$$

**Jamais** de formule sur $ln(a+b)$ ni sur $ln(a) \times ln(b)$.
:::

:::formule Valeurs remarquables
$$
ln(1) = 0, \qquad ln(e) = 1, \qquad ln(e^k) = k, \qquad ln\left(\frac{1}{e}\right) = -1
$$
:::

:::formule Étude de $ln$
$$
D = \,]0\,;\,+\infty[, \qquad (ln\,x)' = \frac{1}{x} > 0
$$

$ln$ est **strictement croissante** sur $]0\,;\,+\infty[$.

$$
\lim_{x \to 0^+} ln(x) = -\infty, \qquad \lim_{x \to +\infty} ln(x) = +\infty
$$
:::

:::formule Résolutions
$$
ln(u) = k \iff u = e^k \;\;(u > 0)
$$

$$
ln(u) < ln(v) \iff 0 < u < v
$$
:::

:::formule Limites classiques
$$
\lim_{x \to +\infty} \frac{ln\,x}{x^n} = 0 \;(n > 0), \qquad
\lim_{x \to 0^+} x^n ln\,x = 0 \;(n > 0)
$$

$$
\lim_{x \to +\infty} \frac{e^x}{ln\,x} = +\infty, \qquad
\lim_{x \to 1} \frac{ln\,x}{x-1} = 1
$$
:::

## Méthode express

1. **Condition** : dès que $ln(u)$ apparaît, écrire $u > 0$ (domaine et interdits).
2. **Simplifier** : sortir les exposants ($n\,ln\,a$), regrouper les sommes/différences en produits/quotients.
3. **Résoudre** : $ln(u) = k \Rightarrow u = e^k$ ; pour une inéquation, conserver le sens car $ln$ est croissante.
4. **Dériver** : $(ln\,x)' = 1/x$ ; pour $ln(u(x))$, utiliser la dérivée composée $\dfrac{u'(x)}{u(x)}$.
5. **Étudier** : domaine $\to$ dérivée (signe) $\to$ variations $\to$ limites ($0^+$ et $+\infty$) $\to$ courbe (point $(1\,;\,0)$, asymptote $x = 0$).
6. **Limites** : croissance comparée ($ln$ domine par $e^x$ et $x^n$) ; en $0^+$, $x^n$ domine $ln$.

:::erreur Les erreurs qui coûtent des points
1. Écrire $ln(0)$ ou $ln(-2)$ : inexistant, le domaine est strictement positif.
2. Utiliser $ln(a+b) = ln\,a + ln\,b$ : faux.
3. Oublier de vérifier que la solution trouvée est bien $> 0$ (ex. $ln(x-1) = 0$ impose $x > 1$).
4. Dire « $\lim \frac{ln\,x}{x} = +\infty/+ \infty$ » : la limite vaut $0$ (croissance comparée).
5. Tracer la courbe à gauche de l'axe des ordonnées : impossible, $x$ doit être $> 0$.
:::

## Vocabulaire

- **Logarithme népérien** $ln(x)$ : réciproque de l'exponentielle, définie sur $]0\,;\,+\infty[$.
- **Népérien** : du nom du mathématicien néerlandais Napier.
- **Croissance comparée** : en $+\infty$, $e^x$ domine $x^n$, qui domine $ln(x)$.
- **Asymptote verticale** : ici $x = 0$ (l'axe des ordonnées), car $ln(x) \to -\infty$ en $0^+$.
- **Fonctions réciproques** : courbes symétriques par rapport à $y = x$ ($e^x$ et $ln$).
- **Inéquation logarithmique** : inégalité contenant $ln$, résolue grâce à la monotonie de $ln$.
