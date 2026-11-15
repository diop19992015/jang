import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ChapterEditor,
  type EditorFile,
  type EditorMeta,
} from "@/components/admin/chapter-editor";
import { getChapitreAdmin } from "@/lib/content/loader";
import {
  FICHIERS,
  listChapitreFiles,
  parseMiniFrontmatter,
  readContentFile,
} from "@/lib/admin/store";
import { SERIES, type SerieId } from "@/lib/types";

export const metadata: Metadata = {
  title: "Éditeur de contenu",
  robots: { index: false, follow: false },
};

function toNumber(value: unknown, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item));
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

export default async function AdminChapterEditorPage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}) {
  const { niveau, matiere, slug } = await params;
  const chapitre = getChapitreAdmin(niveau, matiere, slug);
  if (!chapitre) notFound();

  const path = { niveau, matiere, slug };
  const names = listChapitreFiles(path);

  const files: EditorFile[] = names.map((name) => {
    const known = FICHIERS.find((file) => file.name === name);
    const label = known
      ? known.label
      : `Exercice — ${name.replace(/^exercices\//, "").replace(/\.md$/, "")}`;
    return {
      name,
      label,
      content: readContentFile(path, name) ?? "",
    };
  });

  const metaRaw = readContentFile(path, "chapitre.md") ?? "";
  const { data } = parseMiniFrontmatter(metaRaw);
  const series = toList(data.series ?? data.serie)
    .filter((value): value is SerieId => (SERIES as readonly string[]).includes(value));

  const meta: EditorMeta = {
    titre: String(data.titre ?? chapitre.titre),
    accroche: String(data.accroche ?? chapitre.accroche),
    series: series.length ? series : chapitre.series,
    ordre: toNumber(data.ordre, chapitre.ordre),
    duree: toNumber(data.duree, chapitre.duree),
    coefficient: toNumber(data.coefficient, chapitre.coefficient),
    demo: data.demo === undefined ? chapitre.demo : data.demo === true || data.demo === "true",
    enPreparation:
      data.enPreparation === undefined
        ? chapitre.enPreparation
        : data.enPreparation === true || data.enPreparation === "true",
    statut: data.statut === "brouillon" ? "brouillon" : chapitre.statut,
    objectifs: toList(data.objectifs).length ? toList(data.objectifs) : chapitre.objectifs,
    prerequis: toList(data.prerequis).length ? toList(data.prerequis) : chapitre.prerequis,
  };

  return (
    <ChapterEditor
      niveau={niveau}
      matiere={matiere}
      slug={slug}
      files={files}
      meta={meta}
    />
  );
}
