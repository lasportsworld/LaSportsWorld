import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lasportsworld.com",
      },
      {
        protocol: "http",
        hostname: "staging.lasportsworld.com",
      },
    ],
  },
};

export default nextConfig;
