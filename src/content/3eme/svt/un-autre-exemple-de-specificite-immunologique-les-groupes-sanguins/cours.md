---
titre: "Un autre exemple de spécificité immunologique : les groupes sanguins"
accroche: Système ABO · Facteur rhésus · Compatibilité des transfusions
ordre: 9
duree: 45
demo: false
objectifs:
  - Système ABO
  - Facteur rhésus
  - Compatibilité des transfusions
---

:::remarque À quoi ça sert au BFEM ?
Au BFEM, ce chapitre tombe presque toujours sous forme de tableau de groupes sanguins à lire, de test d'agglutination à interpréter ou d'explication « Pourquoi ce receveur ne peut-il pas recevoir ce sang ? ». Savoir placer les antigènes sur les hématies, les anticorps dans le plasma et appliquer la règle de compatibilité, c'est gagner des points rapides et sûrs à l'épreuve de SVT.
:::

## Rappel : antigènes, anticorps et spécificité

Le système immunitaire distingue le **soi** du **non-soi** grâce aux **antigènes**, des molécules portées à la surface des cellules. Face à un antigène étranger, l'organisme fabrique des **anticorps** qui se fixent spécifiquement dessus : c'est la **réaction antigen-anticorps**.

:::definition Antigène et anticorps
- **Antigène** : molécule reconnue comme étrangère, présente à la surface d'une cellule (hématie, globule blanc…).
- **Anticorps** : protéine produite par l'organisme qui se fixe spécifiquement sur un antigène et provoque son agglutination puis sa destruction.
:::

:::exemple La réaction antigen-anticorps
Si l'on mélange des hématies portant l'antigène A avec un sérum contenant des anticorps anti-A, les hématies se collent entre elles : c'est l'**agglutination**, visible sous forme de petits grumeaux dans le mélange. Ce phénomène est la base du groupage sanguin.
:::

## Le système ABO

Les hématies d'un individu portent à leur surface des antigènes dits **A** et/ou **B**. Son plasma contient au contraire les anticorps **anti-A** et/ou **anti-B** contre les antigènes qu'il ne possède pas.

:::formule Les quatre groupes ABO
| Groupe | Antigènes sur les hématies | Anticorps dans le plasma |
| --- | --- | --- |
| A | A | anti-B |
| B | B | anti-A |
| AB | A et B | aucun |
| O | aucun | anti-A et anti-B |
:::

:::remarque Une règle à ne jamais oublier
Un individu ne fabrique **jamais** d'anticorps contre les antigènes qu'il porte : il agglutinerait ses propres hématies. C'est pourquoi le groupe A possède des anti-B, le groupe B possède des anti-A, le groupe AB n'a aucun anticorps et le groupe O en possède deux.
:::

## Déterminer un groupe sanguin : la sérologie

Le groupage sanguin s'obtient en observant l'agglutination du sang du patient avec des sérums témoins de référence.

:::methode Mise en évidence d'un groupe sanguin
1. Déposer sur une lame trois gouttes : sérum **anti-A**, sérum **anti-B** et sérum **témoin** (sans anticorps).
2. Ajouter une goutte du sang à tester dans chaque goutte de sérum.
3. Remuer chaque mélange avec un agitateur séparé, en respectant l'ordre (témoin en dernier).
4. Observer après quelques minutes : présence ou absence de grumeaux.
5. Conclure : agglutination avec anti-A → antigène A ; avec anti-B → antigène B ; avec les deux → groupe AB ; avec aucun → groupe O.
:::

:::exemple Lecture des résultats
| Mélange | Observation | Interprétation |
| --- | --- | --- |
| Sang + anti-A | agglutination | antigène **A** présent |
| Sang + anti-B | pas d'agglutination | antigène **B** absent |
| Sang + témoin | pas d'agglutination | test valide |

Conclusion : le patient est du groupe **A**.
:::

:::piege Le témoin est indispensable
Si la goutte témoin (sans anticorps) s'agglutine, le sang du patient agglutine par lui-même : le résultat est **non interprétable** et il faut refaire le test. On ne conclut jamais sans avoir vérifié le témoin.
:::

## Le facteur rhésus

Indépendamment du système ABO, les hématies portent ou non l'**antigène D**, appelé **facteur rhésus**.

:::definition Facteur rhésus
- **Rh positif (Rh+)** : l'antigène D est présent à la surface des hématies.
- **Rh négatif (Rh−)** : l'antigène D est absent.

La proportion de Rh+ varie selon les populations : environ $85$ % en Europe, plus de $90$ % en Afrique de l'Ouest.
:::

:::remarque Une particularité du rhésus
Un sujet Rh− ne fabrique **pas naturellement** d'anticorps anti-D : son premier contact avec des hématies Rh+ se passe sans réaction. Mais il devient alors **sensibilisé** : tout contact suivant déclenche une agglutination brutale. C'est pourquoi un receveur Rh− ne doit jamais recevoir de sang Rh+.
:::

