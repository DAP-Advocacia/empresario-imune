import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.empresarioimune.com.br",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://admin.empresarioimune.com.br/wp-admin",
        permanent: false,
      },
      {
        source: "/login",
        destination: "https://admin.empresarioimune.com.br/wp-login.php",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
