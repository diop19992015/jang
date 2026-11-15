import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

import { fr } from "@/lib/i18n/fr";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong bg-[var(--accent-soft)] font-display text-xl font-bold text-[var(--accent)]">
        J
      </span>
      <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-2 font-display text-[clamp(1.8rem,1.4rem+2vw,2.6rem)] font-semibold leading-tight text-ink">
        {fr.commun.introuvable}
      </h1>
      <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-ink-muted">
        {fr.commun.introuvableTexte}
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/tableau-de-bord"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-strong)] px-4 py-2 text-[0.82rem] font-semibold text-[var(--accent-contrast)]"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          {fr.commun.retourTableau}
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-[0.82rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
        >
          <Compass size={14} aria-hidden="true" />
          {fr.nav.accueil}
        </Link>
      </div>
    </main>
  );
}
