"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { getTeamMembers } from "@/lib/data";

const reelVideos = [
  { id: "bVKeLmEZyE8" },
  { id: "eVr3S9Hjo2o" },
  { id: "VkJ7tm1LSmg" },
  { id: "rIADKVzNZ9o" },
  { id: "q98uLQT6hh4" },
  { id: "EouOlxd_DlU" },
  { id: "cGAVGlKIOt4" },
];

const factoryGalleryFeatured = "/images/factory-gallery/featured.jpg";
const factoryGalleryThumbs = [
  "/images/factory-gallery/01.jpg", "/images/factory-gallery/02.jpg", "/images/factory-gallery/03.jpg",
  "/images/factory-gallery/04.jpg", "/images/factory-gallery/05.jpg", "/images/factory-gallery/06.jpg",
  "/images/factory-gallery/07.jpg", "/images/factory-gallery/08.jpg", "/images/factory-gallery/09.jpg",
  "/images/factory-gallery/10.jpg", "/images/factory-gallery/11.jpg",
];

const productGalleryFeatured = "/images/product-gallery/featured.jpg";
const productGalleryThumbs = [
  "/images/product-gallery/01.jpg", "/images/product-gallery/02.jpg", "/images/product-gallery/03.jpg",
  "/images/product-gallery/04.jpg", "/images/product-gallery/05.jpg", "/images/product-gallery/06.jpg",
  "/images/product-gallery/07.jpg", "/images/product-gallery/08.jpg",
];

const certificates = [
  { label: "NIB / Business Registration Number", image: "https://djavacoal.com/images/certificates/cert1.png" },
  { label: "Report Of Analysis (ROA)", image: "https://djavacoal.com/images/certificates/cert2.png" },
  { label: "Self-Heating Test (SHT) - 1", image: "https://djavacoal.com/images/certificates/cert3.png" },
  { label: "Self-Heating Test (SHT) - 2", image: "https://djavacoal.com/images/certificates/cert4.png" },
  { label: "Self-Heating Test (SHT) - 3", image: "https://djavacoal.com/images/certificates/cert5.png" },
  { label: "Material Safety Data Sheet (MSDS) - 1", image: "https://djavacoal.com/images/certificates/cert6.png" },
  { label: "Material Safety Data Sheet (MSDS) - 2", image: "https://djavacoal.com/images/certificates/cert7.png" },
  { label: "Material Safety Data Sheet (MSDS)", image: "https://djavacoal.com/images/certificates/cert8.png" },
];

