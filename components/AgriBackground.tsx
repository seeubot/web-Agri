"use client";
import { motion } from "framer-motion";
export default function AgriBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {/* Soft mesh gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-brand-400/30 dark:bg-brand-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-emerald-300/30 dark:bg-emerald-500/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/4 w-[34rem] h-[34rem] rounded-full bg-amber-200/40 dark:bg-amber-500/10 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Grain / noise texture using inline SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.06]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      {/* Hand-drawn arc accents */}
      <svg
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[70rem] max-w-[95vw] text-brand-600/10 dark:text-brand-400/10"
        viewBox="0 0 1200 400"
        fill="none"
      >
        <path
          d="M50 350 Q 300 50 600 200 T 1150 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>
    </div>
  );
}
