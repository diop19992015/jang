#!/usr/bin/env node
/**
 * Essai manuel de l'assistant Jàng.
 *
 * Envoie dix exercices types à `POST /api/ai/chat` et affiche les réponses
 * pour un contrôle humain : 3 maths, 3 physique-chimie, 2 SVT et 2 photos.
 *
 * Utilisation :
 *   npm run dev                       # dans un autre terminal
 *   npm run ai:smoke
 *
 * Variables :
 *   AI_SMOKE_URL       URL de l'application (http://localhost:3000)
 *   AI_SMOKE_PHOTO_1   chemin d'une photo manuscrite (maths)
 *   AI_SMOKE_PHOTO_2   chemin d'une photo manuscrite (PC)
 *   AI_SMOKE_TIMEOUT   délai maximal par requête en ms (60000)
 *
 * Sans photo fournie, un PNG minuscule sert de substitut : le modèle répondra
 * probablement qu'il ne voit pas d'exercice. Le but est de vérifier le transport
 * des images, pas la correction.
 */

import fs from "node:fs/promises";
import path from "node:path";

const BASE_URL = (process.env.AI_SMOKE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const TIMEOUT_MS = Number(process.env.AI_SMOKE_TIMEOUT ?? "60000");

/** PNG transparent 1×1, utilisé seulement si aucune photo n'est fournie. */
const PLACEHOLDER_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

const CASES = [
  {
    matiere: "Maths",
    label: "Dérivée d'un polynôme",
    body: {
      mode: "question",
      message: "Comment calculer la dérivée de f(x) = x² + 3x − 1 ?",
      chapitreId: "terminale-maths-derivation",
      contexte: { niveau: "terminale", serie: "S1", matiere: "maths" },
    },
  },
  {
    matiere: "Maths",
    label: "Signe de la dérivée et variations",
    body: {
      mode: "expliquer",
      message: "Explique le lien entre le signe de la dérivée et les variations d'une fonction.",
      chapitreId: "terminale-maths-derivation",
      contexte: { niveau: "terminale", serie: "S2", matiere: "maths" },
    },
  },
  {
    matiere: "Maths",
    label: "Théorème de Thalès (3ème)",
    body: {
      mode: "correction",
      message:
        "Dans un triangle ABC, M est sur [AB] et N sur [AC] avec (MN) parallèle à (BC). AM = 3 cm, AB = 5 cm, AC = 7,5 cm. Je trouve AN = 4,5 cm. Est-ce correct ?",
      chapitreId: "3eme-maths-thales",
      contexte: { niveau: "3eme", serie: null, matiere: "maths" },
    },
  },
  {
    matiere: "PC",
    label: "Vitesse moyenne",
    body: {
      mode: "question",
      message: "Un mobile parcourt 150 m en 10 s. Quelle est sa vitesse moyenne en m/s puis en km/h ?",
      chapitreId: "terminale-pc-cinematique",
      contexte: { niveau: "terminale", serie: "S1", matiere: "pc" },
    },
  },
  {
    matiere: "PC",
    label: "Combustion du méthane",
    body: {
      mode: "correction",
      message:
        "J'ai écrit : CH₄ + O₂ → CO₂ + H₂O. Corrige et explique comment équilibrer l'équation.",
      chapitreId: "3eme-pc-combustion",
      contexte: { niveau: "3eme", serie: null, matiere: "pc" },
    },
  },
  {
    matiere: "PC",
    label: "Vitesse moyenne et instantanée",
    body: {
      mode: "question",
      message: "Quelle est la différence entre vitesse moyenne et vitesse instantanée ?",
      chapitreId: "terminale-pc-cinematique",
      contexte: { niveau: "terminale", serie: "S2", matiere: "pc" },
    },
  },
  {
    matiere: "SVT",
    label: "Allèle dominant et récessif",
    body: {
      mode: "question",
      message: "Qu'est-ce qu'un allèle dominant ? Donne un exemple du programme de Terminale.",
      chapitreId: "terminale-svt-genetique",
      contexte: { niveau: "terminale", serie: "S1", matiere: "svt" },
    },
  },
  {
    matiere: "SVT",
    label: "Rôle des enzymes digestives",
    body: {
      mode: "interroger",
      message: "Je pense que les enzymes servent à broyer les aliments. C'est ça ?",
      chapitreId: "3eme-svt-digestion",
      contexte: { niveau: "3eme", serie: null, matiere: "svt" },
    },
  },
  {
    matiere: "Photo maths",
    label: "Photo 1 · exercice manuscrit de maths",
    body: {
      mode: "correction",
      message: "Corrige l'exercice de la photo, étape par étape.",
      chapitreId: "terminale-maths-derivation",
      contexte: { niveau: "terminale", serie: "S1", matiere: "maths" },
      photo: process.env.AI_SMOKE_PHOTO_1,
    },
  },
  {
    matiere: "Photo PC",
    label: "Photo 2 · exercice manuscrit de physique-chimie",
    body: {
      mode: "correction",
      message: "Corrige l'exercice de la photo et vérifie les unités.",
      chapitreId: "terminale-pc-cinematique",
      contexte: { niveau: "terminale", serie: "S2", matiere: "pc" },
      photo: process.env.AI_SMOKE_PHOTO_2,
    },
  },
];

const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };

