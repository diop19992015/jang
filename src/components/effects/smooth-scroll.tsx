"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useSettings } from "@/components/providers/settings-provider";

/**
 * Défilement doux (Lenis), chargé à la demande et désactivé en Mode léger
 * ou si l'élève préfère réduire les animations.
 */
export function SmoothScroll() {
  const { lite, settings } = useSettings();
  const pathname = usePathname();

  useEffect(() => {
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      settings.animations === "reduites";
    if (lite || reduced) return;

    let lenis: { destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis")
      .then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({
          autoRaf: true,
          lerp: 0.09,
          wheelMultiplier: 0.95,
          smoothWheel: true,
        });
      })
      .catch(() => {
        /* défilement natif conservé */
      });

    return () => {
      cancelled = true;
      lenis?.destroy();
    };
  }, [lite, settings.animations]);

  useEffect(() => {
    if (pathname) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}
