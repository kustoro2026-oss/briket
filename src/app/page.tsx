import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeSections from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: "Coconut Shell Charcoal Briquettes for Shisha & BBQ",
  description:
    "Indonesian export of coconut shell charcoal briquettes for shisha, hookah, and BBQ applications. Product range: Cube, Hexagonal, Finger, and Flower. Request a quotation or evaluation sample.",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HomeSections />
    </>
  );
}
