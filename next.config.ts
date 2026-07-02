import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/game-platform",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/game-platform",
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;