async function readPhoto(filePath) {
  if (!filePath) return { dataUrl: PLACEHOLDER_PNG, placeholder: true };
  const absolute = path.resolve(filePath);
  const ext = path.extname(absolute).toLowerCase();
  const mime = MIME[ext];
  if (!mime) throw new Error(`Format non pris en charge : ${ext} (JPEG, PNG ou WebP)`);
  const buffer = await fs.readFile(absolute);
  if (buffer.length > 3 * 1024 * 1024) {
    throw new Error(`Photo trop lourde : ${absolute} (3 Mo maximum)`);
  }
  return { dataUrl: `data:${mime};base64,${buffer.toString("base64")}`, placeholder: false };
}

async function ensureSession() {
  const response = await fetch(`${BASE_URL}/api/ai/session`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Session impossible (HTTP ${response.status})`);

  const cookies = response.headers.getSetCookie?.() ?? [];
  const session = cookies.map((cookie) => cookie.split(";")[0]).find((cookie) => cookie.startsWith("jang_eleve="));
  if (!session) throw new Error("Cookie de session absent de la réponse");
  return session;
}

function formatBody(body, photoDataUrl) {
  return {
    mode: body.mode,
    message: body.message,
    images: photoDataUrl ? [photoDataUrl] : [],
    chapitreId: body.chapitreId ?? null,
    conversationId: "smoke-test",
    hintOnly: false,
    history: [],
    contexte: body.contexte,
  };
}

async function ask(cookie, payload) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${BASE_URL}/api/ai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: cookie },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(`HTTP ${response.status} · ${error.code ?? "?"} · ${error.error ?? ""}`);
    }

    const text = await response.text();
    return {
      text,
      provider: response.headers.get("x-ai-provider") ?? "?",
      remaining: response.headers.get("x-ai-remaining") ?? "?",
      quality: response.headers.get("x-ai-quality") ?? "?",
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  console.log(`Jàng · essai de l'assistant sur ${BASE_URL}\n`);

  let cookie;
  try {
    cookie = await ensureSession();
  } catch (error) {
    console.error(`Impossible d'ouvrir une session : ${error.message}`);
    console.error("Vérifie que le serveur tourne : npm run dev");
    process.exitCode = 1;
    return;
  }

  let failures = 0;
  let provider = "?";
  let lastRemaining = "?";

  for (const [index, testCase] of CASES.entries()) {
    const started = Date.now();
    console.log(`━ ${index + 1}/${CASES.length} · ${testCase.matiere} · ${testCase.label}`);

    let photo;
    try {
      photo = await readPhoto(testCase.body.photo);
    } catch (error) {
      console.error(`  ✗ ${error.message}`);
      failures += 1;
      continue;
    }
    if (photo.placeholder) {
      console.log("  (aucune photo fournie : PNG de test utilisé)");
    }

    try {
      const payload = formatBody(testCase.body, photo.dataUrl);
      const result = await ask(cookie, payload);
      provider = result.provider;
      lastRemaining = result.remaining;
      const seconds = ((Date.now() - started) / 1000).toFixed(1);
      console.log(`  ✓ ${result.provider} · ${result.quality} · ${seconds}s · reste ${result.remaining}`);
      console.log(
        result.text
          .trim()
          .split("\n")
          .map((line) => `    ${line}`)
          .join("\n"),
      );
    } catch (error) {
      failures += 1;
      console.error(`  ✗ ${error.message}`);
    }

    console.log("");
  }

  console.log(`Fin de l'essai · fournisseur ${provider} · quota restant ${lastRemaining}`);
  if (failures > 0) {
    console.error(`${failures} cas en échec.`);
    process.exitCode = 1;
  }
}

await main();
