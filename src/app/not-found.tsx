import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Djavacoal Indonesia",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-primary">
      <div className="text-center px-4">
        <h1
          className="text-6xl md:text-8xl font-bold text-white/20 mb-4"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-[#c6c6c6] mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-secondary/80 transition-colors uppercase tracking-wider text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
