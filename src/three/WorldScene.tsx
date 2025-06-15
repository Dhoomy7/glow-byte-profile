
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

// Bruno-Simon-inspired spatial section layout
const BrunoGround = () => (
  <mesh receiveShadow position={[0, -0.6, 0]}>
    <boxGeometry args={[42, 1, 28]} />
    <meshStandardMaterial color="#1b1f23" />
  </mesh>
);

const WorldSections = () => (
  <group>
    {/* Ground */}
    <BrunoGround />

    {/* Intro - front & center */}
    <IntroPanel3D position={[0, 1.7, 9.7]} rotation={[0, Math.PI, 0]} />

    {/* About Me - to left, forward */}
    <AboutPanel3D position={[-7, 1.7, 5.5]} rotation={[0, 0.36, 0]} />

    {/* Projects Gallery - right wall, gallery row */}
    <group position={[8.2, 1.9, 0]} rotation={[0, -Math.PI/2.1, 0]}>
      <ProjectPanel3D
        boardIndex={0}
        name="E-Commerce App"
        tech="Flutter · Firebase · PHP · GetX"
        github="https://github.com/atowi7/E-Commerce-App"
        demoImg="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=220&q=80"
      />
      <ProjectPanel3D
        boardIndex={1}
        name="To-Do App"
        tech="Flutter · SQFLite · Provider"
        github="https://github.com/atowi7/to_do_app"
        demoImg="https://images.unsplash.com/photo-1518770660439-4636190af475?w=220&q=80"
      />
      <ProjectPanel3D
        boardIndex={2}
        name="Poll System"
        tech="Flutter · Firebase"
        github="https://github.com/atowi7/Poll-App"
        demoImg="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=220&q=80"
      />
      <ProjectPanel3D
        boardIndex={3}
        name="InstaKit App"
        tech="Flutter · REST APIs · Postman"
        github="https://github.com/atowi7/InstaKit_App"
        demoImg="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=220&q=80"
      />
    </group>

    {/* Skills Area - circle of orbs */}
    <SkillsOrbs3D center={[0, 2.1, -9]} radius={4.7} />

    {/* Contact panel - back wall */}
    <ContactPanel3D position={[0, 1.6, -13.2]} rotation={[0, 0, 0]} />
  </group>
);

export default function WorldScene() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <Canvas shadows camera={{ position: [0, 4, 18], fov: 62 }}>
        {/* Effects */}
        <color attach="background" args={["#101820"]} />
        <fog attach="fog" args={["#181e24", 12, 45]} />
        <ambientLight intensity={0.37} />
        <pointLight position={[0, 9, 0]} intensity={0.7} color="#39ff14" />
        <pointLight position={[-12, 6, 8]} intensity={0.4} color="#00fff7" />
        <pointLight position={[13, 8, -11]} intensity={0.3} color="#ad00ff" />
        <WorldSections />

        {/* Physics objects */}
        <Physics>
          <PlayerCube />
        </Physics>
        {/* Subtle stars */}
        <Stars
          radius={50} depth={72} count={1800}
          factor={0.38} fade
        />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2.18} minPolarAngle={0.42} />
        <Environment preset="city" />
      </Canvas>
      {/* Instructions Overlay */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 pointer-events-none select-none z-20 font-mono text-lg text-neon-green [text-shadow:0_0_8px_#39ff14,0_0_2px_#39ff14b0]">
        <span>Walk between panels using WASD/Arrow Keys</span>
      </div>
    </div>
  );
}
