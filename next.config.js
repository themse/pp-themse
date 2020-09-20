const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: {
    // webpack config properties
  },
  env: {
    // environment
  },
};

module.exports = withBundleAnalyzer(nextConfig);
