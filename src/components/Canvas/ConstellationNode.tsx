"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import PlanetOverlay from "./PlanetOverlay";

interface ConstellationNodeProps {
  position: [number, number, number];
  title: string;
  color: string;
  description: string;
  techStack: string;
  link: string;
  category: 'IT' | 'CIVIL';
  bgImage: string;
}

export default function ConstellationNode({ position, title, color, description, techStack, link, category, bgImage }: ConstellationNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && !active) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.005;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group position={position}>
      {!active && (
        <group 
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
          onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
          onClick={(e) => {
            e.stopPropagation();
            setActive(true);
          }}
          scale={hovered ? 1.3 : 1}
        >
          <Sphere ref={meshRef} args={[0.8, 64, 64]}>
            <MeshDistortMaterial
              color={hovered ? color : "#ffffff"}
              envMapIntensity={1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.8}
              roughness={0.2}
              distort={hovered ? 0.7 : 0.2}
              speed={hovered ? 6 : 2}
            />
          </Sphere>
          
          {/* Floating 3D Title */}
          <Html position={[0, -1.8, 0]} center zIndexRange={[100, 0]}>
            <div className={`text-center tracking-widest uppercase transition-all duration-300 font-bold ${hovered ? 'opacity-100 scale-110' : 'opacity-40 scale-100 text-white'} text-[11px] bg-black/70 px-3 py-1.5 rounded-md backdrop-blur-md whitespace-nowrap border border-white/10`} style={{ color: hovered ? color : 'white' }}>
              {title}
            </div>
          </Html>
        </group>
      )}

      {/* Detail Overlay when Active */}
      {active && (
        <PlanetOverlay
          active={active}
          onExit={() => setActive(false)}
          bgImage={bgImage}
          title={title}
          description={description}
          techStack={techStack}
          link={link}
          category={category}
          color={color}
        />
      )}
    </group>
  );
}
