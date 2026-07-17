import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeSections from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: "Coconut Charcoal Briquettes Manufacturer | Charcoalnesia",
  description: "Power Your Flame with Charcoalnesia: The Ultimate Solution for Clean Energy. Premium coconut charcoal briquettes for shisha, BBQ, and industrial use.",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HomeSections />
    </>
  );
}
