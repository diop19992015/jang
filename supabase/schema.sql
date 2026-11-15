-- ===========================================================================
-- Jàng — schéma Supabase (optionnel)
--
-- L'application démarre sans base de données : les contenus sont lus dans
-- `src/content/` (Markdown + frontmatter). Ce schéma prépare la migration
-- vers une base Postgres hébergée (Supabase) sans changer l'interface
-- publique de `src/lib/content/loader.ts`.
--
-- Ordre d'exécution : extensions → types → tables → index → triggers → RLS.
-- ===========================================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Types
-- ---------------------------------------------------------------------------

do $$
begin
  create type niveau as enum ('3eme', 'seconde', 'premiere', 'terminale');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type matiere as enum (
    'maths', 'pc', 'svt', 'francais', 'histoire',
    'geographie', 'anglais', 'philosophie', 'economie'
  );
exception when duplicate_object then null;
end $$;

do $$
begin
  create type serie as enum ('L', 'S1', 'S2', 'S3', 'S4', 'S5');
exception when duplicate_object then null;
end $$;

-- Bases déjà créées avec l'ancien périmètre (3 matières, séries S1/S2).
do $$
declare
  valeur text;
begin
  foreach valeur in array array[
    'francais', 'histoire', 'geographie', 'anglais', 'philosophie', 'economie'
  ] loop
    execute format('alter type matiere add value if not exists %L', valeur);
  end loop;
  foreach valeur in array array['L', 'S3', 'S4', 'S5'] loop
    execute format('alter type serie add value if not exists %L', valeur);
  end loop;
end $$;

do $$
begin
  create type difficulte as enum ('1', '2', '3');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type exercice_type as enum ('entrainement', 'bac', 'bfem');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type statut_chapitre as enum ('a-faire', 'en-cours', 'maitrise');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type note_couleur as enum ('neutre', 'indigo', 'ambre', 'emeraude');
exception when duplicate_object then null;
end $$;

-- ---------------------------------------------------------------------------
-- Profils (un élève = un utilisateur Supabase)
-- ---------------------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  prenom text not null default '',
  niveau niveau not null default 'terminale',
  serie serie,
  date_examen date,
  examen text check (examen in ('BAC', 'BFEM')),
  objectif text,
  role text not null default 'eleve' check (role in ('eleve', 'auteur', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Contenus
-- ---------------------------------------------------------------------------

create table if not exists public.chapters (
  id uuid primary key default gen_random_uuid(),
  niveau niveau not null,
  matiere matiere not null,
  slug text not null check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  titre text not null,
  accroche text not null default '',
  series serie[] not null default '{}',
  ordre integer not null default 99,
  duree integer not null default 30,
  coefficient numeric(4, 2) not null default 1,
  objectifs text[] not null default '{}',
  prerequis text[] not null default '{}',
  demo boolean not null default false,
  -- Chapitre du programme officiel dont le contenu reste à rédiger.
  en_preparation boolean not null default false,
  publie boolean not null default true,
  resume text not null default '',
  cours text not null default '',
  formules text not null default '',
  -- Auteur de la dernière modification (facultatif en démo).
  auteur_id uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (niveau, matiere, slug)
);

-- Bases déjà créées avant l'ajout du statut « en préparation ».
alter table public.chapters
  add column if not exists en_preparation boolean not null default false;

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters (id) on delete cascade,
  slug text not null check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  titre text not null,
  enonce text not null,
  solution text not null default '',
  indices text[] not null default '{}',
  difficulte integer not null default 2 check (difficulte between 1 and 3),
  type exercice_type not null default 'entrainement',
  annee integer,
  demo boolean not null default false,
  ordre integer not null default 99,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (chapter_id, slug)
);

create table if not exists public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters (id) on delete cascade,
  enonce text not null,
  options text[] not null check (array_length(options, 1) >= 2),
  bonne_reponse integer not null check (bonne_reponse >= 0),
  explication text not null default '',
  ordre integer not null default 0,
  created_at timestamptz not null default now()
);

-- Journal des modifications : permet de revenir à une version antérieure.
create table if not exists public.content_revisions (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters (id) on delete cascade,
  fichier text not null,
  contenu text not null,
  auteur_id uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Données personnelles de l'élève
-- ---------------------------------------------------------------------------

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  titre text not null default '',
  contenu text not null default '',
  etiquettes text[] not null default '{}',
  chapter_id uuid references public.chapters (id) on delete set null,
  couleur note_couleur not null default 'neutre',
  epinglee boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.progress (
  user_id uuid not null references public.profiles (id) on delete cascade,
  chapter_id uuid not null references public.chapters (id) on delete cascade,
  statut statut_chapitre not null default 'a-faire',
  derniere_visite timestamptz,
  quiz_score integer check (quiz_score between 0 and 100),
  quiz_total integer,
  reviser boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, chapter_id)
);

create table if not exists public.study_days (
  user_id uuid not null references public.profiles (id) on delete cascade,
  jour date not null,
  minutes integer not null default 0,
  primary key (user_id, jour)
);

create table if not exists public.ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  chapter_id uuid references public.chapters (id) on delete set null,
  titre text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.ai_conversations (id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  contenu text not null,
  mode text,
  demo boolean not null default false,
  created_at timestamptz not null default now()
);

-- Quota IA journalier (compteur serveur, pas de contenu personnel).
create table if not exists public.ai_usage (
  user_id uuid not null references public.profiles (id) on delete cascade,
  jour date not null default current_date,
  messages integer not null default 0,
  primary key (user_id, jour)
);

