import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
};

export default nextConfig;
