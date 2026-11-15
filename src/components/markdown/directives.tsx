import {
  BookMarked,
  ChevronDown,
  Info,
  Lightbulb,
  ListChecks,
  Sigma,
  TriangleAlert,
} from "lucide-react";
import type { ReactNode } from "react";

import { Markdown } from "@/components/markdown/markdown";
import { splitDirectives } from "@/lib/markdown/sections";
import { cn } from "@/lib/utils";

const CONFIG: Record<
  string,
  { label: string; icon: ReactNode; tone: string; collapsible?: boolean }
> = {
  demo: {
    label: "Démonstration",
    icon: <Sigma size={15} aria-hidden="true" />,
    tone: "border-indigo-400/25 bg-indigo-400/[0.06]",
    collapsible: true,
  },
  methode: {
    label: "Méthode",
    icon: <ListChecks size={15} aria-hidden="true" />,
    tone: "border-sky-400/25 bg-sky-400/[0.06]",
  },
  exemple: {
    label: "Exemple",
    icon: <Lightbulb size={15} aria-hidden="true" />,
    tone: "border-emerald-400/25 bg-emerald-400/[0.06]",
  },
  remarque: {
    label: "Remarque",
    icon: <Info size={15} aria-hidden="true" />,
    tone: "border-sky-400/20 bg-sky-400/[0.04]",
  },
  erreur: {
    label: "Erreur fréquente",
    icon: <TriangleAlert size={15} aria-hidden="true" />,
    tone: "border-red-400/25 bg-red-400/[0.06]",
  },
  piege: {
    label: "Piège classique",
    icon: <TriangleAlert size={15} aria-hidden="true" />,
    tone: "border-amber-400/25 bg-amber-400/[0.06]",
  },
  definition: {
    label: "Définition",
    icon: <BookMarked size={15} aria-hidden="true" />,
    tone: "border-indigo-400/25 bg-indigo-400/[0.05]",
  },
  formule: {
    label: "Formule",
    icon: <Sigma size={15} aria-hidden="true" />,
    tone: "border-[var(--border-accent)] bg-[var(--accent-soft)]",
  },
};

export function DirectiveBlocks({
  markdown,
  className,
  compact = false,
}: {
  markdown: string;
  className?: string;
  compact?: boolean;
}) {
  const segments = splitDirectives(markdown);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {segments.map((segment, index) => {
        if (segment.kind === "markdown") {
          return <Markdown key={index} compact={compact}>{segment.content}</Markdown>;
        }

        const config = CONFIG[segment.name] ?? CONFIG.remarque;
        const title = segment.title || config.label;

        if (config.collapsible) {
          return (
            <details
              key={index}
              className={cn(
                "group rounded-2xl border px-4 py-3 transition-colors",
                config.tone,
              )}
            >
              <summary className="flex cursor-pointer list-none items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-soft marker:content-none">
                <span className="text-[var(--accent)]">{config.icon}</span>
                <span className="flex-1">{title}</span>
                <span className="hidden text-[0.62rem] font-medium normal-case tracking-normal text-ink-muted sm:inline">
                  dépliable
                </span>
                <ChevronDown
                  size={15}
                  className="text-ink-muted transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="mt-3 border-t border-line/70 pt-3">
                <Markdown compact={compact}>{segment.content}</Markdown>
              </div>
            </details>
          );
        }

        return (
          <section
            key={index}
            className={cn("rounded-2xl border px-4 py-3.5", config.tone)}
          >
            <h4 className="mb-2 flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.13em] text-ink-soft">
              <span className="text-[var(--accent)]">{config.icon}</span>
              {title}
            </h4>
            <Markdown compact={compact}>{segment.content}</Markdown>
          </section>
        );
      })}
    </div>
  );
}
