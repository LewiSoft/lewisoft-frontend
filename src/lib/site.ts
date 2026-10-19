import type { NavItem } from "@/types";

export const siteConfig = {
  name: "LewiSoft",
  description:
    "LewiSoft is a two-person web development studio building fast, modern websites and web apps for businesses, schools and organisations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
};

export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
