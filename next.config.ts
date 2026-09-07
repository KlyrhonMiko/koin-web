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
      {
        source: '/favicon.ico',
        destination: '/koin/favicon.ico',
        basePath: false,
        permanent: false,
      },
      {
        source: '/logo.png',
        destination: '/koin/logo.png',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
