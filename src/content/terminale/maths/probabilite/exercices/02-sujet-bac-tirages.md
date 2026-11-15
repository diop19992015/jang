---
titre: Sujet type BAC — Tirages et probabilités d'événements
difficulte: 3
type: bac
annee: 2023
indices:
  - Définis toujours l'univers avant de calculer la moindre probabilité.
  - Pour les deux dés, énumère les 36 couples plutôt que les seules sommes.
  - Suis l'ordre des questions : chaque partie utilise les résultats de la précédente.
---

## Énoncé

Une urne contient $5$ boules rouges ($R$), $3$ boules bleues ($B$) et $2$ boules vertes ($V$), soit $10$ boules en tout. On tire deux boules **l'une après l'autre avec remise**.

**Partie A — Tirage simple**

1. Définir l'univers $E$ d'un tirage simple et donner $\mathrm{card}(E)$.
2. Calculer la probabilité de tirer une boule rouge, puis celle de tirer une boule rouge **ou** verte.
3. Calculer, par le complémentaire, la probabilité de ne tirer **pas** de boule bleue.

**Partie B — Deux tirages avec remise**

4. Calculer la probabilité d'obtenir deux boules rouges.
5. Calculer la probabilité d'obtenir deux boules de même couleur.

**Partie C — Deux dés**

6. Deux dés sont lancés. Définir l'univers et calculer la probabilité que la somme soit supérieure ou égale à $10$.
7. Calculer la probabilité que le maximum des deux dés soit égal à $5$.

## Solution

**Partie A**

**1. Univers d'un tirage simple.**

$$
E = \{R_1\,;\,R_2\,;\,R_3\,;\,R_4\,;\,R_5\,;\,B_1\,;\,B_2\,;\,B_3\,;\,V_1\,;\,V_2\}, \qquad \mathrm{card}(E) = 10.
$$

Les $10$ issues sont équiprobables car les boules sont tirées au hasard (bien distinguées). On peut aussi regrouper par couleur avec des probabilités pondérées : $\mathbb{P}(R) = \dfrac{5}{10}$, $\mathbb{P}(B) = \dfrac{3}{10}$, $\mathbb{P}(V) = \dfrac{2}{10}$.

**2. Rouge, puis rouge ou verte.**

$$
\mathbb{P}(R) = \frac{5}{10} = \frac{1}{2}.
$$

Les événements « rouge » et « verte » sont disjoints :

$$
\mathbb{P}(R \cup V) = \mathbb{P}(R) + \mathbb{P}(V) = \frac{5}{10} + \frac{2}{10} = \frac{7}{10}.
$$

**3. Pas de boule bleue (complémentaire).**

$$
\mathbb{P}(\overline{B}) = 1 - \mathbb{P}(B) = 1 - \frac{3}{10} = \frac{7}{10}.
$$

On retrouve $\mathbb{P}(R \cup V)$, car « pas de bleue » signifie « rouge ou verte ». ✓

**Partie B**

**4. Deux boules rouges (avec remise).**

Le tirage avec remise rend les deux tirages indépendants : la probabilité de rouge vaut $\dfrac{1}{2}$ à chaque fois.

$$
\mathbb{P}(RR) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}.
$$

**5. Deux boules de même couleur.**

On distingue les cas mutuellement exclusifs : $RR$, $BB$ ou $VV$.

$$
\mathbb{P}(RR) = \left(\frac{1}{2}\right)^2 = \frac{1}{4}, \qquad
\mathbb{P}(BB) = \left(\frac{3}{10}\right)^2 = \frac{9}{100}, \qquad
\mathbb{P}(VV) = \left(\frac{2}{10}\right)^2 = \frac{4}{100}.
$$

$$
\mathbb{P}(\text{même couleur}) = \frac{25}{100} + \frac{9}{100} + \frac{4}{100} = \frac{38}{100} = \frac{19}{50}.
$$

**Partie C**

**6. Somme supérieure ou égale à $10$.**

L'univers est l'ensemble des $36$ couples $(d_1\,;\,d_2)$ équiprobables. Les issues dont la somme vaut $10$, $11$ ou $12$ :

| Somme | Issues | Nombre |
| --- | --- | --- |
| $10$ | $(4\,;6), (5\,;5), (6\,;4)$ | $3$ |
| $11$ | $(5\,;6), (6\,;5)$ | $2$ |
| $12$ | $(6\,;6)$ | $1$ |

Total : $6$ issues. Donc

$$
\mathbb{P}(\text{somme} \geq 10) = \frac{6}{36} = \frac{1}{6}.
$$

**7. Maximum égal à $5$.**

« Le maximum vaut $5$ » signifie : les deux dés valent au plus $5$, **et** au moins un vaut $5$.

Couples avec $d_1 \leq 5$ et $d_2 \leq 5$ : $5 \times 5 = 25$ couples (maximum $\leq 5$).

Couples avec maximum $\leq 4$ : $4 \times 4 = 16$ (maximum $\leq 4$).

Donc les couples de maximum **exactement** $5$ : $25 - 16 = 9$.

Énumération de contrôle : $(5\,;1), (5\,;2), (5\,;3), (5\,;4), (5\,;5), (1\,;5), (2\,;5), (3\,;5), (4\,;5)$ : bien $9$ issues.

$$
\mathbb{P}(\text{maximum} = 5) = \frac{9}{36} = \frac{1}{4}.
$$

:::methode Ce que le correcteur attend
- L'univers défini **par les issues** (boules numérotées ou couples de dés), avec $\mathrm{card}(E)$.
- Les probabilités en fractions irréductibles.
- Les cas disjoints explicités avant d'additionner ($RR$, $BB$, $VV$).
- L'indépendance justifiée par la **remise** (sinon les tirages ne seraient pas indépendants).
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points ($1 + 1 + 1$). Partie B : 3 points ($1,5 + 1,5$). Partie C : 4 points ($2 + 2$). La définition de l'univers est notée même si le calcul suivant comporte une erreur.
:::
