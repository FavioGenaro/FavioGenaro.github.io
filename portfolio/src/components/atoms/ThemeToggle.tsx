"use client";
import { useTheme } from "@/hooks/useTheme";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    // <button
    //   onClick={toggleTheme}
    //   aria-label="Cambiar tema"
    //   className="theme-toggle"
    // >
    //   {theme === "dark" ? "🌙" : "☀️"}
    // </button>
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Activar modo oscuro"
      className="
        relative inline-flex h-7 w-12 items-center
        rounded-full
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500
        background-theme
      "
    >
      {/* Thumb */}
      <span
        className={`
          inline-block h-6 w-6
          transform rounded-full
          shadow background-theme-icon
          transition-transform duration-300
          ${isDark ? "translate-x-1" : "translate-x-6"}
        `}
      />

      {/* Iconos */}
      {
        isDark === false ? 
        (<span className="absolute right-1 text-xs"><MdOutlineLightMode size={15} className='text-amber-500'/></span>) : 
        (<span className="absolute left-2 text-xs"><FaMoon size={15} className='text-white'/></span>)
      }
      
      {/* <span className="absolute right-1 text-xs">🌙</span> */}
    </button>
  );
}