-- Mesures agrégées anonymes (aucune donnée personnelle).
create table if not exists public.analytics_events (
  id bigint generated always as identity primary key,
  nom text not null,
  matiere matiere,
  niveau niveau,
  chapter_slug text,
  cree_le timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Index
-- ---------------------------------------------------------------------------

create index if not exists chapters_lookup_idx
  on public.chapters (niveau, matiere, ordre);
create index if not exists chapters_publie_idx
  on public.chapters (publie) where publie;
create index if not exists exercises_chapter_idx
  on public.exercises (chapter_id, ordre);
create index if not exists exercises_filtre_idx
  on public.exercises (difficulte, type);
create index if not exists quiz_chapter_idx
  on public.quiz_questions (chapter_id, ordre);
create index if not exists notes_user_idx
  on public.notes (user_id, updated_at desc);
create index if not exists notes_recherche_idx
  on public.notes using gin (to_tsvector('french', titre || ' ' || contenu));
create index if not exists progress_user_idx
  on public.progress (user_id, updated_at desc);
create index if not exists analytics_nom_idx
  on public.analytics_events (nom, cree_le desc);

-- ---------------------------------------------------------------------------
-- Triggers
-- ---------------------------------------------------------------------------

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists chapters_touch on public.chapters;
create trigger chapters_touch
  before update on public.chapters
  for each row execute function public.touch_updated_at();

drop trigger if exists exercises_touch on public.exercises;
create trigger exercises_touch
  before update on public.exercises
  for each row execute function public.touch_updated_at();

drop trigger if exists notes_touch on public.notes;
create trigger notes_touch
  before update on public.notes
  for each row execute function public.touch_updated_at();

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch
  before update on public.profiles
  for each row execute function public.touch_updated_at();

drop trigger if exists ai_conversations_touch on public.ai_conversations;
create trigger ai_conversations_touch
  before update on public.ai_conversations
  for each row execute function public.touch_updated_at();

-- Crée automatiquement un profil à l'inscription.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, prenom)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'prenom', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.chapters enable row level security;
alter table public.exercises enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.content_revisions enable row level security;
alter table public.notes enable row level security;
alter table public.progress enable row level security;
alter table public.study_days enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.ai_messages enable row level security;
alter table public.ai_usage enable row level security;
alter table public.analytics_events enable row level security;

-- Profil : chacun lit et met à jour le sien.
drop policy if exists "profil lecture" on public.profiles;
create policy "profil lecture" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profil mise a jour" on public.profiles;
create policy "profil mise a jour" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Contenus publiés : lecture publique.
drop policy if exists "chapitres publics" on public.chapters;
create policy "chapitres publics" on public.chapters
  for select using (publie);

drop policy if exists "exercices publics" on public.exercises;
create policy "exercices publics" on public.exercises
  for select using (
    exists (
      select 1 from public.chapters c
      where c.id = chapter_id and c.publie
    )
  );

drop policy if exists "quiz publics" on public.quiz_questions;
create policy "quiz publics" on public.quiz_questions
  for select using (
    exists (
      select 1 from public.chapters c
      where c.id = chapter_id and c.publie
    )
  );

-- Auteurs : écriture sur les contenus.
drop policy if exists "auteurs ecriture chapitres" on public.chapters;
create policy "auteurs ecriture chapitres" on public.chapters
  for all using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  );

drop policy if exists "auteurs ecriture exercices" on public.exercises;
create policy "auteurs ecriture exercices" on public.exercises
  for all using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  );

drop policy if exists "auteurs ecriture quiz" on public.quiz_questions;
create policy "auteurs ecriture quiz" on public.quiz_questions
  for all using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  );

-- Données personnelles : strictement cloisonnées par utilisateur.
do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'notes', 'progress', 'study_days', 'ai_conversations', 'ai_usage'
  ]
  loop
    execute format('drop policy if exists "%s proprietaire" on public.%I', table_name, table_name);
    execute format(
      'create policy "%s proprietaire" on public.%I for all using (auth.uid() = user_id) with check (auth.uid() = user_id)',
      table_name,
      table_name
    );
  end loop;
end $$;

drop policy if exists "ai messages proprietaire" on public.ai_messages;
create policy "ai messages proprietaire" on public.ai_messages
  for all using (
    exists (
      select 1 from public.ai_conversations c
      where c.id = conversation_id and c.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.ai_conversations c
      where c.id = conversation_id and c.user_id = auth.uid()
    )
  );

drop policy if exists "revisions auteurs" on public.content_revisions;
create policy "revisions auteurs" on public.content_revisions
  for all using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('auteur', 'admin')
    )
  );

-- Événements anonymes : insertion seule, aucune lecture côté client.
drop policy if exists "analytics insertion" on public.analytics_events;
create policy "analytics insertion" on public.analytics_events
  for insert with check (true);

-- ---------------------------------------------------------------------------
-- Vue de lecture agrégée (facultative)
-- ---------------------------------------------------------------------------

create or replace view public.chapters_publics
with (security_invoker = true)
as
select
  c.id,
  c.niveau,
  c.matiere,
  c.slug,
  c.titre,
  c.accroche,
  c.series,
  c.ordre,
  c.duree,
  c.coefficient,
  c.objectifs,
  c.prerequis,
  c.demo,
  c.en_preparation,
  c.updated_at,
  (select count(*) from public.exercises e where e.chapter_id = c.id) as exercices,
  (select count(*) from public.quiz_questions q where q.chapter_id = c.id) as questions
from public.chapters c
where c.publie;

comment on view public.chapters_publics is
  'Vue de lecture utilisée par l''application une fois Supabase branché.';
