import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Target } from "lucide-react";

import { DirectiveBlocks } from "@/components/markdown/directives";
import { ResumeActions } from "@/components/resumes/resume-actions";
import { Badge } from "@/components/ui/primitives";
import { getChapitre, toMeta } from "@/lib/content/loader";
import { fr } from "@/lib/i18n/fr";
import { formatDate } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}): Promise<Metadata> {
  const { niveau, matiere, slug } = await params;
  const chapitre = getChapitre(niveau, matiere, slug);
  if (!chapitre) return { title: fr.commun.introuvable };
  return {
    title: `${fr.resumes.fiche} — ${chapitre.titre}`,
    description:
      chapitre.accroche ||
      `Fiche de révision : ${chapitre.titre} (${fr.niveaux[chapitre.niveau]} · ${fr.matieres[chapitre.matiere]}).`,
    robots: { index: false, follow: true },
  };
}

export default async function FicheResumePage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}) {
  const { niveau, matiere, slug } = await params;
  const chapitre = getChapitre(niveau, matiere, slug);
  if (!chapitre || !chapitre.hasResume) notFound();

  const meta = toMeta(chapitre);
  const aujourdhui = formatDate(new Date());

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-10 print:max-w-none print:p-0">
      <div className="no-print mb-5">
        <ResumeActions chapitre={meta} markdown={chapitre.resume} />
      </div>

      <article className="glass overflow-hidden rounded-3xl p-5 sm:p-8 print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header className="border-b border-line pb-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-[var(--accent-soft)] font-display text-base font-bold text-[var(--accent)]">
                J
              </span>
              <div className="leading-tight">
                <p className="font-display text-[0.95rem] font-semibold text-ink">Jàng</p>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-muted">
                  {fr.resumes.fiche}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge tone="accent">{fr.matieres[chapitre.matiere]}</Badge>
              <Badge>
                {fr.niveaux[chapitre.niveau]}
                {chapitre.series.length ? ` · ${chapitre.series.join(" / ")}` : ""}
              </Badge>
              {chapitre.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
            </div>
          </div>

          <h1 className="mt-5 font-display text-[clamp(1.6rem,1.2rem+2vw,2.4rem)] font-semibold leading-[1.12] text-ink">
            {chapitre.titre}
          </h1>
          {chapitre.accroche && (
            <p className="mt-2 max-w-2xl text-[0.9rem] leading-relaxed text-ink-muted">
              {chapitre.accroche}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.72rem] text-ink-muted">
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {fr.cours.tempsLecture.replace("{n}", String(chapitre.duree))}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays size={12} aria-hidden="true" />
              {fr.resumes.genereLe.replace("{date}", aujourdhui)}
            </span>
          </div>
        </header>

        {chapitre.objectifs.length > 0 && (
          <section className="mt-5 rounded-2xl border border-line bg-[var(--surface)] px-4 py-3.5 print:bg-white">
            <h2 className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              <Target size={12} aria-hidden="true" />
              {fr.resumes.objectifs}
            </h2>
            <ul className="mt-2 space-y-1">
              {chapitre.objectifs.map((objectif) => (
                <li
                  key={objectif}
                  className="flex gap-1.5 text-[0.8rem] leading-snug text-ink-soft"
                >
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    ·
                  </span>
                  {objectif}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-5">
          <DirectiveBlocks markdown={chapitre.resume} />
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-[0.66rem] text-ink-muted">
          <span>
            {fr.resumes.source} · {fr.niveaux[chapitre.niveau]}
            {chapitre.series.length ? ` ${chapitre.series.join("/")}` : ""}
          </span>
          <span>{fr.app.demoNotice}</span>
        </footer>
      </article>

      <p className="no-print mt-4 text-center text-[0.68rem] text-ink-muted">
        {fr.resumes.astucePdf}
      </p>
    </main>
  );
}
