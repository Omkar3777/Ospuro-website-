import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ ADD THIS
  },
};

export default nextConfig;