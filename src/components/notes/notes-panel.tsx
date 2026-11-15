"use client";

import { NotebookPen, Plus, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { NotesEditor } from "@/components/notes/notes-editor";
import { useContent } from "@/components/providers/content-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useUi } from "@/components/providers/ui-provider";
import { SidePanel } from "@/components/ui/modal";
import { fr } from "@/lib/i18n/fr";
import type { Note } from "@/lib/types";
import { cn, formatRelative, truncate } from "@/lib/utils";

export function NotesList({
  notes,
  activeId,
  onSelect,
  showChapitre = true,
}: {
  notes: Note[];
  activeId: string | null;
  onSelect: (id: string) => void;
  showChapitre?: boolean;
}) {
  const { chapitres } = useContent();
  const pinned = notes.filter((note) => note.epinglee);
  const others = notes.filter((note) => !note.epinglee);

  const renderGroup = (label: string, entries: Note[]) => {
    if (!entries.length) return null;
    return (
      <div className="mb-2">
        <p className="px-2 pb-1 pt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          {label}
        </p>
        <ul className="space-y-1">
          {entries.map((note) => {
            const chapitre = chapitres.find((item) => item.id === note.chapitreId);
            return (
              <li key={note.id}>
                <button
                  type="button"
                  onClick={() => onSelect(note.id)}
                  aria-current={note.id === activeId ? "true" : undefined}
                  className={cn(
                    "w-full rounded-xl border px-2.5 py-2 text-left transition-colors",
                    note.id === activeId
                      ? "border-[var(--border-accent)] bg-[var(--accent-soft)]"
                      : "border-line bg-[var(--surface)] hover:border-line-strong",
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {note.epinglee && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    )}
                    <span className="min-w-0 flex-1 truncate text-[0.78rem] font-medium text-ink">
                      {note.titre || fr.notes.nouvelle}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-[0.66rem] text-ink-muted">
                    {truncate(note.contenu, 70) || fr.notes.vide}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-[0.6rem] text-ink-muted">
                    <span>{formatRelative(note.updatedAt)}</span>
                    {showChapitre && chapitre && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{chapitre.titre}</span>
                      </>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {renderGroup(fr.notes.epinglees, pinned)}
      {renderGroup(pinned.length ? fr.notes.autres : fr.notes.count.replace("{n}", String(notes.length)), others)}
    </div>
  );
}

export function NotesPanel() {
  const { notesOpen, setNotesOpen } = useUi();
  const { notes, activeId, setActiveId, createNote, syncState } = useNotes();
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(false);

  const active = notes.find((note) => note.id === activeId) ?? null;

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const sorted = [...notes].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    if (!needle) return sorted;
    return sorted.filter((note) =>
      `${note.titre} ${note.contenu} ${note.etiquettes.join(" ")}`
        .toLowerCase()
        .includes(needle),
    );
  }, [notes, query]);

  return (
    <SidePanel
      open={notesOpen}
      onClose={() => setNotesOpen(false)}
      title={fr.notes.title}
      subtitle={active ? truncate(active.titre, 46) : syncState === "saved" ? fr.notes.sauvegarde : fr.notes.sauvegardeEnCours}
      icon={<NotebookPen size={17} aria-hidden="true" />}
      headerActions={
        <button
          type="button"
          onClick={() => {
            createNote({});
            setEditing(true);
          }}
          className="icon-btn h-8 w-8"
          aria-label={fr.notes.nouvelle}
          title={fr.notes.nouvelle}
        >
          <Plus size={15} aria-hidden="true" />
        </button>
      }
    >
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-2.5">
        {active && editing ? (
          <NotesEditor
            note={active}
            compact
            onBack={() => setEditing(false)}
          />
        ) : (
          <>
            <div className="relative mb-2">
              <Search
                size={13}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={fr.notes.rechercher}
                aria-label={fr.notes.rechercher}
                className="input py-1.5 pl-8 text-[0.76rem]"
              />
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center px-3 py-10 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Sparkles size={19} aria-hidden="true" />
                </span>
                <p className="mt-3 text-[0.86rem] font-medium text-ink">{fr.notes.vide}</p>
                <p className="mt-1 max-w-[16rem] text-[0.72rem] leading-relaxed text-ink-muted">
                  {fr.notes.videTexte}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    createNote({});
                    setEditing(true);
                  }}
                  className="mt-3 inline-flex items-center gap-1 rounded-full bg-[var(--accent-strong)] px-3 py-1.5 text-[0.72rem] font-semibold text-[var(--accent-contrast)]"
                >
                  <Plus size={12} aria-hidden="true" />
                  {fr.notes.nouvelle}
                </button>
              </div>
            ) : (
              <NotesList
                notes={filtered}
                activeId={activeId}
                showChapitre={false}
                onSelect={(id) => {
                  setActiveId(id);
                  setEditing(true);
                }}
              />
            )}
          </>
        )}
      </div>

      {active && !editing && (
        <div className="border-t border-line p-2">
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="w-full rounded-xl bg-[var(--accent-strong)] py-2 text-[0.76rem] font-semibold text-[var(--accent-contrast)]"
          >
            {fr.actions.modifier}
          </button>
        </div>
      )}
    </SidePanel>
  );
}
