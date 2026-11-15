---
titre: Sujet type BAC — Conditionnelle, indépendance et probabilités totales
difficulte: 3
type: bac
annee: 2023
indices:
  - Nomme les événements et traduis chaque phrase de l'énoncé en probabilités.
  - Suis l'ordre des questions : chaque partie utilise les résultats de la précédente.
  - Pour la dernière question, identifie la partition avant d'appliquer la loi totale.
---

## Énoncé

Un fabriquant de clés produit deux modèles : le modèle $A$ (60 % de la production) et le modèle $B$ (40 % de la production). Un contrôle qualité montre que :

- $3\,\%$ des clés du modèle $A$ sont défectueuses ;
- $1\,\%$ des clés du modèle $B$ sont défectueuses.

On tire au hasard une clé fabriquée par cet usine. On note les événements :

$$
A : \text{« la clé est de modèle } A \text{ »}, \quad
B : \text{« la clé est de modèle } B \text{ »}, \quad
D : \text{« la clé est défectueuse »}.
$$

**Partie A — Données de base**

1. Traduire les données de l'énoncé en probabilités.
2. Calculer $\mathbb{P}(A \cap D)$ et $\mathbb{P}(B \cap D)$.

**Partie B — Probabilité totale**

3. Montrer que $\{A\,;\,B\}$ est une partition de l'univers, puis calculer $\mathbb{P}(D)$ par la formule des probabilités totales.
4. Calculer la probabilité qu'une clé soit de modèle $A$ sachant qu'elle est défectueuse.

**Partie C — Indépendance**

5. On tire désormais deux clés **avec remise**. Calculer la probabilité que les deux clés soient défectueuses.
6. On tire deux clés **sans remise** dans un lot de $1000$ clés contenant exactement $22$ clés défectueuses. Calculer la probabilité que les deux clés tirées soient défectueuses. Que vaut le rapport entre cette probabilité et celle de la question 5 ? Interpréter.

## Solution

**Partie A**

**1. Traduction des données.**

$$
\mathbb{P}(A) = 0{,}6, \qquad \mathbb{P}(B) = 0{,}4
$$

$$
\mathbb{P}(D \mid A) = 0{,}03, \qquad \mathbb{P}(D \mid B) = 0{,}01
$$

**2. Calcul de $\mathbb{P}(A \cap D)$ et $\mathbb{P}(B \cap D)$.**

Formule de multiplication :

$$
\mathbb{P}(A \cap D) = \mathbb{P}(A) \times \mathbb{P}(D \mid A) = 0{,}6 \times 0{,}03 = 0{,}018
$$

$$
\mathbb{P}(B \cap D) = \mathbb{P}(B) \times \mathbb{P}(D \mid B) = 0{,}4 \times 0{,}01 = 0{,}004
$$

**Partie B**

**3. Partition et probabilité totale.**

$A$ et $B$ sont **mutuellement exclusifs** (une clé ne peut pas être des deux modèles) et **exhaustifs** (toute clé est de modèle $A$ ou $B$, car $0{,}6 + 0{,}4 = 1$). Donc $\{A\,;\,B\}$ est bien une partition de l'univers.

$$
\mathbb{P}(D) = \mathbb{P}(A)\,\mathbb{P}(D \mid A) + \mathbb{P}(B)\,\mathbb{P}(D \mid B) = 0{,}018 + 0{,}004 = 0{,}022
$$

$$
\mathbb{P}(D) = 0{,}022 = 2{,}2\,\%
$$

**4. Probabilité réciproque $\mathbb{P}(A \mid D)$.**

Formule bayésienne (ou définition de la conditionnelle) :

$$
\mathbb{P}(A \mid D) = \frac{\mathbb{P}(A \cap D)}{\mathbb{P}(D)} = \frac{0{,}018}{0{,}022} = \frac{18}{22} = \frac{9}{11} \approx 0{,}818.
$$

La probabilité qu'une clé défectueuse soit de modèle $A$ est $\dfrac{9}{11} \approx 81{,}8\,\%$.

*Interprétation :* bien que le modèle $A$ ne soit défectueux que dans $3\,\%$ des cas, il représente la grande majorité des clés défectueuses, car il domine la production ($60\,\%$) et son taux de défaut est trois fois plus élevé.

**Partie C**

**5. Deux clés défectueuses avec remise.**

Avec remise, les deux tirages sont **indépendants** :

$$
\mathbb{P}(D_1 \cap D_2) = \mathbb{P}(D)^2 = (0{,}022)^2 = 0{,}000484.
$$

$$
\mathbb{P}(D_1 \cap D_2) = 4{,}84 \times 10^{-4}
$$

**6. Deux clés défectueuses sans remise (lot de $1000$).**

$\mathbb{P}(D_1) = \dfrac{22}{1000} = 0{,}022$ (cohérent avec la question 3).

Sachant la première défectueuse, il reste $21$ clés défectueuses sur $999$ :

$$
\mathbb{P}(D_1 \cap D_2) = \frac{22}{1000} \times \frac{21}{999} = \frac{462}{999\,000} = \frac{77}{166\,500} \approx 0{,}000462.
$$

*Rapport avec la question 5 :*

$$
\frac{\mathbb{P}(\text{sans remise})}{\mathbb{P}(\text{avec remise})} = \frac{\dfrac{22}{1000} \times \dfrac{21}{999}}{\left(\dfrac{22}{1000}\right)^2} = \frac{21}{999} \times \frac{1000}{22} = \frac{21\,000}{21\,978} \approx 0{,}955.
$$

Sans remise, la probabilité est **légèrement inférieure** (environ $4{,}5\,\%$ de moins) : après avoir retiré une clé défectueuse, il en reste proportionnellement moins ($21/999 < 22/1000$). Les tirages sans remise sont **dépendants** : le second tirage est affecté par le premier.

:::methode Ce que le correcteur attend
- Les données traduites **avant** tout calcul (souvent une question notée à part).
- La partition explicitée avec les deux propriétés : exclusivité **et** exhaustivité.
- La loi totale écrite sous sa forme $\sum \mathbb{P}(B_i)\,\mathbb{P}(A \mid B_i)$ avant le calcul.
- La phrase « avec remise $\Rightarrow$ indépendants » dans la question 5.
- Le comparatif de la question 6 relié à la **dépendance** des tirages sans remise.
:::

:::remarque Barème indicatif (10 points)
Partie A : 2,5 points ($1 + 1{,}5$). Partie B : 3,5 points ($1 + 1{,}5 + 1$). Partie C : 4 points ($1{,}5 + 1 + 1{,}5$). Oublier de nommer les événements fait perdre le point de la question 1.
:::
