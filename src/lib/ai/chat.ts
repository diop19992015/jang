import { MATIERE_LABELS, type AiMode, type StudyContext } from "@/lib/types";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  mode: AiMode;
  context: StudyContext;
  image?: string;
  hintOnly: boolean;
}

const HORS_SUJET = [
  "football",
  "match",
  "film",
  "série tv",
  "musique",
  "rap",
  "instagram",
  "tiktok",
  "snapchat",
  "fortnite",
  "jeu vidéo",
  "copine",
  "copain",
  "mariage",
  "recette",
  "cuisine",
];

export function isOffTopic(message: string): boolean {
  const text = message.toLowerCase();
  const etude = [
    "exercice",
    "cours",
    "chapitre",
    "équation",
    "equation",
    "dériv",
    "deriv",
    "integr",
    "intégr",
    "fonction",
    "physique",
    "chimie",
    "svt",
    "math",
    "français",
    "francais",
    "dissertation",
    "commentaire",
    "histoire",
    "géographie",
    "geographie",
    "anglais",
    "philosophie",
    "économie",
    "economie",
    "comptabilité",
    "comptabilite",
    "bac",
    "bfem",
    "révis",
    "revis",
    "formule",
    "théorème",
    "theoreme",
    "cellule",
    "gène",
    "gene",
    "atome",
    "molécule",
    "molecule",
  ];
  if (etude.some((word) => text.includes(word))) return false;
  return HORS_SUJET.some((word) => text.includes(word));
}

/**
 * Réponse pédagogique locale (aucune clé API). Elle sert de démonstration et
 * de repli hors ligne : le contenu est volontairement générique et exact.
 */
export function mockAnswer(request: ChatRequest): string {
  const { mode, context, hintOnly, image, messages } = request;
  const question = messages.filter((message) => message.role === "user").at(-1)?.content ?? "";
  const chapitre = context.chapitreTitre ?? "ce chapitre";
  const matiere = context.matiere ? MATIERE_LABELS[context.matiere] ?? "" : "";

  if (isOffTopic(question)) {
    return `${FR_REFUS}\n\nJe peux t'aider sur **${matiere || "toutes les matières du programme"}** : pose-moi une question sur ${chapitre}, ou envoie-moi ton exercice.`;
  }

  if (hintOnly) {
    return [
      `**Indice — ${chapitre}**`,
      "",
      "1. Relis l'énoncé et note ce qui est **donné** et ce qui est **demandé**.",
      "2. Repère la propriété du cours qui relie ces deux informations.",
      "3. Écris la relation littérale avant de remplacer par les valeurs.",
      "",
      "> Je ne donne pas la solution : essaie ces trois étapes, puis montre-moi ton brouillon.",
      "",
      "*Réponse de démonstration (« DÉMO »), aucune clé API configurée.*",
    ].join("\n");
  }

  if (mode === "correction") {
    return [
      `**Correction guidée — ${chapitre}** ${image ? "📷 *(photo bien reçue)*" : ""}`.trim(),
      "",
      "**Étape 1 — Ce que dit l'énoncé**",
      "Identifie les données et la grandeur cherchée. Note les unités.",
      "",
      "**Étape 2 — La méthode du programme**",
      "Écris la relation générale, puis isole l'inconnue **avant** tout calcul numérique.",
      "",
      "**Étape 3 — Le calcul**",
      "$$X = \\frac{\\text{grandeur donnée}}{\\text{coefficient}}$$",
      "",
      "**Étape 4 — Vérification**",
      "Contrôle l'ordre de grandeur et l'unité du résultat.",
      "",
      "> ⚠️ Erreur fréquente : oublier de convertir les unités (cm → m, min → s).",
      "",
      `Pour une correction complète, configure une clé API dans \`.env.local\` (voir README). En attendant, ceci est une **réponse de démonstration (« DÉMO »)**.`,
    ].join("\n");
  }

  if (mode === "interroger") {
    return [
      `**Interrogation — ${chapitre}**`,
      "",
      "Question 1 : donne la **définition** de la notion principale de ce chapitre, avec un exemple.",
      "",
      "> Réponds, puis je corrige et j'enchaîne avec une deuxième question.",
      "",
      "*Démonstration (« DÉMO »).*",
    ].join("\n");
  }

  if (mode === "expliquer") {
    return [
      `## ${chapitre}`,
      "",
      "**L'idée principale.** Ce chapitre relie une notion de cours à une méthode de calcul. Retiens d'abord la définition, puis la formule, puis l'application.",
      "",
      "**À savoir par cœur**",
      "- La définition exacte, avec ses hypothèses.",
      "- La formule et les unités.",
      "- Une méthode type en trois étapes.",
      "",
      "**Exemple**",
      "$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$",
      "",
      "On calcule le taux d'accroissement, on simplifie, puis on passe à la limite.",
      "",
      "*Réponse de démonstration (« DÉMO »). Configure `AI_PROVIDER` pour une réponse complète.*",
    ].join("\n");
  }

  return [
    `**${question || "Ta question"}**`,
    "",
    "Bonne question ! Voici la démarche attendue au Sénégal.",
    "",
    "**1. La notion**",
    `Dans ${chapitre}, on part toujours de la définition du cours, puis on applique une méthode.`,
    "",
    "**2. La formule clé**",
    "$$\\Delta = \\text{valeur finale} - \\text{valeur initiale}$$",
    "",
    "**3. Application**",
    "Remplace par les valeurs de ton énoncé, en gardant les unités du système international.",
    "",
    "> Astuce : écris la relation littérale, encadre le résultat, vérifie l'unité.",
    "",
    "*Ceci est une **réponse de démonstration (« DÉMO »)** : aucune clé API n'est configurée sur ce serveur.*",
  ].join("\n");
}

const FR_REFUS =
  "Je suis Jàng, ton assistant de révision. Je réponds uniquement aux questions de Maths, de Physique-Chimie et de SVT.";
