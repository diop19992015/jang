import assert from "node:assert/strict";
import test from "node:test";

import {
  MAX_IMAGES,
  MAX_MESSAGE_LENGTH,
  chatRequestSchema,
  feedbackSchema,
  parseDataUrl,
} from "@/lib/ai/schema";

const PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg==";

test("le corps minimal prend les valeurs par défaut", () => {
  const parsed = chatRequestSchema.safeParse({});
  assert.equal(parsed.success, true);
  if (!parsed.success) return;
  assert.equal(parsed.data.mode, "question");
  assert.deepEqual(parsed.data.images, []);
  assert.deepEqual(parsed.data.history, []);
  assert.equal(parsed.data.hintOnly, false);
});

test("un message de plus de 2 000 caractères est refusé", () => {
  const parsed = chatRequestSchema.safeParse({ message: "a".repeat(MAX_MESSAGE_LENGTH + 1) });
  assert.equal(parsed.success, false);
});

test("un message de 2 000 caractères est accepté", () => {
  const parsed = chatRequestSchema.safeParse({ message: "a".repeat(MAX_MESSAGE_LENGTH) });
  assert.equal(parsed.success, true);
});

test("plus de trois images est refusé", () => {
  const parsed = chatRequestSchema.safeParse({
    images: Array.from({ length: MAX_IMAGES + 1 }, () => PNG),
  });
  assert.equal(parsed.success, false);
});

test("un format d'image non pris en charge est refusé", () => {
  const parsed = chatRequestSchema.safeParse({
    images: ["data:image/gif;base64,R0lGODlhAQABAAAAACw="],
  });
  assert.equal(parsed.success, false);
});

test("trois images JPEG, PNG ou WebP sont acceptées", () => {
  const parsed = chatRequestSchema.safeParse({
    images: [
      PNG,
      "data:image/jpeg;base64,/9j/4AAQSkZJRg==",
      "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAUAmJQBOgCHwAP7+4AAAAA==",
    ],
  });
  assert.equal(parsed.success, true);
});

test("l'historique est limité à vingt messages", () => {
  const history = Array.from({ length: 21 }, (_, index) => ({
    role: index % 2 === 0 ? "user" : "assistant",
    content: `message ${index}`,
  }));
  const parsed = chatRequestSchema.safeParse({ history });
  assert.equal(parsed.success, false);
});

test("parseDataUrl sépare le type MIME et le base64", () => {
  const parsed = parseDataUrl(PNG);
  assert.ok(parsed);
  assert.equal(parsed?.mimeType, "image/png");
  assert.equal(parsed?.data, "iVBORw0KGgoAAAANSUhEUg==");
});

test("parseDataUrl refuse une chaîne qui n'est pas une image", () => {
  assert.equal(parseDataUrl("https://exemple.sn/photo.jpg"), null);
});

test("le schéma de retour n'accepte que les votes prévus", () => {
  assert.equal(feedbackSchema.safeParse({ vote: "up", mode: "question" }).success, true);
  assert.equal(feedbackSchema.safeParse({ vote: "peut-être", mode: "question" }).success, false);
  assert.equal(feedbackSchema.safeParse({ vote: "up", mode: "inconnu" }).success, false);
});
