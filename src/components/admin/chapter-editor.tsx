"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState, useTransition } from "react";
import {
  AlertTriangle,
  Check,
  Eye,
  FileCode2,
  FilePlus,
  ImagePlus,
  Loader2,
  Plus,
  RotateCcw,
  Save,
  Sigma,
  Table2,
  Trash2,
} from "lucide-react";

import {
  createFileAction,
  deleteChapitreAction,
  deleteFileAction,
  saveFileAction,
  saveMetadataAction,
  uploadImageAction,
} from "@/app/admin/actions";
import { DirectiveBlocks } from "@/components/markdown/directives";
import { Button } from "@/components/ui/button";
import { fr } from "@/lib/i18n/fr";
import { SERIES, type SerieId } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface EditorFile {
  name: string;
  label: string;
  content: string;
}

export interface EditorMeta {
  titre: string;
  accroche: string;
  series: SerieId[];
  ordre: number;
  duree: number;
  coefficient: number;
  demo: boolean;
  enPreparation: boolean;
  statut: "brouillon" | "publie";
  objectifs: string[];
  prerequis: string[];
}

const DIRECTIVES = ["methode", "exemple", "remarque", "erreur", "piege", "definition", "formule"];

const FICHIERS_ATTENDUS = [
  { name: "resume.md", label: "Résumé" },
  { name: "cours.md", label: "Cours complet" },
  { name: "formules.md", label: "Formules" },
  { name: "quiz.md", label: "Quiz" },
];

