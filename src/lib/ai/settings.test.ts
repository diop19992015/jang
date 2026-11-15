import assert from "node:assert/strict";
import test from "node:test";

import { selectProfile } from "@/lib/ai/settings";

test("une question courte utilise le modèle économique et une réflexion basse", () => {
  const profile = selectProfile({ mode: "question", messageLength: 40, hasImages: false });
  assert.equal(profile.quality, "lite");
  assert.equal(profile.thinkingLevel, "low");
});

test("une question longue passe au modèle complet", () => {
  const profile = selectProfile({ mode: "question", messageLength: 600, hasImages: false });
  assert.equal(profile.quality, "full");
  assert.equal(profile.thinkingLevel, "medium");
});

test("une correction utilise le modèle complet et une réflexion haute", () => {
  const profile = selectProfile({ mode: "correction", messageLength: 80, hasImages: false });
  assert.equal(profile.quality, "full");
  assert.equal(profile.thinkingLevel, "high");
});

test("une photo déclenche le modèle complet même en mode question", () => {
  const profile = selectProfile({ mode: "question", messageLength: 20, hasImages: true });
  assert.equal(profile.quality, "full");
  assert.equal(profile.thinkingLevel, "high");
});

test("un simple indice réduit la réflexion sans changer de modèle", () => {
  const profile = selectProfile({
    mode: "correction",
    messageLength: 80,
    hasImages: true,
    hintOnly: true,
  });
  assert.equal(profile.quality, "full");
  assert.equal(profile.thinkingLevel, "medium");
});

test("expliquer un chapitre utilise une réflexion moyenne", () => {
  const profile = selectProfile({ mode: "expliquer", messageLength: 20, hasImages: false });
  assert.equal(profile.quality, "full");
  assert.equal(profile.thinkingLevel, "medium");
});

test("l'interrogation reste économique", () => {
  const profile = selectProfile({ mode: "interroger", messageLength: 20, hasImages: false });
  assert.equal(profile.quality, "lite");
  assert.equal(profile.thinkingLevel, "low");
});
