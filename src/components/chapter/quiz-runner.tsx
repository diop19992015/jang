"use client";

import { useState } from "react";
import {
  Check,
  CircleCheck,
  CircleAlert,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";

import { Markdown } from "@/components/markdown/markdown";
import { useProgress } from "@/components/providers/progress-provider";
import { Button } from "@/components/ui/button";
import { fr } from "@/lib/i18n/fr";
import { cn, formatScore } from "@/lib/utils";
import type { QuizQuestion } from "@/lib/types";

const CONFETTI_PIECES = Array.from({ length: 26 }, (_, index) => {
  const value = (multiplier: number, offset = 0) =>
    ((index * multiplier + offset) % 101) / 100;

  return {
    id: index,
    left: value(37) * 100,
    delay: value(61, 11) * 0.6,
    duration: 1.6 + value(73, 29) * 1.4,
    rotate: value(47, 7) * 360,
    color: ["var(--accent)", "#34d399", "#fbbf24", "#f472b6"][index % 4],
    size: 5 + value(89, 17) * 5,
  };
});

function Confetti() {

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {CONFETTI_PIECES.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece absolute top-0 block rounded-[2px]"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size * 1.6,
            background: piece.color,
            transform: `rotate(${piece.rotate}deg)`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function QuizRunner({
  chapitreId,
  questions,
}: {
  chapitreId: string;
  questions: QuizQuestion[];
}) {
  const { recordQuiz, progress } = useProgress();
  const [index, setIndex] = useState(0);
  const [choix, setChoix] = useState<number | null>(null);
  const [valide, setValide] = useState(false);
  const [score, setScore] = useState(0);
  const [termine, setTermine] = useState(false);

  const question = questions[index];
  const record = progress.quiz[chapitreId];
  const reussi = questions.length > 0 && score / questions.length >= 0.75;

  if (!questions.length) {
    return <p className="text-[0.84rem] text-ink-muted">{fr.commun.aucuneDonnee}</p>;
  }

  const valider = () => {
    if (choix === null) return;
    setValide(true);
    if (choix === question.bonneReponse) setScore((current) => current + 1);
  };

  const suivant = () => {
    if (index + 1 >= questions.length) {
      const finalScore = score;
      recordQuiz(chapitreId, finalScore, questions.length);
      setTermine(true);
      return;
    }
    setIndex((current) => current + 1);
    setChoix(null);
    setValide(false);
  };

  const recommencer = () => {
    setIndex(0);
    setChoix(null);
    setValide(false);
    setScore(0);
    setTermine(false);
  };

  if (termine) {
    const pourcentage = Math.round((score / questions.length) * 100);
    return (
      <div className="glass relative overflow-hidden p-6 text-center">
        {reussi && <Confetti />}
        <div className="relative">
          <span
            className={cn(
              "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl",
              reussi
                ? "bg-emerald-400/15 text-emerald-300"
                : pourcentage >= 50
                  ? "bg-amber-400/15 text-amber-300"
                  : "bg-red-400/10 text-red-300",
            )}
          >
            {reussi ? <CircleCheck size={26} /> : <Sparkles size={24} />}
          </span>
          <p className="mt-3 font-display text-2xl font-semibold text-ink">
            {formatScore(score, questions.length)}
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">
            {reussi ? fr.commun.reussite : pourcentage >= 50 ? fr.commun.partiel : fr.commun.echec}
          </p>
          <p className="mx-auto mt-1.5 max-w-sm text-[0.82rem] leading-relaxed text-ink-muted">
            {reussi
              ? fr.commun.reussiteTexte
              : pourcentage >= 50
                ? fr.commun.partielTexte
                : fr.commun.echecTexte}
          </p>
          <p className="mt-2 text-[0.72rem] text-ink-muted">
            {score} / {questions.length} {fr.commun.questions}
          </p>
          <div className="mt-5 flex justify-center gap-2">
            <Button variant="ghost" onClick={recommencer}>
              <RotateCcw size={14} aria-hidden="true" />
              {fr.actions.recommencer}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass overflow-hidden">
      <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2.5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          {fr.commun.quiz} · {index + 1} / {questions.length}
        </p>
        <div className="flex gap-1" aria-hidden="true">
          {questions.map((_, position) => (
            <span
              key={position}
              className={cn(
                "h-1.5 w-4 rounded-full transition-colors",
                position < index
                  ? "bg-[var(--accent)]"
                  : position === index
                    ? "bg-[var(--accent-strong)]"
                    : "bg-line-strong",
              )}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <Markdown compact>{question.enonce}</Markdown>

        <div className="mt-3 space-y-1.5" role="radiogroup" aria-label={fr.commun.quiz}>
          {question.options.map((option, position) => {
            const selectionne = choix === position;
            const bonne = valide && position === question.bonneReponse;
            const mauvaise = valide && selectionne && position !== question.bonneReponse;
            return (
              <button
                key={position}
                type="button"
                role="radio"
                aria-checked={selectionne}
                disabled={valide}
                onClick={() => setChoix(position)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-[0.82rem] transition-colors",
                  bonne && "border-emerald-400/50 bg-emerald-400/10 text-ink",
                  mauvaise && "border-red-400/50 bg-red-400/10 text-ink",
                  !valide && selectionne && "border-[var(--border-accent)] bg-[var(--accent-soft)]",
                  !valide && !selectionne && "border-line bg-[var(--surface)] hover:border-line-strong",
                  valide && !bonne && !mauvaise && "border-line opacity-60",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.6rem] font-semibold",
                    bonne
                      ? "border-emerald-400/50 bg-emerald-400/20 text-emerald-300"
                      : mauvaise
                        ? "border-red-400/50 bg-red-400/20 text-red-300"
                        : selectionne
                          ? "border-[var(--border-accent)] text-[var(--accent)]"
                          : "border-line text-ink-muted",
                  )}
                >
                  {bonne ? <Check size={11} /> : mauvaise ? <X size={11} /> : String.fromCharCode(65 + position)}
                </span>
                <span className="min-w-0 flex-1">
                  <Markdown inline>{option}</Markdown>
                </span>
              </button>
            );
          })}
        </div>

        {valide && (
          <div className="mt-3 rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5">
            <p className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-ink">
              {choix === question.bonneReponse ? (
                <>
                  <CircleCheck size={13} className="text-emerald-400" aria-hidden="true" />
                  {fr.commun.bonneReponse}
                </>
              ) : (
                <>
                  <CircleAlert size={13} className="text-red-400" aria-hidden="true" />
                  {fr.commun.mauvaiseReponse}
                </>
              )}
            </p>
            {question.explication && (
              <div className="mt-1">
                <Markdown compact>{question.explication}</Markdown>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
        <span className="text-[0.7rem] text-ink-muted">
          {fr.commun.score} : {score}/{questions.length}
        </span>
        {!valide ? (
          <Button size="sm" onClick={valider} disabled={choix === null}>
            {fr.actions.valider}
          </Button>
        ) : (
          <Button size="sm" onClick={suivant}>
            {index + 1 >= questions.length ? fr.actions.terminer : fr.actions.questionSuivante}
          </Button>
        )}
      </div>

      {record && !termine && (
        <p className="border-t border-line px-4 py-2 text-[0.66rem] text-ink-muted">
          {fr.commun.score} précédent : {formatScore(record.score, record.total)}
        </p>
      )}
    </div>
  );
}
