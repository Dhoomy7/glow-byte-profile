
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Html } from "@react-three/drei";
import { useRef } from "react";
import TypingTitle from "./TypingTitle";

const GlowingCube = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <mesh scale={1.4}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#39ff14"
        emissive="#39ff14"
        emissiveIntensity={1.8}
        metalness={0.2}
        roughness={0.3}
      />
    </mesh>
  </Float>
);

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
        <GlowingCube />
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
          <div className="flex flex-col items-center pt-[170px]">
            <TypingTitle />
            <p className="text-lg md:text-2xl mt-2 text-neon-green glow-text font-semibold">
              Flutter Developer | Giza, Cairo
            </p>
          </div>
        </Html>
      </Canvas>
    </section>
  );
};

export default Hero3DSection;
