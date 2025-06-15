
import React from "react";
import { Float, Html } from "@react-three/drei";
import { Github } from "lucide-react";

interface ProjectPanel3DProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  name: string;
  tech: string;
  github: string;
  demoImg: string;
}

export default function ProjectPanel3D(props: ProjectPanel3DProps) {
  const {
    position,
    rotation,
    name,
    tech,
    github,
    demoImg,
  } = props;

  return (
    <Float floatIntensity={1.5} speed={2.1}>
      <mesh position={position} rotation={rotation}>
        <planeGeometry args={[3.5, 2.2]} />
        <meshStandardMaterial color="#181823" emissive="#ad00ff" emissiveIntensity={0.19} />
        <Html transform position={[0, 0, 0.06]} style={{width:"100%",height:"100%"}}>
          <div className="flex flex-col h-full justify-between px-3 py-2 gap-1 font-mono">
            <div className="text-lg md:text-xl font-semibold text-neon-purple glow-text">{name}</div>
            <div className="text-xs mb-2 text-white/80">{tech}</div>
            <img src={demoImg} alt={name} className="rounded mb-1 border border-neon-purple" style={{maxHeight:"60px",objectFit:"cover"}}/>
            <a href={github} className="flex items-center gap-1 text-neon-purple underline hover:text-neon-green hover-scale" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> <span>GitHub</span>
            </a>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
