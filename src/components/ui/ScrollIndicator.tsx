"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

interface ScrollIndicatorProps {
  targetId: string;
  label?: string;
  isTop?: boolean;
}

export default function ScrollIndicator({
  targetId,
  label = "Scroll",
  isTop = false,
}: ScrollIndicatorProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center pt-8 pb-4">
      <button
        onClick={handleClick}
        className="inline-flex flex-col items-center gap-2 group cursor-pointer text-[#A1A1AA]/60 hover:text-[#B38A64] transition-colors focus:outline-none"
        aria-label={isTop ? "Scroll to top" : `Scroll to ${targetId}`}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-semibold">
          {label}
        </span>
        <motion.div
          animate={{ y: isTop ? [0, -5, 0] : [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/10 group-hover:border-[#B38A64] group-hover:bg-[#B38A64]/10 transition-all duration-300"
        >
          {isTop ? (
            <FiArrowUp className="text-xs text-[#B38A64]" />
          ) : (
            <FiArrowDown className="text-xs text-[#B38A64]" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
