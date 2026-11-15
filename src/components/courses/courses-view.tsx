"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Clock, ListChecks, Search, Sigma } from "lucide-react";

import { useContent } from "@/components/providers/content-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { PageHeader } from "@/components/shell/app-shell";
import { Badge, Chip, EmptyState } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { chapitreHref } from "@/lib/routes";
import { MATIERES_META, ORDRE_MATIERES, matiereAccent, matieresDuNiveau } from "@/lib/subjects";
import { cn } from "@/lib/utils";
import type { MatiereId } from "@/lib/types";

export function CoursesView() {
  const { profile } = useProfile();
  const { chapitresPour } = useContent();
  const [matiere, setMatiere] = useState<MatiereId | "toutes">("toutes");
  const [query, setQuery] = useState("");

  /** Matières réellement enseignées à ce niveau, dans l'ordre du programme. */
  const matieres = useMemo(
    () => (profile ? matieresDuNiveau(profile.niveau) : ORDRE_MATIERES),
    [profile],
  );

  const chapitres = useMemo(() => {
    if (!profile) return [];
    return chapitresPour({ niveau: profile.niveau, serie: profile.serie }).filter(
      (chapitre) => chapitre.hasCours || chapitre.enPreparation,
    );
  }, [chapitresPour, profile]);

  const listes = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return chapitres.filter((chapitre) => {
      if (matiere !== "toutes" && chapitre.matiere !== matiere) return false;
      if (!needle) return true;
      return `${chapitre.titre} ${chapitre.accroche} ${chapitre.objectifs.join(" ")}`
        .toLowerCase()
        .includes(needle);
    });
  }, [chapitres, matiere, query]);

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow={profile ? `${fr.niveaux[profile.niveau]}${profile.serie ? ` · ${profile.serie}` : ""}` : undefined}
        title={fr.cours.title}
        description={fr.cours.subtitle}
        breadcrumb={[{ label: fr.nav.tableau, href: "/tableau-de-bord" }, { label: fr.nav.cours }]}
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
            placeholder={fr.cours.recherche}
            aria-label={fr.cours.recherche}
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
          icon={<BookOpen size={20} aria-hidden="true" />}
          title={fr.cours.empty}
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
        <div className="space-y-6">
          {matieres.filter((id) => listes.some((chapitre) => chapitre.matiere === id)).map(
            (id) => {
              const meta = MATIERES_META[id];
              const entries = listes.filter((chapitre) => chapitre.matiere === id);
              return (
                <section key={id} className={matiereAccent(id)}>
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[0.8rem] text-[var(--accent)]">
                      {meta.symbol}
                    </span>
                    <h2 className="font-display text-[1.02rem] font-semibold text-ink">{meta.label}</h2>
                    <span className="text-[0.68rem] text-ink-muted">
                      {entries.length} {fr.commun.chapitres}
                    </span>
                  </div>

                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {entries.map((chapitre) => (
                      <li key={chapitre.id}>
                        <Link
                          href={`${chapitreHref(chapitre)}?onglet=cours`}
                          className="glass glass-hover group flex h-full flex-col p-4"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-display text-[0.96rem] font-semibold leading-snug text-ink">
                              {chapitre.titre}
                            </h3>
                            <span className="flex shrink-0 items-center gap-1.5">
                              {chapitre.enPreparation && (
                                <Badge tone="warning">{fr.matiere.enPreparation}</Badge>
                              )}
                              {chapitre.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
                            </span>
                          </div>
                          {chapitre.accroche && (
                            <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-relaxed text-ink-muted">
                              {chapitre.accroche}
                            </p>
                          )}
                          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-[0.68rem] text-ink-muted">
                            <span className="inline-flex items-center gap-1">
                              <Clock size={10} aria-hidden="true" />
                              {fr.cours.tempsLecture.replace("{n}", String(chapitre.duree))}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <ListChecks size={10} aria-hidden="true" />
                              {chapitre.exerciceCount}
                            </span>
                            {chapitre.hasFormules && (
                              <span className="inline-flex items-center gap-1">
                                <Sigma size={10} aria-hidden="true" />
                                {fr.chapitre.formules}
                              </span>
                            )}
                            <span className="ml-auto inline-flex items-center gap-1 font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
                              {fr.cours.lireLeCours}
                              <ArrowRight size={11} aria-hidden="true" />
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            },
          )}
        </div>
      )}

      <p className={cn("text-[0.68rem] text-ink-muted")}>{fr.app.demoNotice}</p>
    </div>
  );
}
