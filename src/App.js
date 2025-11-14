import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-900 text-gray-100">
      <Navbar />

      <main className="container mx-auto px-5 pt-28 space-y-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
