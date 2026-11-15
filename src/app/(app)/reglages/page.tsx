import type { Metadata } from "next";

import { SettingsView } from "@/components/settings/settings-view";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Réglages",
  description:
    "Thème, mode léger, taille du texte, parcours et gestion des données locales de Jàng.",
};

export default function ReglagesPage() {
  return (
    <PageTransition>
      <SettingsView />
    </PageTransition>
  );
}
