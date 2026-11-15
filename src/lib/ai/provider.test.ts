import assert from "node:assert/strict";
import test from "node:test";

import { MockProvider } from "@/lib/ai/mock-provider";
import { resolveProvider } from "@/lib/ai";
import type { AiProviderRequest } from "@/lib/ai/provider";

function request(overrides: Partial<AiProviderRequest> = {}): AiProviderRequest {
  return {
    quality: "lite",
    systemInstruction: "instruction",
    messages: [
      {
        role: "user",
        content: "Contexte du message :\n- Mode : Poser une question\n\n---\n\nQu'est-ce qu'une dérivée ?",
      },
    ],
    images: [],
    thinkingLevel: "low",
    signal: new AbortController().signal,
    ...overrides,
  };
}

async function collect(iterable: AsyncIterable<string>): Promise<string> {
  let text = "";
  for await (const chunk of iterable) text += chunk;
  return text;
}

test("le fournisseur de démonstration répond sans réseau et marque DÉMO", async () => {
  const provider = new MockProvider(undefined, 0);
  const answer = await collect(provider.stream(request()));
  assert.ok(answer.length > 80);
  assert.ok(answer.includes("DÉMO"));
});

test("le flux de démonstration peut être interrompu", async () => {
  const controller = new AbortController();
  const provider = new MockProvider(undefined, 0);
  let received = "";

  for await (const chunk of provider.stream(request({ signal: controller.signal }))) {
    received += chunk;
    controller.abort();
  }

  assert.ok(received.length > 0);
  assert.ok(received.length < 600, "le flux doit s'arrêter après l'abandon");
});

test("sans AI_PROVIDER, le fournisseur est la démonstration", () => {
  const provider = resolveProvider(undefined, { NODE_ENV: "test" } as NodeJS.ProcessEnv);
  assert.equal(provider.id, "mock");
});

test("AI_PROVIDER=gemini sans clé retombe sur la démonstration", () => {
  const provider = resolveProvider("gemini", { NODE_ENV: "test" } as NodeJS.ProcessEnv);
  assert.equal(provider.id, "mock");
});

test("AI_PROVIDER=gemini avec une clé sélectionne Gemini", () => {
  const provider = resolveProvider("gemini", {
    NODE_ENV: "test",
    GEMINI_API_KEY: "clé-de-test",
  } as NodeJS.ProcessEnv);
  assert.equal(provider.id, "gemini");
});

test("une valeur de fournisseur inconnue retombe sur la démonstration", () => {
  const provider = resolveProvider("openai", {
    NODE_ENV: "test",
    OPENAI_API_KEY: "x",
  } as NodeJS.ProcessEnv);
  assert.equal(provider.id, "mock");
});
