"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { FaWhatsapp, FaFilePdf, FaFilter } from "react-icons/fa";
import { getProductBySlug, getProducts, getPackaging } from "@/lib/data";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = getProducts();
  const allPackaging = getPackaging();
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <div className="bg-primary">
      {/* Banner */}
      <section className="bg-[#151515] text-white relative w-full overflow-hidden">
        <div className="relative h-48 w-full md:h-72">
          <img
            src="https://djavacoal.com/images/bg-banner-OurProduct.png"
            alt="Our Products Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-2xl font-semibold italic text-white md:text-4xl">Products</h1>
          </div>
        </div>
      </section>

      {/* Mobile Filter Dropdown */}
      <div className="bg-primary sticky top-24 z-50 flex items-center gap-3 border-b border-[#474747] px-4 py-3 lg:hidden">
        <FaFilter className="w-5 h-5 text-white/70" />
        <select
          className="flex-1 bg-transparent border border-[#3a3a3a] rounded px-4 py-2 text-sm text-white outline-none"
          value={`/our-products/${slug}`}
          onChange={(e) => { window.location.href = e.target.value; }}
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
        <div className="mx-auto max-w-7xl px-5 py-0 pb-10 md:px-10 md:py-16 lg:mx-0 lg:max-w-none lg:px-5 lg:py-10 lg:mr-10">
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
                <div className="group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl aspect-video w-[93vw]">
                  <img
                    src={product.images[activeThumb] || product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveThumb(i)}
                      className={`aspect-square min-h-40 min-w-40 shrink-0 overflow-hidden rounded-lg transition-all sm:min-h-[180px] sm:min-w-[180px] sm:rounded-xl ${
                        i === activeThumb
                          ? "border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.25)]"
                          : "hover:ring-2 hover:ring-[#EFA12D]"
                      }`}
                      style={{
                        background: i === activeThumb
                          ? "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.188) 100%)"
                          : undefined,
                      }}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex w-full flex-col gap-10 lg:mt-0 lg:flex-1">
                {/* Product Name */}
                <h2 className="text-[32px] font-bold leading-8 text-[#EFA12D]">
                  {product.name}
                </h2>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#393939]" />

                {/* Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white">Description:</h3>
                  <p className="text-justify text-base leading-[23px] text-[#B3B3B3]">
                    {product.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#393939]" />

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://assets.djavacoal.com/product-catalogue/qxhZP9DNa6PfcEX9lG8EF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#D28006] text-white px-4 py-4 rounded-[6px] text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    <FaFilePdf className="w-4 h-4" />
                    Catalogue
                  </a>
                  <a
                    href="https://wa.me/+6282126572600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#168738] text-white px-4 py-4 rounded-[6px] text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Ask More
                  </a>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#393939]" />

                {/* Specification & Lab Test */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white">Specification & Lab. Test:</h3>
                  {product.specImages ? (
                    <div className="grid grid-cols-1 gap-1 sm:gap-4 md:grid-cols-2">
                      {product.specImages.map((img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Specification ${i + 1}`}
                          className="w-full h-auto"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-1 sm:gap-4 md:grid-cols-2">
                      {Object.entries(product.specifications).map(([key, value], i) => (
                        <div
                          key={key}
                          className="flex items-center justify-between px-4 py-4 border border-[#848484]"
                          style={{ backgroundColor: i % 2 === 0 ? "#262626" : "#151515" }}
                        >
                          <span className="text-sm font-medium text-white">{key}</span>
                          <span className="text-sm text-[#B3B3B3]">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#393939]" />

                {/* Shape & Size */}
                <div className="flex flex-col gap-10">
                  <h3 className="text-xl font-bold text-white">Shape & Size:</h3>
                  <div className="grid grid-cols-[420px_1fr] items-start justify-start gap-10 max-[1840px]:grid-cols-1">
                    <div className="flex flex-col gap-10">
                      {product.shapes.map((shape, i) => (
                        <div key={i} className="flex items-start gap-10 transition-all duration-300">
                          <div
                            className="flex h-[130px] w-[130px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[6px] border border-[#414141]"
                            style={{
                              background: "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.25) 100%)",
                            }}
                          >
                            {product.shapeImages && (product.shapeImages as Record<string, string>)[shape.type] ? (
                              <img
                                src={(product.shapeImages as Record<string, string>)[shape.type]}
                                alt={shape.type}
                                className="max-h-[110px] max-w-[110px] object-contain"
                              />
                            ) : (
                              <span className="text-white/20 text-xs">{shape.type}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white">{shape.type}:</h4>
                            <ul className="mt-1 space-y-0.5">
                              {shape.sizes.map((size, j) => (
                                <li key={j} className="text-base text-[#B3B3B3]">{size}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#393939]" />

                {/* Packaging */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white">Packaging Option:</h3>
                  <div className="flex flex-row gap-5 overflow-x-auto sm:grid sm:grid-cols-2 min-[1300px]:grid-cols-3">
                    {product.packaging.map((pkgName, i) => {
                      const pkgData = allPackaging.find(
                        (p) => p.name.toLowerCase() === pkgName.toLowerCase()
                      );
                      return (
                        <div key={i} className="group relative flex max-w-[330px] shrink-0 flex-col gap-5 transition-all duration-300 md:w-full md:min-w-0 lg:gap-5">
                          <div
                            className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[10px] border border-[#414141]"
                            style={{ background: "radial-gradient(circle at center, #000 0%, #171717 50%, rgba(255,255,255,0.25) 100%)" }}
                          >
                            {pkgData ? (
                              <img
                                src={pkgData.image}
                                alt={pkgName}
                                className="h-full w-full object-contain p-4"
                              />
                            ) : (
                              <span className="text-white/20 text-xs">{pkgName}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-[#EFA12D]">{pkgName}</h4>
                            <p className="text-base leading-[21.76px] text-[#C6C6C6]">
                              {pkgData?.description || "Packaging option available for this product."}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#393939]" />

                {/* Detail Information */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white">Detail Information:</h3>
                  <div className="flex w-full flex-col overflow-hidden border border-[#848484]">
                    {[
                      { label: "MOQ:", value: product.moq },
                      { label: "Packaging:", value: product.packaging.join(" / ") },
                      { label: "Payment Terms:", value: "Telegraphic Transfer (T/T)" },
                      { label: "Shipment Terms:", value: "Freight on Board (FOB)" },
                      { label: "Production Capacity:", value: product.capacity },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-[minmax(100px,1fr)_minmax(200px,2fr)] border-b border-[#848484] last:border-b-0`}
                        style={{ backgroundColor: i % 2 === 0 ? "#262626" : "#151515" }}
                      >
                        <div className="border-r border-[#848484] px-3 py-4 text-base font-normal text-white">
                          {row.label}
                        </div>
                        <div className="px-3 py-4 text-base font-normal text-white">
                          {row.value}
                        </div>
                      </div>
                    ))}
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
