---
titre: Enregistrement d'un mouvement rectiligne
difficulte: 2
type: entrainement
demo: true
indices:
  - L'accélération est la dérivée de la vitesse ; dérive deux fois la position.
  - Pour la distance parcourue, attention au sens du mouvement.
  - Utilise la relation $v^2-v_0^2=2a(x-x_0)$ pour éviter de calculer la durée.
---

## Énoncé

Un mobile se déplace sur un axe $(O\,;\vec{i})$ orienté dans le sens du mouvement. Son équation horaire, pour $t \geq 0$, est
$$
x(t)=2t^2-4t+5
$$
où $x$ est en mètres et $t$ en secondes.

1. Déterminer l'expression de la vitesse $v_x(t)$ puis celle de l'accélération $a_x(t)$.
2. Préciser la nature du mouvement.
3. À quel instant le mobile change-t-il de sens ? Quelle est alors sa position ?
4. Calculer la distance totale parcourue entre $t=0$ et $t=3$ s.

## Solution

**1. Vitesse et accélération.**

On dérive l'équation horaire :
$$
v_x(t)=x'(t)=4t-4 \quad \text{(m·s}^{-1}\text{)}
$$
$$
a_x(t)=v_x'(t)=4 \quad \text{(m·s}^{-2}\text{)}
$$

**2. Nature du mouvement.**

L'accélération est constante et égale à $4$ m·s⁻². Le mouvement est donc **rectiligne uniformément varié**, et plus précisément uniformément accéléré lorsque $v_x>0$.

**3. Changement de sens.**

Le mobile change de sens lorsque $v_x(t)=0$ :
$$
4t-4=0 \iff t=1 \text{ s}.
$$
À cet instant, sa position est
$$
x(1)=2\times 1^2-4\times 1+5=2-4+5=3 \text{ m}.
$$

Comme $v_x(t)<0$ pour $t<1$ et $v_x(t)>0$ pour $t>1$, le mobile recule jusqu'à $t=1$ s puis avance.

**4. Distance totale parcourue entre $t=0$ et $t=3$ s.**

Il faut découper le calcul au changement de sens.

- Position initiale : $x(0)=5$ m.
- Position au changement de sens : $x(1)=3$ m.
- Position finale : $x(3)=2\times 9-4\times 3+5=18-12+5=11$ m.

Entre $t=0$ et $t=1$, le mobile va de $5$ m à $3$ m : il parcourt $|3-5|=2$ m.
Entre $t=1$ et $t=3$, il va de $3$ m à $11$ m : il parcourt $|11-3|=8$ m.

La distance totale parcourue est donc :
$$
d = 2+8 = 10 \text{ m}.
$$

:::remarque Déplacement et distance
Le **déplacement** entre $t=0$ et $t=3$ est $x(3)-x(0)=11-5=6$ m. Il est différent de la distance parcourue ($10$ m) car le mobile a changé de sens. C'est une distinction classique au BAC.
:::
