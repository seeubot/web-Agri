"use client";
import { useEffect, useRef, useState } from "react";

interface AmbientVideoProps {
  src: string;
  poster?: string;
  overlayOpacity?: number;
  className?: string;
}

/**
 * Lazy-loaded looping video background.
 * Only starts loading + playing when the wrapper scrolls into view.
 * Respects prefers-reduced-motion.
 */
export default function AmbientVideo({
  src,
  poster,
  overlayOpacity = 65,
  className = "",
}: AmbientVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Lazy-load when visible
  useEffect(() => {
    if (reducedMotion || shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion, shouldLoad]);

  // Try to play when loaded
  useEffect(() => {
    if (!shouldLoad) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Poster / fallback background */}
      <div
        className="absolute inset-0 bg-stone-900"
        style={
          poster
            ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
      />

      {/* Video — only rendered after scroll into view */}
      {shouldLoad && !reducedMotion && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
        />
      )}

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Subtle brand tint */}
      <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
    </div>
  );
}
