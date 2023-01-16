/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
