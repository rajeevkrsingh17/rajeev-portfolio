"use client";

import { useEffect, useRef } from "react";

interface UpwardParticle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
  hasGlow: boolean;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;

    const particleCount = Math.min(Math.floor((width * height) / 10000), 100);
    const particles: UpwardParticle[] = [];

    // Curated Editorial bronze dust palette (#B38A64, subtle whites)
    const colors = [
      "179, 138, 100", // Warm Bronze #B38A64
      "161, 161, 170", // Secondary Text #A1A1AA
      "243, 243, 242", // Primary Text #F3F3F2
    ];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const baseAlpha = Math.random() * 0.45 + 0.15;
      const isGlowEmbers = Math.random() > 0.75;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: Math.random() * 0.6 + 0.35, // Smooth upward movement
        speedX: (Math.random() - 0.5) * 0.25, // Gentle horizontal sway
        radius: isGlowEmbers ? Math.random() * 2.2 + 1.2 : Math.random() * 1.4 + 0.6,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        color,
        hasGlow: isGlowEmbers,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Smooth mouse interpolation for subtle parallax
      mouseX += (targetMouseX - mouseX) * 0.03;
      const mouseFactorX = ((mouseX - width / 2) / width) * 0.4;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Upward floating motion
        p.y -= p.speedY;

        // Subtle horizontal wave + mouse parallax
        p.x += p.speedX + Math.sin(time + p.pulseOffset) * 0.25 + mouseFactorX;

        // Pulse opacity (breathing star effect)
        p.alpha =
          p.baseAlpha + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.12;

        // Boundary wrap: reset to bottom when particle floats above screen
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.hasGlow) {
          // Soft Mocha Glow Aura around larger particles
          const glowGrad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 3.5
          );
          glowGrad.addColorStop(0, `rgba(${p.color}, ${Math.min(p.alpha, 0.8)})`);
          glowGrad.addColorStop(
            0.4,
            `rgba(${p.color}, ${Math.min(p.alpha * 0.4, 0.3)})`
          );
          glowGrad.addColorStop(1, `rgba(${p.color}, 0)`);

          ctx.fillStyle = glowGrad;
          ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(${p.color}, ${Math.min(Math.max(p.alpha, 0), 1)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
