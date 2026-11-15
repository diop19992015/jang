"use client";

import { useState } from "react";
import {
  ChevronDown,
  Eye,
  EyeOff,
  Lightbulb,
  ListChecks,
  Sparkles,
} from "lucide-react";

import { Markdown } from "@/components/markdown/markdown";
import { useAi } from "@/components/providers/ai-provider";
import { useUi } from "@/components/providers/ui-provider";
import { Badge } from "@/components/ui/primitives";
import { GradeBadge } from "@/components/chapter/difficulty";
import { fr } from "@/lib/i18n/fr";
import { cn } from "@/lib/utils";
import type { Exercice } from "@/lib/types";

export function ExerciseCard({
  exercice,
  chapitreTitre,
  index,
}: {
  exercice: Exercice;
  chapitreTitre?: string;
  index?: number;
}) {
  const [solutionVisible, setSolutionVisible] = useState(false);
  const [indicesVisibles, setIndicesVisibles] = useState(0);
  const { setContext } = useAi();
  const { setAiOpen } = useUi();

  const poserQuestion = (hintOnly: boolean) => {
    setContext({
      niveau: exercice.niveau,
      serie: exercice.series[0] ?? null,
      matiere: exercice.matiere,
      chapitreId: exercice.chapitreId,
      chapitreTitre: chapitreTitre ?? exercice.chapitreSlug,
    });
    setAiOpen(true);
    if (hintOnly) {
      setIndicesVisibles((current) => Math.min(exercice.indices.length, current + 1));
    }
  };

  return (
    <article className="glass overflow-hidden">
      <header className="flex flex-wrap items-start justify-between gap-2 border-b border-line px-4 py-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            {typeof index === "number" && (
              <span className="font-mono text-[0.68rem] text-ink-muted">
                {fr.commun.exercice} {index + 1}
              </span>
            )}
            <h3 className="font-display text-[0.98rem] font-semibold text-ink">{exercice.titre}</h3>
            {exercice.demo && <Badge tone="demo">{fr.commun.demo}</Badge>}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <Badge tone={exercice.type === "bac" || exercice.type === "bfem" ? "accent" : "neutral"}>
              {fr.typesExercice[exercice.type]}
            </Badge>
            <GradeBadge difficulte={exercice.difficulte} />
            {exercice.annee && <Badge>{fr.exercices.annee.replace("{annee}", String(exercice.annee))}</Badge>}
          </div>
        </div>
        <ListChecks size={16} className="mt-1 shrink-0 text-ink-muted" aria-hidden="true" />
      </header>

      <div className="px-4 py-3">
        <p className="mb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          {fr.exercices.enonce}
        </p>
        <Markdown compact>{exercice.enonce}</Markdown>
      </div>

      {exercice.indices.length > 0 && (
        <div className="border-t border-line px-4 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIndicesVisibles((current) => Math.min(exercice.indices.length, current + 1))}
              disabled={indicesVisibles >= exercice.indices.length}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[0.7rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink disabled:opacity-40"
            >
              <Lightbulb size={12} aria-hidden="true" />
              {fr.actions.demanderIndice}
              {indicesVisibles > 0 && (
                <span className="text-ink-muted">
                  {indicesVisibles}/{exercice.indices.length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => poserQuestion(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[0.7rem] text-[var(--accent)] transition-colors hover:border-[var(--border-accent)]"
            >
              <Sparkles size={12} aria-hidden="true" />
              {fr.exercices.correctionIa}
            </button>
          </div>

          {indicesVisibles > 0 && (
            <ol className="mt-2 space-y-1.5">
              {exercice.indices.slice(0, indicesVisibles).map((indice, position) => (
                <li
                  key={indice}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-3 py-2"
                >
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-amber-300">
                    {fr.exercices.indiceUn} {position + 1}
                  </p>
                  <Markdown compact>{indice}</Markdown>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      <div className="border-t border-line px-4 py-2.5">
        <button
          type="button"
          onClick={() => setSolutionVisible((current) => !current)}
          aria-expanded={solutionVisible}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.74rem] font-medium transition-colors",
            solutionVisible
              ? "border border-line text-ink-soft hover:text-ink"
              : "bg-[var(--accent-strong)] text-[var(--accent-contrast)]",
          )}
        >
          {solutionVisible ? <EyeOff size={12} aria-hidden="true" /> : <Eye size={12} aria-hidden="true" />}
          {solutionVisible ? fr.exercices.masquerSolution : fr.exercices.afficherSolution}
          {!solutionVisible && <ChevronDown size={12} aria-hidden="true" />}
        </button>

        {solutionVisible && (
          <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.05] px-3.5 py-2.5">
            <p className="mb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-emerald-300">
              {fr.exercices.solution}
            </p>
            {exercice.solution ? (
              <Markdown compact>{exercice.solution}</Markdown>
            ) : (
              <p className="text-[0.78rem] text-ink-muted">{fr.commun.aucuneDonnee}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
