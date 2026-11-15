/**
 * Découpage des contenus Markdown : sommaire du cours (titres `##`),
 * blocs pédagogiques (`:::demo`, `:::methode`, `:::erreur`, `:::exemple`,
 * `:::remarque`) et calcul d'ancres stables.
 */

export interface CourseSection {
  id: string;
  title: string;
  markdown: string;
}

export interface SplitDocument {
  intro: string;
  sections: CourseSection[];
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Retire le Markdown d'un titre pour l'affichage dans le sommaire. */
export function plainHeading(input: string): string {
  return input
    .replace(/\$\$?([^$]+)\$\$?/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .trim();
}

export function splitSections(markdown: string): SplitDocument {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const sections: CourseSection[] = [];
  const intro: string[] = [];
  let current: { title: string; lines: string[] } | null = null;
  let inFence = false;

  const flush = () => {
    if (!current) return;
    const title = plainHeading(current.title);
    const existing = new Set(sections.map((section) => section.id));
    let id = slugify(title) || "section";
    let suffix = 2;
    while (existing.has(id)) {
      id = `${slugify(title)}-${suffix}`;
      suffix += 1;
    }
    sections.push({
      id,
      title,
      markdown: current.lines.join("\n").trim(),
    });
  };

  for (const line of lines) {
    if (/^```/.test(line.trim())) inFence = !inFence;
    if (!inFence && /^##\s+/.test(line)) {
      flush();
      current = { title: line.replace(/^##\s+/, "").trim(), lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
    else intro.push(line);
  }
  flush();

  return { intro: intro.join("\n").trim(), sections };
}

export type MarkdownSegment =
  | { kind: "markdown"; content: string }
  | {
      kind: "directive";
      name: string;
      title: string;
      content: string;
    };

const DIRECTIVE_NAMES = new Set([
  "demo",
  "methode",
  "erreur",
  "exemple",
  "remarque",
  "formule",
  "definition",
  "piege",
]);

/** Découpe un Markdown en segments texte / blocs `:::nom Titre`. */
export function splitDirectives(markdown: string): MarkdownSegment[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const segments: MarkdownSegment[] = [];
  let buffer: string[] = [];
  let directive: { name: string; title: string; lines: string[] } | null = null;

  const flushText = () => {
    const content = buffer.join("\n").trim();
    if (content) segments.push({ kind: "markdown", content });
    buffer = [];
  };

  for (const line of lines) {
    if (directive) {
      if (/^:::\s*$/.test(line.trim())) {
        segments.push({
          kind: "directive",
          name: directive.name,
          title: directive.title,
          content: directive.lines.join("\n").trim(),
        });
        directive = null;
      } else {
        directive.lines.push(line);
      }
      continue;
    }

    const open = line.trim().match(/^:::\s*([a-zA-Z-]+)\s*(.*)$/);
    if (open && DIRECTIVE_NAMES.has(open[1].toLowerCase())) {
      flushText();
      directive = {
        name: open[1].toLowerCase(),
        title: open[2].trim(),
        lines: [],
      };
      continue;
    }

    buffer.push(line);
  }

  if (directive) {
    // Bloc non fermé : on le rend en Markdown classique plutôt que de perdre
    // le contenu.
    segments.push({
      kind: "markdown",
      content: `### ${directive.title}\n\n${directive.lines.join("\n")}`.trim(),
    });
  }
  flushText();

  return segments;
}

/** Extrait un sommaire plat (h2 + h3) pour les fiches de révision. */
export function tableOfContents(markdown: string): CourseSection[] {
  return splitSections(markdown).sections.map((section) => ({
    ...section,
    markdown: "",
  }));
}
