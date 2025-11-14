import React from "react";

const projects = [
  {
    title: "Edemy – LMS Platform",
    desc: "Full MERN LMS with Clerk Auth, Stripe Payments, Course System",
    live: "https://lms-frontend-gold-theta.vercel.app/",
    github: "https://github.com/rishi1907/lms"
  },
  {
    title: "Imagify – Text-to-Image SaaS",
    desc: "AI image generator using ClipDrop API, credits & payment system",
    live: "https://imagify-frontend-zeta.vercel.app/",
    github: "https://github.com/rishi1907/Imagify"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2 className="text-accent handwritten text-xl mb-5">Projects</h2>

      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="project border border-white/5 p-5 rounded-lg hover:bg-white/[0.03] transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-muted mt-1">{p.desc}</p>

            <div className="mt-3 flex gap-6">
              <a href={p.live} target="_blank" className="text-accent underline">
                Live
              </a>
              <a href={p.github} target="_blank" className="text-muted underline">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
