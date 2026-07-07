"use client";

import { useState } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 ${className}`}>
        {images.slice(0, 6).map((img, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group relative"
            onClick={() => openLightbox(i)}
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${img})` }}
            />
            {i === 5 && images.length > 6 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">+{images.length - 6} more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <HiX className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
          >
            <HiChevronLeft className="w-10 h-10" />
          </button>
          <div
            className="max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-full max-h-[80vh] bg-contain bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url(${images[currentIndex]})`, minWidth: "300px", minHeight: "300px" }}
            />
            <p className="text-center text-white/70 mt-4 text-sm">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
          >
            <HiChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  );
}
