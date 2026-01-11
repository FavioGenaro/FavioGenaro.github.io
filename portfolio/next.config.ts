import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/FavioGenaro.github.io", 
  // assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
