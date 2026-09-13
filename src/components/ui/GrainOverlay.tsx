"use client";

export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9990] opacity-[0.035] bg-grain mix-blend-overlay"
    />
  );
}
