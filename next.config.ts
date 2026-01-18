import type { NextConfig } from "next";

interface NextConfigExtended extends NextConfig {
  experimental?: Record<string, unknown>; // allow any extra experimental props
}

const nextConfig: NextConfigExtended = {
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
