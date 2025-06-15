
import SkillBadge from "./SkillBadge";
import SectionDownArrow from "./SectionDownArrow";

const skills = [
  "Flutter",
  "Dart",
  "Firebase",
  "Provider",
  "GetX",
  "REST APIs",
  "PHP",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Postman",
  "OOP",
];

const SkillsSection = () => (
  <section
    id="skills"
    className="w-full max-w-3xl mx-auto mb-12 bg-card-dark/80 rounded-lg p-9 shadow-glow-green border-l-4 border-neon-green backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-2xl md:text-3xl font-bold glow-text mb-3 text-center">Skills</h2>
    <div className="flex flex-wrap mt-2">
      {skills.map((skill) => (
        <SkillBadge key={skill}>{skill}</SkillBadge>
      ))}
    </div>
    <SectionDownArrow nextSectionId="contact" />
  </section>
);

export default SkillsSection;
