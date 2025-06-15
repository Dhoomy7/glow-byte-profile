
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

// Floating image with 3D movement, showing the user's uploaded image, with fallback
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
            }}
          />
        </div>
      </Html>
    </Float>
  );
};

const GlowingRing = () => (
  <Float speed={1.6} rotationIntensity={2.3} floatIntensity={0.5}>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <torusGeometry args={[1.6, 0.07, 32, 120]} />
      <meshStandardMaterial
        color="#00fff7"
        emissive="#00fff7"
        emissiveIntensity={2}
        wireframe={false}
        opacity={0.45}
        transparent
      />
    </mesh>
  </Float>
);

const Hero3DSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-[520px] md:min-h-[650px] w-full rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
      style={{ background: "rgba(15,24,34,0.91)" }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <div className="absolute left-10 bottom-10 w-36 h-36 bg-neon-blue rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute right-10 top-12 w-44 h-44 bg-neon-green rounded-full blur-[60px] opacity-30 animate-pulse"></div>
      </div>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        shadows
        className="w-full h-full"
        style={{ minHeight: 510, borderRadius: 16 }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 4, 6]} color="#00fff7" intensity={1.5} />
        <FloatingProfileImage />
        <GlowingRing />
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
          <div className="flex flex-col items-center pt-[295px]">
            <div className="h-6" />
            <h1 className="text-3xl md:text-5xl font-bold glow-text text-white font-mono mb-2">
              Hi, I&apos;m Abdulrahman
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-neon-blue mb-2 font-mono">
              Mobile App Developer
            </h2>
            {/* Down arrow button for navigation to About */}
            <button
              aria-label="Scroll to About section"
              onClick={handleArrowClick}
              className="mt-8 pointer-events-auto bg-[#101820cc] rounded-full border-2 border-neon-green shadow-glow-green p-3 transition hover:bg-neon-green/30 focus-visible:ring-2 focus-visible:ring-neon-green active:scale-95 animate-bounce"
              style={{
                transition: "background 0.18s, transform 0.15s",
              }}
            >
              <ArrowDown
                size={32}
                className="text-neon-green drop-shadow-[0_0_8px_#39ff14] animate-pulse"
                strokeWidth={2.5}
              />
            </button>
            <style>{`
              @media (min-width: 700px) {
                .animate-bounce {
                  animation: bounceDownArrow 1.6s cubic-bezier(.28,.84,.42,1) infinite;
                }
              }
              @keyframes bounceDownArrow {
                0%, 100% { transform: translateY(0);}
                50% { transform: translateY(14px);}
              }
            `}</style>
          </div>
        </Html>
      </Canvas>
    </section>
  );
};

export default Hero3DSection;

