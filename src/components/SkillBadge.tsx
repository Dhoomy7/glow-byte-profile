
import { ReactNode } from "react";
type SkillBadgeProps = { children: ReactNode; highlight?: boolean };
const SkillBadge = ({ children, highlight }: SkillBadgeProps) => (
  <span
    className={
      "inline-block px-4 py-2 rounded-lg font-mono text-sm font-semibold mr-3 mb-3 " +
      (highlight
        ? "bg-neon-green/10 border border-neon-green text-neon-green shadow-glow-green animate-glow"
        : "bg-card-dark/80 border border-slate-700 text-slate-100 hover:bg-neon-blue/10 hover:border-neon-blue hover:text-neon-blue transition-all")
    }
  >
    {children}
  </span>
);

export default SkillBadge;
