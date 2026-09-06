import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

const companyLinks = [
  { label: "About Charcoalnesia", href: "/about-company" },
  { label: "News & Articles", href: "/blog" },
  { label: "FAQ", href: "/production-info#faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

const productLinks = [
  { label: "Cube Briquettes", href: "/our-products/cube-briquettes" },
  { label: "Hexagonal Briquettes", href: "/our-products/hexagonal-briquettes" },
  { label: "Finger Briquettes", href: "/our-products/finger-briquettes" },
  { label: "Flower Briquettes", href: "/our-products/flower-briquettes" },
];

const quickLinks = [
  { label: "Quality Grades & Specification", href: "/production-info#quality-grades" },
  { label: "Production Process", href: "/production-info#production-process" },
  { label: "Packaging Info", href: "/production-info#packaging-info" },
  { label: "Export & DG Information", href: "/production-info#export-dg" },
  { label: "Shipment Terms", href: "/production-info#shipment-terms" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-t-secondary bg-primary text-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-10">
        {/* ===== LOGO (centered) ===== */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/images/logo-brand-baru.png"
              alt="Charcoalnesia"
              width={160}
              height={55}
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* ===== SOCIAL MEDIA (centered) ===== */}
        <div className="flex justify-center gap-4 mb-10">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Charcoalnesia on Facebook" className="border border-gray-500 bg-transparent p-2.5 hover:bg-gray-500 transition-colors">
            <FaFacebookF className="w-4 h-4 text-gray-200" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Charcoalnesia on LinkedIn" className="border border-gray-500 bg-transparent p-2.5 hover:bg-gray-500 transition-colors">
            <FaLinkedinIn className="w-4 h-4 text-gray-200" />
          </a>
          <a href="https://www.instagram.com/charcoal_nesia" target="_blank" rel="noopener noreferrer" aria-label="Charcoalnesia on Instagram" className="border border-gray-500 bg-transparent p-2.5 hover:bg-gray-500 transition-colors">
            <FaInstagram className="w-[18px] h-[18px] text-gray-200" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="Charcoalnesia on TikTok" className="border border-gray-500 bg-transparent p-2.5 hover:bg-gray-500 transition-colors">
            <FaTiktok className="w-4 h-4 text-gray-200" />
          </a>
        </div>

        {/* ===== ROW 1: Company | Products ===== */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 md:gap-16">
          {/* Company */}
          <div className="md:pr-8">
            <h3 className="text-secondary border-secondary mb-3 border-b-2 pb-1 text-base font-bold sm:text-xl">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-200 hover:underline md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:pl-8">
            <h3 className="text-secondary border-secondary mb-3 border-b-2 pb-1 text-base font-bold sm:text-xl">
              Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-200 hover:underline md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== ROW 2: Quick Links | Contact Us ===== */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Quick Link */}
          <div className="md:pr-8">
            <h3 className="text-secondary border-secondary mb-3 border-b-2 pb-1 text-base font-bold sm:text-xl">
              Quick Link
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-200 hover:underline md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:pl-8">
            <h3 className="text-secondary border-secondary mb-3 border-b-2 pb-1 text-base font-bold sm:text-xl">
              Contact Us
            </h3>

            {/* Registered Office */}
            <div className="mb-3 flex items-start gap-2">
              <svg className="mt-1 size-5 shrink-0" viewBox="0 0 384 512" fill="currentColor">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <span className="text-sm text-gray-200 md:text-base">
                <span className="font-bold">Registered Office:</span> Jl. Menara 9 Blok 146 No. 14,
                Meruya Selatan, Kembangan, Jakarta Barat, Indonesia
              </span>
            </div>

            {/* WhatsApp */}
            <div className="mb-3 flex items-center gap-2">
              <svg className="size-4 shrink-0" viewBox="0 0 512 512" fill="currentColor">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <span className="text-sm font-bold text-gray-200 md:text-base">WhatsApp :</span>
              <a
                href="https://wa.me/628212991650"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-200 hover:underline md:text-base"
              >
                +62 821-2991-650
              </a>
            </div>

            {/* Email */}
            <div className="mb-4 flex items-center gap-2">
              <svg className="size-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              <span className="text-sm font-bold text-gray-200 md:text-base">Export Sales E-mail :</span>
              <a
                href="mailto:charcoalnesiaglobalexport@gmail.com"
                className="text-sm text-gray-200 hover:underline md:text-base"
              >
                charcoalnesiaglobalexport@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Brown Background */}
      <div className="relative bg-[#9D7B19] py-4 text-center text-sm text-white">
        &copy; Copyright 2026 &middot; PT CHARCOALNESIA GLOBAL EXPORT
      </div>
    </footer>
  );
}
