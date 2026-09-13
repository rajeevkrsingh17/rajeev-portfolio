"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const titles = [
  "AI & Data Engineer",
  "Backend Developer",
  "AI & RAG Systems Specialist",
  "FastAPI Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center pt-24 pb-6 overflow-hidden z-10"
    >
      <div className="flex-1 flex flex-col items-center justify-center my-auto w-full">
        <div className="portfolio-container text-center flex flex-col items-center gap-6">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#B38A64]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
              WELCOME TO MY PORTFOLIO
            </span>
            <span className="w-8 h-[1px] bg-[#B38A64]" />
          </motion.div>

          {/* Large Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F3F3F2] leading-[1.1]"
          >
            Rajeev Kumar
          </motion.h1>

          {/* Subtitle Rotator (Fade + Typewriter style) */}
          <div className="h-9 flex items-center justify-center overflow-hidden my-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={titles[titleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-mono text-base sm:text-xl text-[#B38A64] tracking-[0.2em] uppercase font-semibold"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#A1A1AA] font-light max-w-2xl leading-relaxed"
          >
            Building scalable backend systems, intelligent AI applications, and modern full-stack experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 mt-2"
          >
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Rajeev_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B38A64] text-[#09090B] font-semibold text-xs tracking-widest uppercase hover:bg-[#B38A64]/80 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95"
            >
              <FiDownload className="text-sm" />
              <span>Download Resume</span>
            </a>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-[#F3F3F2] font-semibold text-xs tracking-widest uppercase hover:border-[#B38A64] hover:bg-[#B38A64]/10 transition-all duration-300"
            >
              <FiMail className="text-sm text-[#B38A64]" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* GitHub • LinkedIn • Email Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mt-4 font-mono text-xs text-[#A1A1AA]"
          >
            <a
              href="https://github.com/rajeevkrsingh17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#B38A64] transition-colors"
            >
              <FiGithub className="text-sm text-[#B38A64]" />
              <span>GitHub</span>
            </a>
            <span className="text-[#B38A64]/40">•</span>
            <a
              href="https://www.linkedin.com/in/-rajeev-kumar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#B38A64] transition-colors"
            >
              <FiLinkedin className="text-sm text-[#B38A64]" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[#B38A64]/40">•</span>
            <a
              href="mailto:krrajeev939@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#B38A64] transition-colors"
            >
              <FiMail className="text-sm text-[#B38A64]" />
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex justify-center pb-2">
        <ScrollIndicator targetId="about" />
      </div>
    </section>
  );
}
