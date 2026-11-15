---
titre: Repérage dans le plan
accroche: Programme officiel — Activités géométriques.
ordre: 12
duree: 90
demo: false
objectifs:
  - Définir un repère : origine, axe des abscisses, axe des ordonnées, unités
  - Placer un point à partir de ses coordonnées et lire les coordonnées d’un point
  - Calculer une distance et le milieu d’un segment dans un repère
---

## L’essentiel du chapitre

:::formule Le repère orthogonal
- **Origine $O$** : point de rencontre des deux axes.
- **Axe des abscisses $(Ox)$** : gradué vers la droite.
- **Axe des ordonnées $(Oy)$** : gradué vers le haut, perpendiculaire à $(Ox)$.
- **Unité** : la même graduation sur les deux axes (repère orthonormé).
:::

:::formule Coordonnées d’un point
$$
M(a\,;\,b) \quad a = \text{abscisse},\ b = \text{ordonnée}
$$
Signes selon le quadrant : $(+,+)$ en haut à droite, $(-,+)$ en haut à gauche, $(-,-)$ en bas à gauche, $(+,-)$ en bas à droite.
:::

:::formule Symétries de points
- Axe des abscisses : $M(a\,;\,b) \mapsto M_1(a\,;\,-b)$
- Axe des ordonnées : $M(a\,;\,b) \mapsto M_2(-a\,;\,b)$
- Origine (symétrie centrale) : $M(a\,;\,b) \mapsto M_3(-a\,;\,-b)$
:::

:::formule Distance entre deux points
$$
AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
$$
:::

:::formule Milieu d’un segment
$$
M\left(\frac{x_A + x_B}{2}\,;\,\frac{y_A + y_B}{2}\right)
$$
:::

## Méthode express

1. **Lire les coordonnées** : de $M$, tracer les perpendiculaires aux deux axes ; lire les graduations avec leur signe.
2. **Placer un point** : partir de $O$, avancer le long de $(Ox)$ selon l’abscisse, puis monter ou descendre selon l’ordonnée.
3. **Calculer une distance** : différences des coordonnées → carrés → somme → racine carrée → unité.
4. **Trouver un milieu** : moyenne des abscisses, moyenne des ordonnées.
5. **Traiter une figure** : coordonnées des sommets → longueurs des côtés → Pythagore si angle droit → périmètre puis aire.
6. **Passer à l’échelle réelle** : distance du plan × valeur de l’unité (proportionnalité).

:::erreur Les erreurs qui coûtent des points
1. Écrire $M(-3,5)$ au lieu de $M(-3\,;\,5)$ : la virgule fait passer au nombre décimal.
2. Oublier les parenthèses avant de mettre au carré : $(5-2)^2 = 9$, pas $1$.
3. Se tromper de signe : $3 - (-1) = 4$.
4. Oublier la racine carrée ou l’unité à la fin du calcul de distance.
5. Inverser abscisse et ordonnée en plaçant un point.
6. Moyenner les abscisses avec les ordonnées au lieu de les moyenner séparément.
:::

## Vocabulaire

- **Repère orthogonal** : origine + deux perpendiculaires graduées.
- **Origine $O$** : point où se coupent les axes.
- **Axe des abscisses $(Ox)$** : axe horizontal, sens positif vers la droite.
- **Axe des ordonnées $(Oy)$** : axe vertical, sens positif vers le haut.
- **Abscisse** : première coordonnée, mesure signée sur $(Ox)$.
- **Ordonnée** : seconde coordonnée, mesure signée sur $(Oy)$.
- **Quadrant** : l’une des quatre régions du plan séparées par les axes.
- **Unité** : longueur de référence des graduations.
- **Échelle d’un plan** : rapport entre la longueur sur le plan et la longueur réelle.
