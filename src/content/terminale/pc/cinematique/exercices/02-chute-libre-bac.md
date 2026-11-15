---
titre: Sujet type BAC — Chute libre et projectile
difficulte: 3
type: bac
annee: 2023
demo: true
indices:
  - Commence par choisir un axe vertical orienté vers le bas, origine au point de lancement.
  - La bille est lâchée sans vitesse initiale : $v_0=0$.
  - Pour la vitesse au sol, la relation $v^2=2gh$ est plus rapide que le calcul de $t$.
---

## Énoncé

Un élève, au sommet d'un immeuble de hauteur $H=31{,}25$ m, lâche une bille sans vitesse initiale. On néglige les frottements de l'air et on prend $g=10$ m·s⁻².

On oriente l'axe vertical $(Oz)$ vers le bas, avec l'origine $O$ au point de lâcher et l'origine des temps à l'instant du lâcher.

**Partie A — Chute de la bille**

1. Montrer que la bille est en chute libre.
2. Établir les équations horaires $v_z(t)$ et $z(t)$.
3. Calculer la durée de chute $t_s$ jusqu'au sol.
4. Calculer la vitesse $v_s$ de la bille lorsqu'elle touche le sol, en m·s⁻¹ puis en km·h⁻¹.

**Partie B — Comparaison**

Un second élève lance verticalement vers le bas, depuis le même point, une balle avec une vitesse initiale $v_0=5$ m·s⁻¹.

5. Écrire les nouvelles équations horaires.
6. Calculer la nouvelle durée de chute. Conclure.

## Solution

**Partie A**

**1. Chute libre.**

La bille n'est soumise qu'à son poids $\vec{P}=m\vec{g}$ : les frottements de l'air sont négligés. D'après la deuxième loi de Newton,
$$
m\vec{a}=m\vec{g} \implies \vec{a}=\vec{g}.
$$
L'accélération est égale au champ de pesanteur : la bille est bien en **chute libre**.

**2. Équations horaires.**

Sur l'axe $(Oz)$ orienté vers le bas, $a_z=g=10$ m·s⁻². La vitesse initiale est nulle : $v_0=0$. La position initiale est $z_0=0$.

$$
v_z(t)=g\,t=10t
$$
$$
z(t)=\frac{1}{2}g\,t^2=5t^2
$$

**3. Durée de chute.**

La bille touche le sol lorsque $z(t_s)=H=31{,}25$ m :
$$
5t_s^2=31{,}25 \implies t_s^2=6{,}25 \implies t_s=2{,}5 \text{ s}.
$$

**4. Vitesse au sol.**

$$
v_s=g\,t_s=10\times 2{,}5=25 \text{ m·s}^{-1}.
$$
En km·h⁻¹ : $25\times 3{,}6=90$ km·h⁻¹.

On peut vérifier avec la relation indépendante du temps :
$$
v_s^2=2gH=2\times 10\times 31{,}25=625 \implies v_s=25 \text{ m·s}^{-1}.
$$

**Partie B**

**5. Nouvelles équations horaires.**

Avec $v_0=5$ m·s⁻¹ orientée vers le bas (sens positif) :
$$
v_z(t)=10t+5
$$
$$
z(t)=5t^2+5t
$$

**6. Nouvelle durée de chute.**

On résout $5t^2+5t=31{,}25$, soit $5t^2+5t-31{,}25=0$, ou encore en divisant par $5$ :
$$
t^2+t-6{,}25=0.
$$
Le discriminant vaut $\Delta=1+25=26$, donc
$$
t=\frac{-1+\sqrt{26}}{2}\approx \frac{-1+5{,}10}{2}\approx 2{,}05 \text{ s}.
$$

La balle lancée vers le bas arrive donc plus vite au sol (environ $2{,}05$ s contre $2{,}5$ s). Cela est cohérent : elle possède une vitesse initiale dans le sens du mouvement, alors que la bille part du repos.

:::methode Ce que le correcteur attend
- La justification de la chute libre par la deuxième loi de Newton.
- Un axe clairement orienté et des conditions initiales explicites.
- Les équations horaires correctes avec les unités.
- La résolution de l'équation du second degré et la conclusion physique.
:::
