
import SkillBadge from "./SkillBadge";
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
    className="w-full max-w-3xl mx-auto mb-12 card-glass p-11 backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-accent-gradient font-orbitron mb-5 text-center tracking-wide"
      style={{ textShadow: "0 0 10px #39ff14a2" }}
    >Skills</h2>
    <div className="flex flex-wrap mt-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="badge-glass-green text-base font-mono mb-3 mr-3"
          style={{ minWidth: 94 }}
        >
          {skill}
        </span>
      ))}
    </div>
    {/* Up arrow to scroll to hero */}
    <div className="flex justify-center mt-8 mb-[0.15rem] md:mb-2">
      <button
        aria-label="Scroll to hero section"
        onClick={() => {
          const heroSection = document.getElementById("hero");
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="bg-transparent border-none shadow-none p-0 transition focus-visible:ring-2 focus-visible:ring-accent-green active:scale-95 group outline-none"
        style={{
          transition: "background 0.18s, transform 0.15s",
        }}
      >
        <ArrowUp
          size={38}
          className="text-accent-green drop-shadow-[0_0_8px_#39ff14] animate-pulse group-hover:scale-110 transition-transform duration-200"
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
