"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  function toggle() {
    // Read the theme that's actually applied rather than `resolvedTheme`,
    // which can be undefined for a moment after hydration and would make the
    // first click re-select the current theme.
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle colour theme"
      onClick={toggle}
    >
      {/* Both icons are rendered and swapped with CSS to avoid a hydration mismatch. */}
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  );
}
