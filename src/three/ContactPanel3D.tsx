
import React from "react";
import { Float, Html } from "@react-three/drei";
import { Mail, Phone, Link } from "lucide-react";

interface ContactPanel3DProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

export default function ContactPanel3D({ position, rotation }: ContactPanel3DProps) {
  return (
    <Float floatIntensity={1.7} speed={1.2}>
      <mesh position={position} rotation={rotation}>
        <planeGeometry args={[4.8, 2.2]} />
        <meshStandardMaterial color="#14181d" emissive="#00fff7" emissiveIntensity={0.21} />
        <Html transform position={[0, 0, 0.08]}>
          <div className="font-mono text-neon-green glow-text p-4 text-sm flex flex-col gap-1 items-start">
            <div className="font-bold text-[18px] mb-1">Contact</div>
            <div className="flex items-center gap-2"><Mail size={16}/> <span>dhoom.sedge@gmail.com</span></div>
            <div className="flex items-center gap-2"><Link size={16}/><a href="https://atowi7.com/" target="_blank" rel="noopener noreferrer" className="underline hover:glow-text">atowi7.com</a></div>
            <div className="flex items-center gap-2"><Phone size={16}/> <span>+201117521253</span></div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
