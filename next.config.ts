import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static HTML export — replaces the removed `next export` command
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
