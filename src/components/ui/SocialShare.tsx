"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLink } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

export default function SocialShare({ url, title, className = "" }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-sky-500 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-700 hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-green-500 hover:text-white",
    },
    {
      name: "Email",
      icon: HiMail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      color: "hover:bg-gray-600 hover:text-white",
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 transition-colors ${link.color}`}
          title={link.name}
        >
          <link.icon className="w-3.5 h-3.5" />
        </a>
      ))}
      <button
        onClick={copyLink}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
        title="Copy Link"
      >
        <FaLink className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
