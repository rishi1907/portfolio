import React from "react";

const profiles = [
  {
    name: "LeetCode",
    logo: "https://cdn.simpleicons.org/leetcode",
    link: "https://leetcode.com/u/rishikeshranjan074/",
    highlight: true, // special flag for highlighting
  },
  {
    name: "CodeChef",
    logo: "https://cdn.simpleicons.org/codechef",
    link: "https://www.codechef.com/users/rich_hawks_27",
  },
  {
    name: "Codeforces",
    logo: "https://cdn.simpleicons.org/codeforces",
    link: "https://codeforces.com/profile/rishikesh__",
  },
  {
    name: "GeeksforGeeks",
    logo: "https://cdn.simpleicons.org/geeksforgeeks/00ff00",
    link: "https://www.geeksforgeeks.org/user/rishikeshru8y3/",
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="card">
      <h2 className="text-accent handwritten text-xl mb-5">Coding Profiles</h2>

      <div className="space-y-4">
        {profiles.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            className={`flex items-center gap-4 p-4 rounded-lg transition 
              bg-white/5 hover:bg-white/10 
              ${p.highlight ? "border border-accent/40 shadow-[0_0_15px_rgba(102,240,194,0.4)]" : "border border-white/10"}
            `}
          >
            <img src={p.logo} className="w-9 h-9" />
            <span className={`text-lg ${p.highlight ? "text-accent font-semibold" : ""}`}>
              {p.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
