import type { NavItem } from "@/types";

export const siteConfig = {
  name: "LewiSoft",
  description:
    "LewiSoft is a two-person web development studio building fast, modern websites and web apps for businesses, schools and organisations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
};

// TODO: confirm these before launch. Optional channels stay hidden on the
// Contact page until they have a value.
export const contactConfig: {
  email: string;
  /** International format without spaces, e.g. "233501234567". */
  whatsapp?: string;
  /** Display version of the WhatsApp number. */
  whatsappDisplay?: string;
  /** Scheduling link, e.g. a Cal.com event URL. */
  bookingUrl?: string;
  hubs: { city: string; country: string; timezone: string }[];
} = {
  email: "hello@lewisoft.studio",
  hubs: [
    { city: "Accra", country: "Ghana", timezone: "UTC+0" },
    { city: "London", country: "United Kingdom", timezone: "UTC+0 / BST" },
  ],
};

export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
