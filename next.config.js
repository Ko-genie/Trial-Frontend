// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "*.bluestone.com", // Allow all subdomains of bluestone.com
      // },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5001",
      },
      {
        protocol: "https",
        hostname: "kogenie.com", // For production
      },
    ],
  },
};

module.exports = nextConfig;
