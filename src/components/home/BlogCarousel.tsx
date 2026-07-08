"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  featuredImage: string;
}

export default function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("a");
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // + gap (24px = gap-6)
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/carousel">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-5 snap-x snap-mandatory scrollbar-hide md:px-12"
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2.5 flex-shrink-0 snap-center w-[82vw] sm:w-[44vw] md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] pb-8 border-b border-[#9C9C9C] md:border-b-0 md:pb-0"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 768px) 44vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p
              className="text-[#9C9C9C] text-[14px] md:text-[15px]"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <div className="flex items-start justify-between gap-5">
              <h3
                className="text-[16px] font-bold text-white uppercase leading-tight line-clamp-2 md:text-[18px]"
                style={{ fontFamily: "var(--font-josefin-sans)" }}
              >
                {post.title}
              </h3>
              <svg
                className="w-4 h-5 text-[#9C9C9C] shrink-0 mt-0.5 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14 M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Arrow buttons — desktop only */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors opacity-0 group-hover/carousel:opacity-100"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors opacity-0 group-hover/carousel:opacity-100"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
