
import React from "react";
import { Float, Html } from "@react-three/drei";

interface AboutPanel3DProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

export default function AboutPanel3D({ position, rotation }: AboutPanel3DProps) {
  return (
    <Float floatIntensity={1.8} speed={1.3}>
      <mesh position={position} rotation={rotation}>
        <planeGeometry args={[4.9, 2.15]} />
        <meshStandardMaterial color="#171f2d" emissive="#39ff14" emissiveIntensity={0.22} />
        <Html transform position={[0, 0, 0.09]} style={{width:"100%",height:"100%"}}>
          <div className="flex flex-row items-center p-5 gap-5">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=230&q=80"
              alt="Profile"
              className="rounded-full w-20 h-20 border-2 border-neon-green shadow-glow-green object-cover mr-4"
            />
            <div>
              <div className="font-mono text-lg glow-text mb-2">About Me</div>
              <div className="text-[15px] font-mono text-neon-green glow-text leading-snug">
                Motivated Flutter developer with internship experience, Firebase, REST APIs, and cross-platform app building.
              </div>
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
