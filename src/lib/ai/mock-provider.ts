import { mockAnswer, type ChatRequest } from "@/lib/ai/chat";
import type { AiProvider, AiProviderRequest } from "@/lib/ai/provider";
import { MATIERES, SERIES, type MatiereId, type SerieId } from "@/lib/types";

/** Motif reconnaissable dans le libellé de matière envoyé par la route. */
const MATIERE_MOTS: Record<MatiereId, string> = {
  maths: "math",
  pc: "physique",
  svt: "svt",
  francais: "français",
  histoire: "histoire",
  geographie: "géographie",
  anglais: "anglais",
  philosophie: "philosophie",
  economie: "économie",
};

/**
 * Fournisseur de démonstration : aucune clé, aucune sortie réseau.
 * Les réponses sont marquées « DÉMO » et restent exactes (voir `mockAnswer`).
 * Il sert aussi de repli quand `AI_PROVIDER` n'est pas configuré.
 */
export class MockProvider implements AiProvider {
  readonly id = "mock" as const;

  constructor(
    private readonly buildRequest: (request: AiProviderRequest) => ChatRequest = toChatRequest,
    private readonly delayMs = 8,
  ) {}

  async *stream(request: AiProviderRequest): AsyncIterable<string> {
    const text = mockAnswer(this.buildRequest(request));
    const chunkSize = 14;
    for (let index = 0; index < text.length; index += chunkSize) {
      if (request.signal.aborted) return;
      yield text.slice(index, index + chunkSize);
      if (this.delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.delayMs));
      }
    }
  }
}

/** Reconstitue la requête historique attendue par `mockAnswer`. */
function toChatRequest(request: AiProviderRequest): ChatRequest {
  const lastUserIndex = request.messages.reduce(
    (last, message, index) => (message.role === "user" ? index : last),
    -1,
  );
  const raw = request.messages[lastUserIndex]?.content ?? "";

  // La route préfixe le contexte scolaire au message, séparé par `---`.
  // On ne garde que la question pour l'affichage, le contexte sert au parsing.
  const [contextePart = "", ...rest] = raw.split(/\n\n---\n\n/);
  const question = rest.join("\n\n---\n\n").trim() || contextePart.trim();

  const messages = request.messages.map((message, index) =>
    index === lastUserIndex ? { ...message, content: question } : message,
  );
  const mode =
    /mode\s*:\s*corriger mon exercice/i.test(contextePart)
      ? "correction"
      : /mode\s*:\s*expliquer le chapitre/i.test(contextePart)
        ? "expliquer"
        : /mode\s*:\s*m'interroger/i.test(contextePart)
          ? "interroger"
          : "question";

  const chapitreMatch = /chapitre\s*:\s*«\s*([^»]+)\s*»/i.exec(contextePart);
  const niveauMatch = /niveau\s*:\s*(3ème|2nde|1ère|Terminale)/i.exec(contextePart);
  const serieMatch = /série\s+(L|S1|S2|S3|S4|S5)\b/i.exec(contextePart);
  const matiereMatch = /matière\s*:\s*([^\n]+)/i.exec(contextePart);

  const niveau = (niveauMatch?.[1] ?? "Terminale").toLowerCase();
  const matiereRaw = (matiereMatch?.[1] ?? "").toLowerCase();
  const serie = serieMatch?.[1]?.toUpperCase() as SerieId | undefined;

  return {
    messages,
    mode,
    context: {
      niveau: niveau.startsWith("3")
        ? "3eme"
        : niveau.startsWith("2")
          ? "seconde"
          : niveau.startsWith("1")
            ? "premiere"
            : "terminale",
      serie: serie && (SERIES as readonly string[]).includes(serie) ? serie : null,
      matiere:
        (MATIERES as readonly MatiereId[]).find((id) =>
          matiereRaw.includes(MATIERE_MOTS[id]),
        ) ?? null,
      chapitreId: null,
      chapitreTitre: chapitreMatch?.[1]?.trim() ?? null,
    },
    image: request.images.length ? "photo" : undefined,
    hintOnly: /uniquement un indice/i.test(contextePart),
  };
}
