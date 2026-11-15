import type { Metadata } from "next";

import { CoursesView } from "@/components/courses/courses-view";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Tous les cours",
  description:
    "Les cours complets du programme sénégalais, matière par matière, pour le BAC et le BFEM.",
};

export default function CoursPage() {
  return (
    <PageTransition>
      <CoursesView />
    </PageTransition>
  );
}
