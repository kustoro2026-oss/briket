"use client";

import { useState, useEffect, useCallback } from "react";

const slideImages = [
  "https://assets.djavacoal.com/static-media/carousel/Bf28YiPSszM3JAnM1WqOJ",
  "https://assets.djavacoal.com/static-media/carousel/bqD3eBPOOHZHtq2g4-erj",
  "https://assets.djavacoal.com/static-media/carousel/cJFmWbULJCxFp3X0wzn8u",
  "https://assets.djavacoal.com/static-media/carousel/piDf0CGL8Ly5Q9gbCL-yn",
];

const slideTitle = "Grow With Fakhri: Premium Coconut Charcoal Briquettes";

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
          <img
            src={image}
            alt={`Grow With Fakhri slide ${index + 1}`}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-100"
          />
        </div>
      ))}

      {/* Content - centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-5 text-center md:px-20 lg:px-32">
        <h1
          className="max-w-[700px] leading-[1.4em] font-semibold text-white text-[25px] md:text-[36px] lg:text-[42px] lg:leading-[1.1em]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          Power Your Flame with <span className="text-[#EFA12D]">Djavacoal Indonesia:</span> The Ultimate Solution for Clean Energy
        </h1>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-5 max-w-[480px] w-full">
          <a
            href="/about-company"
            className="flex flex-1 items-center justify-center rounded-[40px] border border-white bg-black/40 px-8 py-4 text-[15px] font-bold text-white whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:bg-black/60 sm:text-[16px] md:px-10 md:py-5"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            About Us
          </a>
          <a
            href="/our-products"
            className="flex flex-1 items-center justify-center rounded-[40px] border border-[#EFA12D] bg-black/40 px-8 py-4 text-[15px] font-bold text-[#EFA12D] whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:bg-black/60 sm:text-[16px] md:px-10 md:py-5"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            Discover Our Products
          </a>
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
