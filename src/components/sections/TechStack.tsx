"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiStreamlit,
  SiFlask,
  SiPrisma,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiCpu, FiDatabase, FiLayers, FiTerminal } from "react-icons/fi";

const techCategories = [
  {
    category: "AI & RAG Systems",
    description: "Vector search, dense embeddings, & LLM integrations.",
    icon: FiCpu,
    skills: [
      { name: "Google Gemini", level: "LLM RAG" },
      { name: "ChromaDB", level: "Vector Store" },
      { name: "BM25 Search", level: "Hybrid Retrieval" },
      { name: "RRF Algorithm", level: "Ranking Engine" },
      { name: "PyMuPDF", level: "Doc Parsing" },
      { name: "Scikit-Learn", level: "ML Pipelines" },
    ],
  },
  {
    category: "Backend Development",
    description: "Fast microservices, SQL databases, and REST APIs.",
    icon: FiDatabase,
    skills: [
      { name: "Python", icon: SiPython, level: "Core Language" },
      { name: "FastAPI", icon: SiFastapi, level: "Microservices" },
      { name: "Flask", icon: SiFlask, level: "Web Framework" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Database" },
      { name: "Prisma ORM", icon: SiPrisma, level: "ORM" },
      { name: "SQLAlchemy", level: "Python ORM" },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Responsive web apps with fluid animations.",
    icon: FiLayers,
    skills: [
      { name: "Next.js 15", icon: SiNextdotjs, level: "Framework" },
      { name: "React", icon: SiReact, level: "UI Library" },
      { name: "TypeScript", icon: SiTypescript, level: "Type Safety" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Styling" },
      { name: "Streamlit", icon: SiStreamlit, level: "Prototypes" },
    ],
  },
  {
    category: "Tools & Cloud",
    description: "Containerization, cloud platforms, and deployment.",
    icon: FiTerminal,
    skills: [
      { name: "Docker", icon: SiDocker, level: "Containers" },
      { name: "Git & GitHub", icon: SiGit, level: "Version Control" },
      { name: "Vercel & Render", icon: SiVercel, level: "Deployment" },
      { name: "AWS Cloud", icon: FaAws, level: "Cloud Infra" },
      { name: "PowerShell", level: "OS Scripts" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#6F5A4B]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#6F5A4B] font-semibold">
            Tech Stack
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#E8E6E3]">
            Modern tools & frameworks I work with.
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: catIdx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#B7AEA4]/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#6F5A4B]/15 text-[#6F5A4B]">
                        <CatIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-editorial text-xl text-[#E8E6E3] font-medium">
                        {cat.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[#B7AEA4]/80 mb-5 font-light">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#2C2C2E]/60 border border-[#B7AEA4]/10 text-xs text-[#E8E6E3] hover:border-[#6F5A4B]/50 hover:bg-[#6F5A4B]/10 transition-all duration-300 group"
                        >
                          {SkillIcon && (
                            <SkillIcon className="text-xs text-[#6F5A4B] group-hover:scale-110 transition-transform" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
