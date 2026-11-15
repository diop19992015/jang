import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import "katex/dist/katex.min.css";
import "./globals.css";

import { AppProviders } from "@/components/providers";
import { ContentProvider } from "@/components/providers/content-provider";
import { BubbleDock } from "@/components/bubbles/bubble-dock";
import { CommandPalette } from "@/components/command-palette";
import { getContentIndex } from "@/lib/content/loader";
import { fr } from "@/lib/i18n/fr";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Jàng — Réviser, réussir le BAC et le BFEM",
    template: "%s · Jàng",
  },
  description: fr.app.description,
  applicationName: "Jàng",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Jàng",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: "Jàng",
    title: "Jàng — Réviser, réussir le BAC et le BFEM",
    description: fr.app.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#06070e" }],
};

const themeScript = `(function(){try{
  var raw = localStorage.getItem('jang:v1:settings');
  var s = raw ? JSON.parse(raw) : {};
  var theme = s.theme || 'sombre';
  if (theme === 'systeme') theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'clair' : 'sombre';
  var auto = s.modeLeger === 'auto';
  var saveData = navigator.connection && navigator.connection.saveData;
  var mem = navigator.deviceMemory;
  var cores = navigator.hardwareConcurrency;
  var lite = s.modeLeger === 'actif' || (auto && (saveData || (mem && mem <= 4) || (cores && cores <= 4) || (navigator.connection && ['slow-2g','2g'].indexOf(navigator.connection.effectiveType) !== -1)));
  var root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.lite = lite ? 'true' : 'false';
  root.dataset.animations = s.animations === 'reduites' ? 'reduites' : 'auto';
  root.style.setProperty('--font-scale', s.tailleTexte === 'petit' ? '0.94' : s.tailleTexte === 'grand' ? '1.1' : '1');
}catch(e){}})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contentIndex = getContentIndex();
  return (
    <html
      lang="fr"
      data-theme="sombre"
      data-lite="false"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <AppProviders>
          <ContentProvider index={contentIndex}>
            <div className="mesh-bg" aria-hidden="true" />
            <div className="grain" aria-hidden="true" />
            {children}
            <BubbleDock />
            <CommandPalette />
          </ContentProvider>
        </AppProviders>
      </body>
    </html>
  );
}
