import React from "react";
import useFadeUp from "../hooks/useFadeUp";

export default function Hero() {
  const [ref, visible] = useFadeUp();

  return (
    <section
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hi, I'm <span className="text-accent">Rishikesh</span>
      </h1>

      <p className="text-muted mt-3 text-lg">
        MERN Stack Developer • Competitive Programmer • Problem Solver
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-5 py-3 bg-accent text-zinc-900 rounded-md font-semibold"
        >
          Hire Me
        </a>

        <a
          href="https://drive.google.com/file/d/1MVOYFHX-ATD1_dw9WNnD0UEewodH61Nq/view?usp=drive_link"
          className="px-5 py-3 border border-white/10 rounded-md text-muted hover:text-white transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
