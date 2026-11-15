---
titre: Calcul intégral
accroche: "Primitives des fonctions usuelles · Intégrale : définition et propriétés · Calcul d’aires"
series: L, S1, S3, S2, S4, S5
ordre: 13
duree: 45
demo: false
statut: publie
objectifs:
  - Primitives des fonctions usuelles
  - "Intégrale : définition et propriétés"
  - Calcul d’aires
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Primitives usuelles
$$
\int x^n dx = \frac{x^{n+1}}{n+1} + k \;(n \neq -1), \qquad
\int \frac{1}{x} dx = ln\|x\| + k, \qquad
\int e^x dx = e^x + k
$$

$$
\int \cos x\, dx = \sin x + k, \qquad
\int \sin x\, dx = -\cos x + k, \qquad
\int e^{ax} dx = \frac{1}{a} e^{ax} + k
$$
:::

:::formule Primitive composée
$$
\int u'(x)\,e^{u(x)} dx = e^{u(x)} + k
$$

$$
\int \frac{u'(x)}{u(x)} dx = ln\|u(x)\| + k
$$
:::

:::formule Théorème fondamental
$$
\int_a^b f(x)\,dx = F(b) - F(a) = \Big[F(x)\Big]_a^b
$$

$F$ est **une** primitive de $f$ sur $[a\,;\,b]$.
:::

:::formule Propriétés
$$
\int_a^b (\lambda f + \mu g) = \lambda\int_a^b f + \mu \int_a^b g
$$

$$
\int_a^a f = 0, \qquad
\int_a^b f = -\int_b^a f, \qquad
\int_a^c f + \int_c^b f = \int_a^b f
$$

$$
\left(\int_a^x f(t)\,dt\right)' = f(x)
$$
:::

:::formule Aire
Si $f \geq 0$ sur $[a\,;\,b]$ :

$$
S = \int_a^b f(x)\,dx
$$

Si $f \geq g$ sur $[a\,;\,b]$ :

$$
S = \int_a^b \big(f(x) - g(x)\big)\,dx
$$

Si le signe change : découper et prendre la **valeur absolue** de chaque morceau.
:::

:::formule Inégalités intégrales
$$
f \leq g \text{ sur } [a\,;\,b] \Rightarrow \int_a^b f \leq \int_a^b g
$$

$$
m \leq f \leq M \Rightarrow m(b-a) \leq \int_a^b f \leq M(b-a)
$$
:::

## Méthode express

1. **Primitive** : reconnaître la forme (puissance, $1/x$, exponentielle, trigonométrique, $u'/u$, $u'e^u$), ajouter $k$ si demandé.
2. **Intégrale définie** : $F(b) - F(a)$, en montrant les deux remplacements.
3. **Aire** : tracer $\to$ trouver les intersections (bornes) $\to$ vérifier le signe $\to$ écrire l'intégrale $\to$ conclure avec l'unité.
4. **Leibniz** : $\left(\int_a^x f\right)' = f(x)$ ; $F(a) = 0$.
5. **Paramètre** : calculer l'intégrale en fonction du paramètre, puis résoudre l'équation donnée.

:::erreur Les erreurs qui coûtent des points
1. $F(b) + F(a)$ au lieu de $F(b) - F(a)$.
2. Oublier $\dfrac{1}{a}$ pour $e^{ax}$ ou $\sin(ax)$.
3. Annoncer « l'aire $= 0$ » quand l'intégrande change de signe : il faut sommer les aires **positives**.
4. Utiliser $ln\,x$ au lieu de $ln\|x\|$ quand l'intervalle contient des valeurs négatives.
5. Oublier de soustraire l'intersection $g$ dans « aire entre deux courbes ».
6. Laisser une réponse sans unité dans un problème géométrique.
:::

## Vocabulaire

- **Primitive** : fonction dont la dérivée est $f$.
- **Intégrale définie** $\int_a^b f(x)\,dx$ : différence des primitives aux bornes.
- **Intégrale indéterminée** : $\int f(x)\,dx = F(x) + k$ (ensemble des primitives).
- **Théorème fondamental du calcul intégral** : $\int_a^b f = F(b) - F(a)$.
- **Linéarité** : l'intégrale passe aux combinaisons linéaires.
- **Formule de Leibniz** : dérivation d'une intégrale à borne variable.
- **Aire sous la courbe** : intégrale d'une fonction positive.
- **Aire entre deux courbes** : intégrale de la différence des fonctions.
