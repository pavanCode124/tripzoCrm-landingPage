/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hides the floating Next.js dev badge in the bottom-left corner. Dev-only
  // chrome — it never shipped to production, but it sits on top of the page
  // while you are reviewing the design.
  devIndicators: false,
};

export default nextConfig;
