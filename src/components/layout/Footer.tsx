"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-12 relative z-10">
      <div className="portfolio-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-heading text-lg tracking-widest text-[#F3F3F2] font-semibold uppercase">
            Rajeev Kumar
          </span>
          <p className="text-xs text-[#A1A1AA] tracking-wider">
            Backend Systems · AI Engineering · FastAPI · RAG
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/rajeevkrsingh17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#B38A64] transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/-rajeev-kumar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#B38A64] transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:krrajeev939@gmail.com"
            className="text-[#A1A1AA] hover:text-[#B38A64] transition-colors text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="text-xs text-[#A1A1AA]/60 text-center md:text-right">
          © {new Date().getFullYear()} Rajeev Kumar. Built with Linear × Vercel editorial design.
        </div>
      </div>
    </footer>
  );
}
