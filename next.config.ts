import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static HTML export — replaces the removed `next export` command
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
