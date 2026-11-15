/**
 * Limites d'usage de l'assistant, par élève (session anonyme) :
 * - un quota de messages par jour ;
 * - une seule requête en cours à la fois.
 *
 * En mémoire pour une instance. En production multi-instances, remplacer par
 * Redis ou une table Supabase (l'interface `Limiter` ne change pas).
 */

export interface QuotaDecision {
  ok: boolean;
  remaining: number;
  reason?: "quota" | "concurrency";
}

export interface Limiter {
  begin(id: string): QuotaDecision;
  end(id: string): void;
  remaining(id: string): number;
  reset(): void;
}

export function dayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export class MemoryLimiter implements Limiter {
  private usage = new Map<string, { day: string; count: number }>();
  private inFlight = new Set<string>();

  constructor(
    private readonly limit: number,
    private readonly now: () => Date = () => new Date(),
  ) {}

  private entry(id: string) {
    const day = dayKey(this.now());
    const current = this.usage.get(id);
    if (!current || current.day !== day) {
      const fresh = { day, count: 0 };
      this.usage.set(id, fresh);
      return fresh;
    }
    return current;
  }

  remaining(id: string): number {
    return Math.max(0, this.limit - this.entry(id).count);
  }

  begin(id: string): QuotaDecision {
    const entry = this.entry(id);
    if (entry.count >= this.limit) {
      return { ok: false, remaining: 0, reason: "quota" };
    }
    if (this.inFlight.has(id)) {
      return { ok: false, remaining: Math.max(0, this.limit - entry.count), reason: "concurrency" };
    }
    entry.count += 1;
    this.inFlight.add(id);
    return { ok: true, remaining: Math.max(0, this.limit - entry.count) };
  }

  end(id: string): void {
    this.inFlight.delete(id);
  }

  reset(): void {
    this.usage.clear();
    this.inFlight.clear();
  }
}

export function dailyLimit(raw = process.env.AI_DAILY_LIMIT): number {
  const parsed = Number(raw ?? "30");
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 30;
}
