---
titre: Sujet type BAC — Équations, croissances comparées et inégalité
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour les équations, ramène les deux membres à la même base ou utilise ln des deux côtés.
  - Pour les limites, applique le classement : logarithme < puissance < exponentielle.
  - Pour la partie C, étudie le signe de h(x) = x - 1 - ln x via h'(x) = (x-1)/x.
  - Pour la dernière question, combine l'inégalité avec le théorème des valeurs intermédiaires sur [2 ; 3].
---

## Énoncé

**Partie A — Équations et logarithmes**

1. Résoudre sur $\mathbb{R}$ l'équation $\left(\dfrac{1}{2}\right)^{2x - 1} = 8$.
2. Résoudre sur $\mathbb{R}$ l'équation $\ln(x^2) = \ln 9$ (préciser le domaine).
3. Résoudre sur $\mathbb{R}$ l'équation $\log_3(x - 1) = 2$.

**Partie B — Limites**

4. Calculer $\lim\limits_{x \to +\infty} \dfrac{3x^2 + 1}{e^x}$.
5. Calculer $\lim\limits_{x \to +\infty} \dfrac{\ln(x^3)}{x}$.

**Partie C — Inégalité et existence de solution**

6. Poser $h(x) = x - 1 - \ln x$ sur $]0\,;\,+\infty[$. Calculer $h'(x)$, étudier son signe et en déduire que

$$
\ln x \leq x - 1 \quad \text{pour tout } x > 0,
$$

avec égalité si et seulement si $x = 1$.

7. En utilisant le résultat précédent, montrer que l'équation $\ln x = 3 - x$ n'admet **aucune** solution dans $]0\,;\,2[$, puis qu'elle admet **exactement une** solution dans $]2\,;\,3[$.

## Solution

**Partie A**

**1.** On passe à la base $2$ : $\left(\dfrac{1}{2}\right)^{2x-1} = (2^{-1})^{2x-1} = 2^{-(2x-1)}$ et $8 = 2^3$.

L'exponentielle de base $2$ étant strictement croissante, on égale les exposants :

$$
-(2x - 1) = 3 \iff -2x + 1 = 3 \iff -2x = 2 \iff x = -1 .
$$

**2.** Domaine : $x^2 > 0$, c'est-à-dire $x \neq 0$, soit $D = \mathbb{R}^*$.

$x \mapsto \ln x$ est strictement croissante sur $]0\,;\,+\infty[$ :

$$
\ln(x^2) = \ln 9 \iff x^2 = 9 \iff x = 3 \;\text{ ou }\; x = -3 .
$$

Les deux solutions appartiennent au domaine $D = \mathbb{R}^*$ (car $(-3)^2 = 9 > 0$).

$$
S = \{-3\,;\,3\}.
$$

**3.** Domaine : $x - 1 > 0$, soit $x > 1$.

$$
\log_3(x - 1) = 2 \iff x - 1 = 3^2 = 9 \iff x = 10,
$$

et $10 > 1$ : la solution appartient au domaine.

$$
S = \{10\}.
$$

**Partie B**

**4.** Croissances comparées : l'exponentielle $e^x$ croît plus vite que toute puissance. En divisant numérateur et dénominateur par $e^x$ :

$$
\frac{3x^2 + 1}{e^x} = 3\,\frac{x^2}{e^x} + \frac{1}{e^x} \xrightarrow[x \to +\infty]{} 3 \times 0 + 0 = 0 .
$$

$$
\lim_{x \to +\infty} \frac{3x^2 + 1}{e^x} = 0 .
$$

**5.** On simplifie l'exposant : $\ln(x^3) = 3 \ln x$, donc

$$
\frac{\ln(x^3)}{x} = 3 \times \frac{\ln x}{x} .
$$

Le logarithme croît moins vite que la puissance $x^1$ : $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x} = 0$, donc

$$
\lim_{x \to +\infty} \frac{\ln(x^3)}{x} = 3 \times 0 = 0 .
$$

**Partie C**

**6.** $h$ est définie et dérivable sur $]0\,;\,+\infty[$ (somme de fonctions dérivables) :

$$
h'(x) = 1 - \frac{1}{x} = \frac{x - 1}{x}.
$$

Sur $]0\,;\,+\infty[$, le dénominateur $x$ est positif : le signe de $h'$ est celui de $x - 1$.

- $0 < x < 1$ : $h'(x) < 0$, $h$ est décroissante ;
- $x = 1$ : $h'(1) = 0$ ;
- $x > 1$ : $h'(x) > 0$, $h$ est croissante.

Donc $h$ admet son **minimum** en $x = 1$, de valeur

$$
h(1) = 1 - 1 - \ln 1 = 0 .
$$

Ainsi $h(x) \geq 0$ pour tout $x > 0$, avec égalité seulement en $x = 1$ :

$$
\boxed{\ln x \leq x - 1} \quad (\forall x > 0).
$$

*Remarque :* c'est l'inégalité fondamentale du logarithme, liée à la convexité de $\ln$.

**7.** *Pas de solution dans $]0\,;\,2[$ :*

Supposons que $x \in \,]0\,;\,2[$ et que $\ln x = 3 - x$. D'après la question 6, $\ln x \leq x - 1$, donc

$$
3 - x = \ln x \leq x - 1 \iff 3 - x \leq x - 1 \iff 4 \leq 2x \iff x \geq 2 .
$$

C'est **impossible** pour $x \in \,]0\,;\,2[$ : l'équation n'admet aucune solution dans $]0\,;\,2[$.

*Exactement une solution dans $]2\,;\,3[$ :*

Posons $\varphi(x) = \ln x + x - 3$ (équation réécrite $\varphi(x) = 0$). $\varphi$ est continue sur $[2\,;\,3]$ et

$$
\varphi(2) = \ln 2 + 2 - 3 \approx 0{,}693 - 1 = -0{,}307 < 0,
$$

$$
\varphi(3) = \ln 3 + 3 - 3 = \ln 3 \approx 1{,}099 > 0 .
$$

Signes contraires : par le **théorème des valeurs intermédiaires**, il existe $c \in \,]2\,;\,3[$ tel que $\varphi(c) = 0$, c'est-à-dire $\ln c = 3 - c$.

**Unicité** : $\varphi'(x) = \dfrac{1}{x} + 1 > 0$ pour tout $x > 0$ : $\varphi$ est strictement croissante sur $]0\,;\,+\infty[$, donc elle s'annule **au plus une fois**. La solution de $]2\,;\,3[$ est donc **unique** sur tout $]0\,;\,+\infty[$.

:::methode Ce que le correcteur attend
- Équations : domaine rappelé **avant** de résoudre, sens de variation de la base invoqué, solutions vérifiées par rapport au domaine.
- Limites : référence explicite aux croissances comparées et/ou calcul factorisé.
- Inégalité : dérivée de $h$, tableau de signes, minimum en $1$ concluant $h \geq 0$.
- Existence : contradiction propre dans $]0\,;\,2[$ + TVI sur $[2\,;\,3]$ avec valeurs numériques ; unicité par la monotonie de $\varphi$.
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points (1 + 1 + 1). Partie B : 2 points (1 + 1). Partie C : 5 points (2,5 + 2,5). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
