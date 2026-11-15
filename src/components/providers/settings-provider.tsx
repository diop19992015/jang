"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";
import type { Settings } from "@/lib/types";

const DEFAULTS: Settings = {
  theme: "sombre",
  modeLeger: "auto",
  tailleTexte: "normal",
  animations: "auto",
};

interface SettingsContextValue {
  settings: Settings;
  /** Mode léger effectivement appliqué. */
  lite: boolean;
  /** Mode léger détecté automatiquement sur l'appareil. */
  autoLite: boolean;
  ready: boolean;
  setSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  reset: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean; effectiveType?: string };
};

function detectAutoLite(): boolean {
  if (typeof window === "undefined") return false;
  const nav = navigator as NavigatorWithHints;
  if (nav.connection?.saveData) return true;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4) return true;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4) {
    return true;
  }
  const slow = ["slow-2g", "2g"];
  if (nav.connection?.effectiveType && slow.includes(nav.connection.effectiveType)) {
    return true;
  }
  if (window.matchMedia?.("(prefers-reduced-data: reduce)").matches) return true;
  return false;
}

function applySettings(settings: Settings, lite: boolean) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  let theme = settings.theme;
  if (theme === "systeme") {
    theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "clair" : "sombre";
  }
  root.dataset.theme = theme;
  root.dataset.lite = lite ? "true" : "false";
  root.dataset.animations = settings.animations === "reduites" ? "reduites" : "auto";
  root.style.setProperty(
    "--font-scale",
    settings.tailleTexte === "petit" ? "0.94" : settings.tailleTexte === "grand" ? "1.1" : "1",
  );

  const themeColor = theme === "clair" ? "#f4f5fa" : "#06070e";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColor);
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [autoLite, setAutoLite] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = readStorage<Partial<Settings>>(STORAGE_KEYS.settings, {});
      const next: Settings = { ...DEFAULTS, ...stored };
      setSettings(next);
      setAutoLite(detectAutoLite());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const lite = settings.modeLeger === "actif" || (settings.modeLeger === "auto" && autoLite);

  useEffect(() => {
    if (!ready) return;
    applySettings(settings, lite);
    writeStorage(STORAGE_KEYS.settings, settings);
  }, [settings, lite, ready]);

  useEffect(() => {
    if (!ready || settings.theme !== "systeme") return;
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const listener = () => applySettings(settings, lite);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [settings, lite, ready]);

  const setSetting = useCallback(
    <K extends keyof Settings>(key: K, value: Settings[K]) => {
      setSettings((current) => ({ ...current, [key]: value }));
    },
    [],
  );

  const reset = useCallback(() => {
    setSettings(DEFAULTS);
    setAutoLite(detectAutoLite());
  }, []);

  const value = useMemo(
    () => ({ settings, lite, autoLite, ready, setSetting, reset }),
    [settings, lite, autoLite, ready, setSetting, reset],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings doit être utilisé dans <SettingsProvider>");
  }
  return context;
}
