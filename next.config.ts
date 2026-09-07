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
      {
        source: '/icon-48x48.png',
        destination: '/koin/icon-48x48.png',
        basePath: false,
        permanent: false,
      },
      {
        source: '/icon-96x96.png',
        destination: '/koin/icon-96x96.png',
        basePath: false,
        permanent: false,
      },
      {
        source: '/icon-192x192.png',
        destination: '/koin/icon-192x192.png',
        basePath: false,
        permanent: false,
      },
      {
        source: '/apple-touch-icon.png',
        destination: '/koin/apple-touch-icon.png',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
