// app/api/store/route.ts — internal proxy so browser never sees the real API
import { NextResponse } from "next/server";
import { listItems } from "@/lib/api";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const data = await listItems({
      search: searchParams.get("search") ?? undefined,
      platform: searchParams.get("platform") ?? undefined,
      limit: 100,
    });
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Failed to load items", items: [] },
      { status: 500 }
    );
  }
}
