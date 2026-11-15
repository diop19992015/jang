"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ViewTransition } from "react";

import { useSettings } from "@/components/providers/settings-provider";

/**
 * Transition de page (View Transitions API, React 19.3).
 *
 * Chaque page enveloppe son contenu : à la navigation, l'ancien contenu sort
 * en fondu rapide et le nouveau arrive en glissement léger. L'en-tête et la
 * barre de navigation restent hors transition — c'est l'ancre visuelle.
 *
 * En Mode léger, si l'élève a réduit les animations ou s'il préfère un
 * mouvement réduit, aucun `ViewTransition` n'est monté : le changement de
 * page est instantané, sans capture ni flash (voir aussi `globals.css`).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { lite, settings } = useSettings();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const instantane = lite || reduced || settings.animations === "reduites";
  if (instantane) return <>{children}</>;

  return (
    <ViewTransition enter="page-enter" exit="page-exit">
      {children}
    </ViewTransition>
  );
}
