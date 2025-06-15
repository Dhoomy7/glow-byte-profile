
import { Github } from "lucide-react";
import React, { useRef } from "react";

type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  gif: string;
};

const ProjectCard = ({ name, description, stack, github, gif }: Project) => {
  // 3D tilt effect
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.current.style.transform =
      `rotateY(${x / 16}deg) rotateX(${-(y / 18)}deg) scale(1.04)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-card-dark/80 border border-slate-800 rounded-xl p-6 shadow-[0_6px_64px_0_#00fff7bb] overflow-hidden transition-transform hover:shadow-glow-blue duration-300 cursor-pointer mb-6 perspective-800"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform", perspective: 800 }}
    >
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-bold text-neon-blue group-hover:text-neon-green transition-colors">
          {name}
        </h3>
        <a href={github} className="ml-3" target="_blank" rel="noopener noreferrer">
          <Github className="text-slate-400 group-hover:text-neon-green transition-colors" size={22} />
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
        <img
          src={gif}
          alt={`Demo of ${name}`}
          className="w-[260px] h-[140px] rounded shadow-neon-blue object-cover border border-slate-600 bg-black/60 transition-all duration-200 group-hover:scale-105"
        />
        <div className="text-base text-slate-100">{description}</div>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map(s => (
          <span
            key={s}
            className="text-xs px-3 py-1 rounded-md border border-slate-600 group-hover:border-neon-green transition-colors font-mono text-green-200 bg-black/40"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
