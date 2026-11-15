"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  Check,
  ChevronRight,
  Command,
  GraduationCap,
  Leaf,
  NotebookPen,
  ShieldCheck,
  Sigma,
  Sparkles,
  Zap,
} from "lucide-react";

import { Counter, ReadingText, Reveal } from "@/components/effects/reveal";
import { Markdown } from "@/components/markdown/markdown";
import { useContent } from "@/components/providers/content-provider";
import { useSettings } from "@/components/providers/settings-provider";
import { useMounted, useUi } from "@/components/providers/ui-provider";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Badge, SectionHeading } from "@/components/ui/primitives";
import { fr } from "@/lib/i18n/fr";
import { readStorage, writeStorage } from "@/lib/storage";
import type { SerieId } from "@/lib/types";
import { cn } from "@/lib/utils";

const SYMBOLS = [
  { char: "∫", x: 8, y: 22, depth: 1.4, size: "text-7xl", opacity: "opacity-25" },
  { char: "Δ", x: 84, y: 16, depth: 0.8, size: "text-6xl", opacity: "opacity-20" },
  { char: "π", x: 72, y: 62, depth: 1.9, size: "text-8xl", opacity: "opacity-[0.14]" },
  { char: "Σ", x: 16, y: 70, depth: 0.6, size: "text-5xl", opacity: "opacity-20" },
  { char: "√x", x: 58, y: 30, depth: 1.2, size: "text-4xl", opacity: "opacity-15" },
  { char: "λ", x: 92, y: 44, depth: 2.2, size: "text-6xl", opacity: "opacity-[0.12]" },
  { char: "H₂O", x: 28, y: 42, depth: 1.6, size: "text-3xl", opacity: "opacity-[0.18]" },
  { char: "ADN", x: 6, y: 52, depth: 2.5, size: "text-4xl", opacity: "opacity-[0.12]" },
  { char: "∞", x: 44, y: 82, depth: 1.1, size: "text-6xl", opacity: "opacity-[0.12]" },
  { char: "v⃗", x: 66, y: 8, depth: 2.0, size: "text-5xl", opacity: "opacity-[0.14]" },
];

const LEVELS: {
  niveau: "3eme" | "terminale";
  serie: SerieId | null;
  label: string;
  exam: string;
  description: string;
  accent: string;
}[] = [
  {
    niveau: "3eme" as const,
    serie: null,
    label: fr.niveaux["3eme"],
    exam: "BFEM",
    description:
      "Le programme de 3ème, chapitre par chapitre, pour arriver serein à l'examen.",
    accent: "accent-svt",
  },
  {
    niveau: "terminale" as const,
    serie: "S1",
    label: `${fr.niveaux.terminale} S1`,
    exam: "BAC",
    description:
      "Maths, PC et SVT : le parcours scientifique complet pour la série S1.",
    accent: "accent-maths",
  },
  {
    niveau: "terminale" as const,
    serie: "L",
    label: `${fr.niveaux.terminale} L`,
    exam: "BAC",
    description:
      "Français, philosophie, langues, histoire-géographie : le parcours littéraire.",
    accent: "accent-francais",
  },
];

const STEPS = [
  { title: fr.accueil.step1, text: fr.accueil.step1Text },
  { title: fr.accueil.step2, text: fr.accueil.step2Text },
  { title: fr.accueil.step3, text: fr.accueil.step3Text },
];

