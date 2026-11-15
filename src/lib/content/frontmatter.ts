/**
 * Lecteur de frontmatter YAML minimaliste (sous-ensemble suffisant pour les
 * contenus Jàng) : scalaires, listes en bloc, listes en ligne, booléens,
 * nombres, chaînes multi-lignes `|` et `>`.
 *
 * Aucune dépendance externe : le même code tourne côté serveur et dans les
 * scripts d'import.
 */

export interface ParsedFile {
  data: Record<string, unknown>;
  body: string;
}

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length > 1) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length > 1)
  ) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"');
  }
  return trimmed;
}

function parseScalar(raw: string): unknown {
  const value = stripQuotes(raw);
  if (value === "" || value === "null" || value === "~") return null;
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((item) => parseScalar(item.trim()));
  }
  return value;
}

export function parseFrontmatter(raw: string): ParsedFile {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  if (!text.startsWith("---\n")) {
    return { data: {}, body: text.trim() };
  }

  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, body: text.trim() };
  }

  const header = text.slice(4, end);
  const body = text.slice(end + 4).replace(/^\n+/, "").trimEnd();
  const data: Record<string, unknown> = {};
  const lines = header.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    if (/^\s+\S/.test(line)) continue;

    const match = line.match(/^([A-Za-z0-9_.-]+)\s*:\s*(.*)$/);
    if (!match) continue;

    const key = match[1];
    const rest = match[2];

    if (rest === "|" || rest === ">") {
      const collected: string[] = [];
      let indent: number | null = null;
      while (i + 1 < lines.length) {
        const next = lines[i + 1];
        if (!next.trim()) {
          collected.push("");
          i += 1;
          continue;
        }
        const currentIndent = next.match(/^(\s*)/)?.[1].length ?? 0;
        if (currentIndent === 0) break;
        indent = indent === null ? currentIndent : Math.min(indent, currentIndent);
        collected.push(next.slice(indent));
        i += 1;
      }
      data[key] =
        rest === "|"
          ? collected.join("\n").trim()
          : collected.join(" ").replace(/\s+/g, " ").trim();
      continue;
    }

    if (rest === "") {
      const items: string[] = [];
      while (i + 1 < lines.length) {
        const next = lines[i + 1];
        if (/^\s*-\s+/.test(next)) {
          items.push(stripQuotes(next.replace(/^\s*-\s+/, "")));
          i += 1;
          continue;
        }
        if (!next.trim()) {
          // une ligne vide n'interrompt pas une liste si l'élément suivant
          // est encore un tiret indenté.
          if (/^\s*-\s+/.test(lines[i + 2] ?? "")) {
            i += 1;
            continue;
          }
        }
        break;
      }
      data[key] = items.length ? items : [];
      continue;
    }

    data[key] = parseScalar(rest);
  }

  return { data, body };
}

export function asString(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return fallback;
}

export function asNumber(value: unknown, fallback = 0): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return fallback;
}

export function asBoolean(value: unknown, fallback = false): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value === "true";
  return fallback;
}

export function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => asString(item)).filter((item) => item.length > 0);
  }
  if (typeof value === "string" && value.trim()) {
    return value
      .split(/[,;]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}
