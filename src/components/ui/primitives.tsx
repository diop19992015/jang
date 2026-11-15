"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "demo" | "success" | "warning";
}) {
  const tones = {
    neutral: "badge",
    accent: "badge badge-accent",
    demo: "badge badge-demo",
    success: "badge badge-success",
    warning: "badge badge-warning",
  } as const;
  return <span className={cn(tones[tone], className)}>{children}</span>;
}

export function DemoTag({ className }: { className?: string }) {
  return (
    <Badge tone="demo" className={className}>
      DÉMO
    </Badge>
  );
}

export function Chip({
  children,
  active,
  onClick,
  className,
  ariaPressed,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  ariaPressed?: boolean;
}) {
  return (
    <button
      type="button"
      data-active={active ? "true" : "false"}
      aria-pressed={ariaPressed ?? active}
      onClick={onClick}
      className={cn("chip", className)}
    >
      {children}
    </button>
  );
}

export function ProgressBar({
  value,
  className,
  showLabel = false,
  label,
}: {
  value: number;
  className?: string;
  showLabel?: boolean;
  label?: string;
}) {
  const safe = Math.min(100, Math.max(0, Math.round(value)));
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--surface-hover)]"
        role="progressbar"
        aria-valuenow={safe}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Progression"}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[var(--accent-strong)] transition-[width] duration-700 ease-out"
          style={{
            width: `${safe}%`,
            boxShadow: "0 0 14px -2px var(--accent-glow)",
          }}
        />
      </div>
      {showLabel && (
        <span className="shrink-0 text-xs font-medium tabular-nums text-ink-muted">
          {safe} %
        </span>
      )}
    </div>
  );
}

export function Ring({
  value,
  size = 92,
  stroke = 6,
  children,
  className,
}: {
  value: number;
  size?: number;
  stroke?: number;
  children?: ReactNode;
  className?: string;
}) {
  const safe = Math.min(100, Math.max(0, value));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safe / 100) * circumference;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--surface-hover)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent-strong)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1)",
            filter: "drop-shadow(0 0 6px var(--accent-glow))",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4", className)}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton", className)} aria-hidden="true" />;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line px-6 py-14 text-center">
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
          {icon}
        </div>
      )}
      <p className="font-display text-lg font-semibold text-ink">{title}</p>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-ink-muted">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export function Stat({
  value,
  label,
  hint,
  className,
}: {
  value: ReactNode;
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {value}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </span>
      {hint && <span className="text-xs text-ink-muted">{hint}</span>}
    </div>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="kbd">{children}</kbd>;
}
