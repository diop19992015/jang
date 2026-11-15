"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  ListChecks,
  Sparkles,
} from "lucide-react";

import { useProgress } from "@/components/providers/progress-provider";
import { PageHeader } from "@/components/shell/app-shell";
import { ButtonLink } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge, Chip, EmptyState, ProgressBar } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { chapitreHref, resumeHref } from "@/lib/routes";
import { MATIERES_META, matiereAccent } from "@/lib/subjects";
import { cn } from "@/lib/utils";
import type { ChapterMeta, MatiereId, NiveauId, StatutChapitre } from "@/lib/types";

const FILTRES: (StatutChapitre | "tous")[] = ["tous", "a-faire", "en-cours", "maitrise"];

export function SubjectView({
  niveau,
  matiere,
  chapitres,
}: {
  niveau: NiveauId;
  matiere: MatiereId;
  chapitres: ChapterMeta[];
}) {
  const { progress, mastery } = useProgress();
  const [filtre, setFiltre] = useState<StatutChapitre | "tous">("tous");
  const meta = MATIERES_META[matiere];

  const valeur = mastery(chapitres);

  const listes = useMemo(
    () =>
      chapitres.filter((chapitre) => {
        if (filtre === "tous") return true;
        return (progress.statuts[chapitre.id] ?? "a-faire") === filtre;
      }),
    [chapitres, filtre, progress.statuts],
  );

  return (
    <div className={cn("space-y-6", matiereAccent(matiere))}>
      <PageHeader
        eyebrow={`${fr.niveaux[niveau]} · ${fr.matiere.progression}`}
        title={meta.label}
        description={meta.description}
        breadcrumb={[
          { label: fr.nav.tableau, href: "/tableau-de-bord" },
          { label: fr.niveaux[niveau] },
          { label: meta.label },
        ]}
        actions={
          <>
            <ButtonLink href={`/exercices?matiere=${matiere}`} variant="ghost" size="sm">
              <ListChecks size={14} aria-hidden="true" />
              {fr.nav.exercices}
            </ButtonLink>
            <ButtonLink href="/cours" size="sm">
              <BookOpen size={14} aria-hidden="true" />
              {fr.nav.cours}
            </ButtonLink>
          </>
        }
      />

      <GlassCard className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-[12rem] flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {fr.matiere.progression}
              </p>
              <p className="font-display text-lg font-semibold text-ink">{valeur} %</p>
            </div>
            <ProgressBar className="mt-2" value={valeur} label={meta.label} />
          </div>
          <div className="flex items-center gap-2">
            <span className="badge">{fr.matiere.chapitresCount.replace("{n}", String(chapitres.length))}</span>
            <span className="badge">{chapitres.reduce((total, item) => total + item.exerciceCount, 0)} {fr.commun.exercices}</span>
          </div>
        </div>
      </GlassCard>

      <div className="flex flex-wrap items-center gap-1.5">
        {FILTRES.map((option) => (
          <Chip key={option} active={filtre === option} onClick={() => setFiltre(option)}>
            {option === "tous" ? fr.matiere.tous : fr.statuts[option]}
          </Chip>
        ))}
      </div>

      {listes.length === 0 ? (
        <EmptyState
          title={fr.matiere.empty}
          icon={<BookOpen size={20} aria-hidden="true" />}
          action={
            <button
              type="button"
              onClick={() => setFiltre("tous")}
              className="text-[0.78rem] text-[var(--accent)]"
            >
              {fr.actions.reinitialiser}
            </button>
          }
        />
      ) : (
        <ul className="space-y-2.5">
          {listes.map((chapitre, index) => {
            const statut = progress.statuts[chapitre.id] ?? "a-faire";
            const visite = progress.visites[chapitre.id];
            return (
              <li key={chapitre.id}>
                <GlassCard className="group p-4 sm:p-5" spotlight>
                  <div className="flex items-start gap-3.5">
                    <span
                      className={cn(
                        "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[0.76rem]",
                        statut === "maitrise"
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                          : statut === "en-cours"
                            ? "border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                            : "border-line bg-[var(--surface)] text-ink-muted",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h2 className="font-display text-[1.02rem] font-semibold text-ink">
                          {chapitre.titre}
                        </h2>
                        {chapitre.enPreparation && (
                          <Badge tone="warning">{fr.matiere.enPreparation}</Badge>
                        )}
                        {chapitre.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
                        {statut === "maitrise" && <Badge tone="success">{fr.statuts.maitrise}</Badge>}
                        {statut === "en-cours" && <Badge tone="warning">{fr.statuts["en-cours"]}</Badge>}
                      </div>
                      {chapitre.accroche && (
                        <p className="mt-1 max-w-2xl text-[0.82rem] leading-relaxed text-ink-muted">
                          {chapitre.accroche}
                        </p>
                      )}

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.7rem] text-ink-muted">
                        <span className="inline-flex items-center gap-1">
                          <Clock size={11} aria-hidden="true" />
                          {fr.matiere.tempsEstime.replace("{n}", String(chapitre.duree))}
                        </span>
                        {chapitre.hasResume && (
                          <span className="inline-flex items-center gap-1">
                            <FileText size={11} aria-hidden="true" />
                            {fr.chapitre.resume}
                          </span>
                        )}
                        {chapitre.hasCours && (
                          <span className="inline-flex items-center gap-1">
                            <BookOpen size={11} aria-hidden="true" />
                            {fr.chapitre.cours}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1">
                          <ListChecks size={11} aria-hidden="true" />
                          {fr.chapitre.exercicesCount.replace("{n}", String(chapitre.exerciceCount))}
                        </span>
                        {visite && (
                          <span className="inline-flex items-center gap-1 text-[var(--accent)]">
                            {fr.actions.reprendre}
                          </span>
                        )}
                      </div>

                      {chapitre.objectifs.length > 0 && (
                        <details className="mt-2.5">
                          <summary className="cursor-pointer text-[0.7rem] text-ink-muted transition-colors hover:text-ink">
                            {fr.matiere.objectifs}
                          </summary>
                          <ul className="mt-1.5 space-y-0.5 pl-1">
                            {chapitre.objectifs.map((objectif) => (
                              <li key={objectif} className="flex gap-1.5 text-[0.74rem] text-ink-soft">
                                <span className="text-[var(--accent)]" aria-hidden="true">
                                  ·
                                </span>
                                {objectif}
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1.5">
                      <Link
                        href={chapitreHref(chapitre)}
                        className="inline-flex items-center gap-1 rounded-full bg-[var(--accent-strong)] px-3 py-1.5 text-[0.72rem] font-semibold text-[var(--accent-contrast)] transition-transform group-hover:translate-x-0.5"
                      >
                        {fr.matiere.commencerChapitre}
                        <ArrowRight size={12} aria-hidden="true" />
                      </Link>
                      {chapitre.hasResume && (
                        <Link
                          href={resumeHref(chapitre)}
                          className="inline-flex items-center gap-1 text-[0.68rem] text-ink-muted transition-colors hover:text-ink"
                        >
                          <FileText size={10} aria-hidden="true" />
                          {fr.resumes.lireFiche}
                        </Link>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </li>
            );
          })}
        </ul>
      )}

      <p className="flex items-center gap-1.5 pt-2 text-[0.68rem] text-ink-muted">
        <Sparkles size={11} aria-hidden="true" />
        {fr.app.demoNotice}
      </p>
    </div>
  );
}
