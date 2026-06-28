import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/dental-clinic',
  assetPrefix: '/dental-clinic/',
  images: {
    unoptimized: true,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
