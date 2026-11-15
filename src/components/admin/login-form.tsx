"use client";

import { useActionState } from "react";
import { KeyRound, Loader2, ShieldCheck } from "lucide-react";

import { loginAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { fr } from "@/lib/i18n/fr";

export function LoginForm({ suite }: { suite: string }) {
  const [state, formAction, pending] = useActionState(loginAction, { error: null });

  return (
    <form action={formAction} className="mt-5 space-y-3">
      <input type="hidden" name="suite" value={suite} />

      <label className="block">
        <span className="mb-1 block text-[0.72rem] text-ink-muted">
          {fr.admin.email}
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          defaultValue="auteur@jang.sn"
          className="input"
          aria-invalid={state.error ? true : undefined}
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-[0.72rem] text-ink-muted">
          {fr.admin.motDePasse}
        </span>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          defaultValue="jang-demo-2026"
          className="input"
        />
      </label>

      {state.error && (
        <p role="alert" className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-[0.76rem] text-red-200">
          {state.error}
        </p>
      )}

      <Button type="submit" size="md" className="w-full" disabled={pending}>
        {pending ? (
          <Loader2 size={14} className="animate-spin" aria-hidden="true" />
        ) : (
          <KeyRound size={14} aria-hidden="true" />
        )}
        {fr.admin.seConnecter}
      </Button>

      <p className="flex items-start gap-1.5 rounded-lg border border-line bg-[var(--surface)] px-3 py-2 text-[0.68rem] leading-relaxed text-ink-muted">
        <ShieldCheck size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
        {fr.admin.demo}
      </p>
    </form>
  );
}
