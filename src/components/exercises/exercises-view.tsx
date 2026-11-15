"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ListChecks, RotateCcw, Search, SlidersHorizontal } from "lucide-react";

import { ExerciseCard } from "@/components/chapter/exercise-card";
import { useContent } from "@/components/providers/content-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { PageHeader } from "@/components/shell/app-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge, Chip, EmptyState } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { chapitreHref } from "@/lib/routes";
import { MATIERES_META, ORDRE_MATIERES, matieresDuNiveau } from "@/lib/subjects";
import { cn } from "@/lib/utils";
import {
  DIFFICULTES,
  EXERCICE_TYPES,
  MATIERES,
  type Difficulte,
  type ExerciceType,
  type MatiereId,
} from "@/lib/types";

function parseMatiere(value?: string): MatiereId | "toutes" {
  return (MATIERES as readonly string[]).includes(value ?? "")
    ? (value as MatiereId)
    : "toutes";
}

function parseDifficulte(value?: string): Difficulte | "toutes" {
  const parsed = Number(value);
  return (DIFFICULTES as readonly number[]).includes(parsed)
    ? (parsed as Difficulte)
    : "toutes";
}

function parseType(value?: string): ExerciceType | "tous" {
  return (EXERCICE_TYPES as readonly string[]).includes(value ?? "")
    ? (value as ExerciceType)
    : "tous";
}

