"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { NotebookPen, Sparkles } from "lucide-react";

import { AiPanel } from "@/components/ai/ai-panel";
import { NotesPanel } from "@/components/notes/notes-panel";
import {
  useIsMobile,
  useMounted,
  useUi,
  type BubblePosition,
} from "@/components/providers/ui-provider";
import { fr } from "@/lib/i18n/fr";
import { cn } from "@/lib/utils";

const SIZE = 56;
const EDGE = 16;
const MOBILE_NAV_SPACE = 78;

interface BubbleProps {
  id: "ai" | "notes";
  label: string;
  badge?: boolean;
  open: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

function Bubble({ id, label, badge, open, onClick, icon }: BubbleProps) {
  const { bubbles, setBubblePosition } = useUi();
  const isMobile = useIsMobile();
  const stored = bubbles[id];

  const [dragPosition, setDragPosition] = useState<{ left: number; bottom: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef<{
    startX: number;
    startY: number;
    originLeft: number;
    originBottom: number;
    moved: boolean;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const resolve = useCallback(
    (position: BubblePosition) => {
      if (typeof window === "undefined") return { left: 0, bottom: 0 };
      const left =
        position.side === "right" ? window.innerWidth - SIZE - EDGE : EDGE;
      const minBottom = isMobile ? MOBILE_NAV_SPACE : 16;
      return {
        left,
        bottom: Math.max(minBottom, position.bottom),
      };
    },
    [isMobile],
  );

  const position = dragPosition ?? resolve(stored);

  const onPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
      originLeft: position.left,
      originBottom: position.bottom,
      moved: false,
    };
    buttonRef.current?.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const state = dragState.current;
    if (!state) return;
    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) state.moved = true;
    if (!state.moved) return;

    const minBottom = isMobile ? MOBILE_NAV_SPACE : 16;
    const maxBottom = window.innerHeight - SIZE - 16;
    const maxLeft = window.innerWidth - SIZE - EDGE;

    setDragPosition({
      left: Math.min(maxLeft, Math.max(EDGE, state.originLeft + dx)),
      bottom: Math.min(maxBottom, Math.max(minBottom, state.originBottom - dy)),
    });
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const state = dragState.current;
    dragState.current = null;
    setDragging(false);
    buttonRef.current?.releasePointerCapture?.(event.pointerId);
    if (!state) return;

    if (!state.moved) {
      onClick();
      return;
    }

    const current = position;
    const side: "left" | "right" =
      current.left + SIZE / 2 < window.innerWidth / 2 ? "left" : "right";
    const next: BubblePosition = {
      side,
      bottom: Math.round(current.bottom),
    };
    setBubblePosition(id, next);
    setDragPosition(null);
  };

  const style = { left: position.left, bottom: position.bottom };

  return (
    <button
      ref={buttonRef}
      type="button"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClick={(event) => {
        // Le clic clavier (Entrée / Espace) sans déplacement ouvre le panneau.
        if (event.detail === 0) onClick();
      }}
      aria-label={label}
      aria-expanded={open}
      title={label}
      style={style}
      className={cn(
        "group fixed z-[55] flex touch-none select-none items-center justify-center rounded-full border shadow-lg transition-[transform,box-shadow,background-color] duration-200 no-print",
        "h-14 w-14",
        dragging ? "scale-110 cursor-grabbing" : "cursor-grab active:scale-95",
        id === "ai"
          ? "border-[var(--border-accent)] bg-[var(--accent-strong)] text-[var(--accent-contrast)] shadow-[0_14px_40px_-12px_var(--accent-glow)]"
          : "border-line-strong bg-[var(--bg-elevated)] text-ink-soft hover:text-ink",
        open && "ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--bg)]",
      )}
    >
      {icon}
      {badge && !open && (
        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[var(--bg)] bg-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--bg)]" />
        </span>
      )}
      <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-lg border border-line bg-[var(--bg-elevated)] px-2 py-1 text-[0.66rem] text-ink-soft opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        {label}
      </span>
    </button>
  );
}

export function BubbleDock() {
  const pathname = usePathname();
  const { aiOpen, notesOpen, setAiOpen, setNotesOpen, introDone } = useUi();
  const ready = useMounted();

  // Pendant l'introduction de l'accueil, les bulles restent invisibles.
  // Dans l'espace auteur, on garde une interface dépouillée.
  const masquer = pathname.startsWith("/admin") || (pathname === "/" && !introDone);

  if (!ready) return null;
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <div
        className={cn(
          "transition-opacity duration-500",
          masquer && "pointer-events-none opacity-0",
        )}
        aria-hidden={masquer || undefined}
      >
        <Bubble
          id="notes"
          label={fr.notes.title}
          open={notesOpen}
          onClick={() => setNotesOpen(!notesOpen)}
          icon={<NotebookPen size={21} aria-hidden="true" />}
        />
        <Bubble
          id="ai"
          label={fr.ai.title}
          badge
          open={aiOpen}
          onClick={() => setAiOpen(!aiOpen)}
          icon={<Sparkles size={22} aria-hidden="true" />}
        />
      </div>
      <AiPanel />
      <NotesPanel />
    </>
  );
}
