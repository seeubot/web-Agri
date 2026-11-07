"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const items = [
  {
    image: "/features/01-marketplace.webp",
    alt: "Market stall with fresh produce",
    title: "A store that respects your time",
    desc: "Seeds, fertilizer, tools, and equipment — picked for Indian soil and Indian budgets.",
    href: "/store",
    cta: "Browse store",
  },
  {
    image: "/features/02-labour-network.webp",
    alt: "Verified farmers connected over a village map",
    title: "Verified people, near you",
    desc: "Labourers and contractors within your village radius. Every profile checked.",
  },
  {
    image: "/features/03-weather.webp",
    alt: "Farm fields with sun and rain",
    title: "Weather, only when it matters",
    desc: "Hourly rain and heat forecasts for your pin code. No noise, no ads.",
  },
];

export default function FeatureShowcase() {
  return (
    <div className="space-y-20 sm:space-y-28">
      {items.map((item, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={item.title}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 dark:bg-gray-800 border border-stone-200 dark:border-gray-800 shadow-xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={i === 0}
                />
              </div>
              {/* Hand-drawn corner accent */}
              <svg
                className="absolute -top-3 -right-3 w-16 h-16 text-emerald-500"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10 90 Q 50 50 90 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 6" />
              </svg>
            </div>

            <div className={reversed ? "" : "md:pl-4"}>
              <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase mb-4">
                0{i + 1}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-[1.1] text-stone-900 dark:text-gray-100 mb-4">
                {item.title}
              </h3>
              <p className="text-stone-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                {item.desc}
              </p>
              {item.href && item.cta && (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 mt-6 text-emerald-700 dark:text-emerald-400 font-semibold hover:gap-2.5 transition-all"
                >
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
