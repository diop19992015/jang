"use client";

import { motion, useInView } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { useSettings } from "@/components/providers/settings-provider";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const { lite } = useSettings();
  if (lite) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  suffix = "",
  duration = 1400,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { lite } = useSettings();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (lite) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, lite]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {lite && inView ? value : display}
      {suffix}
    </span>
  );
}

/** Texte qui se colore au fur et à mesure que l'élève descend. */
export function ReadingText({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => {
      const rect = element.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const end = window.innerHeight * 0.25;
      const ratio = (start - rect.top) / Math.max(1, rect.height + (start - end));
      setProgress(Math.min(1, Math.max(0, ratio)) * 100);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <p
      ref={ref}
      className="lecture-color text-lg leading-relaxed sm:text-xl"
      style={{ "--progression": `${progress}%` } as React.CSSProperties}
    >
      {children}
    </p>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-[2px] no-print"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[var(--accent-strong)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, boxShadow: "0 0 12px var(--accent-glow)" }}
      />
    </div>
  );
}
