
import SectionDownArrow from "./SectionDownArrow";

const EducationSection = () => (
  <section
    id="education"
    className="w-full max-w-3xl mx-auto mb-12 text-lg bg-card-dark/80 rounded-lg p-9 shadow-glow-blue border-l-4 border-neon-blue backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-3 text-center">Education</h2>
    <ul className="list-disc pl-6">
      <li>
        <span className="font-semibold text-neon-blue">Bachelor of Computer Science</span> – Islamic University of Madinah (2017–2022)
      </li>
      <li>
        <span className="font-semibold text-neon-blue">High School</span> – King Fahd Secondary School
      </li>
    </ul>
    <SectionDownArrow nextSectionId="experience" />
  </section>
);

export default EducationSection;
