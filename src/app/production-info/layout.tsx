import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production, Quality Grades & Export Information",
  description:
    "Production process, quality grades (Platinum, Super Premium, Premium), MOQ and payment framework, packaging options, and IMDG-compliant maritime shipping information for charcoal briquette export.",
};

export default function ProductionInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
