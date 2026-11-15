---
titre: Sujet type BAC — Hérédité du daltonisme
difficulte: 3
type: bac
annee: 2024
demo: true
indices:
  - Le daltonisme est récessif et porté par le chromosome $X$.
  - Note $X^D$ l'allèle normal et $X^d$ l'allèle daltonien.
  - Un homme transmet son $Y$ à ses fils et son $X$ à ses filles.
---

## Énoncé

Le daltonisme est une anomalie de la vision des couleurs. Dans une famille, on observe la situation suivante :

- Le couple $I_1$ (homme non daltonien) et $I_2$ (femme non daltonienne) a trois enfants :
  - $II_1$ : fille non daltonienne ;
  - $II_2$ : garçon daltonien ;
  - $II_3$ : garçon non daltonien.

On sait que le daltonisme est déterminé par un allèle récessif porté par le chromosome $X$.

1. Justifier que le gène du daltonisme est lié au chromosome $X$ et non au chromosome $Y$.
2. Déterminer les génotypes de $I_1$ et $I_2$.
3. En déduire le génotype de $II_1$ et préciser si elle est porteuse.
4. Cette fille $II_1$ épouse un homme non daltonien. Calculer la probabilité que leur premier enfant soit un garçon daltonien.
5. Expliquer pourquoi le daltonisme est plus fréquent chez les hommes que chez les femmes.

## Solution

**1. Localisation du gène.**

Si le gène était porté par le chromosome $Y$, seuls les garçons seraient atteints et tous les fils d'un père atteint le seraient. Or ici, le père $I_1$ n'est **pas** daltonien alors que son fils $II_2$ l'est : le gène ne peut donc pas être transmis par le père via le chromosome $Y$.

De plus, la mère $I_2$ n'est pas atteinte mais a un fils atteint : elle transmet l'allèle à son fils. Cela est cohérent avec une transmission **liée à l'$X$ récessive** : le garçon reçoit son unique chromosome $X$ de sa mère.

**2. Génotypes des parents.**

On note $X^D$ l'allèle normal (dominant) et $X^d$ l'allèle daltonien (récessif).

- Le père $I_1$ est non daltonien : il possède un seul $X$, donc son génotype est $X^D//Y$.
- La mère $I_2$ est non daltonienne mais a un fils daltonien $II_2$ de génotype $X^d//Y$. Elle a donc transmis $X^d$ à ce fils. Comme elle est non atteinte, elle possède aussi $X^D$. Son génotype est $X^D//X^d$ : elle est **porteuse saine**.

**3. Génotype de la fille $II_1$.**

$II_1$ est une fille : elle reçoit un $X$ de son père ($X^D$, puisqu'il est non daltonien) et un $X$ de sa mère ($X^D$ ou $X^d$, avec probabilité $1/2$ chacune).

Ses génotypes possibles sont donc :
- $X^D//X^D$ avec probabilité $1/2$ : non porteuse ;
- $X^D//X^d$ avec probabilité $1/2$ : porteuse saine.

Comme elle est non daltonienne dans les deux cas, on ne peut pas déterminer son génotype exact sans analyse supplémentaire. Elle est porteuse avec une probabilité de $1/2$.

**4. Probabilité d'un garçon daltonien.**

$II_1$ épouse un homme non daltonien $X^D//Y$.

Pour que leur premier enfant soit un garçon daltonien, il faut réunir deux conditions :
- l'enfant est un garçon (probabilité $1/2$) ;
- il reçoit l'allèle $X^d$ de sa mère.

Or $II_1$ est porteuse avec probabilité $1/2$, et si elle est porteuse, elle transmet $X^d$ à son fils avec probabilité $1/2$.

La probabilité cherchée est donc :
$$
P = \frac{1}{2}\;(\text{enfant garçon}) \times \frac{1}{2}\;(\text{mère porteuse}) \times \frac{1}{2}\;(\text{transmission de } X^d) = \frac{1}{8}.
$$

Soit une probabilité de $12{,}5\,\%$.

On peut vérifier avec un échiquier en supposant $II_1$ porteuse $X^D//X^d$ et le père $X^D//Y$ :

| | $X^D$ (père) | $Y$ (père) |
| --- | --- | --- |
| **$X^D$** (mère) | $X^D//X^D$ fille saine | $X^D//Y$ garçon sain |
| **$X^d$** (mère) | $X^D//X^d$ fille porteuse | $X^d//Y$ garçon daltonien |

Sur quatre cases, une seule correspond à un garçon daltonien, soit $1/4$ **si la mère est porteuse**. En tenant compte de la probabilité $1/2$ qu'elle soit porteuse, on retrouve bien $1/8$.

**5. Pourquoi les hommes sont plus touchés.**

Un homme ne possède qu'un seul chromosome $X$. Il suffit donc qu'il porte l'allèle $X^d$ pour être daltonien. Une femme, elle, possède deux chromosomes $X$ : elle doit porter l'allèle $X^d$ sur ses **deux** chromosomes pour être atteinte, ce qui est beaucoup plus rare (produit de deux probabilités).

C'est pourquoi les maladies récessives liées à l'$X$ (daltonisme, hémophilie) touchent majoritairement les hommes.

:::methode Ce que le correcteur attend
- Les génotypes écrits avec la notation $X^D//X^d$ et $X^D//Y$.
- La justification de la localisation sur l'$X$ par l'analyse de l'arbre.
- Le calcul de probabilité décomposé en étapes claires.
- Une conclusion reliant la fréquence de la maladie au nombre de chromosomes $X$.
:::
