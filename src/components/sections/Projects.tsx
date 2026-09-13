"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiArrowUpRight, FiMaximize2 } from "react-icons/fi";
import CaseStudyModal, { ProjectData } from "./CaseStudyModal";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const projectsData: ProjectData[] = [
  {
    id: "revenueshield",
    title: "RevenueShield",
    subtitle: "AI-Powered SaaS Payment Recovery & Fraud Intelligence Platform",
    period: "Sep 2026",
    category: "Full Stack SaaS",
    image: "/images/projects/revenueshield-v3.png",
    description:
      "Full-stack SaaS dashboard for detecting, analyzing, and recovering failed payment transactions with real-time KPIs and Claude AI copilot.",
    fullOverview:
      "RevenueShield recovers failed SaaS payments and false-positive fraud declines using Next.js 14, PostgreSQL, Prisma ORM, and FastAPI microservices with Claude AI.",
    architectureDetails: [
      "Prisma ORM & PostgreSQL for transaction logs and RBAC.",
      "FastAPI microservices pipeline for payment failure simulations.",
      "Claude AI Copilot integration for smart recovery recommendations.",
      "Next.js 14 App Router frontend with real-time analytics graphs.",
    ],
    keyFeatures: [
      "Real-time revenue recovery metrics & health dashboards",
      "Embedded Claude AI Assistant for payment failure insights",
      "Payment failure simulator with filterable recovery pipelines",
      "Role-Based Access Control (RBAC) & compliance audit logging",
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "FastAPI",
      "Claude AI",
    ],
    githubUrl: "https://github.com/rajeevkrsingh17/RevenueShield",
    liveUrl: "https://revenueshield-gamma.vercel.app/landing",
    metrics: [
      { label: "Architecture", value: "Microservices" },
      { label: "AI Model", value: "Claude AI" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Frontend", value: "Next.js 14" },
    ],
  },
  {
    id: "intellidocs",
    title: "IntelliDocs AI",
    subtitle: "Enterprise RAG Document Intelligence Platform with Hybrid Vector Search",
    period: "Jun 2026 – Jul 2026",
    category: "AI & RAG Systems",
    image: "/images/projects/intellidocs-v3.png",
    description:
      "AI RAG platform using Python, FastAPI, React, and Streamlit for automated document processing, ChromaDB, BM25, and Google Gemini.",
    fullOverview:
      "Engineered at Futurense Technologies, IntelliDocs-AI parses PDF/DOCX files with semantic chunking and a hybrid retrieval engine (BM25 + ChromaDB + RRF) with Google Gemini.",
    architectureDetails: [
      "Semantic chunking and PyMuPDF text extraction pipeline.",
      "ChromaDB vector indexing with custom embedding math.",
      "BM25 + RRF hybrid retrieval for high precision search.",
      "Google Gemini model fallback with citation metadata.",
    ],
    keyFeatures: [
      "Automated document processing & semantic chunking",
      "ChromaDB vector indexing across heterogeneous file formats",
      "Hybrid retrieval engine (BM25 + Dense Embeddings + RRF)",
      "Multi-document context analysis with citation back-links",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Streamlit",
      "ChromaDB",
      "BM25",
      "Google Gemini",
    ],
    githubUrl: "https://github.com/rajeevkrsingh17/IntelliDocs-AI",
    liveUrl: "https://intellidocs-ai-tau.vercel.app",
    metrics: [
      { label: "Retrieval", value: "Hybrid BM25+RRF" },
      { label: "Vector DB", value: "ChromaDB" },
      { label: "LLM", value: "Gemini Pro" },
      { label: "Backend", value: "FastAPI" },
    ],
  },
  {
    id: "memory-simulator",
    title: "Virtual Memory Simulator",
    subtitle: "Interactive OS Paging, Segmentation & Live Windows Telemetry Simulator",
    period: "Apr 2026",
    category: "Operating Systems",
    image: "/images/projects/memory-simulator-v3.png",
    description:
      "Interactive simulator for Paging and Segmentation implementing FIFO, LRU, and Optimal algorithms with live Windows telemetry via PowerShell.",
    fullOverview:
      "Systems software project modeling virtual memory mechanics. Features step-by-step page replacement visualization, Belady's Anomaly detection, and PowerShell live process telemetry.",
    architectureDetails: [
      "Python algorithm engine for page replacement & fragmentation analysis.",
      "PowerShell telemetry listener querying active Windows OS process RAM.",
      "Flask REST API backend delivering telemetry frames to Chart.js.",
      "Belady's Anomaly detection engine comparing page fault curves.",
    ],
    keyFeatures: [
      "Interactive Paging & Segmentation visualization",
      "Page replacement algorithms: FIFO, LRU, Optimal",
      "Belady's Anomaly detection & page fault rate graphing",
      "Live Windows process telemetry integrated via PowerShell",
    ],
    techStack: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Chart.js",
      "PowerShell",
    ],
    githubUrl: "https://github.com/verdhanyash/virtualization_paging-segmentation",
    liveUrl: "https://github.com/verdhanyash/virtualization_paging-segmentation",
    metrics: [
      { label: "Algorithms", value: "FIFO / LRU / Optimal" },
      { label: "Telemetry", value: "PowerShell API" },
      { label: "Visualization", value: "Chart.js" },
      { label: "Testing", value: "Pytest Suite" },
    ],
  },
  {
    id: "student-tracker",
    title: "Student Performance Tracker",
    subtitle: "Full-Stack Educational Analytics & RESTful CRUD Dashboard Platform",
    period: "Dec 2025",
    category: "Full Stack & Analytics",
    image: "/images/projects/student-tracker-v3.jpg",
    description:
      "Full-stack academic performance management system using FastAPI, SQLAlchemy, PostgreSQL, JWT auth, and Plotly Dash dashboards.",
    fullOverview:
      "Academic analytics platform for grade tracking and performance forecasting with FastAPI RESTful CRUD APIs, PostgreSQL, SQLAlchemy ORM, and Plotly Dash.",
    architectureDetails: [
      "FastAPI backend with structured REST CRUD endpoints.",
      "PostgreSQL relational schema managed through SQLAlchemy ORM.",
      "JWT authentication and security error handling layers.",
      "Plotly Dash interactive filtering dashboards.",
    ],
    keyFeatures: [
      "RESTful CRUD APIs with complete data validation",
      "Interactive Plotly performance dashboards & trend analysis",
      "JWT authentication with role-based dashboard access",
      "PostgreSQL database query optimization & filtering",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Plotly Dash",
    ],
    githubUrl: "https://github.com/rajeevkrsingh17/student-performance-tracker",
    liveUrl: "https://github.com/rajeevkrsingh17/student-performance-tracker",
    metrics: [
      { label: "APIs", value: "FastAPI REST" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Charts", value: "Plotly Dash" },
      { label: "Security", value: "JWT Auth" },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            Projects
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
            Projects
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-5xl mx-auto">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-white/10 hover:border-[#B38A64] hover:-translate-y-1 transition-all duration-300 shadow-md"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Cover Image with 16:9 ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111113]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />

                  {/* Category Badge & Expand Button */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <div className="px-2.5 py-0.5 rounded-full bg-[#09090B]/80 backdrop-blur-md border border-white/10 font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA]">
                      <span>{project.category}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-1.5 rounded-full bg-[#09090B]/80 backdrop-blur-md text-[#F3F3F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#B38A64] hover:text-[#09090B]"
                      aria-label="Expand Case Study"
                    >
                      <FiMaximize2 className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38A64] font-semibold block mb-1">
                    {project.period}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F3F3F2] mb-1.5 group-hover:text-[#B38A64] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-[#1A1A1D] text-[#A1A1AA] border border-white/5 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 py-3.5 flex items-center justify-between border-t border-white/10">
                {/* Live Demo Action Button */}
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#F3F3F2] font-semibold group-hover:text-[#B38A64] transition-colors"
                >
                  <span>Live Demo</span>
                  <FiArrowUpRight className="text-xs text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub Repository Icon */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-full bg-[#1A1A1D] text-[#A1A1AA] hover:text-[#09090B] hover:bg-[#B38A64] transition-all duration-300"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll to next section */}
        <ScrollIndicator targetId="certifications" />

        {/* Modal View */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
