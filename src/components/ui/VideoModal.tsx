"use client";

import Image from "next/image";

interface VideoModalProps {
  videoId?: string;
  thumbnailUrl?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ videoId, thumbnailUrl, isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : undefined;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl mx-4 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 text-sm uppercase tracking-wider"
        >
          Close
        </button>
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-lg"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-white text-lg">
            Video not available
          </div>
        )}
      </div>
    </div>
  );
}

export function VideoThumbnail({ videoId, thumbnailUrl }: { videoId?: string; thumbnailUrl?: string }) {
  const youtubeThumb = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : thumbnailUrl || "https://djavacoal.com/images/thumbnail-yt.jpg"

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#FFFFFF20] bg-[#1A1A1A] shadow-lg cursor-pointer group">
      <Image
        src={youtubeThumb}
        alt="Company Video"
        width={1280}
        height={720}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full bg-[#EFA12D] flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
        </div>
      </div>
    </div>
  );
}
