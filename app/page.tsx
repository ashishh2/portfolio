import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact"; // Import
import { FloatingMenu } from "@/components/ui/FloatingMenu";

export default function Home() {
  return (
    <div className="relative pb-24">
      <Hero />
      <Experience />
      <Projects />
      <Achievements />
      <Contact /> {/* Add here */}
      <FloatingMenu />
    </div>
  );
}