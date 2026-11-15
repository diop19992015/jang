---
titre: Sujet type BFEM — Solutions aqueuses
difficulte: 3
type: bfem
annee: 2023
indices:
  - Commence par convertir tous les volumes en litres.
  - Utilise Cm = m/V puis, si nécessaire, n = m/M et C = n/V.
  - Pour la dilution, la quantité de soluté ne change pas : C1 × V1 = C2 × V2.
  - Soigne la rédaction : écris la formule, remplace les valeurs, puis donne l'unité.
---

## Énoncé

**Document 1.** Dans une ferme près de Thiès, un agriculteur prépare une solution d'engrais à partir de produits issus des phosphates de Taiba. Il pèse $12$ g d'engrais et le dissout dans de l'eau pour obtenir $2$ L de solution.

**Document 2.** Pour contrôler la qualité de l'eau qu'il utilise, il mesure la concentration massique de sel dans deux échantillons :

| Échantillon | Masse de sel | Volume de solution |
| --- | --- | --- |
| A | $4$ g | $1$ L |
| B | $0{,}5$ g | $500$ mL |

**Document 3.** Il dispose aussi d'une solution mère de concentration $C = 0{,}5$ mol/L qu'il doit diluer pour obtenir $400$ mL d'une solution à $0{,}1$ mol/L.

On demande :

1. Calculer la concentration massique de la solution d'engrais. *(2 points)*
2. Calculer la concentration massique de chaque échantillon (A et B) et dire lequel est le plus concentré. *(2 points)*
3. Calculer la quantité de matière de sel contenue dans l'échantillon B ($M_{NaCl} = 58{,}5$ g/mol), puis sa concentration molaire. *(2 points)*
4. Calculer le volume de solution mère à prélever pour préparer la solution diluée du document 3. *(3 points)*
5. Rédiger deux règles de conduite à respecter pour préparer une solution de concentration exacte. *(1 point)*

## Solution

**1. Concentration massique de la solution d'engrais.**

$$
C_m = \frac{m}{V} = \frac{12}{2} = 6\ \text{g/L}
$$

La concentration massique est de **$6$ g/L**. *(Formule 0,5 pt — valeur 0,5 pt — unité 0,5 pt — résultat 0,5 pt)*

**2. Concentrations des échantillons A et B.**

Échantillon A :

$$
C_{m,A} = \frac{4}{1} = 4\ \text{g/L}
$$

Échantillon B : $500\ \text{mL} = 0{,}5$ L

$$
C_{m,B} = \frac{0{,}5}{0{,}5} = 1\ \text{g/L}
$$

**L'échantillon A est le plus concentré** ($4$ g/L > $1$ g/L). *(0,5 pt par conversion, 0,5 pt par valeur, 0,5 pt pour la comparaison)*

**3. Quantité de matière et concentration molaire de l'échantillon B.**

$$
n = \frac{m}{M} = \frac{0{,}5}{58{,}5} \approx 0{,}0085\ \text{mol}
$$

$$
C_B = \frac{n}{V} = \frac{0{,}0085}{0{,}5} \approx 0{,}017\ \text{mol/L}
$$

La quantité de matière est d'environ **$8{,}5 \times 10^{-3}$ mol** et la concentration molaire d'environ **$0{,}017$ mol/L**. *(1 pt pour $n$, 1 pt pour $C$)*

**4. Volume de solution mère à prélever.**

Dilution : $C_1 V_1 = C_2 V_2$ avec $C_1 = 0{,}5$ mol/L, $C_2 = 0{,}1$ mol/L, $V_2 = 400\ \text{mL} = 0{,}4$ L.

$$
V_1 = \frac{C_2 \times V_2}{C_1} = \frac{0{,}1 \times 0{,}4}{0{,}5} = 0{,}08\ \text{L} = 80\ \text{mL}
$$

Il faut prélever **$80$ mL** de solution mère, puis compléter au trait de jauge avec de l'eau jusqu'à $400$ mL. *(1 pt formule — 1 pt valeurs — 1 pt résultat avec unité)*

**5. Règles de conduite.**

- Peser exactement la masse de soluté avec une balance et une tare.
- Dissoudre le soluté dans une partie du solvant, puis compléter **au trait de jauge** avec le solvant et homogénéiser.
- Ne jamais ajouter le soluté « à vue » : c'est le seul moyen d'obtenir une concentration exacte. *(1 pt pour deux règles justes)*

:::methode Ce que le correcteur attend
Une formule écrite avant tout calcul, les valeurs avec leurs unités, le volume converti en litres, et le résultat final assorti de son unité. Une réponse juste sans justification n'obtient qu'une partie des points.
:::
