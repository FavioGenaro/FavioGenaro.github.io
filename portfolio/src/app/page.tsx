import AboutSection from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection id="Profile"/>
      <AboutSection id="AboutMe"/>
      <Experience id="Experience"/>
    </>
    
  );
}
