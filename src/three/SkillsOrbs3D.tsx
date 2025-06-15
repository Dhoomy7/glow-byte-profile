
import React from "react";
import { Float, Html } from "@react-three/drei";
import { SiFlutter, SiDart, SiFirebase, SiPhp, SiPostman } from "react-icons/si";
import { FaRust } from "react-icons/fa6"; // Example for REST APIs
import { FaDatabase } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

// We'll use simple colored spheres for each skill with glow.
const skills = [
  { name: "Flutter",    color: "#42a5f5", pos: [2.5,3.5,-1], icon: <SiFlutter /> },
  { name: "Dart",       color: "#00c4b3", pos: [3.7,2.4,-3], icon: <SiDart /> },
  { name: "Firebase",   color: "#ffa000", pos: [4.3,2.1,1.4], icon: <SiFirebase /> },
  { name: "PHP",        color: "#7377ad", pos: [2.5,1.5,3], icon: <SiPhp /> },
  { name: "REST APIs",  color: "#12f8c2", pos: [4.9,2.7,-1], icon: <FaRust /> },
  { name: "Provider",   color: "#56e366", pos: [6.2,3.4,0], icon: <FaDatabase /> },
  { name: "GetX",       color: "#7f39fb", pos: [5.2,1.2,-0.8], icon: <FaListCheck /> },
  { name: "Postman",    color: "#ff6c37", pos: [6.7,2.1,2.2], icon: <SiPostman /> },
];

export default function SkillsOrbs3D() {
  return (
    <>
      {skills.map((skill, idx) => (
        <Float
          key={skill.name}
          floatIntensity={1.5}
          speed={1.8 + idx * 0.17}
          rotationIntensity={0.8}
        >
          <mesh position={skill.pos as [number, number, number]}>
            <sphereGeometry args={[0.45, 32, 32]} />
            <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.55} metalness={0.52} />
            <Html transform position={[0, 0, 0.5]}>
              <div className="w-14 h-14 flex flex-col items-center justify-center">
                <div className="text-3xl">{skill.icon}</div>
                <div className="text-xs mt-1 rounded px-2 py-1 bg-black/80 text-white font-mono shadow-glow-green pointer-events-auto">
                  {skill.name}
                </div>
              </div>
            </Html>
          </mesh>
        </Float>
      ))}
    </>
  );
}
