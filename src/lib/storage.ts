"use client";

/**
 * Petite couche de stockage local tolérante aux erreurs (mode privé,
 * quota dépassé, JSON corrompu…). Les notes et la progression fonctionnent
 * hors ligne grâce à elle.
 */

const PREFIX = "jang:v1:";

export const STORAGE_KEYS = {
  profile: `${PREFIX}profile`,
  progress: `${PREFIX}progress`,
  notes: `${PREFIX}notes`,
  settings: `${PREFIX}settings`,
  aiHistory: `${PREFIX}ai-history`,
  aiUsage: `${PREFIX}ai-usage`,
  bubbles: `${PREFIX}bubbles`,
  intro: `${PREFIX}intro`,
} as const;

export function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStorage(key: string, value: unknown): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeStorage(key: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}
