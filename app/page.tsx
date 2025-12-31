import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { FloatingMenu } from "@/components/ui/FloatingMenu";
import { ExperienceV2 } from "@/components/sections/ExperienceV2";

export default function Home() {
  return (
    <div className="relative pb-24">
      <Hero />
      <ExperienceV2 />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
      <FloatingMenu />
    </div>
  );
}