
import React from "react";
import { Float } from "@react-three/drei";
import { Html } from "@react-three/drei";

// Hacker terminal-style intro panel with typing animation
export default function IntroPanel3D() {
  return (
    <Float floatIntensity={1.6} speed={2.4}>
      <mesh position={[0, 2.7, 7.2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[7, 2.2]} />
        <meshStandardMaterial color="#10181e" emissive="#00ffd0" emissiveIntensity={0.21} />
        <Html transform position={[0, 0, 0.06]} style={{ width: "100%", height: "100%" }}>
          <div
            className="w-full h-full flex flex-col items-center justify-center select-none pointer-events-none"
          >
            <span className="text-2xl md:text-3xl xl:text-4xl font-mono font-bold glow-text animate-section-3d" style={{whiteSpace: "pre", letterSpacing: ".01em"}}>
              <span className="typing-hacker">
                Hi, I’m Abdulrahman Kamal Alatowi
                <br />
                <span className="glow-blue-text">— Flutter Developer</span>
              </span>
            </span>
          </div>
          <style>
            {`
            .typing-hacker {
              border-right: 2.8px solid #39ff14;
              display:inline-block;
              white-space:pre;
              width:22ch;
              overflow:hidden;
              animation: typing 2.7s steps(22), blink .65s step-end infinite alternate;
            }
            @media (min-width: 900px) {
              .typing-hacker {
                width:44ch;
                animation: typing 3.3s steps(44), blink .7s step-end infinite alternate;
              }
            }
            @keyframes typing {
              from { width: 0 }
              to { width: 44ch }
            }
            @keyframes blink {
              50% { border-color: transparent }
            }
          `}
          </style>
        </Html>
      </mesh>
    </Float>
  );
}

