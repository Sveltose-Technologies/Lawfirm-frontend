/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // --- YAHAN SE '//' HATA DEIN (Ye line active honi chahiye) ---
  output: "export", 

  swcMinify: false,
  
  images: {
    unoptimized: true, // Ye bhi zaroori hai
    domains: ["images.unsplash.com", "images.pexels.com"],
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;

