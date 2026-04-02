"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import StarsBackground from "./StarsBackground";
import ConstellationNode from "./ConstellationNode";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden bg-[#050a15]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={["#050a15"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        
        <StarsBackground />
        
        {/* Nodes representing the projects */}
        {/* IT Projects */}
        <ConstellationNode 
          category="IT"
          bgImage="/Portfolio/planets/sanofi.png"
          position={[-7, 3, -3]} 
          title="R&D Pulse.AI" 
          color="#00ffcc"
          description="A business specific AI agent for sanofi internal team where they can query and create their own customizable dashboard about projects and medecins."
          techStack="React, TypeScript, Python, Node, AWS, Bedrock, RAG, GenAI"
          link="https://www.sanofi.com/en"
        />
        <ConstellationNode 
          category="IT"
          bgImage="/Portfolio/planets/caqh.png"
          position={[2, -3, 3]} 
          title="CAQH" 
          color="#ff00cc"
          description="Dynamic user dashboard, renders based on the Admin dashboard. Realtime changes based on JSON."
          techStack="React, TypeScript, Azure (blob), .Net"
          link="https://www.caqh.org/"
        />
        <ConstellationNode 
          category="IT"
          bgImage="/Portfolio/planets/allstate.png"
          position={[11, 1.5, -6]} 
          title="AllState" 
          color="#ccff00"
          description="Insurance availability for individuals, family, group for Automobile, property, digital, gold/collectables."
          techStack="React, JavaScript, Java, SpringBoot, Jenkins, Datadog"
          link=""
        />

        {/* Civil Engineering Projects */}
        <ConstellationNode 
          category="CIVIL"
          bgImage="/Portfolio/planets/civil.png"
          position={[-2.5, -6, -7.5]} 
          title="Shiv Construction (Tata Steel)" 
          color="#ffcc00"
          description="Start vendor for Tata Steel, construction and maintenance of Tata Steel quaters, buildings."
          techStack="Civil Engineering, Site Engineering, Manpower management, Billing and estimation, designing."
          link=""
        />
        <ConstellationNode 
          category="CIVIL"
          bgImage="/Portfolio/planets/civil.png"
          position={[8, -4.5, 7.5]} 
          title="Shiv Construction (Valley View)" 
          color="#ffcc00"
          description="Valley View School primary/ pre-primary Building construction."
          techStack="Civil Engineering, Site inspection, Manpower management, Billing and estimation, designing."
          link=""
        />
        <ConstellationNode 
          category="CIVIL"
          bgImage="/Portfolio/planets/civil.png"
          position={[2, 6, -12]} 
          title="M/s Sai Construction" 
          color="#ffcc00"
          description="Railway TSS construction at Dhutra and Garposh Odisha, including foundation for towers, sub-stations, Transformers, power lines, and other electrical infrastructure. Control room for engineers."
          techStack="Civil Engineering, Site inspection, Manpower management, Billing and estimation, designing."
          link=""
        />
        
        <OrbitControls 
          enablePan={false} 
          enableDamping 
          dampingFactor={0.05} 
          minDistance={5} 
          maxDistance={30} 
        />

        <EffectComposer multisampling={0}>
          <Noise opacity={0.3} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
