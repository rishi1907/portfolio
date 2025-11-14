import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="card">
      <h2 className="text-accent handwritten text-xl mb-6">
        Get in Touch
      </h2>

      <p className="text-muted mb-6 leading-relaxed">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        I usually respond within a few hours.
      </p>

      <div className="space-y-4">

        {/* Email */}
        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg"
            className="w-6 h-6"
            alt="gmail"
          />
          <a
            href="mailto:risikeshranjan074@email.com"
            className="text-gray-200 font-medium hover:text-accent transition"
          >
            risikeshranjan074@email.com
          </a>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/rishi1907"
          target="_blank"
          className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            className="w-6 h-6"
            alt="github"
          />
          <span className="text-gray-200 font-medium">
            github.com/rishi1907
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/rishikesh-ranjan-7955b4257"
          target="_blank"
          className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            className="w-6 h-6"
            alt="linkedin"
          />
          <span className="text-gray-200 font-medium">
            LinkedIn Profile
          </span>
        </a>

      </div>
    </section>
  );
}
