import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardCheck, FaTemperatureHigh, FaRulerCombined, FaShip } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Charcoalnesia",
  description:
    "About Charcoalnesia - an Indonesian company engaged in the production and export of coconut shell charcoal briquettes for shisha, hookah, and BBQ applications in international markets.",
};

/* Locked QC checkpoints - displayed as visual cards, not duplicated as bullets */
const qcCheckpoints = [
  {
    icon: FaClipboardCheck,
    title: "RAW MATERIAL SELECTION & SCREENING",
    copy: "Selected coconut-shell charcoal is screened to reduce impurities and support the agreed ash specification.",
  },
  {
    icon: FaTemperatureHigh,
    title: "DRYING TEMPERATURE CONTROL",
    copy: "Drying conditions are monitored to achieve the agreed moisture specification.",
  },
  {
    icon: FaRulerCombined,
    title: "DIMENSIONAL INSPECTION",
    copy: "Briquette dimensions and cutting consistency are checked against the approved product and packaging specification.",
  },
  {
    icon: FaShip,
    title: "LOGISTICS CHECK",
    copy: "Final cargo and documentation checks are completed to support compliance with applicable maritime dangerous-goods requirements.",
  },
];

export default function AboutCompanyPage() {
  return (
    <div className="bg-[#1C1C1C]">
      {/* Banner */}
      <section className="relative w-full overflow-hidden bg-[#1C1C1C] text-white h-48 md:h-72">
        <Image
          src="/images/about/about-banner.png"
          alt="Charcoalnesia About"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1
            className="text-2xl font-semibold italic text-white md:text-4xl"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            About Charcoalnesia
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        {/* ===== LOCKED ABOUT COPY ===== */}
        <h2
          className="mb-6 text-[24px] font-bold text-white md:text-[30px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          ABOUT <span className="text-[#EFA12D]">CHARCOALNESIA</span>
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-[15px] leading-[26px] text-[#E0DFE2]">
              Charcoalnesia is an Indonesian company engaged in the production and export of
              coconut shell charcoal briquettes for shisha, hookah, and BBQ applications in
              international markets.
            </p>
            <p className="text-[15px] leading-[26px] text-[#E0DFE2]">
              The foundation of our briquettes begins with the quality of the raw material. We use
              carefully selected coconut shells sourced from established coconut-producing regions
              across Indonesia, including Sulawesi and North Sumatra. The charcoal material used in
              our briquettes is made from 100% coconut shell, with natural tapioca starch used as a
              binder to help form dense, durable briquettes and maintain structural integrity during
              handling and high-temperature use.
            </p>
          </div>
          <div className="w-full shrink-0 lg:w-[320px]">
            <div className="overflow-hidden rounded-2xl border border-[#EFA12D]/30">
              <Image
                src="/images/products/coconut-shells-charcoal-briquettes.PNG"
                alt="Coconut shell charcoal briquettes - 100% coconut shell charcoal material with natural tapioca starch binder"
                width={640}
                height={640}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-2 text-center text-[12px] text-[#909090]">
              Charcoal Material: 100% Coconut Shell Charcoal Material | Natural Binder: Tapioca
              Starch
            </p>
          </div>
        </div>

        {/* ===== QUALITY CONTROL THROUGHOUT OPERATIONS ===== */}
        <h2
          className="mt-14 mb-6 text-[22px] font-bold text-white md:text-[26px]"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          QUALITY CONTROL <span className="text-[#EFA12D]">THROUGHOUT OPERATIONS</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {qcCheckpoints.map((checkpoint) => (
            <div
              key={checkpoint.title}
              className="flex items-start gap-4 rounded-xl border border-[#EFA12D]/25 bg-[#222222] p-5 transition-all duration-300 hover:border-[#EFA12D]"
            >
              <checkpoint.icon className="mt-0.5 size-7 shrink-0 text-[#EFA12D]" />
              <div>
                <h3
                  className="text-[13px] font-bold tracking-wide text-white md:text-sm"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  {checkpoint.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[20px] text-[#B3B3B3]">{checkpoint.copy}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/our-products"
            className="rounded-[40px] bg-secondary px-10 py-4 text-center text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#B87C22]"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            VIEW PRODUCTS
          </Link>
          <Link
            href="/contact-us"
            className="rounded-[40px] border border-[#EFA12D] px-10 py-4 text-center text-[15px] font-bold text-[#EFA12D] transition-all duration-300 hover:bg-[#EFA12D] hover:text-black"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            REQUEST QUOTATION
          </Link>
        </div>
      </div>
    </div>
  );
}