:::erreur Attention : deux systèmes indépendants
Dire « le groupe O est rhésus négatif » est faux. Le système ABO et le facteur rhésus se déterminent **séparément** : on écrit par exemple « A Rh+ » ou « O Rh− ». Le groupe sanguin complet comporte toujours les deux informations.
:::

## Les règles de compatibilité des transfusions

Lors d'une transfusion, on recherche du sang qui ne contient **aucun antigène** contre lequel le receveur possède des anticorps : le sang du donneur ne doit jamais agglutiner dans le plasma du receveur.

:::formule Règle de compatibilité
$$
\text{antigènes du donneur} \cap \text{anticorps du receveur} = \varnothing
$$

Aucun antigène du donneur ne doit rencontrer d'anticorps chez le receveur.
:::

:::formule Tableau de compatibilité ABO
| Receveur \ Donneur | A | B | AB | O |
| --- | --- | --- | --- | --- |
| A | oui | non | non | oui |
| B | non | oui | non | oui |
| AB | non | non | oui | oui |
| O | non | non | non | oui |
:::

- **Donneur universel** : le groupe **O**, car ses hématies ne portent aucun antigène.
- **Receveur universel** : le groupe **AB**, car son plasma ne contient aucun anticorps.

:::methode Tester une compatibilité
1. Lire les **anticorps** du receveur (il les a contre les antigènes qu'il ne porte pas).
2. Lire les **antigènes** du donneur sur ses hématies.
3. S'il y a correspondance (anti-A du receveur contre antigène A du donneur, ou anti-B contre antigène B), la transfusion est **interdite**.
4. Vérifier ensuite le rhésus : un receveur Rh− ne reçoit jamais de sang Rh+.
:::

:::exemple Appliquons la règle
Un receveur du groupe **B** possède des anticorps **anti-A**. On lui propose du sang de groupe **A**, qui porte l'antigène A. L'anti-A du receveur reconnaît l'antigène A du donneur → **agglutination** → transfusion **incompatible**.

Le même receveur B peut recevoir du sang **B** (aucun antigène étranger) ou du sang **O** (aucun antigène) : la transfusion est possible.
:::

:::piege Ne pas confondre donneur et receveur
Le groupe **O** est donneur universel parce que ses hématies sont acceptées de tous ; le groupe **AB** est receveur universel parce que son plasma ne contient aucun anticorps. L'erreur classique est d'inverser les deux rôles.
:::

## La transfusion au Sénégal

Au Sénégal, le sang recueilli par le **Centre de transfusion sanguine de Dakar (CTS)** et ses antennes fait l'objet d'un dépistage complet avant toute transfusion.

:::remarque Le parcours du don du sang
1. Le donneur est **examiné** (poids, tension, hémoglobine) et remplit un questionnaire de sélection.
2. Une goutte de sang permet de déterminer son **groupe ABO et son facteur rhésus**.
3. Le sang est testé contre le **VIH**, les **hépatites B et C**, la **syphilis** et le **paludisme**.
4. Le sang est séparé en éléments (concentré d'hématies, plasma, plaquettes) puis stocké.
5. Il n'est transfusé qu'**après vérification de la compatibilité** avec le receveur.
:::

Les **campagnes de don de sang**, organisées dans les lycées, les universités et les entreprises, permettent de constituer des réserves. Le don est **gratuit, anonyme et sans danger** : le matériel est à usage unique, le donneur ne risque aucune infection.

:::exemple Un cas type au centre de santé
Un patient du groupe O Rh− doit être opéré. Le laboratoire recherche impérativement des poches de **O Rh−** : le groupe O parce que son plasma contient anti-A et anti-B, le rhésus négatif parce qu'il ne doit jamais être sensibilisé par l'antigène D.
:::

:::erreur Les erreurs qui coûtent des points
1. Confondre **antigène** (à la surface de l'hématie) et **anticorps** (dans le plasma).
2. Oublier que le groupe O est donneur universel et le groupe AB receveur universel.
3. Négliger le facteur rhésus : un receveur Rh− ne reçoit jamais de sang Rh+.
4. Conclure un test d'agglutination sans vérifier la goutte témoin.
:::

## Ce qu'il faut retenir

- Les antigènes A et B des hématies et les anticorps anti-A et anti-B du plasma définissent les **quatre groupes ABO** : A, B, AB et O.
- Un individu ne porte **jamais** d'anticorps contre les antigènes qu'il possède.
- Le **facteur rhésus** (antigène D), s'ajoute au groupe ABO : on est Rh+ ou Rh−.
- La transfusion est compatible si **aucun antigène du donneur ne rencontre d'anticorps du receveur**.
- Donneur universel : **O** ; receveur universel : **AB** ; un receveur Rh− ne reçoit jamais de sang Rh+.
- Au Sénégal, le sang est groupé et dépisté (VIH, hépatites, syphilis, paludisme) avant transfusion ; le don est gratuit, anonyme et sans danger.
