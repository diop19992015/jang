/**
 * Ping minimal vers l'API Gemini pour diagnostiquer la connexion réelle.
 * Lit la clé dans `.env.local` (jamais affichée) et pose UNE petite question.
 *
 *   node scripts/gemini-ping.mjs
 */
import fs from "node:fs";
import { fileURLToPath } from "node:url";

import { GoogleGenAI } from "@google/genai";

const envPath = fileURLToPath(new URL("../.env.local", import.meta.url));
const env = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
const key = env.match(/^GEMINI_API_KEY=(.*)$/m)?.[1]?.trim() ?? "";
const model = env.match(/^GEMINI_MODEL=(.*)$/m)?.[1]?.trim() || "gemini-3.5-flash";

if (!key) {
  console.log("GEMINI_API_KEY absente de .env.local");
  process.exit(1);
}

console.log(`modèle: ${model} · clé: ${key.length} caractères (masquée)`);
console.log(`proxy: HTTP_PROXY=${process.env.HTTP_PROXY || "-"} HTTPS_PROXY=${process.env.HTTPS_PROXY || "-"}`);

const ai = new GoogleGenAI({ apiKey: key });
const started = Date.now();

try {
  const events = await ai.interactions.create(
    {
      model,
      input: [
        {
          type: "user_input",
          content: [{ type: "text", text: "Réponds uniquement par : OK" }],
        },
      ],
      stream: true,
      store: false,
      generation_config: { thinking_level: "low", max_output_tokens: 64 },
    },
    { fetch_options: { signal: AbortSignal.timeout(45_000) } },
  );

  let premier = null;
  let texte = "";
  let usage = null;
  for await (const event of events) {
    premier ??= event.event_type;
    if (event.event_type === "error") {
      console.log(`ECHEC événement après ${Date.now() - started}ms:`, JSON.stringify(event.error));
      process.exit(1);
    }
    if (event.event_type === "step.delta" && event.delta?.type === "text") {
      texte += event.delta.text ?? "";
    }
    if (event.event_type === "step.stop") {
      usage = event.usage ?? null;
      break;
    }
  }
  console.log(
    `OK en ${Date.now() - started}ms · premier événement: ${premier} · réponse: ${JSON.stringify(texte.slice(0, 120))}`,
  );
  if (usage) console.log("jetons:", JSON.stringify(usage));
} catch (caught) {
  console.log(`ECHEC en ${Date.now() - started}ms · ${caught?.name}: ${caught?.message}`);
  if (caught?.status) console.log("status HTTP:", caught.status);
  const detail = String(caught?.message ?? "").slice(0, 500);
  if (detail) console.log("détail:", detail);
  process.exit(1);
}
