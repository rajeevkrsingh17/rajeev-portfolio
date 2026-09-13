"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { SiInfosys, SiFreecodecamp } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const certifications = [
  {
    title: "Database Management System Part – 1",
    issuer: "Infosys",
    date: "Jul 2026",
    icon: SiInfosys,
    url: "https://drive.google.com/file/d/1ZJ2zuUM9bk95T3j3gzNLdsEhVUPaOVhj/view?usp=drive_link",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys",
    date: "Aug 2025",
    icon: SiInfosys,
    url: "https://drive.google.com/file/d/1IBDOCMPEXbeSJ3orTxYxsDDu2cWD5as7/view?usp=sharing",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2024",
    icon: SiFreecodecamp,
    url: "https://www.linkedin.com/posts/-rajeev-kumar-_im-happy-to-share-that-ive-obtained-a-new-activity-7259233173862076416-_6-3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDDDTgBRBy2jnbjOopupMoBebxoKB2VLB8",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            Certifications
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
            Certifications
          </h2>
        </div>

        {/* Horizontal Cards with View Credential Link */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-[#B38A64] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] border border-[#B38A64]/20 shrink-0">
                      <Icon className="text-xl" />
                    </div>
                    <span className="font-mono text-xs text-[#B38A64] font-semibold">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-semibold text-[#F3F3F2] mb-1">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider mb-6 font-light">
                    Issued by {cert.issuer}
                  </p>
                </div>

                {/* View Credential Action */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pt-4 border-t border-white/10 font-mono text-xs uppercase tracking-wider text-[#F3F3F2] group-hover:text-[#B38A64] transition-colors font-medium"
                >
                  <span>View Credential</span>
                  <FiArrowUpRight className="text-sm text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll to next section */}
        <ScrollIndicator targetId="achievements" />
      </div>
    </section>
  );
}
