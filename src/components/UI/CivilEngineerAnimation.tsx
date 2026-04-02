"use client";

export default function CivilEngineerAnimation() {
  return (
    <div className="relative w-full h-24 bg-[#050a15] rounded-md overflow-hidden flex items-end justify-center border border-[#ffcc00]/30 mb-4 shadow-inner pb-2">
      <style>{`
        @keyframes build {
          0% { height: 0%; opacity: 0; }
          50% { height: 100%; opacity: 1; }
          100% { height: 100%; opacity: 1; }
        }
        .build-anim {
          animation: build 4s ease-in-out infinite alternate;
        }
        .build-anim-delay {
          animation: build 4s ease-in-out 1s infinite alternate;
        }
      `}</style>
      
      {/* Building Blocks */}
      <div className="absolute bottom-2 left-6 flex items-end gap-1 h-12">
        <div className="w-4 h-full bg-[#ffcc00]/20 flex flex-col justify-end">
           <div className="w-full bg-[#ffcc00]/50 build-anim"></div>
        </div>
        <div className="w-4 h-[80%] bg-[#ffcc00]/20 flex flex-col justify-end">
           <div className="w-full bg-[#ffcc00]/70 build-anim-delay"></div>
        </div>
        <div className="w-4 h-[60%] bg-[#ffcc00]/20 flex flex-col justify-end">
           <div className="w-full bg-[#ffcc00] build-anim"></div>
        </div>
      </div>

      {/* Engineer Worker SVG */}
      <div className="z-10 ml-16 flex items-center gap-2">
        <div className="animate-pulse">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             {/* Hardhat */}
             <path d="M12 4a5 5 0 00-5 5v1h10V9a5 5 0 00-5-5z" fill="#ffcc00" />
             <path d="M4 10h16" />
             {/* Torso */}
             <path d="M9 10v10h6V10" />
             {/* Arms hammering */}
             <path d="M5 16l4-6" />
           </svg>
        </div>
        <div className="animate-bounce">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 4a5 5 0 00-5 5v1h10V9a5 5 0 00-5-5z" />
             <path d="M4 10h16" />
             <path d="M9 10v10h6V10" />
           </svg>
        </div>
      </div>
    </div>
  );
}
