module.exports = {
  webpack(config) {
    // console.log(config);

    config.resolve.extensions.push(".mdx");
    config.module.rules.push({
      test: /\.mdx?/,
      loader: "mdxx-loader/lib/amp",
    });
    return config;
  },
};
