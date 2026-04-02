"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  const starsRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta / 50;
      starsRef.current.rotation.y -= delta / 60;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}
