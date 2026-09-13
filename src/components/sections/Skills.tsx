"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { SiPython, SiFastapi } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiCpu, FiDatabase, FiLayers } from "react-icons/fi";

const skillsData = [
  {
    name: "Python",
    category: "Core Language",
    icon: SiPython,
    tags: ["Python 3.12", "AsyncIO", "OOP", "Scripting"],
  },
  {
    name: "Java",
    category: "Core Language",
    icon: FaJava,
    tags: ["Java", "OOP", "Data Structures", "Backend Systems"],
  },
  {
    name: "AI & RAG Systems",
    category: "Artificial Intelligence",
    icon: FiCpu,
    tags: ["ChromaDB", "Vector Search", "Gemini AI", "Claude AI"],
  },
  {
    name: "Machine Learning (ML)",
    category: "Data Science & AI",
    icon: FiLayers,
    tags: ["Predictive Models", "Scikit-Learn", "Model Training", "Evaluation"],
  },
  {
    name: "Data Engineering",
    category: "Data Architecture",
    icon: FiDatabase,
    tags: ["PostgreSQL", "SQL", "ETL Pipelines", "Data Processing"],
  },
  {
    name: "FastAPI & Backend",
    category: "Microservices",
    icon: SiFastapi,
    tags: ["FastAPI", "REST APIs", "Microservices", "Pydantic"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            Skills
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
            Core Skills
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-[#B38A64] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3.5 rounded-xl bg-[#B38A64]/10 text-[#B38A64] border border-[#B38A64]/20 shrink-0">
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38A64] font-semibold block mb-0.5">
                        {skill.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-[#F3F3F2]">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  {/* Simple Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-[#1A1A1D] text-[#A1A1AA] border border-white/5 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll to next section */}
        <ScrollIndicator targetId="experience" />
      </div>
    </section>
  );
}
