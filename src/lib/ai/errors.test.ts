import assert from "node:assert/strict";
import test from "node:test";

import { AiError, isRetryableStatus, isSafetyCode, toAiError } from "@/lib/ai/errors";

test("une surcharge 429 ou 503 devient une erreur réessayable", () => {
  const tooMany = toAiError({ status: 429, message: "RESOURCE_EXHAUSTED" });
  assert.equal(tooMany.code, "overload");
  assert.equal(tooMany.status, 503);
  assert.ok(tooMany.message.includes("très sollicité"));

  const unavailable = toAiError({ status: 503, message: "Service indisponible" });
  assert.equal(unavailable.code, "overload");
  assert.equal(isRetryableStatus(503), true);
});

test("un filtre de sécurité devient une invitation à reformuler", () => {
  for (const code of ["safety", "jailbreak", "prohibited_content", "blocklist"]) {
    assert.equal(isSafetyCode(code), true);
    const error = toAiError({ status: 400, error: { code, message: "blocked" } });
    assert.equal(error.code, "safety");
    assert.ok(error.message.includes("Reformule"));
  }
});

test("une erreur de sécurité est reconnue dans le message", () => {
  const error = toAiError({
    status: 400,
    message: "The response was blocked due to SAFETY concerns.",
  });
  assert.equal(error.code, "safety");
});

test("une erreur d'authentification fournisseur ne divulgue rien", () => {
  const error = toAiError({ status: 401, message: "API key not valid" });
  assert.equal(error.code, "provider");
  assert.equal(error.status, 502);
  assert.ok(!error.message.includes("API"));
});

test("une AiError est renvoyée telle quelle", () => {
  const original = new AiError("quota", "Limite atteinte", { status: 429 });
  assert.equal(toAiError(original), original);
});

test("une erreur inconnue devient une erreur fournisseur générique", () => {
  const error = toAiError(new Error("boom"));
  assert.equal(error.code, "provider");
  assert.ok(error.message.includes("Réessaie"));
});

test("un code d'erreur numérique n'est pas confondu avec un code de sécurité", () => {
  const error = toAiError({ status: 500, code: 42, message: "internal" });
  assert.equal(error.code, "overload");
});
