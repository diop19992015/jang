"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { closeAdminSession, openAdminSession, requireAdmin } from "@/lib/admin/auth";
import { verifyCredentials } from "@/lib/admin/token";
import {
  ContentError,
  buildFrontmatter,
  createChapitre,
  createContentFile,
  deleteChapitre,
  deleteContentFile,
  importMarkdownFiles,
  saveChapitreImage,
  writeContentFile,
  type ImportFile,
  type ImportOutcome,
} from "@/lib/admin/store";

export interface ActionResult {
  ok: boolean;
  message: string;
}

function messageOf(error: unknown): string {
  if (error instanceof ContentError) return error.message;
  if (error instanceof Error) return error.message;
  return "Erreur inconnue.";
}

function revalidateContent() {
  // Le contenu est lu côté serveur : on rafraîchit toutes les routes.
  revalidatePath("/", "layout");
}

export async function loginAction(
  _previous: { error: string | null },
  formData: FormData,
): Promise<{ error: string | null }> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const suite = String(formData.get("suite") ?? "/admin");

  if (!verifyCredentials(email, password)) {
    return { error: "Identifiants incorrects." };
  }

  await openAdminSession(email.trim().toLowerCase());
  redirect(suite.startsWith("/admin") ? suite : "/admin");
}

export async function logoutAction(): Promise<void> {
  await closeAdminSession();
  redirect("/admin/login");
}

export async function saveFileAction(input: {
  niveau: string;
  matiere: string;
  slug: string;
  file: string;
  content: string;
}): Promise<ActionResult> {
  await requireAdmin();
  try {
    writeContentFile(
      { niveau: input.niveau, matiere: input.matiere, slug: input.slug },
      input.file,
      input.content,
    );
    revalidateContent();
    return { ok: true, message: "Contenu enregistré." };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

export async function saveMetadataAction(input: {
  niveau: string;
  matiere: string;
  slug: string;
  meta: {
    titre: string;
    accroche?: string;
    series?: string[];
    ordre?: number;
    duree?: number;
    coefficient?: number;
    demo?: boolean;
    enPreparation?: boolean;
    statut?: "brouillon" | "publie";
    objectifs?: string[];
    prerequis?: string[];
  };
}): Promise<ActionResult> {
  await requireAdmin();
  try {
    writeContentFile(
      { niveau: input.niveau, matiere: input.matiere, slug: input.slug },
      "chapitre.md",
      buildFrontmatter(input.meta),
    );
    revalidateContent();
    return { ok: true, message: "Métadonnées enregistrées." };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

/** Import d'une image d'illustration dans `public/images/…`. */
export async function uploadImageAction(
  formData: FormData,
): Promise<ActionResult & { url?: string }> {
  await requireAdmin();
  try {
    const file = formData.get("image");
    if (!(file instanceof File)) {
      return { ok: false, message: "Aucun fichier reçu." };
    }
    const data = Buffer.from(await file.arrayBuffer());
    const baseName = file.name.replace(/\.[^.]+$/, "");
    const url = saveChapitreImage(
      {
        niveau: String(formData.get("niveau") ?? ""),
        matiere: String(formData.get("matiere") ?? ""),
        slug: String(formData.get("slug") ?? ""),
      },
      { data, mime: file.type, baseName },
    );
    revalidateContent();
    return { ok: true, message: "Image importée.", url };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

export async function createFileAction(input: {  niveau: string;
  matiere: string;
  slug: string;
  file: string;
}): Promise<ActionResult & { content?: string }> {
  await requireAdmin();
  try {
    const content = createContentFile(
      { niveau: input.niveau, matiere: input.matiere, slug: input.slug },
      input.file,
    );
    revalidateContent();
    return { ok: true, message: "Fichier créé.", content };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

export async function deleteFileAction(input: {
  niveau: string;
  matiere: string;
  slug: string;
  file: string;
}): Promise<ActionResult> {
  await requireAdmin();
  try {
    if (input.file === "chapitre.md") {
      return { ok: false, message: "Utilise « Supprimer le chapitre »." };
    }
    deleteContentFile(
      { niveau: input.niveau, matiere: input.matiere, slug: input.slug },
      input.file,
    );
    revalidateContent();
    return { ok: true, message: "Fichier supprimé." };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

export async function createChapitreAction(
  _previous: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  await requireAdmin();
  try {
    const niveau = String(formData.get("niveau") ?? "");
    const matiere = String(formData.get("matiere") ?? "");
    const slug = String(formData.get("slug") ?? "");
    const titre = String(formData.get("titre") ?? "").trim();
    const accroche = String(formData.get("accroche") ?? "").trim();
    const series = formData
      .getAll("series")
      .map((value) => String(value))
      .filter(Boolean);

    if (!titre) return { ok: false, message: "Le titre est obligatoire." };

    createChapitre(
      { niveau, matiere, slug },
      buildFrontmatter({
        titre,
        accroche,
        series: niveau === "3eme" ? [] : series,
        ordre: 99,
        duree: 45,
        coefficient: 3,
        demo: true,
        statut: "brouillon",
      }),
    );

    revalidateContent();
    return { ok: true, message: "Chapitre créé. Ajoute maintenant son contenu." };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

export async function deleteChapitreAction(
  _previous: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  await requireAdmin();
  try {
    deleteChapitre({
      niveau: String(formData.get("niveau") ?? ""),
      matiere: String(formData.get("matiere") ?? ""),
      slug: String(formData.get("slug") ?? ""),
    });
    revalidateContent();
    return { ok: true, message: "Chapitre supprimé." };
  } catch (error) {
    return { ok: false, message: messageOf(error) };
  }
}

export async function importFilesAction(files: ImportFile[]): Promise<ImportOutcome> {
  await requireAdmin();
  const outcome = importMarkdownFiles(files);
  if (outcome.imported > 0) revalidateContent();
  return outcome;
}
