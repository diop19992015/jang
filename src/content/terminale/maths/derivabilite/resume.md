---
titre: Dérivabilité
accroche: Nombre dérivé et interprétation géométrique · Théorèmes sur les dérivées · Utilisations de la dérivée
series: L
ordre: 7
duree: 45
demo: false
statut: publie
objectifs:
  - Nombre dérivé et interprétation géométrique
  - Théorèmes sur les dérivées
  - Utilisations de la dérivée
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Nombre dérivé
$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

si cette limite existe et est finie. Le quotient est le **taux d'accroissement** entre $a$ et $a+h$.
:::

:::formule Tangente en $a$
$$
y = f'(a)(x - a) + f(a)
$$

$f'(a)$ est le coefficient directeur de la tangente à $\mathcal{C}_f$ au point $A(a\,;\,f(a))$.
:::

:::formule Dérivées usuelles (rappel)
| $f(x)$ | $f'(x)$ |
| --- | --- |
| $x^n$ | $n x^{n-1}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\dfrac{1}{x}$ |
:::

:::formule Opérations
$$
(uv)' = u'v + uv'
\qquad
\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}
\qquad
(v \circ u)' = u' \times (v' \circ u)
$$
:::

:::formule Théorèmes
- **Dérivable $\Rightarrow$ continue** (réciproque fausse : $|x|$).
- $f' = 0$ sur tout un intervalle $I$ $\Rightarrow$ $f$ constante sur $I$.
- **Rolle** : $f$ continue sur $[a\,;\,b]$, dérivable sur $]a\,;\,b[$, $f(a) = f(b)$ $\Rightarrow$ $\exists\, c \in \,]a\,;\,b[$ tel que $f'(c) = 0$.
- Extremum local en $a$ pour $f$ dérivable $\Rightarrow f'(a) = 0$ (**condition nécessaire uniquement**).
:::

:::formule Signe de la dérivée et variations
$$
f' \geq 0 \Rightarrow f \text{ croissante}, \qquad f' \leq 0 \Rightarrow f \text{ décroissante}
$$

$f'$ s'annule en changeant de signe en $a$ $\Rightarrow$ extremum local en $a$.
:::

## Méthode express

1. **Nombre dérivé par la définition** : écrire le quotient $\to$ factoriser par $h$ $\to$ simplifier ($h \neq 0$) $\to$ limite.
2. **Tangente** : calculer $f(a)$ et $f'(a)$, puis $y = f'(a)(x-a) + f(a)$ (développer).
3. **Continuité** : « $f$ est dérivable en $a$, donc continue en $a$ » — une phrase suffit, elle est notée.
4. **Variations** : domaine $\to$ $f'(x)$ factorisé $\to$ tableau de signes $\to$ tableau de variations.
5. **Rolle** : vérifier les hypothèses (continue, dérivable, $f(a) = f(b)$) **avant** de conclure $f'(c) = 0$.

:::erreur Les erreurs qui coûtent des points
1. Écrire $y = f'(a)x + f(a)$ au lieu de $y = f'(a)(x-a) + f(a)$.
2. Oublier « $h \neq 0$ » quand on simplifie le quotient par $h$.
3. Conclure sur les variations avec $f'(a) = 0$ en **un seul** point.
4. Appliquer Rolle sans vérifier les hypothèses (continuité sur $[a\,;\,b]$ et $f(a) = f(b)$).
5. Confondre « dérivable $\Rightarrow$ continue » avec sa réciproque, qui est **fausse**.
:::

## Vocabulaire

- **Nombre dérivé** $f'(a)$ : limite du taux d'accroissement en $a$.
- **Taux d'accroissement** : $\dfrac{f(a+h)-f(a)}{h}$.
- **Dérivable** : admet un nombre dérivé fini.
- **Fonction dérivée** $f'$ : la fonction qui à $x$ associe $f'(x)$.
- **Tangente** : droite limite des sécantes, de pente $f'(a)$.
- **Point critique** : point où $f'(a) = 0$.
- **Théorème de Rolle** : existence d'un point où la dérivée s'annule.
- **Condition nécessaire** : une conséquence, pas une hypothèse suffisante ($f'(a) = 0$ ne garantit pas un extremum).
