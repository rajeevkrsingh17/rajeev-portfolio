"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import IntroAnimation from "@/components/ui/IntroAnimation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative bg-[#0F0F10] text-[#E8E6E3] min-h-screen">
      {/* 3 Second Minimal Intro */}
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      {/* Particle Constellation Canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
