const path = require("path");

module.exports = {
  mode: "none",
  entry: "./example/main.tsx",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|mdx)$/,
        use: [path.resolve(__dirname, "dist/loader.js"), "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "mdx"],
  },
};
