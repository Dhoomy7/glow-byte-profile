
import React from "react";
import { Float, Html } from "@react-three/drei";
import { Mail, Phone, Link } from "lucide-react";

export default function ContactPanel3D() {
  return (
    <Float floatIntensity={1.7} speed={1.2}>
      <mesh position={[5.5, 2.1, 7]} rotation={[0, -Math.PI/2.9, 0]}>
        <planeGeometry args={[4.8, 2.2]} />
        <meshStandardMaterial color="#14181d" emissive="#00fff7" emissiveIntensity={0.21} />
        <Html transform position={[0, 0, 0.08]}>
          <div className="font-mono text-neon-green glow-text p-4 text-sm flex flex-col gap-1">
            <div className="font-bold text-lg mb-1">Contact</div>
            <div className="flex items-center gap-2">
              <Mail size={18}/> <span>dhoom.sedge@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Link size={18}/><a href="https://atowi7.com/" target="_blank" rel="noopener noreferrer" className="underline hover:glow-text">atowi7.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18}/> <span>+201117521253</span>
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
