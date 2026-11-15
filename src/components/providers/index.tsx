"use client";

import { useEffect, type ReactNode } from "react";

import { AiProvider } from "@/components/providers/ai-provider";
import { NotesProvider } from "@/components/providers/notes-provider";
import { ProfileProvider } from "@/components/providers/profile-provider";
import { ProgressProvider } from "@/components/providers/progress-provider";
import { SettingsProvider } from "@/components/providers/settings-provider";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { Toaster } from "@/components/ui/toast";
import { UiProvider } from "@/components/providers/ui-provider";

function ServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;
    const register = () => {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
        /* l'application reste utilisable sans service worker */
      });
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);
  return null;
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SettingsProvider>
      <UiProvider>
        <ProfileProvider>
          <ProgressProvider>
            <NotesProvider>
              <AiProvider>
                {children}
                <Toaster />
                <ServiceWorker />
                <SmoothScroll />
              </AiProvider>
            </NotesProvider>
          </ProgressProvider>
        </ProfileProvider>
      </UiProvider>
    </SettingsProvider>
  );
}
