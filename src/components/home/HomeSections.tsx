import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "@/components/ui/Marquee";
import CompanyVideo from "@/components/home/CompanyVideo";
import BlogCarousel from "@/components/home/BlogCarousel";
import { getProducts, getRecentBlogPosts, getPackaging } from "@/lib/data";

const features = [
  { image: "https://djavacoal.com/images/icon-low-ash.png", title: "Low Ash Content" },
  { image: "https://djavacoal.com/images/icon-eco-friendly.png", title: "Eco Friendly" },
  { image: "https://djavacoal.com/images/icon-long-lasting.png", title: "Long Lasting" },
  { image: "https://djavacoal.com/images/icon-odorless.png", title: "Odorless" },
  { image: "https://djavacoal.com/images/icon-no-chemical.png", title: "No Chemical" },
  { image: "https://djavacoal.com/images/icon-premium-quality.png", title: "Premium Quality" },
  { image: "https://djavacoal.com/images/icon-low-water.png", title: "Low Water Content" },
  { image: "https://djavacoal.com/images/icon-glowing-heat.png", title: "Glowing Heat" },
];

const certificates = [
  { name: "Ministry of Trade", image: "https://djavacoal.com/images/ministry_of_trade_logo.png" },
  { name: "100% Natural", image: "https://djavacoal.com/images/100_natural_logo.png" },
  { name: "MSDS", image: "https://djavacoal.com/images/material_data_safety_sheets_logo.png" },
  { name: "Carsurin", image: "https://djavacoal.com/images/carsurin_1968_logo.png" },
];

const shippingPartners = [
  { name: "PIL", image: "https://djavacoal.com/images/shipping-pil.png" },
  { name: "MSC", image: "https://djavacoal.com/images/shipping-msc.png" },
  { name: "CMA CGM", image: "https://djavacoal.com/images/shipping-cma-7a75cb.png" },
  { name: "ESL", image: "https://djavacoal.com/images/shipping-esl.png" },
  { name: "Asyad", image: "https://djavacoal.com/images/shipping-asyad.png" },
  { name: "OVP", image: "https://djavacoal.com/images/shipping-ovp.png" },
  { name: "SITC", image: "https://djavacoal.com/images/shipping-sitc.png" },
];

const productionInfoCards = [
  { title: "Production Process", href: "/production-info#production-process", image: "https://djavacoal.com/images/home-production-info1.png" },
  { title: "MOQ & Payment Terms", href: "/production-info#moq-payment-terms", image: "https://djavacoal.com/images/home-production-info2.png" },
  { title: "Shipment Terms", href: "/production-info#shipment-terms", image: "https://djavacoal.com/images/home-production-info3.png" },
  { title: "Packaging Option", href: "/production-info#packaging-info", image: "https://djavacoal.com/images/home-production-info44.png" },
];

const exportCountries = [
  "SA", "AE", "QA", "KW", "BH", "OM", "IQ", "JO", "LB", "EG",
  "TR", "IR", "RU", "GB", "DE", "FR", "ES", "IT", "IN", "PK",
  "BD", "MY", "SG", "JP", "KR", "GN", "SL", "AU", "US", "BR",
];

