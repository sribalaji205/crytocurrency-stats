/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  images: {
    domains: ['s3.us-east-2.amazonaws.com', 'image.cnbcfm.com'],
  }, nextConfig
}
