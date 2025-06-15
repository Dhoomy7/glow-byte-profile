
import React from "react";
import { Float, Html } from "@react-three/drei";
import { SiFlutter, SiDart, SiFirebase, SiPhp, SiPostman } from "react-icons/si";
import { FaRust } from "react-icons/fa6"; // Example for REST APIs
import { FaDatabase } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

type SkillsOrbs3DProps = {
  center: [number, number, number];
  radius: number;
};

// Equally space skill orbs around a circle (or grid for >8)
const skills = [
  { name: "Flutter",    color: "#42a5f5", icon: <SiFlutter /> },
  { name: "Dart",       color: "#00c4b3", icon: <SiDart /> },
  { name: "Firebase",   color: "#ffa000", icon: <SiFirebase /> },
  { name: "PHP",        color: "#7377ad", icon: <SiPhp /> },
  { name: "REST APIs",  color: "#12f8c2", icon: <FaRust /> },
  { name: "Provider",   color: "#56e366", icon: <FaDatabase /> },
  { name: "GetX",       color: "#7f39fb", icon: <FaListCheck /> },
  { name: "Postman",    color: "#ff6c37", icon: <SiPostman /> },
];

export default function SkillsOrbs3D({ center, radius }: SkillsOrbs3DProps) {
  const cx = center[0], cy = center[1], cz = center[2];
  const N = skills.length;

  return (
    <>
      {skills.map((skill, idx) => {
        // Arrange in a circle, with some vertical spread
        const angle = (2 * Math.PI * idx) / N;
        const x = cx + radius * Math.cos(angle);
        const z = cz + radius * Math.sin(angle);
        const y = cy + 0.35 * Math.sin(angle * 1.4); // Slight vertical offset for 3D

        return (
          <Float
            key={skill.name}
            floatIntensity={1.1}
            speed={1.21 + idx*0.13}
            rotationIntensity={0.6}
          >
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.48, 32, 32]} />
              <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.49} metalness={0.6} />
              <Html transform position={[0, 0, 0.55]}>
                <div className="w-16 h-16 flex flex-col items-center justify-center group select-none">
                  <div className="text-3xl group-hover:scale-110 group-hover:animate-glow transition-transform duration-150">{skill.icon}</div>
                  <div className="text-xs mt-1 rounded px-2 py-1 bg-black/85 text-white font-mono shadow-glow-green opacity-90 pointer-events-auto group-hover:bg-neon-green/10 group-hover:text-neon-green transition-all whitespace-nowrap font-semibold">
                    {skill.name}
                  </div>
                </div>
              </Html>
            </mesh>
          </Float>
        );
      })}
      {/* Skill area signpost */}
      <Float floatIntensity={1.4} speed={1.1}>
        <mesh position={[cx, cy + 2.2, cz]}>
          <planeGeometry args={[3.25, 0.67]} />
          <meshStandardMaterial color="#171f2d" emissive="#00fff7" emissiveIntensity={0.13} />
          <Html transform position={[0,0,0.06]}>
            <div className="text-neon-blue font-mono text-base tracking-wide text-center glow-text font-bold py-1">Skills</div>
          </Html>
        </mesh>
      </Float>
    </>
  );
}
