"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3.5 bg-[#09090B]/85 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="portfolio-container flex items-center justify-between">
        {/* RK Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 shrink-0"
          aria-label="Rajeev Kumar Home"
        >
          <div className="w-9 h-9 rounded-full border border-[#B38A64] bg-transparent flex items-center justify-center font-heading font-bold text-xs text-[#F3F3F2] group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-all duration-300">
            RK
          </div>
          <span className="font-mono text-xs text-[#A1A1AA] tracking-widest hidden sm:inline-block">
            RAJEEV KUMAR
          </span>
        </a>

        {/* Desktop Navigation Links & Theme Toggle */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#A1A1AA] hover:text-[#F3F3F2] transition-colors relative py-1 group font-sans"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B38A64] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Dark / Light Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Mobile Actions Header */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F3F3F2] p-2 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-heading tracking-wider text-[#F3F3F2] hover:text-[#B38A64]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
