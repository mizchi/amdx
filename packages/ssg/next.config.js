module.exports = {
  // Public, build-time env vars.
  // https://nextjs.org/docs#build-time-configuration
  webpack(config) {
    config.module.loaders.push({
      test: /\.mdx?/,
      loader: "mdxx-loader",
    });
    return config;
  },
};
