import type { Metadata } from "next";

import { ResumesView } from "@/components/resumes/resumes-view";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Fiches de révision",
  description:
    "L'essentiel de chaque chapitre en une fiche imprimable, exportable en PDF.",
};

export default function ResumesPage() {
  return (
    <PageTransition>
      <ResumesView />
    </PageTransition>
  );
}
