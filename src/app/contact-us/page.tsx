import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact & Request for Quotation",
  description:
    "Contact the Charcoalnesia export sales team. Structured request for quotation form covering product, quantity, packaging, destination, and incoterm.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-primary">
      {/* Banner */}
      <section className="bg-[#1C1C1C] text-white relative w-full overflow-hidden">
        <div className="relative h-48 w-full md:h-72">
          <Image
            src="/images/contact/contact-banner.png"
            alt="Contact Charcoalnesia"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <h1
                className="text-2xl font-semibold text-white md:text-4xl"
                style={{ fontFamily: "var(--font-josefin-sans)" }}
              >
                Export Sales &amp; Request for Quotation
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#1C1C1C]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-10">
            {/* Left: Contact Info + Logo */}
            <div className="flex flex-col items-center md:w-1/2">
              {/* Centered Logo */}
              <Image
                src="/images/logo-brand-baru.png"
                alt="Charcoalnesia"
                width={120}
                height={48}
                className="h-auto w-[120px] mb-10"
              />

              {/* Contact Info Items */}
              <div className="space-y-6 w-full max-w-md">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-6 h-6" fill="#EFA12D">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#EFA12D]">Export Sales E-mail</h4>
                    <a
                      href="mailto:charcoalnesiaglobalexport@gmail.com"
                      className="text-sm text-[#d9dce0] hover:text-secondary"
                    >
                      charcoalnesiaglobalexport@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-6 h-6" fill="#EFA12D">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#EFA12D]">WhatsApp</h4>
                    <a
                      href="https://wa.me/628212991650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#d9dce0] hover:text-secondary"
                    >
                      +62 821-2991-650
                    </a>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 384 512" className="w-6 h-6" fill="#EFA12D">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#EFA12D]">Registered Office</h4>
                    <p className="text-sm text-[#d9dce0]">
                      Jl. Menara 9 Blok 146 No. 14, Meruya Selatan, Kembangan, Jakarta Barat,
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons - verified only */}
              <div className="mt-8 flex gap-3">
                <a
                  href="https://www.instagram.com/charcoal_nesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Charcoalnesia on Instagram"
                  className="border border-gray-500 bg-transparent p-2.5 hover:bg-gray-500 transition-colors"
                >
                  <FaInstagram className="w-[18px] h-[18px] text-gray-200" />
                </a>
              </div>
            </div>

            {/* Right: Structured RFQ Form */}
            <div className="flex flex-col gap-8 md:w-1/2">
              <div className="bg-[#EFA12D] rounded-lg p-6">
                <h2
                  className="mb-1 text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-josefin-sans)" }}
                >
                  Request for Quotation
                </h2>
                <p className="mb-4 text-sm text-white/85">
                  Complete the structured fields below - commercial terms are confirmed by product,
                  packaging, quantity, and destination.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
