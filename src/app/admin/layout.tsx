import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LogOut, ShieldCheck } from "lucide-react";

import { logoutAction } from "@/app/admin/actions";
import { getAdminSession } from "@/lib/admin/auth";
import { fr } from "@/lib/i18n/fr";

export const metadata: Metadata = {
  title: "Espace auteur",
  robots: { index: false, follow: false },
};

const LIENS = [
  { href: "/admin", label: fr.admin.tableau },
  { href: "/admin/contenu", label: fr.admin.contenus },
  { href: "/admin/import", label: fr.admin.import },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // La page de connexion a son propre habillage.
  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 py-5 sm:px-6">
      <header className="glass mb-5 flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-[var(--accent-soft)] font-display text-sm font-bold text-[var(--accent)]">
          J
        </span>
        <div className="min-w-0">
          <p className="font-display text-[0.95rem] font-semibold text-ink">
            {fr.admin.title}
          </p>
          <p className="inline-flex items-center gap-1 text-[0.64rem] text-ink-muted">
            <ShieldCheck size={10} aria-hidden="true" />
            {fr.admin.connecte} {session.email}
          </p>
        </div>

        <nav className="ml-auto flex flex-wrap items-center gap-1" aria-label={fr.admin.title}>
          {LIENS.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="rounded-full px-3 py-1.5 text-[0.76rem] text-ink-muted transition-colors hover:bg-[var(--surface)] hover:text-ink"
            >
              {lien.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/tableau-de-bord"
            className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-[0.72rem] text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={12} aria-hidden="true" />
            {fr.admin.retourSite}
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-[0.72rem] text-ink-muted transition-colors hover:text-ink"
            >
              <LogOut size={12} aria-hidden="true" />
              {fr.admin.deconnexion}
            </button>
          </form>
        </div>
      </header>

      <main className="flex-1 pb-10">{children}</main>
    </div>
  );
}
