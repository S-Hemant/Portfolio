"use client";

export default function AstronautMatrixAnimation() {
  return (
    <div className="relative w-full h-24 bg-[#010508] rounded-md overflow-hidden flex items-center justify-center border border-[#00ffcc]/30 mb-4 shadow-inner">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .matrix-fall {
          animation: fall 3s linear infinite;
        }
      `}</style>
      
      {/* Matrix background */}
      <div className="absolute inset-0 opacity-40 font-mono text-xs leading-[10px] text-[#00ffcc] break-all overflow-hidden flex gap-2 w-full justify-around">
        <div className="matrix-fall" style={{ animationDelay: '0s' }}>1010<br/>1101<br/>0010<br/>1010</div>
        <div className="matrix-fall" style={{ animationDelay: '1.5s' }}>1101<br/>0001<br/>1010<br/>0101</div>
        <div className="matrix-fall" style={{ animationDelay: '0.5s' }}>0101<br/>1010<br/>0101<br/>1111</div>
        <div className="matrix-fall" style={{ animationDelay: '2s' }}>1010<br/>1101<br/>0010<br/>1010</div>
        <div className="matrix-fall" style={{ animationDelay: '1s' }}>0000<br/>1010<br/>1111<br/>0101</div>
      </div>

      {/* Astronaut SVG */}
      <div className="z-10 animate-[bounce_2.5s_infinite]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Space Helmet */}
          <path d="M14.5 9a3.5 4 0 10-5 0" />
          {/* Suit Body */}
          <path d="M7 11V9a5 5 0 0110 0v2a2 2 0 012 2v2a2 2 0 01-2 2h-1v3a2 2 0 01-2 2H10a2 2 0 01-2-2v-3H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
          {/* Laptop */}
          <path d="M5 15h14v2H5z" fill="#00ffcc" stroke="none" />
        </svg>
      </div>
    </div>
  );
}
