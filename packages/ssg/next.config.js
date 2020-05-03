module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".mdx");
    config.module.rules.push({
      test: /\.mdx?/,
      loader: "mdxx-loader/lib/amp",
    });
    return config;
  },
};
