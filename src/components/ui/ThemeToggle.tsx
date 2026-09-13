"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-white/10 bg-transparent flex items-center justify-center text-[#A1A1AA]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 sm:p-2.5 rounded-full border border-white/10 bg-[#111113] text-[#F3F3F2] hover:border-[#B38A64] hover:text-[#B38A64] transition-all duration-300 shadow-md relative overflow-hidden flex items-center justify-center cursor-pointer"
      aria-label="Toggle dark/light theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {theme === "dark" ? (
          <FiSun className="text-base sm:text-lg text-[#B38A64]" />
        ) : (
          <FiMoon className="text-base sm:text-lg text-[#9E744F]" />
        )}
      </motion.div>
    </button>
  );
}
