import Link from "next/link";
import ReactMarkdown, { type Options } from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import type { ReactNode } from "react";

import "katex/contrib/mhchem";

import { slugify } from "@/lib/markdown/sections";
import { cn } from "@/lib/utils";

function childrenToText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) return children.map(childrenToText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return childrenToText((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

const components = {
  h2: ({ children }: { children?: ReactNode }) => {
    const id = slugify(childrenToText(children));
    return (
      <h2 id={id} className="group scroll-mt-24">
        {children}
        <a
          href={`#${id}`}
          aria-label="Lien vers cette section"
          className="ml-2 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100"
        >
          #
        </a>
      </h2>
    );
  },
  h3: ({ children }: { children?: ReactNode }) => {
    const id = slugify(childrenToText(children));
    return <h3 id={id}>{children}</h3>;
  },
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-[var(--accent)] underline underline-offset-4">
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  },
  table: ({ children }: { children?: ReactNode }) => (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table>{children}</table>
    </div>
  ),
};

/**
 * Variante en ligne : les paragraphes sont dépliés pour pouvoir insérer
 * du Markdown (et du LaTeX) dans un libellé de bouton ou une cellule.
 */
const inlineComponents = {
  ...components,
  p: ({ children }: { children?: ReactNode }) => <>{children}</>,
};

export function Markdown({
  children,
  className,
  compact = false,
  inline = false,
}: {
  children: string;
  className?: string;
  compact?: boolean;
  inline?: boolean;
}) {
  if (!children?.trim()) return null;

  const plugins: Pick<Options, "remarkPlugins" | "rehypePlugins"> = {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false, trust: false, throwOnError: false }]],
  };

  if (inline) {
    return (
      <span className={cn("prose-etude prose-inline", className)}>
        <ReactMarkdown {...plugins} components={inlineComponents}>
          {children}
        </ReactMarkdown>
      </span>
    );
  }

  return (
    <div
      className={cn(
        "prose-etude",
        compact && "text-[0.94rem] leading-[1.7] [&>p]:my-2 [&_.katex-display]:my-3",
        className,
      )}
    >
      <ReactMarkdown {...plugins} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
