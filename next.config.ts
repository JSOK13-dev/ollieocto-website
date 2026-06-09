import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.ollieocto.com"
          }
        ],
        destination: "https://ollieocto.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
