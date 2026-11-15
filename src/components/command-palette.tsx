"use client";

import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  BookOpen,
  CornerDownLeft,
  FileText,
  LayoutDashboard,
  ListChecks,
  NotebookPen,
  Plus,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";

import { useContent } from "@/components/providers/content-provider";
import { useNotes } from "@/components/providers/notes-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { useMounted, useUi } from "@/components/providers/ui-provider";
import { fr } from "@/lib/i18n/fr";
import { chapitreHref, resumeHref } from "@/lib/routes";
import { matiereAccent } from "@/lib/subjects";
import { cn, truncate } from "@/lib/utils";
import type { MatiereId } from "@/lib/types";

interface Item {
  id: string;
  group: string;
  title: string;
  hint?: string;
  icon: ReactNode;
  accent?: MatiereId;
  run: () => void;
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function CommandPalette() {
  const { paletteOpen, setPaletteOpen, setAiOpen, setNotesOpen } = useUi();
  const { chapitres, exercices, chapitresProfil } = useContent();
  const { notes, createNote } = useNotes();
  const { profile } = useProfile();
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const mounted = useMounted();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!paletteOpen) return;
    const timer = window.setTimeout(() => {
      setQuery("");
      setActive(0);
      inputRef.current?.focus();
    }, 40);
    return () => window.clearTimeout(timer);
  }, [paletteOpen]);

  const close = useCallback(() => setPaletteOpen(false), [setPaletteOpen]);

  const items = useMemo<Item[]>(() => {
    if (!mounted) return [];
    const visibles = profile ? chapitresProfil(profile) : chapitres;
    const visiblesIds = new Set(visibles.map((chapitre) => chapitre.id));

    const navigation: Item[] = [
      {
        id: "nav-tableau",
        group: fr.palette.navigation,
        title: fr.nav.tableau,
        icon: <LayoutDashboard size={15} />,
        run: () => router.push("/tableau-de-bord"),
      },
      {
        id: "nav-cours",
        group: fr.palette.navigation,
        title: fr.nav.cours,
        icon: <BookOpen size={15} />,
        run: () => router.push("/cours"),
      },
      {
        id: "nav-resumes",
        group: fr.palette.navigation,
        title: fr.nav.resumes,
        icon: <FileText size={15} />,
        run: () => router.push("/resumes"),
      },
      {
        id: "nav-exercices",
        group: fr.palette.navigation,
        title: fr.nav.exercices,
        icon: <ListChecks size={15} />,
        run: () => router.push("/exercices"),
      },
      {
        id: "nav-notes",
        group: fr.palette.navigation,
        title: fr.nav.notes,
        icon: <NotebookPen size={15} />,
        run: () => router.push("/notes"),
      },
      {
        id: "nav-reglages",
        group: fr.palette.navigation,
        title: fr.nav.reglages,
        icon: <Settings size={15} />,
        run: () => router.push("/reglages"),
      },
    ];

    const actions: Item[] = [
      {
        id: "action-note",
        group: fr.palette.actions,
        title: fr.palette.nouveauNote,
        icon: <Plus size={15} />,
        run: () => {
          createNote({});
          setNotesOpen(true);
        },
      },
      {
        id: "action-ia",
        group: fr.palette.actions,
        title: fr.palette.demanderIa,
        icon: <Sparkles size={15} />,
        run: () => setAiOpen(true),
      },
    ];

    const chapitresItems: Item[] = visibles.map((chapitre) => ({
      id: chapitre.id,
      group: fr.palette.chapitres,
      title: chapitre.titre,
      hint: `${fr.niveaux[chapitre.niveau]} · ${fr.matieres[chapitre.matiere]}`,
      icon: <BookOpen size={15} />,
      accent: chapitre.matiere,
      run: () => router.push(chapitreHref(chapitre)),
    }));

    const resumesItems: Item[] = visibles
      .filter((chapitre) => chapitre.hasResume)
      .map((chapitre) => ({
        id: `resume-${chapitre.id}`,
        group: fr.palette.chapitres,
        title: `${fr.chapitre.resume} · ${chapitre.titre}`,
        hint: `${fr.niveaux[chapitre.niveau]} · ${fr.matieres[chapitre.matiere]}`,
        icon: <FileText size={15} />,
        accent: chapitre.matiere,
        run: () => router.push(resumeHref(chapitre)),
      }));

    const exercicesItems: Item[] = exercices
      .filter((exercice) => visiblesIds.has(exercice.chapitreId))
      .map((exercice) => ({
        id: exercice.id,
        group: fr.palette.exercices,
        title: exercice.titre,
        hint: `${fr.typesExercice[exercice.type]} · ${fr.difficultes[exercice.difficulte]}`,
        icon: <ListChecks size={15} />,
        accent: exercice.matiere,
        run: () =>
          router.push(
            `/exercices?chapitre=${encodeURIComponent(exercice.chapitreId)}&matiere=${exercice.matiere}`,
          ),
      }));

    const notesItems: Item[] = notes.map((note) => ({
      id: note.id,
      group: fr.palette.notes,
      title: note.titre || fr.notes.nouvelle,
      hint: truncate(note.contenu, 60) || undefined,
      icon: <NotebookPen size={15} />,
      run: () => {
        setNotesOpen(true);
      },
    }));

    return [
      ...actions,
      ...navigation,
      ...chapitresItems,
      ...resumesItems,
      ...exercicesItems,
      ...notesItems,
    ];
  }, [
    mounted,
    profile,
    chapitres,
    chapitresProfil,
    exercices,
    notes,
    createNote,
    router,
    setAiOpen,
    setNotesOpen,
  ]);

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) {
      return items.slice(0, 16);
    }
    const tokens = needle.split(/\s+/).filter(Boolean);
    return items
      .map((item) => {
        const haystack = normalize(`${item.title} ${item.hint ?? ""} ${item.group}`);
        let score = 0;
        for (const token of tokens) {
          const index = haystack.indexOf(token);
          if (index === -1) return { item, score: -1 };
          score += index === 0 ? 4 : 2;
        }
        return { item, score };
      })
      .filter((entry) => entry.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 24)
      .map((entry) => entry.item);
  }, [items, query]);

  const updateQuery = (value: string) => {
    setQuery(value);
    setActive(0);
  };

  const grouped = useMemo(() => {
    const groups: { name: string; entries: Item[] }[] = [];
    for (const item of filtered) {
      const last = groups.at(-1);
      if (last && last.name === item.group) last.entries.push(item);
      else groups.push({ name: item.group, entries: [item] });
    }
    return groups;
  }, [filtered]);

  const flat = useMemo(() => grouped.flatMap((group) => group.entries), [grouped]);

  const runItem = useCallback(
    (item: Item | undefined) => {
      if (!item) return;
      close();
      item.run();
    },
    [close],
  );

  useEffect(() => {
    if (!paletteOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((current) => (flat.length ? (current + 1) % flat.length : 0));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((current) => (flat.length ? (current - 1 + flat.length) % flat.length : 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        runItem(flat[active]);
      } else if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [paletteOpen, flat, active, runItem, close]);

  useEffect(() => {
    const element = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    element?.scrollIntoView({ block: "nearest" });
  }, [active]);

  useEffect(() => {
    if (!paletteOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [paletteOpen]);

  if (!mounted || !paletteOpen || pathname.startsWith("/admin")) return null;

  return createPortal(
    <div className="fixed inset-0 z-[85] flex items-start justify-center px-3 pt-[12vh]">
      <div
        className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={fr.palette.placeholder}
        className="glass-strong animate-scale-in relative w-full max-w-xl overflow-hidden rounded-2xl border-line-strong shadow-2xl"
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <Search size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder={fr.palette.placeholder}
            className="min-w-0 flex-1 bg-transparent text-[0.9rem] text-ink outline-none placeholder:text-ink-muted"
            aria-label={fr.palette.placeholder}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="kbd shrink-0">Esc</kbd>
        </div>

        <div ref={listRef} className="max-h-[58vh] overflow-y-auto px-2 py-2" role="listbox">
          {flat.length === 0 ? (
            <p className="px-3 py-8 text-center text-[0.82rem] text-ink-muted">
              {fr.palette.aucun}
            </p>
          ) : (
            grouped.map((group) => (
              <div key={group.name} className="mb-1">
                <p className="px-3 pb-1 pt-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  {group.name}
                </p>
                {group.entries.map((item) => {
                  const index = flat.indexOf(item);
                  const isActive = index === active;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      data-index={index}
                      onMouseEnter={() => setActive(index)}
                      onClick={() => runItem(item)}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors",
                        item.accent && matiereAccent(item.accent),
                        isActive
                          ? "bg-[var(--accent-soft)] text-ink"
                          : "text-ink-soft hover:bg-[var(--surface)]",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                          isActive
                            ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                            : "bg-[var(--surface)] text-ink-muted",
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.84rem] font-medium">
                          {item.title}
                        </span>
                        {item.hint && (
                          <span className="block truncate text-[0.68rem] text-ink-muted">
                            {item.hint}
                          </span>
                        )}
                      </span>
                      {isActive && (
                        <CornerDownLeft size={13} className="shrink-0 text-ink-muted" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-3 border-t border-line px-4 py-2 text-[0.64rem] text-ink-muted">
          <span className="inline-flex items-center gap-1">
            <kbd className="kbd">↑</kbd>
            <kbd className="kbd">↓</kbd>
            {fr.palette.naviguer}
          </span>
          <span className="inline-flex items-center gap-1">
            <kbd className="kbd">↵</kbd>
            {fr.palette.ouvrir}
          </span>
          <span className="ml-auto inline-flex items-center gap-1">
            <kbd className="kbd">Esc</kbd>
            {fr.palette.fermer}
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
