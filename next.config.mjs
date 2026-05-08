/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel.live https://*.vercel.app https://*.vercel.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com https://*.gstatic.com https://*.vercel.com https://vercel.live https://*.vercel.live https://*.vercel.app https://*.public.blob.vercel-storage.com",
      "connect-src 'self' https: wss: blob:",
      "media-src 'self' data: blob: https:",
      "frame-src 'self' https://vercel.live https://*.vercel.live https://*.vercel.app https://*.vercel.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join("; ")
  }
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
