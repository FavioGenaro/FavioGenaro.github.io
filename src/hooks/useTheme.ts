"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(saved);

        console.log(saved);
        console.log(document.documentElement)
        document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  // useEffect(() => {
  //   const media = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handler = () => {
  //     if (!localStorage.getItem("theme")) {
  //       const newTheme = media.matches ? "dark" : "light";
  //       setTheme(newTheme);
  //       document.documentElement.setAttribute("data-theme", newTheme);
  //     }
  //   };
  //   media.addEventListener("change", handler);
  //   return () => media.removeEventListener("change", handler);
  // }, []);


  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return { theme, toggleTheme };
}
