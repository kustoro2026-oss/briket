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
  metadataBase: new URL("https://charcoalnesia.com"),
  title: {
    default: "Charcoalnesia | Coconut Shell Charcoal Briquettes",
    template: "%s | Charcoalnesia",
  },
  description:
    "Indonesian export of coconut shell charcoal briquettes for shisha, hookah, and BBQ applications. Product range: Cube, Hexagonal, Finger, and Flower briquettes.",
  openGraph: {
    title: "Charcoalnesia | Coconut Shell Charcoal Briquettes",
    description:
      "Indonesian export of coconut shell charcoal briquettes for shisha, hookah, and BBQ applications.",
    type: "website",
    siteName: "Charcoalnesia",
    images: ["/images/carousel/slide-1.jpg"],
  },
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
