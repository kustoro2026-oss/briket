"use client";

import { useState } from "react";
import Image from "next/image";
import { getFaqs, getProductionSteps, getPackaging, getQualityGrades } from "@/lib/data";

const sections = [
  { id: "production-process", label: "Production Process" },
  { id: "quality-grades", label: "Quality Grades" },
  { id: "moq-payment-terms", label: "MOQ & Payment Terms" },
  { id: "shipment-terms", label: "Shipment Terms" },
  { id: "packaging-info", label: "Packaging Info" },
  { id: "export-dg", label: "Export & DG Information" },
  { id: "faqs", label: "FAQ" },
];

/* Export documents - shown "as required / when applicable" */
const exportDocuments = [
  { category: "Technical", items: "COA / ROA, SDS/MSDS, relevant laboratory report" },
  {
    category: "DG / Safety",
    items: "Dangerous Goods Declaration + Packing Certificate, shipment-specific safety documents",
  },
  {
    category: "Production / Packing",
    items: "Weathering evidence, packing temperature, vanning/survey evidence where required",
  },
  { category: "Commercial", items: "Commercial Invoice, Packing List" },
  { category: "Origin", items: "Certificate of Origin / SKA when applicable" },
  { category: "Shipping", items: "Bill of Lading and carrier-specific documents" },
];

