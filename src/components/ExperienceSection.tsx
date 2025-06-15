
import SectionDownArrow from "./SectionDownArrow";

const ExperienceSection = () => (
  <section
    id="experience"
    className="w-full max-w-3xl mx-auto mb-12 text-lg bg-card-dark/80 rounded-lg p-9 shadow-glow-blue border-l-4 border-neon-blue backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-3 text-center">Experience</h2>
    <div className="space-y-6 ml-2 text-base">
      <article>
        <div className="font-semibold text-neon-green">Flutter Intern – Instakit (2024):</div>
        <div>Built apps with Flutter using Provider & Firebase, integrated REST APIs, debugged with Postman.</div>
      </article>
      <article>
        <div className="font-semibold text-neon-blue">Software Dev Intern (2021):</div>
        <div>Worked on Android apps and Firebase-based websites, contributing to both front-end and back-end.</div>
      </article>
    </div>
    <SectionDownArrow nextSectionId="projects" />
  </section>
);

export default ExperienceSection;
