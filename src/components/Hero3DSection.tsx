
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Html } from "@react-three/drei";
import { useRef, useState } from "react";

const FloatingProfileImage = () => {
  const [imgSrc, setImgSrc] = useState("/lovable-uploads/c11983e2-dd32-4a74-9189-9d895231dc19.png");
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Html center position={[0, 0, 0]} style={{ pointerEvents: "none" }}>
        <div className="flex flex-col items-center">
          <img
            src={imgSrc}
            alt="Profile"
            onError={() => setImgSrc("https://placehold.co/180x180?text=No+Image")}
            style={{
              width: 180,
              height: 180,
              objectFit: "cover",
              background: "#101820",
              display: "block",
              borderRadius: "2.5rem",
              border: "3px solid #39ff14",
              boxShadow: "0 0 24px #39ff1477",
            }}
          />
        </div>
      </Html>
    </Float>
  );
};

const Hero3DSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const handleArrowClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={canvasRef}
      className="relative min-h-[520px] md:min-h-[650px] w-full rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden hero-gradient"
      style={{ background: "rgba(16, 24, 32, 0.97)", border: "2px solid #39ff14" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        shadows
        className="w-full h-full"
        style={{ minHeight: 510, borderRadius: 18 }}
      >
        <ambientLight intensity={1.16} />
        <directionalLight position={[2, 4, 6]} color="#00fff7" intensity={1.4} />
        <FloatingProfileImage />
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 2 - 0.15}
          autoRotate
          autoRotateSpeed={1.15}
        />
        <Html fullscreen className="top-0 left-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center justify-center h-full w-full pt-[180px] pb-0 gap-3">
            {/* BADGE */}
            <span className="badge-glass-green pointer-events-auto" style={{fontSize:"1.03rem"}}>
              <span role="img" aria-label="waving hand">👋</span> Hi There! I'm Abdulrahman
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-orbitron mb-0 text-center w-full glow-text-enhanced leading-[1.16]">
              <span className="text-accent-gradient">A <span className="text-ambient-green">Flutter&nbsp;Developer</span></span>
              <span className="block text-[1.08em]">
                <span className="text-white/85">I Help </span>
                <span className="text-ambient-green">Startups Launch</span>
                <span className="text-ambient-blue">&nbsp;And Grow </span>
                <span className="text-white/85">Apps</span>
              </span>
            </h1>
            <h2 className="text-md md:text-2xl font-semibold text-accent-gradient font-orbitron text-center w-full glow-blue-text-enhanced mb-0 tracking-wide mt-2 pb-3">
              Cross-Platform Apps • Firebase • Beautiful UI • REST APIs
            </h2>
            <button
              aria-label="Scroll to about section"
              onClick={handleArrowClick}
              className="relative z-10 mt-7 mb-[0.15rem] md:mb-2 bg-transparent border-none shadow-none p-0 transition focus-visible:ring-2 focus-visible:ring-neon-green active:scale-95 animate-bounce pointer-events-auto group outline-none"
              style={{
                transition: "background 0.18s, transform 0.15s",
              }}
            >
              {/* ArrowDown icon */}
              <svg
                width={42}
                height={42}
                strokeWidth={2.7}
                className="text-neon-green drop-shadow-[0_0_8px_#39ff14] animate-pulse group-hover:scale-115 transition-transform duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </button>
            <style>{`
              .animate-bounce {
                animation: bounceDownArrow 1.16s cubic-bezier(.34,.84,.42,1.02) infinite;
              }
              @keyframes bounceDownArrow {
                0%, 100% { transform: translateY(0);}
                50% { transform: translateY(15px);}
              }
            `}</style>
          </div>
        </Html>
      </Canvas>
    </section>
  );
};
export default Hero3DSection;
