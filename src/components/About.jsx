import React from "react";
import useFadeUp from "../hooks/useFadeUp";

export default function About() {
  const [ref, visible] = useFadeUp();

  return (
    <section
      id="about"
      ref={ref}
      className={`card transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-accent handwritten text-2xl mb-6">
        About Me
      </h2>

      <div className="border-l-4 border-accent/40 pl-4">
        <p className="text-muted leading-relaxed text-[16px] tracking-wide">
          I'm a final-year B.Tech student in ECE at MNNIT Allahabad with a strong
          interest in building scalable and modern web applications. I work
          primarily with the <span className="text-gray-300 font-medium">MERN stack</span> and enjoy
          converting ideas into full-fledged, user-friendly products.
        </p>

        <p className="text-muted leading-relaxed text-[16px] tracking-wide mt-4">
          I have built projects like an LMS platform, a text-to-image SaaS tool,
          and multiple practical applications involving authentication, payments,
          dashboards, and optimized backend workflows.
        </p>

        <p className="text-muted leading-relaxed text-[16px] tracking-wide mt-4">
          Alongside development, I practice DSA and competitive programming on
          <span className="text-gray-300 font-medium"> LeetCode, Codeforces, CodeChef,</span> and 
          <span className="text-gray-300 font-medium"> GFG</span>, focusing on problem-solving and
          algorithmic thinking.
        </p>

        <p className="text-muted leading-relaxed text-[16px] tracking-wide mt-4">
          I’m currently seeking roles where I can contribute to impactful products,
          work with modern tech, and grow as a full-stack engineer.
        </p>
      </div>
    </section>
  );
}
