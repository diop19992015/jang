import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value: string | Date, options?: Intl.DateTimeFormatOptions) {
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-SN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  }).format(date);
}

export function formatRelative(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  const diff = Date.now() - date.getTime();
  const minutes = Math.round(diff / 60000);
  if (minutes < 1) return "à l'instant";
  if (minutes < 60) return `il y a ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `il y a ${hours} h`;
  const days = Math.round(hours / 24);
  if (days < 30) return `il y a ${days} j`;
  return formatDate(date);
}

export function todayKey(date = new Date()) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10);
}

export function daysUntil(dateIso: string | null): number | null {
  if (!dateIso) return null;
  const target = new Date(`${dateIso}T00:00:00`);
  if (Number.isNaN(target.getTime())) return null;
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.ceil((target.getTime() - start.getTime()) / 86400000);
}

export function plural(count: number, singular: string, pluralForm?: string) {
  return count > 1 ? (pluralForm ?? `${singular}s`) : singular;
}

export function readingTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}

export function isIos() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function formatScore(score: number, total: number) {
  if (!total) return "0 %";
  return `${Math.round((score / total) * 100)} %`;
}

export function truncate(value: string, length = 120) {
  const plain = value.replace(/[#*_>`$]/g, "").replace(/\s+/g, " ").trim();
  return plain.length > length ? `${plain.slice(0, length - 1)}…` : plain;
}
