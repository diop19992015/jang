"use client";

import { createPortal } from "react-dom";
import {
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

import { useMounted } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

function usePortalTarget() {
  const mounted = useMounted();
  return mounted ? document.body : null;
}

function useDialogBehaviour(open: boolean, onClose: () => void) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // `onClose` vient souvent d'une fonction inline : sa référence change à chaque
  // rendu. On la place dans un ref pour que l'effet ne dépende QUE de `open`.
  // Sans ça, chaque frappe relançait l'effet et son timer de focus à 60 ms
  // volait le curseur du champ de saisie.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const focusTimer = window.setTimeout(() => {
      const panel = panelRef.current;
      if (!panel) return;
      // `data-autofocus` doit gagner : un seul `querySelector` avec plusieurs
      // sélecteurs choisirait le premier en ordre documentaire (un bouton
      // d'en-tête, avant le champ de saisie).
      const target =
        panel.querySelector<HTMLElement>("[data-autofocus]") ??
        panel.querySelector<HTMLElement>(
          "button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])",
        ) ??
        panel;
      target.focus({ preventScroll: true });
    }, 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), [href], input:not([disabled]), textarea, select, [tabindex]:not([tabindex='-1'])",
        ),
      ).filter((element) => element.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previous?.focus?.({ preventScroll: true });
    };
    // Dépendance unique : l'ouverture. `onClose` est lu via son ref.
  }, [open]);

  return panelRef;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
}: ModalProps) {
  const target = usePortalTarget();
  const titleId = useId();
  const panelRef = useDialogBehaviour(open, onClose);

  if (!open || !target) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  } as const;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cn(
          "glass-strong relative m-0 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl border-line-strong sm:m-4 sm:rounded-3xl",
          sizes[size],
          "animate-scale-in",
          className,
        )}
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
          <div>
            <h2 id={titleId} className="font-display text-lg font-semibold text-ink">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="icon-btn shrink-0"
            aria-label="Fermer"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer && (
          <footer className="border-t border-line px-5 py-4">{footer}</footer>
        )}
      </div>
    </div>,
    target,
  );
}

interface PanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  /** Ton du badge : `demo` (ambre) par défaut, `accent` pour un fournisseur réel. */
  badgeTone?: "demo" | "accent";
  icon?: ReactNode;
  headerActions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  labelledBy?: string;
}

/**
 * Panneau latéral (ordinateur) / plein écran depuis le bas (mobile).
 * Utilisé par l'assistant IA et le bloc-notes.
 */
export function SidePanel({
  open,
  onClose,
  title,
  subtitle,
  badge,
  badgeTone = "demo",
  icon,
  headerActions,
  children,
  footer,
  className,
}: PanelProps) {
  const target = usePortalTarget();
  const titleId = useId();
  const panelRef = useDialogBehaviour(open, onClose);

  if (!open || !target) return null;

  return createPortal(
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cn(
          "glass-strong absolute inset-0 flex flex-col overflow-hidden border-line-strong",
          "animate-sheet-up",
          "md:inset-y-3 md:right-3 md:left-auto md:w-[min(27rem,42vw)] md:rounded-3xl md:border",
          "md:animate-panel-in",
          className,
        )}
      >
        <header className="flex items-start gap-3 border-b border-line px-4 py-3.5">
          {icon && (
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
              {icon}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 id={titleId} className="truncate font-display text-[0.98rem] font-semibold text-ink">
                {title}
              </h2>
              {badge && (
                <span
                  className={cn(
                    "badge shrink-0",
                    badgeTone === "accent" ? "badge-accent" : "badge-demo",
                  )}
                >
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="mt-0.5 truncate text-[0.72rem] text-ink-muted">{subtitle}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {headerActions}
            <button
              type="button"
              onClick={onClose}
              className="icon-btn h-8 w-8"
              aria-label="Fermer"
            >
              <X size={15} aria-hidden="true" />
            </button>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        {footer && <div className="border-t border-line">{footer}</div>}
      </div>
    </div>,
    target,
  );
}
