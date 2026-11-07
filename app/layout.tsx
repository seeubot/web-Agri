import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import ClientGuard from "@/components/ClientGuard";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "AgriAgent | Smarter Farming",
  description: "The all-in-one platform for farmers, labourers, and contractors.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientGuard />
          <NavBar />
          <main className="min-h-[calc(100vh-57px)]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
