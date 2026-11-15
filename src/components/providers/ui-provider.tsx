"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";
import { uid } from "@/lib/utils";

export interface BubblePosition {
  side: "left" | "right";
  bottom: number;
}

export interface Toast {
  id: string;
  message: string;
  tone: "info" | "success" | "error";
}

interface UiContextValue {
  aiOpen: boolean;
  notesOpen: boolean;
  paletteOpen: boolean;
  setAiOpen: (open: boolean) => void;
  setNotesOpen: (open: boolean) => void;
  toggleAi: () => void;
  toggleNotes: () => void;
  setPaletteOpen: (open: boolean) => void;
  bubbles: Record<"ai" | "notes", BubblePosition>;
  setBubblePosition: (id: "ai" | "notes", position: BubblePosition) => void;
  introDone: boolean;
  setIntroDone: (done: boolean) => void;
  toasts: Toast[];
  toast: (message: string, tone?: Toast["tone"]) => void;
  dismissToast: (id: string) => void;
}

const UiContext = createContext<UiContextValue | null>(null);

const DEFAULT_BUBBLES: Record<"ai" | "notes", BubblePosition> = {
  ai: { side: "right", bottom: 24 },
  notes: { side: "right", bottom: 92 },
};

export function UiProvider({ children }: { children: ReactNode }) {
  const [aiOpen, setAiOpenState] = useState(false);
  const [notesOpen, setNotesOpenState] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [bubbles, setBubbles] =
    useState<Record<"ai" | "notes", BubblePosition>>(DEFAULT_BUBBLES);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = readStorage<Partial<Record<"ai" | "notes", BubblePosition>>>(
        STORAGE_KEYS.bubbles,
        {},
      );
      setBubbles({
        ai: stored.ai ?? DEFAULT_BUBBLES.ai,
        notes: stored.notes ?? DEFAULT_BUBBLES.notes,
      });
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const setBubblePosition = useCallback(
    (id: "ai" | "notes", position: BubblePosition) => {
      setBubbles((current) => {
        const next = { ...current, [id]: position };
        writeStorage(STORAGE_KEYS.bubbles, next);
        return next;
      });
    },
    [],
  );

  const isMobile = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  }, []);

  const setAiOpen = useCallback(
    (open: boolean) => {
      setAiOpenState(open);
      if (open && isMobile()) setNotesOpenState(false);
    },
    [isMobile],
  );

  const setNotesOpen = useCallback(
    (open: boolean) => {
      setNotesOpenState(open);
      if (open && isMobile()) setAiOpenState(false);
    },
    [isMobile],
  );

  const toggleAi = useCallback(() => setAiOpen(!aiOpen), [aiOpen, setAiOpen]);
  const toggleNotes = useCallback(
    () => setNotesOpen(!notesOpen),
    [notesOpen, setNotesOpen],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setPaletteOpen((current) => !current);
        return;
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setAiOpenState(false);
        setNotesOpenState(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toast = useCallback((message: string, tone: Toast["tone"] = "info") => {
    const item: Toast = { id: uid("toast"), message, tone };
    setToasts((current) => [...current, item]);
    setTimeout(() => {
      setToasts((current) => current.filter((entry) => entry.id !== item.id));
    }, 3800);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((entry) => entry.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      aiOpen,
      notesOpen,
      paletteOpen,
      setAiOpen,
      setNotesOpen,
      toggleAi,
      toggleNotes,
      setPaletteOpen,
      bubbles,
      setBubblePosition,
      introDone,
      setIntroDone,
      toasts,
      toast,
      dismissToast,
    }),
    [
      aiOpen,
      notesOpen,
      paletteOpen,
      setAiOpen,
      setNotesOpen,
      toggleAi,
      toggleNotes,
      bubbles,
      setBubblePosition,
      introDone,
      toasts,
      toast,
      dismissToast,
    ],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("useUi doit être utilisé dans <UiProvider>");
  }
  return context;
}

export function useIsMobile() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia("(max-width: 767px)");
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false,
  );
}

export function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}
