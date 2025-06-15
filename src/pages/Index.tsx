
import Hero3DSection from "../components/Hero3DSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";

const Index = () => (
  <div className="relative min-h-screen bg-[#101820] flex flex-col items-center pb-20">
    <Navbar />
    <div className="w-full max-w-5xl mx-auto mt-24 flex flex-col gap-12 px-4">
      <Hero3DSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  </div>
);

export default Index;
