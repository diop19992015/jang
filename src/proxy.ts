import { NextResponse, type NextRequest } from "next/server";

import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin/token";

/**
 * Protection de l'espace auteur.
 *
 * Next.js 16 remplace `middleware` par `proxy` (runtime Node.js).
 * Le proxy bloque l'accès aux pages `/admin` sans session valide ;
 * chaque Server Action vérifie de son côté la session (défense en
 * profondeur), car un matcher peut évoluer sans qu'on s'en aperçoive.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  if (verifyAdminToken(token)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/admin/login";
  url.search = "";
  url.searchParams.set("suite", `${pathname}${search}`);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
