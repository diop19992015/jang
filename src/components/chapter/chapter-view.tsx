"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  FileText,
  ListChecks,
  NotebookPen,
  Plus,
  Printer,
  Sigma,
  Sparkles,
  Target,
} from "lucide-react";

import { ExerciseCard } from "@/components/chapter/exercise-card";
import { QuizRunner } from "@/components/chapter/quiz-runner";
import { DirectiveBlocks } from "@/components/markdown/directives";
import { useAi } from "@/components/providers/ai-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useProgress } from "@/components/providers/progress-provider";
import { useUi } from "@/components/providers/ui-provider";
import { Breadcrumb } from "@/components/shell/app-shell";
import { ButtonLink } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge, ProgressBar } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { splitSections } from "@/lib/markdown/sections";
import { chapitreHref, resumeHref } from "@/lib/routes";
import { matiereAccent } from "@/lib/subjects";
import { cn, formatRelative, truncate } from "@/lib/utils";
import type {
  ChapterMeta,
  Chapitre,
  StatutChapitre,
} from "@/lib/types";

type TabId = "resume" | "cours" | "formules" | "exercices" | "quiz";

const STATUTS_ORDER: StatutChapitre[] = ["a-faire", "en-cours", "maitrise"];

export function ChapterView({
  chapitre,
  precedent,
  suivant,
  initialTab = "resume",
}: {
  chapitre: Chapitre;
  precedent: ChapterMeta | null;
  suivant: ChapterMeta | null;
  initialTab?: TabId;
}) {
  const { progress, touchChapitre, setStatut } = useProgress();
  const { notesForChapitre, createNote, setActiveId } = useNotes();
  const { setContext } = useAi();
  const { setAiOpen, setNotesOpen, toast } = useUi();

  const [selectedTab, setSelectedTab] = useState<{
    chapitreId: string;
    tab: TabId;
  }>({ chapitreId: chapitre.id, tab: initialTab });
  const [activeSection, setActiveSection] = useState<string>("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  const sections = useMemo(() => splitSections(chapitre.cours).sections, [chapitre.cours]);
  const formuleSections = useMemo(
    () => splitSections(chapitre.formules).sections,
    [chapitre.formules],
  );
  const notes = notesForChapitre(chapitre.id);
  const statut = progress.statuts[chapitre.id] ?? "a-faire";
  const tab = selectedTab.chapitreId === chapitre.id ? selectedTab.tab : initialTab;
  const setTab = (nextTab: TabId) =>
    setSelectedTab({ chapitreId: chapitre.id, tab: nextTab });

  useEffect(() => {
    touchChapitre(chapitre.id);
    setContext({
      niveau: chapitre.niveau,
      serie: chapitre.series[0] ?? null,
      matiere: chapitre.matiere,
      chapitreId: chapitre.id,
      chapitreTitre: chapitre.titre,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapitre.id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [chapitre.id]);

  useEffect(() => {
    if (tab !== "cours") return;
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: [0, 1] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [tab, sections, chapitre.id]);

  const tabs: { id: TabId; label: string; icon: typeof BookOpen; count?: number; disabled?: boolean }[] = [
    { id: "resume", label: fr.chapitre.resume, icon: FileText, disabled: !chapitre.hasResume },
    { id: "cours", label: fr.chapitre.cours, icon: BookOpen, disabled: !chapitre.hasCours },
    { id: "formules", label: fr.chapitre.formules, icon: Sigma, disabled: !chapitre.hasFormules },
    {
      id: "exercices",
      label: fr.chapitre.exercices,
      icon: ListChecks,
      count: chapitre.exercices.length,
      disabled: chapitre.exercices.length === 0,
    },
    {
      id: "quiz",
      label: fr.chapitre.quiz,
      icon: Sparkles,
      count: chapitre.quiz.length,
      disabled: chapitre.quiz.length === 0,
    },
  ];

  const demanderIa = () => {
    setContext({
      niveau: chapitre.niveau,
      serie: chapitre.series[0] ?? null,
      matiere: chapitre.matiere,
      chapitreId: chapitre.id,
      chapitreTitre: chapitre.titre,
    });
    setAiOpen(true);
  };

  const demanderIaSection = (titre: string) => {
    demanderIa();
    toast(`Contexte : « ${titre} ». Pose ta question à l'assistant.`);
  };

  const ouvrirNote = (id: string) => {
    setActiveId(id);
    setNotesOpen(true);
  };

  const nouvelleNote = () => {
    const note = createNote({
      titre: `Notes — ${chapitre.titre}`,
      chapitreId: chapitre.id,
    });
    setActiveId(note.id);
    setNotesOpen(true);
    toast(fr.chapitre.nouvelleNote, "success");
  };

  return (
    <div className={cn("space-y-5", matiereAccent(chapitre.matiere))}>
      <Breadcrumb
        items={[
          { label: fr.nav.tableau, href: "/tableau-de-bord" },
          { label: fr.niveaux[chapitre.niveau] },
          { label: fr.matieres[chapitre.matiere], href: `/matiere/${chapitre.niveau}/${chapitre.matiere}` },
          { label: chapitre.titre },
        ]}
      />

      {/* En-tête du chapitre */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 max-w-2xl">
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge tone="accent">{fr.matieres[chapitre.matiere]}</Badge>
              <Badge>{fr.niveaux[chapitre.niveau]}{chapitre.series.length ? ` · ${chapitre.series.join(" / ")}` : ""}</Badge>
              {chapitre.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
              {chapitre.enPreparation && (
                <Badge tone="warning">{fr.matiere.enPreparation}</Badge>
              )}
            </div>
            <h1 className="mt-2 font-display text-[clamp(1.55rem,1.15rem+2vw,2.35rem)] font-semibold leading-[1.12] text-ink">
              {chapitre.titre}
            </h1>
            {chapitre.accroche && (
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-muted">{chapitre.accroche}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={demanderIa}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-strong)] px-3.5 py-2 text-[0.78rem] font-semibold text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5"
            >
              <Sparkles size={13} aria-hidden="true" />
              {fr.chapitre.demanderIa}
            </button>
            {chapitre.hasResume && (
              <ButtonLink href={resumeHref(chapitre)} variant="ghost" size="sm">
                <Printer size={13} aria-hidden="true" />
                {fr.resumes.imprimerFiche}
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] text-ink-muted">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            {fr.chapitre.duree} : {fr.chapitre.minutes.replace("{n}", String(chapitre.duree))}
          </span>
          <span className="inline-flex items-center gap-1">
            <ListChecks size={12} aria-hidden="true" />
            {chapitre.exercices.length} {fr.commun.exercices}
          </span>
          <span className="inline-flex items-center gap-1">
            <Sparkles size={12} aria-hidden="true" />
            {chapitre.quiz.length} {fr.commun.questions}
          </span>
          {chapitre.objectifs.length > 0 && (
            <span className="inline-flex items-center gap-1">
              <Target size={12} aria-hidden="true" />
              {chapitre.objectifs.length} {fr.chapitre.objectifs.toLowerCase()}
            </span>
          )}
        </div>
      </header>

      {chapitre.enPreparation && (
        <GlassCard className="border-[var(--border-accent)] p-4">
          <p className="flex items-center gap-2 text-[0.82rem] font-semibold text-[var(--accent)]">
            <Clock size={14} aria-hidden="true" />
            {fr.chapitre.enPreparation}
          </p>
          <p className="mt-1.5 text-[0.78rem] leading-relaxed text-ink-muted">
            {fr.chapitre.enPreparationTexte}
          </p>
        </GlassCard>
      )}

      {/* Barre de progression + statut */}
      <GlassCard className="p-3.5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-[10rem] flex-1">
            <div className="mb-1.5 flex items-center justify-between text-[0.66rem] text-ink-muted">
              <span>{fr.chapitre.progression}</span>
              <span className="tabular-nums">{statut === "maitrise" ? 100 : statut === "en-cours" ? 50 : 10} %</span>
            </div>
            <ProgressBar value={statut === "maitrise" ? 100 : statut === "en-cours" ? 50 : 10} label={fr.chapitre.progression} />
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {STATUTS_ORDER.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setStatut(chapitre.id, option);
                  if (option === "maitrise") toast(fr.chapitre.bravo, "success");
                }}
                aria-pressed={statut === option}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[0.68rem] transition-colors",
                  statut === option
                    ? "border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "border-line text-ink-muted hover:text-ink",
                )}
              >
                {fr.statuts[option]}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Onglets */}
      <div className="sticky top-14 z-20 -mx-1 overflow-x-auto border-b border-line bg-[var(--bg)]/85 px-1 backdrop-blur-xl">
        <div role="tablist" aria-label={fr.chapitre.sommaire} className="flex min-w-max gap-1 py-1.5">
          {tabs.map((item) => {
            const Icon = item.icon;
            const actif = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={actif}
                aria-controls={`panneau-${item.id}`}
                id={`onglet-${item.id}`}
                disabled={item.disabled}
                onClick={() => setTab(item.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[0.78rem] font-medium transition-colors",
                  actif
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-ink-muted hover:bg-[var(--surface)] hover:text-ink",
                  item.disabled && "cursor-not-allowed opacity-40",
                )}
              >
                <Icon size={13} aria-hidden="true" />
                {item.label}
                {typeof item.count === "number" && item.count > 0 && (
                  <span className="rounded-full bg-[var(--surface-hover)] px-1.5 text-[0.62rem] tabular-nums">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Sommaire mobile : sections collantes qui suivent le défilement */}
        {tab === "cours" && sections.length > 0 && (
          <nav
            aria-label={fr.chapitre.sommaire}
            className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1.5 lg:hidden"
          >
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-[0.68rem] whitespace-nowrap transition-colors",
                  activeSection === section.id
                    ? "border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "border-line text-ink-muted hover:text-ink",
                )}
              >
                <span className="font-mono text-[0.6rem] opacity-70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="max-w-[11rem] truncate">{section.title}</span>
              </a>
            ))}
          </nav>
        )}
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div ref={contentRef} className="min-w-0">
          {/* RÉSUMÉ */}
          {tab === "resume" && (
            <section
              role="tabpanel"
              id="panneau-resume"
              aria-labelledby="onglet-resume"
              className="space-y-4"
            >
              {chapitre.resume ? (
                <GlassCard className="p-5 sm:p-6">
                  <DirectiveBlocks markdown={chapitre.resume} />
                </GlassCard>
              ) : (
                <p className="text-[0.84rem] text-ink-muted">{fr.commun.aucuneDonnee}</p>
              )}
              <div className="flex flex-wrap gap-2 no-print">
                <ButtonLink href={resumeHref(chapitre)} variant="ghost" size="sm">
                  <Printer size={13} aria-hidden="true" />
                  {fr.resumes.imprimerFiche}
                </ButtonLink>
                <button
                  type="button"
                  onClick={() => {
                    const note = createNote({
                      titre: `Résumé — ${chapitre.titre}`,
                      contenu: chapitre.resume,
                      chapitreId: chapitre.id,
                      etiquettes: ["résumé"],
                    });
                    setActiveId(note.id);
                    setNotesOpen(true);
                    toast(fr.chapitre.enregistrerPassage, "success");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[0.74rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
                >
                  <NotebookPen size={13} aria-hidden="true" />
                  {fr.actions.enregistrerNotes}
                </button>
              </div>
            </section>
          )}

          {/* COURS */}
          {tab === "cours" && (
            <section role="tabpanel" id="panneau-cours" aria-labelledby="onglet-cours">
              {sections.length === 0 && !chapitre.cours ? (
                <p className="text-[0.84rem] text-ink-muted">{fr.commun.aucuneDonnee}</p>
              ) : (
                <div className="space-y-4">
                  {chapitre.objectifs.length > 0 && (
                    <GlassCard className="p-4 sm:p-5">
                      <p className="mb-2 flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        <Target size={11} aria-hidden="true" />
                        {fr.chapitre.objectifs}
                      </p>
                      <ul className="grid gap-1 sm:grid-cols-2">
                        {chapitre.objectifs.map((objectif) => (
                          <li key={objectif} className="flex gap-1.5 text-[0.76rem] leading-snug text-ink-soft">
                            <Check size={11} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                            {objectif}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  )}
                  {sections.length === 0 ? (
                    <GlassCard className="p-5">
                      <DirectiveBlocks markdown={chapitre.cours} />
                    </GlassCard>
                  ) : (
                    sections.map((section, index) => (
                      <GlassCard key={section.id} className="scroll-mt-32 p-5 sm:p-6 lg:scroll-mt-28">
                        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                          <h2
                            id={section.id}
                            className="font-display text-[1.18rem] font-semibold leading-snug text-ink"
                          >
                            <span className="mr-2 font-mono text-[0.7rem] text-[var(--accent)]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {section.title}
                          </h2>
                          <button
                            type="button"
                            onClick={() => demanderIaSection(section.title)}
                            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-muted transition-colors hover:border-[var(--border-accent)] hover:text-[var(--accent)] no-print"
                            title={fr.chapitre.iaSurSection}
                          >
                            <Sparkles size={10} aria-hidden="true" />
                            {fr.actions.demanderIa}
                          </button>
                        </div>
                        <DirectiveBlocks markdown={section.markdown} />
                      </GlassCard>
                    ))
                  )}
                </div>
              )}
            </section>
          )}

          {/* FORMULES */}
          {tab === "formules" && (
            <section role="tabpanel" id="panneau-formules" aria-labelledby="onglet-formules" className="space-y-3">
              {chapitre.formules ? (
                formuleSections.length > 1 ? (
                  formuleSections.map((section) => (
                    <GlassCard key={section.id} className="p-5">
                      <h2 className="mb-2 font-display text-[1rem] font-semibold text-ink">
                        {section.title}
                      </h2>
                      <DirectiveBlocks markdown={section.markdown} />
                    </GlassCard>
                  ))
                ) : (
                  <GlassCard className="p-5">
                    <DirectiveBlocks markdown={chapitre.formules} />
                  </GlassCard>
                )
              ) : (
                <p className="text-[0.84rem] text-ink-muted">{fr.commun.aucuneDonnee}</p>
              )}
            </section>
          )}

          {/* EXERCICES */}
          {tab === "exercices" && (
            <section role="tabpanel" id="panneau-exercices" aria-labelledby="onglet-exercices" className="space-y-3">
              {chapitre.exercices.length === 0 ? (
                <p className="text-[0.84rem] text-ink-muted">{fr.commun.aucuneDonnee}</p>
              ) : (
                <>
                  <p className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2 text-[0.74rem] text-ink-muted">
                    {fr.exercices.astuce}
                  </p>
                  {chapitre.exercices.map((exercice, index) => (
                    <ExerciseCard
                      key={exercice.id}
                      exercice={exercice}
                      chapitreTitre={chapitre.titre}
                      index={index}
                    />
                  ))}
                </>
              )}
            </section>
          )}

          {/* QUIZ */}
          {tab === "quiz" && (
            <section role="tabpanel" id="panneau-quiz" aria-labelledby="onglet-quiz">
              <QuizRunner chapitreId={chapitre.id} questions={chapitre.quiz} />
            </section>
          )}

          {/* Navigation voisins */}
          <nav className="mt-6 flex flex-wrap items-stretch justify-between gap-2 no-print" aria-label="Chapitres voisins">
            {precedent ? (
              <Link
                href={chapitreHref(precedent)}
                className="glass glass-hover flex min-w-0 flex-1 items-center gap-2 p-3"
              >
                <ArrowLeft size={14} className="shrink-0 text-ink-muted" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[0.6rem] uppercase tracking-[0.12em] text-ink-muted">
                    {fr.chapitre.precedent}
                  </span>
                  <span className="block truncate text-[0.78rem] text-ink">{precedent.titre}</span>
                </span>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
            {suivant ? (
              <Link
                href={chapitreHref(suivant)}
                className="glass glass-hover flex min-w-0 flex-1 items-center justify-end gap-2 p-3 text-right"
              >
                <span className="min-w-0">
                  <span className="block text-[0.6rem] uppercase tracking-[0.12em] text-ink-muted">
                    {fr.chapitre.suivant}
                  </span>
                  <span className="block truncate text-[0.78rem] text-ink">{suivant.titre}</span>
                </span>
                <ArrowRight size={14} className="shrink-0 text-ink-muted" aria-hidden="true" />
              </Link>
            ) : (
              <span className="flex-1" />
            )}
          </nav>
        </div>

        {/* Colonne latérale */}
        <aside className="space-y-3 no-print">
          {tab === "cours" && sections.length > 0 && (
            <GlassCard
              className="sticky top-28 z-10 max-h-[calc(100vh-8.5rem)] overflow-y-auto p-3"
              style={{ background: "var(--bg)" }}
            >
              <p className="mb-1.5 px-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {fr.chapitre.sommaire}
              </p>
              <ol className="space-y-0.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={cn(
                        "flex items-start gap-1.5 rounded-lg px-1.5 py-1 text-[0.72rem] transition-colors",
                        activeSection === section.id
                          ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                          : "text-ink-muted hover:text-ink",
                      )}
                    >
                      <span className="mt-0.5 font-mono text-[0.6rem] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 leading-snug">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </GlassCard>
          )}

          {chapitre.prerequis.length > 0 && (
            <GlassCard className="p-3.5">
              <p className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {fr.chapitre.prerequis}
              </p>
              <ul className="space-y-1">
                {chapitre.prerequis.map((item) => (
                  <li key={item} className="flex gap-1.5 text-[0.73rem] leading-snug text-ink-soft">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}

          <GlassCard className="p-3.5">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <NotebookPen size={11} aria-hidden="true" />
                {fr.chapitre.mesNotes}
              </p>
              <button
                type="button"
                onClick={nouvelleNote}
                className="icon-btn h-6 w-6"
                aria-label={fr.chapitre.nouvelleNote}
              >
                <Plus size={12} aria-hidden="true" />
              </button>
            </div>
            {notes.length === 0 ? (
              <p className="text-[0.72rem] leading-relaxed text-ink-muted">{fr.chapitre.aucuneNote}</p>
            ) : (
              <ul className="space-y-1">
                {notes.slice(0, 4).map((note) => (
                  <li key={note.id}>
                    <button
                      type="button"
                      onClick={() => ouvrirNote(note.id)}
                      className="w-full rounded-lg border border-line bg-[var(--surface)] px-2 py-1.5 text-left transition-colors hover:border-line-strong"
                    >
                      <span className="block truncate text-[0.74rem] text-ink">
                        {note.titre || fr.notes.nouvelle}
                      </span>
                      <span className="block truncate text-[0.64rem] text-ink-muted">
                        {truncate(note.contenu, 40) || formatRelative(note.updatedAt)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </GlassCard>

          <button
            type="button"
            onClick={demanderIa}
            className="glass glass-hover flex w-full items-center gap-2 p-3 text-left"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <Sparkles size={15} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1 text-[0.74rem] text-ink">{fr.ai.title}</span>
            <ChevronRight size={13} className="text-ink-muted" aria-hidden="true" />
          </button>
        </aside>
      </div>
    </div>
  );
}
