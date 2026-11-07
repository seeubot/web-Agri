"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout, Store, Home, Info, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/store", label: "Store", icon: Store },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-stone-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto flex items-center gap-2 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg mr-4 text-stone-900 dark:text-gray-100">
          <Sprout className="w-5 h-5 text-emerald-600" />
          <span>AgriAgent</span>
        </Link>

        <div className="flex items-center gap-1 flex-1 overflow-x-auto">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                  active
                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                    : "text-stone-600 dark:text-gray-300 hover:bg-stone-100 dark:hover:bg-gray-800"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.agriagent.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black hover:bg-gray-900 text-white text-xs font-semibold transition-colors"
        >
          Get the app
        </a>

        <ThemeToggle />
      </nav>
    </header>
  );
}
