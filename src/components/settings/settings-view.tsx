"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Database,
  Download,
  Info,
  Palette,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trash2,
  Type,
  User,
  Zap,
} from "lucide-react";

import { useAi } from "@/components/providers/ai-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { useProgress } from "@/components/providers/progress-provider";
import { useSettings } from "@/components/providers/settings-provider";
import { useUi } from "@/components/providers/ui-provider";
import { PageHeader } from "@/components/shell/app-shell";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { NIVEAUX, SERIES, niveauADesSeries, type NiveauId, type SerieId } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const NIVEAUX_OPTIONS: NiveauId[] = [...NIVEAUX];

function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap gap-1 rounded-xl border border-line bg-[var(--surface)] p-1"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
          className={cn(
            "flex-1 rounded-lg px-2.5 py-1.5 text-[0.74rem] font-medium transition-colors",
            value === option.value
              ? "bg-[var(--accent-strong)] text-[var(--accent-contrast)]"
              : "text-ink-muted hover:text-ink",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Section({
  icon,
  title,
  description,
  children,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
            {icon}
          </span>
          <div>
            <h2 className="font-display text-[1rem] font-semibold text-ink">{title}</h2>
            {description && (
              <p className="mt-0.5 text-[0.74rem] leading-relaxed text-ink-muted">
                {description}
              </p>
            )}
          </div>
        </div>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </GlassCard>
  );
}

export function SettingsView() {
  const router = useRouter();
  const { profile, updateProfile, resetProfile } = useProfile();
  const { settings, lite, autoLite, setSetting, reset: resetSettings } = useSettings();
  const { progress, reset: resetProgress } = useProgress();
  const { notes, reset: resetNotes } = useNotes();
  const { conversations, remaining } = useAi();
  const { toast } = useUi();

  const [prenom, setPrenom] = useState(profile?.prenom ?? "");
  const [niveau, setNiveau] = useState<NiveauId>(profile?.niveau ?? "terminale");
  const [serie, setSerie] = useState<SerieId | null>(profile?.serie ?? null);
  const [dateExamen, setDateExamen] = useState(profile?.dateExamen ?? "");
  const [objectif, setObjectif] = useState(profile?.objectif ?? "");
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const chapitresMaitrises = useMemo(
    () => Object.values(progress.statuts).filter((statut) => statut === "maitrise").length,
    [progress.statuts],
  );

  const enregistrerParcours = () => {
    updateProfile({
      prenom: prenom.trim(),
      niveau,
      serie: niveauADesSeries(niveau) ? serie : null,
      dateExamen: dateExamen || null,
      objectif: objectif.trim() || null,
    });
    toast(fr.reglages.parcoursEnregistre, "success");
  };

  const exporterDonnees = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      profile,
      progress,
      notes,
      settings,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jang-sauvegarde.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast(fr.reglages.donneesExportees, "success");
  };

  const effacerProgression = () => {
    if (!window.confirm(fr.reglages.confirmerProgression)) return;
    resetProgress();
    toast(fr.reglages.progressionEffacee, "success");
  };

  const effacerTout = () => {
    if (!window.confirm(fr.reglages.effacerConfirmer)) return;
    resetProgress();
    resetNotes();
    resetSettings();
    resetProfile();
    toast(fr.reglages.donneesEffacees, "success");
    router.replace("/commencer");
  };

  const installer = async () => {
    if (!installEvent) return;
    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    if (choice.outcome === "accepted") {
      toast(fr.reglages.installer, "success");
      setInstallEvent(null);
    }
  };

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow={profile ? `${fr.niveaux[profile.niveau]}${profile.serie ? ` · ${profile.serie}` : ""}` : undefined}
        title={fr.reglages.title}
        description={fr.reglages.subtitle}
        breadcrumb={[{ label: fr.nav.tableau, href: "/tableau-de-bord" }, { label: fr.nav.reglages }]}
        actions={
          <Badge tone="success">
            <ShieldCheck size={11} className="mr-1 inline" aria-hidden="true" />
            {fr.accueil.footerPrivacy}
          </Badge>
        }
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Section
          icon={<Palette size={17} aria-hidden="true" />}
          title={fr.reglages.apparence}
          description={fr.reglages.apparenceAide}
        >
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-soft">
                {fr.reglages.theme}
                {lite && (
                  <span className="inline-flex items-center gap-1 text-[0.62rem] text-ink-muted">
                    <Zap size={10} aria-hidden="true" />
                    {fr.reglages.modeLegerActif}
                  </span>
                )}
              </p>
              <Segmented
                label={fr.reglages.theme}
                value={settings.theme}
                onChange={(value) => setSetting("theme", value)}
                options={[
                  { value: "sombre", label: fr.reglages.themeSombre },
                  { value: "clair", label: fr.reglages.themeClair },
                  { value: "systeme", label: fr.reglages.themeSysteme },
                ]}
              />
            </div>

            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-soft">
                <Type size={12} aria-hidden="true" />
                {fr.reglages.tailleTexte}
              </p>
              <Segmented
                label={fr.reglages.tailleTexte}
                value={settings.tailleTexte}
                onChange={(value) => setSetting("tailleTexte", value)}
                options={[
                  { value: "petit", label: fr.reglages.petit },
                  { value: "normal", label: fr.reglages.normal },
                  { value: "grand", label: fr.reglages.grand },
                ]}
              />
            </div>

            <div>
              <p className="mb-1.5 text-[0.78rem] font-medium text-ink-soft">
                {fr.reglages.animations}
              </p>
              <Segmented
                label={fr.reglages.animations}
                value={settings.animations}
                onChange={(value) => setSetting("animations", value)}
                options={[
                  { value: "auto", label: fr.reglages.animationsAuto },
                  { value: "reduites", label: fr.reglages.animationsReduites },
                ]}
              />
            </div>

            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-soft">
                <Zap size={12} aria-hidden="true" />
                {fr.reglages.modeLeger}
              </p>
              <Segmented
                label={fr.reglages.modeLeger}
                value={settings.modeLeger}
                onChange={(value) => setSetting("modeLeger", value)}
                options={[
                  { value: "auto", label: fr.reglages.modeAuto },
                  { value: "actif", label: fr.reglages.modeActif },
                  { value: "inactif", label: fr.reglages.modeInactif },
                ]}
              />
              <p className="mt-1.5 text-[0.66rem] leading-relaxed text-ink-muted">
                {fr.reglages.modeLegerAide}
              </p>
              {autoLite && (
                <p className="mt-1 inline-flex items-center gap-1 text-[0.66rem] text-emerald-300">
                  <Check size={11} aria-hidden="true" />
                  {fr.reglages.modeLegerDetecte}
                </p>
              )}
            </div>
          </div>
        </Section>

        <Section
          icon={<User size={17} aria-hidden="true" />}
          title={fr.reglages.parcours}
          description={fr.commencer.subtitle}
          action={
            <Badge tone={profile?.examen === "BAC" ? "accent" : "neutral"}>
              {profile?.examen ?? "—"}
            </Badge>
          }
        >
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-[0.72rem] text-ink-muted">
                {fr.reglages.prenom}
              </span>
              <input
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
                className="input"
                maxLength={40}
                placeholder={fr.commencer.prenomPlaceholder}
              />
            </label>

            <div className="grid gap-2 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-[0.72rem] text-ink-muted">
                  {fr.reglages.niveau}
                </span>
                <select
                  value={niveau}
                  onChange={(event) => {
                    const next = event.target.value as NiveauId;
                    setNiveau(next);
                    if (!niveauADesSeries(next)) setSerie(null);
                    else if (!serie) setSerie("S1");
                  }}
                  className="input py-1.5 text-[0.8rem]"
                >
                  {NIVEAUX_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {fr.niveaux[option]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-[0.72rem] text-ink-muted">
                  {fr.reglages.serie}
                </span>
                <select
                  value={serie ?? ""}
                  onChange={(event) =>
                    setSerie((event.target.value || null) as SerieId | null)
                  }
                  disabled={!niveauADesSeries(niveau)}
                  className="input py-1.5 text-[0.8rem] disabled:opacity-50"
                >
                  <option value="">{fr.series.aucune}</option>
                  {SERIES.map((option) => (
                    <option key={option} value={option}>
                      {fr.series[option]}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 flex items-center gap-1 text-[0.72rem] text-ink-muted">
                  <CalendarDays size={11} aria-hidden="true" />
                  {fr.reglages.dateExamen}
                </span>
                <input
                  type="date"
                  value={dateExamen ?? ""}
                  onChange={(event) => setDateExamen(event.target.value)}
                  className="input py-1.5 text-[0.8rem]"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-[0.72rem] text-ink-muted">
                  {fr.reglages.objectif}
                </span>
                <input
                  value={objectif}
                  onChange={(event) => setObjectif(event.target.value)}
                  className="input py-1.5 text-[0.8rem]"
                  placeholder={fr.commencer.objectifPlaceholder}
                  maxLength={80}
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
              <Button size="sm" onClick={enregistrerParcours}>
                <Check size={14} aria-hidden="true" />
                {fr.actions.enregistrer}
              </Button>
              <Button variant="quiet" size="sm" onClick={() => router.push("/commencer")}>
                {fr.commencer.modifier}
              </Button>
            </div>
          </div>
        </Section>

        <Section
          icon={<Database size={17} aria-hidden="true" />}
          title={fr.reglages.compte}
          description={fr.reglages.donneesAide}
          action={<Badge tone="demo">{fr.reglages.compteDemo}</Badge>}
        >
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5">
                <p className="font-display text-lg font-semibold text-ink">{notes.length}</p>
                <p className="text-[0.64rem] uppercase tracking-[0.12em] text-ink-muted">
                  {fr.commun.notes}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5">
                <p className="font-display text-lg font-semibold text-ink">
                  {conversations.length}
                </p>
                <p className="text-[0.64rem] uppercase tracking-[0.12em] text-ink-muted">
                  {fr.ai.historique}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5">
                <p className="font-display text-lg font-semibold text-ink">
                  {chapitresMaitrises}
                </p>
                <p className="text-[0.64rem] uppercase tracking-[0.12em] text-ink-muted">
                  {fr.tableau.chapitresMaitrises}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5">
                <p className="font-display text-lg font-semibold text-ink">{remaining}</p>
                <p className="text-[0.64rem] uppercase tracking-[0.12em] text-ink-muted">
                  {fr.reglages.quotaIa}
                </p>
              </div>
            </div>

            <p className="text-[0.68rem] leading-relaxed text-ink-muted">
              {fr.reglages.compteAide}
            </p>

            <div className="flex flex-wrap gap-2 border-t border-line pt-3">
              <Button variant="ghost" size="sm" onClick={exporterDonnees}>
                <Download size={13} aria-hidden="true" />
                {fr.reglages.exporterDonnees}
              </Button>
              <Button variant="quiet" size="sm" onClick={effacerProgression}>
                <RotateCcw size={13} aria-hidden="true" />
                {fr.reglages.effacerProgression}
              </Button>
              <Button
                variant="quiet"
                size="sm"
                onClick={effacerTout}
                className="text-red-300 hover:text-red-200"
              >
                <Trash2 size={13} aria-hidden="true" />
                {fr.reglages.effacerDonnees}
              </Button>
            </div>
          </div>
        </Section>

        <Section
          icon={<Smartphone size={17} aria-hidden="true" />}
          title={fr.reglages.application}
          description={fr.reglages.installerAide}
        >
          <div className="space-y-3">
            {installEvent ? (
              <Button size="sm" onClick={installer}>
                <Download size={14} aria-hidden="true" />
                {fr.reglages.installer}
              </Button>
            ) : (
              <p className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5 text-[0.72rem] leading-relaxed text-ink-muted">
                {fr.reglages.installNonDisponible}
              </p>
            )}

            <div className="flex items-start gap-2 rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5">
              <Info size={13} className="mt-0.5 shrink-0 text-ink-muted" aria-hidden="true" />
              <p className="text-[0.7rem] leading-relaxed text-ink-muted">
                {fr.reglages.aProposTexte}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-[0.7rem] text-ink-muted">
              <span>
                {fr.reglages.version} 0.1.0 · {fr.app.nameFull}
              </span>
              <Link
                href="/admin"
                className="inline-flex items-center gap-1 text-[var(--accent)]"
              >
                <Sparkles size={11} aria-hidden="true" />
                {fr.reglages.administrer}
                <ArrowUpRight size={11} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
