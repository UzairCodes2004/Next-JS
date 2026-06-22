import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Alias @prisma/client to the generated folder
    // config.resolve.alias['@prisma/client'] = require.resolve('./app/generated/prisma');
    return config;
  },
};

export default nextConfig;