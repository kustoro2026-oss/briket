import type { Metadata } from "next";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Grow With Fakhri | Premium Charcoal Briquettes",
    template: "%s | Grow With Fakhri",
  },
  description: "Grow With Fakhri - Premium coconut charcoal briquettes for shisha, BBQ, and industrial use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-open-sans), ui-sans-serif, system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
