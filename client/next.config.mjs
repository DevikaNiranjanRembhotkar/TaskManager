/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
