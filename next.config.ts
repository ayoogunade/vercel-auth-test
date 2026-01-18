import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // <-- This enables the /app router
  },
};

export default nextConfig;
