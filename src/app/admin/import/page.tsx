import type { Metadata } from "next";

import { ImportForm } from "@/components/admin/import-form";
import { fr } from "@/lib/i18n/fr";
import { MATIERES, SERIES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Import en lot",
  robots: { index: false, follow: false },
};

const EXEMPLE = `---
niveau: terminale
matiere: maths
chapitre: derivation
type: cours
---

## Mon titre

Contenu Markdown avec **LaTeX** : $f'(x) = 2x$.
`;

export default function AdminImportPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-[clamp(1.3rem,1.1rem+1.4vw,1.7rem)] font-semibold text-ink">
          {fr.admin.importTitre}
        </h1>
        <p className="mt-1 max-w-2xl text-[0.82rem] leading-relaxed text-ink-muted">
          {fr.admin.importAide}
        </p>
      </div>

      <ImportForm />

      <section className="glass rounded-2xl p-4">
        <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          {fr.admin.formatAide}
        </h2>
        <ul className="mt-2 space-y-1 text-[0.76rem] text-ink-soft">
          <li>
            <code className="font-mono text-[0.72rem] text-[var(--accent)]">niveau</code> :{" "}
            3eme, seconde, premiere, terminale
          </li>
          <li>
            <code className="font-mono text-[0.72rem] text-[var(--accent)]">matiere</code> :{" "}
            {MATIERES.join(", ")}
          </li>
          <li>
            <code className="font-mono text-[0.72rem] text-[var(--accent)]">serie</code> :{" "}
            {SERIES.join(", ")} (facultatif, toutes séries par défaut)
          </li>
          <li>
            <code className="font-mono text-[0.72rem] text-[var(--accent)]">chapitre</code> :
            le slug du chapitre (ex. derivation)
          </li>
          <li>
            <code className="font-mono text-[0.72rem] text-[var(--accent)]">type</code> :
            chapitre, resume, cours, formules, quiz, exercice
          </li>
          <li>
            <code className="font-mono text-[0.72rem] text-[var(--accent)]">fichier</code>{" "}
            (exercices) : nom du fichier, ex. <span className="font-mono">01-tangente</span>
          </li>
        </ul>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-line bg-[var(--bg)] p-3 font-mono text-[0.7rem] leading-relaxed text-ink-muted">
          {EXEMPLE}
        </pre>
        <p className="mt-3 text-[0.7rem] leading-relaxed text-ink-muted">
          Un chapitre doit d&apos;abord exister via un fichier{" "}
          <code className="font-mono">type: chapitre</code> (ou être créé depuis l&apos;écran
          Contenus) avant d&apos;importer ses résumés, cours et exercices.
        </p>
      </section>
    </div>
  );
}
