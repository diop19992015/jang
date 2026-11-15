"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  LayoutDashboard,
  ListChecks,
  Loader2,
  Moon,
  NotebookPen,
  Search,
  Settings,
  ShieldCheck,
  Sun,
  WifiOff,
  Zap,
} from "lucide-react";

import { useContent } from "@/components/providers/content-provider";
import { useProfile } from "@/components/providers/profile-provider";
import { useProgress } from "@/components/providers/progress-provider";
import { useSettings } from "@/components/providers/settings-provider";
import { useUi } from "@/components/providers/ui-provider";
import { MOBILE_NAV, NAV_ITEMS } from "@/lib/navigation";
import { fr } from "@/lib/i18n/fr";
import { matiereHref } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { matiereAccent, matieresDuNiveau } from "@/lib/subjects";

const ICONS = {
  dashboard: LayoutDashboard,
  book: BookOpen,
  file: FileText,
  exercices: ListChecks,
  dumbbell: ListChecks,
  note: NotebookPen,
  settings: Settings,
} as const;

function NavIcon({ name, size = 17 }: { name: keyof typeof ICONS; size?: number }) {
  const Icon = ICONS[name] ?? LayoutDashboard;
  return <Icon size={size} aria-hidden="true" />;
}

export function useActiveHref() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/tableau-de-bord") return pathname === href;
    if (href === "/cours") {
      return (
        pathname.startsWith("/cours") ||
        pathname.startsWith("/matiere") ||
        pathname.startsWith("/chapitre")
      );
    }
    return pathname.startsWith(href);
  };
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="Jàng — accueil"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-line-strong bg-[var(--accent-soft)] font-display text-lg font-bold text-[var(--accent)] transition-transform group-hover:-rotate-6">
        J
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
            Jàng
          </span>
          <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-ink-muted">
            BAC · BFEM
          </span>
        </span>
      )}
    </Link>
  );
}

function ProfileCard() {
  const { profile, ready } = useProfile();
  const { chapitresProfil } = useContent();
  const { mastery } = useProgress();

  if (!ready) {
    return <div className="skeleton h-[76px] rounded-2xl" />;
  }
  if (!profile) return null;

  const chapitres = chapitresProfil(profile);
  const value = mastery(chapitres);

  return (
    <Link
      href="/reglages"
      className="glass glass-hover block rounded-2xl p-3"
      aria-label="Voir mon profil et mes réglages"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
          {(profile.prenom || "É").slice(0, 1).toUpperCase()}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.8rem] font-medium text-ink">
            {profile.prenom || "Mon parcours"}
          </span>
          <span className="block truncate text-[0.68rem] text-ink-muted">
            {fr.niveaux[profile.niveau]}
            {profile.serie ? ` · ${profile.serie}` : ""}
          </span>
        </span>
        <span className="text-sm font-semibold tabular-nums text-[var(--accent)]">{value}%</span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-[var(--surface-hover)]">
        <div
          className="h-full rounded-full bg-[var(--accent-strong)] transition-[width] duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </Link>
  );
}

