"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";
import { todayKey } from "@/lib/utils";
import type { ChapterMeta, ProgressState, StatutChapitre } from "@/lib/types";

const EMPTY: ProgressState = {
  statuts: {},
  visites: {},
  quiz: {},
  jours: [],
  revisions: [],
};

interface ProgressContextValue {
  progress: ProgressState;
  ready: boolean;
  touchChapitre: (id: string) => void;
  setStatut: (id: string, statut: StatutChapitre) => void;
  recordQuiz: (id: string, score: number, total: number) => void;
  toggleRevision: (id: string) => void;
  reset: () => void;
  streak: number;
  week: { date: string; label: string; active: boolean; today: boolean }[];
  mastery: (chapitres: ChapterMeta[]) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function computeStreak(jours: string[]): number {
  if (!jours.length) return 0;
  const set = new Set(jours);
  const cursor = new Date();
  const today = todayKey(cursor);

  if (!set.has(today)) {
    cursor.setDate(cursor.getDate() - 1);
    if (!set.has(todayKey(cursor))) return 0;
  }

  let streak = 0;
  while (set.has(todayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = readStorage<Partial<ProgressState>>(STORAGE_KEYS.progress, {});
      setProgress({
        statuts: stored.statuts ?? {},
        visites: stored.visites ?? {},
        quiz: stored.quiz ?? {},
        jours: Array.isArray(stored.jours) ? stored.jours : [],
        revisions: Array.isArray(stored.revisions) ? stored.revisions : [],
      });
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeStorage(STORAGE_KEYS.progress, progress);
  }, [progress, ready]);

  const touchChapitre = useCallback((id: string) => {
    const today = todayKey();
    setProgress((current) => {
      const jours = current.jours.includes(today)
        ? current.jours
        : [...current.jours, today];
      return {
        ...current,
        jours,
        visites: { ...current.visites, [id]: new Date().toISOString() },
        statuts: {
          ...current.statuts,
          [id]: current.statuts[id] === "maitrise" ? "maitrise" : "en-cours",
        },
      };
    });
  }, []);

  const setStatut = useCallback((id: string, statut: StatutChapitre) => {
    setProgress((current) => ({
      ...current,
      statuts: { ...current.statuts, [id]: statut },
    }));
  }, []);

  const recordQuiz = useCallback((id: string, score: number, total: number) => {
    const today = todayKey();
    setProgress((current) => ({
      ...current,
      jours: current.jours.includes(today) ? current.jours : [...current.jours, today],
      quiz: {
        ...current.quiz,
        [id]: { score, total, at: new Date().toISOString() },
      },
      statuts: {
        ...current.statuts,
        [id]:
          total > 0 && score / total >= 0.75
            ? "maitrise"
            : current.statuts[id] ?? "en-cours",
      },
    }));
  }, []);

  const toggleRevision = useCallback((id: string) => {
    setProgress((current) => ({
      ...current,
      revisions: current.revisions.includes(id)
        ? current.revisions.filter((item) => item !== id)
        : [...current.revisions, id],
    }));
  }, []);

  const reset = useCallback(() => setProgress(EMPTY), []);

  const streak = useMemo(() => computeStreak(progress.jours), [progress.jours]);

  const week = useMemo(() => {
    const jours = new Set(progress.jours);
    const labels = ["D", "L", "M", "M", "J", "V", "S"];
    const now = new Date();
    const today = todayKey(now);
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(now);
      date.setDate(now.getDate() - (6 - index));
      const key = todayKey(date);
      return {
        date: key,
        label: labels[date.getDay()],
        active: jours.has(key),
        today: key === today,
      };
    });
  }, [progress.jours]);

  const mastery = useCallback(
    (chapitres: ChapterMeta[]) => {
      if (!chapitres.length) return 0;
      const total = chapitres.reduce((score, chapitre) => {
        const statut = progress.statuts[chapitre.id];
        if (statut === "maitrise") return score + 1;
        if (statut === "en-cours") return score + 0.5;
        return score;
      }, 0);
      return Math.round((total / chapitres.length) * 100);
    },
    [progress.statuts],
  );

  const value = useMemo(
    () => ({
      progress,
      ready,
      touchChapitre,
      setStatut,
      recordQuiz,
      toggleRevision,
      reset,
      streak,
      week,
      mastery,
    }),
    [
      progress,
      ready,
      touchChapitre,
      setStatut,
      recordQuiz,
      toggleRevision,
      reset,
      streak,
      week,
      mastery,
    ],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress doit être utilisé dans <ProgressProvider>");
  }
  return context;
}
