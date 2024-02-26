/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  experimental: { esmExternals: true },
};

export default nextConfig;
