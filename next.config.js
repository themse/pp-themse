const withPlugins = require("next-compose-plugins");
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
module.exports = withPlugins([withBundleAnalyzer], nextConfig);

/*
e.g. Advanced

const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");
const BundleAnalyzerPlugin = require("@next/bundle-analyzer");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()],
      },
    };
    return defaultConfig;
  }
};
*/
