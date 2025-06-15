
import React from "react";
import { Float, Html } from "@react-three/drei";
import { Github } from "lucide-react";

interface ProjectPanel3DProps {
  boardIndex: number;
  name: string;
  tech: string;
  github: string;
  demoImg: string;
}

export default function ProjectPanel3D({ boardIndex, name, tech, github, demoImg }: ProjectPanel3DProps) {
  // Panel horizontal positions, spaced in a row
  const panelX = boardIndex * 4.1;

  return (
    <Float floatIntensity={1.4} speed={1.1 + boardIndex * 0.18}>
      <mesh position={[panelX, 0, 0]} rotation={[0, 0.0, 0]}>
        <planeGeometry args={[4.05, 2.25]} />
        <meshStandardMaterial color="#181823" emissive="#ad00ff" emissiveIntensity={0.17} />
        <Html transform position={[0, 0, 0.06]} style={{width:"100%",height:"100%"}}>
          <div className="flex flex-col h-full justify-center items-center px-4 py-4 gap-2 font-mono">
            <div className="text-lg md:text-xl font-semibold text-neon-purple mb-1" style={{letterSpacing:"0.01em"}}>{name}</div>
            <div className="text-xs mb-1 text-white/80 font-mono text-center">{tech}</div>
            <img src={demoImg} alt={name} className="rounded mb-2 border border-neon-purple" style={{maxHeight:"62px",objectFit:"cover"}}/>
            <a href={github} className="flex items-center gap-1 text-neon-purple underline text-xs hover:text-neon-green hover-scale mt-1" target="_blank" rel="noopener noreferrer">
              <Github size={15} /> <span>GitHub</span>
            </a>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
