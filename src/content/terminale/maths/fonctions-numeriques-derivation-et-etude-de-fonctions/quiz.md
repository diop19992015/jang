---
titre: "Quiz — Fonctions numériques : dérivation et étude de fonctions"
demo: false
---

## Question

Quelle est la dérivée de $f(x) = \sqrt{x^2 + 9}$ ?

- [ ] $\dfrac{1}{2\sqrt{x^2+9}}$
- [x] $\dfrac{x}{\sqrt{x^2+9}}$
- [ ] $\dfrac{2x}{\sqrt{x^2+9}}$
- [ ] $\sqrt{2x}$

> On pose $u(x) = x^2+9$ : $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}} = \dfrac{2x}{2\sqrt{x^2+9}} = \dfrac{x}{\sqrt{x^2+9}}$. Le facteur $2$ se simplifie : c'est la règle de la chaîne avec le facteur $u'$.

## Question

Soit $f(x) = x^3 + 2x$. Que vaut $(f^{-1})'(3)$ ?

- [ ] $\dfrac{1}{3}$
- [x] $\dfrac{1}{5}$
- [ ] $5$
- [ ] $\dfrac{1}{11}$

> $f(1) = 3$, donc $f^{-1}(3) = 1$. Or $f'(x) = 3x^2+2$ donc $f'(1) = 5$. Par le théorème de la réciproque, $(f^{-1})'(3) = \dfrac{1}{f'(1)} = \dfrac{1}{5}$. On évalue $f'$ en $1$, pas en $3$.

## Question

$f$ est continue sur $[1\,;\,3]$ et dérivable sur $]1\,;\,3[$ avec $f(1) = 2$ et $f(3) = 8$. Quelle affirmation est correcte ?

- [ ] Il existe $\xi \in \,]1\,;\,3[$ tel que $f(3) - f(1) = 6f'(\xi)$
- [x] Il existe $\xi \in \,]1\,;\,3[$ tel que $f(3) - f(1) = 2f'(\xi)$
- [ ] $f'(\xi) = 3$ pour tout $\xi$
- [ ] Le théorème des accroissements finis ne s'applique pas

> $f(3) - f(1) = 6$ et $b - a = 2$ : le théorème donne $6 = 2 f'(\xi)$, soit l'existence d'un $\xi$ tel que $f'(\xi) = 3$ (c'est aussi le corollaire des valeurs intermédiaires appliqué à $f'$). Les hypothèses (continuité sur $[1\,;\,3]$, dérivabilité sur $]1\,;\,3[$) sont satisfaites.

## Question

Pour étudier $f(x) = \dfrac{x}{1+x^2}$, quelle est la bonne démarche pour le signe de $f'$ ?

- [ ] Étudier le signe de $x$ et de $1+x^2$ séparément
- [ ] Dire que $f' > 0$ car $f$ est positive
- [x] Calculer $f'(x) = \dfrac{1-x^2}{(1+x^2)^2}$ puis conclure sur le signe de $1-x^2$
- [ ] Le dénominateur étant positif, $f'$ n'a pas de zéro

> Le quotient donne $f'(x) = \dfrac{(1+x^2) - 2x^2}{(1+x^2)^2} = \dfrac{1-x^2}{(1+x^2)^2}$. Le dénominateur est toujours strictement positif : le signe de $f'$ est celui de $1-x^2$, négatif hors de $]-1\,;\,1[$. Donc $f$ croît sur $[-1\,;\,1]$ et décroît ailleurs.
