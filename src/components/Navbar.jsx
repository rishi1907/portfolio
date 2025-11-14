import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center 
            rounded-2xl bg-gradient-to-br from-accent to-accent-2 
            text-zinc-900 font-extrabold text-xl 
            shadow-[0_0_18px_rgba(102,240,194,0.35)]">
            RR
          </div>

          <div>
            <h1 className="font-bold text-lg">Rishikesh Ranjan</h1>
            <p className="text-sm text-muted">
              MERN Developer • Competitive Programmer
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-muted">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Coding Profiles", "#coding"],
            ["Contact", "#contact"],
          ].map(([name, link]) => (
            <a key={name}
              href={link}
              className="hover:text-accent transition-colors"
            >
              {name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
