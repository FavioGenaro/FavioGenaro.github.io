"use client";
import Navbar from "./Navbar";
 
export default function Header() {
  return (
    <header
      className="
        fixed top-0 z-50
        backdrop-blur
        background
        header
        w-full
      "
    >
      {/* border-slate-200 dark:border-slate-800
        bg-white/80 dark:bg-slate-950/80 */}
      <nav
        className="
          mx-auto max-w-6xl
          px-4 sm:px-6 lg:px-8
          h-10 md:h-16
          flex items-center justify-center
        "
      >
        <Navbar />
      </nav>
    </header>
  );
}