export function LandingPage() {
  const { chapitres, exercices } = useContent();
  const { setIntroDone } = useUi();
  const { lite } = useSettings();
  const ready = useMounted();
  const heroRef = useRef<HTMLElement | null>(null);
  const symbolsRef = useRef<HTMLDivElement | null>(null);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const seen = readStorage<boolean>("jang:v1:intro-seen", false);
    const delay = seen || lite ? 700 : 2600;
    const timer = window.setTimeout(() => {
      setIntroDone(true);
      setIntroVisible(false);
      writeStorage("jang:v1:intro-seen", true);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      setIntroDone(true);
    };
  }, [setIntroDone, lite]);

  useEffect(() => {
    if (lite) return;
    const element = symbolsRef.current;
    if (!element) return;
    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      element.style.setProperty("--px", String(x));
      element.style.setProperty("--py", String(y));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [lite]);

  useEffect(() => {
    if (lite) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let cleanup: (() => void) | undefined;
    (async () => {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        const context = gsap.context(() => {
          gsap.to(".js-hero-glow", {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          /* Section épinglée : sur grand écran, le bloc de gauche reste
             visible pendant qu'on parcourt les étapes à droite. `media`
             gère le redimensionnement et nettoie automatiquement. */
          media.add("(min-width: 1024px)", () => {
            const wrap = document.querySelector<HTMLElement>(".js-steps-wrap");
            const aside = document.querySelector<HTMLElement>(".js-steps-aside");
            if (!wrap || !aside) return;
            ScrollTrigger.create({
              trigger: wrap,
              start: "top 96px",
              end: () =>
                `+=${Math.max(0, wrap.offsetHeight - aside.offsetHeight)}`,
              pin: aside,
              pinSpacing: false,
              anticipatePin: 1,
            });
          });
        });
        cleanup = () => {
          media.revert();
          context.revert();
        };
      } catch {
        /* sans GSAP, les animations Motion restent actives */
      }
    })();

    return () => cleanup?.();
  }, [lite]);

  const totalChapitres = chapitres.length;
  const totalExercices = exercices.length;

  return (
    <div className="relative overflow-x-clip">
      <a
        href="#contenu-accueil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent-strong)] focus:px-4 focus:py-2 focus:text-[var(--accent-contrast)]"
      >
        Aller au contenu
      </a>

      {/* ---------------------------------------------------------------- NAV */}
      <header
        className="sticky top-0 z-40 border-b border-line/60 bg-[var(--bg)]/65 backdrop-blur-xl"
        style={{ viewTransitionName: "landing-header" }}
      >
        <div className="wrap flex h-16 items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Jàng">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-[var(--accent-soft)] font-display text-lg font-bold text-[var(--accent)]">
              J
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.05rem] font-semibold text-ink">Jàng</span>
              <span className="mt-1 text-[0.55rem] uppercase tracking-[0.22em] text-ink-muted">
                BAC · BFEM
              </span>
            </span>
          </Link>

          <nav className="ml-6 hidden items-center gap-1 md:flex" aria-label="Sections">
            <Link href="/cours" className="nav-link">
              {fr.nav.cours}
            </Link>
            <Link href="/resumes" className="nav-link">
              {fr.nav.resumes}
            </Link>
            <Link href="/exercices" className="nav-link">
              {fr.nav.exercices}
            </Link>
            <Link href="/notes" className="nav-link">
              {fr.nav.notes}
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[0.66rem] text-ink-muted sm:flex">
              <Command size={11} aria-hidden="true" />
              Ctrl K
            </span>
            <ButtonLink href="/commencer" size="sm" variant="primary">
              {fr.actions.commencer}
              <ArrowRight size={14} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------------- HERO */}
      <section ref={heroRef} id="contenu-accueil" className="relative isolate overflow-hidden">
        <div
          ref={symbolsRef}
          className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
          aria-hidden="true"
        >
          {SYMBOLS.map((symbol, index) => (
            <div
              key={symbol.char}
              className="absolute"
              style={{
                left: `${symbol.x}%`,
                top: `${symbol.y}%`,
                "--depth": symbol.depth,
                transform:
                  "translate3d(calc(var(--px, 0) * var(--depth) * 42px), calc(var(--py, 0) * var(--depth) * 30px), 0)",
                transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              } as CSSProperties}
            >
              <span
                className={cn(
                  "animate-float block select-none font-display font-medium text-ink",
                  symbol.size,
                  symbol.opacity,
                )}
                style={{ animationDelay: `${index * -1.7}s`, animationDuration: `${9 + index}s` }}
              >
                {symbol.char}
              </span>
            </div>
          ))}
        </div>

        <div className="js-hero-glow pointer-events-none absolute -top-40 left-1/2 z-0 h-[38rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] opacity-60 blur-3xl" />

        <div className="wrap relative z-10 grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
          <div>
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-[var(--surface)] px-3 py-1.5 text-[0.68rem] font-medium text-ink-soft transition-all duration-700",
                ready && !introVisible ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {fr.accueil.eyebrow}
            </div>

            <h1 className="font-display text-[clamp(2.3rem,1.2rem+3.4vw,3.7rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              <span className="block overflow-hidden">
                {fr.accueil.title.split(" ").map((word, index, words) => (
                  <Fragment key={`${word}-${index}`}>
                    <span
                      className="inline-block animate-fade-up"
                      style={{ animationDelay: `${250 + index * 90}ms` }}
                    >
                      {word}
                    </span>
                    {index < words.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </span>
              <span className="mt-1 block">
                {fr.accueil.titleAccent.split(" ").map((word, index, words) => (
                  <Fragment key={`${word}-${index}`}>
                    <span
                      className="inline-block animate-fade-up bg-gradient-to-br from-[var(--accent)] via-[var(--accent)] to-[var(--accent-strong)] bg-clip-text text-transparent"
                      style={{ animationDelay: `${520 + index * 95}ms` }}
                    >
                      {word}
                    </span>
                    {index < words.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-[1rem] leading-relaxed text-ink-soft sm:text-[1.08rem]"
              style={{ animationDelay: "780ms" }}
            >
              {fr.accueil.intro}
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: "900ms" }}
            >
              <ButtonLink href="/commencer" size="lg" magnetic>
                {fr.accueil.cta}
                <ArrowRight size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/cours" size="lg" variant="ghost">
                <BookOpen size={16} aria-hidden="true" />
                {fr.accueil.ctaSecondaire}
              </ButtonLink>
            </div>

            <div
              className="mt-9 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] text-ink-muted"
              style={{ animationDelay: "1020ms" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-emerald-400" aria-hidden="true" />
                {fr.accueil.footerPrivacy}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap size={13} className="text-[var(--accent)]" aria-hidden="true" />
                {fr.reglages.modeLeger}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[var(--accent)]" aria-hidden="true" />
                {fr.commun.demo} · {totalChapitres} {fr.commun.chapitres}
              </span>
            </div>
          </div>

          {/* Carte de démonstration */}
          <div className="relative animate-fade-up" style={{ animationDelay: "640ms" }}>
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] opacity-40 blur-2xl" />
            <GlassCard strong spotlight tilt className="mx-auto w-full max-w-md p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Sigma size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] text-ink-muted">
                      {fr.niveaux.terminale} · {fr.series.S1}
                    </p>
                    <p className="font-display text-[0.95rem] font-semibold text-ink">Dérivation</p>
                  </div>
                </div>
                <Badge tone="demo">{fr.commun.demo}</Badge>
              </div>

              <div className="mt-4 rounded-2xl border border-[var(--border-accent)] bg-[var(--accent-soft)] px-4 py-3">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  {fr.chapitre.formules}
                </p>
                <div className="mt-1.5 text-ink">
                  <Markdown
                    compact
                    className="text-center [&_.katex-display]:my-0 [&_.katex]:text-[1rem]"
                  >
                    {"\n$$\nf'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}\n$$\n"}
                  </Markdown>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { label: "Résumé", done: true },
                  { label: "Cours complet", done: true },
                  { label: "Exercices corrigés", done: false },
                  { label: "Quiz", done: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-line bg-[var(--surface)] px-3 py-2"
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border",
                        item.done
                          ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
                          : "border-line text-ink-muted",
                      )}
                    >
                      {item.done ? (
                        <Check size={11} />
                      ) : (
                        <span className="h-1 w-1 rounded-full bg-current" />
                      )}
                    </span>
                    <span className="flex-1 text-[0.78rem] text-ink-soft">{item.label}</span>
                    <ChevronRight size={13} className="text-ink-muted" aria-hidden="true" />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex flex-1 items-center gap-1.5 rounded-xl border border-line bg-[var(--surface)] px-3 py-2 text-[0.7rem] text-ink-muted">
                  <Sparkles size={12} className="text-[var(--accent)]" aria-hidden="true" />
                  {fr.ai.title}
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent-strong)] text-[var(--accent-contrast)]">
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </GlassCard>
          </div>
        </div>

        {introVisible && (
          <button
            type="button"
            onClick={() => {
              setIntroDone(true);
              setIntroVisible(false);
              writeStorage("jang:v1:intro-seen", true);
            }}
            className="absolute bottom-4 right-4 z-20 rounded-full border border-line bg-[var(--surface)] px-3 py-1.5 text-[0.66rem] text-ink-muted backdrop-blur transition-colors hover:text-ink"
          >
            {fr.accueil.introSkip}
          </button>
        )}
      </section>

      {/* ------------------------------------------------------------- NIVEAUX */}
      <section className="wrap scroll-mt-24 py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow={fr.accueil.prochaineEtape}
            title={fr.accueil.levelsTitle}
            description={fr.accueil.levelsSubtitle}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEVELS.map((level, index) => {
            const count = chapitres.filter(
              (chapitre) =>
                chapitre.niveau === level.niveau &&
                (!level.serie || !chapitre.series.length || chapitre.series.includes(level.serie)),
            ).length;
            return (
              <Reveal key={level.label} delay={index * 0.08}>
                <GlassCard spotlight className={cn("group h-full p-6", level.accent)} as="article">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <GraduationCap size={20} aria-hidden="true" />
                    </span>
                    <Badge tone="accent">{level.exam}</Badge>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{level.label}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-muted">
                    {level.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-[0.7rem] text-ink-muted">
                      {count} {fr.commun.chapitres}
                    </span>
                    <Link
                      href={`/commencer?niveau=${level.niveau}${level.serie ? `&serie=${level.serie}` : ""}`}
                      className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5"
                    >
                      {fr.accueil.chooseLevel}
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------------------- BENTO */}
      <section className="wrap py-8 sm:py-14">
        <Reveal>
          <SectionHeading
            eyebrow="Tout-en-un"
            title={fr.accueil.featuresTitle}
            description={fr.accueil.featuresSubtitle}
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4" delay={0.02}>
            <GlassCard spotlight className="h-full overflow-hidden p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                  <BookOpen size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {fr.accueil.featureFiches}
                  </h3>
                  <p className="mt-1.5 max-w-md text-[0.85rem] leading-relaxed text-ink-muted">
                    {fr.accueil.featureFichesText}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-[var(--surface)] p-3">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Dérivée d&apos;un produit
                  </p>
                  <p className="mt-1 font-display text-[1.05rem] text-ink">(uv)′ = u′v + uv′</p>
                </div>
                <div className="rounded-xl border border-line bg-[var(--surface)] p-3">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Équation chimique
                  </p>
                  <p className="mt-1 font-display text-[1.05rem] text-ink">
                    CH₄ + 2 O₂ → CO₂ + 2 H₂O
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.06}>
            <GlassCard spotlight className="h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <BookOpen size={19} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {fr.accueil.featureCours}
              </h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-muted">
                {fr.accueil.featureCoursText}
              </p>
              <div className="mt-5 space-y-2">
                {[76, 92, 60, 84, 48].map((width, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "h-1 rounded-full",
                        index === 1 ? "w-1.5 bg-[var(--accent)]" : "w-1 bg-line-strong",
                      )}
                    />
                    <span
                      className="h-1 rounded-full bg-[var(--surface-hover)]"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.02}>
            <GlassCard spotlight className="h-full p-6 accent-pc">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                <Atom size={19} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {fr.accueil.featureExercices}
              </h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-muted">
                {fr.accueil.featureExercicesText}
              </p>
              <div className="mt-5 rounded-xl border border-line bg-[var(--surface)] p-3">
                <p className="text-[0.62rem] uppercase tracking-[0.12em] text-ink-muted">
                  {fr.typesExercice.bac} · {fr.difficultes[2]}
                </p>
                <p className="mt-1.5 text-[0.8rem] text-ink-soft">
                  Étudier la dérivabilité de f en a…
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[0.68rem] text-[var(--accent)]">
                  <Sparkles size={11} aria-hidden="true" />
                  {fr.actions.demanderIndice}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.06}>
            <GlassCard spotlight className="h-full p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Sparkles size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{fr.accueil.featureIa}</h3>
                  <p className="mt-1.5 max-w-lg text-[0.85rem] leading-relaxed text-ink-muted">
                    {fr.accueil.featureIaText}
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[var(--accent-strong)] px-3.5 py-2 text-[0.78rem] text-[var(--accent-contrast)]">
                  Explique-moi la dérivée d&apos;une fonction composée.
                </div>
                <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-line bg-[var(--surface)] px-3.5 py-2 text-[0.78rem] text-ink-soft">
                  Retiens la formule <strong className="text-ink">(v∘u)′ = u′ × v′∘u</strong>. On
                  dérive d&apos;abord l&apos;extérieur, puis l&apos;intérieur…
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.02}>
            <GlassCard spotlight className="h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <NotebookPen size={19} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {fr.accueil.featureNotes}
              </h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-muted">
                {fr.accueil.featureNotesText}
              </p>
              <div className="mt-5 rounded-xl border border-line bg-[var(--surface)] p-3 font-mono text-[0.74rem] text-ink-soft">
                <p className="text-ink-muted">## À revoir</p>
                <p className="mt-1 flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded border border-emerald-400/40 bg-emerald-400/15 text-emerald-300">
                    <Check size={9} />
                  </span>
                  Théorème des valeurs intermédiaires
                </p>
                <p className="mt-1 flex items-center gap-1.5">
                  <span className="h-3.5 w-3.5 rounded border border-line" />
                  Refaire l&apos;exercice 2
                </p>
                <p className="mt-2 text-[var(--accent)]">$f′(x) = 3x^2 - 2$</p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.06}>
            <GlassCard spotlight className="h-full p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-300">
                  <Zap size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {fr.accueil.featureLeger}
                  </h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-muted">
                    {fr.accueil.featureLegerText}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-line bg-[var(--surface)] px-3.5 py-3">
                <span className="text-[0.8rem] text-ink-soft">{fr.reglages.modeLeger}</span>
                <span className="flex items-center gap-2">
                  <span className="text-[0.66rem] text-ink-muted">{fr.reglages.modeAuto}</span>
                  <span className="relative h-5 w-9 rounded-full bg-[var(--accent-strong)]">
                    <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow" />
                  </span>
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[0.68rem] text-ink-muted">
                <Leaf size={12} className="text-emerald-400" aria-hidden="true" />
                {fr.reglages.modeLegerDetecte}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- STATS */}
      <section className="wrap py-14 sm:py-20">
        <Reveal>
          <GlassCard className="overflow-hidden p-7 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-display text-4xl font-semibold text-ink">
                  <Counter value={totalChapitres} />
                </p>
                <p className="mt-1 text-[0.74rem] uppercase tracking-[0.14em] text-ink-muted">
                  {fr.accueil.statChapitres}
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-ink">
                  <Counter value={3} />
                </p>
                <p className="mt-1 text-[0.74rem] uppercase tracking-[0.14em] text-ink-muted">
                  {fr.accueil.statMatieres}
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-ink">
                  <Counter value={totalExercices} />
                </p>
                <p className="mt-1 text-[0.74rem] uppercase tracking-[0.14em] text-ink-muted">
                  {fr.accueil.statExercices}
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-ink">
                  <Counter value={4} />
                </p>
                <p className="mt-1 text-[0.74rem] uppercase tracking-[0.14em] text-ink-muted">
                  {fr.accueil.statModes}
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <div className="js-steps-wrap mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="js-steps-aside">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {fr.accueil.comment}
              </p>
              <ReadingText>{fr.accueil.statsTitle}</ReadingText>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-ink-muted">
                {fr.accueil.ctaText}
              </p>
            </Reveal>
          </div>

          <ol className="js-steps relative space-y-4 border-l border-line pl-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="js-step relative">
                <Reveal delay={index * 0.1}>
                  <span className="absolute -left-[2.05rem] top-0 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-[var(--bg)] font-mono text-[0.68rem] text-[var(--accent)]">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-[1rem] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-[0.84rem] leading-relaxed text-ink-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------------ CTA */}
      <section className="wrap pb-20 pt-6">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] opacity-70 blur-2xl" />
            <Badge tone="demo" className="relative">
              {fr.commun.demo}
            </Badge>
            <h2 className="relative mx-auto mt-5 max-w-2xl font-display text-[clamp(1.7rem,1.2rem+2.4vw,2.8rem)] font-semibold leading-[1.08] text-ink">
              {fr.accueil.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-[0.92rem] text-ink-muted">
              {fr.accueil.ctaText}
            </p>
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/commencer" size="lg" magnetic>
                {fr.actions.commencer}
                <ArrowRight size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/resumes" size="lg" variant="ghost">
                {fr.nav.resumes}
                <ArrowUpRight size={15} aria-hidden="true" />
              </ButtonLink>
            </div>
            <p className="relative mt-6 text-[0.7rem] text-ink-muted">{fr.app.demoNotice}</p>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line">
        <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-[var(--accent-soft)] font-display text-sm font-bold text-[var(--accent)]">
                J
              </span>
              <span className="font-display font-semibold text-ink">Jàng</span>
            </div>
            <p className="mt-3 max-w-xs text-[0.75rem] leading-relaxed text-ink-muted">
              {fr.app.tagline}
              <br />
              {fr.accueil.footer}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] text-ink-muted">
            <div className="space-y-2">
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted">
                {fr.nav.monEspace}
              </p>
              <Link href="/tableau-de-bord" className="block hover:text-ink">
                {fr.nav.tableau}
              </Link>
              <Link href="/cours" className="block hover:text-ink">
                {fr.nav.cours}
              </Link>
              <Link href="/exercices" className="block hover:text-ink">
                {fr.nav.exercices}
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted">
                {fr.commun.et}
              </p>
              <Link href="/notes" className="block hover:text-ink">
                {fr.nav.notes}
              </Link>
              <Link href="/reglages" className="block hover:text-ink">
                {fr.nav.reglages}
              </Link>
              <Link href="/admin" className="block hover:text-ink">
                {fr.nav.admin}
              </Link>
            </div>
          </nav>
        </div>
        <div className="wrap flex flex-col gap-2 border-t border-line py-5 text-[0.68rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Jàng — {fr.accueil.footer}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={12} aria-hidden="true" />
            {fr.accueil.footerPrivacy}
          </span>
        </div>
      </footer>
    </div>
  );
}
