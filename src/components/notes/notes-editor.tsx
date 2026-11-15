"use client";

import {
  ArrowLeft,
  Check,
  Download,
  Eye,
  ListChecks,
  Palette,
  Pencil,
  Pin,
  PinOff,
  Printer,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Markdown } from "@/components/markdown/markdown";
import { useContent } from "@/components/providers/content-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useUi } from "@/components/providers/ui-provider";
import { fr } from "@/lib/i18n/fr";
import { NOTE_COULEURS, type Note, type NoteCouleur } from "@/lib/types";
import { cn, formatRelative } from "@/lib/utils";

const PALETTE: { label: string; insert: string; suffix?: string }[] = [
  { label: fr.notes.paletteFraction, insert: "\\frac{a}{b}" },
  { label: fr.notes.paletteIntegrale, insert: "\\int_{a}^{b} f(x)\\,\\mathrm{d}x" },
  { label: fr.notes.paletteLimite, insert: "\\lim_{x \\to 0}" },
  { label: fr.notes.paletteSomme, insert: "\\sum_{k=0}^{n}" },
  { label: fr.notes.paletteRacine, insert: "\\sqrt{x}" },
  { label: fr.notes.paletteVecteur, insert: "\\vec{u}" },
  { label: fr.notes.paletteDerivee, insert: "f'(x)" },
  { label: fr.notes.paletteChimie, insert: "\\ce{CH4 + 2 O2 -> CO2 + 2 H2O}" },
  { label: fr.notes.paletteGras, insert: "**gras**" },
  { label: fr.notes.paletteTitre, insert: "## Titre" },
  { label: fr.notes.paletteListe, insert: "- élément" },
  { label: fr.notes.paletteCheckbox, insert: "- [ ] à faire" },
];

const COULEURS: Record<NoteCouleur, { dot: string; border: string; label: string }> = {
  neutre: { dot: "bg-slate-400", border: "border-line", label: "Neutre" },
  indigo: { dot: "bg-indigo-400", border: "border-indigo-400/40", label: "Indigo" },
  ambre: { dot: "bg-amber-400", border: "border-amber-400/40", label: "Ambre" },
  emeraude: { dot: "bg-emerald-400", border: "border-emerald-400/40", label: "Émeraude" },
};

