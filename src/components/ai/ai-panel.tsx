"use client";

import {
  ArrowUp,
  Camera,
  ChevronDown,
  Copy,
  GraduationCap,
  History,
  Image as ImageIcon,
  Lightbulb,
  Loader2,
  MessageSquarePlus,
  NotebookPen,
  RotateCcw,
  Sparkles,
  Square,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

import { StreamingMarkdown } from "@/components/markdown/streaming-markdown";
import { useAi } from "@/components/providers/ai-provider";
import { useContent } from "@/components/providers/content-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { useUi } from "@/components/providers/ui-provider";
import { SidePanel } from "@/components/ui/modal";
import { fr } from "@/lib/i18n/fr";
import { cn, formatRelative, uid } from "@/lib/utils";
import type { AiMode, MatiereId, NiveauId, SerieId } from "@/lib/types";
import { NIVEAUX, SERIES } from "@/lib/types";
import { matieresDuNiveau } from "@/lib/subjects";

const MODES: { id: AiMode; label: string; icon: typeof Sparkles }[] = [
  { id: "question", label: fr.ai.poser, icon: Sparkles },
  { id: "correction", label: fr.ai.corriger, icon: Camera },
  { id: "expliquer", label: fr.ai.expliquer, icon: GraduationCap },
  { id: "interroger", label: fr.ai.interroger, icon: Lightbulb },
];

const PLACEHOLDERS: Record<AiMode, string> = {
  question: fr.ai.placeholder,
  correction: fr.ai.placeholderCorrection,
  expliquer: fr.ai.placeholderExpliquer,
  interroger: fr.ai.placeholderInterroger,
};

/** Réduit une photo à 1 600 px de côté et la convertit en data URL. */
async function compressImage(file: File): Promise<string> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Lecture impossible"));
    reader.readAsDataURL(file);
  });

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const element = new window.Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error("Image invalide"));
      element.src = dataUrl;
    });
    const max = 1600;
    const ratio = Math.min(1, max / Math.max(image.width, image.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(image.width * ratio);
    canvas.height = Math.round(image.height * ratio);
    const context = canvas.getContext("2d");
    if (!context) return dataUrl;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.72);
  } catch {
    return dataUrl;
  }
}

const MAX_IMAGES = 3;

