import type { MetadataRoute } from "next";

import { fr } from "@/lib/i18n/fr";

/**
 * Manifeste PWA (Next.js génère `/manifest.webmanifest`).
 * Les icônes sont vectorielles : un seul fichier suffit à toutes les tailles.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: fr.app.nameFull,
    short_name: fr.app.name,
    description: fr.app.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait-primary",
    background_color: "#06070e",
    theme_color: "#06070e",
    lang: "fr",
    dir: "ltr",
    categories: ["education", "productivity"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: fr.nav.tableau,
        url: "/tableau-de-bord",
      },
      {
        name: fr.nav.exercices,
        url: "/exercices",
      },
      {
        name: fr.nav.notes,
        url: "/notes",
      },
    ],
  };
}
