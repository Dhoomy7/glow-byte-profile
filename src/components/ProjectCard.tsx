
import { Github } from "lucide-react";

type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
};

const ProjectCard = ({ name, description, stack, github }: Project) => (
  <div className="group relative bg-card-dark/80 border border-slate-800 rounded-xl p-6 shadow-[0_6px_64px_0_#00fff7bb] overflow-hidden transition-transform transform hover:scale-105 hover:shadow-glow-blue duration-200 cursor-pointer mb-6">
    <div className="flex items-center mb-2">
      <h3 className="text-xl font-bold text-neon-blue group-hover:text-neon-green transition-colors">{name}</h3>
      <a href={github} className="ml-3" target="_blank" rel="noopener noreferrer">
        <Github className="text-slate-400 group-hover:text-neon-green transition-colors" size={22} />
      </a>
    </div>
    <div className="text-base text-slate-100 mb-3">{description}</div>
    <div className="flex flex-wrap gap-2">
      {stack.map(s => (
        <span key={s} className="text-xs px-3 py-1 rounded-md border border-slate-600 group-hover:border-neon-green transition-colors font-mono text-green-200 bg-black/40">{s}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
