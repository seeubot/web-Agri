"use client";
import { useEffect, useRef, useState } from "react";
interface HeroVideoProps {
  src?: string;
  poster?: string;
  children?: React.ReactNode;
  /** Height class, e.g. "min-h-screen" or "h-[70vh]" */
  heightClass?: string;
  /** Extra overlay opacity 0-100 */
  overlay?: number;
}
export default function HeroVideo({
  src = "/introvide.mp4",
  poster,
  children,
  heightClass = "min-h-screen",
  overlay = 55,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  useEffect(() => {
    if (reducedMotion) return;
    const v = videoRef.current;
    if (!v) return;
    // Some browsers block autoplay until user interaction; try anyway.
    v.play().catch(() => {});
  }, [reducedMotion]);
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden bg-gray-950`}>
      {/* Video (or fallback) */}
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoReady(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-gray-950 to-black" />
      )}
      {/* Color overlay for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
        style={{ opacity: overlay / 100 }}
      />
      {/* Subtle green tint */}
      <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 animate-bounce">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
