/* Jàng — service worker.
 *
 * Stratégies :
 *  - navigation : réseau d'abord, cache en secours (pages déjà visitées) ;
 *  - ressources statiques (_next/static, polices, images) : cache d'abord ;
 *  - API : jamais mise en cache (réponses personnalisées et flux IA).
 *
 * L'espace /admin est exclu : les contenus doivent toujours être frais.
 */

const VERSION = "jang-v1";
const STATIC_CACHE = `${VERSION}-static`;
const PAGES_CACHE = `${VERSION}-pages`;

const PRECACHE = ["/", "/tableau-de-bord", "/cours", "/exercices", "/notes", "/reglages", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES_CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !key.startsWith(VERSION))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function isCacheableAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/fonts/") ||
    /\.(?:css|js|woff2?|ttf|otf|png|jpg|jpeg|webp|avif|svg|ico)$/i.test(url.pathname)
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;
  if (url.pathname.startsWith("/admin")) return;

  // Navigations : réseau d'abord, cache ensuite.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGES_CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined);
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          const home = await caches.match("/");
          if (home) return home;
          return new Response(
            `<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Hors ligne</title><body style="font-family:system-ui;background:#06070e;color:#eef1f8;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center"><div><p style="letter-spacing:.2em;font-size:.7rem;color:#a5b0c8">JÀNG</p><h1 style="font-size:1.4rem">Tu es hors ligne</h1><p style="color:#a5b0c8;max-width:32ch">Cette page n'a pas encore été mise en cache. Reconnecte-toi pour la consulter.</p></div></body></html>`,
            { headers: { "Content-Type": "text/html; charset=utf-8" }, status: 503 },
          );
        }),
    );
    return;
  }

  // Ressources statiques : cache d'abord.
  if (isCacheableAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches
                .open(STATIC_CACHE)
                .then((cache) => cache.put(request, copy))
                .catch(() => undefined);
            }
            return response;
          }),
      ),
    );
  }
});

self.addEventListener("message", (event) => {
  if (event.data === "skip-waiting") self.skipWaiting();
});
