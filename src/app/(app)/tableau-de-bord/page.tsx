import type { Metadata } from "next";

import { DashboardView } from "@/components/dashboard/dashboard-view";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Tableau de bord",
};

export default function TableauDeBordPage() {
  return (
    <PageTransition>
      <DashboardView />
    </PageTransition>
  );
}
