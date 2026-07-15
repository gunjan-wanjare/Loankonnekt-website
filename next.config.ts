import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static HTML export — replaces the removed `next export` command
  output: "export",
  // So /privacy/ works on static hosts (nginx/S3) as privacy/index.html
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
