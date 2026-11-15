"use client";

import { useActionState } from "react";
import { Loader2, Plus } from "lucide-react";

import { createChapitreAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { fr } from "@/lib/i18n/fr";
import { MATIERES_META, ORDRE_MATIERES } from "@/lib/subjects";
import { NIVEAU_LABELS, NIVEAUX, SERIES, niveauADesSeries } from "@/lib/types";
import { useState } from "react";

export function NewChapterForm() {
  const [state, formAction, pending] = useActionState(createChapitreAction, {
    ok: false,
    message: "",
  });
  const [niveau, setNiveau] = useState<string>("terminale");

  return (
    <details className="glass rounded-2xl p-4">
      <summary className="flex cursor-pointer items-center gap-2 text-[0.84rem] font-medium text-ink">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
          <Plus size={14} aria-hidden="true" />
        </span>
        {fr.admin.nouveauChapitre}
      </summary>

      <form action={formAction} className="mt-4 space-y-3">
        <div className="grid gap-2 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1 block text-[0.7rem] text-ink-muted">
              {fr.admin.niveau}
            </span>
            <select
              name="niveau"
              value={niveau}
              onChange={(event) => setNiveau(event.target.value)}
              className="input py-1.5 text-[0.8rem]"
            >
              {NIVEAUX.map((id) => (
                <option key={id} value={id}>
                  {NIVEAU_LABELS[id]}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.7rem] text-ink-muted">
              {fr.admin.matiere}
            </span>
            <select name="matiere" className="input py-1.5 text-[0.8rem]">
              {ORDRE_MATIERES.map((id) => (
                <option key={id} value={id}>
                  {MATIERES_META[id].label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.7rem] text-ink-muted">
              {fr.admin.slug}
            </span>
            <input
              name="slug"
              required
              pattern="[a-z0-9][a-z0-9\-]*"
              placeholder="nombres-complexes"
              className="input py-1.5 text-[0.8rem]"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1 block text-[0.7rem] text-ink-muted">
            {fr.admin.titre}
          </span>
          <input name="titre" required className="input py-1.5 text-[0.8rem]" />
        </label>

        <label className="block">
          <span className="mb-1 block text-[0.7rem] text-ink-muted">
            {fr.admin.accroche}
          </span>
          <input name="accroche" className="input py-1.5 text-[0.8rem]" />
        </label>

        {niveauADesSeries(niveau as never) && (
          <fieldset>
            <legend className="mb-1 block text-[0.7rem] text-ink-muted">
              {fr.admin.serie}
            </legend>
            <div className="flex gap-3">
              {SERIES.map((serie) => (
                <label
                  key={serie}
                  className="inline-flex items-center gap-1.5 text-[0.78rem] text-ink-soft"
                >
                  <input type="checkbox" name="series" value={serie} defaultChecked />
                  {serie}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <Button type="submit" size="sm" disabled={pending}>
            {pending && <Loader2 size={13} className="animate-spin" aria-hidden="true" />}
            {fr.admin.nouveauChapitre}
          </Button>
          {state.message && (
            <p
              role="status"
              className={
                state.ok
                  ? "text-[0.74rem] text-emerald-300"
                  : "text-[0.74rem] text-red-300"
              }
            >
              {state.message}
            </p>
          )}
        </div>
      </form>
    </details>
  );
}
