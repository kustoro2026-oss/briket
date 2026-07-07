"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200">
          <button
            onClick={() => toggle(item.id)}
            className="w-full py-4 flex items-center justify-between text-left"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            <span className="text-base font-semibold text-gray-900 pr-4">
              {item.question}
            </span>
            {openId === item.id ? (
              <HiMinus className="w-5 h-5 text-gray-600 flex-shrink-0" />
            ) : (
              <HiPlus className="w-5 h-5 text-gray-600 flex-shrink-0" />
            )}
          </button>
          {openId === item.id && (
            <div className="pb-4 text-gray-600 text-[0.95rem] leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
