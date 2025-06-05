/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // (if you want to disable optimization for static export)
  },
  // any other config you need
}

module.exports = nextConfig;
