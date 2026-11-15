---
titre: Géométrie dans l’espace
accroche: Programme officiel — Activités géométriques.
ordre: 13
duree: 90
demo: false
objectifs:
  - Représenter un solide et lire ses éléments (arêtes, faces, sommets)
  - Calculer le volume d’un prisme, d’un cylindre, d’un cône et d’une pyramide
  - Calculer des aires et des volumes de figures de l’espace
---

## L’essentiel du chapitre

:::formule Les éléments d’un solide
- **Sommet** : point de rencontre des faces.
- **Arête** : segment de rencontre de deux faces.
- **Face** : surface limitant le solide.
- Pavé : 6 faces, 8 sommets, 12 arêtes. Pyramide à base à $n$ côtés : $n+1$ sommets, $2n$ arêtes.
:::

:::formule Volume du prisme
$$
V = S_b \times h
$$
$S_b$ = aire de la base, $h$ = distance entre les deux bases.
:::

:::formule Volume du cylindre
$$
V = \pi r^2 h
$$
Aire latérale $= 2\pi r h$ ; aire totale $= 2\pi r(r+h)$.
:::

:::formule Volume du cône
$$
V = \frac{1}{3} \pi r^2 h
$$
Génératrice : $\ell = \sqrt{h^2 + r^2}$ ; aire latérale $= \pi r \ell$.
:::

:::formule Volume de la pyramide
$$
V = \frac{S_b \times h}{3}
$$
:::

:::formule Comparaison et conversions
$$
V_{cône} = \frac{V_{cylindre}}{3} \qquad V_{pyramide} = \frac{V_{prisme}}{3}
$$
(même base et même hauteur)
$$
1 \text{ m}^3 = 1000 \text{ L} \qquad 1 \text{ dm}^3 = 1 \text{ L} \qquad 1 \text{ cm}^3 = 1 \text{ mL}
$$
:::

## Méthode express

1. **Lire un solide** : compter faces, sommets, arêtes ; dessiner avec les arêtes cachées en pointillé.
2. **Volume d’un prisme** : identifier la base → calculer son aire → multiplier par la hauteur.
3. **Volume d’un cylindre ou d’un cône** : repérer $r$ et $h$ → appliquer $\pi r^2 h$ ou $\dfrac{\pi r^2 h}{3}$.
4. **Volume d’une pyramide** : aire de la base × hauteur ÷ 3.
5. **Élément manquant** (génératrice, hauteur, rayon) : Pythagore dans le triangle rectangle formé par ces trois longueurs.
6. **Passer aux litres** : diviser le volume en cm³ par $1000$.

:::erreur Les erreurs qui coûtent des points
1. Oublier le **tiers** pour le cône et la pyramide.
2. Utiliser le rayon au carré oublié : $\pi r^2$ et non $2\pi r$ (ce dernier est le périmètre du cercle).
3. Écrire l’unité en cm au lieu de **cm³** pour un volume.
4. Confondre hauteur et génératrice : la génératrice $\ell$ est l’hypoténuse, $h$ et $r$ les côtés.
5. Diviser par $1000$ deux fois (ou pas du tout) pour convertir en litres.
:::

## Vocabulaire

- **Solide** : volume de l’espace limité par des faces.
- **Sommets, arêtes, faces** : points, segments et surfaces limitant un solide.
- **Patron** : figure plane qui, repliée, donne le solide.
- **Prisme** : bases égales et parallèles, faces latérales en parallélogrammes.
- **Cylindre** : deux cercles parallèles de même rayon, reliés par une surface courbe.
- **Cône** : base circulaire et sommet unique, reliés par une surface courbe.
- **Pyramide** : base polygonale et sommet unique, faces latérales triangulaires.
- **Génératrice $\ell$** : segment reliant le sommet d’un cône à son bord de base.
- **Hauteur** : distance perpendiculaire entre la base et le sommet (ou entre les deux bases).
- **Aire latérale / aire totale** : faces latérales seules / toutes les faces.
