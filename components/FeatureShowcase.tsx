"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";
const items = [
  {
    image: "/features/01-marketplace.webp",
    alt: "Illustration of a farm market stall with fresh produce and seed packets",
    title: "A marketplace that respects your time",
    desc: "Handpicked products for Indian farmers — seeds, fertilizer, tools, and equipment. No noise, just the essentials.",
    href: "/store",
    cta: "Browse store",
    bg: "from-brand-600 to-emerald-500",
    side: "left",
  },
  {
    image: "/features/02-labour-network.webp",
    alt: "Illustration of connected verified farmer silhouettes over a village map",
    title: "A network of verified labourers",
    desc: "Find labourers and contractors within your village radius. Every profile is Aadhar and phone verified.",
    href: null,
    cta: null,
    bg: "from-amber-500 to-orange-500",
    side: "right",
  },
  {
    image: "/features/03-weather.webp",
    alt: "Illustration of farm fields under a dynamic sky with sun and rain cloud",
    title: "Weather when you need it",
    desc: "Live forecasts, hourly rain prediction, and crop-specific guidance — updated every 15 minutes.",
    href: null,
    cta: null,
    bg: "from-sky-600 to-cyan-500",
    side: "left",
  },
  {
    image: "/features/04-verification.webp",
    alt: "Illustration of a shield with a sprout and identity verification badges",
    title: "Trust built into every profile",
    desc: "Aadhar, phone, and admin verification. Verified buyers get priority access to fresh produce.",
    href: null,
    cta: null,
    bg: "from-emerald-700 to-teal-600",
    side: "right",
  },
];
export default function FeatureShowcase() {
  return (
    <div className="space-y-24">
      {items.map((item, i) => {
        const isLeft = item.side === "left";
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              isLeft ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            <div className="relative">
              <div
                className={`relative rounded-3xl bg-gradient-to-br ${item.bg} p-6 sm:p-8 aspect-square max-w-md mx-auto shadow-2xl overflow-hidden group`}
              >
                <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_top_right,white,transparent_60%)]" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/10" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/10">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    priority={i === 0}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="w-7 h-7 text-brand-600 dark:text-brand-300" />
              </motion.div>
            </div>
            <div className={isLeft ? "" : "md:text-left"}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-300 mb-4">
                <Sprout className="w-3 h-3 text-brand-600" />
                Feature {i + 1}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                {item.desc}
              </p>
              {item.href && item.cta && (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 mt-6 text-brand-600 dark:text-brand-400 font-semibold hover:gap-2.5 transition-all"
                >
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
