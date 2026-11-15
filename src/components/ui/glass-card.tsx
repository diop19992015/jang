"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

import { useSettings } from "@/components/providers/settings-provider";
import { cn } from "@/lib/utils";
import type { MatiereId } from "@/lib/types";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accent?: MatiereId;
  hover?: boolean;
  spotlight?: boolean;
  tilt?: boolean;
  strong?: boolean;
  as?: "div" | "article" | "section" | "li" | "aside";
  style?: CSSProperties;
  onClick?: () => void;
}

/**
 * Carte en verre dépoli avec projecteur lumineux et inclinaison 3D légère.
 * Le flou reste limité aux surfaces (jamais sur de longues listes).
 */
export function GlassCard({
  children,
  className,
  accent,
  hover = true,
  spotlight = false,
  tilt = false,
  strong = false,
  as: ComponentProp = "div",
  style,
  onClick,
}: GlassCardProps) {
  const Component = ComponentProp as React.ElementType;
  const ref = useRef<HTMLDivElement | null>(null);
  const { lite } = useSettings();

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (lite || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);

    if (tilt) {
      const rx = (0.5 - y / rect.height) * 5;
      const ry = (x / rect.width - 0.5) * 5;
      ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  };

  const handlePointerLeave = () => {
    if (!ref.current) return;
    if (tilt) ref.current.style.transform = "";
  };

  return (
    <Component
      // Le composant est une balise HTML native : le type de ref dépend de `as`.
      ref={ref as React.Ref<never>}
      onPointerMove={spotlight || tilt ? handlePointerMove : undefined}
      onPointerLeave={spotlight || tilt ? handlePointerLeave : undefined}
      onClick={onClick}
      style={style}
      className={cn(
        "glass",
        strong && "glass-strong",
        hover && "glass-hover",
        spotlight && "spotlight",
        tilt && "tilt",
        accent && `accent-${accent}`,
        className,
      )}
    >
      {children}
    </Component>
  );
}
