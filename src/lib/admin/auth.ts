import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ADMIN_COOKIE,
  ADMIN_MAX_AGE,
  createAdminToken,
  verifyAdminToken,
  type AdminSession,
} from "@/lib/admin/token";

/** Session courante, ou `null` si le visiteur n'est pas connecté. */
export async function getAdminSession(): Promise<AdminSession | null> {
  const store = await cookies();
  return verifyAdminToken(store.get(ADMIN_COOKIE)?.value);
}

/** À appeler au début de chaque Server Action d'administration. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

/** Écrit le cookie de session (Server Action de connexion). */
export async function openAdminSession(email: string): Promise<void> {
  const store = await cookies();
  store.set(ADMIN_COOKIE, createAdminToken(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_MAX_AGE,
  });
}

export async function closeAdminSession(): Promise<void> {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
}
