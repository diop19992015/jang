## Vocabulaire de référence

| Terme | Définition | Repère |
| --- | --- | --- |
| Antigène | Molécule de surface reconnue comme étrangère | À la surface de l'hématie |
| Anticorps | Protéine du plasma dirigée contre un antigène | Dans le plasma |
| Agglutination | Collage des hématies par réaction antigen-anticorps | Grumeaux visibles |
| Sérologie | Groupage du sang par des sérums témoins | anti-A, anti-B, témoin |
| Système ABO | Classification en groupes A, B, AB, O | Antigènes A et B |
| Facteur rhésus | Antigène D présent (Rh+) ou absent (Rh−) | Système indépendant de l'ABO |
| Sensibilisation | Fabrication d'anti-D après un premier contact Rh+ | Uniquement chez Rh− |

## Système ABO

:::formule Tableau des groupes sanguins
| Groupe | Antigènes sur les hématies | Anticorps dans le plasma | Sérotype lu |
| --- | --- | --- | --- |
| A | A | anti-B | anti-A +, anti B −, témoin − |
| B | B | anti-A | anti-A −, anti-B +, témoin − |
| AB | A et B | aucun | anti-A +, anti-B +, témoin − |
| O | aucun | anti-A et anti-B | anti-A −, anti-B −, témoin − |
:::

:::remarque Règle d'or ABO
Un individu ne porte **jamais** d'anticorps contre les antigènes qu'il possède : anti-A et anti-B ne coexistent jamais avec l'antigène correspondant sur les hématies.
:::

## Facteur rhésus

:::formule Lecture du rhésus
- **Rh+** : antigène D présent sur les hématies (majoritaire, plus de $90$ % en Afrique de l'Ouest).
- **Rh−** : antigène D absent (minoritaire).

$$
\text{Rh}^- \xrightarrow{\text{1er contact avec Rh}^+} \text{sensibilisation} \xrightarrow{\text{2e contact}} \text{agglutination brutale}
$$
:::

:::formule Écriture complète du groupe
Le groupe sanguin s'écrit toujours avec les deux systèmes : « A Rh+ », « B Rh− », « AB Rh+ », « O Rh− ».
:::

## Compatibilité des transfusions

:::formule Règle de compatibilité
$$
\text{antigènes du donneur} \cap \text{anticorps du receveur} = \varnothing
$$

Aucun antigène du donneur ne doit rencontrer d'anticorps chez le receveur.
:::

:::formule Tableau de compatibilité ABO
| Receveur \ Donneur | A | B | AB | O |
| --- | --- | --- | --- | --- |
| **A** | oui | non | non | oui |
| **B** | non | oui | non | oui |
| **AB** | non | non | oui | oui |
| **O** | non | non | non | oui |
:::

:::formule Règles du rhésus
- Receveur **Rh−** → uniquement sang **Rh−** (sinon sensibilisation).
- Receveur **Rh+** → sang **Rh+** ou **Rh−**.
:::

:::remarque Donneur et receveur universels
- **Donneur universel = O** : ses hématies n'ont aucun antigène, donc aucun anticorps ne peut les reconnaître.
- **Receveur universel = AB** : son plasma n'a aucun anticorps, donc il accepte tous les antigènes.
:::

## Schéma-légende : lecture d'une agglutination

:::remarque Légende du schéma
- **Grumeaux / points** = agglutination = antigène **présent**.
- **Mélange homogène, rouge uniforme** = pas d'agglutination = antigène **absent**.
- **Cercle barré** = goutte témoin (sérum sans anticorps) : doit rester homogène.
:::

```
Lame du patient P

goutte 1 : sérum anti-A + P  →  ●●●  agglutination      → antigène A présent
goutte 2 : sérum anti-B + P  →  ═══  homogène           → antigène B absent
goutte 3 : sérum témoin + P  →  ═══  homogène           → test valide

Conclusion : P est du groupe A (Rh se teste sur une autre lame).
```

:::remarque Cas des quatre groupes
- Groupe A : agglutination **uniquement** sur la goutte anti-A.
- Groupe B : agglutination **uniquement** sur la goutte anti-B.
- Groupe AB : agglutination sur **les deux** gouttes.
- Groupe O : **aucune** agglutination (le témoin seul reste homogène).
:::
