"use client";

import ContactForm from "@/components/ui/ContactForm";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className="bg-primary">
      {/* Banner */}
      <section className="bg-[#1C1C1C] text-white relative w-full overflow-hidden">
        <div className="relative h-48 w-full md:h-72">
          <img
            src="https://djavacoal.com/images/bg-banner-ContactUs.png"
            alt="Contact Us Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white">Contact Us</h1>
              <p className="text-white/70 mt-1 text-lg">Free Sample Djavacoal Indonesia</p>
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
              {/* Centered Logo SVG */}
              <img
                src="https://djavacoal.com/svgs/logoContactUs.svg"
                alt="Djavacoal"
                className="h-auto w-[300px] mb-10"
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
                    <h4 className="text-base font-semibold text-[#EFA12D]">E-Mail</h4>
                    <a href="mailto:djavacoal@gmail.com" className="text-sm text-[#d9dce0] hover:text-secondary">
                      djavacoal@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-6 h-6" fill="#EFA12D">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#EFA12D]">Phone</h4>
                    <a
                      href="https://wa.me/6282126572600"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#d9dce0] hover:text-secondary"
                    >
                      +6282126572600
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 384 512" className="w-6 h-6" fill="#EFA12D">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#EFA12D]">Location</h4>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#d9dce0] hover:text-secondary"
                    >
                      Dusun II, Wirogunan, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57166
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex gap-3">
                <a href="https://facebook.com/djavacoal" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
                  <FaFacebookF className="w-[18px] h-[18px] text-gray-200" />
                </a>
                <a href="https://linkedin.com/company/djavacoal-indonesia" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
                  <FaLinkedinIn className="w-[18px] h-[18px] text-gray-200" />
                </a>
                <a href="https://instagram.com/djavacharcoal" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
                  <FaInstagram className="w-[18px] h-[18px] text-gray-200" />
                </a>
                <a href="https://tiktok.com/@djavacoal" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
                  <FaTiktok className="w-[18px] h-[18px] text-gray-200" />
                </a>
              </div>
            </div>

            {/* Right: Contact Form + Map */}
            <div className="flex flex-col gap-8 md:w-1/2">
              {/* Contact Form - orange background */}
              <div className="bg-[#EFA12D] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Send Us a Message</h3>
                <ContactForm />
              </div>

              {/* Google Maps */}
              <div className="aspect-[3/2] w-full overflow-hidden rounded-lg md:aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3120666838836!2d110.72521280000001!3d-7.5409051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15004c3164cd%3A0xac187c8c3e62cd72!2sDjavacoal%20Indonesia%20-%20Charcoal%20Factory!5e0!3m2!1sen!2sid!4v1764246566129!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Djavacoal Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
