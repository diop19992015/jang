"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";
import { uid } from "@/lib/utils";
import type { Note, NoteCouleur } from "@/lib/types";

interface CreateNoteInput {
  titre?: string;
  contenu?: string;
  chapitreId?: string | null;
  etiquettes?: string[];
  couleur?: NoteCouleur;
}

interface NotesContextValue {
  notes: Note[];
  ready: boolean;
  syncState: "saved" | "saving" | "offline";
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  createNote: (input?: CreateNoteInput) => Note;
  updateNote: (id: string, patch: Partial<Omit<Note, "id" | "createdAt">>) => void;
  deleteNote: (id: string) => void;
  togglePin: (id: string) => void;
  getNote: (id: string | null) => Note | null;
  notesForChapitre: (chapitreId: string) => Note[];
  exportMarkdown: (note: Note) => void;
  printNote: (note: Note) => void;
  reset: () => void;
}

const NotesContext = createContext<NotesContextValue | null>(null);

const WELCOME_NOTE: Note = {
  id: "note-bienvenue",
  titre: "Bienvenue dans ton bloc-notes",
  contenu:
    "## Comment ça marche\n\n- Écris en **Markdown** : titres, listes, cases à cocher.\n- Insère des formules avec `$…$` ou `$$…$$` : $f'(x) = 2x$.\n- Utilise la palette de symboles pour les fractions, intégrales et équations chimiques.\n\n> Astuce DÉMO : depuis un cours ou une réponse de l'IA, clique sur « Enregistrer dans mes notes ».\n\n- [x] Créer mon parcours\n- [ ] Réviser un chapitre\n- [ ] Faire un quiz",
  etiquettes: ["démo", "prise en main"],
  chapitreId: null,
  couleur: "indigo",
  epinglee: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

function isValidNote(value: unknown): value is Note {
  if (!value || typeof value !== "object") return false;
  const note = value as Partial<Note>;
  return typeof note.id === "string" && typeof note.contenu === "string";
}

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [ready, setReady] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<"saved" | "saving" | "offline">("saved");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const key = STORAGE_KEYS.notes;
    const timer = window.setTimeout(() => {
      const raw = window.localStorage.getItem(key);
      if (raw === null) {
        setNotes([WELCOME_NOTE]);
        setActiveId(WELCOME_NOTE.id);
        writeStorage(key, [WELCOME_NOTE]);
      } else {
        const stored = readStorage<unknown[]>(key, []);
        setNotes(stored.filter(isValidNote));
      }
      setReady(true);
    }, 0);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== key || !event.newValue) return;
      try {
        const parsed = JSON.parse(event.newValue) as unknown[];
        setNotes(parsed.filter(isValidNote));
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const ok = writeStorage(STORAGE_KEYS.notes, notes);
    const timer = window.setTimeout(() => setSyncState(ok ? "saved" : "offline"), 0);
    return () => window.clearTimeout(timer);
  }, [notes, ready]);

  const markSaving = useCallback(() => {
    setSyncState("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSyncState("saved"), 700);
  }, []);

  const createNote = useCallback(
    (input?: CreateNoteInput) => {
      const now = new Date().toISOString();
      const note: Note = {
        id: uid("note"),
        titre: input?.titre ?? "Note sans titre",
        contenu: input?.contenu ?? "",
        chapitreId: input?.chapitreId ?? null,
        etiquettes: input?.etiquettes ?? [],
        couleur: input?.couleur ?? "neutre",
        epinglee: false,
        createdAt: now,
        updatedAt: now,
      };
      setNotes((current) => [note, ...current]);
      setActiveId(note.id);
      markSaving();
      return note;
    },
    [markSaving],
  );

  const updateNote = useCallback(
    (id: string, patch: Partial<Omit<Note, "id" | "createdAt">>) => {
      setNotes((current) =>
        current.map((note) =>
          note.id === id
            ? { ...note, ...patch, updatedAt: new Date().toISOString() }
            : note,
        ),
      );
      markSaving();
    },
    [markSaving],
  );

  const deleteNote = useCallback((id: string) => {
    setNotes((current) => current.filter((note) => note.id !== id));
    setActiveId((current) => (current === id ? null : current));
  }, []);

  const togglePin = useCallback((id: string) => {
    setNotes((current) =>
      current.map((note) =>
        note.id === id
          ? { ...note, epinglee: !note.epinglee, updatedAt: new Date().toISOString() }
          : note,
      ),
    );
  }, []);

  const getNote = useCallback(
    (id: string | null) => notes.find((note) => note.id === id) ?? null,
    [notes],
  );

  const notesForChapitre = useCallback(
    (chapitreId: string) =>
      notes
        .filter((note) => note.chapitreId === chapitreId)
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [notes],
  );

  const exportMarkdown = useCallback((note: Note) => {
    const slug = note.titre
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60);
    const front = note.etiquettes.length
      ? `---\nétiquettes: [${note.etiquettes.join(", ")}]\n---\n\n`
      : "";
    download(`${slug || "note"}.md`, `${front}# ${note.titre}\n\n${note.contenu}\n`, "text/markdown");
  }, []);

  const printNote = useCallback((note: Note) => {
    setActiveId(note.id);
    window.setTimeout(() => window.print(), 120);
  }, []);

  const reset = useCallback(() => {
    setNotes([]);
    setActiveId(null);
    writeStorage(STORAGE_KEYS.notes, []);
  }, []);

  const value = useMemo(
    () => ({
      notes,
      ready,
      syncState,
      activeId,
      setActiveId,
      createNote,
      updateNote,
      deleteNote,
      togglePin,
      getNote,
      notesForChapitre,
      exportMarkdown,
      printNote,
      reset,
    }),
    [
      notes,
      ready,
      syncState,
      activeId,
      createNote,
      updateNote,
      deleteNote,
      togglePin,
      getNote,
      notesForChapitre,
      exportMarkdown,
      printNote,
      reset,
    ],
  );

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes doit être utilisé dans <NotesProvider>");
  }
  return context;
}
