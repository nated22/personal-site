"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
        window.localStorage.setItem("theme", next);
      }
      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-20 rounded-full bg-slate-900 text-slate-50 shadow-soft-card px-4 py-2 text-xs font-medium hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors"
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}