export function NotesEditor({
  note,
  onBack,
  compact = false,
}: {
  note: Note;
  onBack?: () => void;
  compact?: boolean;
}) {
  const { updateNote, deleteNote, togglePin, exportMarkdown, printNote, syncState } = useNotes();
  const { chapitres } = useContent();
  const { toast } = useUi();

  const [vue, setVue] = useState<"edition" | "apercu">(compact ? "edition" : "edition");
  const [tagInput, setTagInput] = useState("");
  const [showPalette, setShowPalette] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTagInput("");
      setShowPalette(false);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [note.id]);

  const chapitre = useMemo(
    () => chapitres.find((item) => item.id === note.chapitreId) ?? null,
    [chapitres, note.chapitreId],
  );

  const insert = (snippet: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      updateNote(note.id, { contenu: `${note.contenu}${note.contenu ? "\n\n" : ""}${snippet}` });
      return;
    }
    const start = textarea.selectionStart ?? note.contenu.length;
    const end = textarea.selectionEnd ?? start;
    const before = note.contenu.slice(0, start);
    const after = note.contenu.slice(end);
    const block = snippet.startsWith("\\ce{") ? `$$\n${snippet}\n$$` : snippet;
    const next = `${before}${block}${after}`;
    updateNote(note.id, { contenu: next });
    requestAnimationFrame(() => {
      textarea.focus();
      const cursor = start + block.length;
      textarea.setSelectionRange(cursor, cursor);
    });
  };

  const addTag = () => {
    const value = tagInput.trim();
    if (!value) return;
    if (note.etiquettes.includes(value)) {
      setTagInput("");
      return;
    }
    updateNote(note.id, { etiquettes: [...note.etiquettes, value] });
    setTagInput("");
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        {onBack && (
          <button type="button" onClick={onBack} className="icon-btn h-7 w-7" aria-label={fr.notes.retour}>
            <ArrowLeft size={14} aria-hidden="true" />
          </button>
        )}
        <input
          value={note.titre}
          onChange={(event) => updateNote(note.id, { titre: event.target.value })}
          placeholder={fr.notes.titrePlaceholder}
          aria-label={fr.notes.titrePlaceholder}
          className="min-w-0 flex-1 bg-transparent font-display text-[0.92rem] font-semibold text-ink outline-none placeholder:text-ink-muted"
        />
        <button
          type="button"
          onClick={() => togglePin(note.id)}
          className={cn("icon-btn h-7 w-7", note.epinglee && "text-[var(--accent)]")}
          aria-label={note.epinglee ? fr.notes.desepingler : fr.notes.epingler}
          title={note.epinglee ? fr.notes.desepingler : fr.notes.epingler}
        >
          {note.epinglee ? <Pin size={13} /> : <PinOff size={13} />}
        </button>
        <button
          type="button"
          onClick={() => exportMarkdown(note)}
          className="icon-btn h-7 w-7"
          aria-label={fr.notes.exportMd}
          title={fr.notes.exportMd}
        >
          <Download size={13} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => {
            printNote(note);
            toast(fr.resumes.astucePdf);
          }}
          className="icon-btn h-7 w-7"
          aria-label={fr.notes.exportPdf}
          title={fr.notes.exportPdf}
        >
          <Printer size={13} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (window.confirm(fr.notes.confirmerSuppression)) {
              deleteNote(note.id);
              onBack?.();
            }
          }}
          className="icon-btn h-7 w-7 hover:text-red-400"
          aria-label={fr.actions.supprimer}
          title={fr.actions.supprimer}
        >
          <Trash2 size={13} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-1 border-b border-line px-3 py-1.5">
        <div className="flex rounded-lg border border-line p-0.5">
          <button
            type="button"
            onClick={() => setVue("edition")}
            aria-pressed={vue === "edition"}
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[0.66rem] transition-colors",
              vue === "edition" ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-ink-muted",
            )}
          >
            <Pencil size={10} aria-hidden="true" />
            {fr.notes.edition}
          </button>
          <button
            type="button"
            onClick={() => setVue("apercu")}
            aria-pressed={vue === "apercu"}
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[0.66rem] transition-colors",
              vue === "apercu" ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-ink-muted",
            )}
          >
            <Eye size={10} aria-hidden="true" />
            {fr.notes.apercu}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowPalette((current) => !current)}
          aria-expanded={showPalette}
          className={cn(
            "inline-flex items-center gap-1 rounded-lg border border-line px-2 py-1 text-[0.66rem] transition-colors",
            showPalette ? "text-[var(--accent)]" : "text-ink-muted hover:text-ink",
          )}
        >
          <Palette size={11} aria-hidden="true" />
          <span className="hidden sm:inline">{fr.notes.palette}</span>
        </button>

        <button
          type="button"
          onClick={() => insert("- [ ] ")}
          className="icon-btn h-6 w-6 border-transparent bg-transparent"
          aria-label={fr.notes.paletteCheckbox}
          title={fr.notes.paletteCheckbox}
        >
          <ListChecks size={12} aria-hidden="true" />
        </button>

        <div className="ml-auto flex items-center gap-1">
          {NOTE_COULEURS.map((couleur) => (
            <button
              key={couleur}
              type="button"
              onClick={() => updateNote(note.id, { couleur })}
              aria-label={`Couleur ${COULEURS[couleur].label}`}
              aria-pressed={note.couleur === couleur}
              className={cn(
                "h-3.5 w-3.5 rounded-full border-2 transition-transform",
                COULEURS[couleur].dot,
                note.couleur === couleur ? "scale-125 border-ink" : "border-transparent",
              )}
            />
          ))}
        </div>

        <span className="ml-1 shrink-0 text-[0.6rem] text-ink-muted">
          {syncState === "saving" ? fr.notes.sauvegardeEnCours : fr.notes.sauvegarde}
        </span>
      </div>

      {showPalette && (
        <div className="flex flex-wrap gap-1 border-b border-line bg-[var(--surface)] px-3 py-2">
          {PALETTE.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => insert(item.insert)}
              className="rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-soft transition-colors hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
            >
              {item.label}
            </button>
          ))}
          <p className="w-full pt-1 text-[0.6rem] text-ink-muted">{fr.notes.aide}</p>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto">
        {vue === "edition" ? (
          <textarea
            ref={textareaRef}
            value={note.contenu}
            onChange={(event) => updateNote(note.id, { contenu: event.target.value })}
            placeholder={fr.notes.contenuPlaceholder}
            aria-label={fr.notes.contenuPlaceholder}
            spellCheck
            className={cn(
              "h-full min-h-[16rem] w-full resize-none bg-transparent px-3.5 py-3 font-mono text-[0.78rem] leading-[1.75] text-ink-soft outline-none placeholder:text-ink-muted",
              compact && "min-h-[10rem] text-[0.76rem]",
            )}
          />
        ) : (
          <div className="px-3.5 py-3">
            <Markdown compact={compact}>{note.contenu || fr.notes.vide}</Markdown>
          </div>
        )}
      </div>

      <div className="space-y-2 border-t border-line px-3 py-2">
        <div className="flex flex-wrap items-center gap-1">
          <Tag size={11} className="text-ink-muted" aria-hidden="true" />
          {note.etiquettes.map((etiquette) => (
            <span
              key={etiquette}
              className="inline-flex items-center gap-1 rounded-full border border-line bg-[var(--surface)] px-2 py-0.5 text-[0.62rem] text-ink-soft"
            >
              {etiquette}
              <button
                type="button"
                onClick={() =>
                  updateNote(note.id, {
                    etiquettes: note.etiquettes.filter((item) => item !== etiquette),
                  })
                }
                aria-label={`Retirer ${etiquette}`}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                <X size={9} />
              </button>
            </span>
          ))}
          <input
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addTag();
              }
            }}
            placeholder={fr.notes.etiquettesPlaceholder}
            aria-label={fr.notes.etiquettes}
            className="min-w-[7rem] flex-1 bg-transparent py-0.5 text-[0.64rem] text-ink outline-none placeholder:text-ink-muted"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="flex min-w-0 flex-1 items-center gap-1.5 text-[0.62rem] text-ink-muted">
            <span className="shrink-0">{fr.notes.lierChapitre}</span>
            <select
              value={note.chapitreId ?? ""}
              onChange={(event) =>
                updateNote(note.id, { chapitreId: event.target.value || null })
              }
              className="input min-w-0 flex-1 truncate px-1.5 py-0.5 text-[0.64rem]"
            >
              <option value="">{fr.notes.aucunChapitre}</option>
              {chapitres.map((item) => (
                <option key={item.id} value={item.id}>
                  {fr.niveaux[item.niveau]} · {item.titre}
                </option>
              ))}
            </select>
          </label>
          <span className="shrink-0 text-[0.6rem] text-ink-muted">
            {formatRelative(note.updatedAt)}
          </span>
        </div>

        {chapitre && (
          <p className="text-[0.62rem] text-ink-muted">
            <Check size={10} className="mr-1 inline text-emerald-400" aria-hidden="true" />
            {fr.commun.chapitre} : {chapitre.titre}
          </p>
        )}
      </div>
    </div>
  );
}
