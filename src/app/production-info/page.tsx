"use client";

import { useState } from "react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { getFaqs, getProductionSteps, getPackaging } from "@/lib/data";

const sections = [
  { id: "production-process", label: "Production Process" },
  { id: "moq-payment-terms", label: "MOQ & Payment Terms" },
  { id: "shipment-terms", label: "Shipment Terms" },
  { id: "packaging-info", label: "Packaging Info" },
  { id: "faqs", label: "FAQ" },
];

export default function ProductionInfoPage() {
  const [activeSection, setActiveSection] = useState("production-process");
  const faqs = getFaqs();
  const steps = getProductionSteps();
  const packaging = getPackaging();

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary">
      {/* Banner */}
      <section className="bg-[#1C1C1C] text-white relative w-full overflow-hidden">
        <div className="relative h-48 w-full md:h-72">
          <img
            src="https://djavacoal.com/images/bg-banner-ProductionProcess.png"
            alt="Production Process Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-white">Production Info</h1>
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
      <div className="mx-auto max-w-7xl px-5 py-0 pb-10 md:px-10 md:py-16 lg:mx-0 lg:max-w-none lg:px-0 lg:py-0 lg:mr-10">
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
            {/* Production Process */}
            <section id="production-process" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Production Process</span>
                  <h2 className="text-xl font-semibold text-white mt-1">How We Craft Quality Charcoal for Global Markets</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 px-5 pb-8 md:grid-cols-3 md:px-10">
                  {steps.map((step, i) => (
                    <div
                      key={step.step}
                      className="flex flex-col justify-start rounded-xl bg-[#222222] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="relative mb-4 w-full overflow-hidden rounded-xl">
                        <img
                          src={step.illustration}
                          alt={step.title}
                          className="aspect-square h-auto w-full rounded-xl object-cover"
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

            {/* MOQ & Payment Terms */}
            <section id="moq-payment-terms" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">MOQ & Payment Terms</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Minimum Order & Payment Terms</h2>
                </div>
                <div className="px-5 pb-8 md:px-10">
                  <h3 className="text-base font-semibold text-white mb-4">T/T (Telegraphic Transfer)</h3>
                  <p className="text-sm text-[#CCCCCC] mb-6">
                    We accept Telegraphic Transfer (T/T) for all international transactions, ensuring secure and reliable payments.
                  </p>
                  <table className="w-full border-collapse">
                    <tbody>
                      {[
                        { label: "MOQ:", value: "20\" Container (18 Tons) / 40\" Container (26 Tons)" },
                        { label: "Payment Method:", value: "T/T (Telegraph Transfer)" },
                        { label: "Payment Structure:", value: "50% Advance Payment, 50% Balance Before Shipment (Can Be Discussed)" },
                        { label: "Shipment Terms:", value: "Freight On Board (FOB)" },
                        { label: "Currency:", value: "$USD" },
                        { label: "Lead Time:", value: "Approx. 4–6 Weeks After Confirmation & Down Payment" },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#848484]" style={{ backgroundColor: i % 2 === 0 ? "#262626" : "#323232" }}>
                          <td className="py-3 px-3 text-sm text-white font-normal w-[180px] border-r border-[#848484]">{row.label}</td>
                          <td className="py-3 px-3 text-sm text-white font-normal">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Shipment Terms */}
            <section id="shipment-terms" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Shipment Terms</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Reliable Shipping with FOB Terms</h2>
                </div>
                <div className="flex flex-col items-start gap-6 px-5 pb-6 md:grid md:grid-cols-[minmax(0,309px)_1fr]">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg md:aspect-4/3 md:max-h-[350px] lg:aspect-square lg:h-auto lg:max-h-[500px] lg:max-w-[500px]">
                    <img
                      src="https://djavacoal.com/images/shipment.png"
                      alt="Shipment"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">FOB (Free On Board)</h3>
                    <p className="text-sm leading-relaxed text-[#CCCCCC]">
                      At Grow With Fakhri, all international shipments are provided under{" "}
                      <strong className="text-white">FOB (Free On Board)</strong> terms. This means we
                      take full responsibility for <strong className="text-white">preparing, packaging</strong>,{" "}
                      and delivering your order safely to the <strong className="text-white">designated port in Indonesia</strong>,
                      covering all local costs until the goods are loaded on board the vessel. From that
                      point, our buyers have the freedom to arrange their preferred shipping line,
                      insurance, and logistics. With access to major international ports in Jakarta,
                      Semarang, and Surabaya, we ensure smooth, efficient, and cost-effective export
                      handling for our global partners.
                    </p>
                    <h4 className="text-sm font-semibold text-white mt-6 mb-3">Available Ports</h4>
                    <ul className="space-y-2">
                      {["Jakarta (Tanjung Priok)", "Semarang (Tanjung Emas)", "Surabaya (Tanjung Perak)"].map((port) => (
                        <li key={port} className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EFA12D]" />
                          {port}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Packaging Info */}
            <section id="packaging-info" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222] mb-12">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">Packaging Option</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Flexible Packaging to Suit Your Business Needs</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 px-5 pb-8 md:grid-cols-3 md:px-10">
                  {packaging.map((pkg) => (
                    <div key={pkg.id} className="group">
                      <div className="relative aspect-square max-h-none w-full max-w-none overflow-hidden rounded-xl transition-all duration-300">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="h-full w-full object-cover rounded-xl"
                        />
                        <div className="absolute top-0 left-0 z-10 h-1/3 w-full rounded-t-xl bg-gradient-to-b from-black/70 to-transparent" />
                      </div>
                      <h3 className="mt-3 text-base font-semibold text-[#EFA12D]">{pkg.name}</h3>
                      <p className="text-sm leading-relaxed text-[#CCCCCC] mt-1">
                        {pkg.description.split(". ").slice(0, 1)[0]}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faqs" className="scroll-mt-28">
              <div className="rounded-xl bg-[#222222]">
                <div className="p-5 md:p-10">
                  <span className="text-sm font-medium tracking-wide text-[#60A5FF] italic">FAQ</span>
                  <h2 className="text-xl font-semibold text-white mt-1">Frequently Ask Question</h2>
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
