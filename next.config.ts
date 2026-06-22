import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const repoName = isProd ? '/AdrianTarantino.github.io' : '';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  basePath: repoName,
  assetPrefix: repoName,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;