
import Navbar from "../components/Navbar";
import Hero3DSection from "../components/Hero3DSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

// Main desktop-optimized scrollable parallax layout
const Index = () => (
  <main className="relative min-h-screen w-full font-mono bg-dark-bg bg-grid transition-none">
    <Navbar />
    <section className="pt-32 pb-16 max-w-5xl mx-auto">
      <Hero3DSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </section>
    <div className="w-full text-center text-[11px] text-slate-500 pt-6 select-none">
      &copy; {new Date().getFullYear()} Abdulrahman Kamal Alatowi · 3D Portfolio
    </div>
  </main>
);

export default Index;
