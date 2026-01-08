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
          border border-slate-200 dark:border-slate-800 menu-color
        "
      >
        {/* Icono hamburguesa */}
        <div className="space-y-1">
          <span className="block h-0.5 w-5 menu-icon-background" />
          <span className="block h-0.5 w-5 menu-icon-background" />
          <span className="block h-0.5 w-5 menu-icon-background" />
        </div>
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="
            absolute right-0 top-14 z-50
            w-full
            rounded-sm
            menu-background
            border border-slate-200 dark:border-slate-800 menu-color
          "
        >
          <ul className="flex flex-col py-2">
            <NavbarItem href="#Profile" label="Inicio" classNameText="text-center" classNameContainer="" classNameLi="border-b-1 border-menu-item w-[80%] mx-auto py-2"/>
            <NavbarItem href="#AboutMe" label="Sobre mí" classNameText="text-center" classNameLi="border-b-1 border-menu-item w-[80%] mx-auto py-2"/>
            <NavbarItem href="#Experience" label="Experiencia" classNameText="text-center" classNameLi="border-b-1 border-menu-item w-[80%] mx-auto py-2"/>
            <NavbarItem href="#Education" label="Educación" classNameText="text-center" classNameLi="border-b-1 border-menu-item w-[80%] mx-auto py-2"/>
            <NavbarItem href="#Projects" label="Proyectos" classNameText="text-center" classNameLi="border-b-1 border-menu-item w-[80%] mx-auto py-2"/>

            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
