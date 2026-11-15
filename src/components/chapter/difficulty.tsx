"use client";

import { cn } from "@/lib/utils";
import { fr } from "@/lib/i18n/fr";
import type { Difficulte } from "@/lib/types";

export function GradeBadge({ difficulte }: { difficulte: Difficulte }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-line bg-[var(--surface)] px-2 py-0.5 text-[0.62rem] font-medium text-ink-muted"
      title={`${fr.difficultes.label} : ${fr.difficultes[difficulte]}`}
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3].map((niveau) => (
          <span
            key={niveau}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              niveau <= difficulte ? "bg-[var(--accent)]" : "bg-line-strong",
            )}
          />
        ))}
      </span>
      {fr.difficultes[difficulte]}
    </span>
  );
}
