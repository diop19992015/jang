"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, NotebookPen, Printer } from "lucide-react";

import { useNotes } from "@/components/providers/notes-provider";
import { useUi } from "@/components/providers/ui-provider";
import { fr } from "@/lib/i18n/fr";
import { chapitreHref } from "@/lib/routes";
import type { ChapterMeta } from "@/lib/types";

export function ResumeActions({
  chapitre,
  markdown,
}: {
  chapitre: ChapterMeta;
  markdown: string;
}) {
  const { createNote, setActiveId } = useNotes();
  const { setNotesOpen, toast } = useUi();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        href="/resumes"
        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[0.76rem] text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <ArrowLeft size={13} aria-hidden="true" />
        {fr.resumes.retourListe}
      </Link>

      <div className="ml-auto flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => {
            const note = createNote({
              titre: `Fiche — ${chapitre.titre}`,
              contenu: markdown,
              chapitreId: chapitre.id,
              etiquettes: ["fiche", "résumé"],
            });
            setActiveId(note.id);
            setNotesOpen(true);
            toast(fr.resumes.copie, "success");
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[0.76rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
        >
          <NotebookPen size={13} aria-hidden="true" />
          {fr.resumes.ajouterNotes}
        </button>

        <Link
          href={`${chapitreHref(chapitre)}?onglet=resume`}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[0.76rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
        >
          <BookOpen size={13} aria-hidden="true" />
          {fr.resumes.retourChapitre}
        </Link>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-strong)] px-3.5 py-1.5 text-[0.76rem] font-semibold text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5"
        >
          <Printer size={13} aria-hidden="true" />
          {fr.resumes.imprimerFiche}
        </button>
      </div>
    </div>
  );
}
