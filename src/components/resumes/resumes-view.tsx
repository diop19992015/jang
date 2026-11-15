"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Clock,
  FileText,
  Printer,
  Search,
  Sparkles,
} from "lucide-react";

import { useContent } from "@/components/providers/content-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { PageHeader } from "@/components/shell/app-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge, Chip, EmptyState } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { resumeHref } from "@/lib/routes";
import { MATIERES_META, ORDRE_MATIERES, matiereAccent, matieresDuNiveau } from "@/lib/subjects";
import { cn, truncate } from "@/lib/utils";
import type { MatiereId } from "@/lib/types";

export function ResumesView() {
  const { profile } = useProfile();
  const { chapitresPour } = useContent();
  const [matiere, setMatiere] = useState<MatiereId | "toutes">("toutes");
  const [query, setQuery] = useState("");

  const matieres = useMemo(
    () => (profile ? matieresDuNiveau(profile.niveau) : ORDRE_MATIERES),
    [profile],
  );

  const fiches = useMemo(() => {
    if (!profile) return [];
    return chapitresPour({ niveau: profile.niveau, serie: profile.serie }).filter(
      (chapitre) => chapitre.hasResume,
    );
  }, [chapitresPour, profile]);

  const listes = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return fiches.filter((chapitre) => {
      if (matiere !== "toutes" && chapitre.matiere !== matiere) return false;
      if (!needle) return true;
      return `${chapitre.titre} ${chapitre.accroche} ${chapitre.objectifs.join(" ")}`
        .toLowerCase()
        .includes(needle);
    });
  }, [fiches, matiere, query]);

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow={
          profile
            ? `${fr.niveaux[profile.niveau]}${profile.serie ? ` · ${profile.serie}` : ""}`
            : undefined
        }
        title={fr.resumes.title}
        description={fr.resumes.subtitle}
        breadcrumb={[
          { label: fr.nav.tableau, href: "/tableau-de-bord" },
          { label: fr.nav.resumes },
        ]}
        actions={
          <Badge tone="accent">
            {fr.resumes.fiches.replace("{n}", String(fiches.length))}
          </Badge>
        }
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={fr.resumes.recherche}
            aria-label={fr.resumes.recherche}
            className="input pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Chip active={matiere === "toutes"} onClick={() => setMatiere("toutes")}>
            {fr.matieres.toutes}
          </Chip>
          {matieres.map((id) => (
            <Chip key={id} active={matiere === id} onClick={() => setMatiere(id)}>
              {MATIERES_META[id].short}
            </Chip>
          ))}
        </div>
      </div>

      {listes.length === 0 ? (
        <EmptyState
          icon={<FileText size={20} aria-hidden="true" />}
          title={fr.resumes.empty}
          description={fr.app.demoNotice}
          action={
            <button
              type="button"
              onClick={() => {
                setMatiere("toutes");
                setQuery("");
              }}
              className="text-[0.78rem] text-[var(--accent)]"
            >
              {fr.actions.reinitialiser}
            </button>
          }
        />
      ) : (
        <div className="space-y-7">
          {ORDRE_MATIERES.filter((id) => listes.some((chapitre) => chapitre.matiere === id)).map(
            (id) => {
              const meta = MATIERES_META[id];
              const entries = listes.filter((chapitre) => chapitre.matiere === id);
              return (
                <section key={id} className={matiereAccent(id)}>
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[0.8rem] text-[var(--accent)]">
                      {meta.symbol}
                    </span>
                    <h2 className="font-display text-[1.02rem] font-semibold text-ink">
                      {meta.label}
                    </h2>
                    <span className="text-[0.68rem] text-ink-muted">
                      {fr.resumes.fiches.replace("{n}", String(entries.length))}
                    </span>
                  </div>

                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {entries.map((chapitre) => (
                      <li key={chapitre.id}>
                        <GlassCard spotlight className="group flex h-full flex-col p-4">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={resumeHref(chapitre)}
                              className="min-w-0 font-display text-[0.98rem] font-semibold leading-snug text-ink transition-colors hover:text-[var(--accent)]"
                            >
                              {chapitre.titre}
                            </Link>
                            {chapitre.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
                          </div>

                          {chapitre.accroche && (
                            <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-relaxed text-ink-muted">
                              {truncate(chapitre.accroche, 140)}
                            </p>
                          )}

                          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-2.5 text-[0.68rem] text-ink-muted">
                            <span className="inline-flex items-center gap-1">
                              <Clock size={10} aria-hidden="true" />
                              {fr.cours.tempsLecture.replace("{n}", String(chapitre.duree))}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Sparkles size={10} aria-hidden="true" />
                              {chapitre.exerciceCount} {fr.commun.exercices}
                            </span>
                            <span className="ml-auto flex items-center gap-2">
                              <Link
                                href={resumeHref(chapitre)}
                                className="inline-flex items-center gap-1 font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5"
                              >
                                {fr.resumes.lireFiche}
                                <ArrowRight size={11} aria-hidden="true" />
                              </Link>
                              <Link
                                href={resumeHref(chapitre)}
                                className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-ink"
                                title={fr.resumes.imprimerFiche}
                                aria-label={`${fr.resumes.imprimerFiche} — ${chapitre.titre}`}
                              >
                                <Printer size={11} aria-hidden="true" />
                              </Link>
                            </span>
                          </div>
                        </GlassCard>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            },
          )}
        </div>
      )}

      <p className={cn("text-[0.68rem] text-ink-muted")}>
        {fr.resumes.astucePdf} · {fr.app.demoNotice}
      </p>
    </div>
  );
}