export default function HomeSections() {
  const products = getProducts().slice(0, 4);
  const blogPosts = getRecentBlogPosts(4);
  const packagingOptions = getPackaging().slice(0, 3);

  return (
    <>
      {/* ========== CERTIFICATE MARQUEE ========== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]" style={{ height: "150px" }}>
        <div className="flex animate-[certificateMarquee_15s_linear_infinite] h-full">
          {[...certificates, ...certificates].map((cert, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] h-full flex items-center justify-center border border-[#2A2A2A]"
              style={{
                background: "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.06) 100%)",
                boxShadow: "0 0 20px rgba(0,0,0,0.19)",
              }}
            >
              <Image src={cert.image} alt={cert.name} width={320} height={98} className="object-contain" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* ========== COMPANY PROFILE ========== */}
      <section className="bg-primary w-full px-5 py-16 md:px-10 md:py-20 lg:px-[100px] lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Video Thumbnail - diperbesar */}
          <CompanyVideo />
          {/* Deskripsi */}
          <div className="flex-1">
            <h2 className="text-[28px] md:text-[32px] font-bold text-white text-left" style={{ fontFamily: "var(--font-josefin-sans)" }}>
              PT CHARCOALNESIA GLOBAL EXPORT
            </h2>
            <p className="text-[15px] leading-[27px] text-[#cfcfcf] text-justify mb-4 mt-4" style={{ fontFamily: "var(--font-open-sans)" }}>
              Charcoalnesia is a premier manufacturer and supplier of high-quality charcoal products.
              We operate in close collaboration with three trusted manufacturing facilities in Indonesia
              that provide us with dedicated, exclusive production lines. Our first line is fully dedicated
              to premium shisha/hookah 100% coconut shells charcoal, the second line specializes in coconut
              based charcoal for BBQ/Grill, and the third line is dedicated to high quality wood based charcoal
              for traditional BBQ.
            </p>
            <p className="text-[15px] leading-[27px] text-[#cfcfcf] text-justify mb-6" style={{ fontFamily: "var(--font-open-sans)" }}>
              Our premium raw materials are selectively sourced from premium origins in Sulawesi. In addition
              to finished briquettes, we are fully capable of supplying raw materials that have already been
              processed into raw charcoal to support other manufacturers and bulk buyers. To guarantee absolute
              consistency, our internal Quality Control team, led by Rahmat, directly oversees the entire
              production — implementing rigorous on-site quality control inspection from start to finish.
            </p>
            <Link
              href="/about-company"
              className="group relative inline-block text-lg font-semibold text-[#EFA12D] pb-1"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              <span className="italic">Get</span> to Know Us!
              <span className="absolute bottom-0 left-0 h-0.5 w-[25px] bg-[#EFA12D] transition-all duration-500 ease-out group-hover:w-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="relative w-full overflow-hidden py-10 md:py-14 lg:py-16">
        <h2 className="text-center text-[28px] font-bold text-white uppercase mb-10 md:text-[36px] lg:text-[42px]" style={{ fontFamily: "var(--font-josefin-sans)" }}>
          WHY CHOOSE US?
        </h2>
        <div className="scrollbar-hide flex justify-start gap-[clamp(1rem,1.5vw,1.25rem)] overflow-x-auto px-3 sm:px-5 md:px-10 lg:flex-wrap lg:justify-center lg:overflow-x-visible lg:px-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-[197.5px] h-[269px] flex-shrink-0 border border-[#EFA12D]/25 snap-center p-6 transition-all duration-300 hover:border-[#EFA12D] hover:shadow-[0_0_10px_rgba(239,161,45,0.31)]"
              style={{
                background: "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(245,152,13,0.19) 90%)",
              }}
            >
              <Image src={feature.image} alt={feature.title} width={120} height={120} className="object-contain mb-4" unoptimized />
              <h3 className="text-xs font-semibold text-[#EFA12D] text-center" style={{ fontFamily: "var(--font-josefin-sans)" }}>
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ========== DISCOVER OUR PRODUCTS ========== */}
      <section className="relative w-full overflow-hidden bg-[#161616] px-5 py-8 md:px-10 md:py-12 lg:px-[100px] lg:py-16">
        <div className="absolute top-0 left-0 h-px w-full bg-[#EFA12D]" />
        <h2 className="text-center text-[28px] font-bold text-white uppercase mb-10 md:text-[36px] lg:text-[42px]" style={{ fontFamily: "var(--font-josefin-sans)" }}>
          DISCOVER OUR <span className="text-[#EFA12D]">PRODUCTS</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-14 px-0 py-0 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-3 lg:gap-x-4">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col items-center w-full pb-8 mb-4 border-b border-[#9C9C9C] md:border-b-0 md:pb-0 md:mb-0">
              <Link href={`/our-products/${product.slug}`} className="w-full block">
                <div
                  className="relative aspect-square w-full overflow-hidden rounded-[22px] border border-white/15 transition-all duration-500 hover:border-[#EFA12D]/80 hover:shadow-[0_0_30px_rgba(239,161,45,0.25)]"
                  style={{
                    background: "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.19) 100%)",
                    boxShadow: "0 0 30px rgba(0,0,0,0.25)",
                  }}
                >
                  <Image
                    src={product.images[0] || "https://djavacoal.com/images/placeholder.jpg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6 max-w-[415px]">
                  <h3 className="text-[15px] font-bold text-white md:text-[16px]" style={{ fontFamily: "var(--font-josefin-sans)" }}>
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[21px] text-[#C6C6C6] md:text-[14px] md:leading-[22.75px] line-clamp-3" style={{ fontFamily: "var(--font-open-sans)" }}>
                    {product.description}
                  </p>
                </div>
              </Link>
              <Link
                href={`/our-products/${product.slug}`}
                className="inline-block mt-3 text-[13px] font-semibold text-[#1E90FF] md:text-[14px] hover:underline underline-offset-4"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Detail Products...
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#EFA12D]" />
      </section>

      {/* ========== PACKAGING PREVIEW ========== */}
      <section className="relative w-full overflow-hidden py-16">
        <Image
          src="https://djavacoal.com/images/bg-packaging-option.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
          unoptimized
        />
        <div className="relative z-10">
          <div className="mb-10 flex flex-col items-start justify-center px-5 md:px-10 lg:px-60">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-[50px] bg-[#EFA12D]" />
              <h2 className="text-[26px] font-bold text-white md:text-[34px] lg:text-[40px]" style={{ fontFamily: "var(--font-josefin-sans)" }}>
                Packaging <span className="text-[#EFA12D]">Option</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0 px-5 md:grid md:grid-cols-2 md:gap-10 md:px-10 lg:flex lg:flex-row lg:justify-center lg:px-[100px]">
            {packagingOptions.map((pkg) => (
              <div key={pkg.id} className="group relative flex aspect-square scale-90 flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#FFFFFF30] sm:scale-95 md:scale-100 lg:rounded-none transition-all duration-500 hover:border-[#EFA12D]"
                style={{
                  background: "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.25) 100%)",
                  boxShadow: "0 0 40px rgba(0,0,0,0.31)",
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    width={350}
                    height={350}
                    className="object-contain p-8"
                  />
                </div>
                <h3 className="absolute top-5 font-semibold text-white text-xl" style={{ fontFamily: "var(--font-josefin-sans)" }}>
                  {pkg.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/production-info#packaging-info"
              className="text-[15px] font-semibold text-[#EFA12D] italic underline-offset-4 hover:underline md:text-[16px]"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              View Packaging Details
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#EFA12D]" />
      </section>

      {/* ========== PRODUCTION INFO CARDS ========== */}
      <section className="relative w-full border-t border-b border-secondary py-16 md:py-20 lg:py-24">
        <h2 className="text-center text-[26px] font-bold text-white mb-10" style={{ fontFamily: "var(--font-josefin-sans)" }}>
          Production Info
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:px-[100px]">
          {productionInfoCards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="group relative w-full overflow-hidden"
              style={{ height: "205.5px" }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-end justify-center">
                <p className="absolute bottom-4 w-full text-center text-[13px] md:text-[15px] font-semibold text-white" style={{ fontFamily: "var(--font-open-sans)" }}>
                  {card.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== FACTORY VISIT ========== */}
      <section className="relative w-full overflow-hidden bg-[#1D1D1D] text-center text-white">
        <div className="py-16 md:py-20">
          <h2 className="text-[28px] font-bold text-white mb-4" style={{ fontFamily: "var(--font-josefin-sans)" }}>
            VISIT OUR FACTORY
          </h2>
          <p className="text-[#c6c6c6] text-[15px] leading-[24.375px] text-center max-w-2xl mx-auto mb-8 px-5">
            See our production facility firsthand. Every step of our process from selecting premium raw materials
            from Sulawesi to shaping, testing, and packaging is carried out with professionalism and dedication
            to ensure consistency, safety, and performance. We welcome factory visits from potential clients and partners.
          </p>
          <div className="max-w-4xl mx-auto px-5 mb-8">
            <Image
              src="/images/factory/factory-visit.jpg"
              alt="Factory Visit"
              width={896}
              height={504}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <a
            href="https://wa.me/+628818786988?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20factory%20visit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1B7308] text-white px-6 h-[54px] w-[271px] text-sm font-semibold transition-all hover:bg-[#1c7a09] md:w-[360px] md:text-[15px] lg:w-[500px]"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <FaWhatsapp className="w-[22px] h-[22px]" />
            Schedule a Visit
          </a>
        </div>
      </section>

      {/* ========== BLOG / ARTICLE & NEWS ========== */}
      <section className="relative w-full overflow-hidden border-t border-[#D0D0D0] py-12 md:py-16">
        <h2 className="text-center text-[28px] font-bold text-white uppercase mb-10" style={{ fontFamily: "var(--font-josefin-sans)" }}>
          ARTICLE & NEWS
        </h2>

        <BlogCarousel posts={blogPosts} />
      </section>

      {/* ========== EXPORT DESTINATION ========== */}
      <section className="relative w-full overflow-hidden bg-[#1D1D1D] py-12 md:px-10 lg:px-20">
        <h2 className="text-center text-[28px] font-bold text-white uppercase mb-6" style={{ fontFamily: "var(--font-josefin-sans)" }}>
          MAJORITY EXPORT DESTINATION
        </h2>
        <p className="text-[#d3d3d3] text-base leading-[26px] text-center max-w-[1024px] mx-auto mb-8">
          Our products reach customers across 20+ countries worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-5">
          {exportCountries.map((code) => (
            <Image
              key={code}
              src={`https://flagsapi.com/${code}/flat/64.png`}
              alt={code}
              width={57}
              height={32}
              className="object-cover rounded-sm"
              unoptimized
            />
          ))}
        </div>
      </section>

      {/* ========== SHIPPING PARTNERS ========== */}
      <section className="bg-primary relative w-full overflow-hidden py-6 lg:py-10">
        <h2 className="text-center text-[26px] font-bold text-white mb-6" style={{ fontFamily: "var(--font-josefin-sans)" }}>
          GLOBAL SHIPPING PARTNER
        </h2>
        <div className="relative w-full overflow-hidden">
          <Marquee speed="slow">
            <div className="flex items-center gap-10">
              {[...shippingPartners, ...shippingPartners].map((partner, i) => (
                <div key={i} className="flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center">
                  <Image src={partner.image} alt={partner.name} width={150} height={150} className="object-contain" unoptimized />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
