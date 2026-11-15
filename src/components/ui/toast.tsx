"use client";

import { CircleAlert, CircleCheck, Info, X } from "lucide-react";

import { useUi } from "@/components/providers/ui-provider";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts, dismissToast } = useUi();

  if (!toasts.length) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-24 z-[95] flex flex-col items-center gap-2 px-4 md:bottom-6 md:left-auto md:right-6 md:items-end"
      role="status"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "glass-strong pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl px-4 py-3 text-sm shadow-lg",
            "animate-fade-up",
          )}
        >
          <span
            className={cn(
              "mt-0.5 shrink-0",
              toast.tone === "success" && "text-emerald-400",
              toast.tone === "error" && "text-red-400",
              toast.tone === "info" && "text-[var(--accent)]",
            )}
          >
            {toast.tone === "success" ? (
              <CircleCheck size={17} />
            ) : toast.tone === "error" ? (
              <CircleAlert size={17} />
            ) : (
              <Info size={17} />
            )}
          </span>
          <p className="flex-1 leading-relaxed text-ink-soft">{toast.message}</p>
          <button
            type="button"
            onClick={() => dismissToast(toast.id)}
            className="text-ink-muted transition-colors hover:text-ink"
            aria-label="Fermer la notification"
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}
