"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  const phone = "+628212991650";
  const message = "Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products";

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .wa-pulse::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: #25D366;
          animation: pulse-ring 2s cubic-bezier(0.25, 0, 0.25, 1) infinite;
          z-index: -1;
        }
      `}</style>
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-pulse fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#1ebe57] hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 active:scale-95"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </>
  );
}
