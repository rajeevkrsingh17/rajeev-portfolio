"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { FiShield, FiZap, FiTrendingUp } from "react-icons/fi";

const achievements = [
  {
    id: "cybersecurity",
    stat: "WNS",
    label: "CYBERSECURITY TRAINER",
    description: "Conducted cybersecurity awareness & technical training sessions.",
    icon: FiShield,
    badge: "LEADERSHIP",
  },
  {
    id: "dsa",
    stat: "100+",
    label: "ANALYTICAL PROBLEMS SOLVED",
    description: "Strong problem-solving through DSA, SQL and logical reasoning.",
    icon: FiZap,
    badge: "PROBLEM SOLVING",
  },
  {
    id: "projects",
    stat: "5+",
    label: "AI & BACKEND PROJECTS",
    description: "Built RAG systems, FastAPI applications and intelligent software products.",
    icon: FiTrendingUp,
    badge: "ENGINEERING",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            RECOGNITION
          </span>
        </div>

        <div className="max-w-2xl mb-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
            Achievements
          </h2>
        </div>

        {/* Short bronze underline below title */}
        <div className="w-16 h-[2.5px] bg-gradient-to-r from-[#B38A64] via-[#B38A64]/80 to-transparent rounded-full mb-12" />

        {/* Uniform 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-[#B38A64]/50 transition-all duration-300 group shadow-xl relative overflow-hidden h-full min-h-[300px]"
              >
                {/* Background Soft Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B38A64]/5 rounded-full blur-2xl group-hover:bg-[#B38A64]/10 transition-colors pointer-events-none" />

                <div className="flex flex-col flex-1">
                  {/* Top Bar with Glowing Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] border border-[#B38A64]/20 shrink-0 shadow-[0_0_15px_rgba(179,138,100,0.12)] group-hover:shadow-[0_0_20px_rgba(179,138,100,0.3)] transition-all">
                      <Icon className="text-xl relative z-10" />
                    </div>
                  </div>

                  {/* Large Statistic Number */}
                  <div className="mb-2">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F3F3F2] tracking-tight group-hover:text-[#B38A64] transition-colors">
                      {item.stat}
                    </span>
                  </div>

                  {/* Tiny Uppercase Label */}
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#B38A64] font-semibold block mb-3">
                    {item.label}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light mb-6 flex-1">
                    {item.description}
                  </p>
                </div>

                {/* Thin Divider Near Bottom */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto shrink-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA]/60 font-medium">
                    {item.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B38A64] group-hover:scale-125 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator to Contact section */}
        <ScrollIndicator targetId="contact" />
      </div>
    </section>
  );
}
