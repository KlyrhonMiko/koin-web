import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/koin',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/koin',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
