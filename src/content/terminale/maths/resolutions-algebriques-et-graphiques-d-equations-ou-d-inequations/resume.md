---
titre: Résolutions algébriques et graphiques d’équations ou d’inéquations
accroche: Programme officiel — Analyse.
series: L
ordre: 9
duree: 45
demo: false
statut: publie
partie: Analyse
source: https://samacours.com/programmes/terminale/mathematiques
---

## L'essentiel du chapitre

:::formule Équation polynomiale = 0
$$
P(x) = 0 \;\xrightarrow{\text{factorisation}}\; \text{facteur}_1 = 0 \;\text{ ou }\; \text{facteur}_2 = 0 \;\text{ ou }\;\dots
$$

Un produit est nul **si et seulement si** l'un de ses facteurs est nul.
:::

:::formule Second degré
$$
\Delta = b^2 - 4ac
$$

| $\Delta$ | Solutions de $ax^2+bx+c=0$ |
| --- | --- |
| $< 0$ | aucune ($\varnothing$) |
| $= 0$ | $x = -\dfrac{b}{2a}$ (racine double) |
| $> 0$ | $x = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ |
:::

:::formule Signes d'un produit ou d'un quotient
$$
u \times v \geq 0 \iff \begin{cases} u \geq 0 \text{ et } v \geq 0\\ \text{ou}\\ u \leq 0 \text{ et } v \leq 0 \end{cases}
$$

$$
\frac{u}{v} < 0 \iff u \text{ et } v \text{ de signes contraires, avec } v \neq 0
$$
:::

:::formule Équation rationnelle
$$
\frac{P(x)}{Q(x)} = 0 \iff P(x) = 0 \;\text{ et }\; Q(x) \neq 0
$$

L'interdit $Q(x) \neq 0$ doit toujours être écrit.
:::

:::formule Résolution graphique
- $f(x) = k$ : abscisses des **intersections** de $\mathcal{C}_f$ avec $y = k$.
- $f(x) \geq k$ : abscisses où la courbe est **au-dessus ou au contact** de $y = k$.
:::

## Méthode express

1. **Reconnaître le type** : polynomiale, produit/quotient, rationnelle ou graphique.
2. **Interdits** : dénominateur $\neq 0$ (toujours écrit, même si le facteur se simplifie).
3. **Factoriser** (ne jamais diviser par une expression de l'inconnue).
4. **Points de passage** : résoudre chaque facteur $= 0$, les classer sur une droite.
5. **Tableau de signes** : signe de chaque facteur puis du produit/quotient sur chaque intervalle.
6. **Lecture** : $\leq$ ou $\geq$ → bornes **incluses** ; $<$ ou $>$ → bornes **exclues** (dénominateur toujours exclu).
7. **Vérification** : remplacer une ou deux solutions dans l'équation de départ.

:::erreur Les erreurs qui coûtent des points
1. Diviser par $x$ dans $x^2 = x$ et perdre la solution $x = 0$.
2. Oublier l'interdit du dénominateur dans une équation rationnelle.
3. Confondre $]-3\,;\,1[$ et $[-3\,;\,1]$ selon que l'inéquation est stricte ou non.
4. Donner une solution graphique sans phrase « abscisses des points d'intersection ».
5. Annoncer « aucune solution » pour $x^2 = -1$ sans calculer $\Delta < 0$.
:::

## Vocabulaire

- **Équation** : égalité contenant une ou plusieurs inconnues ; l'ensemble de ses solutions se note $S$.
- **Inéquation** : inégalité contenant une inconnue.
- **Factorisation** : écrire un polynôme comme un produit de facteurs.
- **Point de passage** : valeur où un facteur s'annule (le signe peut y changer).
- **Tableau de signes** : tableau indiquant le signe de chaque facteur et du produit sur chaque intervalle.
- **Interdit** : valeur interdite à l'inconnue (dénominateur nul).
- **Résolution graphique** : lecture des solutions sur un graphique (intersections avec une horizontale).
- **Solution double** : racine issue d'un facteur élever au carré (ex. $(x-2)^2 = 0$).
