
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import SectionDownArrow from "./SectionDownArrow";

// Main hero image - editable path!
const HERO_IMAGE = "/lovable-uploads/c11983e2-dd32-4a74-9189-9d895231dc19.png";

// Floating image with 3D movement for Canvas background (optional, old)
// const FloatingProfileImage = () => {
//   const [imgSrc, setImgSrc] = useState(HERO_IMAGE);
//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <Html center position={[0, 0, 0]} style={{ pointerEvents: "none" }}>
//         <div className="flex flex-col items-center">
//           <img
//             src={imgSrc}
//             alt="Profile"
//             onError={() => setImgSrc("https://placehold.co/180x180?text=No+Image")}
//             style={{
//               width: 180,
//               height: 180,
//               objectFit: "cover",
//               background: "#101820",
//               display: "block",
//             }}
//           />
//         </div>
//       </Html>
//     </Float>
//   );
// };

const Hero3DSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE);

  // Smooth scroll to #about when arrow button is clicked
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
      style={{ background: "rgba(16, 24, 32, 0.95)", border: "1.5px solid #2DD4BF" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        shadows
        className="w-full h-full"
        style={{ minHeight: 510, borderRadius: 18 }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 4, 6]} color="#00fff7" intensity={1.5} />
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
        <Html fullscreen className="top-0 left-0 flex flex-col items-center justify-center pointer-events-none">
          <div
            className="flex flex-col items-center justify-center h-full w-full gap-4 pt-[170px] md:pt-[220px] pb-0"
          >
            {/* New Image block before the name */}
            <div className="flex justify-center mb-4 pointer-events-auto">
              <img
                src={imgSrc}
                alt="Profile"
                onError={() => setImgSrc("https://placehold.co/160x160?text=No+Image")}
                className="rounded-full shadow-glow-green border-[3px] border-[#0c573a] bg-[#101820] object-cover"
                style={{
                  width: 140,
                  height: 140,
                  objectFit: "cover",
                  background: "#101820",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px 2px #39ff1466",
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-mono mb-0 text-center w-full hero-title glow-text-enhanced">
              Hi, I&apos;m Abdulrahman
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-gradient-blue mb-0 font-mono text-center w-full glow-blue-text-enhanced">
              Mobile App Developer
            </h2>
            <button
              aria-label="Scroll to about section"
              onClick={handleArrowClick}
              className="relative z-10 mt-8 mb-[0.15rem] md:mb-2 bg-transparent border-none shadow-none p-0 transition focus-visible:ring-2 focus-visible:ring-neon-green active:scale-95 animate-bounce pointer-events-auto group"
              style={{
                transition: "background 0.18s, transform 0.15s",
              }}
            >
              {/* ArrowDown icon */}
              <svg
                width={38}
                height={38}
                strokeWidth={2.4}
                className="text-neon-green drop-shadow-[0_0_8px_#39ff14] animate-pulse group-hover:scale-110 transition-transform duration-200"
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
                animation: bounceDownArrow 1.2s cubic-bezier(.28,.84,.42,1) infinite;
              }
              @keyframes bounceDownArrow {
                0%, 100% { transform: translateY(0);}
                50% { transform: translateY(12px);}
              }
            `}</style>
          </div>
        </Html>
      </Canvas>
    </section>
  );
};

export default Hero3DSection;
