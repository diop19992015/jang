---
titre: Composition des applications
accroche: Reconnaître et calculer g∘f(x)
series: L
ordre: 1
duree: 45
demo: false
statut: publie
objectifs:
  - Reconnaître et calculer g∘f(x)
partie: Algèbre
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Définition de la composition
Soient $f: E \to F$ et $g: F \to G$. Pour tout $x \in E$ :

$$
(g \circ f)(x) = g\big(f(x)\big)
$$

On applique **d'abord $f$** (écrit à droite), puis $g$.
:::

:::formule Domaine de $g \circ f$
$$
\mathrm{Dom}(g \circ f) = \{\, x \in D_f \;\;/\;\; f(x) \in D_g \,\}
$$

Double condition : $x$ doit être dans le domaine de $f$, **et** $f(x)$ doit être dans celui de $g$.
:::

:::formule Propriétés
- $(h \circ g) \circ f = h \circ (g \circ f)$ : associativité (pas de parenthèses).
- $\mathrm{id} \circ f = f$ et $f \circ \mathrm{id} = f$.
- En général $g \circ f \neq f \circ g$.
- Si $f$ est bijective : $f^{-1} \circ f = \mathrm{id}$.
:::

:::formule Variations de $g \circ f$
| $f$ | $g$ | $g \circ f$ |
| --- | --- | --- |
| croissante | croissante | croissante |
| décroissante | décroissante | croissante |
| croissante | décroissante | décroissante |
| décroissante | croissante | décroissante |

Nombre **pair** de fonctions décroissantes $\Rightarrow$ composition croissante.
:::

:::formule Fonctions affines composées
Si $f(x) = ax+b$ et $g(x) = a'x+b'$, alors :

$$
(g \circ f)(x) = (a'a)\,x + (a'b + b')
$$

La pente de la composition est le **produit des pentes**.
:::

## Méthode express

1. **Calculer** $(g \circ f)(x)$ : remplacer $x$ par $f(x)$ dans l'expression de $g$, puis développer.
2. **Domaine** : écrire $D_f$, écrire $D_g$, puis résoudre $f(x) \in D_g$. Toujours les deux étapes.
3. **Écrire $h = g \circ f$** : repérer ce qui se calcule en premier = fonction intérieure $f$ ; réécrire le reste en fonction de $f(x)$ = fonction extérieure $g$.
4. **Résoudre $(g \circ f)(x) = k$** : poser $u = f(x)$, résoudre $g(u) = k$, puis $f(x) = u$, et filtrer par le domaine.
5. **Variations** : comparer les sens de variation de $f$ et de $g$ (tableau ci-dessus).

:::erreur Les erreurs qui coûtent des points
1. Inverser l'ordre : écrire $f(g(x))$ au lieu de $g(f(x))$.
2. Donner $D_f$ comme domaine de $g \circ f$ sans tester $f(x) \in D_g$ (ex. : $\ln(\sqrt{x-2})$ est défini sur $]2\,;\,+\infty[$ et pas sur $[2\,;\,+\infty[$).
3. Oublier d'exclure les valeurs qui annulent un dénominateur ou rendent une racine nulle.
4. Résoudre $(g\circ f)(x)=k$ sans revenir au domaine : toute solution trouvée hors domaine doit être écartée.
:::

## Vocabulaire

- **Composition** : $g \circ f$ l'application qui à $x$ associe $g(f(x))$.
- **Fonction intérieure** : celle appliquée en premier ($f$ dans $g \circ f$).
- **Fonction extérieure** : celle appliquée en second ($g$ dans $g \circ f$).
- **Application identité** : $\mathrm{id}(x) = x$.
- **Réciproque** : $f^{-1}$ telle que $f^{-1} \circ f = \mathrm{id}$ (si $f$ est bijective).
- **Domaine de définition** : ensemble des valeurs pour lesquelles l'expression a un sens.