export default function AboutCompanyPage() {
  const router = useRouter();
  const teamMembers = getTeamMembers();

  return (
    <div className="bg-[#1C1C1C]">
      {/* Banner */}
      <section className="relative w-full overflow-hidden bg-[#1C1C1C] text-white h-48 md:h-72">
        <Image
          src="https://djavacoal.com/images/bg-banner-OurProduct.png"
          alt="About Banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h1 className="text-2xl font-semibold italic text-white md:text-4xl">About Company</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar Navigation (Desktop) */}
          <div className="hidden h-auto self-stretch lg:block">
            <div className="sticky top-28 bg-[#222222] rounded-xl overflow-hidden">
              <div className="bg-[#222222] py-3 px-5 border-b border-[#2A2A2A]">
                <h3 className="text-sm font-semibold text-white">About Company</h3>
              </div>
              {[
                { label: "PT Charcoalnesia Global Export", href: "#charcoalnesia" },
                { label: "Charcoalnesia's Team", href: "#charcoalnesia-team" },
                { label: "What We Do?", href: "#what-we-do" },
                { label: "Countries Exported", href: "#countries-exported" },
                { label: "Legal & Certificates", href: "#legal-certificate" },
                { label: "Our Factory", href: "#factory" },
                { label: "Our Gallery", href: "#our-gallery" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-5 py-3 text-[13px] text-[#B3B3B3] hover:bg-[#3B5952] hover:text-white hover:font-semibold transition-all duration-200 border-b border-[#2A2A2A] last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className="bg-primary sticky top-24 z-40 flex items-center gap-3 border-b border-[#474747] px-4 py-3 lg:hidden">
            <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 16 16"><path d="M0 3h16v2H0V3zm0 5h16v2H0V8zm0 5h16v2H0v-2z"/></svg>
            <select
              className="flex-1 bg-transparent border border-[#3a3a3a] rounded px-4 py-2 text-sm text-white outline-none"
              onChange={(e) => { router.push(e.target.value); }}
            >
              {[
                { label: "PT Charcoalnesia Global Export", value: "#charcoalnesia" },
                { label: "Charcoalnesia's Team", value: "#charcoalnesia-team" },
                { label: "What We Do?", value: "#what-we-do" },
                { label: "Countries Exported", value: "#countries-exported" },
                { label: "Legal & Certificates", value: "#legal-certificate" },
                { label: "Our Factory", value: "#factory" },
                { label: "Our Gallery", value: "#our-gallery" },
              ].map((item) => (
                <option key={item.label} value={item.value} className="bg-[#151515]">
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Main Content */}
          <div className="space-y-3">
        {/* ===== Who We Are? ===== */}
        <section id="charcoalnesia" className="mt-2 scroll-mt-28 space-y-4 rounded-xl bg-[#222222] p-5 lg:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />
            <p className="text-sm font-medium italic tracking-[0.35px] text-[#60A5FF]">Who We Are?</p>
          </div>
          <h2 className="text-[20px] font-semibold leading-[27.5px] text-white">
            How We Craft Quality Charcoal for Global Markets
          </h2>
          <p className="text-base font-medium text-[#EFA12D]">Leading Indonesian Charcoal Manufacturer</p>

          <div className="space-y-4">
            <p className="text-base leading-[26px] text-[#E0DFE2]">
              PT Charcoalnesia Global Export is a premier manufacturer and supplier of high-quality charcoal
              products. We operate in close collaboration with three trusted manufacturing facilities in
              Indonesia that provide us with dedicated, exclusive production lines — from premium shisha/hookah
              coconut charcoal to BBQ and traditional wood-based charcoal. With years of expertise in the
              charcoal industry, we are committed to delivering excellence through innovation, strict quality
              standards, and reliable service.
            </p>
            <p className="text-base leading-[26px] text-[#E0DFE2]">
              Our premium raw materials are selectively sourced from premium origins in Sulawesi, Indonesia.
              In addition to finished briquettes, we are fully capable of supplying raw materials that have
              already been processed into raw charcoal to support other manufacturers and bulk buyers.
            </p>
            <p className="text-base leading-[26px] text-[#E0DFE2]">
              To guarantee absolute consistency, our internal Quality Control team, led by Rahmat, directly
              oversees the entire production. Once an order is processed, our team immediately implements a
              rigorous on-site quality control inspection from start to finish. Through advanced production
              methods and rigorous quality control, we guarantee consistency and reliability in every shipment.
            </p>
            <p className="text-base leading-[26px] text-[#E0DFE2]">
              Beyond supplying charcoal, we proudly serve the international market with OEM and private label
              services, offering customized briquette shapes, packaging, and branding to fit our clients&apos;
              unique needs. Our vision is not only to deliver high-quality products, but also to establish
              long-term partnerships built on trust, professionalism, and mutual growth.
            </p>
            <p className="text-sm leading-[22.75px] text-[#c0c5cc]">
              PT Charcoalnesia Global Export is proudly present as a premium charcoal supplier for clients
              around the world, delivering only the best quality and maintaining strong business relationships
              across borders.
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.youtube.com/watch?v=NWO_S1Kh6U0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full max-w-[849px] overflow-hidden rounded-xl border border-[#EFA12D]"
            >
              <Image
                src="https://img.youtube.com/vi/NWO_S1Kh6U0/maxresdefault.jpg"
                alt="Production Process Coconut Charcoal Briquette From Charcoalnesia"
                width={849}
                height={478}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-16 h-16 rounded-full bg-[#202020]/60 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-white ml-1" />
                </div>
              </div>
            </a>
          </div>

          {/* Company Data Table */}
          <h3 className="text-lg font-semibold text-white mt-6">Company Legal Data</h3>
          <div className="flex flex-col overflow-hidden border border-[#848484] text-sm mt-2">
            {[
              ["Company Name:", "PT Charcoalnesia Global Export"],
              ["Owner's Name:", "Yoga Indra Pradipta N"],
              ["Address:", "Jl. P. Ilir Sari V No. 15, Jawa Barat, Indonesia"],
              ["Established:", "2018"],
              ["Products:", "Charcoal Products"],
              ["Production Capacity:", "250 Tons / Month"],
              ["Certification:", "Charcoal Products"],
              ["Registered Number:", "NIB – 0220001680488"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className={`grid grid-cols-[minmax(176px,1fr)_minmax(200px,2fr)] md:grid-cols-[224px_1fr] border-b border-[#848484] last:border-b-0 ${
                  i % 2 === 0 ? "bg-[#3A3A3A]" : "bg-[#262626]"
                }`}
              >
                <div className="p-3 md:p-4 text-sm md:text-base font-semibold text-white border-r border-[#848484]">{label}</div>
                <div className="p-3 md:p-4 text-sm md:text-base text-[#CCCCCC]">{value}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-2 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="border border-gray-300 bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H0v97.8H80z"/></svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="border border-gray-300 bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
            </a>
            <a href="https://www.instagram.com/charcoal_nesia" target="_blank" rel="noopener noreferrer" className="border border-gray-300 bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <svg className="w-[18px] h-[18px] text-gray-300" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </div>
        </section>

        {/* ===== Charcoalnesia's Team ===== */}
        <section id="charcoalnesia-team" className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#222222] p-6 md:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />
            <p className="text-sm font-medium italic tracking-[0.35px] text-[#60A5FF]">Charcoalnesia&apos;s Team</p>
          </div>
          <h2 className="text-[20px] font-semibold text-white mt-1">The People Behind Our Success</h2>
          <p className="text-base text-[#EFA12D] mt-1">From Indonesia to the World, With Dedication and Care</p>

          {/* Mobile/Tablet: horizontal scroll */}
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 mt-8 min-[1420px]:hidden">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-[260px] shrink-0 snap-start">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={260}
                    height={333}
                    className="w-[260px] h-auto object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-sm font-semibold text-white">{member.name}</h4>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: flex-wrap grid (>1420px) */}
          <div className="hidden min-[1420px]:flex min-[1420px]:flex-wrap min-[1420px]:justify-center min-[1420px]:gap-x-0 min-[1420px]:gap-y-4 mt-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-fit">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={260}
                    height={333}
                    className="w-[260px] h-auto object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-sm font-semibold text-white">{member.name}</h4>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== What We Do? ===== */}
        <section id="what-we-do" className="mt-2 scroll-mt-28 space-y-4 rounded-xl bg-[#222222] p-5 lg:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />
            <p className="text-sm font-medium italic tracking-[0.35px] text-[#60A5FF]">What We Do?</p>
          </div>
          <h2 className="text-[20px] font-semibold text-white">
            Bringing Indonesia&apos;s Finest Charcoal to the Global Market
          </h2>
          <p className="text-base text-[#EFA12D]">Delivering Premium Products With Integrity, Innovation, And Care</p>

          <div className="space-y-4 text-base leading-[26px] lg:text-lg text-[#c0c5cc]">
            <p>
              At Charcoalnesia, we are dedicated to producing and exporting premium charcoal products
              that are tailored to meet the demands of international markets. Our product line covers a wide
              range of charcoal briquettes, including coconut shell, BBQ, sawdust, white charcoal (Binchotan),
              and natural hardwood charcoal. Each product is manufactured with precision and strict quality
              control, combining traditional expertise with modern technology to ensure consistent heat, long
              burning duration, minimal ash, and eco-friendly performance.
            </p>
            <p>
              What sets us apart is the quality of our products and the flexibility we offer to our clients.
              We provide OEM and private label services, along with customised briquette sizes, shapes, and
              packaging to support different branding strategies. With three strategically located factories
              in Java and direct access to major international ports, we guarantee efficient production, smooth
              logistics, and timely delivery to clients worldwide.
            </p>
            <p>
              At Charcoalnesia, we are not just a supplier but a trusted partner. Our mission is to deliver
              premium charcoal while building long-term relationships based on professionalism, trust, and
              mutual growth. By focusing on quality, sustainability, and reliability, we proudly represent
              Indonesia&apos;s finest natural resources in the global charcoal industry.
            </p>
          </div>
        </section>

        {/* ===== Legal & Certificates ===== */}
        <section id="legal-certificate" className="mt-10 scroll-mt-28 space-y-6 rounded-xl bg-[#222222] p-5 lg:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />
            <p className="text-sm font-medium italic tracking-[0.35px] text-[#60A5FF]">Legal & Certificates</p>
          </div>
          <h2 className="text-[20px] font-semibold text-white">Trusted Legality, Proven Quality</h2>
          <p className="text-base text-[#EFA12D]">Comprehensive Legal Documents and Verified Lab Certificates</p>

          {/* Mobile: horizontal scroll */}
          <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-3 lg:hidden">
            {certificates.slice(0, 4).map((cert, i) => (
              <div key={i} className="w-[250px] shrink-0">
                <div className="relative overflow-hidden" style={{ height: "377px" }}>
                  <Image
                    src={cert.image}
                    alt={cert.label}
                    fill
                    sizes="250px"
                    className="object-contain"
                  />
                  <Image
                    src="https://djavacoal.com/images/watermark-legal.png"
                    alt=""
                    fill
                    sizes="250px"
                    className="object-contain opacity-30 pointer-events-none"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-gray-300">{cert.label}</p>
              </div>
            ))}
          </div>

          {/* Desktop: 4-column grid */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-4">
            {certificates.map((cert, i) => (
              <div key={i} className="w-[250px] shrink-0">
                <div className="relative overflow-hidden" style={{ height: "377px" }}>
                  <Image
                    src={cert.image}
                    alt={cert.label}
                    fill
                    sizes="250px"
                    className="object-contain"
                  />
                  <Image
                    src="https://djavacoal.com/images/watermark-legal.png"
                    alt=""
                    fill
                    sizes="250px"
                    className="object-contain opacity-30 pointer-events-none"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-gray-300">{cert.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Our Factory ===== */}
        <section id="factory" className="mt-10 scroll-mt-28 space-y-6 rounded-xl bg-[#222222] p-5 lg:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />
            <p className="text-sm font-medium italic tracking-[0.35px] text-[#60A5FF]">Our Factory</p>
          </div>
          <h2 className="text-[20px] font-semibold text-white">Where Quality Meets Production</h2>
          <p className="text-base text-[#EFA12D]">Three Factories Across Java, Ready To Serve Global Markets</p>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="relative h-56 w-full overflow-hidden rounded-md sm:h-72 md:h-80 lg:h-[520px] lg:max-w-3/4">
              <Image
                src="/images/factory/factory-visit.jpg"
                alt="Charcoal Production Factory Charcoalnesia"
                fill
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-sm leading-[22.75px] text-[#c0c5cc]">
                At Charcoalnesia, we take pride in operating three factories across Java that combine
                years of expertise, strict quality control, and modern production standards to deliver
                world-class charcoal products. Our facilities are equipped to handle large-scale production
                while maintaining the consistency and excellence that our global customers trust.
              </p>
              <a
                href="https://wa.me/+628818786988?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20factory%20visit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[54px] w-full items-center justify-center gap-3 rounded-lg bg-[#1B7308] text-sm font-semibold text-white transition hover:bg-[#1c7a09] md:w-[325px]"
              >
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                Schedule a Visit
              </a>
            </div>
          </div>
        </section>

        {/* ===== Countries We Have Exported To ===== */}
        <section id="countries-exported" className="mt-2 scroll-mt-28 space-y-4 rounded-xl bg-[#222222] p-5 lg:p-10">
          <h3 className="text-[18px] font-semibold text-white">Countries We Have Exported To</h3>
          <p className="text-sm leading-[22.75px] text-[#c0c5cc]">
            Charcoalnesia has successfully exported premium charcoal products to more than 20 countries
            across the Middle East, Asia, Europe, Africa, Australia, and the Americas. Our global reach
            demonstrates the trust international partners place in our quality, reliability, and professionalism.
            From Saudi Arabia to Brazil, from Japan to the USA, Charcoalnesia continues to serve the world with
            the finest Indonesian charcoal.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["SA","LB","IR","IQ","BH","JO","KW","OM","YE","TR","JP","KR","AU","DE","BE","ES","US","BR","RU","GN","SL","IN","PK"].map((code) => (
              <Image
                key={code}
                src={`https://flagsapi.com/${code}/flat/64.png`}
                alt={code}
                width={57}
                height={32}
                className="object-cover rounded-sm lg:h-16"
                unoptimized
              />
            ))}
          </div>
        </section>

        {/* ===== Charcoalnesia's Gallery ===== */}
        <section id="our-gallery" className="mt-10 scroll-mt-28 space-y-6 rounded-xl bg-[#222222] p-5 lg:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />
            <p className="text-sm font-medium italic tracking-[0.35px] text-[#60A5FF]">Charcoalnesia&apos;s Gallery</p>
          </div>
          <h2 className="text-[20px] font-semibold text-white">Our Story in Pictures</h2>
          <p className="text-base text-[#EFA12D]">Experience The Dedication Behind Every Charcoal We Produce</p>

          {/* Video Reels */}
          <h3 className="text-lg font-semibold text-[#EFA12D] mt-6">Video Reels</h3>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
            {reelVideos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[280px] shrink-0 snap-start overflow-hidden rounded-lg"
                style={{ aspectRatio: "9/16" }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-14 h-14 rounded-full bg-[#202020]/50 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Factory & Product Gallery Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Factory Gallery */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#EFA12D] lg:text-2xl">Charcoalnesia&apos;s Factory Gallery</h3>
              <div className="relative aspect-square w-full">
                <Image
                  src={factoryGalleryFeatured}
                  alt="Factory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2">
                {factoryGalleryThumbs.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`Factory ${i + 1}`}
                    width={220}
                    height={220}
                    className="h-[180px] min-w-[180px] shrink-0 snap-start rounded-lg object-cover lg:h-[220px] lg:min-w-[220px]"
                  />
                ))}
              </div>
            </div>

            {/* Product Gallery */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#EFA12D] lg:text-2xl">Charcoalnesia&apos;s Products Gallery</h3>
              <div className="relative aspect-square w-full">
                <Image
                  src={productGalleryFeatured}
                  alt="Products"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2">
                {productGalleryThumbs.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`Product ${i + 1}`}
                    width={220}
                    height={220}
                    className="h-[180px] min-w-[180px] shrink-0 snap-start rounded-lg object-cover lg:h-[220px] lg:min-w-[220px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
}
