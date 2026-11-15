"use client";

import Link from "next/link";
import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { useSettings } from "@/components/providers/settings-provider";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "quiet" | "outline";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  quiet: "btn btn-quiet",
  outline: "btn border-line-strong bg-transparent text-ink hover:bg-surface",
};

const SIZES: Record<Size, string> = {
  sm: "px-3.5 py-2 text-[0.8rem]",
  md: "",
  lg: "px-6 py-3.5 text-[1rem]",
};

function useMagnetic() {
  const ref = useRef<HTMLElement | null>(null);
  const { lite } = useSettings();

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (lite || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `translate(${x * 6}px, ${y * 4}px)`;
  };

  const onPointerLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return { ref, onPointerMove, onPointerLeave };
}

export function Button({
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { ref, onPointerMove, onPointerLeave } = useMagnetic();
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onPointerMove={magnetic ? onPointerMove : undefined}
      onPointerLeave={magnetic ? onPointerLeave : undefined}
      className={cn(VARIANTS[variant], SIZES[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  children,
  onClick,
  ariaLabel,
  target,
}: CommonProps & {
  href: string;
  onClick?: () => void;
  ariaLabel?: string;
  target?: string;
}) {
  const { ref, onPointerMove, onPointerLeave } = useMagnetic();
  return (
    <Link
      href={href}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onPointerMove={magnetic ? onPointerMove : undefined}
      onPointerLeave={magnetic ? onPointerLeave : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : undefined}
      className={cn(VARIANTS[variant], SIZES[size], "inline-flex", className)}
    >
      {children}
    </Link>
  );
}

export function IconButton({
  label,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn("icon-btn", className)}
      {...props}
    >
      {children}
    </button>
  );
}
