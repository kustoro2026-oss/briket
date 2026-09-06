import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Products" };
  }

  return {
    title: product.name,
    description: `${product.name} - ${product.material}. Application: ${product.application}. Available grades: Platinum, Super Premium, Premium. Packaging options: ${product.packaging.join(", ")}.`,
  };
}

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
