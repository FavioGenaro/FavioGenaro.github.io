"use client";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavbarItem from "../molecules/NavbarItem";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-6">
      <ul className="hidden md:flex items-center gap-6">
        <NavbarItem href="#Profile" label="Inicio" />
        <NavbarItem href="#AboutMe" label="Sobre mí" />
        <NavbarItem href="#Experience" label="Experiencia" />
        <NavbarItem href="#Education" label="Educación" />
        <NavbarItem href="#Projects" label="Proyectos" />

        <ThemeToggle />
      </ul>
      {/* Mobile button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        className="
          md:hidden
          rounded-md p-2
          border border-slate-200 dark:border-slate-800
        "
      >
        {/* Icono hamburguesa */}
        <div className="space-y-1">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </div>
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="
            absolute right-0 top-12 z-50
            w-56
            rounded-xl
            bg-white dark:bg-slate-950
            border border-slate-200 dark:border-slate-800
            shadow-lg
          "
        >
          <ul className="flex flex-col py-2">
            <NavbarItem href="#Profile" label="Inicio" />
            <NavbarItem href="#AboutMe" label="Sobre mí" />
            <NavbarItem href="#Experience" label="Experiencia" />
            <NavbarItem href="#Education" label="Educación" />
            <NavbarItem href="#Projects" label="Proyectos" />

            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
