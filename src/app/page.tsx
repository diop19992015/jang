import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/landing-page";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Jàng — Réviser, réussir le BAC et le BFEM",
  description:
    "Résumés clairs, cours complets, exercices corrigés, assistant IA et bloc-notes pour les élèves du Sénégal. Terminale S1, S2 et 3ème.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <LandingPage />
    </PageTransition>
  );
}
