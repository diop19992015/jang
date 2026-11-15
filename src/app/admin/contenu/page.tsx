import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Search } from "lucide-react";

import { NewChapterForm } from "@/components/admin/new-chapter-form";
import { getTousChapitres } from "@/lib/content/loader";
import { fr } from "@/lib/i18n/fr";
import { MATIERES_META, matiereAccent } from "@/lib/subjects";
import { NIVEAU_LABELS, type MatiereId } from "@/lib/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contenus",
  robots: { index: false, follow: false },
};

export default async function AdminContentPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; matiere?: string }>;
}) {
  const { q, matiere } = await searchParams;
  const needle = (q ?? "").trim().toLowerCase();

  const chapitres = getTousChapitres().filter((chapitre) => {
    if (matiere && chapitre.matiere !== matiere) return false;
    if (!needle) return true;
    return `${chapitre.titre} ${chapitre.accroche} ${chapitre.slug}`
      .toLowerCase()
      .includes(needle);
  });

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-[clamp(1.3rem,1.1rem+1.4vw,1.7rem)] font-semibold text-ink">
            {fr.admin.contenus}
          </h1>
          <p className="mt-1 text-[0.8rem] text-ink-muted">
            {chapitres.length} {fr.admin.chapitres.toLowerCase()} · {fr.app.demoNotice}
          </p>
        </div>
      </div>

      <NewChapterForm />

      <form method="get" className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-0 flex-1">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <input
            name="q"
            defaultValue={q ?? ""}
            placeholder="Rechercher un chapitre…"
            aria-label="Rechercher un chapitre"
            className="input pl-9"
          />
        </div>
        <select
          name="matiere"
          defaultValue={matiere ?? ""}
          className="input w-auto py-2 text-[0.8rem]"
          aria-label={fr.admin.matiere}
        >
          <option value="">{fr.matieres.toutes}</option>
          {(Object.keys(MATIERES_META) as MatiereId[]).map((id) => (
            <option key={id} value={id}>
              {MATIERES_META[id].label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-[0.78rem] font-semibold text-[var(--accent-contrast)]"
        >
          Filtrer
        </button>
      </form>

      <ul className="grid gap-2.5 sm:grid-cols-2">
        {chapitres.map((chapitre) => (
          <li key={chapitre.id}>
            <Link
              href={`/admin/contenu/${chapitre.niveau}/${chapitre.matiere}/${chapitre.slug}`}
              className={cn(
                "glass glass-hover flex h-full flex-col rounded-2xl p-4",
                matiereAccent(chapitre.matiere),
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-display text-[0.96rem] font-semibold leading-snug text-ink">
                  {chapitre.titre}
                </p>
                <div className="flex shrink-0 items-center gap-1">
                  {chapitre.statut === "brouillon" && (
                    <span className="badge border-amber-400/40 bg-amber-400/10 text-amber-200">
                      {fr.admin.brouillon}
                    </span>
                  )}
                  {chapitre.enPreparation && (
                    <span className="badge border-amber-400/40 bg-amber-400/10 text-amber-200">
                      {fr.matiere.enPreparation}
                    </span>
                  )}
                  {chapitre.demo && (
                    <span className="badge badge-demo">{fr.commun.demo}</span>
                  )}
                </div>
              </div>
              <p className="mt-1 text-[0.7rem] text-ink-muted">
                {NIVEAU_LABELS[chapitre.niveau]}
                {chapitre.series.length ? ` · ${chapitre.series.join(" / ")}` : ""} ·{" "}
                {MATIERES_META[chapitre.matiere].label}
              </p>
              <div className="mt-2 flex flex-wrap gap-1 text-[0.62rem]">
                <span className="badge">{chapitre.hasResume ? "Résumé" : "— résumé"}</span>
                <span className="badge">{chapitre.hasCours ? "Cours" : "— cours"}</span>
                <span className="badge">
                  {chapitre.hasFormules ? "Formules" : "— formules"}
                </span>
                <span className="badge">{chapitre.exerciceCount} ex.</span>
                <span className="badge">{chapitre.quiz.length} quiz</span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-[0.7rem] text-[var(--accent)]">
                <FileText size={11} aria-hidden="true" />
                {fr.admin.editer}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {chapitres.length === 0 && (
        <p className="glass rounded-2xl p-6 text-center text-[0.82rem] text-ink-muted">
          {fr.commun.aucuneDonnee} — crée un chapitre ci-dessus.
        </p>
      )}
    </div>
  );
}
