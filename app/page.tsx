import Link from "next/link";
import { ArrowRight, Leaf, Store, Users, CloudSun, Shield, Sprout } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import PlayStoreButton from "@/components/PlayStoreButton";
import FeatureShowcase from "@/components/FeatureShowcase";

export default function HomePage() {
  return (
    <div className="bg-[#FDFBF6] dark:bg-gray-950">

      {/* ───── Hero ───── */}
      <HeroVideo heightClass="min-h-[88vh]" overlay={55}>
        <div className="max-w-5xl mx-auto px-6 h-full flex flex-col justify-center py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-8">
              <Leaf className="w-3.5 h-3.5 text-emerald-300" />
              For Indian farmers
            </div>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.03]">
              Grow more.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-lime-300 to-amber-300 bg-clip-text text-transparent">
                Stress less.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed">
              A marketplace of trusted products, verified labourers near you,
              and live weather — everything a farmer needs, in one place.
            </p>

            <div className="mt-10 flex gap-3 flex-wrap items-center">
              <Link
                href="/store"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-2xl shadow-emerald-900/40 transition-all hover:scale-[1.02]"
              >
                Browse the store
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </HeroVideo>

      {/* ───── Honest value strip ───── */}
      <section className="border-b border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 py-8 grid sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Store className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Curated products</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-amber-600 shrink-0" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Verified local network</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CloudSun className="w-5 h-5 text-sky-600 shrink-0" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live weather</span>
          </div>
        </div>
      </section>

      {/* ───── Feature showcase ───── */}
      <section className="relative py-24 bg-[#FDFBF6] dark:bg-gray-950">
        {/* Subtle grain overlay — pure CSS, no runtime cost */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
             style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "24px 24px" }} />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-5">
              <Sprout className="w-3.5 h-3.5" />
              What we build
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-gray-100">
              Three tools. One field.
            </h2>
            <p className="mt-5 text-stone-600 dark:text-gray-400 max-w-xl mx-auto">
              Every feature exists for one reason — to save you time and help you earn more from your land.
            </p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      {/* ───── App download ───── */}
      <section className="relative overflow-hidden bg-emerald-900 dark:bg-emerald-950">
        {/* Decorative arcs — CSS only */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-emerald-700/40" />
        <div className="absolute -bottom-48 -left-24 w-96 h-96 rounded-full border border-emerald-700/40" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Get the full app
          </h2>
          <p className="text-emerald-100/80 max-w-md mx-auto mb-8 text-lg">
            Free on Google Play. Built for the field, works on any phone.
          </p>
          <div className="flex justify-center">
            <PlayStoreButton />
          </div>
        </div>
      </section>

      {/* ───── Store CTA ───── */}
      <section className="bg-[#FDFBF6] dark:bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-10 sm:p-14 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <Store className="w-10 h-10 text-emerald-600 mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-stone-900 dark:text-gray-100">
                Explore the store
              </h2>
              <p className="text-stone-600 dark:text-gray-400 leading-relaxed max-w-md">
                Seeds, fertilizer, tools, and equipment — picked for Indian conditions.
              </p>
            </div>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors self-start md:self-auto"
            >
              Open store <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-3 text-stone-900 dark:text-gray-100">
                <Sprout className="w-5 h-5 text-emerald-600" />
                AgriAgent
              </div>
              <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                Built for farmers, with farmers.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-900 dark:text-gray-100 mb-3">Explore</div>
              <ul className="space-y-2 text-sm text-stone-600 dark:text-gray-400">
                <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
                <li><Link href="/store" className="hover:text-emerald-600 transition-colors">Store</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-900 dark:text-gray-100 mb-3">Get the app</div>
              <PlayStoreButton className="!text-xs" />
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200 dark:border-gray-800 text-sm text-stone-500 flex flex-wrap gap-3 justify-between">
            <span>© {new Date().getFullYear()} AgriAgent</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Verified profiles, trusted network
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
