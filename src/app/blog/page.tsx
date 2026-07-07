import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { getBlogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & Articles - Charcoal Industry Insights | Djavacoal Indonesia",
  description: "Stay updated with the latest news, articles, and insights from the charcoal industry.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div>
      {/* Header */}
      <section className="bg-[#161616] py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-2xl font-semibold text-white md:text-4xl" style={{ fontFamily: "var(--font-josefin-sans)" }}>
            News & Article
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex max-w-[400px] flex-col gap-2.5"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-secondary text-base">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-[21px] font-normal text-white leading-[25px]" style={{ fontFamily: "var(--font-josefin-sans)" }}>
                    {post.title}
                  </h3>
                  <HiArrowRight className="w-[17px] h-[14px] text-secondary shrink-0 mt-2 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-5 md:gap-10 mt-12">
            <span className="text-base text-white">&laquo; Prev</span>
            <span className="bg-secondary text-primary text-xl font-bold w-8 h-8 flex items-center justify-center">1</span>
            <span className="bg-primary text-[#8C8C8C] text-xl font-bold w-8 h-8 flex items-center justify-center">2</span>
            <span className="bg-primary text-[#8C8C8C] text-xl font-bold w-8 h-8 flex items-center justify-center">3</span>
            <span className="text-base text-white">Next &raquo;</span>
          </div>
        </div>
      </section>
    </div>
  );
}
