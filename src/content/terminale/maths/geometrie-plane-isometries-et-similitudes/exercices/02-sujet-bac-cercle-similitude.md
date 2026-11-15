---
titre: Sujet type BAC — Angles dans un cercle et similitudes
difficulte: 3
type: bac
annee: 2023
indices:
  - Pour la partie A, utilise les angles inscrits soutenant le même arc [BC].
  - Pour la partie B, utilise la puissance du point A : AB × AC = AD × AE.
  - Pour la partie C, démontre la similarité des triangles ABD et ACE par deux angles égaux, puis applique le rapport de similitude aux aires.
---

## Énoncé

On considère un cercle $\mathcal{C}$ de centre $O$ passant par les points $A$, $B$ et $C$. On note $D$ un point du cercle, du même côté de $(BC)$ que $A$.

**Partie A — Points cocycliques**

1. Montrer que $\widehat{BDC} = \widehat{BAC}$.
2. On place un point $E$ sur le cercle, du côté opposé de $(BC)$ par rapport à $A$. Que peut-on dire de $\widehat{BAC}$ et $\widehat{BEC}$ ? En déduire que $A$, $B$, $C$, $E$ sont cocycliques (ils le sont déjà, mais la relation entre les angles est la clé de la démonstration).

**Partie B — Puissance d'un point**

Soit $A$ un point **extérieur** au cercle. Une sécante issue de $A$ coupe le cercle en $B$ puis en $C$ ; une autre sécante issue de $A$ coupe le cercle en $D$ puis en $E$.

3. Montrer que $AB \times AC = AD \times AE$.
4. Si $AB = 4$, $AC = 9$ et $AD = 6$, calculer $AE$.

**Partie C — Similitude et aires**

5. On note $\alpha$ l'angle entre les deux sécantes issues de $A$, c'est-à-dire $\alpha = \widehat{BAD} = \widehat{CAE}$. En utilisant l'égalité $AB \times AC = AD \times AE$ de la question 3, montrer que

$$
\frac{AB}{AE} = \frac{AD}{AC},
$$

puis en déduire que les triangles $ABD$ et $AEC$ sont semblables.

6. Avec les valeurs $AB = 4$, $AE = 6$, quel est le rapport de similitude $k$ de $\triangle ABD$ vers $\triangle AEC$ ? Quel est le rapport de leurs aires ? Que vaut l'aire de $ABD$ si celle de $AEC$ vaut $81$ ?

## Solution

**Partie A**

**1.** $A$ et $D$ sont deux points du cercle, du même côté de la corde $[BC]$. Les angles inscrits $\widehat{BAC}$ et $\widehat{BDC}$ soutiennent tous les deux l'arc $BC$ (celui qui ne contient ni $A$ ni $D$). Or **deux angles inscrits soutenant le même arc sont égaux** :

$$
\widehat{BDC} = \widehat{BAC}.
$$

**2.** $E$ est de l'autre côté de $(BC)$ : les angles $\widehat{BAC}$ et $\widehat{BEC}$ soutiennent alors le même arc $BC$ mais pris « en face » ; dans un cercle, la somme des angles inscrits opposés par un quadrilatère inscrit vaut $\pi$ :

$$
\widehat{BAC} + \widehat{BEC} = \pi.
$$

Les quatre points $A$, $B$, $C$, $E$ appartiennent au cercle : ce sont des points **cocycliques** (les angles supplémentaires sont le critère classique du quadrilatère inscrit).

**Partie B**

**3.** Les triangles $ABD$ et $AEC$ ont l'angle $\widehat{DAB}$ commun... plus directement, on utilise la **puissance du point** $A$ par rapport au cercle.

Le point $A$ est extérieur : sa puissance vaut $p(A) = AO^2 - R^2$. Pour la première sécante $(ABC)$ :

$$
AB \times AC = p(A),
$$

et pour la seconde sécante $(ADE)$ :

$$
AD \times AE = p(A).
$$

Les deux produits valent la même puissance, donc :

$$
\boxed{AB \times AC = AD \times AE}.
$$

**4.** On applique l'égalité de la question 3 :

$$
4 \times 9 = 6 \times AE \qquad \text{d'où} \qquad AE = \frac{36}{6} = 6.
$$

$AE = 6$. Vérification : $4 \times 9 = 36$ et $6 \times 6 = 36$. ✓

**Partie C**

**5.** L'égalité de la question 3 s'écrit $AB \times AC = AD \times AE$. On la réécrit en identités de rapports :

$$
\frac{AB}{AE} = \frac{AD}{AC}.
$$

(En effet, croisement : $AB \times AC = AD \times AE$.) De plus, les triangles $ABD$ et $AEC$ ont en commun l'angle entre les deux sécantes :

$$
\widehat{BAD} = \widehat{CAE} = \alpha.
$$

Les deux côtés qui encadrent cet angle sont donc proportionnels : par le **critère SAS** (deux côtés proportionnels et angle compris), les triangles sont semblables :

$$
\triangle ABD \sim \triangle AEC
$$

(la correspondance étant $A \leftrightarrow A$, $B \leftrightarrow E$, $D \leftrightarrow C$). Le troisième angle est automatiquement égal (somme des angles).

**6.** Le rapport de similitude de $\triangle ABD$ vers $\triangle AEC$ est le rapport des côtés homologues :

$$
k = \frac{AB}{AE} = \frac{AD}{AC} = \frac{4}{6} = \frac{6}{9} = \frac{2}{3}.
$$

Le rapport des aires est le **carré** du rapport de similitude :

$$
\frac{\text{aire}(ABD)}{\text{aire}(AEC)} = k^2 = \left(\frac{2}{3}\right)^2 = \frac{4}{9}.
$$

Si l'aire de $AEC$ vaut $81$, alors :

$$
\text{aire}(ABD) = \frac{4}{9} \times 81 = 36.
$$

:::methode Ce que le correcteur attend
- Partie A : citation du théorème « angles inscrits soutenant le même arc » et vérification du côté par rapport à la corde.
- Partie B : référence à la **puissance du point** avec les deux sécantes, puis calcul d'une inconnue.
- Partie C : deux angles égaux **explicités** avant de conclure à la similarité, puis rapport des aires $= k^2$ (erreur classique : donner $k$ au lieu de $k^2$).
:::

:::remarque Barème indicatif (10 points)
Partie A : 3 points (1,5 + 1,5). Partie B : 3 points (2 + 1). Partie C : 4 points (2 + 2). Une réponse juste sans justification perçoit la moitié des points de la question.
:::
