"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";

import { useProfile } from "@/components/providers/profile-provider";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { fr } from "@/lib/i18n/fr";
import { cn } from "@/lib/utils";
import {
  NIVEAU_LABELS,
  SERIES,
  examenDuNiveau,
  niveauADesSeries,
  type NiveauId,
  type SerieId,
} from "@/lib/types";

/** Courte présentation de chaque série, pour l'étape « série ». */
const SERIE_DETAIL: Record<SerieId, string> = {
  L: "Lettres : français renforcé, philosophie, langues.",
  S1: "Maths renforcées, physique-chimie et SVT.",
  S2: "Sciences expérimentales : SVT dominante.",
  S3: "Maths et physique-chimie en équilibre.",
  S4: "Voie technique : maths appliquées et physique.",
  S5: "Voie technique : organisation des données et gestion.",
};

const NIVEAU_OPTIONS: {
  id: NiveauId;
  label: string;
  detail: string;
  examen: string;
  disabled?: boolean;
}[] = [
  {
    id: "3eme",
    label: NIVEAU_LABELS["3eme"],
    detail: "Préparation du BFEM",
    examen: "BFEM",
  },
  {
    id: "seconde",
    label: NIVEAU_LABELS.seconde,
    detail: "Consolider les bases du lycée",
    examen: "Parcours",
  },
  {
    id: "premiere",
    label: NIVEAU_LABELS.premiere,
    detail: "Monter en puissance avant la Terminale",
    examen: "Parcours",
  },
  {
    id: "terminale",
    label: NIVEAU_LABELS.terminale,
    detail: "Préparation du BAC",
    examen: "BAC",
  },
];

