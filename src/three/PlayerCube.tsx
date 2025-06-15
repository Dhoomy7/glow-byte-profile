
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import usePlayerControls from "../hooks/usePlayerControls";
import { Mesh } from "three";

export default function PlayerCube() {
  const { moveX, moveZ } = usePlayerControls();
  // Correct ref type
  const playerRef = useRef<Mesh>(null!);
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 0.5, 0],
    args: [0.9, 0.9, 0.9],
  }));

  // Movement (use velocity instead of linearVelocity)
  useFrame(() => {
    api.velocity.set(moveX * 5, 0, moveZ * 5);
  });

  return (
    <mesh ref={(instance) => {
      // Let both physics and the local ref get the mesh instance
      (ref as React.MutableRefObject<Mesh | null>).current = instance;
      playerRef.current = instance as Mesh;
    }}
    castShadow
    receiveShadow
    >
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial color="#00fff7" emissive="#39ff14" emissiveIntensity={0.4} metalness={0.32} roughness={0.17} />
      {/* Neon underglow */}
      <mesh position={[0, -0.45, 0]}>
        <boxGeometry args={[1.1, 0.05, 1.1]} />
        <meshStandardMaterial color="#161b17" emissive="#39ff14" emissiveIntensity={0.9} opacity={0.41} transparent />
      </mesh>
    </mesh>
  );
}

