"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FiX, FiGithub, FiExternalLink, FiCheck, FiCpu, FiLayers, FiZap } from "react-icons/fi";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  image: string;
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
}

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;

    if (project) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
      if (lenis) lenis.stop();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.documentElement.classList.remove("lenis-stopped");
        if (lenis) lenis.start();
      };
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
      if (lenis) lenis.start();
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div
          key={project.id}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-hidden"
          data-lenis-prevent="true"
        >
          {/* High-opacity Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#09090B]/95 backdrop-blur-2xl z-10"
          />

          {/* Modal Container Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="relative w-full max-w-5xl h-[85vh] sm:h-[90vh] bg-[#09090B] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-20 flex flex-col my-auto"
            data-lenis-prevent="true"
          >
            {/* Modal Top Bar */}
            <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-4 bg-[#09090B] border-b border-white/10 z-30">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B38A64] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">
                  Case Study / {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#1A1A1D] text-[#F3F3F2] hover:bg-[#B38A64] hover:text-[#09090B] transition-colors"
                aria-label="Close modal"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div
              className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 sm:space-y-10 overscroll-contain"
              data-lenis-prevent="true"
            >
              {/* Header Title */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B38A64] font-semibold">
                    {project.period}
                  </span>
                  <div className="flex items-center gap-3 font-mono">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#B38A64] text-xs font-semibold text-[#09090B] hover:bg-[#B38A64]/80 transition-colors shadow-md"
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111113] border border-white/10 text-xs text-[#F3F3F2] hover:border-[#B38A64] transition-colors"
                    >
                      <FiGithub />
                      <span>View Repository</span>
                    </a>
                  </div>
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#F3F3F2] mb-4">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg text-[#A1A1AA] font-light max-w-3xl leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Cover Image Showcase (Full Uncropped Display) */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111113] shadow-2xl flex items-center justify-center p-1 sm:p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[650px] object-contain rounded-xl"
                  priority
                />
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-card border border-white/10">
                {project.metrics.map((m) => (
                  <div key={m.label} className="border-r border-white/10 last:border-0 pr-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]/60 block mb-1">
                      {m.label}
                    </span>
                    <span className="font-heading text-lg md:text-xl font-bold text-[#F3F3F2]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-[#F3F3F2] flex items-center gap-3">
                  <FiZap className="text-[#B38A64]" />
                  System Overview
                </h3>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light">
                  {project.fullOverview}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-[#F3F3F2] flex items-center gap-3">
                  <FiCpu className="text-[#B38A64]" />
                  Technical Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architectureDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[#111113] border border-white/10 flex items-start gap-3"
                    >
                      <FiCheck className="text-[#B38A64] shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-[#A1A1AA] font-light leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-[#F3F3F2] flex items-center gap-3">
                  <FiLayers className="text-[#B38A64]" />
                  Key Deliverables & Features
                </h3>
                <div className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl glass-card flex items-center gap-3 border border-white/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B38A64]" />
                      <span className="text-xs md:text-sm text-[#F3F3F2] font-light">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="border-t border-white/10 pt-8">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]/60 mb-4 font-semibold">
                  Technology Stack & Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl text-xs bg-[#B38A64]/10 text-[#F3F3F2] border border-[#B38A64]/30 font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

