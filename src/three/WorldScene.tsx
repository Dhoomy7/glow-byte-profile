import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment, Float } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import PlayerCube from "./PlayerCube";
import React from "react";
import IntroPanel3D from "./IntroPanel3D";
import AboutPanel3D from "./AboutPanel3D";
import ProjectPanel3D from "./ProjectPanel3D";
import SkillsOrbs3D from "./SkillsOrbs3D";
import ContactPanel3D from "./ContactPanel3D";

// Hacker/dev neon dark palette
const LabRoom = () => (
  <group>
    {/* Floor */}
    <mesh receiveShadow position={[0, -0.55, 0]}>
      <boxGeometry args={[18, 1, 18]} />
      <meshStandardMaterial color="#11191f" emissive="#00fff7" emissiveIntensity={0.13} />
    </mesh>
    {/* Neon floating panels for ambiance */}
    <Float floatIntensity={2} speed={2}>
      <mesh position={[-4, 2.3, 2.5]}>
        <planeGeometry args={[4, 1.2]} />
        <meshStandardMaterial color="#171f2d" emissive="#39ff14" emissiveIntensity={0.42} />
      </mesh>
    </Float>
    <Float floatIntensity={2} speed={2}>
      <mesh position={[4, 3, -4]} rotation={[0, 0.12, 0]}>
        <planeGeometry args={[1.8, 4]} />
        <meshStandardMaterial color="#11181d" emissive="#00fff7" emissiveIntensity={0.35} />
      </mesh>
    </Float>
    {/* Simple walls */}
    <mesh position={[0, 2.2, -8.5]}>
      <boxGeometry args={[18, 5, 1]} />
      <meshStandardMaterial color="#181823" emissive="#00fff7" emissiveIntensity={0.09} />
    </mesh>
    <mesh position={[8.5, 2.2, 0]}>
      <boxGeometry args={[1, 5, 18]} />
      <meshStandardMaterial color="#1a161e" emissive="#39ff14" emissiveIntensity={0.13} />
    </mesh>
    <mesh position={[-8.5, 2.2, 0]}>
      <boxGeometry args={[1, 5, 18]} />
      <meshStandardMaterial color="#181823" emissive="#ad00ff" emissiveIntensity={0.11} />
    </mesh>
    {/* Ambient terminal style "screen" */}
    <mesh position={[0, 2.6, 8.1]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[10, 2.5]} />
      <meshStandardMaterial color="#14181b" emissive="#00ffd0" emissiveIntensity={0.11} />
    </mesh>
    {/* --- Portfolio 3D Content --- */}
    {/* 1. Main Intro Terminal */}
    <IntroPanel3D />

    {/* 2. About Me */}
    <AboutPanel3D />

    {/* 3. Project Boards */}
    <ProjectPanel3D
      position={[-4, 2.1, -5.8]}
      rotation={[0, 0.22, 0]}
      name="E-Commerce App"
      tech="Flutter • Firebase • PHP • GetX"
      github="https://github.com/atowi7/E-Commerce-App"
      demoImg="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=220&q=80"
    />
    <ProjectPanel3D
      position={[0, 1.6, -7.2]}
      rotation={[0, -.01, 0]}
      name="To-Do App"
      tech="Flutter • SQFLite • Provider"
      github="https://github.com/atowi7/to_do_app"
      demoImg="https://images.unsplash.com/photo-1518770660439-4636190af475?w=220&q=80"
    />
    <ProjectPanel3D
      position={[3.6, 2.1, -5.6]}
      rotation={[0, -0.28, 0]}
      name="Poll System"
      tech="Flutter • Firebase"
      github="https://github.com/atowi7/Poll-App"
      demoImg="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=220&q=80"
    />
    <ProjectPanel3D
      position={[7, 1.8, 2]}
      rotation={[0, -1.1, 0]}
      name="InstaKit App"
      tech="Flutter • REST APIs • Postman"
      github="https://github.com/atowi7/InstaKit_App"
      demoImg="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=220&q=80"
    />

    {/* 4. Skills Orbs Area */}
    <SkillsOrbs3D />

    {/* 5. Contact Panel */}
    <ContactPanel3D />
  </group>
);

export default function WorldScene() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 60 }}>
        {/* Effects */}
        <color attach="background" args={["#101820"]} />
        <fog attach="fog" args={["#181e24", 12, 26]} />
        <ambientLight intensity={0.33} />
        <pointLight position={[0, 7, 0]} intensity={0.9} color="#39ff14" />
        <pointLight position={[-10, 5, 8]} intensity={0.7} color="#00fff7" />
        <pointLight position={[8, 7, -6]} intensity={0.6} color="#ad00ff" />

        <LabRoom />
        <Physics>
          <PlayerCube />
        </Physics>
        <Stars
          radius={30}
          depth={52}
          count={1500}
          factor={0.6}
          fade
        />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2.1} minPolarAngle={0.5} />
        <Environment preset="city" />
      </Canvas>
      {/* Optional: Futuristic overlay HUD */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 pointer-events-none select-none z-20 font-mono text-lg text-neon-green [text-shadow:0_0_8px_#39ff14,0_0_2px_#39ff14b0]">
        <span>3D Portfolio World — Use WASD/Arrow Keys to Move</span>
      </div>
    </div>
  );
}
