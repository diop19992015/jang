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

import { useNotes } from "@/components/providers/notes-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { useUi } from "@/components/providers/ui-provider";
import { fr } from "@/lib/i18n/fr";
import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";
import { uid } from "@/lib/utils";
import type {
  AiConversation,
  AiMessage,
  AiMode,
  MatiereId,
  NiveauId,
  SerieId,
  StudyContext,
} from "@/lib/types";

const DEFAULT_REMAINING = 30;

interface AiContextValue {
  messages: AiMessage[];
  conversations: AiConversation[];
  conversationId: string | null;
  mode: AiMode;
  setMode: (mode: AiMode) => void;
  context: StudyContext;
  setContext: (context: Partial<StudyContext>) => void;
  streaming: boolean;
  error: string | null;
  /** Code d'erreur normalisé (`quota`, `safety`, `overload`…) pour adapter l'UI. */
  errorCode: string | null;
  /** Diagnostic serveur : Gemini demandé mais clé absente. */
  note: string | null;
  remaining: number;
  /** Identifiant du fournisseur qui répond (`mock` en démonstration). */
  provider: string;
  send: (
    prompt: string,
    options?: { images?: string[]; hintOnly?: boolean },
  ) => Promise<void>;
  stop: () => void;
  newConversation: () => void;
  loadConversation: (id: string) => void;
  clearHistory: () => void;
  saveToNotes: (message: AiMessage) => void;
  askAboutChapter: (chapterId: string, chapterTitre: string, matiere: MatiereId) => void;
}

const AiContext = createContext<AiContextValue | null>(null);

const DEFAULT_CONTEXT: StudyContext = {
  niveau: "terminale",
  serie: "S1",
  matiere: null,
  chapitreId: null,
  chapitreTitre: null,
};

function trimForStorage(messages: AiMessage[]): AiMessage[] {
  return messages.map((message) => {
    const stored = { ...message };
    delete stored.imageUrl;
    return stored;
  });
}

