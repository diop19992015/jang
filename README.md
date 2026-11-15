# Jàng — Réviser, réussir le BAC et le BFEM

Application web de révision pour les élèves du Sénégal. Contenus du programme
(Mathématiques, Physique-Chimie, SVT), fiches imprimables, exercices corrigés,
quiz, assistant IA et bloc-notes — pensés d'abord pour le téléphone.

> **DÉMO** : les chapitres livrés sont des contenus de démonstration, rédigés
> pour tester l'application. Ils sont signalés « DÉMO » dans l'interface et
> peuvent être remplacés depuis l'espace auteur.

---

## Sommaire

1. [Démarrage rapide](#démarrage-rapide)
2. [Variables d'environnement](#variables-denvironnement)
3. [Espace auteur](#espace-auteur)
4. [Structure du projet](#structure-du-projet)
5. [Écrire un chapitre](#écrire-un-chapitre)
6. [Format des fichiers](#format-des-fichiers)
7. [Base de données Supabase](#base-de-données-supabase-optionnel)
8. [Déploiement](#déploiement)
9. [Choix techniques](#choix-techniques)
10. [Accessibilité et performance](#accessibilité-et-performance)
11. [Confidentialité](#confidentialité)
12. [Internationalisation](#internationalisation)
13. [Scripts](#scripts)

---

## Démarrage rapide

Prérequis : **Node.js 20.9 ou plus** (Next.js 16), npm.

```bash
# 1. Installer les dépendances
npm install

# 2. Créer le fichier d'environnement
cp .env.example .env.local     # Windows : copy .env.example .env.local

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrir <http://localhost:3000>. Aucune clé n'est nécessaire : l'IA répond en
mode `mock` et les contenus viennent des fichiers Markdown.

```bash
npm run build     # build de production
npm run start     # serveur de production
npm run content:check   # valide les fichiers de src/content
```

---

## Variables d'environnement

Copier `.env.example` en `.env.local`. Toutes les variables sont optionnelles
en développement.

| Variable | Rôle | Défaut |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (métadonnées, Open Graph) | `http://localhost:3000` |
| `NEXT_PUBLIC_APP_NAME` | Nom affiché | `Jàng` |
| `AI_PROVIDER` | `gemini` ou `mock` | `mock` |
| `GEMINI_API_KEY` | Clé Gemini — **serveur uniquement** | vide |
| `GEMINI_MODEL` | Modèle complet (corrections, explications) | `gemini-3.5-flash` |
| `GEMINI_MODEL_LITE` | Modèle léger (questions courtes) | `gemini-3.5-flash-lite` |
| `AI_DAILY_LIMIT` | Messages IA par élève et par jour | `30` |
| `AI_SESSION_SECRET` | Secret HMAC de la session élève anonyme (32+ caractères) | `ADMIN_SECRET`, sinon valeur de démo |
| `AI_FEEDBACK_DIR` | Dossier des votes JSONL | `.data/` |
| `ADMIN_EMAIL` | Compte auteur | `auteur@jang.sn` |
| `ADMIN_PASSWORD` | Mot de passe auteur | `jang-demo-2026` |
| `ADMIN_SECRET` | Secret HMAC du cookie de session (32+ caractères) | valeur de démo |
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase | vide |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé publique Supabase | vide |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé serveur Supabase | vide |

> **Sécurité** : ne préfixez jamais une clé secrète par `NEXT_PUBLIC_`.
> `GEMINI_API_KEY`, `AI_SESSION_SECRET`, `ADMIN_PASSWORD`, `ADMIN_SECRET` et
> `SUPABASE_SERVICE_ROLE_KEY` ne sont lus que côté serveur.

### Assistant IA (Gemini ou démonstration)

L'assistant est branché sur une route serveur unique :
`POST /api/ai/chat`. Le navigateur ne connaît ni la clé ni le fournisseur ; il
reçoit un flux `text/plain` et lit les en-têtes `x-ai-provider`,
`x-ai-quality` et `x-ai-remaining`.

```bash
# Démonstration locale : aucune clé, aucune requête réseau.
AI_PROVIDER=mock

# Gemini : la clé reste dans .env.local, jamais dans le code client.
AI_PROVIDER=gemini
GEMINI_API_KEY=...
GEMINI_MODEL=gemini-3.5-flash
GEMINI_MODEL_LITE=gemini-3.5-flash-lite
AI_DAILY_LIMIT=30
```

**Architecture interchangeable.** `src/lib/ai/provider.ts` définit l'interface
`AiProvider` (flux à partir d'une instruction système, de messages, d'images et
de paramètres). `GeminiProvider` est la seule implémentation qui cite Gemini,
le SDK `@google/genai` et ses modèles. `src/lib/ai/index.ts` choisit le
fournisseur : Gemini si `AI_PROVIDER=gemini` **et** `GEMINI_API_KEY` existe,
sinon la démonstration locale. Pour ajouter un autre fournisseur, écrire une
nouvelle classe qui implémente `AiProvider` et l'ajouter dans `resolveProvider`.

**Requêtes.** Le corps est validé par Zod (`src/lib/ai/schema.ts`) : `mode`,
`message` (2 000 caractères au plus), `images` (3 au plus, JPEG/PNG/WebP,
compressées à 1 600 px côté navigateur), `chapitreId`, `conversationId`,
`hintOnly`, `history` (20 messages au plus, soit 10 échanges) et un contexte
minimal. Le serveur reconstruit le contexte scolaire depuis le chapitre et
n'envoie au modèle qu'un extrait de cours de 4 000 caractères au plus. Aucun
nom, e-mail ou identifiant personnel n'est transmis.

**Session anonyme.** Les élèves n'ont pas encore de compte : `GET
/api/ai/session` délivre un cookie `jang_eleve` signé HMAC-SHA256 (UUID
aléatoire + expiration à 180 jours, `httpOnly`, `SameSite=Lax`, `Secure` en
production). La route refuse toute requête sans session. C'est le point de
branchement prévu pour remplacer ce cookie par la session Supabase.

**Limites.** `AI_DAILY_LIMIT` messages par élève et par jour (30 par défaut),
une requête en cours à la fois par élève, 2 000 caractères par message. En cas
de surcharge Google (429/503), deux nouvelles tentatives avec une attente
croissante, puis « L'assistant est très sollicité, réessaie dans quelques
minutes ». Les compteurs sont en mémoire par instance (`src/lib/ai/limiter.ts`) :
en production multi-instances, les remplacer par Redis ou une table Supabase,
sans changer l'interface `Limiter`.

**Sécurité et journaux.** Les filtres sont explicites (`harassment`,
`hate_speech`, `sexually_explicit`, `dangerous_content`, `jailbreak` en
`block_medium_and_above`) dans `GeminiProvider`. Un blocage (`safety`,
`jailbreak`, `prohibited_content`, `blocklist`) affiche une invitation à
reformuler. Les journaux ne contiennent que l'identifiant anonymisé, le mode, la
durée, les jetons et le code d'erreur — jamais le texte ni les images. Les votes
sont stockés dans `.data/ai-feedback.jsonl` (vote et mode uniquement) ; le
dossier est ignoré par Git.

**Tests.**

```bash
npm run test:ai    # tests unitaires avec un faux fournisseur, sans appel Gemini
npm run ai:smoke   # 10 exercices (3 maths, 3 PC, 2 SVT, 2 photos), serveur lancé
```

Le script d'essai ouvre une session, envoie les dix cas et affiche les réponses
pour un contrôle humain. Pour les deux photos, fournir des fichiers :

```bash
AI_SMOKE_PHOTO_1=./exemples/maths.jpg \
AI_SMOKE_PHOTO_2=./exemples/pc.png \
npm run ai:smoke
```

Sans photo, un PNG minuscule est utilisé : le transport des images est testé,
mais la réponse ne peut pas corriger un exercice.

> **Déploiement.** Sur Vercel, le système de fichiers est en lecture seule :
> l'éditeur de contenus et l'écriture des votes ne fonctionnent qu'en Docker ou
> avec un stockage externe (Supabase). Le compteur en mémoire est également
> remis à zéro à chaque instance froide.


---

## Espace auteur

| URL | Rôle |
| --- | --- |
| `/admin/login` | Connexion |
| `/admin` | Tableau de bord et statistiques de contenu |
| `/admin/contenu` | Liste, recherche et création de chapitres |
| `/admin/contenu/<niveau>/<matiere>/<slug>` | Éditeur Markdown avec aperçu direct |
| `/admin/import` | Import en lot de fichiers `.md` |

**Compte de démonstration** : `auteur@jang.sn` / `jang-demo-2026`
(modifiable via `ADMIN_EMAIL` / `ADMIN_PASSWORD`).

L'accès est protégé par `src/proxy.ts` (Proxy Next.js 16, runtime Node.js) et
chaque Server Action revérifie la session : un cookie signé HMAC-SHA256, valable
8 heures, `httpOnly` et `SameSite=Lax`.

**Écriture sur le disque.** En développement, l'éditeur écrit directement dans
`src/content/`. Sur Vercel, le système de fichiers est en lecture seule : les
enregistrements échouent proprement avec un message explicite. Pour publier
depuis le navigateur en production, deux options :

1. brancher Supabase (voir plus bas) ;
2. déployer en conteneur (Docker) avec un volume inscriptible monté sur
   `src/content`.

---

## Structure du projet

```text
src/
├─ app/
│  ├─ (app)/                 # Pages avec barre latérale et navigation
│  │  ├─ tableau-de-bord/
│  │  ├─ cours/
│  │  ├─ resumes/
│  │  ├─ exercices/
│  │  ├─ notes/
│  │  ├─ reglages/
│  │  ├─ matiere/[niveau]/[matiere]/
│  │  └─ chapitre/[niveau]/[matiere]/[slug]/
│  ├─ admin/                 # Espace auteur (hors shell élève)
│  ├─ api/ai/                # chat (flux), session anonyme, feedback
│  ├─ resumes/…/[slug]/      # Fiche imprimable (pleine page)
│  ├─ commencer/             # Premier lancement
│  ├─ layout.tsx             # Polices, providers, thème
│  ├─ manifest.ts            # Manifeste PWA
│  └─ globals.css            # Design system
├─ components/
│  ├─ ai/ notes/ chapter/   # Panneaux et vues
│  ├─ admin/                 # Éditeur, import, connexion
│  ├─ effects/               # Reveal, compteurs, Lenis
│  ├─ markdown/              # Rendu + encadrés pédagogiques
│  ├─ providers/             # Profil, progression, notes, réglages…
│  ├─ shell/                 # Barre latérale, en-tête, navigation mobile
│  └─ ui/                    # Boutons, verre dépoli, modales, toasts
├─ content/                  # Contenus Markdown (voir ci-dessous)
├─ lib/
│  ├─ admin/                 # Auth, jeton, accès fichiers
│  ├─ ai/                    # Fournisseur, schéma, limites, prompt système
│  ├─ content/               # Loader et frontmatter
│  ├─ i18n/fr.ts             # Tous les textes de l'interface
│  ├─ markdown/              # Découpage des sections et encadrés
│  └─ types.ts               # Modèle de données
├─ proxy.ts                  # Protection de /admin
└─ public/
   ├─ sw.js                  # Service worker (hors ligne)
   └─ icon.svg
supabase/schema.sql          # Schéma Postgres + RLS (optionnel)
scripts/check-content.mjs    # Validation des contenus
scripts/ai-smoke.mjs         # Essai manuel des 10 exercices types
```

---

## Écrire un chapitre

Un chapitre = un dossier dans `src/content` :

```text
src/content/<niveau>/<matiere>/<slug>/
├─ chapitre.md                     # métadonnées (frontmatter uniquement)
├─ resume.md                       # fiche de révision
├─ cours.md                        # cours complet
├─ formules.md                     # formulaire
├─ quiz.md                         # questions à choix multiples
└─ exercices/
   ├─ 01-premier-exercice.md
   └─ 02-sujet-bac.md
```

- `niveau` : `3eme`, `seconde`, `premiere`, `terminale`
- `matiere` : `maths`, `pc`, `svt`
- `slug` : minuscules, chiffres et tirets (`derivation`, `cinematique`…)

### Chapitres de démonstration livrés

| Niveau | Matière | Chapitre |
| --- | --- | --- |
| Terminale S1/S2 | Mathématiques | Dérivation |
| Terminale S1/S2 | Physique-Chimie | Cinématique du point matériel |
| Terminale S1/S2 | SVT | Génétique et transmission des caractères |
| 3ème | Mathématiques | Théorème de Thalès |
| 3ème | Physique-Chimie | Les combustions |
| 3ème | SVT | Digestion et absorption intestinale |

Chaque chapitre contient un résumé, un cours complet, un formulaire, un quiz de
3 questions et 2 exercices corrigés (dont un sujet type BAC ou BFEM).

---

## Format des fichiers

### `chapitre.md`

```markdown
---
titre: Dérivation
accroche: Nombre dérivé, tangente, dérivées usuelles et variations.
series: S1, S2
ordre: 1
duree: 50
coefficient: 3
demo: true
objectifs:
  - Calculer un nombre dérivé avec la définition.
prerequis:
  - Limites de fonctions.
---
```

`series` est ignoré pour la 3ème (pas de série au collège).

### `quiz.md`

```markdown
## Question

Quelle est la dérivée de $x^3$ ?

- [ ] $3x$
- [x] $3x^2$
- [ ] $x^2$

> On applique $(x^n)' = nx^{n-1}$.
```

Une seule case cochée `[x]` par question, et une explication après `>`.

### `exercices/*.md`

```markdown
---
titre: Tangente et variations
difficulte: 1          # 1 à 3
type: entrainement     # entrainement | bac | bfem
annee: 2024
demo: true
indices:
  - Commence par dériver terme à terme.
---

## Énoncé

…

## Solution

…
```

### Encadrés pédagogiques

Dans `resume.md` et `cours.md`, les blocs suivants sont mis en forme
automatiquement :

```markdown
:::formule Titre du bloc
Contenu Markdown, formules LaTeX autorisées.
:::
```

Directives disponibles : `formule`, `methode`, `exemple`, `remarque`, `erreur`,
`piege`, `definition`, `demo`.

Markdown pris en charge : **GFM** (tableaux, listes de tâches) et **LaTeX**
(`$…$` en ligne, `$$…$$` en bloc), avec `mhchem` pour la chimie
(`\ce{CH4 + 2O2 -> CO2 + 2H2O}`).

> Pour qu'une formule soit rendue en bloc, les délimiteurs `$$` doivent être
> seuls sur leur ligne :
>
> ```markdown
> $$
> f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}
> $$
> ```
>
> Écrire `$$…$$` sur une seule ligne produit une formule en ligne (minuscule).
> `npm run content:check` le signale.

---

## Base de données Supabase (optionnel)

L'application fonctionne sans base. `supabase/schema.sql` prépare une migration
sans changer l'interface de `src/lib/content/loader.ts`.

```bash
# 1. Créer un projet sur https://supabase.com
# 2. Coller supabase/schema.sql dans l'éditeur SQL
# 3. Renseigner les variables d'environnement
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Le schéma contient : profils, chapitres, exercices, questions de quiz, notes,
progression, conversations IA, quota et événements anonymes. **RLS est activé
partout** : chaque élève n'accède qu'à ses propres données, seuls les rôles
`auteur` et `admin` écrivent les contenus.

---

## Déploiement

### Vercel

1. Importer le dépôt dans Vercel.
2. Ajouter les variables d'environnement (`ADMIN_SECRET` **obligatoire**).
3. Déployer.

> L'éditeur auteur ne peut pas écrire sur le disque Vercel. Utilisez Supabase
> ou l'import de contenu avant le build.

### Docker

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src/content ./src/content
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Pour rendre l'éditeur inscriptible, montez un volume sur `/app/src/content`.

---

## Choix techniques

| Besoin | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, React 19) |
| Styles | Tailwind CSS v4 via `@tailwindcss/turbopack` |
| Animations | Motion + GSAP ScrollTrigger + Lenis |
| Formules | KaTeX, remark-math, rehype-katex, mhchem |
| Icônes | lucide-react |
| Contenus | Markdown + frontmatter, lus côté serveur |
| IA | Gemini via `@google/genai` (API Interactions, `store: false`), route serveur en streaming (`/api/ai/chat`), fournisseur interchangeable |
| Stockage élève | `localStorage` (profil, progression, notes, réglages) |
| PWA | `manifest.ts` + service worker `public/sw.js` |

Le profil est **local au navigateur** : aucune inscription n'est demandée. Un
« seam » de synchronisation est prévu pour brancher Supabase plus tard.

---

## Accessibilité et performance

- Contrastes conformes **WCAG AA** en thème sombre et clair.
- Navigation clavier complète : palette `Ctrl+K`, piège de focus dans les
  panneaux, fermeture par `Échap`, liens d'évitement.
- `prefers-reduced-motion` respecté ; réglage manuel des animations.
- **Mode léger** activé automatiquement sur les appareils modestes
  (`deviceMemory`, `saveData`, `effectiveType`) et désactivable à la main.
- Flou d'arrière-plan limité, images vectorielles, polices `next/font`.
- Cible : **360 px de large**, premier rendu utile **< 3 s en 4G**.
- Impression : feuille de style dédiée pour les fiches (fond blanc, pas de
  navigation, sauts de page maîtrisés).

---

## Confidentialité

- **Aucun compte requis** pour réviser.
- Aucune publicité, aucun traceur, aucun cookie analytique ou publicitaire. Un
  cookie technique `jang_eleve` (anonyme, signé, `httpOnly`) sert uniquement à
  limiter l'assistant IA par appareil.
- Les données d'apprentissage (progression, notes, réglages) restent dans le
  `localStorage` de l'appareil et sont exportables en JSON.
- L'adresse e-mail n'est demandée que si un compte est créé (Supabase).
- Les appels à l'IA envoient uniquement la question, les images d'exercice, le
  mode et le contexte pédagogique choisi — jamais le nom, l'e-mail ou
  l'identifiant de l'élève. Les images ne sont pas conservées après la réponse ;
  l'API est appelée en mode sans état (`store: false`). Les journaux ne gardent
  qu'un identifiant anonymisé, le mode, la durée, les jetons et le code d'erreur.
  Les votes (pouce haut/bas) n'enregistrent que le vote et le mode.

---

## Internationalisation

Tous les textes de l'interface sont centralisés dans `src/lib/i18n/fr.ts`.
Pour ajouter le wolof :

1. dupliquer le fichier en `wo.ts` ;
2. exposer le même objet depuis `src/lib/i18n/index.ts` ;
3. remplacer les imports `@/lib/i18n/fr` par le sélecteur de langue.

Les contenus pédagogiques sont en français avec le vocabulaire du programme
sénégalais.

---

## Scripts

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint |
| `npm run test:ai` | Tests de l'assistant avec un faux fournisseur |
| `npm run ai:smoke` | Envoie 10 exercices types à l'assistant (serveur lancé) |
| `npm run content:check` | Vérifie les contenus Markdown |

`content:check` contrôle : frontmatter, présence des fichiers obligatoires,
structure des quiz (une bonne réponse, explication), sections « Énoncé » et
« Solution » des exercices, et détecte les fichiers UTF-8 corrompus.

---

## Licence

Projet de démonstration — contenus pédagogiques à remplacer par les cours
officiels avant toute diffusion.
