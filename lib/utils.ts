// lib/utils.ts
export function cn(...c: (string | false | null | undefined)[]): string {
  return c.filter(Boolean).join(" ");
}
export function platformLabel(p: string): string {
  const m: Record<string, string> = {
    amazon: "Amazon", flipkart: "Flipkart", meesho: "Meesho", other: "Other",
  };
  return m[p] ?? "Other";
}
export function platformColor(p: string): string {
  const m: Record<string, string> = {
    amazon: "bg-[#FF9900]",
    flipkart: "bg-[#2874F0]",
    meesho: "bg-[#F43397]",
    other: "bg-gray-500",
  };
  return m[p] ?? "bg-gray-500";
}
