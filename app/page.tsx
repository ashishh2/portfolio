import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education"; // Import
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { FloatingMenu } from "@/components/ui/FloatingMenu";

export default function Home() {
  return (
    <div className="relative pb-24">
      <Hero />
      <Experience />
      <Education /> {/* MOVED UP: Now sits between Experience and Projects */}
      <Projects />
      <Achievements />
      <Contact />
      <FloatingMenu />
    </div>
  );
}