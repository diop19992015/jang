"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Flame,
  NotebookPen,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { useMemo } from "react";

import { Counter } from "@/components/effects/reveal";
import { useContent } from "@/components/providers/content-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { useProgress } from "@/components/providers/progress-provider";
import { useUi } from "@/components/providers/ui-provider";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Badge, EmptyState, ProgressBar, Ring, Stat } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { chapitreHref, matiereHref } from "@/lib/routes";
import { MATIERES_META, ORDRE_MATIERES, matiereAccent } from "@/lib/subjects";
import { cn, daysUntil, formatRelative, truncate } from "@/lib/utils";

export function DashboardView() {
  const { profile } = useProfile();
  const { chapitresProfil, chapitres, exercicesPourProfil } = useContent();
  const { progress, streak, week, mastery, setStatut } = useProgress();
  const { notes, setActiveId } = useNotes();
  const { setNotesOpen, setAiOpen } = useUi();

  const chapitresDuProfil = useMemo(
    () => (profile ? chapitresProfil(profile) : []),
    [profile, chapitresProfil],
  );
  const exercices = useMemo(
    () => (profile ? exercicesPourProfil(profile) : []),
    [profile, exercicesPourProfil],
  );

  const restants = profile ? daysUntil(profile.dateExamen) : null;
  const global = mastery(chapitresDuProfil);

  const maitrises = chapitresDuProfil.filter(
    (chapitre) => progress.statuts[chapitre.id] === "maitrise",
  ).length;

  const prochain = useMemo(() => {
    const nonMaitrises = [...chapitresDuProfil]
      .filter((chapitre) => progress.statuts[chapitre.id] !== "maitrise")
      .sort((a, b) => {
        const aVisite = progress.visites[a.id] ? 1 : 0;
        const bVisite = progress.visites[b.id] ? 1 : 0;
        if (aVisite !== bVisite) return bVisite - aVisite;
        return a.ordre - b.ordre;
      });
    return nonMaitrises[0] ?? chapitresDuProfil[0] ?? null;
  }, [chapitresDuProfil, progress.statuts, progress.visites]);

  const notesRecentes = useMemo(
    () => [...notes].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 3),
    [notes],
  );

  const parMatiere = ORDRE_MATIERES.map((matiere) => {
    const liste = chapitresDuProfil.filter((chapitre) => chapitre.matiere === matiere);
    return {
      matiere,
      total: liste.length,
      valeur: mastery(liste),
      maitrises: liste.filter((chapitre) => progress.statuts[chapitre.id] === "maitrise").length,
    };
  }).filter((item) => item.total > 0);

  const matiereDuProchain = prochain ? chapitres.find((item) => item.id === prochain.id)?.matiere : null;

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {profile?.examen ?? "Révisions"} · {fr.niveaux[profile?.niveau ?? "terminale"]}
            {profile?.serie ? ` ${profile.serie}` : ""}
          </p>
          <h1 className="mt-1.5 font-display text-[clamp(1.6rem,1.2rem+1.8vw,2.3rem)] font-semibold leading-tight text-ink">
            {fr.tableau.bonjour}
            {profile?.prenom ? `, ${profile.prenom}` : ""} 👋
          </h1>
          <p className="mt-1 max-w-xl text-[0.88rem] text-ink-muted">{fr.tableau.sousTitre}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/cours" variant="ghost" size="sm">
            <BookOpen size={14} aria-hidden="true" />
            {fr.nav.cours}
          </ButtonLink>
          <ButtonLink href="/exercices" variant="ghost" size="sm">
            {fr.nav.exercices}
          </ButtonLink>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        {/* Compte à rebours + progression */}
        <GlassCard className="relative overflow-hidden p-5 sm:p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] opacity-50 blur-2xl" />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <CalendarDays size={12} aria-hidden="true" />
                {fr.tableau.compteRebours}
              </p>
              {restants === null ? (
                <p className="mt-2 max-w-[18rem] text-[0.84rem] leading-relaxed text-ink-soft">
                  {fr.tableau.sansDate}
                </p>
              ) : restants > 0 ? (
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-[3.2rem] font-semibold leading-none text-ink">
                    <Counter value={restants} />
                  </span>
                  <span className="text-[0.8rem] text-ink-muted">
                    {fr.tableau.joursRestants.replace("{examen}", profile?.examen ?? "examen")}
                  </span>
                </p>
              ) : (
                <p className="mt-2 font-display text-xl font-semibold text-[var(--accent)]">
                  {restants === 0 ? fr.tableau.jourJ : fr.tableau.examenPasse}
                </p>
              )}
            </div>
            <Ring value={global} size={86} stroke={6}>
              <span className="font-display text-lg font-semibold text-ink">{global}%</span>
            </Ring>
          </div>

          <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
            <Stat value={maitrises} label={fr.tableau.chapitresMaitrises} />
            <Stat value={chapitresDuProfil.length} label={fr.commun.chapitres} />
            <Stat value={exercices.length} label={fr.commun.exercices} />
          </div>

          {profile?.objectif && (
            <p className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-[var(--surface)] px-2.5 py-1 text-[0.68rem] text-ink-muted">
              <Target size={11} aria-hidden="true" />
              {fr.tableau.objectif} : {profile.objectif}
            </p>
          )}
        </GlassCard>

        {/* Série d'étude */}
        <GlassCard className="p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <Flame size={12} aria-hidden="true" />
                {fr.tableau.serieEtude}
              </p>
              <p className="mt-1.5 font-display text-2xl font-semibold text-ink">
                {streak > 0
                  ? (streak === 1
                      ? fr.tableau.serieEtudeJour
                      : fr.tableau.serieEtudeJours
                    ).replace("{n}", String(streak))
                  : fr.tableau.serieEtudeAucune}
              </p>
              <p className="mt-1 text-[0.74rem] text-ink-muted">{fr.tableau.serieEtudeTexte}</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
              <Flame size={19} aria-hidden="true" />
            </span>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1.5">
            {week.map((day) => (
              <div key={day.date} className="flex flex-col items-center gap-1">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg border text-[0.68rem] font-medium transition-colors",
                    day.active
                      ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
                      : "border-line bg-[var(--surface)] text-ink-muted",
                    day.today && "ring-1 ring-[var(--accent)]",
                  )}
                  title={day.date}
                >
                  {day.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
            {fr.tableau.activite}
          </p>
        </GlassCard>
      </div>

      {/* Prochain chapitre */}
      {prochain ? (
        <GlassCard
          className={cn("relative overflow-hidden p-5 sm:p-6", matiereDuProchain && matiereAccent(matiereDuProchain))}
          spotlight
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                <Sparkles size={12} aria-hidden="true" />
                {fr.tableau.prochain}
              </p>
              <h2 className="mt-1.5 font-display text-xl font-semibold text-ink">{prochain.titre}</h2>
              <p className="mt-1 max-w-xl text-[0.82rem] leading-relaxed text-ink-muted">
                {prochain.accroche || fr.tableau.prochainTexte}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge tone="accent">{fr.matieres[prochain.matiere]}</Badge>
                <Badge>{fr.chapitre.minutes.replace("{n}", String(prochain.duree))}</Badge>
                {prochain.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
                {progress.statuts[prochain.id] === "en-cours" && (
                  <Badge tone="warning">{fr.statuts["en-cours"]}</Badge>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href={chapitreHref(prochain)} size="sm">
                {progress.statuts[prochain.id] ? fr.actions.reprendre : fr.actions.demarrer}
                <ArrowRight size={14} aria-hidden="true" />
              </ButtonLink>
              <button
                type="button"
                onClick={() => {
                  setStatut(prochain.id, "maitrise");
                }}
                className="rounded-full border border-line px-3 py-1.5 text-[0.74rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
              >
                {fr.chapitre.marquerMaitrise}
              </button>
            </div>
          </div>
        </GlassCard>
      ) : (
        <EmptyState
          title={fr.tableau.aucunChapitre}
          description={fr.commun.introuvableTexte}
          action={<ButtonLink href="/reglages" size="sm">{fr.nav.reglages}</ButtonLink>}
        />
      )}

      {/* Progression par matière */}
      <section>
        <div className="mb-3 flex items-end justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">{fr.tableau.progression}</h2>
          <Link href="/cours" className="inline-flex items-center gap-1 text-[0.74rem] text-[var(--accent)]">
            {fr.tableau.voirTout}
            <ChevronRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {parMatiere.map((entry) => {
            const meta = MATIERES_META[entry.matiere];
            return (
              <Link
                key={entry.matiere}
                href={matiereHref(profile!.niveau, entry.matiere)}
                className={cn(
                  "glass glass-hover block p-4",
                  matiereAccent(entry.matiere),
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[0.92rem] font-semibold text-ink">
                    {meta.label}
                  </span>
                  <span className="font-mono text-lg text-[var(--accent)]" aria-hidden="true">
                    {meta.symbol}
                  </span>
                </div>
                <div className="mt-3">
                  <ProgressBar value={entry.valeur} showLabel label={meta.label} />
                </div>
                <p className="mt-2 text-[0.7rem] text-ink-muted">
                  {entry.maitrises} / {entry.total} {fr.tableau.chapitresMaitrises}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Notes récentes */}
      <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-[1rem] font-semibold text-ink">
              <NotebookPen size={16} className="text-[var(--accent)]" aria-hidden="true" />
              {fr.tableau.notesRecentes}
            </h2>
            <Link href="/notes" className="text-[0.72rem] text-[var(--accent)]">
              {fr.actions.toutVoir}
            </Link>
          </div>
          {notesRecentes.length === 0 ? (
            <p className="mt-3 text-[0.8rem] text-ink-muted">{fr.tableau.aucuneNote}</p>
          ) : (
            <ul className="mt-3 space-y-1.5">
              {notesRecentes.map((note) => (
                <li key={note.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId(note.id);
                      setNotesOpen(true);
                    }}
                    className="w-full rounded-xl border border-line bg-[var(--surface)] px-3 py-2 text-left transition-colors hover:border-line-strong"
                  >
                    <span className="block truncate text-[0.8rem] font-medium text-ink">
                      {note.titre || fr.notes.nouvelle}
                    </span>
                    <span className="mt-0.5 block truncate text-[0.68rem] text-ink-muted">
                      {truncate(note.contenu, 80) || fr.notes.vide}
                    </span>
                    <span className="mt-0.5 block text-[0.62rem] text-ink-muted">
                      {formatRelative(note.updatedAt)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </GlassCard>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setAiOpen(true)}
            className="glass glass-hover flex w-full items-center gap-3 p-4 text-left"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.86rem] font-medium text-ink">{fr.ai.title}</span>
              <span className="block truncate text-[0.72rem] text-ink-muted">{fr.ai.subtitle}</span>
            </span>
            <ArrowRight size={14} className="text-ink-muted" aria-hidden="true" />
          </button>

          <Link href="/resumes" className="glass glass-hover flex items-center gap-3 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
              <TrendingUp size={18} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.86rem] font-medium text-ink">{fr.nav.resumes}</span>
              <span className="block truncate text-[0.72rem] text-ink-muted">{fr.resumes.subtitle}</span>
            </span>
            <ArrowRight size={14} className="text-ink-muted" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
