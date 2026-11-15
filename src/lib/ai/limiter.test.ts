import assert from "node:assert/strict";
import test from "node:test";

import { MemoryLimiter, dailyLimit, dayKey } from "@/lib/ai/limiter";

test("le quota quotidien se consomme puis bloque", () => {
  const limiter = new MemoryLimiter(2);
  assert.deepEqual(limiter.begin("eleve-a"), { ok: true, remaining: 1 });
  limiter.end("eleve-a");
  assert.deepEqual(limiter.begin("eleve-a"), { ok: true, remaining: 0 });
  limiter.end("eleve-a");

  const refused = limiter.begin("eleve-a");
  assert.equal(refused.ok, false);
  assert.equal(refused.reason, "quota");
  assert.equal(refused.remaining, 0);
});

test("une seule requête en cours par élève", () => {
  const limiter = new MemoryLimiter(5);
  assert.equal(limiter.begin("eleve-b").ok, true);

  const second = limiter.begin("eleve-b");
  assert.equal(second.ok, false);
  assert.equal(second.reason, "concurrency");

  limiter.end("eleve-b");
  assert.equal(limiter.begin("eleve-b").ok, true);
});

test("les élèves ne partagent pas leur quota", () => {
  const limiter = new MemoryLimiter(1);
  assert.equal(limiter.begin("eleve-c").ok, true);
  limiter.end("eleve-c");
  assert.equal(limiter.begin("eleve-d").ok, true);
});

test("le compteur repart à zéro le lendemain", () => {
  let now = new Date("2026-11-03T10:00:00.000Z");
  const limiter = new MemoryLimiter(1, () => now);
  assert.equal(limiter.begin("eleve-e").ok, true);
  limiter.end("eleve-e");
  assert.equal(limiter.begin("eleve-e").ok, false);

  now = new Date("2026-11-04T08:00:00.000Z");
  assert.equal(limiter.remaining("eleve-e"), 1);
  assert.equal(limiter.begin("eleve-e").ok, true);
});

test("reset vide le quota et les requêtes en cours", () => {
  const limiter = new MemoryLimiter(1);
  assert.equal(limiter.begin("eleve-f").ok, true);
  limiter.reset();
  assert.equal(limiter.remaining("eleve-f"), 1);
  assert.equal(limiter.begin("eleve-f").ok, true);
});

test("dayKey utilise la date UTC", () => {
  assert.equal(dayKey(new Date("2026-11-03T23:30:00.000Z")), "2026-11-03");
});

test("AI_DAILY_LIMIT vaut 30 par défaut et ignore les valeurs invalides", () => {
  assert.equal(dailyLimit(undefined), 30);
  assert.equal(dailyLimit("12"), 12);
  assert.equal(dailyLimit("0"), 30);
  assert.equal(dailyLimit("-4"), 30);
  assert.equal(dailyLimit("beaucoup"), 30);
});
