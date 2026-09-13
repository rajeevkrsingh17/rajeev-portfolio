"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState<"glow" | "text" | "exit">("glow");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("text"), 600);
    const t2 = setTimeout(() => setStage("exit"), 2800);
    const t3 = setTimeout(() => {
      onComplete();
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== "exit" && (
        <motion.div
          key="intro-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#09090B] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#B38A64] rounded-full animate-pulse" />
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#B38A64] rounded-full animate-ping" />
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#F3F3F2] rounded-full" />
          </div>

          {/* Center Bronze Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(179,138,100,0.35)_0%,rgba(9,9,11,0)_70%)] pointer-events-none"
          />

          {/* Expanding Circular Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.6, 0.2], scale: [0.5, 1.4, 1.9] }}
            transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-64 h-64 rounded-full border border-[#B38A64]/40 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Monogram Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-12 rounded-full border border-[#B38A64] bg-[#B38A64]/10 flex items-center justify-center font-heading font-bold text-sm text-[#F3F3F2] shadow-lg shadow-[#B38A64]/10 mb-6"
            >
              RK
            </motion.div>

            {/* Text Hierarchy */}
            {stage === "text" && (
              <div className="flex flex-col items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-xs uppercase tracking-[0.35em] text-[#B38A64] font-semibold"
                >
                  WELCOME
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-3xl sm:text-5xl font-bold text-[#F3F3F2] tracking-tight"
                >
                  Rajeev Kumar
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B38A64] font-semibold mt-1"
                >
                  AI & Data Engineer
                </motion.p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
