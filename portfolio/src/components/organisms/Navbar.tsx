
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavbarItem from "../molecules/NavbarItem";

export default function Navbar() {
  return (
    <div className="flex items-center gap-6">
      <NavbarItem href="#Profile" label="Inicio" />
      <NavbarItem href="#AboutMe" label="Sobre mí" />
      <NavbarItem href="#Experience" label="Experiencia" />
      <NavbarItem href="#Education" label="Educación" />
      <NavbarItem href="#Projects" label="Proyectos" />

      <ThemeToggle />
    </div>
  );
}
