import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChapterView } from "@/components/chapter/chapter-view";
import { PageTransition } from "@/components/ui/page-transition";
import { getChapitre, getChapitresPour, toMeta } from "@/lib/content/loader";
import { fr } from "@/lib/i18n/fr";
import type { MatiereId, NiveauId, SerieId } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}): Promise<Metadata> {
  const { niveau, matiere, slug } = await params;
  const chapitre = getChapitre(niveau, matiere, slug);
  if (!chapitre) return { title: fr.commun.introuvable };
  return {
    title: chapitre.titre,
    description:
      chapitre.accroche ||
      `${chapitre.titre} — ${fr.matieres[chapitre.matiere]} ${fr.niveaux[chapitre.niveau]}. Résumé, cours, formules, exercices corrigés et quiz.`,
  };
}

export default async function ChapitrePage({
  params,
  searchParams,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
  searchParams: Promise<{ onglet?: string }>;
}) {
  const { niveau, matiere, slug } = await params;
  const { onglet } = await searchParams;
  const chapitre = getChapitre(niveau, matiere, slug);
  if (!chapitre) notFound();

  const onglets = ["resume", "cours", "formules", "exercices", "quiz"] as const;
  const initialTab = onglets.find((item) => item === onglet) ?? "resume";

  const freres = getChapitresPour(
    chapitre.niveau as NiveauId,
    chapitre.matiere as MatiereId,
    (chapitre.series[0] as SerieId | undefined) ?? null,
  ).map(toMeta);

  const position = freres.findIndex((item) => item.id === chapitre.id);
  const precedent = position > 0 ? freres[position - 1] : null;
  const suivant = position >= 0 && position < freres.length - 1 ? freres[position + 1] : null;

  return (
    <PageTransition>
      <ChapterView
        chapitre={chapitre}
        precedent={precedent}
        suivant={suivant}
        initialTab={initialTab}
      />
    </PageTransition>
  );
}
