
import { ArrowDown } from "lucide-react";

type SectionDownArrowProps = {
  nextSectionId: string;
  className?: string;
};

const SectionDownArrow = ({ nextSectionId, className = "" }: SectionDownArrowProps) => {
  // Scroll to the section with id = nextSectionId
  const handleClick = () => {
    const next = document.getElementById(nextSectionId);
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className={`flex justify-center mt-8 mb-[0.15rem] md:mb-2 ${className}`}>
      <button
        aria-label={`Scroll to ${nextSectionId} section`}
        onClick={handleClick}
        className="bg-transparent border-none shadow-none p-0 transition focus-visible:ring-2 focus-visible:ring-neon-green active:scale-95 animate-bounce pointer-events-auto group"
        style={{
          transition: "background 0.18s, transform 0.15s",
        }}
      >
        <ArrowDown
          size={38}
          className="text-neon-green drop-shadow-[0_0_8px_#39ff14] animate-pulse group-hover:scale-110 transition-transform duration-200"
          strokeWidth={2.5}
        />
      </button>
      <style>{`
        .animate-bounce {
          animation: bounceDownArrow 1.2s cubic-bezier(.28,.84,.42,1) infinite;
        }
        @keyframes bounceDownArrow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(12px);}
        }
      `}</style>
    </div>
  );
};

export default SectionDownArrow;
