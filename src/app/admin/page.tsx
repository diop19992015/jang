import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  FileText,
  ListChecks,
  Sparkles,
  Upload,
} from "lucide-react";

import { getContentStats } from "@/lib/content/loader";
import { fr } from "@/lib/i18n/fr";
import { MATIERES_META, ORDRE_MATIERES } from "@/lib/subjects";
import { NIVEAU_LABELS } from "@/lib/types";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  const stats = getContentStats();

  const cartes = [
    {
      label: fr.admin.chapitres,
      value: stats.chapitres,
      icon: <BookOpen size={16} aria-hidden="true" />,
    },
    {
      label: fr.admin.exercices,
      value: stats.exercices,
      icon: <ListChecks size={16} aria-hidden="true" />,
    },
    {
      label: fr.admin.quiz,
      value: stats.quiz,
      icon: <Sparkles size={16} aria-hidden="true" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[clamp(1.4rem,1.1rem+1.6vw,1.9rem)] font-semibold text-ink">
          {fr.admin.tableau}
        </h1>
        <p className="mt-1 text-[0.84rem] text-ink-muted">{fr.admin.subtitle}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {cartes.map((carte) => (
          <div key={carte.label} className="glass rounded-2xl p-4">
            <div className="flex items-center gap-2 text-[var(--accent)]">
              {carte.icon}
              <span className="text-[0.66rem] uppercase tracking-[0.16em] text-ink-muted">
                {carte.label}
              </span>
            </div>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">
              {carte.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/admin/contenu"
          className="glass glass-hover flex items-center gap-3 rounded-2xl p-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <FileText size={17} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[0.95rem] font-semibold text-ink">
              {fr.admin.contenus}
            </p>
            <p className="text-[0.72rem] text-ink-muted">
              Éditer les chapitres, résumés, cours et exercices.
            </p>
          </div>
          <ChevronRight size={15} className="ml-auto text-ink-muted" aria-hidden="true" />
        </Link>

        <Link
          href="/admin/import"
          className="glass glass-hover flex items-center gap-3 rounded-2xl p-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <Upload size={17} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[0.95rem] font-semibold text-ink">
              {fr.admin.import}
            </p>
            <p className="text-[0.72rem] text-ink-muted">
              Déposer plusieurs fichiers Markdown d&apos;un coup.
            </p>
          </div>
          <ChevronRight size={15} className="ml-auto text-ink-muted" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <section className="glass rounded-2xl p-4">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {fr.admin.parMatiere}
          </h2>
          <ul className="mt-3 space-y-2">
            {stats.parMatiere.map((ligne) => (
              <li
                key={ligne.matiere}
                className="flex items-center justify-between gap-2 text-[0.8rem]"
              >
                <span className="inline-flex items-center gap-2 text-ink-soft">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[0.72rem] text-[var(--accent)]">
                    {MATIERES_META[ligne.matiere].symbol}
                  </span>
                  {MATIERES_META[ligne.matiere].label}
                </span>
                <span className="font-mono text-[0.72rem] text-ink-muted">
                  {ligne.chapitres} chap. · {ligne.exercices} ex.
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass rounded-2xl p-4">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {fr.admin.parNiveau}
          </h2>
          <ul className="mt-3 space-y-2">
            {stats.parNiveau.map((ligne) => (
              <li
                key={ligne.niveau}
                className="flex items-center justify-between gap-2 text-[0.8rem]"
              >
                <span className="text-ink-soft">{NIVEAU_LABELS[ligne.niveau]}</span>
                <span className="font-mono text-[0.72rem] text-ink-muted">
                  {ligne.chapitres} {fr.admin.chapitres.toLowerCase()}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="text-[0.7rem] leading-relaxed text-ink-muted">
        {fr.admin.statistiquesAide} {fr.admin.aucuneStat}
      </p>

      <nav className="flex flex-wrap gap-2">
        {ORDRE_MATIERES.map((matiere) => (
          <Link
            key={matiere}
            href={`/admin/contenu?matiere=${matiere}`}
            className="rounded-full border border-line px-3 py-1.5 text-[0.74rem] text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            {MATIERES_META[matiere].label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
