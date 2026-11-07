import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Users, Store, Sprout } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import AnimatedSection from "@/components/AnimatedSection";
import AgriBackground from "@/components/AgriBackground";
import FeatureShowcase from "@/components/FeatureShowcase";
import PlayStoreButton from "@/components/PlayStoreButton";
const stats = [
  { value: "10K+", label: "Farmers onboarded" },
  { value: "500+", label: "Verified labourers" },
  { value: "50+", label: "Villages covered" },
  { value: "24/7", label: "Weather updates" },
];
export default function HomePage() {
  return (
    <div className="relative bg-white dark:bg-gray-950 overflow-x-hidden">
      <HeroVideo heightClass="min-h-[92vh]" overlay={62}>
        <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6">
              <Leaf className="w-3.5 h-3.5 text-brand-400" />
              Built for Indian agriculture
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Smarter tools for every{" "}
              <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                farmer
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              AgriAgent connects farmers, labourers, and contractors through a
              trusted marketplace, real-time weather insights, and a verified
              network — all in one place.
            </p>
            <div className="mt-10 flex gap-3 flex-wrap items-center">
              <Link
                href="/store"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold shadow-lg shadow-brand-900/40 transition-all hover:scale-[1.02]"
              >
                Browse the store
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </HeroVideo>
      <section className="relative border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08} className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">{s.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                {s.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <section className="relative py-24">
        <AgriBackground />
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-4">
              <Sprout className="w-3.5 h-3.5" />
              Why AgriAgent
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Everything you need,
              <br />
              <span className="text-brand-600">designed for the field</span>
            </h2>
            <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              One platform that keeps you connected to the people, products, and
              insights that matter most.
            </p>
          </AnimatedSection>
          <FeatureShowcase />
        </div>
      </section>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-800 via-brand-700 to-emerald-700" />
        <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_top_right,white,transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="relative max-w-md mx-auto">
                  <div className="relative aspect-square rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 overflow-hidden shadow-2xl">
                    <Image
                      src="/features/05-play-store.webp"
                      alt="Illustration of the AgriAgent mobile app with floating UI cards"
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left text-white order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md mb-5">
                  <Store className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  Download the app
                </h2>
                <p className="text-white/85 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed mb-7">
                  The full AgriAgent experience — marketplace, labour network,
                  weather, and more. Free on Google Play.
                </p>
                <div className="flex justify-center md:justify-start">
                  <PlayStoreButton />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="relative py-20">
        <AgriBackground />
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-10 sm:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative max-w-xl">
                <Store className="w-10 h-10 text-brand-600 mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  Ready to explore the store?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Products handpicked for Indian farmers — from quality seeds to
                  the tools that get the job done.
                </p>
                <Link
                  href="/store"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors"
                >
                  Open store <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-3">
                <Sprout className="w-5 h-5 text-brand-600" />
                AgriAgent
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Smarter tools for every Indian farmer.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Explore</div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                <li><Link href="/store" className="hover:text-brand-600 transition-colors">Store</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Get the app</div>
              <PlayStoreButton className="!text-xs" />
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 flex flex-wrap gap-3 justify-between">
            <span>© {new Date().getFullYear()} AgriAgent. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              Made for farmers, with farmers.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
