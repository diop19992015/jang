---
titre: Quiz — Fonction logarithme népérien
demo: false
---

## Question

Que vaut $ln(e^5) - ln(1)$ ?

- [ ] $e^5$
- [x] $5$
- [ ] $0$
- [ ] $e$

> Par réciprocalité, $ln(e^5) = 5$ ; et $ln(1) = 0$ car $e^0 = 1$. Donc $5 - 0 = 5$.

## Question

Simplifier $2\,ln(3) + ln(4)$ :

- [ ] $ln(24)$
- [x] $ln(36)$
- [ ] $6\,ln(4)$
- [ ] $ln(11)$

> On sort l'exposant : $2\,ln(3) = ln(3^2) = ln(9)$. Puis on additionne : $ln(9) + ln(4) = ln(9 \times 4) = ln(36)$. Attention : $ln(3) + ln(4)$ serait $ln(12)$, mais le facteur $2$ multiplie le logarithme, donc il faut l'élever en exposant.

## Question

Quel est le domaine de définition de $f(x) = ln(3x - 6)$ ?

- [ ] $\mathbb{R}$
- [ ] $x \geq 2$
- [x] $x > 2$, soit $]2\,;\,+\infty[$
- [ ] $x > 0$

> L'argument du logarithme doit être **strictement positif** : $3x - 6 > 0 \iff 3x > 6 \iff x > 2$. La borne $x = 2$ est exclue car $ln(0)$ n'existe pas.

## Question

Que vaut $\lim\limits_{x \to +\infty} \dfrac{ln(x)}{x}$ ?

- [ ] $+\infty$
- [ ] $1$
- [x] $0$
- [ ] La limite n'existe pas

> C'est la croissance comparée : en $+\infty$, la puissance $x$ croît beaucoup plus vite que $ln(x)$. Le quotient tend vers $0$. (Plus généralement, $\lim \dfrac{ln\,x}{x^n} = 0$ pour tout $n > 0$.)
