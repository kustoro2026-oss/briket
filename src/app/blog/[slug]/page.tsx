import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getRecentBlogPosts } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentBlogPosts(5);
  const pageUrl = `https://djavacoal.com/blog/${slug}`;

  return (
    <div className="bg-primary">
      {/* Article Header */}
      <section className="bg-[#161616]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
          <h1 className="text-2xl font-bold text-white leading-[29px] mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-base leading-[1.875em] mb-4">
            <span className="text-[#EFA12D]">{post.author}</span>
            <span className="text-white">-</span>
            <span className="text-white">
              {new Date(post.date).toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
          </div>

          {/* Social Share */}
          <div className="flex flex-wrap items-center gap-2 self-start">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full overflow-hidden"
            >
              <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#0965FE"/><path d="M20.1 20.6l.6-4.1h-3.9v-2.7c0-1.1.5-2.2 2.3-2.2h1.8V8.2s-1.6-.3-3.2-.3c-3.3 0-5.4 2-5.4 5.6v3.1H8.5v4.1h3.7v10h4.6v-10h3.3z" fill="#fff"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full overflow-hidden"
            >
              <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M6 7l7.6 10.2L5.8 25h1.7l6.7-7.2 5.4 7.2H26l-8-10.8L24.6 7h-1.7L16.8 13.6 12 7H6zm2.5 1.2h2.8l12.4 16.5h-2.8L8.5 8.2z" fill="#fff"/></svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full overflow-hidden"
            >
              <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#0077B5"/><path d="M10.3 22.6V12.3h-3.4v10.3h3.4zm-1.7-11.7c1.2 0 1.9-.8 1.9-1.8s-.7-1.8-1.9-1.8-1.9.8-1.9 1.8c0 1 .7 1.8 1.9 1.8zm14.1 11.7v-5.9c0-3.2-1.7-4.7-3.9-4.7s-3.6 2-3.6 2v-1.7h-3.4v10.3h3.4v-5.8c0-.9.1-1.8.7-2.5.5-.8 1.5-1.3 2.6-1.3 1.8 0 2.5 1.4 2.5 3.4v6.2h3.4z" fill="#fff"/></svg>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full overflow-hidden"
            >
              <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M16 2.7C8.6 2.7 2.7 8.6 2.7 16c0 2.3.6 4.6 1.7 6.6L3 29.3l6.9-1.8c2 1.1 4.2 1.7 6.4 1.7 7.4 0 13.3-5.9 13.3-13.3S23.4 2.7 16 2.7zm0 24.4c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4C5.7 20.4 5.1 18.7 5.1 17c0-6.1 4.9-10.9 10.9-10.9S26.9 10 26.9 16 22 27.1 16 27.1zm5.9-8.2c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.4-.8 1.1-1 1.3-.2.2-.4.2-.7.1-2-1-3.3-2.4-4.1-4.1-.3-.5 0-.8.2-1 .2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.1-.3.1-.6-.1-.8-.2-.3-.7-1.7-.9-2.3-.3-.6-.6-.5-.8-.5h-.7c-.3 0-.7.1-1.1.5-.4.5-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.7 7.3 6.5 1 .4 1.8.7 2.5.9 1 .3 2 .2 2.7.1.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.2-.2-.5-.3-1-.5z" fill="#fff"/></svg>
            </a>
          </div>

          {/* Featured Image */}
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full max-w-full h-auto my-6"
          />
        </div>
      </section>

      {/* Article Content + Sidebar */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-invert max-w-none py-10 text-base leading-[21.76px] text-[#C6C6C6]">
                <p className="mb-6">{post.content}</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <h3 className="text-xl font-extrabold text-white mb-6">Newest</h3>
              <div className="flex flex-col gap-6">
                {recentPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blog/${rp.slug}`}
                    className={`flex flex-col gap-1 ${rp.id === post.id ? "opacity-50 pointer-events-none" : ""}`}
                  >
                    <div className="w-full aspect-square overflow-hidden">
                      <img
                        src={rp.featuredImage}
                        alt={rp.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-[#EFA12D] mt-1">
                      {new Date(rp.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                    <h4 className="text-base text-white font-normal">{rp.title}</h4>
                  </Link>
                ))}
              </div>
              <Link
                href="/blog"
                className="mt-6 flex w-full items-center justify-center bg-[#EFA12D] text-white py-4 text-xl font-bold hover:bg-[#d8941a] transition-colors"
              >
                Show More
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