export function AiPanel() {
  const { aiOpen, setAiOpen } = useUi();
  const {
    messages,
    conversations,
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
  } = useAi();
  const { chapitres } = useContent();
  const { profile } = useProfile();
  const { toast } = useUi();

  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [votes, setVotes] = useState<Record<string, "up" | "down">>({});
  const [showHistory, setShowHistory] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [busyImage, setBusyImage] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const cameraRef = useRef<HTMLInputElement | null>(null);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  useEffect(() => {
    if (!aiOpen) return;
    if (profile) {
      setContext({ niveau: profile.niveau, serie: profile.serie });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aiOpen, profile?.niveau, profile?.serie]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  const chapitresDisponibles = useMemo(
    () =>
      chapitres.filter(
        (chapitre) =>
          chapitre.niveau === context.niveau &&
          (!context.matiere || chapitre.matiere === context.matiere) &&
          (!context.serie ||
            !chapitre.series.length ||
            chapitre.series.includes(context.serie)),
      ),
    [chapitres, context.niveau, context.matiere, context.serie],
  );

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!selected.length) return;

    if (images.length + selected.length > MAX_IMAGES) {
      toast(fr.ai.tropImages, "error");
      return;
    }

    setBusyImage(true);
    try {
      const compressed = await Promise.all(selected.map((file) => compressImage(file)));
      setImages((current) => [...current, ...compressed].slice(0, MAX_IMAGES));
      if (mode !== "correction") setMode("correction");
    } finally {
      setBusyImage(false);
    }
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    event?.preventDefault();
    if (streaming) return;
    const text = prompt.trim();
    if (!text && images.length === 0) return;
    const outgoing = text || fr.ai.placeholderCorrection;
    setPrompt("");
    const attached = images;
    setImages([]);
    await send(outgoing, { images: attached });
  };

  const voter = async (messageId: string, vote: "up" | "down") => {
    setVotes((current) => ({ ...current, [messageId]: vote }));
    await fetch("/api/ai/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vote, mode }),
    }).catch(() => null);
  };

  const copier = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast(fr.ai.copie, "success");
    } catch {
      toast(fr.ai.erreur, "error");
    }
  };

  const quick = async (kind: "autre" | "exemple" | "similaire" | "indice") => {
    if (streaming) return;
    if (kind === "indice") {
      await send(fr.ai.indiceEnvoye, { hintOnly: true });
      return;
    }
    const text =
      kind === "autre"
        ? "Explique autrement, plus simplement, avec les mots du programme sénégalais."
        : kind === "exemple"
          ? "Donne un exemple concret et résolu, étape par étape."
          : "Propose-moi un exercice similaire, sans donner la solution tout de suite.";
    await send(text);
  };

  const suggestion = async (text: string) => {
    if (streaming) return;
    await send(text);
  };

  const dernierChapitre = chapitres.find(
    (chapitre) => chapitre.id === context.chapitreId,
  );

  const contexteLabel = `${fr.niveaux[context.niveau]}${context.serie ? ` · ${context.serie}` : ""}${
    dernierChapitre ? ` · ${dernierChapitre.titre}` : ""
  }`;

  const enAttente =
    streaming && messages.at(-1)?.role === "assistant" && !messages.at(-1)?.content;

  const dernierUtilisateur = [...messages].reverse().find((message) => message.role === "user");

  const reessayer = () => {
    if (streaming || !dernierUtilisateur) return;
    void send(dernierUtilisateur.content);
  };

  return (
    <SidePanel
      open={aiOpen}
      onClose={() => setAiOpen(false)}
      title={fr.ai.title}
      subtitle={fr.ai.subtitle}
      icon={<Sparkles size={17} aria-hidden="true" />}
      badge={
        provider === "mock" ? fr.commun.demo : provider === "gemini" ? fr.ai.fournisseurGemini : undefined
      }
      badgeTone={provider === "mock" ? "demo" : "accent"}
      headerActions={
        <>
          <button
            type="button"
            onClick={newConversation}
            className="icon-btn h-8 w-8"
            aria-label={fr.ai.nouveau}
            title={fr.ai.nouveau}
          >
            <MessageSquarePlus size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setShowHistory((current) => !current)}
            className={cn("icon-btn h-8 w-8", showHistory && "text-[var(--accent)]")}
            aria-label={fr.ai.historique}
            aria-pressed={showHistory}
            title={fr.ai.historique}
          >
            <History size={15} aria-hidden="true" />
          </button>
        </>
      }
      footer={
        <form onSubmit={handleSubmit} className="px-3 pb-3 pt-2.5">
          <div className="mb-2 flex flex-wrap items-center gap-1">
            {MODES.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  aria-pressed={mode === item.id}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[0.68rem] transition-colors",
                    mode === item.id
                      ? "border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "border-line text-ink-muted hover:text-ink",
                  )}
                >
                  <Icon size={11} aria-hidden="true" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {images.length > 0 && (
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              {images.map((image, index) => (
                <div key={`${index}-${image.slice(-24)}`} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={fr.ai.photoAjoutee}
                    className="h-12 w-12 rounded-lg border border-line object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setImages((current) => current.filter((_, position) => position !== index))
                    }
                    className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-[var(--bg-elevated)] text-ink-soft"
                    aria-label={fr.actions.supprimer}
                  >
                    <X size={11} aria-hidden="true" />
                  </button>
                </div>
              ))}
              <span className="self-center text-[0.62rem] text-ink-muted">
                {images.length}/{MAX_IMAGES}
              </span>
            </div>
          )}

          <div className="flex items-end gap-1.5 rounded-2xl border border-line bg-[var(--bg-elevated)] px-2 py-1.5">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="icon-btn h-8 w-8 shrink-0 border-transparent bg-transparent"
              aria-label={fr.ai.joindre}
              title={fr.ai.joindre}
              disabled={busyImage}
            >
              {busyImage ? (
                <Loader2 size={15} className="animate-spin" aria-hidden="true" />
              ) : (
                <ImageIcon size={15} aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => cameraRef.current?.click()}
              className="icon-btn h-8 w-8 shrink-0 border-transparent bg-transparent"
              aria-label={fr.ai.prendrePhoto}
              title={fr.ai.prendrePhoto}
              disabled={busyImage}
            >
              <Camera size={15} aria-hidden="true" />
            </button>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              data-autofocus
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void handleSubmit();
                }
              }}
              rows={1}
              placeholder={PLACEHOLDERS[mode]}
              className="max-h-28 min-h-[2rem] flex-1 resize-none bg-transparent px-1 py-1.5 text-[0.84rem] text-ink outline-none placeholder:text-ink-muted"
              aria-label={fr.ai.placeholder}
            />
            {streaming ? (
              <button
                type="button"
                onClick={stop}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-line text-ink-soft"
                aria-label={fr.ai.arreter}
              >
                <Square size={13} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={(!prompt.trim() && images.length === 0) || remaining === 0 || !online}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-strong)] text-[var(--accent-contrast)] disabled:opacity-40"
                aria-label={fr.ai.envoyer}
              >
                <ArrowUp size={15} aria-hidden="true" />
              </button>
            )}
          </div>

          {(mode === "correction" || images.length > 0) && (
            <p className="mt-1.5 text-[0.62rem] leading-snug text-ink-muted">
              {fr.ai.rappelPhoto}
            </p>
          )}

          <div className="mt-1.5 flex items-center justify-between gap-2 text-[0.62rem] text-ink-muted">
            <span className="truncate">{contexteLabel}</span>
            <span className={cn("shrink-0", remaining === 0 && "text-amber-400")}>
              {remaining === 0
                ? fr.ai.limiteAtteinte
                : fr.ai.limite.replace("{n}", String(remaining))}
            </span>
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFile}
          />
          <input
            ref={cameraRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFile}
          />
        </form>
      }
    >
      {/* Pastille de contexte */}
      <div className="border-b border-line px-3 py-2">
        <button
          type="button"
          onClick={() => setShowContext((current) => !current)}
          aria-expanded={showContext}
          className="flex w-full items-center gap-2 rounded-xl border border-line bg-[var(--surface)] px-2.5 py-1.5 text-left transition-colors hover:border-line-strong"
        >
          <GraduationCap size={13} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
          <span className="min-w-0 flex-1 truncate text-[0.7rem] text-ink-soft">
            {contexteLabel}
          </span>
          <span className="shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-ink-muted">
            {fr.ai.contexte}
          </span>
          <ChevronDown
            size={12}
            className={cn("shrink-0 text-ink-muted transition-transform", showContext && "rotate-180")}
            aria-hidden="true"
          />
        </button>

        {showContext && (
          <div className="mt-2 grid gap-2 rounded-xl border border-line bg-[var(--bg-elevated)] p-2.5">
            <label className="grid grid-cols-[4.5rem_1fr] items-center gap-2 text-[0.68rem] text-ink-muted">
              <span>{fr.ai.niveau}</span>
              <select
                value={context.niveau}
                onChange={(event) => {
                  const niveau = event.target.value as NiveauId;
                  setContext({
                    niveau,
                    matiere:
                      context.matiere && matieresDuNiveau(niveau).includes(context.matiere)
                        ? context.matiere
                        : null,
                    chapitreId: null,
                    chapitreTitre: null,
                  });
                }}
                className="input py-1 text-[0.74rem]"
              >
                {NIVEAUX.map((niveau) => (
                  <option key={niveau} value={niveau}>
                    {fr.niveaux[niveau]}
                  </option>
                ))}
              </select>
            </label>

            {context.niveau !== "3eme" && (
              <label className="grid grid-cols-[4.5rem_1fr] items-center gap-2 text-[0.68rem] text-ink-muted">
                <span>{fr.ai.serie}</span>
                <select
                  value={context.serie ?? ""}
                  onChange={(event) =>
                    setContext({
                      serie: (event.target.value || null) as SerieId | null,
                      chapitreId: null,
                      chapitreTitre: null,
                    })
                  }
                  className="input py-1 text-[0.74rem]"
                >
                  <option value="">{fr.series.aucune}</option>
                  {SERIES.map((serie) => (
                    <option key={serie} value={serie}>
                      {fr.series[serie]}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="grid grid-cols-[4.5rem_1fr] items-center gap-2 text-[0.68rem] text-ink-muted">
              <span>{fr.ai.matiere}</span>
              <select
                value={context.matiere ?? ""}
                onChange={(event) =>
                  setContext({
                    matiere: (event.target.value || null) as MatiereId | null,
                    chapitreId: null,
                    chapitreTitre: null,
                  })
                }
                className="input py-1 text-[0.74rem]"
              >
                <option value="">{fr.matieres.toutes}</option>
                {matieresDuNiveau(context.niveau).map((matiere) => (
                  <option key={matiere} value={matiere}>
                    {fr.matieres[matiere]}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid grid-cols-[4.5rem_1fr] items-center gap-2 text-[0.68rem] text-ink-muted">
              <span>{fr.ai.chapitre}</span>
              <select
                value={context.chapitreId ?? ""}
                onChange={(event) => {
                  const chapitre = chapitresDisponibles.find(
                    (item) => item.id === event.target.value,
                  );
                  setContext({
                    chapitreId: chapitre?.id ?? null,
                    chapitreTitre: chapitre?.titre ?? null,
                    matiere: chapitre?.matiere ?? context.matiere,
                  });
                }}
                className="input py-1 text-[0.74rem]"
              >
                <option value="">{fr.ai.aucunChapitre}</option>
                {chapitresDisponibles.map((chapitre) => (
                  <option key={chapitre.id} value={chapitre.id}>
                    {chapitre.titre}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
      </div>

      {showHistory ? (
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between px-4 py-2.5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {fr.ai.historique}
            </p>
            {conversations.length > 0 && (
              <button
                type="button"
                onClick={clearHistory}
                className="inline-flex items-center gap-1 text-[0.68rem] text-ink-muted transition-colors hover:text-red-400"
              >
                <Trash2 size={12} aria-hidden="true" />
                {fr.actions.supprimer}
              </button>
            )}
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-4">
            {conversations.length === 0 ? (
              <p className="px-2 py-6 text-center text-[0.78rem] text-ink-muted">
                {fr.ai.aucuneConversation}
              </p>
            ) : (
              <ul className="space-y-1.5">
                {conversations.map((conversation) => {
                  const chapitre = chapitres.find(
                    (item) => item.id === conversation.chapitreId,
                  );
                  return (
                    <li key={conversation.id}>
                      <button
                        type="button"
                        onClick={() => {
                          loadConversation(conversation.id);
                          setShowHistory(false);
                        }}
                        className="w-full rounded-xl border border-line bg-[var(--surface)] px-3 py-2 text-left transition-colors hover:border-line-strong"
                      >
                        <span className="block truncate text-[0.78rem] text-ink">
                          {conversation.titre}
                        </span>
                        <span className="mt-0.5 block truncate text-[0.66rem] text-ink-muted">
                          {chapitre ? `${chapitre.titre} · ` : ""}
                          {formatRelative(conversation.updatedAt)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center px-2 py-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <Sparkles size={22} aria-hidden="true" />
              </span>
              <p className="mt-3 font-display text-[1rem] font-semibold text-ink">
                {fr.ai.bienvenueTitre}
              </p>
              <p className="mt-1.5 max-w-xs text-[0.78rem] leading-relaxed text-ink-muted">
                {fr.ai.bienvenueTexte}
              </p>
              <div className="mt-4 grid w-full gap-1.5">
                {[fr.ai.suggestion1, fr.ai.suggestion2, fr.ai.suggestion3].map((text) => (
                  <button
                    key={text}
                    type="button"
                    onClick={() => suggestion(text)}
                    className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2 text-left text-[0.76rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <ul className="space-y-3">
              {messages.map((message, index) => {
                const isUser = message.role === "user";
                const isLast = index === messages.length - 1;
                return (
                  <li key={message.id} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "max-w-[92%] rounded-2xl px-3 py-2.5",
                        isUser
                          ? "rounded-br-md bg-[var(--accent-strong)] text-[var(--accent-contrast)]"
                          : "rounded-bl-md border border-line bg-[var(--surface)]",
                      )}
                    >
                      {message.imageUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={message.imageUrl}
                          alt={fr.ai.photoAjoutee}
                          className="mb-2 max-h-40 rounded-lg object-contain"
                        />
                      )}
                      {isUser ? (
                        <p className="whitespace-pre-wrap text-[0.82rem] leading-relaxed">
                          {message.content}
                        </p>
                      ) : (
                        <>
                          {message.content ? (
                            <StreamingMarkdown
                              content={message.content}
                              streaming={streaming && isLast}
                              compact
                            />
                          ) : enAttente && isLast ? (
                            <p className="flex items-center gap-2 py-0.5 text-[0.78rem] text-ink-muted">
                              <Loader2 size={13} className="animate-spin" aria-hidden="true" />
                              {fr.ai.streaming}
                            </p>
                          ) : null}

                          {!streaming && message.content && (
                            <div className="mt-2 border-t border-line pt-2">
                              <div className="flex flex-wrap gap-1">
                                <button
                                  type="button"
                                  onClick={() => quick("autre")}
                                  className="rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-muted transition-colors hover:text-ink"
                                >
                                  {fr.ai.expliqueAutrement}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => quick("exemple")}
                                  className="rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-muted transition-colors hover:text-ink"
                                >
                                  {fr.ai.donneExemple}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => quick("similaire")}
                                  className="rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-muted transition-colors hover:text-ink"
                                >
                                  {fr.ai.exerciceSimilaire}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => quick("indice")}
                                  className="rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-muted transition-colors hover:text-ink"
                                >
                                  {fr.ai.indice}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => copier(message.content)}
                                  className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-ink-muted transition-colors hover:text-ink"
                                  aria-label={fr.ai.copier}
                                >
                                  <Copy size={10} aria-hidden="true" />
                                  {fr.ai.copier}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => saveToNotes(message)}
                                  className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[0.64rem] text-[var(--accent)] transition-colors hover:border-[var(--border-accent)]"
                                >
                                  <NotebookPen size={10} aria-hidden="true" />
                                  {fr.ai.enregistrer}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => voter(message.id, "up")}
                                  aria-pressed={votes[message.id] === "up"}
                                  aria-label={fr.ai.avisUtile}
                                  title={fr.ai.avisUtile}
                                  className={cn(
                                    "inline-flex h-[1.35rem] w-[1.55rem] items-center justify-center rounded-full border border-line transition-colors",
                                    votes[message.id] === "up"
                                      ? "border-[var(--border-accent)] text-[var(--accent)]"
                                      : "text-ink-muted hover:text-ink",
                                  )}
                                >
                                  <ThumbsUp size={10} aria-hidden="true" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => voter(message.id, "down")}
                                  aria-pressed={votes[message.id] === "down"}
                                  aria-label={fr.ai.avisInutile}
                                  title={fr.ai.avisInutile}
                                  className={cn(
                                    "inline-flex h-[1.35rem] w-[1.55rem] items-center justify-center rounded-full border border-line transition-colors",
                                    votes[message.id] === "down"
                                      ? "border-[var(--border-accent)] text-[var(--accent)]"
                                      : "text-ink-muted hover:text-ink",
                                  )}
                                >
                                  <ThumbsDown size={10} aria-hidden="true" />
                                </button>
                              </div>
                              <p className="mt-1.5 text-[0.6rem] leading-snug text-ink-muted">
                                {fr.ai.mentionIA}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {!online && (
            <p className="mb-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-[0.72rem] text-amber-300">
              {fr.ai.horsConnexion}
            </p>
          )}

          {error && (
            <div className="mt-2 flex flex-wrap items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2 text-[0.72rem] text-red-300">
              <span className="min-w-0 flex-1">{error}</span>
              {/* Réessayer n'a pas de sens sur un quota épuisé : on le masque. */}
              {dernierUtilisateur && errorCode !== "quota" && (
                <button
                  type="button"
                  onClick={reessayer}
                  disabled={streaming}
                  className="inline-flex items-center gap-1 rounded-full border border-red-400/40 px-2 py-0.5 font-medium text-red-200 transition-colors hover:bg-red-400/10 disabled:opacity-50"
                >
                  <RotateCcw size={11} aria-hidden="true" />
                  {fr.ai.reessayer}
                </button>
              )}
            </div>
          )}

          {note && (
            <p className="mt-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-[0.68rem] leading-snug text-amber-300">
              {note}
            </p>
          )}
        </div>
      )}

      {messages.length > 0 && !streaming && !showHistory && (
        <div className="flex items-center justify-between gap-2 border-t border-line px-3 py-1.5 text-[0.62rem] text-ink-muted">
          <button
            type="button"
            onClick={() => send(fr.ai.indiceEnvoye, { hintOnly: true })}
            className="inline-flex items-center gap-1 transition-colors hover:text-ink"
          >
            <Lightbulb size={11} aria-hidden="true" />
            {fr.ai.indice}
          </button>
          <span className="inline-flex items-center gap-1">
            <RotateCcw size={10} aria-hidden="true" />
            {provider === "mock" ? fr.ai.quotaDemo : fr.ai.quotaReel}
          </span>
        </div>
      )}
    </SidePanel>
  );
}

/** Identifiant stable pour les messages générés localement. */
export const aiMessageId = () => uid("msg");
