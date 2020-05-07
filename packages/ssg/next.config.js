module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".mdx");
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: "mdxx-loader",
          options: {
            amp: true,
          },
        },
      ],
    });
    return config;
  },
};
