import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vercel.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: true,
  experimental: {
    serverComponentsExternalPackages: ['nodemailer'],
  },
  output: 'standalone',
};

export default nextConfig;