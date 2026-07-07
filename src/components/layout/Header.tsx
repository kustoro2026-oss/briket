"use client";

import { useState } from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Company",
    href: "/about-company",
    children: [
      { label: "CV. Djavacoal Indonesia", href: "/about-company#cv-djavacoal-indonesia" },
      { label: "Team", href: "/about-company#djavacoals-team" },
      { label: "What We Do", href: "/about-company#what-we-do" },
      { label: "Legal & Certificate", href: "/about-company#legal-certificate" },
      { label: "Factory", href: "/about-company#factory" },
      { label: "Our Gallery", href: "/about-company#our-gallery" },
    ],
  },
  {
    label: "Our Products",
    href: "/our-products",
    children: [
      { label: "Coconut Shisha Charcoal", href: "/our-products/coconut-shell-charcoal-briquette-" },
      { label: "Barbeque Charcoal", href: "/our-products/barbeque-charcoal-briquette" },
      { label: "Sawdust Charcoal", href: "/our-products/sawdust-charcoal" },
      { label: "Natural Wood Charcoal", href: "/our-products/natural-wood-charcoal" },
      { label: "Djavacoal Brands", href: "/our-products/djavacoal-brand" },
    ],
  },
  {
    label: "Production Info",
    href: "/production-info",
    children: [
      { label: "Production Process", href: "/production-info#production-process" },
      { label: "MOQ & Payment Terms", href: "/production-info#moq-payment-terms" },
      { label: "Shipment Terms", href: "/production-info#shipment-terms" },
      { label: "Packaging Options", href: "/production-info#packaging-info" },
      { label: "FAQ", href: "/production-info#faqs" },
    ],
  },
  {
    label: "News & Articles",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[101] bg-primary/95 backdrop-blur-xl flex items-center justify-between h-24" style={{ minHeight: "96px" }}>
      {/* Gold accent bar */}
      <div className="bg-secondary absolute bottom-0 left-0 h-0.5 w-full" />

      {/* Logo */}
      <Link href="/" className="px-6 text-lg font-semibold lg:ml-[50px] flex-shrink-0">
        <img src="https://djavacoal.com/images/logo.png" alt="Djavacoal" className="h-auto w-34" style={{ width: "136px" }} />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-x-4 h-full">
        {navItems.map((item) => {
          const isDropdown = !!item.children;
          return (
            <div
              key={item.label}
              className={`relative h-full ${isDropdown ? "border-b-2 border-transparent" : ""}`}
              onMouseEnter={() => isDropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {isDropdown ? (
                <button
                  className="flex items-center gap-1 min-w-10 md:min-w-20 px-2 h-full text-sm lg:text-base text-white hover:bg-[#B87C22] transition-colors"
                >
                  {item.label}
                  <HiChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center min-w-10 md:min-w-20 px-2 h-full text-sm lg:text-base transition-colors ${
                    item.label === "Home" ? "text-secondary" : "text-white hover:bg-[#B87C22]"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {isDropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 z-50 w-[326px] bg-[#353535]/90 backdrop-blur-lg border border-[#353535] rounded-b-lg py-2 opacity-100 visible translate-y-0 scale-y-100 transition-all duration-300">
                  {item.children!.map((child, idx) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`block px-4 py-2 text-base text-white hover:bg-[#3B5952] hover:font-bold transition-colors duration-300 ${
                        idx < item.children!.length - 1 ? "border-b border-[#3A3A3A]" : ""
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Language Switcher */}
      <div className="hidden lg:flex items-center px-6 py-4 lg:mr-[50px] gap-2">
        <button className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 hover:shadow-lg focus:ring-2 focus:ring-secondary transition-all duration-200">
          <img src="https://flagsapi.com/GB/flat/64.png" alt="EN" className="w-5 h-auto rounded-sm" />
          <span className="text-base text-white">EN</span>
        </button>
        <button className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 hover:shadow-lg focus:ring-2 focus:ring-secondary transition-all duration-200 opacity-60 hover:opacity-100">
          <img src="https://flagsapi.com/SA/flat/64.png" alt="AR" className="w-5 h-auto rounded-sm" />
          <span className="text-base text-white">AR</span>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden flex flex-col items-center justify-center gap-1.5 h-10 w-10 rounded-md mr-4 hover:bg-white/10 focus:ring-2 focus:ring-secondary transition-colors"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 transition-opacity lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-80 max-w-[85vw] bg-[#1a1a1a] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo + Close */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <img src="https://djavacoal.com/images/logo.png" alt="Djavacoal" className="h-7 w-auto" />
          <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-1.5 hover:bg-white/10 rounded-md transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <p className="px-3 py-1 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Menu</p>
          {navItems.map((item) => {
            const isDropdown = !!item.children;
            return (
              <div key={item.label} className="mb-0.5">
                {isDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-white/90 hover:bg-white/[0.07] transition-colors"
                    >
                      {item.label}
                      <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-3 border-l-2 border-secondary/30 pl-3 py-1 space-y-0.5">
                        {item.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-secondary hover:bg-white/[0.05] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      item.label === "Home"
                        ? "bg-secondary/15 text-secondary"
                        : "text-white/90 hover:bg-white/[0.07]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Language Switcher */}
        <div className="border-t border-white/10 px-5 py-4">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Language</p>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/15 text-secondary text-sm font-medium">
              <img src="https://flagsapi.com/GB/flat/64.png" alt="EN" className="w-5 h-auto rounded-sm" />
              English
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md text-white/60 hover:text-white hover:bg-white/[0.07] text-sm font-medium transition-colors">
              <img src="https://flagsapi.com/SA/flat/64.png" alt="AR" className="w-5 h-auto rounded-sm" />
              العربية
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
