import type { MatiereId, NiveauId } from "@/lib/types";

export function chapitreHref(chapitre: {
  niveau: NiveauId;
  matiere: MatiereId;
  slug: string;
}): string {
  return `/chapitre/${chapitre.niveau}/${chapitre.matiere}/${chapitre.slug}`;
}

export function matiereHref(niveau: NiveauId, matiere: MatiereId): string {
  return `/matiere/${niveau}/${matiere}`;
}

export function resumeHref(chapitre: {
  niveau: NiveauId;
  matiere: MatiereId;
  slug: string;
}): string {
  return `/resumes/${chapitre.niveau}/${chapitre.matiere}/${chapitre.slug}`;
}

export function exercicesHref(params: {
  matiere?: MatiereId | null;
  chapitre?: string | null;
  type?: string | null;
}): string {
  const search = new URLSearchParams();
  if (params.matiere) search.set("matiere", params.matiere);
  if (params.chapitre) search.set("chapitre", params.chapitre);
  if (params.type) search.set("type", params.type);
  const query = search.toString();
  return query ? `/exercices?${query}` : "/exercices";
}
