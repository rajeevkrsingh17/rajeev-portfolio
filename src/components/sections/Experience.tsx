"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

const internship = {
  role: "Machine Learning Intern",
  company: "Futurense Technologies",
  period: "Jun 2026 – Jul 2026",
  location: "Remote / Hybrid",
  certificateUrl: "https://drive.google.com/file/d/1TfdGUS5cC5XrFLSBIoCLifaWZF1mAuxB/view?usp=sharing",
  bullets: [
    "Built IntelliDocs-AI, an RAG platform for document processing and vector indexing using FastAPI, React, and Streamlit.",
    "Engineered a hybrid retrieval pipeline combining ChromaDB vector search, BM25 keyword search, and RRF re-ranking with Google Gemini.",
    "Deployed scalable REST APIs with multi-model fallback on Vercel and Render environments.",
  ],
  techStack: ["Python", "FastAPI", "React", "ChromaDB", "BM25", "Google Gemini"],
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            Experience
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
            Experience
          </h2>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative pl-4 sm:pl-8 border-l border-white/10 space-y-12">
          {/* Timeline Node & Item */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Bronze Node on Timeline Line */}
            <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#09090B] border-2 border-[#B38A64] group-hover:bg-[#B38A64] transition-colors" />

            <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-[#B38A64] uppercase tracking-wider font-semibold block mb-1">
                    {internship.company}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F3F3F2]">
                    {internship.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1D] border border-white/10">
                    <FiCalendar className="text-[#B38A64]" />
                    {internship.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1D] border border-white/10">
                    <FiMapPin className="text-[#B38A64]" />
                    {internship.location}
                  </span>
                </div>
              </div>

              {/* Description Bullets */}
              <div className="space-y-3.5 mb-8">
                {internship.bullets.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#B38A64] shrink-0 mt-1 text-base" />
                    <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer Actions & Tech Stack Chips */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {internship.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full text-xs bg-[#B38A64]/10 text-[#F3F3F2] border border-[#B38A64]/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={internship.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B38A64] text-[#09090B] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#B38A64]/80 transition-colors shadow-md"
                >
                  <span>View Certificate</span>
                  <FiArrowUpRight className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to next section */}
        <ScrollIndicator targetId="projects" />
      </div>
    </section>
  );
}
