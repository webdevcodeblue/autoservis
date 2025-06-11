/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/autoserviskatanovic',
  assetPrefix: '/autoserviskatanovic/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
