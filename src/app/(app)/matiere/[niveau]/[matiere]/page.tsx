import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubjectView } from "@/components/subject/subject-view";
import { PageTransition } from "@/components/ui/page-transition";
import { getChapitresPour, toMeta } from "@/lib/content/loader";
import { fr } from "@/lib/i18n/fr";
import { MATIERES, NIVEAUX, type MatiereId, type NiveauId } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}): Promise<Metadata> {
  const { niveau, matiere } = await params;
  if (!(NIVEAUX as readonly string[]).includes(niveau)) return {};
  if (!(MATIERES as readonly string[]).includes(matiere)) return {};
  return {
    title: `${fr.matieres[matiere as MatiereId]} — ${fr.niveaux[niveau as NiveauId]}`,
    description: `${fr.matieres[matiere as MatiereId]} ${fr.niveaux[niveau as NiveauId]} : chapitres, résumés, cours et exercices corrigés.`,
  };
}

export default async function MatierePage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}) {
  const { niveau, matiere } = await params;
  if (!(NIVEAUX as readonly string[]).includes(niveau)) notFound();
  if (!(MATIERES as readonly string[]).includes(matiere)) notFound();

  const chapitres = getChapitresPour(niveau as NiveauId, matiere as MatiereId);
  if (!chapitres.length) notFound();

  return (
    <PageTransition>
      <SubjectView niveau={niveau as NiveauId} matiere={matiere as MatiereId} chapitres={chapitres.map(toMeta)} />
    </PageTransition>
  );
}
