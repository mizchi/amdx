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
        test: /\.(mdx)$/,
        use: [path.resolve(__dirname, "dist/loader.js")],
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "mdx"],
  },
};
