export interface NavItem {
  href: string;
  key: "tableau" | "cours" | "resumes" | "exercices" | "notes" | "reglages";
  icon: "dashboard" | "book" | "file" | "dumbbell" | "note" | "settings";
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/tableau-de-bord", key: "tableau", icon: "dashboard" },
  { href: "/cours", key: "cours", icon: "book" },
  { href: "/resumes", key: "resumes", icon: "file" },
  { href: "/exercices", key: "exercices", icon: "dumbbell" },
  { href: "/notes", key: "notes", icon: "note" },
];

export const MOBILE_NAV: NavItem[] = [
  { href: "/tableau-de-bord", key: "tableau", icon: "dashboard" },
  { href: "/cours", key: "cours", icon: "book" },
  { href: "/exercices", key: "exercices", icon: "dumbbell" },
  { href: "/notes", key: "notes", icon: "note" },
  { href: "/reglages", key: "reglages", icon: "settings" },
];
