import Link from "next/link";
import { ArrowRight, Leaf, Store, Users, CloudSun, Shield, Sprout, Smartphone } from "lucide-react";
import PlayStoreButton from "@/components/PlayStoreButton";

export const metadata = {
  title: "About | AgriAgent",
  description: "AgriAgent is a marketplace and verified network built for Indian farmers.",
};

const values = [
  {
    icon: Sprout,
    title: "Built for the field",
    desc: "Every screen is designed to be used with dusty hands, on a low-end phone, on a slow connection.",
  },
  {
    icon: Shield,
    title: "Verified by default",
    desc: "Aadhar, phone, and admin checks — no fake profiles, no surprises.",
  },
  {
    icon: Leaf,
    title: "No dark patterns",
    desc: "No tricks, no ads disguised as content, no infinite scroll. Just what you came for.",
  },
  {
    icon: Users,
    title: "Local first",
    desc: "Village radius, not state-wide. Real neighbours, real prices, real trust.",
  },
];

const whatWeBuild = [
  { icon: Store, title: "Marketplace", desc: "Seeds, fertilizer, tools, and equipment from trusted sellers — no middlemen." },
  { icon: Users, title: "Labour network", desc: "Find verified labourers and contractors within your village radius." },
  { icon: CloudSun, title: "Weather & insights", desc: "Live hourly rain, heat, and wind forecasts for your pin code." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF6] dark:bg-gray-950">

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden border-b border-stone-200 dark:border-gray-800 bg-gradient-to-br from-emerald-50 via-[#FDFBF6] to-amber-50 dark:from-emerald-950/40 dark:via-gray-950 dark:to-amber-950/20">
        <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-6">
            <Leaf className="w-3.5 h-3.5" />
            Our story
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-stone-900 dark:text-gray-100">
            Tools that <span className="text-emerald-600">actually help</span>
            <br />
            Indian farmers
          </h1>
          <p className="mt-6 text-lg text-stone-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            AgriAgent started with one question: why is it so hard for a farmer to find
            a fair price, a reliable labourer, or a weather forecast for their own village?
          </p>
        </div>
      </section>

      {/* ───── Mission ───── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-4 text-stone-900 dark:text-gray-100">
              Why we exist
            </h2>
            <div className="space-y-4 text-stone-600 dark:text-gray-400 leading-relaxed">
              <p>
                India has 146 million farms. Most are small — under two hectares.
                Yet the tools available to them are built for corporations:
                enterprise software, English-only apps, foreign weather services.
              </p>
              <p>
                We build the opposite. AgriAgent is designed for the farmer standing
                in a field, not the one sitting in an office. Everything is in Telugu
                and English, works offline, and fits on a ₹5,000 phone.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 flex items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_top_right,white,transparent_60%)]" />
            <div className="relative text-center text-white">
              <Sprout className="w-20 h-20 mx-auto mb-4 opacity-90" strokeWidth={1.2} />
              <div className="text-4xl font-black">146M</div>
              <div className="text-sm mt-2 text-emerald-100">farms across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── What we build ───── */}
      <section className="border-y border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-black tracking-tight mb-10 text-center text-stone-900 dark:text-gray-100">
            What we build
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {whatWeBuild.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-stone-200 dark:border-gray-800 bg-[#FDFBF6] dark:bg-gray-950 p-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Values ───── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight mb-10 text-center text-stone-900 dark:text-gray-100">
          How we work
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 dark:text-gray-100 mb-1">{title}</h3>
                <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── App CTA ───── */}
      <section className="border-t border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <Smartphone className="w-12 h-12 mx-auto mb-5 text-emerald-600" />
          <h2 className="text-3xl font-black tracking-tight mb-3 text-stone-900 dark:text-gray-100">
            Try it on your phone
          </h2>
          <p className="text-stone-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The full experience — marketplace, labour network, weather — free on Google Play.
          </p>
          <div className="flex justify-center">
            <PlayStoreButton />
          </div>
        </div>
      </section>

      {/* ───── Contact link ───── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1 text-stone-900 dark:text-gray-100">
              Have a question?
            </h3>
            <p className="text-stone-600 dark:text-gray-400 text-sm">
              We read every message.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
