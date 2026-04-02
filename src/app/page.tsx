import Scene from "@/components/Canvas/Scene";
import Overlay from "@/components/UI/Overlay";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050a15]">
      {/* 3D Core Canvas */}
      <Scene />
      
      {/* HTML DOM UI */}
      <Overlay />
    </main>
  );
}
