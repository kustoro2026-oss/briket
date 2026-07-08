"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  const phone = "+628818786988";
  const message = "Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-all duration-300 hover:bg-[#1ebe57] hover:shadow-xl hover:scale-105 active:scale-95 group"
    >
      <FaWhatsapp className="w-6 h-6 shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">
        Chat with Us
      </span>
    </a>
  );
}
