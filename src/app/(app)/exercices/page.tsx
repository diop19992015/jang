import type { Metadata } from "next";

import { ExercisesView } from "@/components/exercises/exercises-view";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Banque d'exercices",
  description:
    "Exercices d'entraînement et sujets type BAC / BFEM, avec indices progressifs et corrigés détaillés.",
};

export default async function ExercicesPage({
  searchParams,
}: {
  searchParams: Promise<{
    matiere?: string;
    chapitre?: string;
    difficulte?: string;
    type?: string;
    q?: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <PageTransition>
      <ExercisesView
        initialMatiere={params.matiere}
        initialChapitre={params.chapitre}
        initialDifficulte={params.difficulte}
        initialType={params.type}
        initialQuery={params.q}
      />
    </PageTransition>
  );
}