export function ExercisesView({
  initialMatiere,
  initialChapitre,
  initialDifficulte,
  initialType,
  initialQuery,
}: {
  initialMatiere?: string;
  initialChapitre?: string;
  initialDifficulte?: string;
  initialType?: string;
  initialQuery?: string;
}) {
  const { profile } = useProfile();
  const { exercicesPourProfil, chapitresProfil, getChapitre } = useContent();

  const [matiere, setMatiere] = useState<MatiereId | "toutes">(
    parseMatiere(initialMatiere),
  );
  const [chapitreId, setChapitreId] = useState(initialChapitre ?? "");
  const [difficulte, setDifficulte] = useState<Difficulte | "toutes">(
    parseDifficulte(initialDifficulte),
  );
  const [type, setType] = useState<ExerciceType | "tous">(parseType(initialType));
  const [query, setQuery] = useState(initialQuery ?? "");

  const chapitres = useMemo(
    () => (profile ? chapitresProfil(profile).filter((item) => item.exerciceCount > 0) : []),
    [chapitresProfil, profile],
  );

  const matieres = useMemo(
    () => (profile ? matieresDuNiveau(profile.niveau) : ORDRE_MATIERES),
    [profile],
  );

  const chapitresFiltres = useMemo(
    () =>
      chapitres.filter((chapitre) => matiere === "toutes" || chapitre.matiere === matiere),
    [chapitres, matiere],
  );

  const exercices = useMemo(() => {
    if (!profile) return [];
    const needle = query.trim().toLowerCase();
    return exercicesPourProfil(profile)
      .filter((exercice) => {
        if (matiere !== "toutes" && exercice.matiere !== matiere) return false;
        if (chapitreId && exercice.chapitreId !== chapitreId) return false;
        if (difficulte !== "toutes" && exercice.difficulte !== difficulte) return false;
        if (type !== "tous" && exercice.type !== type) return false;
        if (!needle) return true;
        return `${exercice.titre} ${exercice.enonce}`.toLowerCase().includes(needle);
      })
      .sort((a, b) => {
        if (a.difficulte !== b.difficulte) return a.difficulte - b.difficulte;
        return a.titre.localeCompare(b.titre, "fr");
      });
  }, [
    profile,
    exercicesPourProfil,
    matiere,
    chapitreId,
    difficulte,
    type,
    query,
  ]);

  const filtresActifs =
    matiere !== "toutes" ||
    Boolean(chapitreId) ||
    difficulte !== "toutes" ||
    type !== "tous" ||
    Boolean(query.trim());

  const reinitialiser = () => {
    setMatiere("toutes");
    setChapitreId("");
    setDifficulte("toutes");
    setType("tous");
    setQuery("");
  };

  const chapitreSelectionne = chapitres.find((chapitre) => chapitre.id === chapitreId);

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow={
          profile
            ? `${fr.niveaux[profile.niveau]}${profile.serie ? ` · ${profile.serie}` : ""}`
            : undefined
        }
        title={fr.exercices.title}
        description={fr.exercices.subtitle}
        breadcrumb={[
          { label: fr.nav.tableau, href: "/tableau-de-bord" },
          { label: fr.nav.exercices },
        ]}
        actions={
          <Badge tone="accent">
            {fr.exercices.count.replace("{n}", String(exercices.length))}
          </Badge>
        }
      />

      <GlassCard className="p-4">
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          <SlidersHorizontal size={12} aria-hidden="true" />
          {fr.exercices.filtres}
          {filtresActifs && (
            <button
              type="button"
              onClick={reinitialiser}
              className="ml-auto inline-flex items-center gap-1 text-[0.66rem] font-normal normal-case tracking-normal text-[var(--accent)]"
            >
              <RotateCcw size={11} aria-hidden="true" />
              {fr.exercices.reinitialiserFiltres}
            </button>
          )}
        </div>

        <div className="relative mt-3">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={fr.exercices.recherche}
            aria-label={fr.exercices.recherche}
            className="input pl-9"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip active={matiere === "toutes"} onClick={() => {
            setMatiere("toutes");
            setChapitreId("");
          }}>
            {fr.matieres.toutes}
          </Chip>
          {matieres.map((id) => (
            <Chip
              key={id}
              active={matiere === id}
              onClick={() => {
                setMatiere(id);
                setChapitreId("");
              }}
            >
              {MATIERES_META[id].short}
            </Chip>
          ))}
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1 block text-[0.66rem] text-ink-muted">
              {fr.exercices.filtreChapitre}
            </span>
            <select
              value={chapitreId}
              onChange={(event) => setChapitreId(event.target.value)}
              className="input py-1.5 text-[0.78rem]"
            >
              <option value="">{fr.exercices.tousChapitres}</option>
              {chapitresFiltres.map((chapitre) => (
                <option key={chapitre.id} value={chapitre.id}>
                  {chapitre.titre}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.66rem] text-ink-muted">
              {fr.exercices.filtreDifficulte}
            </span>
            <select
              value={String(difficulte)}
              onChange={(event) =>
                setDifficulte(parseDifficulte(event.target.value))
              }
              className="input py-1.5 text-[0.78rem]"
            >
              <option value="toutes">{fr.exercices.toutesDifficultes}</option>
              {DIFFICULTES.map((niveau) => (
                <option key={niveau} value={niveau}>
                  {fr.difficultes[niveau]}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.66rem] text-ink-muted">
              {fr.exercices.filtreType}
            </span>
            <select
              value={type}
              onChange={(event) => setType(parseType(event.target.value))}
              className="input py-1.5 text-[0.78rem]"
            >
              <option value="tous">{fr.exercices.tousTypes}</option>
              {EXERCICE_TYPES.map((option) => (
                <option key={option} value={option}>
                  {fr.typesExercice[option]}
                </option>
              ))}
            </select>
          </label>
        </div>

        {chapitreSelectionne && (
          <p className="mt-3 flex flex-wrap items-center gap-1.5 text-[0.7rem] text-ink-muted">
            {fr.commun.chapitre} :
            <Link
              href={chapitreHref(chapitreSelectionne)}
              className="text-[var(--accent)] hover:underline"
            >
              {chapitreSelectionne.titre}
            </Link>
          </p>
        )}
      </GlassCard>

      <p className="text-[0.74rem] text-ink-muted">
        {fr.exercices.resultats.replace("{n}", String(exercices.length))}
      </p>

      {exercices.length === 0 ? (
        <EmptyState
          icon={<ListChecks size={20} aria-hidden="true" />}
          title={fr.exercices.empty}
          description={fr.commun.introuvableTexte}
          action={
            <button
              type="button"
              onClick={reinitialiser}
              className="text-[0.78rem] text-[var(--accent)]"
            >
              {fr.exercices.reinitialiserFiltres}
            </button>
          }
        />
      ) : (
        <div className="space-y-3">
          {exercices.map((exercice, index) => (
            <div key={exercice.id} className="space-y-1.5">
              <Link
                href={`${chapitreHref({
                  niveau: exercice.niveau,
                  matiere: exercice.matiere,
                  slug: exercice.chapitreSlug,
                })}?onglet=exercices`}
                className="inline-flex items-center gap-1 text-[0.68rem] text-ink-muted transition-colors hover:text-ink"
              >
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                {getChapitre(exercice.chapitreId)?.titre ?? exercice.chapitreSlug}
              </Link>
              <ExerciseCard
                exercice={exercice}
                index={index}
                chapitreTitre={getChapitre(exercice.chapitreId)?.titre}
              />
            </div>
          ))}
        </div>
      )}

      <p className={cn("text-[0.68rem] text-ink-muted")}>
        {fr.exercices.astuce} · {fr.app.demoNotice}
      </p>
    </div>
  );
}
