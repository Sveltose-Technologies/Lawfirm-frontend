/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // --- CHANGE 1: Enable Static Export ---
  output: "export",

  // 1. Minification (Aapka setting)
  swcMinify: false,

  // 2. Images Config
  images: {
    // --- CHANGE 2: Static Export ke liye ye zaroori hai ---
    unoptimized: true,
    domains: ["images.unsplash.com", "images.pexels.com"],
  },

  // 3. Build Optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
