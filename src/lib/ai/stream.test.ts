import assert from "node:assert/strict";
import test from "node:test";

import { openStream } from "@/lib/ai/stream";
import type { AiProvider, AiProviderRequest } from "@/lib/ai/provider";

function request(): AiProviderRequest {
  return {
    quality: "lite",
    systemInstruction: "instruction",
    messages: [{ role: "user", content: "Bonjour" }],
    images: [],
    thinkingLevel: "low",
    signal: new AbortController().signal,
  };
}

/** Faux fournisseur : aucune requête réseau, comportement scripté. */
class FakeProvider implements AiProvider {
  readonly id = "mock" as const;
  attempts = 0;

  constructor(
    private readonly failures: unknown[] = [],
    private readonly chunks: string[] = ["Bonjour", " à toi"],
  ) {}

  async *stream(): AsyncIterable<string> {
    this.attempts += 1;
    const failure = this.failures.shift();
    if (failure) throw failure;
    for (const chunk of this.chunks) yield chunk;
  }
}

test("openStream renvoie le premier morceau et l'itérateur", async () => {
  const provider = new FakeProvider();
  const start = await openStream(provider, request(), { wait: () => 0 });
  assert.equal(start.first, "Bonjour");
  assert.equal(provider.attempts, 1);

  const rest: string[] = [];
  for (;;) {
    const next = await start.iterator.next();
    if (next.done) break;
    rest.push(next.value as string);
  }
  assert.deepEqual(rest, [" à toi"]);
});

test("une surcharge est réessayée deux fois avant de réussir", async () => {
  const provider = new FakeProvider([{ status: 429 }, { status: 503 }]);
  const start = await openStream(provider, request(), { wait: () => 0 });
  assert.equal(start.first, "Bonjour");
  assert.equal(provider.attempts, 3);
});

test("après deux nouvelles tentatives, la surcharge remonte", async () => {
  const provider = new FakeProvider([{ status: 429 }, { status: 429 }, { status: 429 }, { status: 429 }]);

  await assert.rejects(
    () => openStream(provider, request(), { wait: () => 0 }),
    (error: unknown) => {
      assert.equal((error as { code?: string }).code, "overload");
      return true;
    },
  );
  assert.equal(provider.attempts, 3);
});

test("une erreur de sécurité n'est pas réessayée", async () => {
  const provider = new FakeProvider([
    { status: 400, error: { code: "safety", message: "blocked" } },
  ]);

  await assert.rejects(
    () => openStream(provider, request(), { wait: () => 0 }),
    (error: unknown) => {
      assert.equal((error as { code?: string }).code, "safety");
      return true;
    },
  );
  assert.equal(provider.attempts, 1);
});

test("un flux vide renvoie first = null", async () => {
  const provider = new FakeProvider([], []);
  const start = await openStream(provider, request(), { wait: () => 0 });
  assert.equal(start.first, null);
  const next = await start.iterator.next();
  assert.equal(next.done, true);
});
