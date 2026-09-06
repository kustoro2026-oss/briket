"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Products",
    href: "/our-products",
    children: [
      { label: "Cube Briquettes", href: "/our-products/cube-briquettes" },
      { label: "Hexagonal Briquettes", href: "/our-products/hexagonal-briquettes" },
      { label: "Finger Briquettes", href: "/our-products/finger-briquettes" },
      { label: "Flower Briquettes", href: "/our-products/flower-briquettes" },
    ],
  },
  {
    label: "Quality & Production",
    href: "/production-info",
  },
  {
    label: "Packaging",
    href: "/production-info#packaging-info",
  },
  {
    label: "Export Information",
    href: "/production-info#export-dg",
  },
  {
    label: "About",
    href: "/about-company",
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
    <>
      <nav className="fixed top-0 left-0 right-0 z-[101] bg-primary/95 backdrop-blur-xl flex items-center justify-between h-24" style={{ minHeight: "96px" }}>
        {/* Gold accent bar */}
        <div className="bg-secondary absolute bottom-0 left-0 h-0.5 w-full" />

        {/* Logo */}
        <Link href="/" className="px-6 text-lg font-semibold lg:ml-[50px] flex-shrink-0">
          <Image src="/images/logo-brand-baru.png" alt="Charcoalnesia" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-2 h-full">
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
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center min-w-10 md:min-w-20 px-2 h-full text-sm lg:text-base transition-colors text-white hover:bg-[#B87C22]`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {isDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 z-50 w-[280px] bg-[#353535]/90 backdrop-blur-lg border border-[#353535] rounded-b-lg py-2">
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

        {/* Request Quotation CTA */}
        <div className="hidden lg:flex items-center px-6 lg:mr-[50px]">
          <Link
            href="/contact-us"
            className="flex items-center justify-center rounded-[40px] bg-secondary px-6 py-3 text-sm font-bold text-white whitespace-nowrap transition-all duration-300 hover:bg-[#B87C22]"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            Request Quotation
          </Link>
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
      </nav>

      {/* Mobile Overlay - di luar nav agar tidak kena backdrop-blur */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/70 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-[210] h-full w-80 max-w-[85vw] bg-[#151515] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo + Close */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Image src="/images/logo-brand-baru.png" alt="Charcoalnesia" width={96} height={24} className="h-6 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-wide transition-colors"
          >
            Close menu
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          {navItems.map((item) => {
            const isDropdown = !!item.children;
            return (
              <div key={item.label} className="mb-1">
                {isDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-1.5 py-2.5 text-base font-semibold text-white hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                    <div className="border-l-2 border-secondary/40 ml-2 pl-4 py-1 space-y-0.5">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-white/90 hover:text-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-base font-semibold text-white hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center rounded-[40px] bg-secondary px-6 py-3.5 text-base font-bold text-white"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            Request Quotation
          </Link>
        </nav>
      </div>
    </>
  );
}
