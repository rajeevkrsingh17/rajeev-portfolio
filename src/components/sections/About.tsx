"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { FiBookOpen, FiAward, FiBriefcase, FiCheckCircle } from "react-icons/fi";

const infoCards = [
  {
    title: "Lovely Professional University",
    subtitle: "University",
    icon: FiBookOpen,
  },
  {
    title: "B.Tech CSE (AI & DE)",
    subtitle: "Degree Program",
    icon: FiCheckCircle,
  },
  {
    title: "CGPA 7.90",
    subtitle: "Academic Record",
    icon: FiAward,
  },
  {
    title: "Machine Learning Intern",
    subtitle: "Futurense Technologies",
    icon: FiBriefcase,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            About Me
          </span>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Column: Rajeev's Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111113]">
                <Image
                  src="/images/rajeev.jpg"
                  alt="Rajeev Kumar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top scale-[1.4]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
              About Me
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              <p>
                I am a Computer Science student specializing in Artificial Intelligence and Data Engineering at Lovely Professional University. I enjoy solving analytical problems by breaking down data challenges into clear, logical steps.
              </p>
              <p>
                My main technical focus is on building reliable backend systems, smart search tools (RAG applications), and full-stack web products. During my Machine Learning internship at Futurense, I built automated data pipelines to make processing faster and smoother.
              </p>
              <p>
                I am always eager to learn new skills and apply logical thinking to write clean, easy-to-maintain software that delivers real-world impact.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group border border-white/10"
              >
                <div className="mb-4">
                  <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] border border-[#B38A64]/20 group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-colors duration-300 inline-block">
                    <Icon className="text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#F3F3F2] mb-1">
                    {card.title}
                  </h3>
                  <p className="font-mono text-xs text-[#B38A64] font-medium">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll to next section */}
        <ScrollIndicator targetId="skills" />
      </div>
    </section>
  );
}
