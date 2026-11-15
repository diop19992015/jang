---
titre: Cinématique du point matériel
accroche: Vecteurs position, vitesse et accélération ; mouvements rectilignes uniformes et uniformément variés ; chute libre.
series: S1, S2
ordre: 1
duree: 45
coefficient: 3
demo: true
objectifs:
  - Définir et utiliser les vecteurs position, vitesse et accélération.
  - Distinguer mouvement rectiligne uniforme et mouvement rectiligne uniformément varié.
  - Établir et exploiter les équations horaires du mouvement.
  - Étudier la chute libre d'un corps sans frottement.
prerequis:
  - Vecteurs et repérage dans un plan.
  - Dérivation des fonctions (dérivée d'un polynôme).
  - Unités du Système international.
---

## L'essentiel du chapitre

:::formule Vecteurs cinématiques
$$
\vec{v}(t) = \frac{d\vec{OM}}{dt} \qquad \vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{OM}}{dt^2}
$$

Sur un axe $(O\,;\vec{i})$ : $\vec{OM}=x(t)\,\vec{i}$, $\vec{v}=v_x(t)\,\vec{i}$ et $\vec{a}=a_x(t)\,\vec{i}$.
:::

:::formule Mouvement rectiligne uniforme
$$
a=0 \qquad v=v_0 \qquad x(t)=v_0\,t+x_0
$$
:::

:::formule Mouvement rectiligne uniformément varié
$$
a=\text{constante} \qquad v(t)=a\,t+v_0 \qquad x(t)=\frac{1}{2}a\,t^2+v_0\,t+x_0
$$
$$
v^2-v_0^2 = 2a\,(x-x_0)
$$
:::

:::formule Chute libre
Axe orienté vers le bas, sans vitesse initiale :
$$
a=g \qquad v(t)=g\,t \qquad z(t)=\frac{1}{2}g\,t^2
$$
$$
t=\sqrt{\frac{2h}{g}} \qquad v=\sqrt{2gh}
$$
:::

:::formule Mouvement circulaire uniforme
$$
v = R\,\omega = \frac{2\pi R}{T} \qquad a = \frac{v^2}{R} = R\,\omega^2
$$
L'accélération est centripète.
:::

## Conversions utiles

| Grandeur | Unité SI | Conversion |
| --- | --- | --- |
| Position | m | $1$ km $=10^3$ m |
| Durée | s | $1$ min $=60$ s ; $1$ h $=3600$ s |
| Vitesse | m·s⁻¹ | $1$ km·h⁻¹ $= \dfrac{1}{3{,}6}$ m·s⁻¹ |
| Accélération | m·s⁻² | — |

## Signes et sens

- Une vitesse **positive** signifie que le mobile va dans le sens positif de l'axe.
- Une accélération **positive** accélère le mouvement si $v>0$, le retarde si $v<0$.
- Si $a$ et $v$ ont le **même signe**, le mouvement est accéléré.
- Si $a$ et $v$ ont des **signes opposés**, le mouvement est retardé.

:::erreur Les trois erreurs les plus fréquentes
1. Oublier de convertir les km·h⁻¹ en m·s⁻¹.
2. Confondre $x_0$ (position initiale) et l'origine du repère.
3. Utiliser $x(t)=\frac12at^2$ en oubliant le terme $v_0t$ quand la vitesse initiale n'est pas nulle.
:::
