import type { Metadata } from "next";

import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Créer mon parcours",
  description:
    "Choisis ton niveau, ta série et ta date d'examen pour personnaliser tes révisions.",
};

export default async function CommencerPage({
  searchParams,
}: {
  searchParams: Promise<{ niveau?: string; serie?: string }>;
}) {
  const params = await searchParams;
  return (
    <PageTransition>
      <OnboardingFlow initialNiveau={params.niveau} initialSerie={params.serie} />
    </PageTransition>
  );
}
