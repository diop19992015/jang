---
titre: Sujet type BFEM — Loupe et vision de l'œil
difficulte: 3
type: bfem
annee: 2023
indices:
  - Convertis les centimètres en mètres avant d'appliquer la relation des distances.
  - Construis l'image avec deux rayons parmi les trois rayons utiles.
  - Rappele-toi : myopie → lentille divergente ; hypermétropie → lentille convergente.
---

## Énoncé

Un élève utilise une lentille convergente de distance focale $f = 15\ \mathrm{cm}$ comme loupe pour lire l'étiquette d'un médicament. Un objet $AB$ est placé à $25\ \mathrm{cm}$ de la lentille.

**Partie A — Construction** (4 points)

1. Placer sur l'axe optique les points $F$, $F'$ et $2F$ (rappeler $OF = OF' = f$).
2. Décrire les deux rayons nécessaires pour construire l'image $A'B'$ de l'objet $AB$ placé entre $F$ et $2F$, et donner la nature, la direction et la taille de cette image.

**Partie B — Calcul** (4 points)

3. Calculer la vergence de la lentille.
4. Calculer la distance $OA'$ de l'image à la lentille. Donner la nature de l'image et son grossissement.

**Partie C — L'œil** (2 points)

5. On remplace la loupe par l'œil : dire où se forme normalement l'image d'un objet sur l'œil sain.
6. Un enfant voit mal le tableau : l'image se forme en avant de la rétine. De quel défaut s'agit-il et quelle lentille de correction faut-il ?

## Solution

**1. Repérage des points.**

$f = 15\ \mathrm{cm}$ donc $OF = OF' = 15\ \mathrm{cm}$ : on place $F$ à $15\ \mathrm{cm}$ de $O$ du côté de l'image, et $F'$ à $15\ \mathrm{cm}$ de $O$ du côté de l'objet. Les points $2F$ et $2F'$ sont à $30\ \mathrm{cm}$ de $O$ de part et d'autre.

**2. Construction et nature de l'image.**

On trace depuis l'extrémité $B$ de l'objet :
- le rayon **parallèle à l'axe optique**, qui ressort en passant par $F$ ;
- le rayon **passant par le centre optique $O$**, qui continue sans dévier.

Ces deux rayons se rencontrent du côté de l'image : le point d'intersection est $B'$. L'objet étant entre $F$ ($15\ \mathrm{cm}$) et $2F$ ($30\ \mathrm{cm}$), l'image se forme **au-delà de $2F'$**, donc elle est **réelle**, **renversée** et **agrandie**.

**3. Vergence.**

$f = 15\ \mathrm{cm} = 0{,}15\ \mathrm{m}$ (lentille convergente, $f > 0$) :

$$
V = \frac{1}{f} = \frac{1}{0{,}15} \approx +6{,}7\ \mathrm{D}
$$

La vergence est d'environ $+6{,}7$ dioptries.

**4. Distance de l'image et grossissement.**

$OA = 25\ \mathrm{cm} = 0{,}25\ \mathrm{m}$ :

$$
\frac{1}{OA'} = \frac{1}{f} - \frac{1}{OA} = \frac{1}{0{,}15} - \frac{1}{0{,}25} = 6{,}67 - 4 = 2{,}67\ \mathrm{m^{-1}}
$$

$$
OA' = \frac{1}{2{,}67} = 0{,}375\ \mathrm{m} = 37{,}5\ \mathrm{cm}
$$

$OA' > 0$ → l'image est **réelle** (elle se forme à $37{,}5\ \mathrm{cm}$ derrière la lentille, bien au-delà de $2F' = 30\ \mathrm{cm}$, ce qui confirme le tracé).

Grossissement :

$$
g = \frac{|OA'|}{OA} = \frac{37{,}5}{25} = 1{,}5
$$

L'image est agrandie **1,5 fois** : elle est réelle, renversée et agrandie.

**5. Image sur l'œil sain.**

Sur l'œil sain, l'image d'un objet se forme sur la **rétine** : elle est réelle, renversée et réduite. Le cristallin, lentille convergente variable, assure la mise au point (accommodation).

**6. Défaut et correction.**

L'image se forme **en avant de la rétine** : l'œil est trop convergent, c'est la **myopie**. On la corrige avec une lunette à lentille **divergente**, qui écarte les rayons pour repousser l'image jusque sur la rétine.

:::methode Ce que le correcteur attend
- Un tracé propre avec échelle, $F$, $F'$, $2F$, les deux rayons et l'image $A'B'$ (4 points).
- Les conversions en mètres, la relation des distances correctement isolée et le résultat en mètres (ou centimètres) avec l'unité (4 points).
- Le vocabulaire exact : réelle, renversée, agrandie, myopie, lentille divergente (2 points).
:::

:::erreur Piège classique
$OA' = 37{,}5\ \mathrm{cm}$ ne doit pas être confondu avec la position de l'objet : on demande la distance **objet-image**, calculée par la relation. Et n'oublie pas de conclure sur la taille avec $g$, pas seulement sur la nature.
:::
