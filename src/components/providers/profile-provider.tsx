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

import { STORAGE_KEYS, readStorage, removeStorage, writeStorage } from "@/lib/storage";
import { examenDuNiveau, type Profile } from "@/lib/types";

interface ProfileContextValue {
  profile: Profile | null;
  ready: boolean;
  saveProfile: (input: Omit<Profile, "createdAt">) => Profile;
  updateProfile: (partial: Partial<Profile>) => void;
  resetProfile: () => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function createProfile(
  input: Pick<Profile, "niveau"> & Partial<Profile>,
): Profile {
  return {
    prenom: input.prenom?.trim() ?? "",
    niveau: input.niveau,
    serie: input.serie ?? null,
    dateExamen: input.dateExamen ?? null,
    examen: input.examen ?? examenDuNiveau(input.niveau),
    objectif: input.objectif ?? null,
    createdAt: new Date().toISOString(),
  };
}

export function demoProfile(): Profile {
  return {
    prenom: "Awa",
    niveau: "terminale",
    serie: "S1",
    dateExamen: null,
    examen: "BAC",
    objectif: "Mention au BAC",
    createdAt: new Date().toISOString(),
  };
}

function isValidProfile(value: unknown): value is Profile {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Profile>;
  return (
    typeof candidate.niveau === "string" &&
    ["3eme", "seconde", "premiere", "terminale"].includes(candidate.niveau)
  );
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = readStorage<unknown>(STORAGE_KEYS.profile, null);
      if (isValidProfile(stored)) setProfile(stored);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const persist = useCallback((next: Profile | null) => {
    setProfile(next);
    if (next) writeStorage(STORAGE_KEYS.profile, next);
    else removeStorage(STORAGE_KEYS.profile);
  }, []);

  const saveProfile: ProfileContextValue["saveProfile"] = useCallback(
    (input) => {
      const next = createProfile(input);
      persist(next);
      return next;
    },
    [persist],
  );

  const updateProfile = useCallback(
    (partial: Partial<Profile>) => {
      setProfile((current) => {
        if (!current) return current;
        const next: Profile = {
          ...current,
          ...partial,
          examen:
            partial.niveau && partial.niveau !== current.niveau
              ? examenDuNiveau(partial.niveau)
              : (partial.examen ?? current.examen),
        };
        writeStorage(STORAGE_KEYS.profile, next);
        return next;
      });
    },
    [],
  );

  const resetProfile = useCallback(() => {
    persist(null);
  }, [persist]);

  const value = useMemo(
    () => ({ profile, ready, saveProfile, updateProfile, resetProfile }),
    [profile, ready, saveProfile, updateProfile, resetProfile],
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile doit être utilisé dans <ProfileProvider>");
  }
  return context;
}
