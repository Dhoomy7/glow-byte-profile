import Hero3DSection from "../components/Hero3DSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Navbar from "../components/Navbar";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";

// We use scroll-mt-[104px] for all major sections to match navbar height+shadow

const Index = () => (
  <div className="relative min-h-screen bg-main-gradient flex flex-col items-center pb-24">
    <Navbar />
    <div className="w-full max-w-5xl mx-auto mt-24 flex flex-col gap-12 px-4">
      <section id="hero" className="scroll-mt-[104px]"><Hero3DSection /></section>
      <section id="about" className="scroll-mt-[104px]"><AboutSection /></section>
      <section id="education" className="scroll-mt-[104px]"><EducationSection /></section>
      <section id="experience" className="scroll-mt-[104px]"><ExperienceSection /></section>
      <section id="projects" className="scroll-mt-[104px]"><ProjectsSection /></section>
      <section id="skills" className="scroll-mt-[104px]"><SkillsSection /></section>
    </div>
  </div>
);

export default Index;
