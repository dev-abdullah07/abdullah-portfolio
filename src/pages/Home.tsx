import { Hero } from "../components/sections/Hero";
import { TechMarquee } from "../components/sections/TechMarquee";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
import { Stats } from "../components/sections/Stats";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Certifications } from "../components/sections/Certifications";
import { Contact } from "../components/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Stats />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
