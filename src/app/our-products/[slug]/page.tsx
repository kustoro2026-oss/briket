"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { FaWhatsapp, FaFileAlt, FaFlask, FaBoxOpen } from "react-icons/fa";
import { getProductBySlug, getProducts, getPackaging, getQualityGrades } from "@/lib/data";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = getProducts();
  const allPackaging = getPackaging();
  const grades = getQualityGrades();
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <div className="bg-primary">
      {/* Banner */}
      <section className="bg-[#1C1C1C] text-white relative w-full overflow-hidden">
        <div className="relative h-48 w-full md:h-72 bg-[#161616]">
          <Image
            src="/images/products/coconut-shells-charcoal-briquettes.PNG"
            alt="Our Products"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1
              className="text-2xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              Products
            </h1>
          </div>
        </div>
      </section>

      {/* Mobile Product Switcher */}
      <div className="bg-primary sticky top-24 z-50 flex items-center gap-3 border-b border-[#474747] px-4 py-3 lg:hidden">
        <select
          aria-label="Select product"
          className="flex-1 bg-transparent border border-[#3a3a3a] rounded px-4 py-2 text-sm text-white outline-none"
          value={`/our-products/${slug}`}
          onChange={(e) => {
            router.push(e.target.value);
          }}
        >
          {allProducts.map((p) => (
            <option key={p.id} value={`/our-products/${p.slug}`} className="bg-[#151515]">
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Main Content */}
      <section className="bg-primary relative w-full text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
          <div className="flex gap-x-10">
            {/* Left Sidebar - Product List (Desktop) */}
            <div className="hidden max-w-[280px] min-w-[200px] flex-1 lg:block">
              <div className="flex flex-col gap-1 sticky top-28">
                <div className="bg-[#222222] py-3">
                  <h3 className="px-5 text-sm font-semibold text-white">Our Products</h3>
                </div>
                {allProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/our-products/${p.slug}`}
                    className={`px-5 py-3 text-[13px] transition-all duration-200 ${
                      p.slug === slug
                        ? "bg-[#9D7B19] text-white font-semibold"
                        : "bg-[#222222] text-[#B3B3B3] hover:bg-[#3B5952] hover:text-white hover:font-semibold"
                    }`}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Product Detail */}
            <div className="min-w-[350px] flex-3 lg:max-w-full">
              {/* Gallery */}
              <div className="flex flex-col gap-2">
                {/* Main Image */}
                <div className="group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl aspect-video w-full">
                  <Image
                    src={product.images[activeThumb] || product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 93vw, 60vw"
                    className="object-cover"
                  />
                </div>
                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveThumb(i)}
                        className={`relative aspect-square min-h-40 min-w-40 shrink-0 overflow-hidden rounded-lg transition-all sm:min-h-[180px] sm:min-w-[180px] sm:rounded-xl ${
                          i === activeThumb
                            ? "border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.25)]"
                            : "hover:ring-2 hover:ring-[#EFA12D]"
                        }`}
                        style={{
                          background:
                            i === activeThumb
                              ? "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.188) 100%)"
                              : undefined,
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${product.name} ${i + 1}`}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-10 flex w-full flex-col gap-10">
                {/* Product Name + Application */}
                <div>
                  <h2
                    className="text-[32px] font-bold leading-8 text-[#EFA12D]"
                    style={{ fontFamily: "var(--font-josefin-sans)" }}
                  >
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-wider text-[#B3B3B3]">
                    Application: {product.application}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#393939]" />

                {/* Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white">Description</h3>
                  <p className="text-justify text-base leading-[23px] text-[#B3B3B3]">
                    {product.description}
                  </p>
                  <ul className="mt-1 space-y-1.5 text-base text-[#C6C6C6]">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EFA12D]" />
                      Material: {product.material}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EFA12D]" />
                      {product.binder}
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#393939]" />

                {/* Commercial Specification Table */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">Commercial Specification</h3>
                    <p className="mt-1 text-sm text-[#8a8a8a]">
                      Available grades confirmed per order and shipment. Final values are subject to
                      the applicable COA.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-sm">
                      <thead>
                        <tr className="bg-[#222222] text-left">
                          <th className="border border-[#393939] px-4 py-3 font-semibold text-white">
                            Parameter
                          </th>
                          {grades.map((g) => (
                            <th
                              key={g.name}
                              className="border border-[#393939] px-4 py-3 font-semibold text-[#EFA12D]"
                            >
                              {g.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: "Ash Content", value: (g: (typeof grades)[number]) => g.ash },
                          {
                            label: "Volatile Matter",
                            value: (g: (typeof grades)[number]) => g.volatile,
                          },
                          {
                            label: "Moisture",
                            value: (g: (typeof grades)[number]) => g.moisture,
                          },
                          {
                            label: "Fixed Carbon",
                            value: (g: (typeof grades)[number]) => g.fixedCarbon,
                          },
                          {
                            label: "Calorific Value",
                            value: (g: (typeof grades)[number]) => g.calorific,
                          },
                          {
                            label: "Ash Colour",
                            value: (g: (typeof grades)[number]) => g.ashColour,
                          },
                        ].map((row, i) => (
                          <tr key={row.label} className={i % 2 === 0 ? "bg-[#1C1C1C]" : "bg-[#161616]"}>
                            <td className="border border-[#393939] px-4 py-3 font-medium text-white">
                              {row.label}
                            </td>
                            {grades.map((g) => (
                              <td
                                key={g.name}
                                className="border border-[#393939] px-4 py-3 text-[#B3B3B3]"
                              >
                                {row.value(g)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#393939]" />

                {/* Packaging Options */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white">Packaging Options</h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {product.packaging.map((pkgName, i) => {
                      const pkgData = allPackaging.find(
                        (p) => p.name.toLowerCase() === pkgName.toLowerCase()
                      );
                      return (
                        <div
                          key={i}
                          className="flex flex-col gap-4 rounded-[10px] border border-[#414141] bg-[#1C1C1C] p-5"
                        >
                          <div className="flex items-center gap-3">
                            <FaBoxOpen className="h-5 w-5 text-[#EFA12D]" />
                            <h4 className="text-lg font-bold text-[#EFA12D]">{pkgName}</h4>
                          </div>
                          {pkgData && (
                            <div className="relative aspect-video overflow-hidden rounded-[6px] border border-[#333]">
                              <Image
                                src={pkgData.image}
                                alt={pkgData.name}
                                fill
                                sizes="(max-width: 640px) 93vw, 33vw"
                                className="object-contain bg-[#151515] p-2"
                              />
                            </div>
                          )}
                          <p className="text-sm leading-[21px] text-[#C6C6C6]">
                            {pkgData?.description || "Packaging option available for this product."}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#393939]" />

                {/* COA / SDS */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white">Documents &amp; Testing</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-4 rounded-[10px] border border-[#414141] bg-[#1C1C1C] p-5">
                      <FaFlask className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#EFA12D]" />
                      <p className="text-sm leading-[21px] text-[#C6C6C6]">{product.coaNote}</p>
                    </div>
                    <div className="flex items-start gap-4 rounded-[10px] border border-[#414141] bg-[#1C1C1C] p-5">
                      <FaFileAlt className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#EFA12D]" />
                      <p className="text-sm leading-[21px] text-[#C6C6C6]">
                        Technical and safety documents (COA, SDS) are provided according to the
                        order and shipment configuration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#393939]" />

                {/* Evaluation Sample + CTAs */}
                <div className="rounded-[10px] border border-[#414141] bg-[#222222] p-6">
                  <h3 className="text-xl font-bold text-white">Evaluation Sample &amp; Quotation</h3>
                  <p className="mt-2 text-sm leading-[21px] text-[#C6C6C6]">
                    Product evaluation samples are available for qualified buyers. Sample
                    configuration is subject to availability. International courier freight is
                    arranged according to the agreed sampling terms.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/628212991650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#168738] text-white px-5 py-3 rounded-[6px] text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      Request Evaluation Sample
                    </a>
                    <Link
                      href="/contact-us"
                      className="flex items-center gap-2 bg-[#D28006] text-white px-5 py-3 rounded-[6px] text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      <FaFileAlt className="h-4 w-4" />
                      Request for Quotation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
