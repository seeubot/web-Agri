// lib/api.ts
// ⚠️ SERVER-ONLY. Never import this from a "use client" file.
import "server-only";
import type { AffiliateItem, ListResponse } from "./types";
const API_BASE = (process.env.AGRI_API_URL || "").replace(/\/$/, "");
async function parse<T>(res: Response): Promise<T> {
  const text = await res.text();
  let data: any;
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data as T;
}
export async function listItems(params: {
  search?: string;
  platform?: string;
  limit?: number;
} = {}): Promise<ListResponse> {
  if (!API_BASE) {
    throw new Error("Server is not configured (missing AGRI_API_URL).");
  }
  const p = new URLSearchParams();
  p.set("limit", String(params.limit ?? 100));
  if (params.search) p.set("search", params.search);
  if (params.platform && params.platform !== "all") p.set("platform", params.platform);
  const res = await fetch(`${API_BASE}/api/affiliate/items?${p}`, {
    cache: "no-store",
  });
  const data = await parse<{ items?: AffiliateItem[]; pagination?: any }>(res);
  return {
    items: data.items ?? [],
    pagination: data.pagination ?? {
      page: 1, pages: 1, total: data.items?.length ?? 0, limit: params.limit ?? 100,
    },
  };
}
