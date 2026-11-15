---
titre: Sujet type BFEM — Énergie, consommation et rendement
difficulte: 3
type: bfem
annee: 2023
indices:
  - Repère d’abord les formes d’entrée et de sortie d’énergie de chaque appareil.
  - Convertis la durée en secondes avant tout calcul en joules (ou utilise le kWh avec P en kW et t en h).
  - Pour le rendement : écris la formule η = E_utile / E_fournie avant de calculer.
  - Pour l’énergie potentielle : E_p = m × g × h avec m en kg et g = 10 N/kg.
---

## Énoncé

**Document 1.** Consommation quotidienne de trois appareils d’un ménage de Dakar :

| Appareil | Puissance | Durée d’utilisation par jour |
| --- | --- | --- |
| Lampe LED | $10\ W$ | $6\ h$ |
| Téléviseur | $100\ W$ | $4\ h$ |
| Ventilateur | $75\ W$ | $5\ h$ |

**Document 2.** Un chauffe-eau solaire installé sur un toit de Dakar reçoit chaque jour $3\,000\,000\ J$ d’énergie solaire et restitue à l’eau $2\,100\,000\ J$ d’énergie thermique utile. Le reste est perdu par déperditions.

On demande :

1. Identifier les transformations d’énergie qui se produisent dans (a) le ventilateur et (b) le chauffe-eau solaire. *(1,5 point)*
2. Calculer l’énergie électrique consommée par le téléviseur en une journée, en joules puis en kilowatt-heures. *(2,5 points)*
3. Calculer le rendement $\eta$ du chauffe-eau solaire en pourcentage, puis donner la valeur de l’énergie perdue chaque jour. *(2 points)*
4. Un élève de $m = 50\ kg$ monte un escalier de $h = 4\ m$ de haut ($g = 10\ N/kg$). Calculer son énergie potentielle de pesanteur et dire en quelle forme cette énergie se transforme lorsqu’il redescend en courant. *(2 points)*
5. Citer deux inconvénients liés à l’utilisation massive des énergies fossiles et deux intérêts de l’énergie solaire au Sénégal. *(2 points)*

## Solution

**1. Transformations d’énergie.**

(a) **Ventilateur** : énergie **électrique** → énergie **mécanique** (mouvement des pales), avec des pertes thermiques et sonores.

(b) **Chauffe-eau solaire** : énergie **lumineuse/thermique** (Soleil) → énergie **interne** de l’eau (chauffage).

*(0,5 pt par transformation correctement nommée)*

**2. Énergie consommée par le téléviseur.**

En joules : $t = 4\ h = 4 \times 3600 = 14\,400\ s$

$$
W = P \times t = 100 \times 14\,400 = 1\,440\,000\ J = 1{,}44 \times 10^6\ J
$$

En kilowatt-heures : $P = 100\ W = 0{,}1\ kW$, $t = 4\ h$

$$
W = 0{,}1 \times 4 = 0{,}4\ kWh
$$

Vérification : $0{,}4 \times 3{,}6 \times 10^6 = 1\,440\,000\ J$ ✓ *(0,5 pt conversion — 1 pt calcul en joules — 0,5 pt calcul en kWh — 0,5 pt unités)*

**3. Rendement du chauffe-eau solaire.**

$$
\eta = \frac{E_{\text{utile}}}{E_{\text{fournie}}} = \frac{2\,100\,000}{3\,000\,000} = 0{,}7 = 70\ \%
$$

Énergie perdue :

$$
E_{\text{pertes}} = 3\,000\,000 - 2\,100\,000 = 900\,000\ J
$$

Le chauffe-eau a un rendement de **$70\ \%$** et perd **$900\,000\ J$** par jour. *(1 pt formule et résultat du rendement — 0,5 pt calcul des pertes — 0,5 pt conclusion)*

**4. Énergie potentielle de l’élève.**

$$
E_p = m \times g \times h = 50 \times 10 \times 4 = 2\,000\ J
$$

L’élève possède $2\,000\ J$ d’énergie potentielle. Lorsqu’il redescend en courant, cette énergie se transforme en **énergie cinétique** (énergie du mouvement). *(1 pt formule et résultat — 0,5 pt unité — 0,5 pt transformation)*

**5. Énergies fossiles et solaire.**

Inconvénients des énergies fossiles (deux au choix) :
- combustion qui rejette du **$CO_2$** (gaz à effet de serre, réchauffement climatique) ;
- combustion incomplète qui produit du **$CO$** toxique et des suies ;
- ressources **épuisables** et pollution des villes par les fumées.

Intérêts du solaire au Sénégal (deux au choix) :
- ressource **gratuite et renouvelable**, très abondante (fort ensoleillement) ;
- **aucune combustion**, donc pas de $CO_2$ ni de $CO$ ;
- permet d’électrifier les villages hors réseau et les toits de Dakar. *(0,5 pt par idée juste)*

:::methode Ce que le correcteur attend
Trois réflexes à avoir : (1) écrire toujours la formule avant le calcul numérique — elle est notée même si le résultat est faux ; (2) convertir les unités avant de calculer ($g \to kg$, $h \to s$) ; (3) conclure chaque calcul par une phrase avec l’unité.
:::
