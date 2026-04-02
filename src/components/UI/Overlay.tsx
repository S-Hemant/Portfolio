"use client";

import { useState } from "react";

export default function Overlay() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-16 text-white mix-blend-difference pb-24">
      
      {/* Header / Nav */}
      <header className="flex justify-between items-center pointer-events-auto">
        <div className="text-xl font-bold tracking-tighter">H.K.S</div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Hidden Menu Overlay */}
      {menuOpen && (
        <div className="absolute inset-x-0 inset-y-0 h-screen w-screen bg-[#050a15]/95 backdrop-blur-xl pointer-events-auto flex flex-col justify-center items-center gap-8 z-50 mix-blend-normal">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 md:top-16 md:right-16 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            Close
          </button>
          <a href="https://github.com/S-Hemant" target="_blank" rel="noreferrer" className="text-5xl md:text-7xl font-black hover:text-[#00ffcc] transition-colors uppercase tracking-tighter">GitHub</a>
          <a href="https://www.linkedin.com/in/hemantskumar" target="_blank" rel="noreferrer" className="text-5xl md:text-7xl font-black hover:text-[#ff00cc] transition-colors uppercase tracking-tighter">LinkedIn</a>
          <a href="mailto:hemantkumars.work@gmail.com" className="text-5xl md:text-7xl font-black hover:text-[#ccff00] transition-colors uppercase tracking-tighter">Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="pointer-events-auto flex flex-col gap-2">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
          HEMANT <br /> KUMAR S
        </h1>
        <p className="text-lg md:text-2xl font-normal tracking-wide mt-6 text-[#00ffcc]">
          Lead Software Engineer
        </p>
        <p className="text-sm md:text-base font-light opacity-60 mt-2 max-w-md">
          Explore my interactive constellation of projects. Drag the space to rotate, scroll to zoom.
        </p>
      </div>
      
    </div>
  );
}
