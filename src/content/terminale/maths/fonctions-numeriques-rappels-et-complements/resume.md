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

## L'essentiel du chapitre

:::formule Continuité
$$
f \text{ continue en } a \iff a \in D_f \text{ et } \lim_{x \to a} f(x) = f(a)
$$

Sommes, produits, quotients ($g(a) \neq 0$) et composées de fonctions continues sont continues.
:::

:::formule Théorème des valeurs intermédiaires
$f$ continue sur $[a\,;\,b]$ et $k$ compris entre $f(a)$ et $f(b)$ :

$$
\exists\, c \in [a\,;\,b] : f(c) = k
$$

Cas des zéros : $f(a) \times f(b) < 0 \Rightarrow \exists\, c \in \,]a\,;\,b[$ tel que $f(c) = 0$. Monotonie $\Rightarrow$ unicité.
:::

:::formule Fonction réciproque
$f$ strictement monotone sur $I$ $\Rightarrow$ $f^{-1}$ existe sur $f(I)$, strictement monotone de **même sens**.

$$
f(x) = k \iff x = f^{-1}(k) \quad (k \in f(I))
$$

Propriétés : $f^{-1}(f(x)) = x$ ; le tableau de variations de $f^{-1}$ s'obtient en permutant les lignes de celui de $f$.
:::

:::formule Prolongement par continuité
Si $\lim\limits_{x \to a} f(x) = \ell$ existe ($a$ exclu du domaine), poser :

$$
f(a) = \ell
$$

rend la fonction continue en $a$. Le prolongement est **unique**.
:::

:::formule Limites remarquables pour prolonger
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{e^x - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1, \qquad
\lim_{x \to 0} (1+x)^{1/x} = e
$$
:::

## Méthode express

1. **Prouver la continuité** : donner le domaine, puis pour $a$ du domaine écrire $\lim f(x) = f(a)$ (remplacement licite si pas de forme indéterminée).
2. **Fonction morceau par morceau** : calculer la limite au point de jonction, poser la constante égale à cette limite.
3. **Prouver l'existence d'une solution** : $f$ continue sur $[a\,;\,b]$ + signes contraires aux bornes + TVI cité.
4. **Prouver l'unicité** : montrer $f' > 0$ ou $f' < 0$ (monotonie stricte).
5. **Résoudre $f(x) = k$ avec un tableau** : lire $k$ dans la ligne des valeurs, remonter à la ligne des $x$ (c'est $f^{-1}(k)$), vérifier $k \in f(I)$.
6. **Prolonger** : calculer la limite en la valeur d'exclusion, définir $f$ en ce point par cette limite, conclure à la continuité.

:::erreur Les erreurs qui coûtent des points
1. Appliquer le TVI sans avoir démontré la continuité sur tout l'intervalle.
2. Oublier d'écrire $c \in [a\,;\,b]$ dans la conclusion.
3. Résoudre $f(x) = k$ sans vérifier que $k$ appartient à l'image $f(I)$.
4. Utiliser le prolongement comme une approximation (« $\approx$ ») au lieu d'une **définition** exacte.
5. Conclure « continue sur $\mathbb{R}$ » alors que le domaine exclut des valeurs.
:::

## Vocabulaire

- **Continuité** : la fonction n'a ni saut ni trou : limite = valeur.
- **Rupture de continuité** : point où la limite n'existe pas ou ne vaut pas $f(a)$.
- **Théorème des valeurs intermédiaires (TVI)** : une fonction continue prend toutes les valeurs comprises entre ses valeurs aux bornes.
- **Monotonie stricte** : croissante ou décroissante ; garantit l'unicité et l'existence de la réciproque.
- **Fonction réciproque** $f^{-1}$ : qui annule l'effet de $f$ ; domaine = image de $f$.
- **Prolongement par continuité** : définir la fonction en un point d'exclusion par la limite, pour la rendre continue.
- **Limite remarquable** : $\dfrac{\sin x}{x}$, $\dfrac{e^x-1}{x}$, $\dfrac{\ln(1+x)}{x}$ tendent vers $1$ en $0$.
