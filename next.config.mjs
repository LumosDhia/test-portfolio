/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Exclude webpack cache from build output
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Exclude cache directories from build
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-*/**/*',
        'node_modules/.cache/**/*',
        'node_modules/.next/cache/**/*',
        'cache/**/*'
      ]
    }
  }
};

export default nextConfig;
