const path = require("path");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "./main.tsx"),
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(mdx)$/,
        use: [path.resolve(__dirname, "../lib/index.js")],
      },
      {
        test: /\.(tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "mdx"],
  },
};
