"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

const companyLinks = [
  { label: "Grow With Fakhri", href: "/about-company#grow-with-fakhri" },
  { label: "Grow With Fakhri's Team", href: "/about-company#grow-with-fakhris-team" },
  { label: "Legal & Certificate", href: "/about-company#legal-certificate" },
  { label: "Factory", href: "/about-company#factory" },
  { label: "Our Gallery", href: "/about-company#our-gallery" },
];

const productLinks = [
  { label: "Coconut Shisha Charcoal Briquette", href: "/our-products/coconut-shell-charcoal-briquette-" },
  { label: "Barbeque Charcoal Briquette", href: "/our-products/barbeque-charcoal-briquette" },
  { label: "Sawdust Charcoal", href: "/our-products/sawdust-charcoal" },
  { label: "Natural Wood Charcoal", href: "/our-products/natural-wood-charcoal" },
  { label: "Grow With Fakhri Brand", href: "/our-products/grow-with-fakhri-brand" },
];

const quickLinks = [
  { label: "Production Process", href: "/production-info#production-process" },
  { label: "Shipment Terms", href: "/production-info#shipment-terms" },
  { label: "MOQ & Payment Terms", href: "/production-info#moq-payment-terms" },
  { label: "Packaging Info", href: "/production-info#packaging-info" },
  { label: "FAQ", href: "/production-info#faqs" },
  { label: "News & Article", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-t-secondary text-gray-200">
      {/* Background image overlay */}
      <img
        src="https://djavacoal.com/images/bg-footer.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 mx-auto grid grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-4">
        {/* Column 1 - Company */}
        <div>
          <Link href="/" className="mb-4 inline-block">
            <img src="/images/logo-brand-baru.png" alt="Grow With Fakhri" className="h-12 w-auto" />
          </Link>
          <h3 className="text-secondary border-secondary mb-2 border-b-2 pb-1 text-base font-bold sm:text-xl">
            Company
          </h3>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-gray-200 hover:underline md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - Products */}
        <div>
          <h3 className="text-secondary border-secondary mb-2 border-b-2 pb-1 text-base font-bold sm:text-xl">
            Products
          </h3>
          <ul className="space-y-2">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="decoration-secondary text-xs text-gray-200 hover:underline md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Quick Link */}
        <div>
          <h3 className="text-secondary border-secondary mb-2 border-b-2 pb-1 text-base font-bold sm:text-xl">
            Quick Link
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-gray-200 hover:underline md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact Us */}
        <div>
          <h3 className="mb-2 pb-1 text-base font-bold text-gray-200 sm:text-xl">
            Contact Us
          </h3>

          {/* Address */}
          <div className="mb-3 flex items-start gap-2">
            <svg className="mt-1 size-8 shrink-0 self-center md:size-6" viewBox="0 0 384 512" fill="currentColor">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <a
              href="https://maps.app.goo.gl/ZYx7CCSZSgdDETRNA"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-secondary text-sm text-gray-200 hover:underline md:text-base"
            >
              Grow With Fakhri - Dusun II, Wirogunan, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57166
            </a>
          </div>

          {/* Phone */}
          <div className="mb-3 flex items-center gap-2">
            <svg className="size-4 shrink-0" viewBox="0 0 512 512" fill="currentColor">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <p className="text-sm font-bold text-gray-200 md:text-base">Phone :</p>
            <a
              href="https://wa.me/+628818786988"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-secondary text-sm text-gray-200 hover:underline md:text-base"
            >
              +628818786988
            </a>
          </div>

          {/* Email */}
          <div className="mb-4 flex items-center gap-2">
            <svg className="size-4 shrink-0 md:size-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            <p className="text-sm font-bold text-gray-200 md:text-base">E-mail :</p>
            <a
              href="mailto:growwithfakhri@gmail.com"
              className="decoration-secondary text-sm text-gray-200 hover:underline md:text-base"
            >
              growwithfakhri@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <FaFacebookF className="w-4 h-4 text-gray-200" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <FaLinkedinIn className="w-4 h-4 text-gray-200" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <FaInstagram className="w-[18px] h-[18px] text-gray-200" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="border bg-transparent p-2 hover:bg-gray-500 transition-colors">
              <FaTiktok className="w-4 h-4 text-gray-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative py-4 text-center text-xs text-white">
        &copy; Copyright 2026 &middot; CV. Grow With Fakhri
      </div>
    </footer>
  );
}