export default function ProductionInfoPage() {
  /* Sync the active sidebar item with a direct hash link, e.g. /production-info#export-dg */
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      if (sections.some((s) => s.id === id)) return id;
    }
    return "production-process";
  });
  const faqs = getFaqs();
  const steps = getProductionSteps();
  const packaging = getPackaging();
  const grades = getQualityGrades();

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary">
      {/* Banner */}
      <section className="bg-[#1C1C1C] text-white relative w-full overflow-hidden">
        <div className="relative h-48 w-full md:h-72">
          <Image
            src="/images/production/production-banner.png"
            alt="Production Information"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1
              className="text-2xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-josefin-sans)" }}
            >
              Production Info
            </h1>
          </div>
        </div>
      </section>

      {/* Mobile Filter Dropdown */}
      <div className="bg-primary sticky top-24 z-40 flex items-center gap-3 border-b border-[#2a2a2a] px-4 py-3 lg:hidden">
        <select
          className="flex w-full items-center justify-between rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-2 text-sm text-white outline-none"
          value={activeSection}
          onChange={(e) => scrollTo(e.target.value)}
        >
          {sections.map((s) => (
            <option key={s.id} value={s.id} className="bg-[#151515]">
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Content Area: Sidebar + Main */}
      <div className="mx-auto max-w-7xl px-5 pb-10 md:px-10 md:py-16 lg:mx-0 lg:max-w-none lg:px-0 lg:py-0 lg:mr-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar Navigation (Desktop) */}
          <div className="hidden lg:sticky lg:top-24 lg:block lg:self-start lg:py-16">
            <div className="bg-[#222222]">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`my-0 flex w-full items-center justify-between px-5 py-4 text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-[#9D7B19] text-white font-semibold"
                      : "bg-[#222222] text-gray-300 hover:bg-[#3B5952] hover:font-bold hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-12">
            {/* ===== Production Process ===== */}
            <section id="production-process" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Production Process</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Production Process</h2>
                  <p className="mt-3 text-sm leading-[22px] text-[#CCCCCC]">
                    Production in Indonesia is coordinated according to defined product
                    specifications, quality-control checkpoints, packaging requirements, and export
                    preparation. The charcoal material is 100% coconut shell charcoal; natural
                    tapioca starch is used as a binder.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 px-5 pb-8 md:grid-cols-3 md:px-10">
                  {steps.map((step) => (
                    <div
                      key={step.step}
                      className="flex flex-col justify-start rounded-xl transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="relative mb-4 w-full aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={step.illustration}
                          alt={step.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover rounded-xl"
                        />
                        <div className="absolute top-0 left-0 z-10 h-1/3 w-full rounded-t-xl bg-gradient-to-b from-black/70 to-transparent" />
                        <div className="absolute top-3 left-1/2 z-20 -translate-x-1/2">
                          <div className="bg-[#EFA12D] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                            {step.step}
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-1 text-sm font-semibold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-[#CCCCCC]">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Quality Grades ===== */}
            <section id="quality-grades" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Quality Grades</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Commercial Specification Grades</h2>
                  <p className="mt-3 text-sm leading-[22px] text-[#CCCCCC]">
                    Material: 100% Coconut Shell Charcoal Material | Natural Binder: Tapioca Starch
                  </p>
                </div>
                <div className="overflow-x-auto px-5 pb-8 md:px-10">
                  <table className="w-full min-w-[720px] border-collapse text-center text-[13px] md:text-sm">
                    <thead>
                      <tr className="bg-[#1D1D1D] text-white">
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Grade</th>
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Ash Content</th>
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Volatile Matter</th>
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Moisture</th>
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Fixed Carbon</th>
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Gross Calorific Value</th>
                        <th className="border border-[#3a3a3a] px-3 py-3 font-bold">Ash Colour</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((grade, idx) => (
                        <tr key={grade.name} className={idx === 0 ? "bg-[#EFA12D]/10" : "bg-black/20"}>
                          <td className="border border-[#3a3a3a] px-3 py-3 font-bold text-[#EFA12D]">
                            {grade.name}
                          </td>
                          <td className="border border-[#3a3a3a] px-3 py-3 text-[#CCCCCC]">{grade.ash}</td>
                          <td className="border border-[#3a3a3a] px-3 py-3 text-[#CCCCCC]">{grade.volatile}</td>
                          <td className="border border-[#3a3a3a] px-3 py-3 text-[#CCCCCC]">{grade.moisture}</td>
                          <td className="border border-[#3a3a3a] px-3 py-3 text-[#CCCCCC]">{grade.fixedCarbon}</td>
                          <td className="border border-[#3a3a3a] px-3 py-3 text-[#CCCCCC]">{grade.calorific}</td>
                          <td className="border border-[#3a3a3a] px-3 py-3 text-[#CCCCCC]">{grade.ashColour}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-xs leading-[18px] text-[#909090] md:text-[13px]">
                    Use these as website commercial grade references. Batch-specific actual results
                    remain shown only in the applicable COA / laboratory report. Latest applicable
                    COA available upon request.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== MOQ & Payment Terms ===== */}
            <section id="moq-payment-terms" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">MOQ & Payment Terms</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Commercial Terms</h2>
                </div>
                <div className="px-5 pb-8 md:px-10">
                  <table className="w-full border-collapse">
                    <tbody>
                      {[
                        {
                          label: "MOQ:",
                          value:
                            "Confirmed by product grade, packaging configuration, and production schedule.",
                        },
                        {
                          label: "Payment Method:",
                          value: "Confirmed in the quotation / Proforma Invoice.",
                        },
                        {
                          label: "Payment Structure:",
                          value:
                            "Follows the current commercial framework and is stated in the quotation / Proforma Invoice.",
                        },
                        {
                          label: "Lead Time:",
                          value:
                            "Starts after PI / payment / artwork / specification confirmation and is confirmed in the quotation.",
                        },
                        {
                          label: "Samples:",
                          value:
                            "Product evaluation samples are available for qualified buyers under agreed sampling terms.",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-[#848484]"
                          style={{ backgroundColor: i % 2 === 0 ? "#262626" : "#323232" }}
                        >
                          <td className="py-3 px-3 text-sm text-white font-semibold w-[200px] border-r border-[#848484] align-top">
                            {row.label}
                          </td>
                          <td className="py-3 px-3 text-sm text-[#CCCCCC]">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ===== Shipment Terms ===== */}
            <section id="shipment-terms" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Shipment Terms</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Shipment Terms</h2>
                </div>
                <div className="px-5 pb-8 md:px-10">
                  <ul className="space-y-4 text-sm leading-[22px] text-[#CCCCCC]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#EFA12D]" />
                      Available shipment terms are confirmed per quotation and destination.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#EFA12D]" />
                      If FOB is used: &quot;FOB [Named Indonesian Port], Incoterms 2020&quot;.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#EFA12D]" />
                      CFR/CIF may be offered where routing and carrier acceptance are confirmed.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#EFA12D]" />
                      Charcoal bookings remain subject to DG, packing, carrier, route, and booking
                      acceptance requirements.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ===== Packaging Info ===== */}
            <section id="packaging-info" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Packaging Info</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Packaging Options</h2>
                  <p className="mt-3 text-sm leading-[22px] text-[#CCCCCC]">
                    Inner pack net and gross weight, master carton weight and dimensions, and
                    estimated container loading are calculated from the actual packaging
                    configuration and confirmed in the quotation.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 px-5 pb-8 md:grid-cols-3 md:px-10">
                  {packaging.map((pkg) => (
                    <div key={pkg.id} className="group">
                      <div className="relative aspect-square max-h-none w-full max-w-none overflow-hidden rounded-xl transition-all duration-300">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover rounded-xl"
                        />
                        <div className="absolute top-0 left-0 z-10 h-1/3 w-full rounded-t-xl bg-gradient-to-b from-black/70 to-transparent" />
                      </div>
                      <h3 className="mt-3 text-base font-semibold text-[#EFA12D]">{pkg.name}</h3>
                      <p className="text-sm leading-relaxed text-[#CCCCCC] mt-1">{pkg.description}</p>
                    </div>
                  ))}
                </div>

                {/* Private Label / OEM - locked copy */}
                <div className="px-5 pb-8 md:px-10">
                  <div className="border-t border-[#848484] pt-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-full md:w-[350px] aspect-video overflow-hidden rounded-xl">
                        <Image
                          src="/images/instagram/packaging/01-private-label.jpg"
                          alt="Private Label Packaging"
                          fill
                          sizes="350px"
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#EFA12D] mb-3">
                          PRIVATE LABEL / OEM PACKAGING
                        </h3>
                        <p className="text-sm leading-relaxed text-[#CCCCCC]">
                          Custom branding and packaging are available subject to artwork approval,
                          packaging specification, MOQ, and production lead time. Commercial details
                          are confirmed in the quotation / Proforma Invoice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== Export & DG Information ===== */}
            <section id="export-dg" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Export Information</span>
                  <h2 className="text-xl font-semibold text-white mt-1">IMDG-Compliant Maritime Shipping</h2>
                  <p className="mt-3 text-sm leading-[22px] text-[#CCCCCC]">
                    Charcoal shipments are prepared in accordance with IMDG Code requirements (UN
                    1361, Class 4.2), supported by applicable SDS and self-heating test documentation
                    to facilitate safe and compliant international sea transport.
                  </p>
                </div>
                <div className="px-5 pb-8 md:px-10">
                  <h3 className="mb-4 text-sm font-bold tracking-wide text-white">
                    DOCUMENTS — AS REQUIRED / WHEN APPLICABLE
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {exportDocuments.map((doc) => (
                      <div key={doc.category} className="rounded-xl border border-[#3a3a3a] bg-black/20 p-4">
                        <h4 className="mb-1.5 text-[13px] font-bold text-[#EFA12D]">{doc.category}</h4>
                        <p className="text-[12px] leading-[18px] text-[#CCCCCC] md:text-[13px]">
                          {doc.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ===== FAQ ===== */}
            <section id="faqs" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222]">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">FAQ</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Frequently Asked Questions</h2>
                </div>
                <div className="flex flex-col gap-3 px-5 pb-8 md:px-10">
                  {faqs.map((faq) => (
                    <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/* FAQ Item Component */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-16 w-full items-center justify-between px-4 py-3 text-left bg-[#333D43] hover:bg-[#6C694E] text-white text-base transition-colors duration-300"
      >
        <span>{question}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="bg-[#2a2a2a] px-4 py-4 text-sm leading-relaxed text-[#CCCCCC]">
          {answer}
        </div>
      )}
    </div>
  );
}
