import Image from "next/image";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills_sections";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
export default function Home() {
  return (
    <main className="bg-(--bg) flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
