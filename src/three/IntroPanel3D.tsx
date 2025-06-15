
import React from "react";
import { Float, Html } from "@react-three/drei";

interface IntroPanel3DProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

export default function IntroPanel3D({ position, rotation }: IntroPanel3DProps) {
  return (
    <Float floatIntensity={2.1} speed={1.3}>
      <mesh position={position} rotation={rotation}>
        <planeGeometry args={[8.5, 2.6]} />
        <meshStandardMaterial color="#171f2d" emissive="#39ff14" emissiveIntensity={0.19} />
        <Html transform position={[0, 0, 0.10]} style={{width:"100%",height:"100%"}}>
          <div
            className="flex flex-col w-full h-full justify-center items-center p-8 text-center"
          >
            <span
              className="text-2xl md:text-3xl xl:text-4xl font-mono font-bold glow-text animate-section-3d"
              style={{whiteSpace: "pre", letterSpacing: ".01em"}}
            >
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
