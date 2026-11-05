import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  // The EnrollRise popup script (enrollrise-popup.js) frames `/e/<code>`
  // relative to the host page, so send those requests to EnrollRise.
  redirects() {
    return [
      {
        source: "/e/:code",
        destination: "https://enrollrise.com/e/:code",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
