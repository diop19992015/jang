---
titre: Loi d'Ohm et associations de résistances
difficulte: 1
type: entrainement
indices:
  - Écris d'abord les données avec leurs unités et convertis kΩ en Ω, mA en A.
  - Applique U = R·I, I = U/R ou R = U/I selon l'inconnue demandée.
  - En série, additionne les résistances ; en parallèle, additionne leurs inverses puis retourne la fraction.
---

## Énoncé

**Partie A. Loi d'Ohm**

1. Une résistance de $R = 10\ \Omega$ est parcourue par un courant de $I = 0{,}6\ \text{A}$. Calculer la tension $U$ à ses bornes.
2. Une lampe de torche est alimentée par une tension $U = 4{,}5\ \text{V}$ et son intensité est $I = 0{,}3\ \text{A}$. Calculer la résistance de la lampe.
3. Une résistance de $R = 2\ \text{k}\Omega$ est soumise à une tension $U = 10\ \text{V}$. Calculer l'intensité du courant (résultat en ampères).

**Partie B. Caractéristique**

4. Sur la caractéristique $U = f(I)$ d'une résistance, on lit le point de coordonnées $I = 0{,}25\ \text{A}$ et $U = 5\ \text{V}$. Calculer la résistance de la résistance. Que devient la tension si l'intensité devient $0{,}5\ \text{A}$ ?

**Partie C. Associations**

5. Calculer la résistance équivalente des montages suivants :
   a. $R_1 = 3\ \Omega$ et $R_2 = 5\ \Omega$ en **série** ;
   b. $R_1 = 3\ \Omega$ et $R_2 = 5\ \Omega$ en **parallèle** ;
   c. $R_1 = 12\ \Omega$ et $R_2 = 6\ \Omega$ en **parallèle**.

6. Deux résistances $R_1 = 4\ \Omega$ et $R_2 = 8\ \Omega$ sont montées en série sur un générateur de $U = 12\ \text{V}$. Calculer la résistance équivalente, l'intensité du courant, puis les tensions $U_1$ et $U_2$ aux bornes de chaque résistance. Vérifier la règle des mailles.

## Solution

**1. Tension aux bornes d'une résistance.**

Données : $R = 10\ \Omega$, $I = 0{,}6\ \text{A}$.

Formule : $U = R \cdot I$

$$
U = 10 \times 0{,}6 = 6\ \text{V}
$$

La tension à ses bornes est $6\ \text{V}$.

**2. Résistance de la lampe.**

Données : $U = 4{,}5\ \text{V}$, $I = 0{,}3\ \text{A}$.

Formule : $R = \dfrac{U}{I}$

$$
R = \frac{4{,}5}{0{,}3} = 15\ \Omega
$$

La résistance de la lampe est $15\ \Omega$.

**3. Intensité avec une résistance en kΩ.**

Conversion : $R = 2\ \text{k}\Omega = 2 \times 1000 = 2000\ \Omega$.

Formule : $I = \dfrac{U}{R}$

$$
I = \frac{10}{2000} = 0{,}005\ \text{A} = 5\ \text{mA}
$$

L'intensité est $0{,}005\ \text{A}$, soit $5\ \text{mA}$.

**4. Exploitation d'une caractéristique.**

Le conducteur est ohmique (la droite passe par l'origine), donc $R$ est constant :

$$
R = \frac{U}{I} = \frac{5}{0{,}25} = 20\ \Omega
$$

Si l'intensité devient $I' = 0{,}5\ \text{A}$, la tension devient :

$$
U' = R \cdot I' = 20 \times 0{,}5 = 10\ \text{V}
$$

L'intensité étant doublée, la tension est doublée : c'est la proportionnalité propre aux conducteurs ohmiques.

**5. Résistances équivalentes.**

a. En **série** : $R_{\text{éq}} = R_1 + R_2 = 3 + 5 = 8\ \Omega$.

b. En **parallèle** :
$$
\frac{1}{R_{\text{éq}}} = \frac{1}{3} + \frac{1}{5} = \frac{5}{15} + \frac{3}{15} = \frac{8}{15}
$$
Donc $R_{\text{éq}} = \dfrac{15}{8} = 1{,}875\ \Omega$ (valeur plus petite que la plus petite résistance, ce qui est normal en parallèle).

c. En **parallèle** :
$$
\frac{1}{R_{\text{éq}}} = \frac{1}{12} + \frac{1}{6} = \frac{1}{12} + \frac{2}{12} = \frac{3}{12} = \frac{1}{4}
$$
Donc $R_{\text{éq}} = 4\ \Omega$.

**6. Circuit en série complet.**

1. Résistance équivalente : $R_{\text{éq}} = R_1 + R_2 = 4 + 8 = 12\ \Omega$.
2. Intensité : $I = \dfrac{U}{R_{\text{éq}}} = \dfrac{12}{12} = 1\ \text{A}$.
3. Tension aux bornes de $R_1$ : $U_1 = R_1 \cdot I = 4 \times 1 = 4\ \text{V}$.
4. Tension aux bornes de $R_2$ : $U_2 = R_2 \cdot I = 8 \times 1 = 8\ \text{V}$.
5. Vérification par la règle des mailles : $U_1 + U_2 = 4 + 8 = 12\ \text{V} = U$ ✓

En série, l'intensité est la même partout : $I_1 = I_2 = 1\ \text{A}$.

:::remarque Contrôle des résultats
En parallèle, $R_{\text{éq}}$ doit être inférieure à la plus petite résistance ($1{,}875 < 3$ et $4 < 6$) : les deux résultats sont cohérents.
:::
