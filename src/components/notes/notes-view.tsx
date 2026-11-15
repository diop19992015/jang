"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Download,
  NotebookPen,
  Plus,
  Search,
  Sparkles,
  Tag,
} from "lucide-react";

import { NotesEditor } from "@/components/notes/notes-editor";
import { NotesList } from "@/components/notes/notes-panel";
import { useContent } from "@/components/providers/content-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useUi } from "@/components/providers/ui-provider";
import { PageHeader } from "@/components/shell/app-shell";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Chip, EmptyState } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { cn } from "@/lib/utils";

function download(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function NotesView() {
  const { notes, activeId, setActiveId, createNote, syncState } = useNotes();
  const { chapitres } = useContent();
  const { toast } = useUi();

  const [query, setQuery] = useState("");
  const [etiquette, setEtiquette] = useState<string | null>(null);
  const [mobileEditor, setMobileEditor] = useState(false);

  const etiquettes = useMemo(
    () => Array.from(new Set(notes.flatMap((note) => note.etiquettes))).sort(),
    [notes],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return [...notes]
      .sort((a, b) => {
        if (a.epinglee !== b.epinglee) return a.epinglee ? -1 : 1;
        return b.updatedAt.localeCompare(a.updatedAt);
      })
      .filter((note) => {
        if (etiquette && !note.etiquettes.includes(etiquette)) return false;
        if (!needle) return true;
        return `${note.titre} ${note.contenu} ${note.etiquettes.join(" ")}`
          .toLowerCase()
          .includes(needle);
      });
  }, [notes, query, etiquette]);

  // Ouvre d'office la première note visible : le panneau d'édition n'est
  // jamais vide alors qu'une note existe.
  const active = notes.find((note) => note.id === activeId) ?? filtered[0] ?? null;

  const nouvelle = () => {
    createNote({});
    setMobileEditor(true);
  };

  const exporterTout = () => {
    if (!notes.length) {
      toast(fr.notes.vide);
      return;
    }
    const now = new Date();
    const contenu = [
      `# ${fr.notes.title} — ${fr.app.name}`,
      "",
      `_${fr.app.name} · ${now.toLocaleDateString("fr-SN")}_`,
      "",
      ...notes
        .slice()
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
        .map((note) => {
          const chapitre = chapitres.find((item) => item.id === note.chapitreId);
          return [
            `## ${note.titre || fr.notes.nouvelle}`,
            "",
            chapitre ? `> ${fr.commun.chapitre} : ${chapitre.titre}\n` : "",
            note.etiquettes.length ? `Étiquettes : ${note.etiquettes.join(", ")}\n` : "",
            note.contenu,
            "",
          ]
            .filter(Boolean)
            .join("\n");
        }),
    ].join("\n");
    download("jang-notes.md", contenu);
    toast(fr.reglages.donneesExportees, "success");
  };

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow={syncState === "saved" ? fr.notes.sauvegarde : fr.notes.sauvegardeEnCours}
        title={fr.notes.title}
        description={fr.notes.subtitle}
        breadcrumb={[{ label: fr.nav.tableau, href: "/tableau-de-bord" }, { label: fr.nav.notes }]}
        actions={
          <>
            <Button variant="ghost" size="sm" onClick={exporterTout}>
              <Download size={14} aria-hidden="true" />
              {fr.notes.exporterTout}
            </Button>
            <Button size="sm" onClick={nouvelle}>
              <Plus size={14} aria-hidden="true" />
              {fr.notes.nouvelle}
            </Button>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[20rem_minmax(0,1fr)]">
        {/* Liste */}
        <GlassCard
          className={cn(
            "flex min-h-0 flex-col p-3",
            mobileEditor ? "hidden lg:flex" : "flex",
          )}
        >
          <div className="relative">
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
              className="input py-1.5 pl-8 text-[0.78rem]"
            />
          </div>

          {etiquettes.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              <Chip active={etiquette === null} onClick={() => setEtiquette(null)}>
                {fr.notes.tout}
              </Chip>
              {etiquettes.slice(0, 8).map((tag) => (
                <Chip
                  key={tag}
                  active={etiquette === tag}
                  onClick={() => setEtiquette(etiquette === tag ? null : tag)}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          )}

          <p className="mt-2 flex items-center gap-1.5 px-1 text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
            <Tag size={10} aria-hidden="true" />
            {fr.notes.count.replace("{n}", String(filtered.length))}
          </p>

          <div className="mt-1 min-h-0 flex-1 overflow-y-auto pr-0.5">
            {filtered.length === 0 ? (
              <div className="px-1 py-8 text-center">
                <p className="text-[0.8rem] text-ink-muted">{fr.notes.vide}</p>
                <button
                  type="button"
                  onClick={nouvelle}
                  className="mt-2 text-[0.74rem] text-[var(--accent)]"
                >
                  {fr.notes.nouvelle}
                </button>
              </div>
            ) : (
              <NotesList
                notes={filtered}
                activeId={active?.id ?? null}
                onSelect={(id) => {
                  setActiveId(id);
                  setMobileEditor(true);
                }}
              />
            )}
          </div>
        </GlassCard>

        {/* Éditeur */}
        <GlassCard
          className={cn(
            "flex min-h-[70vh] flex-col overflow-hidden",
            mobileEditor ? "flex" : "hidden lg:flex",
          )}
        >
          {active ? (
            <>
              <button
                type="button"
                onClick={() => setMobileEditor(false)}
                className="flex items-center gap-1.5 border-b border-line px-3 py-2 text-left text-[0.72rem] text-ink-muted transition-colors hover:text-ink lg:hidden"
              >
                <ArrowLeft size={13} aria-hidden="true" />
                {fr.notes.retour}
              </button>
              <NotesEditor
                key={active.id}
                note={active}
                onBack={() => setMobileEditor(false)}
              />
            </>
          ) : (
            <EmptyState
              icon={<NotebookPen size={20} aria-hidden="true" />}
              title={fr.notes.vide}
              description={fr.notes.videTexte}
              action={
                <Button size="sm" onClick={nouvelle}>
                  <Sparkles size={14} aria-hidden="true" />
                  {fr.notes.nouvelle}
                </Button>
              }
            />
          )}
        </GlassCard>
      </div>

      <p className="text-[0.68rem] text-ink-muted">
        {fr.notes.aide} · {fr.app.demoNotice}
      </p>
    </div>
  );
}
