"use client";
import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src?: string;
  poster?: string;
  children?: React.ReactNode;
  heightClass?: string;
  overlay?: number;
}

export default function HeroVideo({
  src = "/introvide.mp4",
  poster = "/intro-poster.jpg",
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
    v.play().catch(() => {});
  }, [reducedMotion]);

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden bg-stone-900`}>
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
      ) : null}

      {/* Poster fallback while video loads */}
      {!videoReady && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900"
          style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
        style={{ opacity: overlay / 100 }}
      />
      <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
}