export function OnboardingFlow({
  initialNiveau,
  initialSerie,
}: {
  initialNiveau?: string;
  initialSerie?: string;
}) {
  const router = useRouter();
  const { profile, ready, saveProfile, updateProfile } = useProfile();

  const [step, setStep] = useState(0);
  const [prenom, setPrenom] = useState(profile?.prenom ?? "");
  const [niveau, setNiveau] = useState<NiveauId>(
    (profile?.niveau ?? (initialNiveau as NiveauId) ?? "terminale") as NiveauId,
  );
  const [serie, setSerie] = useState<SerieId | null>(
    (profile?.serie ?? (initialSerie as SerieId) ?? "S1") as SerieId | null,
  );
  const [objectif, setObjectif] = useState(profile?.objectif ?? "");
  const [dateExamen, setDateExamen] = useState(profile?.dateExamen ?? "");
  const [error, setError] = useState<string | null>(null);

  const examen = examenDuNiveau(niveau);
  const aUneSerie = niveauADesSeries(niveau);

  const etapes = useMemo(() => {
    const base: string[] = [fr.commencer.niveau];
    if (aUneSerie) base.push(fr.commencer.serie);
    base.push(fr.commencer.examen);
    return base;
  }, [aUneSerie]);

  const dernier = step === etapes.length - 1;

  const suivant = () => {
    setError(null);
    if (step === 0 && aUneSerie && !serie) {
      setError(fr.commencer.obligatoire);
      return;
    }
    setStep((current) => Math.min(etapes.length - 1, current + 1));
  };

  const precedent = () => {
    setError(null);
    setStep((current) => Math.max(0, current - 1));
  };

  const terminer = () => {
    const payload = {
      prenom: prenom.trim(),
      niveau,
      serie: aUneSerie ? serie : null,
      dateExamen: dateExamen || null,
      examen,
      objectif: objectif.trim() || null,
    };
    if (profile) updateProfile(payload);
    else saveProfile(payload);
    router.push("/tableau-de-bord");
  };

  return (
    <main className="wrap flex min-h-dvh flex-col justify-center py-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-line-strong bg-[var(--accent-soft)] font-display text-xl font-bold text-[var(--accent)]">
            J
          </span>
          <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {fr.app.name}
          </p>
          <h1 className="mt-2 font-display text-[clamp(1.7rem,1.3rem+2vw,2.4rem)] font-semibold leading-tight text-ink">
            {fr.commencer.title}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-[0.88rem] leading-relaxed text-ink-muted">
            {fr.commencer.subtitle}
          </p>
        </div>

        {/* Progression */}
        <ol className="mb-6 flex items-center justify-center gap-2" aria-label="Étapes">
          {etapes.map((label, index) => (
            <li key={label} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full border text-[0.66rem] font-semibold transition-colors",
                  index < step && "border-emerald-400/40 bg-emerald-400/15 text-emerald-300",
                  index === step && "border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]",
                  index > step && "border-line text-ink-muted",
                )}
                aria-current={index === step ? "step" : undefined}
              >
                {index < step ? <Check size={11} /> : index + 1}
              </span>
              <span
                className={cn(
                  "hidden text-[0.7rem] sm:block",
                  index === step ? "text-ink" : "text-ink-muted",
                )}
              >
                {label}
              </span>
              {index < etapes.length - 1 && (
                <span className="ml-1 h-px w-5 bg-line-strong" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <GlassCard strong className="p-5 sm:p-7">
          {step === 0 && (
            <div>
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <GraduationCap size={18} className="text-[var(--accent)]" aria-hidden="true" />
                {fr.commencer.niveau}
              </h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {NIVEAU_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    disabled={option.disabled}
                    aria-pressed={niveau === option.id}
                    onClick={() => {
                      setNiveau(option.id);
                      if (!niveauADesSeries(option.id)) setSerie(null);
                      else if (!serie) setSerie("S1");
                    }}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-left transition-colors",
                      niveau === option.id && !option.disabled
                        ? "border-[var(--border-accent)] bg-[var(--accent-soft)]"
                        : "border-line bg-[var(--surface)] hover:border-line-strong",
                      option.disabled && "cursor-not-allowed opacity-45",
                    )}
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-display text-[0.98rem] font-semibold text-ink">
                        {option.label}
                      </span>
                      <span className="badge">{option.examen}</span>
                    </span>
                    <span className="mt-0.5 block text-[0.74rem] text-ink-muted">
                      {option.detail}
                    </span>
                  </button>
                ))}
              </div>

              <label className="mt-5 block">
                <span className="mb-1.5 block text-[0.76rem] font-medium text-ink-soft">
                  {fr.commencer.prenom}{" "}
                  <span className="text-[0.68rem] font-normal text-ink-muted">
                    ({fr.commun.optionnel})
                  </span>
                </span>
                <input
                  value={prenom}
                  onChange={(event) => setPrenom(event.target.value)}
                  placeholder={fr.commencer.prenomPlaceholder}
                  className="input"
                  maxLength={40}
                  autoComplete="given-name"
                />
                <span className="mt-1 block text-[0.68rem] text-ink-muted">
                  {fr.commencer.prenomAide}
                </span>
              </label>
            </div>
          )}

          {step === 1 && aUneSerie && (
            <div>
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <Sparkles size={18} className="text-[var(--accent)]" aria-hidden="true" />
                {fr.commencer.serie}
              </h2>
              <p className="mt-1 text-[0.78rem] text-ink-muted">{fr.commencer.serieAide}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {SERIES.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={serie === option}
                    onClick={() => setSerie(option)}
                    className={cn(
                      "rounded-2xl border px-4 py-4 text-left transition-colors",
                      serie === option
                        ? "border-[var(--border-accent)] bg-[var(--accent-soft)]"
                        : "border-line bg-[var(--surface)] hover:border-line-strong",
                    )}
                  >
                    <span className="font-display text-lg font-semibold text-ink">
                      {fr.series[option]}
                    </span>
                    <span className="mt-0.5 block text-[0.74rem] leading-relaxed text-ink-muted">
                      {SERIE_DETAIL[option]}
                    </span>
                  </button>
                ))}
              </div>

              <label className="mt-5 block">
                <span className="mb-1.5 block text-[0.76rem] font-medium text-ink-soft">
                  {fr.commencer.objectif}{" "}
                  <span className="text-[0.68rem] font-normal text-ink-muted">
                    ({fr.commun.optionnel})
                  </span>
                </span>
                <input
                  value={objectif}
                  onChange={(event) => setObjectif(event.target.value)}
                  placeholder={fr.commencer.objectifPlaceholder}
                  className="input"
                  maxLength={80}
                />
              </label>
            </div>
          )}

          {dernier && (
            <div>
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <CalendarDays size={18} className="text-[var(--accent)]" aria-hidden="true" />
                {fr.commencer.examen}
              </h2>
              <p className="mt-1 text-[0.78rem] text-ink-muted">{fr.commencer.examenAide}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border-accent)] bg-[var(--accent-soft)] px-4 py-3">
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
                    {fr.commencer.examenType}
                  </p>
                  <p className="mt-0.5 font-display text-lg font-semibold text-ink">
                    {examen ?? fr.commencer.aucunExamen}
                  </p>
                </div>
                <label className="block rounded-2xl border border-line bg-[var(--surface)] px-4 py-3">
                  <span className="text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
                    {fr.commencer.examenDate}
                  </span>
                  <input
                    type="date"
                    value={dateExamen}
                    onChange={(event) => setDateExamen(event.target.value)}
                    className="mt-1 w-full bg-transparent text-[0.88rem] text-ink outline-none"
                    aria-label={fr.commencer.examenDate}
                  />
                </label>
              </div>

              <div className="mt-5 rounded-2xl border border-line bg-[var(--surface)] px-4 py-3">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
                  {fr.commencer.recap}
                </p>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.84rem] text-ink">
                  {prenom.trim() && (
                    <>
                      <span className="font-medium">{prenom.trim()}</span>
                      <span className="text-ink-muted" aria-hidden="true">
                        ·
                      </span>
                    </>
                  )}
                  <span>{fr.niveaux[niveau]}</span>
                  {aUneSerie && serie && (
                    <>
                      <span className="text-ink-muted" aria-hidden="true">
                        ·
                      </span>
                      <span>{fr.series[serie]}</span>
                    </>
                  )}
                  <span className="text-ink-muted" aria-hidden="true">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--accent)]">
                    <Target size={12} aria-hidden="true" />
                    {examen ?? "—"}
                  </span>
                </p>
                {!dateExamen && (
                  <p className="mt-1 text-[0.68rem] text-ink-muted">
                    {fr.commencer.terminerSansDate}
                  </p>
                )}
              </div>
            </div>
          )}

          {error && (
            <p className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-[0.74rem] text-amber-300">
              {error}
            </p>
          )}

          <div className="mt-6 flex items-center justify-between gap-2">
            <Button variant="quiet" onClick={precedent} disabled={step === 0}>
              <ArrowLeft size={15} aria-hidden="true" />
              {fr.actions.retour}
            </Button>
            {dernier ? (
              <Button onClick={terminer} disabled={!ready}>
                {profile ? fr.commencer.modifier : fr.commencer.creer}
                <Check size={15} aria-hidden="true" />
              </Button>
            ) : (
              <Button onClick={suivant}>
                {fr.actions.suivant}
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            )}
          </div>
        </GlassCard>

        <p className="mt-6 text-center text-[0.68rem] leading-relaxed text-ink-muted">
          {fr.accueil.footerPrivacy} · {fr.app.demoNotice.split(".")[0]}.
        </p>
      </div>
    </main>
  );
}
