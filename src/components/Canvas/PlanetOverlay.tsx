"use client";

import { Image, Html } from "@react-three/drei";
import AstronautMatrixAnimation from "../UI/AstronautMatrixAnimation";
import CivilEngineerAnimation from "../UI/CivilEngineerAnimation";

interface PlanetOverlayProps {
  active: boolean;
  bgImage: string;
  title: string;
  description: string;
  techStack: string;
  link: string;
  category: 'IT' | 'CIVIL';
  color: string;
  onExit: () => void;
}

export default function PlanetOverlay({ active, bgImage, title, description, techStack, link, category, color, onExit }: PlanetOverlayProps) {
  if (!active) return null;

  return (
    <group position={[0, 0, 0]}>
      {/* Background Panorama (Huge scale mapping the AI image into 3D) */}
      <Image url={bgImage} scale={[140, 80]} position={[0, 0, -40]} transparent opacity={0.95} />
      
      {/* HUD Walkthrough Plate */}
      <Html center position={[0, 0, 5]} zIndexRange={[100, 0]} transform>
        <div className="w-[450px] p-8 bg-[#050a15]/90 backdrop-blur-3xl rounded-2xl border border-white/10 text-white shadow-2xl transition-all select-none">
          
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-black tracking-tighter uppercase leading-[0.9]" style={{ color }}>{title}</h3>
            <button onClick={(e) => { e.stopPropagation(); onExit(); }} className="text-xs opacity-50 hover:opacity-100 uppercase tracking-widest pl-4 font-bold border border-white/20 px-3 py-2 rounded-lg ml-4 whitespace-nowrap">
              Leave Orbit
            </button>
          </div>
          
          <div className="mb-6 pointer-events-none">
             {category === 'IT' && <AstronautMatrixAnimation />}
             {category === 'CIVIL' && <CivilEngineerAnimation />}
          </div>

          <p className="text-base font-light opacity-90 mb-6 leading-relaxed">{description}</p>
          
          <div className="mb-6 bg-black/60 p-4 rounded-xl border border-white/5">
            <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-2 text-[#00ffcc]">Technical Core</span>
            <p className="text-sm font-medium tracking-wide leading-relaxed opacity-90">{techStack}</p>
          </div>
          
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="inline-block text-sm uppercase tracking-widest font-black hover:opacity-80 transition-opacity bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 w-full text-center">
              Enter Walkthrough
            </a>
          )}
        </div>
      </Html>
    </group>
  );
}
