---
titre: "Quiz — Fonctions numériques : rappels et compléments"
demo: false
---

## Question

La fonction $f(x) = \dfrac{x^2 - 4}{x - 2}$ peut-elle être prolongée par continuité en $x = 2$ ?

- [ ] Non, elle est discontinue partout
- [x] Oui, en posant $f(2) = 4$
- [ ] Oui, en posant $f(2) = 0$
- [ ] Non, sa limite en 2 est infinie

> Pour $x \neq 2$ : $f(x) = \dfrac{(x-2)(x+2)}{x-2} = x + 2$, donc $\lim\limits_{x \to 2} f(x) = 4$. Poser $f(2) = 4$ rend la fonction continue en $2$ (c'est un prolongement par continuité).

## Question

Peut-on appliquer le théorème des valeurs intermédiaires à $f(x) = \dfrac{1}{x}$ sur $[-1\,;\,1]$ pour montrer qu'il existe $c$ tel que $f(c) = 0$ ?

- [ ] Oui, car $f(-1) < 0 < f(1)$
- [x] Non, car $f$ n'est pas continue sur $[-1\,;\,1]$ (elle n'est pas définie en 0)
- [ ] Non, car $f$ ne s'annule jamais
- [ ] Oui, car $f$ est une fonction usuelle

> Le TVI exige la **continuité sur tout l'intervalle**. Or $f$ n'est pas définie en $0 \in [-1\,;\,1]$ : l'hypothèse principale du théorème n'est pas vérifiée, on ne peut rien conclure.

## Question

$f(x) = x^3 + x$ est strictement croissante sur $\mathbb{R}$. Que vaut $f^{-1}(10)$ ?

- [ ] $10$
- [x] $2$
- [ ] $\sqrt[3]{10}$
- [ ] $\dfrac{1}{2}$

> On cherche $x$ tel que $x^3 + x = 10$ : $x = 2$ car $8 + 2 = 10$. Donc $f^{-1}(10) = 2$. Comme $f$ est strictement croissante, la solution est unique.

## Question

Pour prolonger par continuité en 0 la fonction $g(x) = \dfrac{e^x - 1}{x}$ ($x \neq 0$), quelle valeur prendre ?

- [ ] $0$
- [x] $1$
- [ ] $e$
- [ ] La limite n'existe pas

> Limite remarquable : $\lim\limits_{x \to 0} \dfrac{e^x - 1}{x} = 1$. Poser $g(0) = 1$ rend $g$ continue en $0$ — c'est exactement la définition du prolongement par continuité.
