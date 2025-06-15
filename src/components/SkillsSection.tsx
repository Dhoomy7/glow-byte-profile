
import SkillBadge from "./SkillBadge";
import SectionDownArrow from "./SectionDownArrow";
import { ArrowUp } from "lucide-react";

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
    {/* Replace SectionDownArrow with up arrow to scroll to hero */}
    <div className="flex justify-center mt-8 mb-[0.15rem] md:mb-2">
      <button
        aria-label="Scroll to hero section"
        onClick={() => {
          const heroSection = document.getElementById("hero");
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="bg-[#101820cc] rounded-full border-2 border-neon-green shadow-glow-green p-2 transition hover:bg-neon-green/30 focus-visible:ring-2 focus-visible:ring-neon-green active:scale-95"
        style={{
          transition: "background 0.18s, transform 0.15s",
        }}
      >
        <ArrowUp
          size={28}
          className="text-neon-green drop-shadow-[0_0_8px_#39ff14] animate-pulse"
          strokeWidth={2.5}
        />
      </button>
      <style>{`
        @media (min-width: 700px) {
          .animate-bounce {
            animation: bounceUpArrow 1.6s cubic-bezier(.28,.84,.42,1) infinite;
          }
        }
        @keyframes bounceUpArrow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-14px);}
        }
      `}</style>
    </div>
  </section>
);

export default SkillsSection;
