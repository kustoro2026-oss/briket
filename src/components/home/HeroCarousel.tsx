"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slideImages = [
  "/images/carousel/slide-1.jpg",
  "/images/carousel/slide-2.jpg",
  "/images/carousel/slide-3.jpg",
  "/images/carousel/slide-4.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#161616]">
      {/* Slides */}
      {slideImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={image}
            alt={`Charcoalnesia slide ${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Content - centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-5 text-center md:px-20 lg:px-32">
        <h1
          className="max-w-[860px] leading-[1.2em] font-semibold text-white text-[24px] md:text-[34px] lg:text-[40px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          Indonesian Coconut Shell Charcoal Briquettes
        </h1>

        <p
          className="text-[17px] font-medium text-[#EFA12D] md:text-[20px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          For Shisha, Hookah &amp; BBQ Applications
        </p>

        <p className="max-w-[640px] text-sm leading-relaxed text-white/90 md:text-base">
          B2B charcoal supply from Indonesia with defined product specifications, batch quality
          control, private-label packaging, and export documentation support.
        </p>

        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/85 md:text-sm">
          Available Shapes: Cube | Hexagonal | Finger | Flower
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-5 max-w-[520px] w-full">
          <Link
            href="/our-products"
            className="flex flex-1 items-center justify-center rounded-[40px] border border-white bg-black/40 px-8 py-4 text-[15px] font-bold text-white whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:bg-black/60 sm:text-[16px] md:px-10 md:py-5"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            View Products
          </Link>
          <Link
            href="/contact-us"
            className="flex flex-1 items-center justify-center rounded-[40px] border border-[#EFA12D] bg-black/40 px-8 py-4 text-[15px] font-bold text-[#EFA12D] whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:bg-black/60 sm:text-[16px] md:px-10 md:py-5"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            Request Quotation
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-5 md:bottom-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`h-3.5 w-3.5 rounded-full border border-[#EFA12D] transition-all duration-300 ${
              index === current ? "bg-[#EFA12D]" : "bg-transparent hover:bg-[#EFA12D]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
