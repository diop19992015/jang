"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import type {
  ChapterMeta,
  ContentIndex,
  Exercice,
  MatiereId,
  NiveauId,
  Profile,
  SerieId,
} from "@/lib/types";

interface ContentContextValue {
  chapitres: ChapterMeta[];
  exercices: Exercice[];
  getChapitre: (id: string | null) => ChapterMeta | null;
  getExercice: (id: string | null) => Exercice | null;
  chapitresPour: (options: {
    niveau?: NiveauId | null;
    serie?: SerieId | null;
    matiere?: MatiereId | null;
  }) => ChapterMeta[];
  chapitresProfil: (profile: Profile | null) => ChapterMeta[];
  exercicesPourProfil: (profile: Profile | null) => Exercice[];
}

const ContentContext = createContext<ContentContextValue | null>(null);

function matchesSerie(chapitre: ChapterMeta, serie?: SerieId | null) {
  if (!serie) return true;
  if (!chapitre.series.length) return true;
  return chapitre.series.includes(serie);
}

export function ContentProvider({
  index,
  children,
}: {
  index: ContentIndex;
  children: ReactNode;
}) {
  const value = useMemo<ContentContextValue>(() => {
    const chapitres = index.chapitres;
    const exercices = index.exercices;

    const chapitresPour: ContentContextValue["chapitresPour"] = ({
      niveau,
      serie,
      matiere,
    }) =>
      chapitres
        .filter((chapitre) => {
          if (niveau && chapitre.niveau !== niveau) return false;
          if (matiere && chapitre.matiere !== matiere) return false;
          if (!matchesSerie(chapitre, serie)) return false;
          return true;
        })
        .sort((a, b) => a.ordre - b.ordre);

    return {
      chapitres,
      exercices,
      getChapitre: (id) => chapitres.find((chapitre) => chapitre.id === id) ?? null,
      getExercice: (id) => exercices.find((exercice) => exercice.id === id) ?? null,
      chapitresPour,
      chapitresProfil: (profile) =>
        profile
          ? chapitresPour({
              niveau: profile.niveau,
              serie: profile.serie,
              matiere: null,
            })
          : [],
      exercicesPourProfil: (profile) => {
        if (!profile) return [];
        const ids = new Set(
          chapitresPour({ niveau: profile.niveau, serie: profile.serie }).map(
            (chapitre) => chapitre.id,
          ),
        );
        return exercices.filter((exercice) => ids.has(exercice.chapitreId));
      },
    };
  }, [index]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent doit être utilisé dans <ContentProvider>");
  }
  return context;
}
