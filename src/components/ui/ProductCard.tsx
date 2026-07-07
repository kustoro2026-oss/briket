import Link from "next/link";

interface ProductCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, slug, description, image }: ProductCardProps) {
  return (
    <div className="group overflow-hidden">
      <Link href={`/our-products/${slug}`} className="block">
        <div className="aspect-[4/3] bg-[#222222] overflow-hidden relative">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="pt-4">
          <h3
            className="text-base font-semibold text-white mb-1 transition-colors"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            {name}
          </h3>
          {description && <p className="text-sm text-[#C6C6C6] line-clamp-2 mb-2">{description}</p>}
        </div>
      </Link>
    </div>
  );
}
