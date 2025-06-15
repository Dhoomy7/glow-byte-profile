
import React from "react";
import { Float, Html } from "@react-three/drei";

export default function AboutPanel3D() {
  return (
    <Float floatIntensity={2.1} speed={1.6}>
      <mesh position={[-6.5, 2.2, 3.7]} rotation={[0, 0.3, 0]}>
        <planeGeometry args={[4.9, 2.15]} />
        <meshStandardMaterial color="#171f2d" emissive="#39ff14" emissiveIntensity={0.26} />
        <Html transform position={[0, 0, 0.08]} style={{width:"100%",height:"100%"}}>
          <div className="p-4 flex flex-row items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80"
              alt="Profile"
              className="rounded-full w-16 h-16 border-2 border-neon-green shadow-glow-green object-cover mr-4"
            />
            <div>
              <div className="font-mono text-lg glow-text mb-1">About Me</div>
              <div className="text-sm font-mono text-neon-green glow-text">
                Motivated Flutter developer with internship experience, Firebase, REST APIs, and cross-platform app building.
              </div>
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
