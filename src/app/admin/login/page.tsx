import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { LoginForm } from "@/components/admin/login-form";
import { getAdminSession } from "@/lib/admin/auth";
import { fr } from "@/lib/i18n/fr";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Connexion auteur",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ suite?: string }>;
}) {
  const { suite } = await searchParams;
  const session = await getAdminSession();
  const target = suite?.startsWith("/admin") ? suite : "/admin";
  if (session) redirect(target);

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-5 py-12">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line-strong bg-[var(--accent-soft)] font-display text-lg font-bold text-[var(--accent)]">
            J
          </span>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-ink-muted">
              {fr.app.name}
            </p>
            <h1 className="font-display text-[1.25rem] font-semibold text-ink">
              {fr.admin.connexion}
            </h1>
          </div>
        </div>

        <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-muted">
          {fr.admin.subtitle}
        </p>

        <LoginForm suite={target} />
      </div>

      <Link
        href="/"
        className="mx-auto mt-5 inline-flex items-center gap-1 text-[0.74rem] text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={12} aria-hidden="true" />
        {fr.admin.retourSite}
      </Link>
    </main>
  );
}
