import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Hindari webpack me-watch folder public/images yang besar (251MB+)
  // agar dev server tidak lambat dan tidak compile ulang terus.
  // NOTE: Hanya berlaku saat menggunakan webpack (next dev --webpack)
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: /public[\\/]images/,
        poll: false,
      };
    }
    return config;
  },
  // Konfigurasi Turbopack (Next.js 16 default) - wajib ada agar Vercel build tidak error
  turbopack: {},
};

export default nextConfig;
