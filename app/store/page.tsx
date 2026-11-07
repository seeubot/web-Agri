import Link from "next/link";
import { listItems } from "@/lib/api";
import StoreCard from "@/components/StoreCard";
import type { Platform } from "@/lib/types";
import { Store, Search } from "lucide-react";
const PLATFORMS: { key: Platform | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "amazon", label: "Amazon" },
  { key: "flipkart", label: "Flipkart" },
  { key: "meesho", label: "Meesho" },
  { key: "other", label: "Other" },
];
export const dynamic = "force-dynamic";
export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; platform?: string }>;
}) {
  const sp = await searchParams;
  const search = sp.search ?? "";
  const platform = sp.platform ?? "all";
  let items: any[] = [];
  let error: string | null = null;
  try {
    const res = await listItems({ search, platform, limit: 100 });
    items = res.items;
  } catch (e: any) {
    error = e.message;
  }
  return (
    <div>
      {/* Hero banner */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-emerald-50 dark:from-brand-900/30 dark:via-gray-950 dark:to-emerald-950/30" />
        <div className="absolute inset-0 -z-10 [background:radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.15),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-5">
            <Store className="w-3.5 h-3.5" />
            Marketplace
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            The AgriAgent <span className="text-brand-600">Store</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Products handpicked for Indian farmers — from seeds and fertilizer to
            the tools that get the job done.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Search + filters */}
        <form className="flex gap-2 mb-6 flex-wrap">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              name="search"
              defaultValue={search}
              placeholder="Search products…"
              className="input pl-9"
            />
          </div>
          <button className="btn-primary" type="submit">Search</button>
        </form>
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {PLATFORMS.map((p) => {
            const active = platform === p.key;
            const qs = new URLSearchParams();
            if (search) qs.set("search", search);
            if (p.key !== "all") qs.set("platform", p.key);
            return (
              <Link
                key={p.key}
                href={`/store${qs.toString() ? `?${qs}` : ""}`}
                className={
                  "px-4 py-2 rounded-full text-sm font-semibold border transition whitespace-nowrap " +
                  (active
                    ? "bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-600/25"
                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800")
                }
              >
                {p.label}
              </Link>
            );
          })}
        </div>
        {error && (
          <div className="rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 p-4 text-red-800 dark:text-red-300 text-sm mb-6">
            {error}
          </div>
        )}
        {items.length === 0 && !error ? (
          <div className="text-center py-24">
            <Store className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">No products yet</p>
            <p className="text-sm text-gray-500 mt-1">Check back soon — we're adding new items regularly.</p>
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <StoreCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
