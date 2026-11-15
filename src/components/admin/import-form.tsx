"use client";

import { useState, useTransition } from "react";
import { Check, FileUp, Loader2, Upload, X } from "lucide-react";

import { importFilesAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { fr } from "@/lib/i18n/fr";
import type { ImportOutcome } from "@/lib/admin/store";

export function ImportForm() {
  const [files, setFiles] = useState<{ name: string; content: string }[]>([]);
  const [outcome, setOutcome] = useState<ImportOutcome | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const ajouter = async (list: FileList | null) => {
    if (!list?.length) return;
    setError(null);
    setOutcome(null);
    const read = await Promise.all(
      Array.from(list).map(async (file) => ({
        name: file.name,
        content: await file.text(),
      })),
    );
    setFiles((current) => {
      const map = new Map(current.map((item) => [item.name, item]));
      for (const item of read) map.set(item.name, item);
      return Array.from(map.values());
    });
  };

  const importer = () => {
    if (!files.length) return;
    setError(null);
    startTransition(async () => {
      try {
        const result = await importFilesAction(files);
        setOutcome(result);
        if (result.imported > 0) setFiles([]);
      } catch (cause) {
        setError(cause instanceof Error ? cause.message : fr.admin.erreurSave);
      }
    });
  };

  return (
    <div className="space-y-4">
      <label className="glass flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-dashed px-4 py-10 text-center transition-colors hover:border-line-strong">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
          <FileUp size={19} aria-hidden="true" />
        </span>
        <span className="text-[0.86rem] font-medium text-ink">
          {fr.admin.choisirFichiers}
        </span>
        <span className="max-w-md text-[0.72rem] leading-relaxed text-ink-muted">
          {fr.admin.importAide}
        </span>
        <input
          type="file"
          accept=".md,text/markdown"
          multiple
          className="sr-only"
          onChange={(event) => {
            void ajouter(event.target.files);
            event.target.value = "";
          }}
        />
      </label>

      {files.length > 0 && (
        <ul className="space-y-1.5">
          {files.map((file) => (
            <li
              key={file.name}
              className="flex items-center gap-2 rounded-xl border border-line bg-[var(--surface)] px-3 py-2 text-[0.76rem]"
            >
              <FileUp size={12} className="text-ink-muted" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate font-mono text-ink-soft">
                {file.name}
              </span>
              <span className="shrink-0 font-mono text-[0.64rem] text-ink-muted">
                {Math.round(file.content.length / 1024)} ko
              </span>
              <button
                type="button"
                onClick={() =>
                  setFiles((current) => current.filter((item) => item.name !== file.name))
                }
                aria-label={`Retirer ${file.name}`}
                className="text-ink-muted transition-colors hover:text-red-200"
              >
                <X size={13} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={importer} disabled={!files.length || pending} size="sm">
          {pending ? (
            <Loader2 size={13} className="animate-spin" aria-hidden="true" />
          ) : (
            <Upload size={13} aria-hidden="true" />
          )}
          {fr.admin.importer}
        </Button>
        {files.length > 0 && (
          <button
            type="button"
            onClick={() => setFiles([])}
            className="text-[0.74rem] text-ink-muted transition-colors hover:text-ink"
          >
            {fr.actions.annuler}
          </button>
        )}
      </div>

      {outcome && (
        <div
          role="status"
          className="rounded-xl border border-line bg-[var(--surface)] px-3 py-2.5 text-[0.76rem]"
        >
          <p className="flex items-center gap-1.5 text-ink-soft">
            <Check size={13} className="text-emerald-300" aria-hidden="true" />
            {fr.admin.importResult
              .replace("{n}", String(outcome.imported))
              .replace("{e}", String(outcome.errors.length))}
          </p>
          {outcome.errors.length > 0 && (
            <ul className="mt-2 space-y-1">
              {outcome.errors.map((message) => (
                <li key={message} className="flex items-start gap-1.5 text-[0.72rem] text-red-200">
                  <X size={11} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-[0.76rem] text-red-200"
        >
          {error}
        </p>
      )}
    </div>
  );
}
