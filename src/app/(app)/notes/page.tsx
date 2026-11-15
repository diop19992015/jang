import type { Metadata } from "next";

import { NotesView } from "@/components/notes/notes-view";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Mon bloc-notes",
  description:
    "Écris, classe et retrouve tes notes de révision : Markdown, formules LaTeX, étiquettes et export.",
};

export default function NotesPage() {
  return (
    <PageTransition>
      <NotesView />
    </PageTransition>
  );
}
