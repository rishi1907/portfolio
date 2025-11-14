import React from "react";

const skills = [
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
  { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "JWT", logo: "https://cdn.simpleicons.org/jsonwebtokens" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
];

export default function Skills() {
  return (
    <section id="skills" className="card">
      <h2 className="text-accent handwritten text-xl mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition shadow-sm"
          >
            <img src={s.logo} alt={s.name} className="w-7 h-7" />
            <span className="font-medium">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