export function AiProvider({ children }: { children: ReactNode }) {
  const { profile } = useProfile();
  const { createNote } = useNotes();
  const { toast } = useUi();

  const [messages, setMessages] = useState<AiMessage[]>([]);
  const [conversations, setConversations] = useState<AiConversation[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);  const [mode, setModeState] = useState<AiMode>("question");
  const [context, setContextState] = useState<StudyContext>(DEFAULT_CONTEXT);
  const [remaining, setRemaining] = useState(DEFAULT_REMAINING);
  const [provider, setProvider] = useState("mock");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const messagesRef = useRef<AiMessage[]>([]);
  const sessionRef = useRef<Promise<boolean> | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedContext = readStorage<Partial<StudyContext>>("jang:v1:ai-context", {});
      const storedHistory = readStorage<AiConversation[]>(STORAGE_KEYS.aiHistory, []);
      setConversations(storedHistory.filter((item) => Array.isArray(item.messages)));
      setContextState((current) => ({
        ...current,
        ...storedContext,
      }));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!profile) return;
    const timer = window.setTimeout(() => {
      setContextState((current) => ({
        ...current,
        niveau: profile.niveau,
        serie: profile.serie,
      }));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [profile]);

  useEffect(() => {
    writeStorage("jang:v1:ai-context", context);
  }, [context]);

  const ensureSession = useCallback(async (): Promise<boolean> => {
    if (sessionRef.current) return sessionRef.current;
    const promise = fetch("/api/ai/session", { cache: "no-store" })
      .then((response) => response.ok)
      .catch(() => false);
    sessionRef.current = promise;
    const ok = await promise;
    if (!ok) sessionRef.current = null;
    return ok;
  }, []);

  useEffect(() => {
    void ensureSession();
  }, [ensureSession]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/ai/chat", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then(
        (data: { provider?: string; remaining?: number; note?: string | null } | null) => {
          if (cancelled || !data) return;
          if (typeof data.provider === "string") setProvider(data.provider);
          if (typeof data.remaining === "number") setRemaining(data.remaining);
          if (typeof data.note === "string") setNote(data.note);
        },
      )
      .catch(() => null);
    return () => {
      cancelled = true;
    };
  }, []);

  const setMode = useCallback((next: AiMode) => setModeState(next), []);

  const setContext = useCallback((partial: Partial<StudyContext>) => {
    setContextState((current) => ({ ...current, ...partial }));
  }, []);

  const saveConversation = useCallback(
    (currentMessages: AiMessage[], id: string | null) => {
      if (!currentMessages.length) return;
      const now = new Date().toISOString();
      const firstUser = currentMessages.find((message) => message.role === "user");
      const record: AiConversation = {
        id: id ?? uid("conv"),
        chapitreId: context.chapitreId,
        titre:
          firstUser?.content.slice(0, 70).replace(/\s+/g, " ").trim() ||
          "Conversation Jàng",
        messages: trimForStorage(currentMessages),
        createdAt: now,
        updatedAt: now,
      };
      setConversations((current) => {
        const next = [record, ...current.filter((item) => item.id !== record.id)].slice(0, 40);
        writeStorage(STORAGE_KEYS.aiHistory, next);
        return next;
      });
      setConversationId(record.id);
    },
    [context.chapitreId],
  );

  const send = useCallback(
    async (prompt: string, options?: { images?: string[]; hintOnly?: boolean }) => {
      const content = prompt.trim();
      const images = options?.images ?? [];
      if ((!content && images.length === 0) || streaming) return;

      if (typeof navigator !== "undefined" && !navigator.onLine) {
        setError(fr.ai.horsConnexion);
        return;
      }

      setError(null);
      setErrorCode(null);
      const userMessage: AiMessage = {
        id: uid("msg"),
        role: "user",
        content,
        imageUrl: images[0],
        createdAt: new Date().toISOString(),
        mode,
      };
      const assistantMessage: AiMessage = {
        id: uid("msg"),
        role: "assistant",
        content: "",
        createdAt: new Date().toISOString(),
        mode,
        demo: provider === "mock",
      };

      const history = [...messagesRef.current, userMessage];
      const previous = messagesRef.current;
      setMessages([...history, assistantMessage]);
      setStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      const post = () =>
        fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode,
            message: content,
            images,
            chapitreId: context.chapitreId,
            conversationId,
            hintOnly: options?.hintOnly ?? false,
            history: previous
              .filter((message) => message.content.trim().length > 0)
              .slice(-20)
              .map((message) => ({ role: message.role, content: message.content })),
            contexte: {
              niveau: context.niveau,
              serie: context.serie,
              matiere: context.matiere,
            },
          }),
          signal: controller.signal,
        });

      try {
        let response = await post();

        // Session anonyme expirée ou absente : on la recrée une seule fois.
        if (response.status === 401) {
          sessionRef.current = null;
          if ((await ensureSession()) && !controller.signal.aborted) {
            response = await post();
          }
        }

        if (!response.ok) {
          const payload = (await response.json().catch(() => null)) as
            | { code?: string; error?: string; remaining?: number }
            | null;
          if (typeof payload?.remaining === "number") setRemaining(payload.remaining);
          if (payload?.code) setErrorCode(payload.code);
          throw new Error(payload?.error ?? fr.ai.erreur);
        }

        const remoteRemaining = Number(response.headers.get("x-ai-remaining"));
        if (Number.isFinite(remoteRemaining)) setRemaining(remoteRemaining);
        const remoteProvider = response.headers.get("x-ai-provider");
        if (remoteProvider) setProvider(remoteProvider);

        const reader = response.body?.getReader();
        if (!reader) throw new Error(fr.ai.erreur);
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          setMessages((current) =>
            current.map((message) =>
              message.id === assistantMessage.id
                ? {
                    ...message,
                    content: buffer,
                    demo: (remoteProvider ?? provider) === "mock",
                  }
                : message,
            ),
          );
        }

        saveConversation(
          [...history, { ...assistantMessage, content: buffer }],
          conversationId,
        );
      } catch (caught) {
        if ((caught as Error).name === "AbortError") {
          setMessages((current) =>
            current.map((message) =>
              message.id === assistantMessage.id && !message.content
                ? { ...message, content: "Réponse interrompue." }
                : message,
            ),
          );
        } else {
          const message = caught instanceof Error ? caught.message : fr.ai.erreur;
          setError(message);
          setMessages((current) =>
            current.map((entry) =>
              entry.id === assistantMessage.id && !entry.content
                ? { ...entry, content: message }
                : entry,
            ),
          );
        }
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [context, conversationId, ensureSession, mode, provider, saveConversation, streaming],
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const newConversation = useCallback(() => {
    if (messagesRef.current.length) {
      saveConversation(messagesRef.current, conversationId);
    }
    setMessages([]);
    setConversationId(null);
    setError(null);
    setErrorCode(null);
  }, [conversationId, saveConversation]);

  const loadConversation = useCallback((id: string) => {
    const found = conversations.find((conversation) => conversation.id === id);
    if (!found) return;
    setMessages(found.messages);
    setConversationId(found.id);
    setContextState((current) => ({
      ...current,
      chapitreId: found.chapitreId ?? current.chapitreId,
    }));
  }, [conversations]);

  const clearHistory = useCallback(() => {
    setConversations([]);
    writeStorage(STORAGE_KEYS.aiHistory, []);
    setMessages([]);
    setConversationId(null);
  }, []);

  const saveToNotes = useCallback(
    (message: AiMessage) => {
      createNote({
        titre: `Réponse IA — ${context.chapitreTitre ?? "révision"}`,
        contenu: message.content,
        chapitreId: context.chapitreId,
        etiquettes: ["IA"],
      });
      toast("Réponse enregistrée dans tes notes.", "success");
    },
    [context.chapitreId, context.chapitreTitre, createNote, toast],
  );

  const askAboutChapter = useCallback(
    (chapterId: string, chapterTitre: string, matiere: MatiereId) => {
      setContextState((current) => ({
        ...current,
        chapitreId: chapterId,
        chapitreTitre: chapterTitre,
        matiere,
      }));
    },
    [],
  );

  const value = useMemo(
    () => ({
      messages,
      conversations,
      conversationId,
      mode,
      setMode,
      context,
      setContext,
      streaming,
      error,
      errorCode,
      note,
      remaining,
      provider,
      send,
      stop,
      newConversation,
      loadConversation,
      clearHistory,
      saveToNotes,
      askAboutChapter,
    }),
    [
      messages,
      conversations,
      conversationId,
      mode,
      setMode,
      context,
      setContext,
      streaming,
      error,
      errorCode,
      note,
      remaining,
      provider,
      send,
      stop,
      newConversation,
      loadConversation,
      clearHistory,
      saveToNotes,
      askAboutChapter,
    ],
  );

  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
}

export function useAi() {
  const context = useContext(AiContext);
  if (!context) {
    throw new Error("useAi doit être utilisé dans <AiProvider>");
  }
  return context;
}

export type { NiveauId, SerieId };
