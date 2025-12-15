"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="theme-toggle"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