function SidebarSubjects() {
  const { profile, ready } = useProfile();
  const { chapitres } = useContent();
  if (!ready || !profile) return null;

  const matieres = matieresDuNiveau(profile.niveau);
  return (
    <div className="mt-6">
      <p className="mb-2 px-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {fr.commun.matieres}
      </p>
      <ul className="space-y-0.5">
        {matieres.map((matiere) => {
          const count = chapitres.filter(
            (chapitre) =>
              chapitre.niveau === profile.niveau &&
              chapitre.matiere === matiere &&
              (profile.serie
                ? !chapitre.series.length || chapitre.series.includes(profile.serie)
                : true),
          ).length;
          return (
            <li key={matiere}>
              <Link
                href={matiereHref(profile.niveau, matiere)}
                className={cn(
                  "group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.82rem] text-ink-muted transition-colors hover:bg-[var(--surface)] hover:text-ink",
                  matiereAccent(matiere),
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                <span className="flex-1 truncate">
                  {fr.matieres[`${matiere}Court` as const]}
                </span>
                <span className="text-[0.65rem] tabular-nums text-ink-muted">{count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Sidebar() {
  const active = useActiveHref();
  const { lite } = useSettings();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[16.5rem] flex-col border-r border-line bg-[var(--bg)]/70 px-3 py-5 backdrop-blur-xl lg:flex">
      <div className="px-2">
        <Logo />
      </div>

      <Link
        href="/tableau-de-bord"
        className="mt-5 flex items-center gap-2.5 rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5 text-[0.78rem] text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <Search size={15} aria-hidden="true" />
        <span className="flex-1">{fr.nav.raccourci}</span>
        <kbd className="kbd">Ctrl K</kbd>
      </Link>

      <nav className="mt-4" aria-label="Navigation principale">
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = active(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.86rem] font-medium transition-colors",
                    isActive
                      ? "bg-[var(--accent-soft)] text-ink"
                      : "text-ink-muted hover:bg-[var(--surface)] hover:text-ink",
                  )}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-[var(--accent-strong)]" />
                  )}
                  <NavIcon name={item.icon} />
                  {fr.nav[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <SidebarSubjects />

      <div className="mt-auto space-y-2">
        {lite && (
          <p className="flex items-center gap-1.5 px-3 text-[0.65rem] text-ink-muted">
            <Zap size={11} aria-hidden="true" />
            {fr.reglages.modeLeger} {fr.reglages.modeLegerActif.toLowerCase()}
          </p>
        )}
        <Link
          href="/admin"
          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[0.78rem] text-ink-muted transition-colors hover:bg-[var(--surface)] hover:text-ink"
        >
          <ShieldCheck size={15} aria-hidden="true" />
          {fr.nav.admin}
          <ArrowUpRight size={12} className="ml-auto" aria-hidden="true" />
        </Link>
        <ProfileCard />
      </div>
    </aside>
  );
}

export function TopBar() {
  const { profile, ready } = useProfile();
  const { setPaletteOpen, setNotesOpen } = useUi();
  const { settings, setSetting, lite } = useSettings();
  const active = useActiveHref();
  const pathname = usePathname();
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  const current = NAV_ITEMS.find((item) => active(item.href));
  const label =
    current?.key === "tableau" && pathname === "/tableau-de-bord"
      ? fr.nav.tableau
      : current
        ? fr.nav[current.key]
        : "";

  const isLight =
    settings.theme === "clair" ||
    (settings.theme === "systeme" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-[var(--bg)]/70 backdrop-blur-xl">
      <div className="wrap flex h-14 items-center gap-3">
        <div className="lg:hidden">
          <Logo compact />
        </div>
        <span className="hidden text-[0.82rem] font-medium text-ink-muted lg:block">
          {label}
        </span>

        <div className="ml-auto flex items-center gap-1.5">
          {offline && (
            <span className="hidden items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[0.68rem] text-amber-300 sm:flex">
              <WifiOff size={12} aria-hidden="true" />
              {fr.commun.horsLigne}
            </span>
          )}
          {lite && (
            <span
              className="hidden items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[0.68rem] text-ink-muted sm:flex"
              title={fr.reglages.modeLegerAide}
            >
              <Zap size={12} aria-hidden="true" />
              {fr.reglages.modeLegerActif}
            </span>
          )}

          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="icon-btn"
            aria-label={fr.nav.raccourci}
            title={fr.nav.raccourci}
          >
            <Search size={16} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setSetting("theme", isLight ? "sombre" : "clair")}
            className="icon-btn"
            aria-label={isLight ? "Activer le thème sombre" : "Activer le thème clair"}
            title={isLight ? "Thème sombre" : "Thème clair"}
          >
            {isLight ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
          </button>

          <Link
            href="/reglages"
            className="ml-1 flex items-center gap-2 rounded-full border border-line bg-[var(--surface)] py-1 pl-1 pr-3 text-[0.72rem] text-ink-soft transition-colors hover:border-line-strong"
            aria-label="Mon profil et mes réglages"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[0.62rem] font-semibold text-[var(--accent)]">
              {ready && profile ? (profile.prenom || "É").slice(0, 1).toUpperCase() : "·"}
            </span>
            <span className="hidden max-w-[7rem] truncate sm:block">
              {ready && profile
                ? `${fr.niveaux[profile.niveau]}${profile.serie ? ` ${profile.serie}` : ""}`
                : fr.commun.chargement}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setNotesOpen(true)}
            className="hidden items-center gap-1.5 rounded-full border border-line bg-[var(--surface)] px-3 py-1.5 text-[0.72rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink md:flex"
          >
            <NotebookPen size={13} aria-hidden="true" />
            {fr.nav.notes}
          </button>
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const active = useActiveHref();
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-[var(--bg)]/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
      aria-label="Navigation mobile"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 py-1.5">
        {MOBILE_NAV.map((item) => {
          const isActive = active(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[0.6rem] font-medium transition-colors",
                  isActive ? "text-[var(--accent)]" : "text-ink-muted hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                    isActive && "bg-[var(--accent-soft)]",
                  )}
                >
                  <NavIcon name={item.icon} size={17} />
                </span>
                {fr.nav[item.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ProfileGate({ children }: { children: ReactNode }) {
  const { profile, ready } = useProfile();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!ready) return;
    if (!profile && !pathname.startsWith("/admin")) {
      router.replace("/commencer");
    }
  }, [profile, ready, pathname, router]);

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 size={22} className="animate-spin text-ink-muted" aria-hidden="true" />
        <span className="sr-only">{fr.commun.chargement}</span>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 size={22} className="animate-spin text-ink-muted" aria-hidden="true" />
        <span className="sr-only">{fr.commun.chargement}</span>
      </div>
    );
  }

  return <>{children}</>;
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <Sidebar />
      <div className="lg:pl-[16.5rem]">
        <TopBar />
        <ProfileGate>
          <main id="contenu" className="wrap pb-28 pt-6 md:pb-14">
            {children}
          </main>
        </ProfileGate>
      </div>
      <MobileNav />
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.7rem] text-ink-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="rounded transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-soft">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <header className="mb-6">
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-semibold leading-[1.1] text-ink">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
    </header>
  );
}
