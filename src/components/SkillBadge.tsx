
import { ReactNode, useRef } from "react";
type SkillBadgeProps = { children: ReactNode; highlight?: boolean };
const SkillBadge = ({ children, highlight }: SkillBadgeProps) => {
  // 3D tilt for badge
  const badgeRef = useRef<HTMLSpanElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!badgeRef.current) return;
    const rect = badgeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    badgeRef.current.style.transform =
      `rotateY(${x / 18}deg) rotateX(${-(y / 22)}deg) scale(1.08)`;
  };
  const handleMouseLeave = () => {
    if (!badgeRef.current) return;
    badgeRef.current.style.transform = "";
  };

  return (
    <span
      ref={badgeRef}
      className={
        "inline-block px-4 py-2 rounded-lg font-mono text-sm font-semibold mr-3 mb-3 transition-transform duration-200 bg-blur backdrop-blur-sm"
        +
        (highlight
          ? " bg-neon-green/10 border border-neon-green text-neon-green shadow-glow-green animate-glow"
          : " bg-card-dark/80 border border-slate-700 text-slate-100 hover:bg-neon-blue/10 hover:border-neon-blue hover:text-neon-blue transition-all")
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform" }}
    >
      {children}
    </span>
  );
};

export default SkillBadge;
