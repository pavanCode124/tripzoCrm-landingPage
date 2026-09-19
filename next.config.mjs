/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hides the floating Next.js dev badge in the bottom-left corner. Dev-only
  // chrome; it never shipped to production.
  devIndicators: false,
  images: {
    // AVIF first (roughly half the size of WebP for these screenshots), WebP
    // for browsers without it. The PNG/JPEG sources are never sent as-is.
    formats: ['image/avif', 'image/webp'],
    // Required allowlist since Next 16. 75 for photographs, 85 for UI
    // screenshots, where small text softens visibly at 75.
    qualities: [75, 85],
    // Only the landing page's own images may go through the optimiser.
    localPatterns: [{ pathname: '/shots/**' }, { pathname: '/_next/static/media/**' }],
    // Optimised files are content-hashed, so they can be cached for a month.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
