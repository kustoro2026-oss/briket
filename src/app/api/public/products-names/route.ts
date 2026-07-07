import { NextResponse } from "next/server";
import { getProducts } from "@/lib/data";

export async function GET() {
  const products = getProducts();
  const names = products.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
  }));
  return NextResponse.json(names);
}