export function ChapterEditor({
  niveau,
  matiere,
  slug,
  files,
  meta,
}: {
  niveau: string;
  matiere: string;
  slug: string;
  files: EditorFile[];
  meta: EditorMeta;
}) {
  const [drafts, setDrafts] = useState<Record<string, string>>(() =>
    Object.fromEntries(files.map((file) => [file.name, file.content])),
  );
  const [initial, setInitial] = useState<Record<string, string>>(() =>
    Object.fromEntries(files.map((file) => [file.name, file.content])),
  );
  const [active, setActive] = useState(files[0]?.name ?? "chapitre.md");
  const [showPreview, setShowPreview] = useState(true);
  const [status, setStatus] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const [form, setForm] = useState<EditorMeta>(meta);

  const activeFile = files.find((file) => file.name === active) ?? files[0];
  const isMeta = active === "chapitre.md";
  const content = drafts[active] ?? "";
  const dirty = !isMeta && content !== (initial[active] ?? "");
  const absents = FICHIERS_ATTENDUS.filter(
    (fichier) => !files.some((file) => file.name === fichier.name),
  );

  const insert = (snippet: string, cursorOffset = snippet.length) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setDrafts((current) => ({ ...current, [active]: `${current[active] ?? ""}${snippet}` }));
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = content.slice(0, start);
    const after = content.slice(end);
    const next = `${before}${snippet}${after}`;
    setDrafts((current) => ({ ...current, [active]: next }));
    window.requestAnimationFrame(() => {
      textarea.focus();
      const position = start + cursorOffset;
      textarea.setSelectionRange(position, position);
    });
  };

  const wrap = (before: string, after: string, placeholder: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.slice(start, end) || placeholder;
    const next = `${content.slice(0, start)}${before}${selected}${after}${content.slice(end)}`;
    setDrafts((current) => ({ ...current, [active]: next }));
    window.requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  };

  const enregistrer = () => {
    setStatus(null);
    startTransition(async () => {
      if (isMeta) {
        const result = await saveMetadataAction({
          niveau,
          matiere,
          slug,
          meta: {
            titre: form.titre,
            accroche: form.accroche,
            series: form.series,
            ordre: Number(form.ordre),
            duree: Number(form.duree),
            coefficient: Number(form.coefficient),
            demo: form.demo,
            enPreparation: form.enPreparation,
            statut: form.statut,
            objectifs: form.objectifs,
            prerequis: form.prerequis,
          },
        });
        setStatus({
          tone: result.ok ? "ok" : "error",
          text: result.ok ? fr.admin.enregistre : result.message,
        });
        return;
      }

      const result = await saveFileAction({
        niveau,
        matiere,
        slug,
        file: active,
        content,
      });
      if (result.ok) {
        setStatus({ tone: "ok", text: fr.admin.enregistre });
        setDrafts((current) => ({ ...current, [active]: content }));
        // Le brouillon enregistré devient la nouvelle référence.
        setInitial((current) => ({ ...current, [active]: content }));
      } else {
        setStatus({ tone: "error", text: result.message });
      }
    });
  };

  const importerImage = (file: File) => {
    setStatus(null);
    startTransition(async () => {
      const data = new FormData();
      data.set("niveau", niveau);
      data.set("matiere", matiere);
      data.set("slug", slug);
      data.set("image", file);
      const result = await uploadImageAction(data);
      if (result.ok && result.url) {
        insert(`\n![Illustration](${result.url})\n`);
        setStatus({ tone: "ok", text: result.message });
      } else {
        setStatus({ tone: "error", text: result.message });
      }
    });
  };

  const creerFichier = (file: string) => {
    setStatus(null);
    startTransition(async () => {
      const result = await createFileAction({ niveau, matiere, slug, file });
      if (result.ok) {
        window.location.reload();
      } else {
        setStatus({ tone: "error", text: result.message });
      }
    });
  };

  const creerExercice = () => {
    const nom = window.prompt(
      "Identifiant du nouvel exercice (minuscules, chiffres et tirets)",
      "03-nouvel-exercice",
    );
    if (!nom) return;
    const propre = nom
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (!propre) return;
    creerFichier(`exercices/${propre}`);
  };

  const supprimerFichier = () => {
    if (!window.confirm(`Supprimer ${active} ?`)) return;
    startTransition(async () => {
      const result = await deleteFileAction({ niveau, matiere, slug, file: active });
      setStatus({ tone: result.ok ? "ok" : "error", text: result.message });
      if (result.ok) window.location.reload();
    });
  };

  const supprimerChapitre = () => {
    if (!window.confirm("Supprimer définitivement ce chapitre et tous ses fichiers ?")) return;
    const data = new FormData();
    data.set("niveau", niveau);
    data.set("matiere", matiere);
    data.set("slug", slug);
    startTransition(async () => {
      const result = await deleteChapitreAction({ ok: false, message: "" }, data);
      if (result.ok) {
        router.push("/admin/contenu");
      } else {
        setStatus({ tone: "error", text: result.message });
      }
    });
  };

  const tabs = useMemo(
    () =>
      files.map((file) => ({
        ...file,
        dirty: file.name !== "chapitre.md" && (drafts[file.name] ?? "") !== (initial[file.name] ?? ""),
      })),
    [files, drafts, initial],
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link
            href="/admin/contenu"
            className="text-[0.72rem] text-ink-muted transition-colors hover:text-ink"
          >
            ← {fr.admin.contenus}
          </Link>
          <h1 className="mt-1 font-display text-[clamp(1.25rem,1rem+1.4vw,1.65rem)] font-semibold text-ink">
            {form.titre || slug}
          </h1>
          <p className="text-[0.72rem] text-ink-muted">
            {niveau} / {matiere} / {slug}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {dirty && (
            <Button
              variant="quiet"
              size="sm"
              onClick={() => setDrafts((current) => ({ ...current, [active]: initial[active] ?? "" }))}
            >
              <RotateCcw size={13} aria-hidden="true" />
              Annuler
            </Button>
          )}
          <Button size="sm" onClick={enregistrer} disabled={pending || (isMeta ? false : !dirty)}>
            {pending ? (
              <Loader2 size={13} className="animate-spin" aria-hidden="true" />
            ) : (
              <Save size={13} aria-hidden="true" />
            )}
            {fr.admin.enregistrer}
          </Button>
        </div>
      </div>

      {status && (
        <p
          role="status"
          className={cn(
            "flex items-center gap-2 rounded-xl border px-3 py-2 text-[0.76rem]",
            status.tone === "ok"
              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
              : "border-red-400/30 bg-red-500/10 text-red-200",
          )}
        >
          {status.tone === "ok" ? (
            <Check size={13} aria-hidden="true" />
          ) : (
            <AlertTriangle size={13} aria-hidden="true" />
          )}
          {status.text}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-1.5 border-b border-line pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            onClick={() => setActive(tab.name)}
            aria-pressed={active === tab.name}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.74rem] transition-colors",
              active === tab.name
                ? "bg-[var(--accent-strong)] text-[var(--accent-contrast)]"
                : "text-ink-muted hover:bg-[var(--surface)] hover:text-ink",
            )}
          >
            {tab.label}
            {tab.dirty && (
              <span
                className="h-1.5 w-1.5 rounded-full bg-amber-300"
                aria-label="Modifications non enregistrées"
              />
            )}
          </button>
        ))}

        {!isMeta && (
          <div className="ml-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setShowPreview((value) => !value)}
              className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[0.68rem] text-ink-muted transition-colors hover:text-ink lg:hidden"
              aria-pressed={showPreview}
            >
              <Eye size={11} aria-hidden="true" />
              {fr.admin.apercu}
            </button>
            <button
              type="button"
              onClick={supprimerFichier}
              className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[0.68rem] text-ink-muted transition-colors hover:text-red-200"
            >
              <Trash2 size={11} aria-hidden="true" />
              Supprimer
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted">
          Ajouter
        </span>
        {absents.map((fichier) => (
          <button
            key={fichier.name}
            type="button"
            onClick={() => creerFichier(fichier.name)}
            disabled={pending}
            className="inline-flex items-center gap-1 rounded-full border border-dashed border-line px-2.5 py-1 text-[0.68rem] text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:opacity-50"
          >
            <FilePlus size={11} aria-hidden="true" />
            {fichier.label}
          </button>
        ))}
        <button
          type="button"
          onClick={creerExercice}
          disabled={pending}
          className="inline-flex items-center gap-1 rounded-full border border-dashed border-line px-2.5 py-1 text-[0.68rem] text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:opacity-50"
        >
          <FilePlus size={11} aria-hidden="true" />
          Exercice
        </button>
      </div>

      {isMeta ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.titre}
            </span>
            <input
              value={form.titre}
              onChange={(event) => setForm({ ...form, titre: event.target.value })}
              className="input"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.accroche}
            </span>
            <input
              value={form.accroche}
              onChange={(event) => setForm({ ...form, accroche: event.target.value })}
              className="input"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.ordre}
            </span>
            <input
              type="number"
              value={form.ordre}
              onChange={(event) => setForm({ ...form, ordre: Number(event.target.value) })}
              className="input py-1.5 text-[0.8rem]"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.duree}
            </span>
            <input
              type="number"
              value={form.duree}
              onChange={(event) => setForm({ ...form, duree: Number(event.target.value) })}
              className="input py-1.5 text-[0.8rem]"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">Coefficient</span>
            <input
              type="number"
              value={form.coefficient}
              onChange={(event) =>
                setForm({ ...form, coefficient: Number(event.target.value) })
              }
              className="input py-1.5 text-[0.8rem]"
            />
          </label>

          <div className="block">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.serie}
            </span>
            <div className="flex flex-wrap items-center gap-3 pt-1.5">
              {SERIES.map((serie) => (
                <label
                  key={serie}
                  className="inline-flex items-center gap-1.5 text-[0.78rem] text-ink-soft"
                >
                  <input
                    type="checkbox"
                    checked={form.series.includes(serie)}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        series: event.target.checked
                          ? [...form.series, serie]
                          : form.series.filter((value) => value !== serie),
                      })
                    }
                  />
                  {serie}
                </label>
              ))}
            </div>
          </div>

          <label className="block sm:col-span-2">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.objectifs}
            </span>
            <textarea
              value={form.objectifs.join("\n")}
              onChange={(event) =>
                setForm({
                  ...form,
                  objectifs: event.target.value.split("\n").map((line) => line.trim()).filter(Boolean),
                })
              }
              rows={4}
              className="input font-mono text-[0.78rem]"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">
              {fr.admin.prerequis}
            </span>
            <textarea
              value={form.prerequis.join("\n")}
              onChange={(event) =>
                setForm({
                  ...form,
                  prerequis: event.target.value.split("\n").map((line) => line.trim()).filter(Boolean),
                })
              }
              rows={3}
              className="input font-mono text-[0.78rem]"
            />
          </label>

          <label className="inline-flex items-center gap-2 text-[0.78rem] text-ink-soft sm:col-span-2">
            <input
              type="checkbox"
              checked={form.demo}
              onChange={(event) =>
                setForm({
                  ...form,
                  demo: event.target.checked,
                  enPreparation: event.target.checked ? false : form.enPreparation,
                })
              }
            />
            {fr.admin.contenuDemo}
          </label>

          <label className="inline-flex items-center gap-2 text-[0.78rem] text-ink-soft sm:col-span-2">
            <input
              type="checkbox"
              checked={form.enPreparation}
              onChange={(event) =>
                setForm({
                  ...form,
                  enPreparation: event.target.checked,
                  demo: event.target.checked ? false : form.demo,
                })
              }
            />
            {fr.admin.contenuEnPreparation}
          </label>

          <div className="sm:col-span-2">
            <span className="mb-1 block text-[0.72rem] text-ink-muted">{fr.admin.etat}</span>
            <div className="flex flex-wrap gap-1.5">
              {(["brouillon", "publie"] as const).map((statut) => (
                <button
                  key={statut}
                  type="button"
                  onClick={() => setForm({ ...form, statut })}
                  aria-pressed={form.statut === statut}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[0.72rem] transition-colors",
                    form.statut === statut
                      ? statut === "publie"
                        ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                        : "border-amber-400/40 bg-amber-400/10 text-amber-200"
                      : "border-line text-ink-muted hover:text-ink",
                  )}
                >
                  {statut === "publie" ? fr.admin.publie : fr.admin.brouillon}
                </button>
              ))}
            </div>
            <p className="mt-1 text-[0.64rem] leading-snug text-ink-muted">
              Un brouillon reste visible dans cet espace, mais pas pour les élèves.
            </p>
          </div>

          <div className="sm:col-span-2">
            <button
              type="button"
              onClick={supprimerChapitre}
              className="inline-flex items-center gap-1 text-[0.72rem] text-red-300/80 transition-colors hover:text-red-200"
            >
              <Trash2 size={11} aria-hidden="true" />
              Supprimer le chapitre
            </button>
          </div>
        </div>
      ) : (
        <div className={cn("grid gap-3", showPreview && "lg:grid-cols-2")}>
          <div className="flex min-h-0 flex-col">
            <div className="mb-1.5 flex flex-wrap items-center gap-1">
              <ToolbarButton
                label="Titre"
                icon={<FileCode2 size={12} aria-hidden="true" />}
                onClick={() => insert("\n## Titre de section\n\n", 26)}
              />
              <ToolbarButton
                label="Formule"
                icon={<Sigma size={12} aria-hidden="true" />}
                onClick={() => wrap("$", "$", "x^2")}
              />
              <ToolbarButton
                label="Formule centrée"
                icon={<Sigma size={12} aria-hidden="true" />}
                onClick={() => insert("\n$$\nx^2\n$$\n")}
              />
              <ToolbarButton
                label="Tableau"
                icon={<Table2 size={12} aria-hidden="true" />}
                onClick={() =>
                  insert("\n| Colonne | Valeur |\n| --- | --- |\n| A | 1 |\n")
                }
              />
              <ToolbarButton
                label="Encadré"
                icon={<Plus size={12} aria-hidden="true" />}
                onClick={() => insert("\n:::methode Méthode\n\n1. Étape 1\n2. Étape 2\n\n:::\n")}
              />
              <ToolbarButton
                label={fr.admin.image}
                icon={<ImagePlus size={12} aria-hidden="true" />}
                onClick={() => imageRef.current?.click()}
              />
              <select
                aria-label="Insérer un encadré pédagogique"
                onChange={(event) => {
                  const value = event.target.value;
                  if (!value) return;
                  insert(`\n:::${value} ${value.charAt(0).toUpperCase()}${value.slice(1)}\n\nContenu\n\n:::\n`);
                  event.target.value = "";
                }}
                className="rounded-lg border border-line bg-[var(--surface)] px-2 py-1 text-[0.68rem] text-ink-muted"
                defaultValue=""
              >
                <option value="">Encadrés…</option>
                {DIRECTIVES.map((directive) => (
                  <option key={directive} value={directive}>
                    {directive}
                  </option>
                ))}
              </select>
            </div>

            <input
              ref={imageRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              title={fr.admin.imageAide}
              onChange={(event) => {
                const file = event.target.files?.[0];
                event.target.value = "";
                if (file) importerImage(file);
              }}
            />

            <textarea
              ref={textareaRef}
              value={content}
              onChange={(event) =>
                setDrafts((current) => ({ ...current, [active]: event.target.value }))
              }
              spellCheck={false}
              className="min-h-[60vh] w-full flex-1 resize-y rounded-2xl border border-line bg-[var(--bg-elevated)] p-3 font-mono text-[0.78rem] leading-relaxed text-ink-soft outline-none focus:border-[var(--border-accent)]"
              aria-label={`${fr.admin.markdown} — ${activeFile?.label ?? active}`}
            />
            <p className="mt-1 text-right text-[0.64rem] text-ink-muted">
              {content.length} caractères
            </p>
          </div>

          {showPreview && (
            <div className="min-h-[60vh] overflow-y-auto rounded-2xl border border-line bg-[var(--bg-elevated)] p-4">
              <p className="mb-3 text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted">
                {fr.admin.apercu}
              </p>
              {content.trim() ? (
                <DirectiveBlocks markdown={content} compact />
              ) : (
                <p className="text-[0.78rem] text-ink-muted">Aucun contenu.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ToolbarButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-lg border border-line bg-[var(--surface)] px-2 py-1 text-[0.66rem] text-ink-muted transition-colors hover:text-ink"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
