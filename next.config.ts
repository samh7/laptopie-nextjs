import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    /* config options here */
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    // ignoreTypeErrors: true,
  },
};

export default nextConfig;
